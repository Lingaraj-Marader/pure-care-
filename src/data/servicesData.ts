import { IconType } from "react-icons";
import {
  FaSoap,
  FaHandSparkles,
  FaShieldAlt,
  FaLightbulb,
  FaStar,
  FaWind,
  FaSprayCan,
  FaFan,
  FaCar,
  FaCog,
  FaTint,
  FaBroom,
  FaSun,
  FaMagic,
  FaTabletAlt,
  FaCamera,
} from "react-icons/fa";
import {
  MdLocalCarWash,
  MdWeekend,
  MdDashboard,
  MdEventSeat,
  MdAirlineSeatReclineExtra,
  MdAutoFixHigh,
  MdColorLens,
  MdLayers,
} from "react-icons/md";

export interface SubService {
  name: string;
  blurb: string;
  icon: IconType;
  image?: string;
  slug?: string;
  banner?: string;
  bannerW?: number;
  bannerH?: number;
  description?: string;
  features?: string[];
  gallery?: string[];
}

export interface ServiceCategory {
  key: string;
  title: string;
  tagline: string;
  intro: string;
  emoji: string;
  icon: IconType;
  image: string;
  color: string;
  accent: string;
  hoverBorder: string;
  subServices: SubService[];
}

const n = "/services/exterior-detailing";
const a = "/services/interior-detailing";

