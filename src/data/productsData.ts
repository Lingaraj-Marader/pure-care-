import { IconType } from "react-icons";
import { FaStar, FaShieldAlt } from "react-icons/fa";
import { MdLayers, MdColorLens, MdLocalCarWash, MdWeekend } from "react-icons/md";

export interface ProductItem {
  name: string;
  desc: string;
  price: string;
}

export interface ProductCategory {
  title: string;
  icon: IconType;
  image: string;
  description: string;
  color: string;
  products: ProductItem[];
}

export const productsData: ProductCategory[] = [
  {
    title: "Window Tinting Films",
    icon: MdLayers,
    image: "/products/window-tinting-films.png",
    description:
      "Premium quality window tinting films providing maximum UV protection, heat rejection, and glare reduction in the Middle East climate.",
    color: "from-blue-primary to-blue-dark",
    products: [
      {
        name: "Ray Shield Window Tinting",
        desc: "Advanced nano-ceramic film with superior heat rejection & 99% UV block",
        price: "Starting from AED 299",
      },
      {
        name: "AutoCool Window Tinting",
        desc: "Premium solar control, optical clarity, and high-performance glare reduction",
        price: "Starting from AED 249",
      },
      {
        name: "3M Crystalline Series",
        desc: "Multi-layer optical film technology for ultimate cabin comfort",
        price: "Starting from AED 699",
      },
      {
        name: "SunTek CXP Carbon",
        desc: "Carbon-infused film with superior optical clarity and non-fading finish",
        price: "Starting from AED 450",
      },
    ],
  },
  {
    title: "PPF (Paint Protection Film)",
    icon: FaShieldAlt,
    image: "/products/ppf.png",
    description:
      "Self-healing paint protection films shielding your vehicle against rock chips, road grit, and scratches.",
    color: "from-emerald-500 to-emerald-700",
    products: [
      {
        name: "Onyx PPF",
        desc: "Ultra-high gloss, self-healing TPU film with superior stain & chip resistance",
        price: "Starting from AED 2,999",
      },
      {
        name: "Ray Shield PPF",
        desc: "Heavy-duty invisible shield engineered for extreme desert conditions",
        price: "Starting from AED 2,999",
      },
      {
        name: "XPEL Ultimate Plus",
        desc: "Industry-standard self-healing protective barrier with crystal clarity",
        price: "Starting from AED 3,499",
      },
      {
        name: "3M Scotchgard Pro",
        desc: "Durable clear polyurethane film with high stain and weather resistance",
        price: "Starting from AED 3,200",
      },
    ],
  },
  {
    title: "Ceramic Coating Products",
    icon: FaStar,
    image: "/products/1.png",
    description:
      "Professional-grade ceramic coatings delivering hydrophobic barriers, mirror reflections, and long-lasting protection.",
    color: "from-red-primary to-red-dark",
    products: [
      {
        name: "Onyx Ceramic Coating",
        desc: "9H diamond hardness ceramic coating with hydrophobic self-cleaning effect",
        price: "Starting from AED 599",
      },
      {
        name: "Tactium Ceramic Coating",
        desc: "High-temperature resistant ceramic shield enhancing depth and gloss",
        price: "Starting from AED 599",
      },
      {
        name: "Sonax Ceramic Coating",
        desc: "German-engineered nano-coating providing tough chemical and weather defense",
        price: "Starting from AED 599",
      },
      {
        name: "Gtechniq Crystal Serum",
        desc: "Ultra-durable dual-layer ceramic system for maximum swirl resistance",
        price: "Starting from AED 1,299",
      },
    ],
  },
  {
    title: "Car Detailing (3mm)",
    icon: MdLocalCarWash,
    image: "/products/5.png",
    description:
      "Precision 3-stage car detailing treatments that revitalize your vehicle inside and out.",
    color: "from-yellow-500 to-orange-500",
    products: [
      {
        name: "3mm Professional Detailing",
        desc: "Multi-stage exterior wash, decontamination, and surface protection",
        price: "Starting from AED 149",
      },
      {
        name: "Deep Interior Detailing",
        desc: "Steam cleaning, seat shampoo, vent sanitization, and odor neutralization",
        price: "Starting from AED 199",
      },
      {
        name: "Machine Polish & Sealant",
        desc: "Swirl reduction, high-gloss machine polishing, and hydrophobic seal",
        price: "Starting from AED 249",
      },
      {
        name: "Full Showroom Rejuvenation",
        desc: "Comprehensive bumper-to-bumper detailing package for brand-new finish",
        price: "Starting from AED 349",
      },
    ],
  },
  {
    title: "Seat Upholstery & Accessories",
    icon: MdWeekend,
    image: "/products/7.png",
    description:
      "Custom seat covers, premium floor mats, and interior styling tailored for luxury and durability.",
    color: "from-amber-500 to-amber-700",
    products: [
      {
        name: "Custom Seat Stitching & Covers",
        desc: "Bespoke diamond stitching, OEM leather restoration, and precision fit",
        price: "Starting from AED 499",
      },
      {
        name: "3D / 5D & 7D Floor Mats",
        desc: "Laser-measured all-weather mats protecting vehicle floor carpets",
        price: "Starting from AED 249",
      },
      {
        name: "Carpet & Plastic Flooring",
        desc: "Durable protective flooring layers for easy cleaning and cabin protection",
        price: "Starting from AED 199",
      },
      {
        name: "Ambient Lighting & Styling",
        desc: "Custom LED cabin ambient lighting kits and interior trim accessories",
        price: "Starting from AED 199",
      },
    ],
  },
  {
    title: "Vinyl Wraps",
    icon: MdColorLens,
    image: "/products/vinyl-wraps.png",
    description:
      "High-quality vinyl wraps in gloss, matte, satin, and specialty finishes for full vehicle customization.",
    color: "from-purple-500 to-purple-700",
    products: [
      {
        name: "3M 2080 Series",
        desc: "Premium cast vinyl available in 100+ vibrant colors and textures",
        price: "Starting from AED 2,800",
      },
      {
        name: "Avery Dennison Supreme",
        desc: "Superior conformability with easy bubble-free installation",
        price: "Starting from AED 2,500",
      },
      {
        name: "Satin & Matte Wraps",
        desc: "Sleek modern finishes with UV resistance and paint protection",
        price: "Starting from AED 2,500",
      },
      {
        name: "Chrome & Special Effects",
        desc: "Mirror chrome, metallic flakes, and color-shifting exotic films",
        price: "Starting from AED 4,500",
      },
    ],
  },
];
