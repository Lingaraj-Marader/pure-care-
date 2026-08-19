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
    image: "/products/3.png",
    description:
      "Premium quality window tinting films from top brands for maximum UV protection and heat rejection.",
    color: "from-blue-primary to-blue-dark",
    products: [
      {
        name: "3M Crystalline Series",
        desc: "Nano-technology film with superior heat rejection",
        price: "Starting from AED 800",
      },
      {
        name: "3M Color Stable Series",
        desc: "Non-metallic film that won't interfere with electronics",
        price: "Starting from AED 500",
      },
      {
        name: "Llumar CTX Series",
        desc: "Ceramic technology for excellent clarity and comfort",
        price: "Starting from AED 600",
      },
      {
        name: "SunTek CXP Carbon",
        desc: "Carbon film with superior optical clarity",
        price: "Starting from AED 450",
      },
    ],
  },
  {
    title: "Vinyl Wraps",
    icon: MdColorLens,
    image: "/products/4.png",
    description:
      "High-quality vinyl wraps in various colors, textures, and finishes for complete vehicle transformation.",
    color: "from-purple-500 to-purple-700",
    products: [
      {
        name: "3M 2080 Series",
        desc: "Premium cast vinyl in 100+ colors and finishes",
        price: "Starting from AED 3,000",
      },
      {
        name: "Avery Dennison Supreme",
        desc: "Conformable wrap with easy installation",
        price: "Starting from AED 2,800",
      },
      {
        name: "Hexis HX Series",
        desc: "Durable wrap film with excellent conformability",
        price: "Starting from AED 2,500",
      },
      {
        name: "Chrome & Special Effects",
        desc: "Mirror chrome, color shift, and specialty films",
        price: "Starting from AED 5,000",
      },
    ],
  },
  {
    title: "Ceramic Coating Products",
    icon: FaStar,
    image: "/products/1.png",
    description:
      "Professional-grade ceramic coating products for long-lasting paint protection and shine.",
    color: "from-red-primary to-red-dark",
    products: [
      {
        name: "Gtechniq Crystal Serum",
        desc: "Ultra-durable 9H hardness ceramic coating",
        price: "Starting from AED 2,500",
      },
      {
        name: "Ceramic Pro 9H",
        desc: "Multi-layerable nano-ceramic coating",
        price: "Starting from AED 2,000",
      },
      {
        name: "IGL Coatings Kenzo",
        desc: "Award-winning graphene-infused ceramic",
        price: "Starting from AED 1,800",
      },
      {
        name: "SiRamik SC15",
        desc: "Self-cleaning nano ceramic coating",
        price: "Starting from AED 1,500",
      },
    ],
  },
  {
    title: "PPF (Paint Protection Film)",
    icon: FaShieldAlt,
    image: "/products/6.png",
    description:
      "Self-healing paint protection films that shield your vehicle's paint from damage.",
    color: "from-emerald-500 to-emerald-700",
    products: [
      {
        name: "XPEL Ultimate Plus",
        desc: "Self-healing TPU film with 10-year warranty",
        price: "Starting from AED 4,000",
      },
      {
        name: "3M Scotchgard Pro",
        desc: "Crystal clear film with excellent clarity",
        price: "Starting from AED 3,500",
      },
      {
        name: "SunTek Ultra PPF",
        desc: "Optically clear with self-healing properties",
        price: "Starting from AED 3,000",
      },
      {
        name: "Llumar Valor Series",
        desc: "Premium protection with hydrophobic top coat",
        price: "Starting from AED 3,200",
      },
    ],
  },
  {
    title: "Car Care Products",
    icon: MdLocalCarWash,
    image: "/products/5.png",
    description:
      "Premium car care and detailing products for professional-grade results.",
    color: "from-yellow-500 to-orange-500",
    products: [
      {
        name: "Meguiar's Professional Line",
        desc: "Complete range of professional detailing products",
        price: "Various",
      },
      {
        name: "Chemical Guys Collection",
        desc: "Premium wash, wax, and detail products",
        price: "Various",
      },
      {
        name: "Sonax Professional",
        desc: "German-engineered car care products",
        price: "Various",
      },
      {
        name: "Auto Finesse Range",
        desc: "Luxury car care and detailing collection",
        price: "Various",
      },
    ],
  },
  {
    title: "Interior Accessories",
    icon: MdWeekend,
    image: "/products/7.png",
    description:
      "Premium interior accessories to enhance comfort and style inside your vehicle.",
    color: "from-amber-500 to-amber-700",
    products: [
      {
        name: "Custom Seat Covers",
        desc: "Leather and fabric custom-fit seat covers",
        price: "Starting from AED 600",
      },
      {
        name: "3D/5D Floor Mats",
        desc: "Custom-molded premium floor mats",
        price: "Starting from AED 300",
      },
      {
        name: "Dashboard Accessories",
        desc: "Phone holders, organizers, and more",
        price: "Starting from AED 50",
      },
      {
        name: "Ambient Lighting Kits",
        desc: "LED interior ambient lighting systems",
        price: "Starting from AED 200",
      },
    ],
  },
];
