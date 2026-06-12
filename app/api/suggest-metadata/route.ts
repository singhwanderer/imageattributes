// AI metadata suggestion endpoint (demo).
// Server-side only: GEMINI_API_KEY stays in the host's environment and is
// never shipped to the browser. If the key is missing, expired, or the call
// fails, this returns { available: false } and the wizard's manual flow
// continues exactly as before — AI is progressive enhancement, never a gate.

import { NextResponse } from "next/server"
import { GoogleGenAI, Type, type Schema } from "@google/genai"

const MODEL = "gemini-2.5-flash"

// Extended (product-level) attributes come from the real GS1 extended
// attribute code lists (lib/gs1-extended-code-lists.ts, generated from
// GS1_Extended_Attribute_Code_Lists.csv). The model chooses a VALUE from an
// attribute's list; the CODE is attached server-side by exact lookup, so the
// model can never invent or misremember a code. Values the model returns
// that are not in the list snap to the attribute's OTHER (GM04*99) entry
// where one exists, mirroring how OTHER is treated elsewhere in AC: a valid
// low-confidence signal, not a failure.
import { GS1_EXTENDED_CODE_LISTS } from "@/lib/gs1-extended-code-lists"

const EXTENDED_ATTRIBUTE_NAMES = Object.keys(GS1_EXTENDED_CODE_LISTS)

const norm = (s: string) => s.toLowerCase().replace(/\s+/g, " ").trim()

function snapToCodeList(attribute: string, value: string): { value: string; code: string | null; matched: boolean } {
  const list = GS1_EXTENDED_CODE_LISTS[attribute]
  if (!list) return { value, code: null, matched: false }
  const hit = list.find((e) => norm(e.value) === norm(value))
  if (hit) return { value: hit.value, code: hit.code, matched: true }
  const other = list.find((e) => /^..04.*99$/.test(e.code))
  return { value, code: other ? other.code : null, matched: false }
}

type EnumOption = { value: string; label: string }
type RequestBody = {
  imageBase64: string
  mimeType: string
  enums: {
    orientation: EnumOption[]
    facing: EnumOption[]
    angle: EnumOption[]
    imageStyle: EnumOption[]
  }
}

function enumPromptLine(name: string, options: EnumOption[]): string {
  return `- ${name}: choose the code whose meaning matches the image. Codes: ${options
    .map((o) => `${o.value} = ${o.label}`)
    .join("; ")}`
}

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return NextResponse.json({ available: false, reason: "no_key" }, { status: 503 })
  }

  let body: RequestBody
  try {
    body = (await request.json()) as RequestBody
  } catch {
    return NextResponse.json({ available: false, reason: "bad_request" }, { status: 400 })
  }

  const { imageBase64, mimeType, enums } = body
  if (!imageBase64 || !mimeType || !enums) {
    return NextResponse.json({ available: false, reason: "bad_request" }, { status: 400 })
  }

  const prompt = `You are suggesting image metadata and product attributes for a supplier uploading a product image to a retail catalog.

Part 1 — image metadata. For each field, return the code from its list, or null if the image does not let you decide:
${enumPromptLine("orientation", enums.orientation)}
${enumPromptLine("facing", enums.facing)}
${enumPromptLine("angle", enums.angle)}
${enumPromptLine("imageStyle", enums.imageStyle)}
- imageDescription: one short, factual sentence describing the product as shown (no marketing language), or null.

Part 2 — extended product attributes. Below are GS1 extended attributes, each with its allowed values. Return entries ONLY for attributes that are clearly visible and decidable from the image, and ONLY with a value from that attribute's list, copied exactly. Most attributes will not apply to any given product — a shoe image should yield shoe attributes (Shoe Style, Toe Shape, Heel Type, Closure...), a pants image pants attributes (Pants/Shorts Type, Waist Rise, Leg Type...). Skip every attribute the image cannot support. Returning few entries is better than guessing. For each entry: the attribute name exactly as listed, the chosen value exactly as listed, and your 0-1 confidence.

${EXTENDED_ATTRIBUTE_NAMES.map((name) => `- ${name}: ${GS1_EXTENDED_CODE_LISTS[name].map((e) => e.value).join(" | ")}`).join("\n")}

Ground every answer in the image only. Null and omission are correct answers.`

  const responseSchema: Schema = {
    type: Type.OBJECT,
    properties: {
      orientation: { type: Type.STRING, enum: enums.orientation.map((o) => o.value), nullable: true },
      facing: { type: Type.STRING, enum: enums.facing.map((o) => o.value), nullable: true },
      angle: { type: Type.STRING, enum: enums.angle.map((o) => o.value), nullable: true },
      imageStyle: { type: Type.STRING, enum: enums.imageStyle.map((o) => o.value), nullable: true },
      imageDescription: { type: Type.STRING, nullable: true },
      extended: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            attribute: { type: Type.STRING, enum: EXTENDED_ATTRIBUTE_NAMES },
            value: { type: Type.STRING },
            confidence: { type: Type.NUMBER },
          },
          required: ["attribute", "value", "confidence"],
        },
      },
    },
    required: ["orientation", "facing", "angle", "imageStyle", "imageDescription", "extended"],
  }

  try {
    const ai = new GoogleGenAI({ apiKey })
    const response = await ai.models.generateContent({
      model: MODEL,
      contents: [
        {
          role: "user",
          parts: [{ inlineData: { mimeType, data: imageBase64 } }, { text: prompt }],
        },
      ],
      config: { temperature: 0, responseMimeType: "application/json", responseSchema },
    })
    const text = response.text
    if (!text) throw new Error("empty response")
    const parsed = JSON.parse(text) as {
      orientation: string | null
      facing: string | null
      angle: string | null
      imageStyle: string | null
      imageDescription: string | null
      extended: { attribute: string; value: string; confidence: number }[]
    }
    const extended = (parsed.extended ?? []).map((e) => {
      const snapped = snapToCodeList(e.attribute, e.value)
      return { attribute: e.attribute, value: snapped.value, code: snapped.code, matched: snapped.matched, confidence: e.confidence }
    })
    return NextResponse.json({ available: true, suggestions: { ...parsed, extended } })
  } catch {
    // Expired key, quota, network — all land here. Client falls back to manual.
    return NextResponse.json({ available: false, reason: "call_failed" }, { status: 502 })
  }
}
