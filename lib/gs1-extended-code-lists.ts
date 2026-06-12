// GS1 extended attribute code lists, generated from
// GS1_Extended_Attribute_Code_Lists.csv (cleaned: PDF-extraction junk rows
// dropped, merged rows split, stray spaces collapsed, list-name prefixes
// removed). Source of truth is the GS1 file — regenerate, do not hand-edit.

export type CodeListEntry = { value: string; code: string }

export const GS1_EXTENDED_CODE_LISTS: Record<string, CodeListEntry[]> = {
  "Advertised Origin": [
    {
      "value": "Imported",
      "code": "GM03ADVOIM"
    },
    {
      "value": "Made in Canada",
      "code": "GM03ADVOMC"
    },
    {
      "value": "Made in U.S.A.",
      "code": "GM03ADVOMU"
    },
    {
      "value": "Made in U.S.A. and Imported",
      "code": "GM03ADVOUI"
    },
    {
      "value": "Made in U.S.A. or Imported",
      "code": "GM03ADVOUO"
    },
    {
      "value": "Made in another country",
      "code": "GM04ADVO99"
    }
  ],
  "Bag Type": [
    {
      "value": "Backpack",
      "code": "GM03BGSTBA"
    },
    {
      "value": "Saddle Bag",
      "code": "GM03BGSTSB"
    },
    {
      "value": "Bucket Bag",
      "code": "GM03BGSTBB"
    },
    {
      "value": "Satchel",
      "code": "GM03BGSTSA"
    },
    {
      "value": "Clutch",
      "code": "GM03BGSTCL"
    },
    {
      "value": "Shopper",
      "code": "GM03BGSTSJ"
    },
    {
      "value": "Crossbody",
      "code": "GM03BGSTCR"
    },
    {
      "value": "Shoulder Bag",
      "code": "GM03BGSTSH"
    },
    {
      "value": "Diaper Bag",
      "code": "GM03BGSTDB"
    },
    {
      "value": "Tote",
      "code": "GM03BGSTTT"
    },
    {
      "value": "Duffel",
      "code": "GM03BGSTDU"
    },
    {
      "value": "Waist Bag",
      "code": "GM03BGSTWB"
    },
    {
      "value": "Hobo",
      "code": "GM03BGSTHB"
    },
    {
      "value": "Wristlet",
      "code": "GM03BGSTWR"
    },
    {
      "value": "Messenger Bag",
      "code": "GM03BGSTMB"
    },
    {
      "value": "Other",
      "code": "GM04BGST99"
    },
    {
      "value": "Pouch",
      "code": "GM03BGSTPH"
    }
  ],
  "Band Type": [
    {
      "value": "Bangle",
      "code": "JW03WBNDBA"
    },
    {
      "value": "Bracelet",
      "code": "JW03WBNDBR"
    },
    {
      "value": "Cuff",
      "code": "JW03WBNDCU"
    },
    {
      "value": "NATO Strap",
      "code": "JW03WBNDNA"
    },
    {
      "value": "Strap",
      "code": "JW03WBNDST"
    },
    {
      "value": "Other",
      "code": "JW04WBND99"
    }
  ],
  "Beauty Area of Use": [
    {
      "value": "Body",
      "code": "GM03BAOUBD"
    },
    {
      "value": "Lip",
      "code": "GM03BAOULP"
    },
    {
      "value": "Brow",
      "code": "GM03BAOUBR"
    },
    {
      "value": "Multi",
      "code": "GM03BAOUMU"
    },
    {
      "value": "Cheek",
      "code": "GM03BAOUCH"
    },
    {
      "value": "Nail",
      "code": "GM03BAOUNA"
    },
    {
      "value": "Eye",
      "code": "GM03BAOUEY"
    },
    {
      "value": "Neck",
      "code": "GM03BAOUNE"
    },
    {
      "value": "Face",
      "code": "GM03BAOUFA"
    },
    {
      "value": "Pedi",
      "code": "GM03BAOUPE"
    },
    {
      "value": "Hair",
      "code": "GM03BAOUHR"
    },
    {
      "value": "Teeth",
      "code": "GM03BAOUTE"
    },
    {
      "value": "Hand",
      "code": "GM03BAOUHN"
    },
    {
      "value": "Other",
      "code": "GM04BAOU99"
    },
    {
      "value": "Lash",
      "code": "GM03BAOULA"
    }
  ],
  "Beauty Treatment Specialty": [
    {
      "value": "After Sun",
      "code": "GM03BTSPAS"
    },
    {
      "value": "Redness/Rosacea",
      "code": "GM03BTSPRR"
    },
    {
      "value": "Anti-Acne",
      "code": "GM03BTSPAA"
    },
    {
      "value": "Repair",
      "code": "GM03BTSPRE"
    },
    {
      "value": "Cellulite",
      "code": "GM03BTSPCE"
    },
    {
      "value": "Self Tan",
      "code": "GM03BTSPST"
    },
    {
      "value": "Conditioning",
      "code": "GM03BTSPCD"
    },
    {
      "value": "Shaving",
      "code": "GM03BTSPSH"
    },
    {
      "value": "Day",
      "code": "GM03BTSPDA"
    },
    {
      "value": "Uneven Skin Tone",
      "code": "GM03BTSPUN"
    },
    {
      "value": "Firming/Lifting",
      "code": "GM03BTSPFL"
    },
    {
      "value": "Wrinkles",
      "code": "GM03BTSPWR"
    },
    {
      "value": "Moisturizing",
      "code": "GM03BTSPMS"
    },
    {
      "value": "Other",
      "code": "GM04BTSP99"
    },
    {
      "value": "Night",
      "code": "GM03BTSPNI"
    }
  ],
  "Bedding Size": [
    {
      "value": "Baby/Swa ddle",
      "code": "GM03BDSZBS"
    },
    {
      "value": "Jumbo",
      "code": "GM03BDSZJU"
    },
    {
      "value": "Body",
      "code": "GM03BDSZBD"
    },
    {
      "value": "King",
      "code": "GM03BDSZKI"
    },
    {
      "value": "California King",
      "code": "GM03BDSZCK"
    },
    {
      "value": "Queen",
      "code": "GM03BDSZQU"
    },
    {
      "value": "Contour",
      "code": "GM03BDSZCN"
    },
    {
      "value": "Standard",
      "code": "GM03BDSZST"
    },
    {
      "value": "Crib",
      "code": "GM03BDSZCR"
    },
    {
      "value": "Throw",
      "code": "GM03BDSZTH"
    },
    {
      "value": "Euro",
      "code": "GM03BDSZEU"
    },
    {
      "value": "Twin",
      "code": "GM03BDSZTW"
    },
    {
      "value": "Full/Queen",
      "code": "GM03BDSZFQ"
    },
    {
      "value": "Twin Extra Long",
      "code": "GM03BDSZTX"
    },
    {
      "value": "Full/Standard",
      "code": "GM03BDSZFS"
    },
    {
      "value": "Other",
      "code": "GM04BDSZ99"
    }
  ],
  "Bedding Type": [
    {
      "value": "Bedspread",
      "code": "GM03BEDTBS"
    },
    {
      "value": "Pillowcase",
      "code": "GM03BEDTPC"
    },
    {
      "value": "Comforter",
      "code": "GM03BEDTCM"
    },
    {
      "value": "Sham",
      "code": "GM03BEDTSH"
    },
    {
      "value": "Duvet Cover",
      "code": "GM03BEDTDC"
    },
    {
      "value": "Sheet Set",
      "code": "GM03BEDTSS"
    },
    {
      "value": "Fitted Sheet",
      "code": "GM03BEDTFI"
    },
    {
      "value": "Other",
      "code": "GM04BEDT99"
    },
    {
      "value": "Flat Sheet",
      "code": "GM03BEDTFL"
    }
  ],
  "Bill Logo Application": [
    {
      "value": "Fabric Applique",
      "code": "GM03BILLFA"
    },
    {
      "value": "Screen Print",
      "code": "GM03BILLSP"
    },
    {
      "value": "Raised Embroidery",
      "code": "GM03BILLRE"
    },
    {
      "value": "Other",
      "code": "GM04BILL99"
    }
  ],
  "Bill Type": [
    {
      "value": "Flip Color",
      "code": "GM03BILTFC"
    },
    {
      "value": "Print",
      "code": "GM03BILTPR"
    },
    {
      "value": "Flip Up",
      "code": "GM03BILTFU"
    },
    {
      "value": "Sandwich",
      "code": "GM03BILTSA"
    },
    {
      "value": "Normal GM03B ILTNL Short",
      "code": "GM03BILTSH"
    }
  ],
  "Boot Shaft Type": [
    {
      "value": "Ankle",
      "code": "GM03BTSTAN"
    },
    {
      "value": "Over Knee",
      "code": "GM03BTSTOK"
    },
    {
      "value": "Knee High",
      "code": "GM03BTSTKH"
    },
    {
      "value": "Tall",
      "code": "GM03BTSTTL"
    },
    {
      "value": "Mid",
      "code": "GM03BTSTMI"
    }
  ],
  "Bracelet Type": [
    {
      "value": "Adjustable",
      "code": "JW03BRTTAD"
    },
    {
      "value": "Hinge",
      "code": "JW03BRTTHN"
    },
    {
      "value": "Bangle",
      "code": "JW03BRTTBA"
    },
    {
      "value": "Line",
      "code": "JW03BRTTLI"
    },
    {
      "value": "Bracelet Set",
      "code": "JW03BRTTBS"
    },
    {
      "value": "Open Cuff",
      "code": "JW03BRTTOC"
    },
    {
      "value": "Chain",
      "code": "JW03BRTTCH"
    },
    {
      "value": "Stretch",
      "code": "JW03BRTTST"
    },
    {
      "value": "Charm",
      "code": "JW03BRTTCM"
    },
    {
      "value": "Wrap",
      "code": "JW03BRTTWR"
    },
    {
      "value": "Coil",
      "code": "JW03BRTTCL"
    },
    {
      "value": "Other",
      "code": "JW04BRTT99"
    },
    {
      "value": "Cuff",
      "code": "JW03BRTTCF"
    }
  ],
  "Care Instructions Code": [
    {
      "value": "Dishwasher Safe",
      "code": "GM03CAINDS"
    },
    {
      "value": "Machine Wash Hot",
      "code": "GM03CAINMH"
    },
    {
      "value": "Do Not Iron",
      "code": "GM03CAINDN"
    },
    {
      "value": "Machine Wash Line Dry",
      "code": "GM03CAINML"
    },
    {
      "value": "Dry Clean",
      "code": "GM03CAINDC"
    },
    {
      "value": "Machine Wash Tumble Dry",
      "code": "GM03CAINMT"
    },
    {
      "value": "Hand Wash",
      "code": "GM03CAINHW"
    },
    {
      "value": "Machine Wash Warm",
      "code": "GM03CAINMW"
    },
    {
      "value": "Leather Method Dry Cleaning",
      "code": "GM03CAINLM"
    },
    {
      "value": "Spot Clean",
      "code": "GM03CAINSC"
    },
    {
      "value": "Machine Wash Cold",
      "code": "GM03CAINMC"
    },
    {
      "value": "Wash Separately",
      "code": "GM03CAINWS"
    },
    {
      "value": "Machine Wash Dry Flat",
      "code": "GM03CAINMD"
    },
    {
      "value": "Other",
      "code": "GM04CAIN99"
    }
  ],
  "Closure": [
    {
      "value": "Adjustable/Pull",
      "code": "GM03CLOSAP"
    },
    {
      "value": "Leverback",
      "code": "GM03CLOSLB"
    },
    {
      "value": "Back Button/Zip",
      "code": "GM03CLOSBB"
    },
    {
      "value": "Lift-Lock",
      "code": "GM03CLOSLL"
    },
    {
      "value": "Back Hook/Zip",
      "code": "GM03CLOSBH"
    },
    {
      "value": "Link/Clasp",
      "code": "GM03CLOSLC"
    },
    {
      "value": "Barrel",
      "code": "GM03CLOSBA"
    },
    {
      "value": "Lobster Claw",
      "code": "GM03CLOSLW"
    },
    {
      "value": "Box Tab Insert",
      "code": "GM03CLOSBT"
    },
    {
      "value": "Magnetic",
      "code": "GM03CLOSMG"
    },
    {
      "value": "Buckle",
      "code": "GM03CLOSBU"
    },
    {
      "value": "Pierced Post",
      "code": "GM03CLOSPP"
    },
    {
      "value": "Button",
      "code": "GM03CLOSBN"
    },
    {
      "value": "Push-Lock",
      "code": "GM03CLOSPL"
    },
    {
      "value": "Button Back",
      "code": "GM03CLOSBK"
    },
    {
      "value": "Side Button/Zip",
      "code": "GM03CLOSSB"
    },
    {
      "value": "Button Front",
      "code": "GM03CLOSBF"
    },
    {
      "value": "Side Hook/Zip",
      "code": "GM03CLOSSZ"
    },
    {
      "value": "Button Front Partial",
      "code": "GM03CLOSBP"
    },
    {
      "value": "Snap",
      "code": "GM03CLOSSN"
    },
    {
      "value": "Button Shoulder",
      "code": "GM03CLOSBS"
    },
    {
      "value": "Snap Back",
      "code": "GM03CLOSSM"
    },
    {
      "value": "Clasp",
      "code": "GM03CLOSCL"
    },
    {
      "value": "Snap Front",
      "code": "GM03CLOSSF"
    },
    {
      "value": "Click Top GM03CL OSCT Snap Front Partial",
      "code": "GM03CLOSS2"
    },
    {
      "value": "Clip On",
      "code": "GM03CLOSCO"
    },
    {
      "value": "Snap Legs",
      "code": "GM03CLOSSE"
    },
    {
      "value": "Drawstring",
      "code": "GM03CLOSDS"
    },
    {
      "value": "Snap Shoulder",
      "code": "GM03CLOSSS"
    },
    {
      "value": "Drawstring Front",
      "code": "GM03CLOSDF"
    },
    {
      "value": "Snap Post",
      "code": "GM03CLOSSA"
    },
    {
      "value": "Drawstring Elastic",
      "code": "GM03CLOSDE"
    },
    {
      "value": "String",
      "code": "GM03CLOSSR"
    },
    {
      "value": "O Ring",
      "code": "GM03CLOSDO"
    },
    {
      "value": "Tab",
      "code": "GM03CLOSTB"
    },
    {
      "value": "Fishhook",
      "code": "GM03CLOSFS"
    },
    {
      "value": "Tie",
      "code": "GM03CLOSTI"
    },
    {
      "value": "Flap",
      "code": "GM03CLOSFP"
    },
    {
      "value": "Tie Back/Halter",
      "code": "GM03CLOSTH"
    },
    {
      "value": "Foldover",
      "code": "GM03CLOSFO"
    },
    {
      "value": "Tie Front",
      "code": "GM03CLOSTF"
    },
    {
      "value": "French Wire",
      "code": "GM03CLOSFW"
    },
    {
      "value": "Tie Side",
      "code": "GM03CLOSTS"
    },
    {
      "value": "Frog/Button Loop",
      "code": "GM03CLOSFA"
    },
    {
      "value": "Toggle",
      "code": "GM03CLOSTO"
    },
    {
      "value": "Front Button/Zip",
      "code": "GM03CLOSFZ"
    },
    {
      "value": "Toggle Front",
      "code": "GM03CLOSTN"
    },
    {
      "value": "Front Hook/Zip",
      "code": "GM03CLOSFH"
    },
    {
      "value": "Top Zip",
      "code": "GM03CLOSTZ"
    },
    {
      "value": "Hidden Button Front",
      "code": "GM03CLOSHB"
    },
    {
      "value": "Tunnel Side Tie",
      "code": "GM03CLOSTQ"
    },
    {
      "value": "Hidden Snap Front",
      "code": "GM03CLOSHS"
    },
    {
      "value": "Turn Lock",
      "code": "GM03CLOSTL"
    },
    {
      "value": "Hidden Zip Front",
      "code": "GM03CLOSHZ"
    },
    {
      "value": "Wrap",
      "code": "GM03CLOSWR"
    },
    {
      "value": "Hinged",
      "code": "GM03CLOSHI"
    },
    {
      "value": "Zipper",
      "code": "GM03CLOSZI"
    },
    {
      "value": "Hinged/Foldover",
      "code": "GM03CLOSHE"
    },
    {
      "value": "Zipper Back",
      "code": "GM03CLOSZB"
    },
    {
      "value": "Hook",
      "code": "GM03CLOSHO"
    },
    {
      "value": "Zipper Back Partial",
      "code": "GM03CLOSZP"
    },
    {
      "value": "Hook and Loop",
      "code": "GM03CLOSHL"
    },
    {
      "value": "Zipper Front",
      "code": "GM03CLOSZF"
    },
    {
      "value": "Hook-and-eye Front",
      "code": "GM03CLOSHC"
    },
    {
      "value": "Zipper Front Partial",
      "code": "GM03CLOSZR"
    },
    {
      "value": "Hook-and-eye Back",
      "code": "GM03CLOSHD"
    },
    {
      "value": "Zipper Side",
      "code": "GM03CLOSZS"
    },
    {
      "value": "Keyhole Button",
      "code": "GM03CLOSKB"
    },
    {
      "value": "Zipper Around",
      "code": "GM03CLOSZA"
    },
    {
      "value": "Kiss-Lock",
      "code": "GM03CLOSKL"
    },
    {
      "value": "1/4 Zip",
      "code": "GM03CLOSZQ"
    },
    {
      "value": "Knot",
      "code": "GM03CLOSKN"
    },
    {
      "value": "1/2 Zip",
      "code": "GM03CLOSZH"
    },
    {
      "value": "Lace Up",
      "code": "GM03CLOSLU"
    },
    {
      "value": "Other Closure",
      "code": "GM04CLOS99"
    },
    {
      "value": "Lace-up Front",
      "code": "GM03CLOSLF"
    }
  ],
  "Coat/Jacket Type": [
    {
      "value": "Anorak",
      "code": "GM03COATAN"
    },
    {
      "value": "Pant/Car Coat",
      "code": "GM03COATPC"
    },
    {
      "value": "Barn Coat",
      "code": "GM03COATBC"
    },
    {
      "value": "Parka",
      "code": "GM03COATPA"
    },
    {
      "value": "Blazer",
      "code": "GM03COATBA"
    },
    {
      "value": "Peacoat",
      "code": "GM03COATPE"
    },
    {
      "value": "Bolero",
      "code": "GM03COATBL"
    },
    {
      "value": "Poncho",
      "code": "GM03COATPN"
    },
    {
      "value": "Bomber",
      "code": "GM03COATBM"
    },
    {
      "value": "Puffer",
      "code": "GM03COATPU"
    },
    {
      "value": "Cape",
      "code": "GM03COATCP"
    },
    {
      "value": "Sportscoat",
      "code": "GM03COATSP"
    },
    {
      "value": "Cardigan",
      "code": "GM03COATCA"
    },
    {
      "value": "Swing Coat",
      "code": "GM03COATSC"
    },
    {
      "value": "Field Jacket",
      "code": "GM03COATFK"
    },
    {
      "value": "Trench",
      "code": "GM03COATTR"
    },
    {
      "value": "Fit & Flare",
      "code": "GM03COATFF"
    },
    {
      "value": "Trucker",
      "code": "GM03COATTU"
    },
    {
      "value": "Hoodie",
      "code": "GM03COATHO"
    },
    {
      "value": "Vest",
      "code": "GM03COATVE"
    },
    {
      "value": "Military",
      "code": "GM03COATMI"
    },
    {
      "value": "Windbreaker",
      "code": "GM03COATWI"
    },
    {
      "value": "Motorcycle",
      "code": "GM03COATMT"
    },
    {
      "value": "Wrap",
      "code": "GM03COATWR"
    },
    {
      "value": "Overcoat",
      "code": "GM03COATOC"
    },
    {
      "value": "Other",
      "code": "GM04COAT99"
    }
  ],
  "Collar/Neck Type": [
    {
      "value": "Ballet",
      "code": "GM03CLNTBL"
    },
    {
      "value": "Plunge",
      "code": "GM03CLNTPJ"
    },
    {
      "value": "Banded",
      "code": "GM03CLNTBC"
    },
    {
      "value": "Point",
      "code": "GM03CLNTPO"
    },
    {
      "value": "Boat or Bateau",
      "code": "GM03CLNTBE"
    },
    {
      "value": "Polo",
      "code": "GM03CLNTPU"
    },
    {
      "value": "Button -Down",
      "code": "GM03CLNTBD"
    },
    {
      "value": "Portrait Collar",
      "code": "GM03CLNTPR"
    },
    {
      "value": "Cowl",
      "code": "GM03CLNTCW"
    },
    {
      "value": "Â¼-Zip Mock",
      "code": "GM03CLNTQZ"
    },
    {
      "value": "Crew",
      "code": "GM03CLNTCR"
    },
    {
      "value": "Racer Back",
      "code": "GM03CLNTRB"
    },
    {
      "value": "Drape",
      "code": "GM03CLNTDP"
    },
    {
      "value": "Rolled",
      "code": "GM03CLNTRO"
    },
    {
      "value": "Funnel",
      "code": "GM03CLNTFU"
    },
    {
      "value": "Round",
      "code": "GM03CLNTRU"
    },
    {
      "value": "Halter",
      "code": "GM03CLNTHA"
    },
    {
      "value": "Sailor",
      "code": "GM03CLNTSD"
    },
    {
      "value": "Henley",
      "code": "GM03CLNTHN"
    },
    {
      "value": "Scoop",
      "code": "GM03CLNTSC"
    },
    {
      "value": "Henley Faux",
      "code": "GM03CLNTHF"
    },
    {
      "value": "Shawl",
      "code": "GM03CLNTSH"
    },
    {
      "value": "Henley Functional",
      "code": "GM03CLNTHU"
    },
    {
      "value": "Slider Halter",
      "code": "GM03CLNTSL"
    },
    {
      "value": "Johnny",
      "code": "GM03CLNTJO"
    },
    {
      "value": "Square",
      "code": "GM03CLNTSQ"
    },
    {
      "value": "Keyhole",
      "code": "GM03CLNTKE"
    },
    {
      "value": "Stand",
      "code": "GM03CLNTSV"
    },
    {
      "value": "Mandarin",
      "code": "GM03CLNTMB"
    },
    {
      "value": "Surplice",
      "code": "GM03CLNTSU"
    },
    {
      "value": "Marilyn",
      "code": "GM03CLNTMI"
    },
    {
      "value": "Sweetheart",
      "code": "GM03CLNTSX"
    },
    {
      "value": "Mockneck",
      "code": "GM03CLNTMO"
    },
    {
      "value": "Tab",
      "code": "GM03CLNTTA"
    },
    {
      "value": "Necklace",
      "code": "GM03CLNTNE"
    },
    {
      "value": "Tie",
      "code": "GM03CLNTTI"
    },
    {
      "value": "Notch",
      "code": "GM03CLNTNO"
    },
    {
      "value": "Turtle",
      "code": "GM03CLNTTU"
    },
    {
      "value": "Off the Shoulder",
      "code": "GM03CLNTOR"
    },
    {
      "value": "V-Neck",
      "code": "GM03CLNTVN"
    },
    {
      "value": "One Shoulder",
      "code": "GM03CLNTOS"
    },
    {
      "value": "Wing",
      "code": "GM03CLNTWI"
    },
    {
      "value": "Ottoman",
      "code": "GM03CLNTOT"
    },
    {
      "value": "Y-Neck",
      "code": "GM03CLNTYN"
    },
    {
      "value": "Peter Pan",
      "code": "GM03CLNTPA"
    },
    {
      "value": "Other Collar",
      "code": "GM04CLNT99"
    },
    {
      "value": "Platter",
      "code": "GM03CLNTPE"
    }
  ],
  "Conference": [
    {
      "value": "ACC",
      "code": "ZZ03CONFAC"
    },
    {
      "value": "National League",
      "code": "ZZ03CONFNL"
    },
    {
      "value": "AFC",
      "code": "ZZ03CONFAF"
    },
    {
      "value": "NFC",
      "code": "ZZ03CONFNF"
    },
    {
      "value": "American League",
      "code": "ZZ03CONFAL"
    },
    {
      "value": "Pac 12",
      "code": "ZZ03CONFPA"
    },
    {
      "value": "Big 10",
      "code": "ZZ03CONFBT"
    },
    {
      "value": "SEC",
      "code": "ZZ03CONFSE"
    },
    {
      "value": "Big 12",
      "code": "ZZ03CONFBW"
    },
    {
      "value": "The Ame rican",
      "code": "ZZ03CONFAM"
    },
    {
      "value": "Eastern",
      "code": "ZZ03CONFEA"
    },
    {
      "value": "Western",
      "code": "ZZ03CONFWE"
    },
    {
      "value": "Independents",
      "code": "ZZ03CONFIN"
    },
    {
      "value": "Other",
      "code": "ZZ04CONF99"
    }
  ],
  "Consumer Life Stage": [
    {
      "value": "Adult",
      "code": "GM03CNLSAD"
    },
    {
      "value": "Teen",
      "code": "GM03CNLSTE"
    },
    {
      "value": "All Ag es",
      "code": "GM03CNLSAG"
    },
    {
      "value": "Toddler",
      "code": "GM03CNLSTD"
    },
    {
      "value": "Baby/Infant",
      "code": "GM03CNLSBI"
    },
    {
      "value": "Unclassified",
      "code": "GM03CNLSYA"
    },
    {
      "value": "Child",
      "code": "GM03CNLSCH"
    },
    {
      "value": "Unidentified",
      "code": "GM03CNLSUC"
    },
    {
      "value": "Child 2 Years Onwards",
      "code": "GM03CNLSCW"
    },
    {
      "value": "Other",
      "code": "GM04CNLS99"
    },
    {
      "value": "Preemie",
      "code": "GM03CNLSPR"
    }
  ],
  "Cookware Type": [
    {
      "value": "Cake Pan",
      "code": "GM03COOKCP"
    },
    {
      "value": "Pie Pan",
      "code": "GM03COOKPP"
    },
    {
      "value": "Casserole Dish",
      "code": "GM03COOKCD"
    },
    {
      "value": "Pizza Pan",
      "code": "GM03COOKPI"
    },
    {
      "value": "Cookie Sheet",
      "code": "GM03COOKCS"
    },
    {
      "value": "Pressure Cooker",
      "code": "GM03COOKPC"
    },
    {
      "value": "Cupcake/Muffin Pan GM03CO OKCM Roaster",
      "code": "GM03COOKRR"
    },
    {
      "value": "Dutch Oven",
      "code": "GM03COOKDU"
    },
    {
      "value": "Saucepan",
      "code": "GM03COOKSA"
    },
    {
      "value": "Frying Pan",
      "code": "GM03COOKFP"
    },
    {
      "value": "SautÃ© Pan",
      "code": "GM03COOKSE"
    },
    {
      "value": "Griddle",
      "code": "GM03COOKGR"
    },
    {
      "value": "Set",
      "code": "GM03COOKST"
    },
    {
      "value": "Lids and accessory",
      "code": "GM03COOKLA"
    },
    {
      "value": "Specialty",
      "code": "GM03COOKSP"
    },
    {
      "value": "Multi-Cooker/Stockpot",
      "code": "GM03COOKMS"
    },
    {
      "value": "Other",
      "code": "GM04COOK99"
    }
  ],
  "Crown": [
    {
      "value": "High",
      "code": "GM03CRWNHI"
    },
    {
      "value": "None",
      "code": "GM03CRWNNN"
    },
    {
      "value": "Low",
      "code": "GM03CRWNLW"
    },
    {
      "value": "Other",
      "code": "GM04CRWN99"
    },
    {
      "value": "Mid",
      "code": "GM03CRWNMD"
    }
  ],
  "Cuff Type": [
    {
      "value": "Barrel",
      "code": "GM03CFTPB"
    },
    {
      "value": "A No Cuff",
      "code": "GM03CFTPNC"
    },
    {
      "value": "Bottom Hem Cuffed",
      "code": "GM03CFTPBH"
    },
    {
      "value": "One Button",
      "code": "GM03CFTPBU"
    },
    {
      "value": "Elastic",
      "code": "GM03CFTPEL"
    },
    {
      "value": "Ribbed",
      "code": "GM03CFTPRB"
    },
    {
      "value": "Faux Fur",
      "code": "GM03CFTPFF"
    },
    {
      "value": "Thumb Hole",
      "code": "GM03CFTPTH"
    },
    {
      "value": "Folded",
      "code": "GM03CFTPFD"
    },
    {
      "value": "Two-Button",
      "code": "GM03CFTPTB"
    },
    {
      "value": "French",
      "code": "GM03CFTPFR"
    },
    {
      "value": "Other",
      "code": "GM04CFTP99"
    },
    {
      "value": "Mitered",
      "code": "GM03CFTPMI"
    }
  ],
  "Dinnerware Category": [
    {
      "value": "Everyday",
      "code": "GM03DNRCEV"
    },
    {
      "value": "Other",
      "code": "GM04DNRC99"
    },
    {
      "value": "Fine China",
      "code": "GM03DNRCFC"
    }
  ],
  "Dress Type": [
    {
      "value": "A-line",
      "code": "GM03DRTPAL"
    },
    {
      "value": "Pencil",
      "code": "GM03DRTPPE"
    },
    {
      "value": "Babydoll",
      "code": "GM03DRTPBA"
    },
    {
      "value": "Peplum",
      "code": "GM03DRTPPL"
    },
    {
      "value": "Blouson",
      "code": "GM03DRTPBL"
    },
    {
      "value": "Popover",
      "code": "GM03DRTPPV"
    },
    {
      "value": "Body-Conscious",
      "code": "GM03DRTPBC"
    },
    {
      "value": "Sheath",
      "code": "GM03DRTPSE"
    },
    {
      "value": "Caftan",
      "code": "GM03DRTPCA"
    },
    {
      "value": "Shift",
      "code": "GM03DRTPSI"
    },
    {
      "value": "Circular",
      "code": "GM03DRTPCI"
    },
    {
      "value": "Shirtdress",
      "code": "GM03DRTPSD"
    },
    {
      "value": "Dress",
      "code": "GM03DRTPDR"
    },
    {
      "value": "Skater",
      "code": "GM03DRTPSK"
    },
    {
      "value": "Drop Waist",
      "code": "GM03DRTPDW"
    },
    {
      "value": "Skort",
      "code": "GM03DRTPSR"
    },
    {
      "value": "Empire Waist",
      "code": "GM03DRTPEW"
    },
    {
      "value": "Slipdress",
      "code": "GM03DRTPSL"
    },
    {
      "value": "Faux Wrap",
      "code": "GM03DRTPFW"
    },
    {
      "value": "Sweater Dress",
      "code": "GM03DRTPSW"
    },
    {
      "value": "Flared",
      "code": "GM03DRTPFL"
    },
    {
      "value": "Tank Dress",
      "code": "GM03DRTPTD"
    },
    {
      "value": "Full Skirt",
      "code": "GM03DRTPFS"
    },
    {
      "value": "Tiered",
      "code": "GM03DRTPTI"
    },
    {
      "value": "Gown",
      "code": "GM03DRTPGN"
    },
    {
      "value": "Two Piece",
      "code": "GM03DRTPTP"
    },
    {
      "value": "Jacket Dress",
      "code": "GM03DRTPJD"
    },
    {
      "value": "Wedding",
      "code": "GM03DRTPWE"
    },
    {
      "value": "Jumper",
      "code": "GM03DRTPJU"
    },
    {
      "value": "Wrap",
      "code": "GM03DRTPWR"
    },
    {
      "value": "Maternity",
      "code": "GM03DRTPMA"
    },
    {
      "value": "Other",
      "code": "GM04DRTP99"
    },
    {
      "value": "Mermaid/Trumpet",
      "code": "GM03DRTPMT"
    }
  ],
  "Earring Type": [
    {
      "value": "Button",
      "code": "JW03EATPBU"
    },
    {
      "value": "Ear Wrap",
      "code": "JW03EATPEW"
    },
    {
      "value": "Chandelier",
      "code": "JW03EATPCH"
    },
    {
      "value": "Hoop",
      "code": "JW03EATPHP"
    },
    {
      "value": "Drop",
      "code": "JW03EATPDR"
    },
    {
      "value": "Stud",
      "code": "JW03EATPST"
    },
    {
      "value": "Ear Cuff",
      "code": "JW03EATPEC"
    },
    {
      "value": "Other",
      "code": "JW04EATP99"
    },
    {
      "value": "Ear Jacket",
      "code": "JW03EATPEJ"
    }
  ],
  "Eyewear Type": [
    {
      "value": "Aviator",
      "code": "GM03EYESAV"
    },
    {
      "value": "Polarized Lenses",
      "code": "GM03EYESPL"
    },
    {
      "value": "Brow Bar",
      "code": "GM03EYESBB"
    },
    {
      "value": "Shield",
      "code": "GM03EYESSH"
    },
    {
      "value": "Cat Eye",
      "code": "GM03EYESCE"
    },
    {
      "value": "Wayfarer",
      "code": "GM03EYESWA"
    },
    {
      "value": "Clubmaster",
      "code": "GM03EYESCL"
    },
    {
      "value": "Wrap",
      "code": "GM03EYESWR"
    },
    {
      "value": "Mirrored Lenses",
      "code": "GM03EYESML"
    },
    {
      "value": "Other",
      "code": "GM04EYES99"
    }
  ],
  "Fill Material": [
    {
      "value": "Down",
      "code": "GM03FILMDW"
    },
    {
      "value": "Natural Fill",
      "code": "GM03FILMNA"
    },
    {
      "value": "Down Alternative",
      "code": "GM03FILMDA"
    },
    {
      "value": "Nylon Fill",
      "code": "GM03FILMNY"
    },
    {
      "value": "Down/Feather",
      "code": "GM03FILMDF"
    },
    {
      "value": "Polyfill",
      "code": "GM03FILMPY"
    },
    {
      "value": "Feather",
      "code": "GM03FILMFE"
    },
    {
      "value": "Synthetic",
      "code": "GM03FILMSY"
    },
    {
      "value": "Latex Foam",
      "code": "GM03FILMLF"
    },
    {
      "value": "Other",
      "code": "GM04FILM99"
    },
    {
      "value": "Memory Foam",
      "code": "GM03FILMMF"
    }
  ],
  "Finish": [
    {
      "value": "Acid Washed",
      "code": "GM03FNSHAW"
    },
    {
      "value": "Patent",
      "code": "GM03FNSHPA"
    },
    {
      "value": "Antique",
      "code": "GM03FNSHAN"
    },
    {
      "value": "Polished",
      "code": "GM03FNSHPL"
    },
    {
      "value": "Brushed",
      "code": "GM03FNSHBR"
    },
    {
      "value": "Raw/Dry",
      "code": "GM03FNSHRD"
    },
    {
      "value": "Coated",
      "code": "GM03FNSHCT"
    },
    {
      "value": "Rub-Off",
      "code": "GM03FNSHRB"
    },
    {
      "value": "Distressed",
      "code": "GM03FNSHDI"
    },
    {
      "value": "Satin",
      "code": "GM03FNSHSA"
    },
    {
      "value": "Dual/Etched",
      "code": "GM03FNSHDE"
    },
    {
      "value": "Shiny",
      "code": "GM03FNSHSH"
    },
    {
      "value": "Embossed",
      "code": "GM03FNSHEM"
    },
    {
      "value": "Stone Wash",
      "code": "GM03FNSHSW"
    },
    {
      "value": "Matte",
      "code": "GM03FNSHMA"
    },
    {
      "value": "Velvet",
      "code": "GM03FNSHVE"
    },
    {
      "value": "Metallic",
      "code": "GM03FNSHME"
    },
    {
      "value": "Other",
      "code": "GM04FNSH99"
    },
    {
      "value": "Nappa",
      "code": "GM03FNSHNA"
    }
  ],
  "Fit": [
    {
      "value": "Relaxed",
      "code": "GM03FITTRE"
    },
    {
      "value": "Other",
      "code": "GM04FITT99"
    },
    {
      "value": "Structured",
      "code": "GM03FITTST"
    }
  ],
  "Flatware Type": [
    {
      "value": "Butter Knife",
      "code": "GM03FLATBU"
    },
    {
      "value": "Pasta Server",
      "code": "GM03FLATPA"
    },
    {
      "value": "Cake Knife",
      "code": "GM03FLATCA"
    },
    {
      "value": "Pierced Serving Spoon",
      "code": "GM03FLATPI"
    },
    {
      "value": "Carving Fork",
      "code": "GM03FLATCR"
    },
    {
      "value": "Salad Fork",
      "code": "GM03FLATSA"
    },
    {
      "value": "Cocktail Fork",
      "code": "GM03FLATCC"
    },
    {
      "value": "Serving Fork",
      "code": "GM03FLATSF"
    },
    {
      "value": "Cocktail Spoon",
      "code": "GM03FLATCS"
    },
    {
      "value": "Serving Spoon",
      "code": "GM03FLATSS"
    },
    {
      "value": "Dessert Server",
      "code": "GM03FLATDE"
    },
    {
      "value": "Soup Spoon",
      "code": "GM03FLATSP"
    },
    {
      "value": "Dinner Fork",
      "code": "GM03FLATDI"
    },
    {
      "value": "Spoon",
      "code": "GM03FLATSN"
    },
    {
      "value": "Fork",
      "code": "GM03FLATFK"
    },
    {
      "value": "Spreader Knife",
      "code": "GM03FLATSK"
    },
    {
      "value": "Ice Tea Spoon",
      "code": "GM03FLATIC"
    },
    {
      "value": "Steak Knife",
      "code": "GM03FLATST"
    },
    {
      "value": "Knife",
      "code": "GM03FLATKN"
    },
    {
      "value": "Sugar Spoon",
      "code": "GM03FLATSU"
    },
    {
      "value": "Ladle",
      "code": "GM03FLATLD"
    },
    {
      "value": "Tablespoon",
      "code": "GM03FLATTA"
    },
    {
      "value": "Lasagna Server",
      "code": "GM03FLATLS"
    },
    {
      "value": "Teaspoon",
      "code": "GM03FLATTE"
    },
    {
      "value": "Luncheon Fork",
      "code": "GM03FLATLF"
    },
    {
      "value": "Tongs",
      "code": "GM03FLATTG"
    },
    {
      "value": "Luncheon Knife",
      "code": "GM03FLATLK"
    },
    {
      "value": "Other",
      "code": "GM04FLAT99"
    }
  ],
  "Formulation": [
    {
      "value": "Capsules",
      "code": "GM03FORMCA"
    },
    {
      "value": "Mousse/Foam",
      "code": "GM03FORMMF"
    },
    {
      "value": "Cream",
      "code": "GM03FORMCR"
    },
    {
      "value": "Oil",
      "code": "GM03FORMIL"
    },
    {
      "value": "Cream -To-Powder",
      "code": "GM03FORMCP"
    },
    {
      "value": "Paste",
      "code": "GM03FORMPS"
    },
    {
      "value": "Gel",
      "code": "GM03FORMGL"
    },
    {
      "value": "Pressed Powder",
      "code": "GM03FORMPP"
    },
    {
      "value": "Liquid",
      "code": "GM03FORMLQ"
    },
    {
      "value": "Solid",
      "code": "GM03FORMSL"
    },
    {
      "value": "Loose Powder",
      "code": "GM03FORMLP"
    },
    {
      "value": "Wax",
      "code": "GM03FORMWX"
    },
    {
      "value": "Lotion",
      "code": "GM03FORMLT"
    },
    {
      "value": "Wipe",
      "code": "GM03FORMWP"
    },
    {
      "value": "Mist/Spray",
      "code": "GM03FORMMS"
    },
    {
      "value": "Other",
      "code": "GM04FORM99"
    }
  ],
  "Fur Animal Name": [
    {
      "value": "Australian Brushtail Possum",
      "code": "GM03FANMAP"
    },
    {
      "value": "Otter",
      "code": "GM03FANMOU"
    },
    {
      "value": "Beaver",
      "code": "GM03FAN"
    },
    {
      "value": "MBV Pony Hair",
      "code": "GM03FANMPH"
    },
    {
      "value": "Calf Hair",
      "code": "GM03FANMCH"
    },
    {
      "value": "Rabbit",
      "code": "GM03FANMRI"
    },
    {
      "value": "Fox",
      "code": "GM03FANMFX"
    },
    {
      "value": "Raccoon",
      "code": "GM03FANMRC"
    },
    {
      "value": "Golden Jackal",
      "code": "GM03FANMGJ"
    },
    {
      "value": "Sable",
      "code": "GM03FANMSG"
    },
    {
      "value": "Grey Wolf",
      "code": "GM03FANMGW"
    },
    {
      "value": "Skunk",
      "code": "GM03FANMSK"
    },
    {
      "value": "Marten",
      "code": "GM03FANMMA"
    },
    {
      "value": "Other Fur Animal",
      "code": "GM04FANM99"
    },
    {
      "value": "Mink",
      "code": "GM03FANMMK"
    }
  ],
  "Fur Treatment": [
    {
      "value": "Artificially Colored",
      "code": "GM03FTMTAC"
    },
    {
      "value": "Bleached",
      "code": "GM03FTMTBM"
    },
    {
      "value": "Dyed",
      "code": "GM03FTMTDY"
    },
    {
      "value": "Natural (untreated)",
      "code": "GM03FTMTNA"
    },
    {
      "value": "Painted",
      "code": "GM03FTMTPT"
    },
    {
      "value": "Other Fu r Treatment",
      "code": "GM04FTMT99"
    }
  ],
  "Gauge": [
    {
      "value": "16lbs Dozen",
      "code": "GM03GAUGSX"
    },
    {
      "value": "Opaque",
      "code": "GM03GAUGPQ"
    },
    {
      "value": "Fine",
      "code": "GM03GAUGFI"
    },
    {
      "value": "Semi-Opaque",
      "code": "GM03GAUGSE"
    },
    {
      "value": "Heavy",
      "code": "GM03GAUGHV"
    },
    {
      "value": "Sheer",
      "code": "GM03GAUGSH"
    },
    {
      "value": "Heavyweight",
      "code": "GM03GAUGHW"
    },
    {
      "value": "Super Opaque",
      "code": "GM03GAUGSU"
    },
    {
      "value": "Light",
      "code": "GM03GAUGLI"
    },
    {
      "value": "Other",
      "code": "GM04GAUG99"
    },
    {
      "value": "Medium",
      "code": "GM03GAUGMD"
    }
  ],
  "Gender": [
    {
      "value": "Female",
      "code": "ZZ03GENDFE"
    },
    {
      "value": "Unisex",
      "code": "ZZ03GENDUN"
    },
    {
      "value": "Male",
      "code": "ZZ03GENDMA"
    },
    {
      "value": "Other",
      "code": "ZZ04GEND99"
    }
  ],
  "Hat Type": [
    {
      "value": "Balaclava",
      "code": "GM03HATSBL"
    },
    {
      "value": "Floppy",
      "code": "GM03HATSFL"
    },
    {
      "value": "Baseball Cap",
      "code": "GM03HATSBS"
    },
    {
      "value": "Newsboy",
      "code": "GM03HATSNW"
    },
    {
      "value": "Beanie",
      "code": "GM03HATSBE"
    },
    {
      "value": "Panama",
      "code": "GM03HATSPN"
    },
    {
      "value": "Beret",
      "code": "GM03HATSBR"
    },
    {
      "value": "Slouchy",
      "code": "GM03HATSSL"
    },
    {
      "value": "Bonnet",
      "code": "GM03HATSBN"
    },
    {
      "value": "Sun Hat",
      "code": "GM03HATSSH"
    },
    {
      "value": "Bowler",
      "code": "GM03HATSBW"
    },
    {
      "value": "Trapper",
      "code": "GM03HATSTR"
    },
    {
      "value": "Bucket Hat",
      "code": "GM03HATSBH"
    },
    {
      "value": "Trucker",
      "code": "GM03HATSTU"
    },
    {
      "value": "Cowboy",
      "code": "GM03HATSCW"
    },
    {
      "value": "Visor",
      "code": "GM03HATSVS"
    },
    {
      "value": "Ear Muffs",
      "code": "GM03HATSEM"
    },
    {
      "value": "Wide Brim",
      "code": "GM03HATSWB"
    },
    {
      "value": "Fedora",
      "code": "GM03HATSFD"
    },
    {
      "value": "Other",
      "code": "GM04HATS99"
    }
  ],
  "Heel Height Range": [
    {
      "value": "Extra -High > 3 inch",
      "code": "GM03HLHTEH"
    },
    {
      "value": "Low - >.5 to 1 inch",
      "code": "GM03HLHTLW"
    },
    {
      "value": "Flat - 0-.5 inch",
      "code": "GM03HLHTFL"
    },
    {
      "value": "Medium - > 1 inch - 2 inch",
      "code": "GM03HLHTMD"
    },
    {
      "value": "High > 2 inch - 3 inch",
      "code": "GM03HLH"
    },
    {
      "value": "THI Other",
      "code": "GM04HLHT99"
    }
  ],
  "Heel Material": [
    {
      "value": "Cork",
      "code": "GM03HLMTCK"
    },
    {
      "value": "Rope",
      "code": "GM03HLMTRP"
    },
    {
      "value": "Embellished",
      "code": "GM03HLMTEM"
    },
    {
      "value": "Synthetic",
      "code": "GM03HLMTSY"
    },
    {
      "value": "Leather",
      "code": "GM03HLMTLE"
    },
    {
      "value": "Wood",
      "code": "GM03HLMTWD"
    },
    {
      "value": "Metal Rand",
      "code": "GM03HLMTMR"
    },
    {
      "value": "Other",
      "code": "GM04HLMT99"
    },
    {
      "value": "Metallic",
      "code": "GM03HLMTME"
    }
  ],
  "Heel Type": [
    {
      "value": "Block",
      "code": "GM03HLTYBL"
    },
    {
      "value": "No Heel",
      "code": "GM03HLTYNH"
    },
    {
      "value": "Cone",
      "code": "GM03HLTYCN"
    },
    {
      "value": "Novelty",
      "code": "GM03HLTYNV"
    },
    {
      "value": "Demi-Wedge",
      "code": "GM03HLTYDW"
    },
    {
      "value": "Stacked",
      "code": "GM03HLTYSA"
    },
    {
      "value": "Flare GM03HL TYFL Stiletto",
      "code": "GM03HLTYSL"
    },
    {
      "value": "Kitten",
      "code": "GM03HLTYKI"
    },
    {
      "value": "Wedge",
      "code": "GM03HLTYWE"
    },
    {
      "value": "Louis",
      "code": "GM03HLTYLU"
    },
    {
      "value": "Other",
      "code": "GM04HLTY99"
    }
  ],
  "Holiday/Event": [
    {
      "value": "Christmas",
      "code": "ZZ03HOEVCH"
    },
    {
      "value": "New Year's",
      "code": "ZZ03HOEVNY"
    },
    {
      "value": "Easter",
      "code": "ZZ03HOEV"
    },
    {
      "value": "EA St. Patrick's Day",
      "code": "ZZ03HOEVSP"
    },
    {
      "value": "Father's Day",
      "code": "ZZ03HOEVFA"
    },
    {
      "value": "Thanksgiving",
      "code": "ZZ03HOEVTH"
    },
    {
      "value": "Fourth of July",
      "code": "ZZ03HOEVFJ"
    },
    {
      "value": "Valentine's Day",
      "code": "ZZ03HOEVVA"
    },
    {
      "value": "Halloween",
      "code": "ZZ03HOEVHA"
    },
    {
      "value": "Wedding",
      "code": "ZZ03HOEVWE"
    },
    {
      "value": "Hanukkah",
      "code": "ZZ03HOEVHU"
    },
    {
      "value": "Other",
      "code": "ZZ04HOEV99"
    },
    {
      "value": "Mother's Day",
      "code": "ZZ03HOEVMD"
    }
  ],
  "Hosiery/Sock Type": [
    {
      "value": "Arm Warmer",
      "code": "GM03HOSOAW"
    },
    {
      "value": "No Show",
      "code": "GM03HOSONS"
    },
    {
      "value": "Crew",
      "code": "GM03HOSOCR"
    },
    {
      "value": "Over the Calf",
      "code": "GM03HOSOOC"
    },
    {
      "value": "Footless Tights",
      "code": "GM03HOSOFT"
    },
    {
      "value": "Over the Knee",
      "code": "GM03HOSOOK"
    },
    {
      "value": "Knee High",
      "code": "GM03HOSOKH"
    },
    {
      "value": "Quarter",
      "code": "GM03HOSOQU"
    },
    {
      "value": "Leggings",
      "code": "GM03HOSOLG"
    },
    {
      "value": "Thigh High",
      "code": "GM03HOSOTH"
    },
    {
      "value": "Legwarmer",
      "code": "GM03HOSOLW"
    },
    {
      "value": "Tights",
      "code": "GM03HOSOTG"
    },
    {
      "value": "Liner",
      "code": "GM03HOSOLI"
    },
    {
      "value": "Trouser",
      "code": "GM03HOSOTR"
    },
    {
      "value": "Low Cut",
      "code": "GM03HOSOLC"
    },
    {
      "value": "Other",
      "code": "GM04HOSO99"
    }
  ],
  "Jewelry Sets": [
    {
      "value": "Bracelet/Ears",
      "code": "JW03JWSTBE"
    },
    {
      "value": "Neck/Ears/Bracelet",
      "code": "JW03JWSTNB"
    }
  ],
  "Jewelry Type": [
    {
      "value": "Costume",
      "code": "JW03JWLTCS"
    },
    {
      "value": "Fine",
      "code": "JW03JWLTFI"
    },
    {
      "value": "Fashion JW03JW LTFA Other",
      "code": "JW04JWLT99"
    }
  ],
  "Knit Type": [
    {
      "value": "Pom",
      "code": "GM03KNITPM"
    },
    {
      "value": "Tassel",
      "code": "GM03KNITSK"
    },
    {
      "value": "Skully",
      "code": "GM03KNITTA"
    },
    {
      "value": "Other",
      "code": "GM04KNIT99"
    }
  ],
  "League": [
    {
      "value": "CFL",
      "code": "ZZ03LEAGCF"
    },
    {
      "value": "NBA",
      "code": "ZZ03LEAGNB"
    },
    {
      "value": "Indy Car",
      "code": "ZZ03LEAGIC"
    },
    {
      "value": "NCAA",
      "code": "ZZ03LEAGNC"
    },
    {
      "value": "International Soccer",
      "code": "ZZ03LEAGIS"
    },
    {
      "value": "NFL",
      "code": "ZZ03LEAGNF"
    },
    {
      "value": "LPGA",
      "code": "ZZ03LEAGLP"
    },
    {
      "value": "NHL",
      "code": "ZZ03LEAGNH"
    },
    {
      "value": "Mexican League",
      "code": "ZZ03LEAGME"
    },
    {
      "value": "Olympics",
      "code": "ZZ03LEAGLM"
    },
    {
      "value": "Mexican Pacific League",
      "code": "ZZ03LEAGMP"
    },
    {
      "value": "PGA",
      "code": "ZZ03LEAGPG"
    },
    {
      "value": "MiLB ZZ03LE AGMI UFC",
      "code": "ZZ03LEAGUF"
    },
    {
      "value": "MLB",
      "code": "ZZ03LEAGML"
    },
    {
      "value": "WWE",
      "code": "ZZ03LEAGWW"
    },
    {
      "value": "MLS",
      "code": "ZZ03LEAGMS"
    },
    {
      "value": "Other",
      "code": "ZZ04LEAG99"
    },
    {
      "value": "NASCAR",
      "code": "ZZ03LEAGNS"
    }
  ],
  "Leg Type": [
    {
      "value": "Boot Cut",
      "code": "GM03LGTYBC"
    },
    {
      "value": "Tapered",
      "code": "GM03LGTYTA"
    },
    {
      "value": "Flare Leg",
      "code": "GM03LGTYFL"
    },
    {
      "value": "Wide Leg",
      "code": "GM03LGTYWI"
    },
    {
      "value": "Skinny Leg",
      "code": "GM03LGTYSK"
    },
    {
      "value": "Other",
      "code": "GM04LGTY99"
    },
    {
      "value": "Straight Leg",
      "code": "GM03LGTYST"
    }
  ],
  "Length Description": [
    {
      "value": "Above Knee",
      "code": "GM03LNTHAK"
    },
    {
      "value": "Midi Short",
      "code": "GM03LNTHMS"
    },
    {
      "value": "Ankle GM03L NTHAN Mini",
      "code": "GM03LNTHMN"
    },
    {
      "value": "Basketball",
      "code": "GM03LNTHBA"
    },
    {
      "value": "Regular/Full",
      "code": "GM03LNTHRF"
    },
    {
      "value": "Below Knee",
      "code": "GM03LNTHBK"
    },
    {
      "value": "Short",
      "code": "GM03LNTHST"
    },
    {
      "value": "Capri/Calf",
      "code": "GM03LNTHCC"
    },
    {
      "value": "Skimmer",
      "code": "GM03LNTHSK"
    },
    {
      "value": "Car",
      "code": "GM03LNTHCA"
    },
    {
      "value": "Tall",
      "code": "GM03LNTHTA"
    },
    {
      "value": "Cropped",
      "code": "GM03LNTHCR"
    },
    {
      "value": "Tea/Ballet",
      "code": "GM03LNTHTB"
    },
    {
      "value": "Extra Long",
      "code": "GM03LNTHEL"
    },
    {
      "value": "Tunic",
      "code": "GM03LNTHTU"
    },
    {
      "value": "High-Low",
      "code": "GM03LNTHHL"
    },
    {
      "value": "Waist",
      "code": "GM03LNTHWA"
    },
    {
      "value": "Knee",
      "code": "GM03LNTHKN"
    },
    {
      "value": "Walker",
      "code": "GM03LNTHWK"
    },
    {
      "value": "Long",
      "code": "GM03LNTHLN"
    },
    {
      "value": "Waltz",
      "code": "GM03LNTHWZ"
    },
    {
      "value": "Maxi",
      "code": "GM03LNTHMX"
    },
    {
      "value": "Other",
      "code": "GM04LNTH99"
    },
    {
      "value": "Mid",
      "code": "GM03LNTHMD"
    }
  ],
  "Lined": [
    {
      "value": "Fully Lined",
      "code": "GM03LINDFL"
    },
    {
      "value": "Other",
      "code": "GM04LIND99"
    },
    {
      "value": "Semi-Lined",
      "code": "GM03LINDSL"
    }
  ],
  "Lining Material": [
    {
      "value": "Antimicrobial",
      "code": "GM03LIMTAN"
    },
    {
      "value": "Nylon",
      "code": "GM03LIMTNY"
    },
    {
      "value": "Cotton",
      "code": "GM03LIMTCT"
    },
    {
      "value": "Organic Material",
      "code": "GM03LIMTOM"
    },
    {
      "value": "Fabric",
      "code": "GM03LIMTFD"
    },
    {
      "value": "Polyester",
      "code": "GM03LIMTPR"
    },
    {
      "value": "Faux Fur",
      "code": "GM03LIMTFB"
    },
    {
      "value": "PU",
      "code": "GM03LIMTPU"
    },
    {
      "value": "Faux Leather",
      "code": "GM03LIMTFL"
    },
    {
      "value": "PVC",
      "code": "GM03LIMTPV"
    },
    {
      "value": "Faux Shearling",
      "code": "GM03LIMTFS"
    },
    {
      "value": "Quilted",
      "code": "GM03LIMTQT"
    },
    {
      "value": "Fleece",
      "code": "GM03LIMTFC"
    },
    {
      "value": "Shearling Lined",
      "code": "GM03LIMTSL"
    },
    {
      "value": "Gel",
      "code": "GM03LIMTGE"
    },
    {
      "value": "Sherp a",
      "code": "GM03LIMTSP"
    },
    {
      "value": "Leather",
      "code": "GM03LIMTLE"
    },
    {
      "value": "Straw",
      "code": "GM03LIMTST"
    },
    {
      "value": "Logo Lining",
      "code": "GM03LIMTLL"
    },
    {
      "value": "Synthetic",
      "code": "GM03LIMTSY"
    },
    {
      "value": "Memory Foam",
      "code": "GM03LIMTMF"
    },
    {
      "value": "Taffeta",
      "code": "GM03LIMTTA"
    },
    {
      "value": "Mesh",
      "code": "GM03LIMTME"
    },
    {
      "value": "Other",
      "code": "GM04LIMT99"
    }
  ],
  "Metal": [
    {
      "value": "Aluminum",
      "code": "JW03METLAI"
    },
    {
      "value": "Platinum",
      "code": "JW03METLPT"
    },
    {
      "value": "Brass",
      "code": "JW03METLBR"
    },
    {
      "value": "Rhodium",
      "code": "JW03METLRH"
    },
    {
      "value": "Bronze",
      "code": "JW03METLBZ"
    },
    {
      "value": "Rose Gold",
      "code": "JW03METLRG"
    },
    {
      "value": "Cast Iron",
      "code": "JW03METLCI"
    },
    {
      "value": "Silver",
      "code": "JW03METLAG"
    },
    {
      "value": "Gold",
      "code": "JW03METLAU"
    },
    {
      "value": "Titanium",
      "code": "JW03METLTI"
    },
    {
      "value": "Gold Plated",
      "code": "JW03METLGP"
    },
    {
      "value": "White Gold",
      "code": "JW03METLWG"
    },
    {
      "value": "Nickel",
      "code": "JW03METLNI"
    },
    {
      "value": "Other",
      "code": "JW04METL99"
    },
    {
      "value": "Palladium",
      "code": "JW03METLPD"
    }
  ],
  "Metal Composition": [
    {
      "value": "18/0",
      "code": "GM03MTLCCA"
    },
    {
      "value": "Other",
      "code": "GM04MTLC99"
    },
    {
      "value": "18/10",
      "code": "GM03MTLCCB"
    },
    {
      "value": "18/8",
      "code": "GM03MTLCCC"
    }
  ],
  "Necklace Type": [
    {
      "value": "Chain",
      "code": "JW03NKLCCA"
    },
    {
      "value": "Pearl Strand",
      "code": "JW03NKLCPS"
    },
    {
      "value": "Choker",
      "code": "JW03NKLCCH"
    },
    {
      "value": "Penda nt",
      "code": "JW03NKLCPE"
    },
    {
      "value": "Collar",
      "code": "JW03NKLCCL"
    },
    {
      "value": "Y-Necklace",
      "code": "JW03NKLCYN"
    },
    {
      "value": "Locket",
      "code": "JW03NKLCLK"
    },
    {
      "value": "Other",
      "code": "JW04NKLC99"
    },
    {
      "value": "Multi Strand",
      "code": "JW03NKLCMS"
    }
  ],
  "Neckwear Type": [
    {
      "value": "Boa",
      "code": "GM03NECKBA"
    },
    {
      "value": "Oblong Scarf",
      "code": "GM03NECKBS"
    },
    {
      "value": "Bolo",
      "code": "GM03NECKBL"
    },
    {
      "value": "Sarong/Pareo",
      "code": "GM03NECKSP"
    },
    {
      "value": "Bow Tie",
      "code": "GM03NECKBT"
    },
    {
      "value": "Square Scarf",
      "code": "GM03NECKSS"
    },
    {
      "value": "Clip-On Tie",
      "code": "GM03NECKCT"
    },
    {
      "value": "Stole",
      "code": "GM03NECKST"
    },
    {
      "value": "Cravat",
      "code": "GM03NECKCR"
    },
    {
      "value": "Wrap/Shawl",
      "code": "GM03NECKWS"
    },
    {
      "value": "Muffler",
      "code": "GM03NECKMU"
    }
  ],
  "Number of Settings": [
    {
      "value": "Eight",
      "code": "GM03SETSEI"
    },
    {
      "value": "Twelve",
      "code": "GM03SETSTW"
    },
    {
      "value": "Four",
      "code": "GM03SETSFR"
    },
    {
      "value": "Other",
      "code": "GM04SETS99"
    },
    {
      "value": "Six",
      "code": "GM03SETSSX"
    }
  ],
  "Occasion": [
    {
      "value": "Active/Workout",
      "code": "GM03OCCNAW"
    },
    {
      "value": "Evening",
      "code": "GM03OCCNEV"
    },
    {
      "value": "Anniversary",
      "code": "GM03OCCNAN"
    },
    {
      "value": "Fashion",
      "code": "GM03OCCNFA"
    },
    {
      "value": "Athleisure",
      "code": "GM03OCCNAL"
    },
    {
      "value": "Flower Girl",
      "code": "GM03OCCNFG"
    },
    {
      "value": "Athletic",
      "code": "GM03OCCNAT"
    },
    {
      "value": "Formal",
      "code": "GM03OCCNFR"
    },
    {
      "value": "Baby Shower",
      "code": "GM03OCCNBS"
    },
    {
      "value": "Graduation",
      "code": "GM03OCCNGG"
    },
    {
      "value": "Beach/Pool",
      "code": "GM03OCCNBP"
    },
    {
      "value": "Groom",
      "code": "GM03OCCNGM"
    },
    {
      "value": "Birthday",
      "code": "GM03OCCNBI"
    },
    {
      "value": "Homecoming",
      "code": "GM03OCCNHM"
    },
    {
      "value": "Bride",
      "code": "GM03OCCNBR"
    },
    {
      "value": "Lounge",
      "code": "GM03OCCNLN"
    },
    {
      "value": "Bridesmaid",
      "code": "GM03OCCNBD"
    },
    {
      "value": "Mother of the Bride",
      "code": "GM03OCCNMB"
    },
    {
      "value": "Career",
      "code": "GM03OCCNCR"
    },
    {
      "value": "Outdoor",
      "code": "GM03OCCNUT"
    },
    {
      "value": "Casual",
      "code": "GM03OCCNCS"
    },
    {
      "value": "Performance",
      "code": "GM03OCCNPE"
    },
    {
      "value": "Christening/Baptism",
      "code": "GM03OCCNCB"
    },
    {
      "value": "Prom",
      "code": "GM03OCCNPR"
    },
    {
      "value": "Cocktail",
      "code": "GM03OCCNCT"
    },
    {
      "value": "Resort",
      "code": "GM03OCCNRE"
    },
    {
      "value": "Comfort",
      "code": "GM03OCCNCF"
    },
    {
      "value": "Ring Bearer",
      "code": "GM03OCCNRB"
    },
    {
      "value": "Communion",
      "code": "GM03OCCNCM"
    },
    {
      "value": "Safety",
      "code": "GM03OCCNSA"
    },
    {
      "value": "Daytime",
      "code": "GM03OCCNDT"
    },
    {
      "value": "Wedding",
      "code": "GM03OCCNSU"
    },
    {
      "value": "Easter",
      "code": "GM03OCCNEA"
    },
    {
      "value": "Other",
      "code": "GM04OCCN99"
    },
    {
      "value": "Engagement",
      "code": "GM03OCCNEN"
    }
  ],
  "Outsole Type": [
    {
      "value": "Dimpled",
      "code": "GM03OUTSDP"
    },
    {
      "value": "Non-Slip",
      "code": "GM03OUTSNS"
    },
    {
      "value": "Driver",
      "code": "GM03OUTSDR"
    },
    {
      "value": "Tooth",
      "code": "GM03OUTSTT"
    },
    {
      "value": "Embossed",
      "code": "GM03OUTSEM"
    },
    {
      "value": "Tread",
      "code": "GM03OUTSTR"
    },
    {
      "value": "Heavy Lug",
      "code": "GM03OUTSHV"
    },
    {
      "value": "Other",
      "code": "GM04OUTS99"
    },
    {
      "value": "Light Lug",
      "code": "GM03OUTSLL"
    }
  ],
  "Pants/Shorts Type": [
    {
      "value": "5 Pocket/Jean",
      "code": "GM03PTSHFJ"
    },
    {
      "value": "Gaucho/Palazzo",
      "code": "GM03PTSHGP"
    },
    {
      "value": "Bermuda",
      "code": "GM03PTSHBE"
    },
    {
      "value": "Jogger",
      "code": "GM03PTSHJG"
    },
    {
      "value": "Boxer",
      "code": "GM03PTSHBX"
    },
    {
      "value": "Leggings",
      "code": "GM03PTSHLE"
    },
    {
      "value": "Capri",
      "code": "GM03PTSHCA"
    },
    {
      "value": "Pleated",
      "code": "GM03PTSHPL"
    },
    {
      "value": "Cargo",
      "code": "GM03PTSHCG"
    },
    {
      "value": "Skort",
      "code": "GM03PTSHSK"
    },
    {
      "value": "Carpenter",
      "code": "GM03PTSHCP"
    },
    {
      "value": "Sweatpant",
      "code": "GM03PTSHSW"
    },
    {
      "value": "Chino",
      "code": "GM03PTSHCH"
    },
    {
      "value": "Tap",
      "code": "GM03PTSHTA"
    },
    {
      "value": "Culotte",
      "code": "GM03PTSHCL"
    },
    {
      "value": "Track",
      "code": "GM03PTSHTR"
    },
    {
      "value": "Cut Off",
      "code": "GM03PTSHCT"
    },
    {
      "value": "Trouser",
      "code": "GM03PTSHTU"
    },
    {
      "value": "Flat Front",
      "code": "GM03PTSHFF"
    },
    {
      "value": "Other",
      "code": "GM04PTSH99"
    }
  ],
  "Primary Detail Application": [
    {
      "value": "Applique",
      "code": "GM03PDAPAP"
    },
    {
      "value": "Logo Pin",
      "code": "GM03PDAPLP"
    },
    {
      "value": "Banded",
      "code": "GM03PDAPBA"
    },
    {
      "value": "Metallic Ink",
      "code": "GM03PDAPMI"
    },
    {
      "value": "Bling",
      "code": "GM03PDAPBL"
    },
    {
      "value": "Patch",
      "code": "GM03PDAPPA"
    },
    {
      "value": "Cut",
      "code": "GM03PDAPCU"
    },
    {
      "value": "Printed",
      "code": "GM03PDAPPR"
    },
    {
      "value": "Decal",
      "code": "GM03PDAPDE"
    },
    {
      "value": "Printed Tackle Twill",
      "code": "GM03PDAPPT"
    },
    {
      "value": "Embossed",
      "code": "GM03PDAPEM"
    },
    {
      "value": "Raised Embroidery",
      "code": "GM03PDAPRE"
    },
    {
      "value": "Etched",
      "code": "GM03PDAPET"
    },
    {
      "value": "Reactive Glaze",
      "code": "GM03PDAPRG"
    },
    {
      "value": "Fabric Applique",
      "code": "GM03PDAPFA"
    },
    {
      "value": "Reflective Applique",
      "code": "GM03PDAPRA"
    },
    {
      "value": "Felt Applique",
      "code": "GM03PDAPFE"
    },
    {
      "value": "Reflective Screen Print",
      "code": "GM03PDAPRS"
    },
    {
      "value": "Flat Embroidered",
      "code": "GM03PDAPFM"
    },
    {
      "value": "Rhinestone",
      "code": "GM03PDAPRH"
    },
    {
      "value": "Foil",
      "code": "GM03PDAPFL"
    },
    {
      "value": "Screen Print",
      "code": "GM03PDAPSP"
    },
    {
      "value": "Glitter",
      "code": "GM03PDAPGL"
    },
    {
      "value": "Sequins",
      "code": "GM03PDAPSE"
    },
    {
      "value": "Hand Painted",
      "code": "GM03PDAPHP"
    },
    {
      "value": "Tackle Twill",
      "code": "GM03PDAPTT"
    },
    {
      "value": "Heat Seal",
      "code": "GM03PDAPHS"
    },
    {
      "value": "Woven",
      "code": "GM03PDAPWV"
    },
    {
      "value": "High-Density Ink",
      "code": "GM03PDAPHD"
    },
    {
      "value": "Other",
      "code": "GM04PDAP99"
    },
    {
      "value": "Jacquard Knit",
      "code": "GM03PDAPJN"
    }
  ],
  "Primary Detail Placement": [
    {
      "value": "All Over",
      "code": "GM03PDPLAA"
    },
    {
      "value": "Front Pocket",
      "code": "GM03PDPLFP"
    },
    {
      "value": "Back Bottom",
      "code": "GM03PDPLBB"
    },
    {
      "value": "Front Right",
      "code": "GM03PDPLFR"
    },
    {
      "value": "Back Center",
      "code": "GM03PDPLBC"
    },
    {
      "value": "Front Top",
      "code": "GM03PDPLFT"
    },
    {
      "value": "Back Left",
      "code": "GM03PDPLBL"
    },
    {
      "value": "Full Body",
      "code": "GM03PDPLFD"
    },
    {
      "value": "Back Pocket",
      "code": "GM03PDPLBP"
    },
    {
      "value": "Full Front",
      "code": "GM03PDPLFF"
    },
    {
      "value": "Back Right",
      "code": "GM03PDPLBR"
    },
    {
      "value": "Hem",
      "code": "GM03PDPLHE"
    },
    {
      "value": "Back Top",
      "code": "GM03PDPLBT"
    },
    {
      "value": "Left Leg",
      "code": "GM03PDPLLL"
    },
    {
      "value": "Bill",
      "code": "GM03PDPLBI"
    },
    {
      "value": "Left Sleeve",
      "code": "GM03PDPLLS"
    },
    {
      "value": "Collar",
      "code": "GM03PDPLCL"
    },
    {
      "value": "Leg",
      "code": "GM03PDPLLE"
    },
    {
      "value": "Cuff",
      "code": "GM03PDPLCU"
    },
    {
      "value": "Right Leg",
      "code": "GM03PDPLRL"
    },
    {
      "value": "Front Bot tom",
      "code": "GM03PDPLFB"
    },
    {
      "value": "Right Sleeve",
      "code": "GM03PDPLRS"
    },
    {
      "value": "Front Center",
      "code": "GM03PDPLFC"
    },
    {
      "value": "Sleeve",
      "code": "GM03PDPLSL"
    },
    {
      "value": "Front Left",
      "code": "GM03PDPLFL"
    },
    {
      "value": "Other",
      "code": "GM04PDPL99"
    }
  ],
  "Primary Detail Size": [
    {
      "value": "Large",
      "code": "GM03PDSZLG"
    },
    {
      "value": "Small",
      "code": "GM03PDSZSM"
    },
    {
      "value": "Medium",
      "code": "GM03PDSZMD"
    },
    {
      "value": "Other",
      "code": "GM04PDSZ99"
    }
  ],
  "Primary Detail Type": [
    {
      "value": "Brand",
      "code": "GM03PDTPBR"
    },
    {
      "value": "Player Name",
      "code": "GM03PDTPPN"
    },
    {
      "value": "League",
      "code": "GM03PDTPLE"
    },
    {
      "value": "Script",
      "code": "GM03PDTPSC"
    },
    {
      "value": "Letter",
      "code": "GM03PDTPLT"
    },
    {
      "value": "Team",
      "code": "GM03PDTPTE"
    },
    {
      "value": "Mascot",
      "code": "GM03PDTPMA"
    },
    {
      "value": "Wordmark",
      "code": "GM03PDTPWM"
    },
    {
      "value": "Number",
      "code": "GM03PDTPNU"
    },
    {
      "value": "Other",
      "code": "GM04PDTP99"
    },
    {
      "value": "Patch",
      "code": "GM03PDTPPA"
    }
  ],
  "Primary Motif Theme": [
    {
      "value": "Americana",
      "code": "GM03PMTTAM"
    },
    {
      "value": "Character",
      "code": "GM03PMTTCH"
    },
    {
      "value": "Animal",
      "code": "GM03PMTTAN"
    },
    {
      "value": "Other",
      "code": "GM04PMTT99"
    }
  ],
  "Ring Type": [
    {
      "value": "Band",
      "code": "JW03RINGBA"
    },
    {
      "value": "Stacked",
      "code": "JW03RINGST"
    },
    {
      "value": "Midi",
      "code": "JW03RINGMI"
    },
    {
      "value": "Toe",
      "code": "JW03RINGTE"
    },
    {
      "value": "Signet",
      "code": "JW03RINGSI"
    },
    {
      "value": "Other",
      "code": "JW04RING99"
    }
  ],
  "Rug Type": [
    {
      "value": "Accent",
      "code": "GM03RUGTAC"
    },
    {
      "value": "Outdoor",
      "code": "GM03RUGTUT"
    },
    {
      "value": "Bath",
      "code": "GM03RUGTBA"
    },
    {
      "value": "Rug Pad",
      "code": "GM03RUGTRP"
    },
    {
      "value": "Dining Room",
      "code": "GM03RUGTDR"
    },
    {
      "value": "Runners",
      "code": "GM03RUGTRU"
    },
    {
      "value": "Doormat GM03RU GTDM Other",
      "code": "GM04RUGT99"
    },
    {
      "value": "Kitchen",
      "code": "GM03RUGTKI"
    }
  ],
  "Scent Type": [
    {
      "value": "Aquatic",
      "code": "GM03SCTPAQ"
    },
    {
      "value": "Oriental",
      "code": "GM03SCTPOR"
    },
    {
      "value": "Citrus",
      "code": "GM03SCTPCI"
    },
    {
      "value": "Powdery",
      "code": "GM03SCTPPW"
    },
    {
      "value": "Earthy",
      "code": "GM03SCTPEA"
    },
    {
      "value": "Spicy",
      "code": "GM03SCTPSP"
    },
    {
      "value": "Earthy and Woody",
      "code": "GM03SCTPEW"
    },
    {
      "value": "Sweet",
      "code": "GM03SCTPSW"
    },
    {
      "value": "Floral",
      "code": "GM03SCTPFL"
    },
    {
      "value": "Unscented",
      "code": "GM03SCTPUS"
    },
    {
      "value": "Fresh and Clean",
      "code": "GM03SCTPFC"
    },
    {
      "value": "Vanilla",
      "code": "GM03SCTPVA"
    },
    {
      "value": "Fruity",
      "code": "GM03SCTPFR"
    },
    {
      "value": "Warm and Spicy",
      "code": "GM03SCTPWS"
    },
    {
      "value": "Mixed",
      "code": "GM03SCTPMI"
    },
    {
      "value": "Woody",
      "code": "GM03SCTPWD"
    },
    {
      "value": "Musk",
      "code": "GM03SCTPMU"
    },
    {
      "value": "Other",
      "code": "GM04SCTP99"
    }
  ],
  "Seams": [
    {
      "value": "Flat",
      "code": "IA03SEAMFL"
    },
    {
      "value": "Other",
      "code": "IA04SEAM99"
    },
    {
      "value": "Raised",
      "code": "IA03SEAMRA"
    }
  ],
  "Secondary Detail Application": [
    {
      "value": "Applique",
      "code": "GM03SDAPAP"
    },
    {
      "value": "Logo Pin",
      "code": "GM03SDAPLP"
    },
    {
      "value": "Banded",
      "code": "GM03SDAPBA"
    },
    {
      "value": "Metallic Ink",
      "code": "GM03SDAPMI"
    },
    {
      "value": "Bling",
      "code": "GM03SDAPBL"
    },
    {
      "value": "Patch",
      "code": "GM03SDAPPA"
    },
    {
      "value": "Cut",
      "code": "GM03SDAPCU"
    },
    {
      "value": "Printed",
      "code": "GM03SDAPPR"
    },
    {
      "value": "Decal",
      "code": "GM03SDASDE"
    },
    {
      "value": "Printed Tackle Twill",
      "code": "GM03SDAPPT"
    },
    {
      "value": "Embossed",
      "code": "GM03SDAPEM"
    },
    {
      "value": "Raised E mbroidery",
      "code": "GM03SDAPRE"
    },
    {
      "value": "Etched",
      "code": "GM03SDAPET"
    },
    {
      "value": "Reactive Glaze",
      "code": "GM03SDAPRG"
    },
    {
      "value": "Fabric Applique",
      "code": "GM03SDAPFA"
    },
    {
      "value": "Reflective Applique",
      "code": "GM03SDAPRA"
    },
    {
      "value": "Felt Applique",
      "code": "GM03SDAPFE"
    },
    {
      "value": "Reflective Screen Print",
      "code": "GM03SDAPRS"
    },
    {
      "value": "Flat Embroidered",
      "code": "GM03SDAPFM"
    },
    {
      "value": "Rhinestone",
      "code": "GM03SDAPRH"
    },
    {
      "value": "Foil",
      "code": "GM03SDAPFL"
    },
    {
      "value": "Screen Print",
      "code": "GM03SDAPSP"
    },
    {
      "value": "Glitter",
      "code": "GM03SDAPGL"
    },
    {
      "value": "Sequins",
      "code": "GM03SDAPSE"
    },
    {
      "value": "Hand Painted",
      "code": "GM03SDAPHP"
    },
    {
      "value": "Tackle Twill",
      "code": "GM03SDAPTT"
    },
    {
      "value": "Heat Seal",
      "code": "GM03SDAPHS"
    },
    {
      "value": "Woven",
      "code": "GM03SDAPWV"
    },
    {
      "value": "High-Density Ink",
      "code": "GM03SDAPHD"
    },
    {
      "value": "Other",
      "code": "GM04SDAP99"
    },
    {
      "value": "Jacquard Knit",
      "code": "GM03SDAPJN"
    }
  ],
  "Secondary Detail Placement": [
    {
      "value": "All Over",
      "code": "GM03SDPLAA"
    },
    {
      "value": "Front Pocket",
      "code": "GM03SDPLFP"
    },
    {
      "value": "Back Bottom",
      "code": "GM03SDPLBB"
    },
    {
      "value": "Front Right",
      "code": "GM03SDPLFR"
    },
    {
      "value": "Back Center",
      "code": "GM03SDPLBC"
    },
    {
      "value": "Front Top",
      "code": "GM03SDPLFT"
    },
    {
      "value": "Back Left",
      "code": "GM03SDPLBL"
    },
    {
      "value": "Full Body",
      "code": "GM03SDPLFD"
    },
    {
      "value": "Back Pocket",
      "code": "GM03SDPLBP"
    },
    {
      "value": "Full Front",
      "code": "GM03SDPLFF"
    },
    {
      "value": "Back Right",
      "code": "GM03SDPLBR"
    },
    {
      "value": "Hem",
      "code": "GM03SDPLHE"
    },
    {
      "value": "Back Top",
      "code": "GM03SDPLBT"
    },
    {
      "value": "Left Leg",
      "code": "GM03SDPLLL"
    },
    {
      "value": "Bill",
      "code": "GM03SDPLBI"
    },
    {
      "value": "Left Sleeve",
      "code": "GM03SDPLLS"
    },
    {
      "value": "Collar",
      "code": "GM03SDPLCL"
    },
    {
      "value": "Leg",
      "code": "GM03SDPLLE"
    },
    {
      "value": "Cuff",
      "code": "GM03SDPLCU"
    },
    {
      "value": "Right Leg",
      "code": "GM03SDPLRL"
    },
    {
      "value": "Front Bottom",
      "code": "GM03SDPLFB"
    },
    {
      "value": "Right Sleeve",
      "code": "GM03SDPLRS"
    },
    {
      "value": "Front Center",
      "code": "GM03SDPLFC"
    },
    {
      "value": "Sleeve",
      "code": "GM03SDPLSL"
    },
    {
      "value": "Front Left",
      "code": "GM03SDPLFL"
    },
    {
      "value": "Other",
      "code": "GM04SDPL99"
    }
  ],
  "Secondary Detail Size": [
    {
      "value": "Large",
      "code": "GM03SDSZLG"
    },
    {
      "value": "Small",
      "code": "GM03SDSZSM"
    },
    {
      "value": "Medium",
      "code": "GM03SDSZMD"
    },
    {
      "value": "Other",
      "code": "GM04SDSZ99"
    }
  ],
  "Secondary Detail Type": [
    {
      "value": "Brand",
      "code": "GM03SDTPBR"
    },
    {
      "value": "Player Name",
      "code": "GM03SDTPPN"
    },
    {
      "value": "League",
      "code": "GM03SDTPLE"
    },
    {
      "value": "Script",
      "code": "GM03SDTPSC"
    },
    {
      "value": "Letter",
      "code": "GM03SDTPLT"
    },
    {
      "value": "Team",
      "code": "GM03SDTPTE"
    },
    {
      "value": "Mascot",
      "code": "GM03SDTPMA"
    },
    {
      "value": "Wordmark",
      "code": "GM03SDTPWM"
    },
    {
      "value": "Number",
      "code": "GM03SDTPNU"
    },
    {
      "value": "Other",
      "code": "GM04SDTP99"
    },
    {
      "value": "Patch",
      "code": "GM03SDTPPA"
    }
  ],
  "Secondary Motif Theme": [
    {
      "value": "Americana",
      "code": "GM03SMTTAM"
    },
    {
      "value": "Character",
      "code": "GM03SMTTCH"
    },
    {
      "value": "Animal",
      "code": "GM03SMTTAN"
    },
    {
      "value": "Other",
      "code": "GM04SMTT99"
    }
  ],
  "Selling Channel": [
    {
      "value": "In store only",
      "code": "ZZ03SELCIS"
    },
    {
      "value": "Online only",
      "code": "ZZ03SELCON"
    },
    {
      "value": "No restrictions",
      "code": "ZZ03SELCNR"
    },
    {
      "value": "Other",
      "code": "ZZ04SELC99"
    }
  ],
  "Shape": [
    {
      "value": "Bedrest",
      "code": "GM03SHPEBE"
    },
    {
      "value": "Rectangular",
      "code": "GM03SHPERE"
    },
    {
      "value": "Bolster",
      "code": "GM03SHPEBL"
    },
    {
      "value": "Round",
      "code": "GM03SHPERO"
    },
    {
      "value": "Breakfast /Boudoir",
      "code": "GM03SHPEBB"
    },
    {
      "value": "Shaped/Novelty",
      "code": "GM03SHPESN"
    },
    {
      "value": "Figure/Shaped",
      "code": "GM03SHPEFS"
    },
    {
      "value": "Soft Square",
      "code": "GM03SHPESS"
    },
    {
      "value": "Lumbar",
      "code": "GM03SHPELU"
    },
    {
      "value": "Square",
      "code": "GM03SHPESQ"
    },
    {
      "value": "Neckroll",
      "code": "GM03SHPENE"
    },
    {
      "value": "Triangle",
      "code": "GM03SHPETR"
    },
    {
      "value": "Oval/Oblong",
      "code": "GM03SHPEVB"
    },
    {
      "value": "Other",
      "code": "GM04SHPE99"
    }
  ],
  "Shoe Style": [
    {
      "value": "Alpine Boot",
      "code": "GM03SHOEAB"
    },
    {
      "value": "Hiking",
      "code": "GM03SHOEHK"
    },
    {
      "value": "Ankle Strap",
      "code": "GM03SHOEAS"
    },
    {
      "value": "High Top",
      "code": "GM03SHOEHT"
    },
    {
      "value": "Athleisure",
      "code": "GM03SHOEAT"
    },
    {
      "value": "Huarache",
      "code": "GM03SHOEHU"
    },
    {
      "value": "Ballet",
      "code": "GM03SHOEBA"
    },
    {
      "value": "Instep Strap",
      "code": "GM03SHOEIS"
    },
    {
      "value": "Baseball",
      "code": "GM03SHOEBB"
    },
    {
      "value": "Insulate d",
      "code": "GM03SHOEIN"
    },
    {
      "value": "Basketball",
      "code": "GM03SHOEBK"
    },
    {
      "value": "Loafer",
      "code": "GM03SHOELF"
    },
    {
      "value": "Biker Boot",
      "code": "GM03SHOEBI"
    },
    {
      "value": "Low Top",
      "code": "GM03SHOELT"
    },
    {
      "value": "Boat Shoe",
      "code": "GM03SHOEBS"
    },
    {
      "value": "Jellies",
      "code": "GM03SHOEJE"
    },
    {
      "value": "Bootie",
      "code": "GM03SHOEBT"
    },
    {
      "value": "Mary Jane",
      "code": "GM03SHOEMJ"
    },
    {
      "value": "Caged",
      "code": "GM03SHOECA"
    },
    {
      "value": "Military & Police",
      "code": "GM03SHOEMP"
    },
    {
      "value": "Chelsea",
      "code": "GM03SHOECH"
    },
    {
      "value": "Moccasin",
      "code": "GM03SHOEMC"
    },
    {
      "value": "Chukka",
      "code": "GM03SHOECK"
    },
    {
      "value": "Monk Strap",
      "code": "GM03SHOEMS"
    },
    {
      "value": "Cleats",
      "code": "GM03SHOECL"
    },
    {
      "value": "Penny Loafer",
      "code": "GM03SHOEPE"
    },
    {
      "value": "Climbing",
      "code": "GM03SHOECM"
    },
    {
      "value": "Platform",
      "code": "GM03SHOEPL"
    },
    {
      "value": "Combat Boot",
      "code": "GM03SHOECB"
    },
    {
      "value": "Rain Boot",
      "code": "GM03SHOERA"
    },
    {
      "value": "Comfort",
      "code": "GM03SHOECF"
    },
    {
      "value": "Riding Boot",
      "code": "GM03SHOERI"
    },
    {
      "value": "Cross -Fit",
      "code": "GM03SHOECR"
    },
    {
      "value": "Slide",
      "code": "GM03SHOESL"
    },
    {
      "value": "Cross -Training",
      "code": "GM03SHOECT"
    },
    {
      "value": "Sling Back",
      "code": "GM03SHOESB"
    },
    {
      "value": "Cycling",
      "code": "GM03SHOECY"
    },
    {
      "value": "Slipper",
      "code": "GM03SHOESP"
    },
    {
      "value": "Dance",
      "code": "GM03SHOEDA"
    },
    {
      "value": "Smoking Slipper",
      "code": "GM03SHOESM"
    },
    {
      "value": "D'Orsay",
      "code": "GM03SHOEDR"
    },
    {
      "value": "Sneaker",
      "code": "GM03SHOESN"
    },
    {
      "value": "Driver",
      "code": "GM03SHOEDV"
    },
    {
      "value": "Snow Boot",
      "code": "GM03SHOESW"
    },
    {
      "value": "Espadrille",
      "code": "GM03SHOEES"
    },
    {
      "value": "Soccer",
      "code": "GM03SHOESR"
    },
    {
      "value": "Fisherman",
      "code": "GM03SHOEFI"
    },
    {
      "value": "Steel Toe",
      "code": "GM03SHOEST"
    },
    {
      "value": "Flatform",
      "code": "GM03SHOEFL"
    },
    {
      "value": "Tennis",
      "code": "GM03SHOETE"
    },
    {
      "value": "Flip-Flop",
      "code": "GM03SHOEFP"
    },
    {
      "value": "Thong",
      "code": "GM03SHOETH"
    },
    {
      "value": "Football",
      "code": "GM03SHOEFT"
    },
    {
      "value": "Walking",
      "code": "GM03SHOEWA"
    },
    {
      "value": "Gladiator",
      "code": "GM03SHOEGL"
    },
    {
      "value": "Water Shoe",
      "code": "GM03SHOEWS"
    },
    {
      "value": "Golf GM03SH OEGF Wingtip",
      "code": "GM03SHOEWT"
    },
    {
      "value": "Hand-Sewn",
      "code": "GM03SHOEHS"
    },
    {
      "value": "Other",
      "code": "GM04SHOE99"
    }
  ],
  "Shoe Type": [
    {
      "value": "Boots/Booties",
      "code": "GM03SETPBB"
    },
    {
      "value": "Pumps",
      "code": "GM03SETPPP"
    },
    {
      "value": "Clogs/Mules",
      "code": "GM03SETPCM"
    },
    {
      "value": "Sandals",
      "code": "GM03SETPSA"
    },
    {
      "value": "Flats GM03SE TPFL Slippers",
      "code": "GM03SETPSL"
    },
    {
      "value": "Loafers/Mocs",
      "code": "GM03SETPLM"
    },
    {
      "value": "Sneakers",
      "code": "GM03SETPSN"
    },
    {
      "value": "Oxfords",
      "code": "GM03SETPXF"
    },
    {
      "value": "Other",
      "code": "GM04SETP99"
    }
  ],
  "Skin Type": [
    {
      "value": "Aging",
      "code": "GM03SKTPAG"
    },
    {
      "value": "Oily",
      "code": "GM03SKTPLY"
    },
    {
      "value": "All",
      "code": "GM03SKTPAL"
    },
    {
      "value": "Sensitive",
      "code": "GM03SKTPSE"
    },
    {
      "value": "Combination",
      "code": "GM03SKTPCM"
    },
    {
      "value": "Other",
      "code": "GM04SKTP99"
    },
    {
      "value": "Dry",
      "code": "GM03SKTPDR"
    }
  ],
  "Skirt Type": [
    {
      "value": "A-line",
      "code": "GM03SKRTAL"
    },
    {
      "value": "Pencil",
      "code": "GM03SKRTPE"
    },
    {
      "value": "Circular",
      "code": "GM03SKRTCI"
    },
    {
      "value": "Skort",
      "code": "GM03SKRTSK"
    },
    {
      "value": "Faux Wr ap",
      "code": "GM03SKRTFW"
    },
    {
      "value": "Straight",
      "code": "GM03SKRTST"
    },
    {
      "value": "Flared",
      "code": "GM03SKRTFL"
    },
    {
      "value": "Tiered",
      "code": "GM03SKRTTI"
    },
    {
      "value": "Full",
      "code": "GM03SKRTFU"
    },
    {
      "value": "Wrap",
      "code": "GM03SKRTWR"
    },
    {
      "value": "Mermaid/Trumpet",
      "code": "GM03SKRTMT"
    },
    {
      "value": "Other",
      "code": "GM04SKRT99"
    }
  ],
  "Sleeve Type": [
    {
      "value": "1/2 Sleeve",
      "code": "GM03SLVTHT"
    },
    {
      "value": "Roll-Tab (Long to elbow/short)",
      "code": "GM03SLVTRT"
    },
    {
      "value": "1/4 sleeve",
      "code": "GM03SLVTQS"
    },
    {
      "value": "Short",
      "code": "GM03SLVTST"
    },
    {
      "value": "3/4 Sleeve",
      "code": "GM03SLVTTT"
    },
    {
      "value": "Sleeveless",
      "code": "GM03SLVTS4"
    },
    {
      "value": "Cap",
      "code": "GM03SLVTCS"
    },
    {
      "value": "Spaghetti Strap",
      "code": "GM03SLVTSI"
    },
    {
      "value": "Elbow",
      "code": "GM03SLVTES"
    },
    {
      "value": "Other Sleeve Type",
      "code": "GM04SLVT99"
    },
    {
      "value": "Long",
      "code": "GM03SLVTLO"
    },
    {
      "value": "Roll-Tab (3/4 to short)",
      "code": "GM03SLVTTR"
    }
  ],
  "Sole Type": [
    {
      "value": "Leather",
      "code": "GM03SOLTLS"
    },
    {
      "value": "Rubber",
      "code": "GM03SOLTRS"
    },
    {
      "value": "Synthetic",
      "code": "GM03SOLTSJ"
    },
    {
      "value": "Recycled",
      "code": "GM03SOLTRE"
    },
    {
      "value": "Natural Fiber",
      "code": "GM03SOLTNS"
    },
    {
      "value": "Other Sole Type",
      "code": "GM04SOLT99"
    }
  ],
  "Special Embellishment": [
    {
      "value": "Beads",
      "code": "GM03SPEMBE"
    },
    {
      "value": "Logo",
      "code": "GM03SPEMLG"
    },
    {
      "value": "Bows",
      "code": "GM03SPEMBW"
    },
    {
      "value": "Metal Ornament",
      "code": "GM03SPEMMR"
    },
    {
      "value": "Braiding",
      "code": "GM03SPEMBR"
    },
    {
      "value": "Nailheads",
      "code": "GM03SPEMNA"
    },
    {
      "value": "Broguing",
      "code": "GM03SPEMBG"
    },
    {
      "value": "Penny Keeper",
      "code": "GM03SPEMPK"
    },
    {
      "value": "Buckle(s)",
      "code": "GM03SPEMBU"
    },
    {
      "value": "Perforation",
      "code": "GM03SPEMPE"
    },
    {
      "value": "Chain",
      "code": "GM03SPEMCH"
    },
    {
      "value": "Piping",
      "code": "GM03SPEMPI"
    },
    {
      "value": "Contrast Stitching",
      "code": "GM03SPEMCS"
    },
    {
      "value": "Pleated",
      "code": "GM03SPEMPL"
    },
    {
      "value": "Crochet",
      "code": "GM03SPEMCR"
    },
    {
      "value": "Quilting",
      "code": "GM03SPEMQU"
    },
    {
      "value": "Cuff",
      "code": "GM03SPEMCF"
    },
    {
      "value": "Rhinestones",
      "code": "GM03SPEMRH"
    },
    {
      "value": "Cut-outs",
      "code": "GM03SPEMCU"
    },
    {
      "value": "Ruffles",
      "code": "GM03SPEMRU"
    },
    {
      "value": "Embroidery",
      "code": "GM03SPEMEM"
    },
    {
      "value": "Sequins",
      "code": "GM03SPEMSE"
    },
    {
      "value": "Feathers",
      "code": "GM03SPEMFE"
    },
    {
      "value": "Speed Lacing",
      "code": "GM03SPEMSL"
    },
    {
      "value": "Flower",
      "code": "GM03SPEMFL"
    },
    {
      "value": "Studded",
      "code": "GM03SPEMST"
    },
    {
      "value": "Fringe",
      "code": "GM03SPEMFR"
    },
    {
      "value": "Tassels",
      "code": "GM03SPEMTA"
    },
    {
      "value": "Glitter",
      "code": "GM03SPEMGL"
    },
    {
      "value": "Tortoise",
      "code": "GM03SPEMTS"
    },
    {
      "value": "Grommets",
      "code": "GM03SPEMGR"
    },
    {
      "value": "Wood",
      "code": "GM03SPEMWD"
    },
    {
      "value": "Harness",
      "code": "GM03SPEMHA"
    },
    {
      "value": "Zipper",
      "code": "GM03SPEMZI"
    },
    {
      "value": "Jewels",
      "code": "GM03SPEMJE"
    },
    {
      "value": "Other",
      "code": "GM04SPEM99"
    },
    {
      "value": "Knotting",
      "code": "GM03SPEMKN"
    },
    {
      "value": "Lace",
      "code": "GM03SPEMLA"
    }
  ],
  "SPF Rating": [
    {
      "value": "10",
      "code": "GM03SPFRRA"
    },
    {
      "value": "50",
      "code": "GM03SPFRRE"
    },
    {
      "value": "15",
      "code": "GM03SPFRRB"
    },
    {
      "value": "60",
      "code": "GM03SPFRRF"
    },
    {
      "value": "30",
      "code": "GM03SPFRRC"
    },
    {
      "value": "80",
      "code": "GM03SPFRRG"
    },
    {
      "value": "40",
      "code": "GM03SPFRRD"
    },
    {
      "value": "Other",
      "code": "GM04SPFR99"
    }
  ],
  "Sport": [
    {
      "value": "Badminton",
      "code": "ZZ03SPRTBD"
    },
    {
      "value": "Hunting",
      "code": "ZZ03SPRTHU"
    },
    {
      "value": "Baseball",
      "code": "ZZ03SPRTBA"
    },
    {
      "value": "Lacrosse",
      "code": "ZZ03SPRTLA"
    },
    {
      "value": "Basketball",
      "code": "ZZ03SPRTBK"
    },
    {
      "value": "Racing",
      "code": "ZZ03SPRTRA"
    },
    {
      "value": "Bocce Ball",
      "code": "ZZ03SPRTBB"
    },
    {
      "value": "Racquetball",
      "code": "ZZ03SPRTRC"
    },
    {
      "value": "Bowling",
      "code": "ZZ03SPRTBW"
    },
    {
      "value": "Rowing",
      "code": "ZZ03SPRTRW"
    },
    {
      "value": "Boxing/Martial Arts",
      "code": "ZZ03SPRTBM"
    },
    {
      "value": "Running",
      "code": "ZZ03SPRTRU"
    },
    {
      "value": "Climbing",
      "code": "ZZ03SPRTCL"
    },
    {
      "value": "Skiing",
      "code": "ZZ03SPRTSK"
    },
    {
      "value": "Cross Country",
      "code": "ZZ03SPRTCC"
    },
    {
      "value": "Soccer",
      "code": "ZZ03SPRTSC"
    },
    {
      "value": "Cross -Training",
      "code": "ZZ03SPRTCT"
    },
    {
      "value": "Softball",
      "code": "ZZ03SPRTSF"
    },
    {
      "value": "Cycling",
      "code": "ZZ03SPRTCY"
    },
    {
      "value": "Tennis",
      "code": "ZZ03SPRTTE"
    },
    {
      "value": "Dance",
      "code": "ZZ03SPRTDA"
    },
    {
      "value": "Water Skiing",
      "code": "ZZ03SPRTWA"
    },
    {
      "value": "Football",
      "code": "ZZ03SPRTFT"
    },
    {
      "value": "Wrestling",
      "code": "ZZ03SPRTWR"
    },
    {
      "value": "Golf",
      "code": "ZZ03SPRTGF"
    },
    {
      "value": "Yoga",
      "code": "ZZ03SPRTYG"
    },
    {
      "value": "Hiking",
      "code": "ZZ03SPRTHI"
    },
    {
      "value": "Other",
      "code": "ZZ04SPRT99"
    },
    {
      "value": "Hockey",
      "code": "ZZ03SPRTHK"
    }
  ],
  "Supply Type": [
    {
      "value": "Evergreen",
      "code": "ZZ03SUTYEV"
    },
    {
      "value": "Perennial",
      "code": "ZZ03SUTYPE"
    },
    {
      "value": "Made To Order",
      "code": "ZZ03SUTYMT"
    },
    {
      "value": "Seasonal with Limited Replenishment",
      "code": "ZZ03SUTYSL"
    },
    {
      "value": "Made to Stock",
      "code": "ZZ03SUTYMS"
    },
    {
      "value": "Other",
      "code": "ZZ04SUTY99"
    }
  ],
  "Sweater/Pullover Type": [
    {
      "value": "Babydoll",
      "code": "GM03SWPUBA"
    },
    {
      "value": "Hoodie",
      "code": "GM03SWPUHD"
    },
    {
      "value": "Blouse",
      "code": "GM03SWPUBL"
    },
    {
      "value": "Peasant",
      "code": "GM03SWPUPE"
    },
    {
      "value": "Box Top",
      "code": "GM03SWPUBT"
    },
    {
      "value": "Peplum",
      "code": "GM03SWPUPP"
    },
    {
      "value": "Bustier/Bra Top",
      "code": "GM03SWPUBB"
    },
    {
      "value": "Pullover",
      "code": "GM03SWPUPU"
    },
    {
      "value": "Button Front",
      "code": "GM03SWPUBF"
    },
    {
      "value": "Racerback",
      "code": "GM03SWPURA"
    },
    {
      "value": "Cami",
      "code": "GM03SWPUCA"
    },
    {
      "value": "Sweat er",
      "code": "GM03SWPUSW"
    },
    {
      "value": "Camisole",
      "code": "GM03SWPUCM"
    },
    {
      "value": "Sweatshirt",
      "code": "GM03SWPUSS"
    },
    {
      "value": "Cardigan",
      "code": "GM03SWPUCR"
    },
    {
      "value": "Tank",
      "code": "GM03SWPUTA"
    },
    {
      "value": "Cocoon",
      "code": "GM03SWPUCC"
    },
    {
      "value": "T-Shirt",
      "code": "GM03SWPUTS"
    },
    {
      "value": "Dress Shirt",
      "code": "GM03SWPUDS"
    },
    {
      "value": "Tunic",
      "code": "GM03SWPUTU"
    },
    {
      "value": "Drop Waist",
      "code": "GM03SWPUDW"
    },
    {
      "value": "Vest",
      "code": "GM03SWPUVE"
    },
    {
      "value": "Faux Wrap",
      "code": "GM03SWPUFW"
    },
    {
      "value": "Wrap",
      "code": "GM03SWPUWR"
    },
    {
      "value": "Flyaw ay/Apron",
      "code": "GM03SWPUFA"
    },
    {
      "value": "Other",
      "code": "GM04SWPU99"
    }
  ],
  "Tableware Type": [
    {
      "value": "Dinnerware",
      "code": "GM03TBLTDI"
    },
    {
      "value": "Glassware",
      "code": "GM03TBLTGL"
    },
    {
      "value": "Flatware",
      "code": "GM03TBLTFL"
    },
    {
      "value": "Other",
      "code": "GM04TBLT99"
    }
  ],
  "Third Detail Application": [
    {
      "value": "Applique",
      "code": "GM03TDAPAP"
    },
    {
      "value": "Logo Pin",
      "code": "GM03TDAPLP"
    },
    {
      "value": "Banded",
      "code": "GM03TDAPBA"
    },
    {
      "value": "Metallic Ink",
      "code": "GM03TDAPMI"
    },
    {
      "value": "Bling",
      "code": "GM03TDAPBL"
    },
    {
      "value": "Patch",
      "code": "GM03TDAPPA"
    },
    {
      "value": "Cut",
      "code": "GM03TDAPCU"
    },
    {
      "value": "Printed",
      "code": "GM03TDAPPR"
    },
    {
      "value": "Decal",
      "code": "GM03TDATDE"
    },
    {
      "value": "Printed Tackle Twill",
      "code": "GM03TDAPPT"
    },
    {
      "value": "Embossed",
      "code": "GM03TDAPEM"
    },
    {
      "value": "Raised Embroidery",
      "code": "GM03TDAPRE"
    },
    {
      "value": "Etched",
      "code": "GM03TDAPET"
    },
    {
      "value": "Reactive Glaze",
      "code": "GM03TDAPRG"
    },
    {
      "value": "Fabric Applique",
      "code": "GM03TDAPFA"
    },
    {
      "value": "Reflective Applique",
      "code": "GM03TDAPRA"
    },
    {
      "value": "Felt Applique",
      "code": "GM03TDAPFE"
    },
    {
      "value": "Reflective Screen Print",
      "code": "GM03TDAPRS"
    },
    {
      "value": "Flat Embroidered",
      "code": "GM03TDAPFM"
    },
    {
      "value": "Rhinestone",
      "code": "GM03TDAPRH"
    },
    {
      "value": "Foil",
      "code": "GM03TDAPFL"
    },
    {
      "value": "Screen Print",
      "code": "GM03TDAPSP"
    },
    {
      "value": "Glitter",
      "code": "GM03TDAPGL"
    },
    {
      "value": "Sequins",
      "code": "GM03TDAPSE"
    },
    {
      "value": "Hand Painted",
      "code": "GM03TDAPHP"
    },
    {
      "value": "Tackle Twill",
      "code": "GM03TDAPTT"
    },
    {
      "value": "Heat Seal",
      "code": "GM03TDAPHS"
    },
    {
      "value": "Woven",
      "code": "GM03TDAPWV"
    },
    {
      "value": "High Density Ink",
      "code": "GM03TDAPHD"
    },
    {
      "value": "Other",
      "code": "GM04TDAP99"
    },
    {
      "value": "Jacquard Knit",
      "code": "GM03TDAPJN"
    }
  ],
  "Third Detail Placement": [
    {
      "value": "All Over",
      "code": "GM03TDPLAA"
    },
    {
      "value": "Front Pocket",
      "code": "GM03TDPLFP"
    },
    {
      "value": "Back Bottom",
      "code": "GM03TDPLBB"
    },
    {
      "value": "Front Right",
      "code": "GM03TDPLFR"
    },
    {
      "value": "Back Center",
      "code": "GM03TDPLBC"
    },
    {
      "value": "Front Top",
      "code": "GM03TDPLFT"
    },
    {
      "value": "Back Left",
      "code": "GM03TDPLBL"
    },
    {
      "value": "Full Body",
      "code": "GM03TDPLFD"
    },
    {
      "value": "Back Pocket",
      "code": "GM03TDPLBP"
    },
    {
      "value": "Full Front",
      "code": "GM03TDPLFF"
    },
    {
      "value": "Back Right",
      "code": "GM03TDPLBR"
    },
    {
      "value": "Hem",
      "code": "GM03TDPLHE"
    },
    {
      "value": "Back Top",
      "code": "GM03TDPLBT"
    },
    {
      "value": "Left Leg",
      "code": "GM03TDPLLL"
    },
    {
      "value": "Bill",
      "code": "GM03TDPLBI"
    },
    {
      "value": "Left Sleeve",
      "code": "GM03TDPLLS"
    },
    {
      "value": "Collar",
      "code": "GM03TDPLCL"
    },
    {
      "value": "Leg",
      "code": "GM03TDPLLE"
    },
    {
      "value": "Cuff",
      "code": "GM03TDPLCU"
    },
    {
      "value": "Right Leg",
      "code": "GM03TDPLRL"
    },
    {
      "value": "Front Bottom",
      "code": "GM03TDPLFB"
    },
    {
      "value": "Right Sleeve",
      "code": "GM03TDPLRS"
    },
    {
      "value": "Front Center",
      "code": "GM03TDPLFC"
    },
    {
      "value": "Sleeve",
      "code": "GM03TDPLSL"
    },
    {
      "value": "Front Left",
      "code": "GM03TDPLFL"
    },
    {
      "value": "Other",
      "code": "GM04TDPL99"
    }
  ],
  "Third Detail Size": [
    {
      "value": "Medium GM03 TDSZMD Other",
      "code": "GM04TDSZ99"
    }
  ],
  "Third Detail Type": [
    {
      "value": "Brand",
      "code": "GM03TDTPBR"
    },
    {
      "value": "Player Name",
      "code": "GM03TDTPPN"
    },
    {
      "value": "League",
      "code": "GM03TDTPLE"
    },
    {
      "value": "Script",
      "code": "GM03TDTPSC"
    },
    {
      "value": "Letter",
      "code": "GM03TDTPLT"
    },
    {
      "value": "Team",
      "code": "GM03TDTPTE"
    },
    {
      "value": "Mascot",
      "code": "GM03TDTPMA"
    },
    {
      "value": "Wordmark",
      "code": "GM03TDTPWM"
    },
    {
      "value": "Number",
      "code": "GM03TDTPNU"
    },
    {
      "value": "Other",
      "code": "GM04TDTP99"
    },
    {
      "value": "Patch",
      "code": "GM03TDTPPA"
    }
  ],
  "Third Motif Theme": [
    {
      "value": "Animal GM03 TMTTAN Other",
      "code": "GM04TMTT99"
    }
  ],
  "Toe Shape": [
    {
      "value": "Almond",
      "code": "GM03TOESAL"
    },
    {
      "value": "Round",
      "code": "GM03TOESRD"
    },
    {
      "value": "Apron Toe",
      "code": "GM03TOESAP"
    },
    {
      "value": "Snip",
      "code": "GM03TOESSN"
    },
    {
      "value": "Cap Toe",
      "code": "GM03TOESCT"
    },
    {
      "value": "Split Toe",
      "code": "GM03TOESSP"
    },
    {
      "value": "Oblique",
      "code": "GM03TOESOB"
    },
    {
      "value": "Square",
      "code": "GM03TOESSQ"
    },
    {
      "value": "Open Toe",
      "code": "GM03TOESOT"
    },
    {
      "value": "Steel Toe",
      "code": "GM03TOESST"
    },
    {
      "value": "Peep Toe",
      "code": "GM03TOESPT"
    },
    {
      "value": "Other",
      "code": "GM04TOES99"
    }
  ],
  "Towel Type": [
    {
      "value": "Bath",
      "code": "GM03TOWLBA"
    },
    {
      "value": "Towel Set",
      "code": "GM03TOWLTS"
    },
    {
      "value": "Beach",
      "code": "GM03TOWLBE"
    },
    {
      "value": "Wash",
      "code": "GM03TOWLWA"
    },
    {
      "value": "Hand",
      "code": "GM03TOWLHA"
    },
    {
      "value": "Other",
      "code": "GM04TOWL99"
    },
    {
      "value": "Kitchen",
      "code": "GM03TOWLKI"
    }
  ],
  "Waist Rise": [
    {
      "value": "Classic",
      "code": "GM03WSDRCL"
    },
    {
      "value": "Mid",
      "code": "GM03WSDRMI"
    },
    {
      "value": "High",
      "code": "GM03WSDRHI"
    },
    {
      "value": "Other",
      "code": "GM04WSDR99"
    },
    {
      "value": "Low",
      "code": "GM03WSDRLW"
    }
  ],
  "Waistband Type": [
    {
      "value": "Band Roll",
      "code": "GM03WBTPBR"
    },
    {
      "value": "Knit",
      "code": "GM03WBTPKN"
    },
    {
      "value": "Belt Hook",
      "code": "GM03WBTPBH"
    },
    {
      "value": "Maternity",
      "code": "GM03WBTPMT"
    },
    {
      "value": "Drawstring",
      "code": "GM03WBTPDS"
    },
    {
      "value": "None",
      "code": "GM03WBTPNN"
    },
    {
      "value": "D-ring",
      "code": "GM03WBTPDR"
    },
    {
      "value": "Rigid",
      "code": "GM03WBTPRG"
    },
    {
      "value": "Expander",
      "code": "GM03WBTPEX"
    },
    {
      "value": "Self Fabric Underwear",
      "code": "GM03WBTPSF"
    },
    {
      "value": "Full Elastic",
      "code": "GM03WBTPFE"
    },
    {
      "value": "Side Ela stic",
      "code": "GM03WBTPSE"
    },
    {
      "value": "Half Elastic",
      "code": "GM03WBTPHE"
    },
    {
      "value": "Side Tab",
      "code": "GM03WBTPST"
    },
    {
      "value": "Hook and Loop",
      "code": "GM03WBTPVE"
    },
    {
      "value": "Stretch Elastic",
      "code": "GM03WBTPSR"
    },
    {
      "value": "Ino-Flex",
      "code": "GM03WBTPIF"
    },
    {
      "value": "Other",
      "code": "GM04WBTP99"
    },
    {
      "value": "Inside Adjustable",
      "code": "GM03WBTPIA"
    }
  ],
  "Watch Case Shape": [
    {
      "value": "Oval",
      "code": "JW03WACSVA"
    },
    {
      "value": "Square",
      "code": "JW03WACSSQ"
    },
    {
      "value": "Rectangular",
      "code": "JW03WACSRE"
    },
    {
      "value": "Other",
      "code": "JW04WACS99"
    },
    {
      "value": "Round",
      "code": "JW03WACSRN"
    }
  ],
  "Water Repellent": [
    {
      "value": "Waterproof",
      "code": "ZZ03WATRPF"
    },
    {
      "value": "Other",
      "code": "ZZ04WATR99"
    },
    {
      "value": "Water Resistant",
      "code": "ZZ03WATRRE"
    }
  ]
}