export const categories: ServiceCategory[] = [
  {
    key: "exterior",
    icon: MdLocalCarWash,
    emoji: "🚗",
    title: "Exterior Detailing",
    tagline: "Showroom shine engineered for the UAE heat, sun, and dust",
    intro:
      "Our exterior detailing restores and protects every painted surface, from a careful hand wash to long-lasting ceramic coating. Engineered for the UAE's relentless sun, heat and dust, it keeps your car looking showroom-fresh.",
    image: "/services/Car-Polish.jpg",
    color: "from-blue-primary to-blue-dark",
    accent: "text-blue-primary",
    hoverBorder: "hover:border-red-primary/50",
    subServices: [
      {
        icon: FaSoap,
        name: "Hand Wash & Premium Shampoo",
        blurb: "Gentle hand wash lifting dust and grime with no swirl marks or scratches.",
        image: `${n}/hand-wash/1.png`,
        slug: "handwash-premiumshampoo",
        description:
          "Every detail starts with a flawless, safe wash. We hand-wash your vehicle using the two-bucket method and a pH-balanced premium shampoo that lifts dust, road film and grime without stripping wax or leaving swirl marks. Wheels, arches and door shuts are cleaned by hand so the whole car — not just the panels — comes back genuinely spotless.",
        features: [
          "Two-bucket, swirl-free hand wash",
          "pH-neutral premium shampoo",
          "Wheels, arches & door shuts detailed",
          "Grit guards & soft microfibre drying",
        ],
        gallery: [
          `${n}/hand-wash/1.png`,
          `${n}/hand-wash/2.png`,
          `${n}/hand-wash/3.png`,
        ],
      },
      {
        icon: FaHandSparkles,
        name: "Clay Bar Decontamination",
        blurb: "Pulls embedded contaminants from your paint, leaving a glass-smooth surface ready for protection.",
        image: `${n}/clay-bar/1.png`,
        slug: "clay-bar-decontamination",
        description:
          "Even a clean-looking car hides bonded contaminants — industrial fallout, tar and rail dust — that washing alone can't remove. Our clay bar treatment gently pulls these particles out of the paint, leaving a glass-smooth surface that's ready to accept wax, sealant or ceramic coating for maximum bonding and shine.",
        features: [
          "Removes bonded contaminants & fallout",
          "Tar & rail-dust removal",
          "Glass-smooth paint finish",
          "Preps paint for coating",
        ],
        gallery: [
          `${n}/clay-bar/1.png`,
          `${n}/clay-bar/2.png`,
          `${n}/clay-bar/3.png`,
        ],
      },
      {
        icon: FaMagic,
        name: "Machine Polishing & Paint Correction",
        blurb: "Erases swirls, scratches and oxidation to restore deep, mirror-like factory gloss.",
        image: `${n}/machine-polishing/2.png`,
        slug: "machine-polishing-paint-correction",
        description:
          "Machine polishing removes the swirl marks, light scratches, holograms and oxidation that dull your paint over time. Using professional dual-action polishers and graded compounds, we restore depth, clarity and a true mirror gloss — correcting the paint itself rather than masking imperfections with temporary fillers.",
        features: [
          "Removes swirls, scratches & oxidation",
          "Multi-stage cut & polish",
          "Deep, mirror-like gloss",
          "Measured, paint-safe correction",
        ],
        gallery: [
          `${n}/machine-polishing/1.png`,
          `${n}/machine-polishing/2.png`,
          `${n}/machine-polishing/3.png`,
        ],
      },
      {
        icon: FaShieldAlt,
        name: "Waxing & Paint Sealant",
        blurb: "Seals your paint against UV, dust and water spots for a lasting shine.",
        image: `${n}/waxing/1.png`,
        slug: "waxing-paint-sealant",
        description:
          "Lock in that fresh finish with a protective layer of premium wax or synthetic paint sealant. This hydrophobic barrier shields your paint from UV, dust and water spots, makes future washing easier and keeps your car glossy for months even in the harsh UAE climate.",
        features: [
          "UV & water-spot protection",
          "Hydrophobic, easy-clean surface",
          "Long-lasting depth & gloss",
          "Premium wax or synthetic sealant",
        ],
        gallery: [
          `${n}/waxing/1.png`,
          `${n}/waxing/2.png`,
          `${n}/waxing/3.png`,
        ],
      },
      {
        icon: FaLightbulb,
        name: "Headlight Restoration",
        blurb: "Clears yellowed, foggy lenses for sharper night vision and a fresh front end.",
        image: `${n}/headlight/1.png`,
        slug: "headlight-restoration",
        description:
          "Yellowed, foggy headlights reduce night-time visibility and age your car's whole front end. We sand, polish and re-seal the lenses to remove oxidation and haze, restoring crystal-clear clarity, brighter light output and a fresh, like-new look.",
        features: [
          "Removes yellowing & oxidation",
          "Brighter, safer night vision",
          "Multi-stage sand & polish",
          "UV-protective sealant finish",
        ],
        gallery: [
          `${n}/headlight/1.png`,
          `${n}/headlight/2.png`,
          `${n}/headlight/3.png`,
        ],
      },
      {
        icon: FaStar,
        name: "Ceramic Coating Protection",
        blurb: "A durable hydrophobic layer shielding paint from harsh sun, heat and dust for years.",
        image: `${n}/ceramic-coating/1.png`,
        slug: "ceramic-coating-protection",
        description:
          "A ceramic coating chemically bonds to your paint to create a durable, hydrophobic shield that lasts for years. It repels water, dust and contaminants, resists UV fading and chemical staining, and delivers an incredibly deep, glossy finish that ordinary wax simply can't match.",
        features: [
          "Years of durable protection",
          "Extreme hydrophobic, self-cleaning effect",
          "UV & chemical resistance",
          "Deep, long-lasting gloss",
        ],
        gallery: [
          `${n}/ceramic-coating/1.png`,
          `${n}/ceramic-coating/2.png`,
          `${n}/ceramic-coating/3.png`,
        ],
      },
    ],
  },
  {
    key: "interior",
    icon: MdEventSeat,
    emoji: "🧼",
    title: "Interior Detailing",
    tagline: "A cabin that feels showroom-fresh again",
    intro:
      "The UAE heat and fine dust work their way into every surface of your cabin. Our interior detailing lifts out embedded grime, sanitizes the surfaces you touch daily, and restores a clean, fresh interior you notice the moment you step in.",
    image: `${a}/seat-shampooing/3.png`,
    color: "from-emerald-500 to-emerald-700",
    accent: "text-emerald-600",
    hoverBorder: "hover:border-red-primary/50",
    subServices: [
      {
        icon: FaWind,
        name: "Deep Vacuum Cleaning",
        blurb: "Extracts sand, dust and debris from carpets, seams and crevices most cleaners miss.",
        image: `${a}/deep-cleaning/1.png`,
        slug: "deep-vacuum-cleaning",
        description:
          "The UAE's fine dust and sand work into every seam, vent and carpet fibre. Our deep vacuum service extracts embedded dirt, sand and debris from carpets, mats, seats, boot and the crevices most quick-cleans miss — the essential first step to a genuinely fresh cabin.",
        features: [
          "Extracts embedded sand & dust",
          "Seats, carpets, boot & crevices",
          "Seam & vent detailing",
          "Foundation for a full interior detail",
        ],
        gallery: [
          `${a}/deep-cleaning/1.png`,
          `${a}/deep-cleaning/2.png`,
          `${a}/deep-cleaning/3.png`,
        ],
      },
      {
        icon: FaSprayCan,
        name: "Steam Cleaning & Sanitization",
        blurb: "High-temperature steam dissolves grime and kills bacteria on contact — no harsh chemicals required.",
        image: `${a}/steam-cleaning/1.png`,
        slug: "steam-cleaning-sanitization",
        description:
          "High-temperature steam dissolves grease, grime and stains while killing bacteria and germs on contact — no harsh chemicals required. We steam-clean seats, carpets, panels and high-touch surfaces to leave your cabin deep-cleaned, sanitized and hygienic for you and your family.",
        features: [
          "Chemical-free deep clean",
          "Kills bacteria & germs on contact",
          "Lifts grease, grime & stains",
          "Sanitizes high-touch surfaces",
        ],
        gallery: [
          `${a}/steam-cleaning/1.png`,
          `${a}/steam-cleaning/2.png`,
          `${a}/steam-cleaning/3.png`,
        ],
      },
      {
        icon: MdWeekend,
        name: "Seat Shampooing (Fabric & Leather)",
        blurb: "Deep-cleans fabric and conditions leather, lifting stains and sweat marks left by summer driving.",
        image: `${a}/seat-shampooing/2.png`,
        slug: "seat-shampooing",
        description:
          "Seats take the most wear and hold the most grime. We shampoo and extract fabric upholstery to lift stains, sweat and odours, and gently clean and condition leather to keep it soft, supple and crack-free — restoring a fresh, like-new feel to every seat.",
        features: [
          "Fabric shampoo & hot-water extraction",
          "Stain, sweat & odour removal",
          "Leather clean & conditioning",
          "Restores soft, fresh seats",
        ],
        gallery: [
          `${a}/seat-shampooing/1.png`,
          `${a}/seat-shampooing/2.png`,
          `${a}/seat-shampooing/3.png`,
          `${a}/seat-shampooing/4.png`,
          `${a}/seat-shampooing/5.png`,
        ],
      },
      {
        icon: MdDashboard,
        name: "Dashboard & Console Detailing",
        blurb: "Cleans and protects every panel, vent and button with a matte, sun-resistant finish.",
        image: `${a}/dashboard-console/1.png`,
        slug: "dashboard-console-detailing",
        description:
          "The dashboard, console, vents and trim collect dust, fingerprints and UV damage. We clean, detail and protect every panel, button and vent with a non-greasy, UV-resistant dressing that leaves a clean matte finish — no sticky shine, just a fresh, well-cared-for cabin.",
        features: [
          "Every panel, vent & button cleaned",
          "UV-protective, non-greasy dressing",
          "Natural matte finish",
          "Detailing brushes for tight areas",
        ],
        gallery: [
          `${a}/dashboard-console/1.png`,
          `${a}/dashboard-console/2.png`,
          `${a}/dashboard-console/3.png`,
          `${a}/dashboard-console/4.png`,
          `${a}/dashboard-console/5.png`,
        ],
      },
      {
        icon: FaFan,
        name: "Odor Removal Treatment",
        blurb: "Neutralizes trapped smells at the source, leaving your cabin genuinely fresh rather than masked.",
        image: `${a}/odor/1.png`,
        slug: "odor-removal-treatment",
        description:
          "Bad smells don't just sit on the surface — they live in the fabric, vents and AC system. Our odor removal treatment neutralizes smoke, food, damp and pet odours at the source and treats the AC and cabin, leaving your car genuinely fresh rather than masked with a spray.",
        features: [
          "Neutralizes odours at the source",
          "Treats fabric, vents & AC system",
          "Smoke, damp, food & pet odours",
          "Genuinely fresh — not masked",
        ],
        gallery: [
          `${a}/odor/1.png`,
          `${a}/odor/2.png`,
          `${a}/odor/3.png`,
          `${a}/odor/4.png`,
          `${a}/odor/5.png`,
        ],
      },
    ],
  },
  {
    key: "protection",
    icon: FaShieldAlt,
    emoji: "🛡️",
    title: "Paint Protection Film (PPF)",
    tagline: "Wrapping, PPF, and related protection solutions",
    intro:
      "The UAE's relentless heat, UV and airborne grit wear down factory paint fast. Our layered protection systems — including self-healing PPF, vinyl wrapping, ceramic and graphene coatings — guard every panel, preserving depth, shine and resale value for years.",
    image: "/services/PPF-CAR.jpg",
    color: "from-red-primary to-red-dark",
    accent: "text-red-primary",
    hoverBorder: "hover:border-red-primary/50",
    subServices: [
      {
        icon: FaShieldAlt,
        name: "Paint Protection Film (PPF)",
        blurb: "Self-healing TPU film absorbs rock chips and road debris, keeping panels flawless underneath.",
        image: "/services/PPF-CAR.jpg",
      },
      {
        icon: MdColorLens,
        name: "Vinyl Vehicle Wrapping",
        blurb: "Complete color-change vinyl wraps in gloss, matte, satin and chrome finishes.",
        image: "/services/Wrapping.jpg",
      },
      {
        icon: FaStar,
        name: "Ceramic Coating",
        blurb: "Hydrophobic ceramic layer locks in gloss and repels dust, water and contaminants for years.",
        image: "/services/Ceramic-Coating.jpg",
      },
      {
        icon: FaSun,
        name: "Graphene Coating Protection",
        blurb: "Next-generation graphene matrix providing extreme heat dissipation and anti-spotting defence.",
        image: "/services/Graphene-Coating.jpg",
      },
      {
        icon: MdAutoFixHigh,
        name: "Scratch Removal & Swirl Correction",
        blurb: "Machine polishing erases scratches and swirl marks, restoring deep, mirror-clear reflections.",
        image: `${n}/machine-polishing/1.png`,
      },
    ],
  },
  {
    key: "upholstery",
    icon: MdAirlineSeatReclineExtra,
    emoji: "💺",
    title: "Seat Upholstery",
    tagline: "Custom seat stitching, ready-made seat covers, floor mats, and more",
    intro:
      "Transform your vehicle's interior aesthetics and comfort with our custom upholstery craftsmanship. From precision diamond stitching and tailor-fitted seat covers to luxury floor mats and ceiling lining, we deliver comfort and style engineered to endure.",
    image: "/services/Seat-Covers.jpg",
    color: "from-purple-500 to-purple-700",
    accent: "text-purple-600",
    hoverBorder: "hover:border-red-primary/50",
    subServices: [
      {
        icon: MdAirlineSeatReclineExtra,
        name: "Custom Seat Stitching",
        blurb: "Bespoke leather stitching, diamond quilting and personalized interior tailoring.",
        image: "/services/custom-seat-stitching.jpg",
      },
      {
        icon: MdEventSeat,
        name: "Ready-Made Seat Covers",
        blurb: "Durable, perfectly contoured seat covers for all vehicle makes and models.",
        image: "/services/Seat-Covers.jpg",
      },
      {
        icon: MdWeekend,
        name: "3D / 5D & 7D Floor Mats",
        blurb: "Custom-molded all-weather floor mats engineered for maximum dirt and spill protection.",
        image: "/services/Carpet-Flooring.jpg",
      },
      {
        icon: MdLayers,
        name: "Carpet & Plastic Flooring",
        blurb: "Durable protective flooring layers that make cleaning effortless and safeguard cabin carpets.",
        image: "/services/Plastic-Flooring.jpg",
      },
      {
        icon: FaCar,
        name: "Ceiling & Roof Lining",
        blurb: "Re-upholstery, sagging fabric restoration and premium Alcantara roof lining upgrades.",
        image: "/services/Ceiling.jpg",
      },
    ],
  },
  {
    key: "additional",
    icon: MdAutoFixHigh,
    emoji: "🛞",
    title: "Additional Detailing Services",
    tagline: "The finishing touches that complete every detail",
    intro:
      "Targeted treatments that tackle the areas everyday washes overlook. From engine bays to cabin air, we finish your car to a standard the UAE climate heat and dust cannot fake.",
    image: "/services/Car-Detailing.jpg",
    color: "from-amber-500 to-amber-700",
    accent: "text-amber-600",
    hoverBorder: "hover:border-red-primary/50",
    subServices: [
      {
        icon: FaCar,
        name: "Engine Bay Cleaning",
        blurb: "Degrease and dress your engine bay, clearing built-up dust for cooler running and cleaner inspections.",
        image: "/services/Car-Accessories.png",
      },
      {
        icon: FaCog,
        name: "Alloy Wheel Detailing",
        blurb: "Deep-clean and seal every wheel, lifting baked-on brake dust and restoring a mirror finish.",
        image: "/services/Car-Detailing.jpg",
      },
      {
        icon: FaTint,
        name: "Window Polishing & Tinting",
        blurb: "Removes hard-water spots and haze from every pane for crystal clarity and safer night driving.",
        image: "/services/Car-Tinting.jpg",
      },
      {
        icon: FaSprayCan,
        name: "Car Sanitization & Disinfection",
        blurb: "Eliminates bacteria, allergens and stale odours, leaving your cabin fresh, hygienic and family-safe.",
        image: `${a}/odor/1.png`,
      },
      {
        icon: FaTabletAlt,
        name: "Android Screen Fitting & Apple CarPlay",
        blurb: "Custom Android touch displays, wireless Apple CarPlay, GPS navigation, and camera integration.",
        image: "/services/android-screen-fitting.jpg",
        slug: "android-screen-fitting",
        description:
          "Upgrade your vehicle's dashboard with a high-definition Android touchscreen multimedia system. Featuring seamless wireless Apple CarPlay and Android Auto integration, crystal-clear GPS navigation, Bluetooth connectivity, steering wheel control retention, and reverse/360° camera compatibility. Professional OEM-fit installation with clean plug-and-play wiring to protect your vehicle's factory electrical system.",
        features: [
          "Wireless Apple CarPlay & Android Auto",
          "High-definition IPS capacitive touch display",
          "GPS navigation & multimedia streaming apps",
          "Reverse camera & steering control integration",
          "OEM-fit dash kit & clean plug-and-play installation",
        ],
        gallery: [
          "/services/android-screen-fitting.jpg",
          "/gallery/purecare-showcase-3.jpg",
        ],
      },
      {
        icon: FaCamera,
        name: "Dashcam & 360° Surveillance Camera",
        blurb: "Front and rear 4K dual dashcams with 24/7 parking surveillance and 360° bird's-eye camera systems.",
        image: "/services/Car-Accessories.png",
        slug: "dashcam-surveillance-camera",
        description:
          "Protect your vehicle on UAE roads with front and rear ultra-HD 4K dash cameras and 360-degree bird's-eye parking systems. Features motion detection, night vision, G-sensor incident locking, and seamless concealed wiring.",
        features: [
          "Ultra-HD 4K front & rear recording",
          "24/7 parking mode with motion sensor",
          "Night vision & HDR technology",
          "Concealed wiring for clean factory look",
        ],
        gallery: [
          "/services/Car-Accessories.png",
          "/services/Car-Detailing.jpg",
        ],
      },
    ],
  },
];

export function getCategoryByKey(key: string): ServiceCategory | undefined {
  return categories.find((c) => c.key === key);
}

export function getServiceBySlug(slug: string) {
  for (const cat of categories) {
    const found = cat.subServices.find((s) => s.slug === slug);
    if (found) {
      return {
        ...found,
        categoryTitle: cat.title,
        categoryKey: cat.key,
        color: cat.color,
        emoji: cat.emoji,
      };
    }
  }
  return undefined;
}
