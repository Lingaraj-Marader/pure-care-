import { IconType } from "react-icons";
import {
  FaStar,
  FaUsers,
  FaShieldAlt,
  FaCogs,
  FaHeart,
  FaClock,
  FaGem,
  FaCertificate,
} from "react-icons/fa";

export interface StrengthItem {
  icon: IconType;
  title: string;
  desc: string;
  color: string;
  hoverBorder: string;
  hoverText: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TestimonialItem {
  name: string;
  car: string;
  text: string;
  rating: number;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export const strengths: StrengthItem[] = [
  {
    icon: FaStar,
    title: "Premium Quality",
    desc: "We use only the highest quality materials and products from globally trusted brands like 3M, XPEL, Gtechniq, and more. No compromises, ever.",
    color: "from-blue-primary to-blue-dark",
    hoverBorder: "hover:border-red-primary/50",
    hoverText: "group-hover:text-red-primary",
  },
  {
    icon: FaUsers,
    title: "Expert Team",
    desc: "Our skilled technicians have years of hands-on experience in auto care. Each team member is trained in the latest techniques and technologies.",
    color: "from-purple-500 to-purple-700",
    hoverBorder: "hover:border-red-primary/50",
    hoverText: "group-hover:text-red-primary",
  },
  {
    icon: FaShieldAlt,
    title: "Service Warranty",
    desc: "All our services come with comprehensive warranty coverage for your complete peace of mind. We stand behind every job we do.",
    color: "from-red-primary to-red-dark",
    hoverBorder: "hover:border-red-primary/50",
    hoverText: "group-hover:text-red-primary",
  },
  {
    icon: FaCogs,
    title: "Latest Technology",
    desc: "We invest in cutting-edge tools, equipment, and techniques to deliver flawless results that exceed industry standards.",
    color: "from-emerald-500 to-emerald-700",
    hoverBorder: "hover:border-red-primary/50",
    hoverText: "group-hover:text-red-primary",
  },
  {
    icon: FaHeart,
    title: "Customer First",
    desc: "Your satisfaction is our top priority. We listen to your needs, provide honest recommendations, and ensure you're delighted with the results.",
    color: "from-pink-500 to-pink-700",
    hoverBorder: "hover:border-red-primary/50",
    hoverText: "group-hover:text-red-primary",
  },
  {
    icon: FaClock,
    title: "Pickup & Delivery Service",
    desc: "Convenient doorstep vehicle pickup and safe return in showroom condition across the UAE. (*Terms & conditions applicable).",
    color: "from-amber-500 to-amber-700",
    hoverBorder: "hover:border-red-primary/50",
    hoverText: "group-hover:text-red-primary",
  },
  {
    icon: FaGem,
    title: "Competitive Pricing",
    desc: "Premium quality doesn't have to break the bank. We offer the best value for money with transparent pricing and no hidden charges.",
    color: "from-cyan-500 to-cyan-700",
    hoverBorder: "hover:border-red-primary/50",
    hoverText: "group-hover:text-red-primary",
  },
  {
    icon: FaCertificate,
    title: "Certified Products",
    desc: "Every product we use is genuine, certified, and sourced directly from authorized distributors to ensure authenticity and performance.",
    color: "from-indigo-500 to-indigo-700",
    hoverBorder: "hover:border-red-primary/50",
    hoverText: "group-hover:text-red-primary",
  },
];

export const stats: StatItem[] = [
  { value: "10000+", label: "Vehicles Serviced" },
  { value: "10+", label: "Years Experience" },
  { value: "12+", label: "Specialized Services" },
  { value: "10000+", label: "Happy Customers" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "50+", label: "Premium Brands" },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Ahmed Al Rashid",
    car: "Mercedes-Benz S-Class",
    text: "Pure Care did an incredible job with the ceramic coating on my S-Class. The car looks better than when I bought it. Highly professional team!",
    rating: 5,
  },
  {
    name: "Khalid Mohammed",
    car: "BMW X5",
    text: "Got my BMW fully wrapped in matte black. The quality of the wrap and the precision of the installation is top-notch. Will definitely come back.",
    rating: 5,
  },
  {
    name: "Fatima Hassan",
    car: "Toyota Land Cruiser",
    text: "The window tinting service was excellent. Great UV protection and the staff explained everything about the different film options. Very professional.",
    rating: 5,
  },
  {
    name: "Omar Sheikh",
    car: "Porsche Cayenne",
    text: "Had PPF installed on my Cayenne. The Pure Care team are true experts. The film is invisible and gives me peace of mind on the road.",
    rating: 5,
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation",
    desc: "Share your requirements with us. We'll assess your vehicle and recommend the best services and products for your needs.",
  },
  {
    step: "02",
    title: "Inspection",
    desc: "Our experts thoroughly inspect your vehicle to understand its current condition and plan the perfect treatment approach.",
  },
  {
    step: "03",
    title: "Service",
    desc: "Our skilled technicians carry out the service using premium products and cutting-edge techniques for flawless results.",
  },
  {
    step: "04",
    title: "Quality Check",
    desc: "Every job goes through a rigorous quality check before delivery to ensure it meets our high standards of excellence.",
  },
  {
    step: "05",
    title: "Pickup & Delivery",
    desc: "Doorstep vehicle pickup and return in pristine showroom condition with care instructions and warranty documentation. (*Note: Terms & conditions applicable).",
  },
];

export interface MaintenancePackage {
  year: string;
  badge: string;
  discount: string;
  title: string;
  desc: string;
  color: string;
  borderHover: string;
  tagline: string;
  features: string[];
  popular?: boolean;
}

export const maintenancePackages: MaintenancePackage[] = [
  {
    year: "1st Year",
    badge: "Foundation Protection",
    discount: "100% Standard Value",
    title: "Complete Vehicle Protection",
    tagline: "Baseline Ceramic or PPF Armor",
    desc: "Full comprehensive treatment engineered to withstand the extreme UAE heat, UV radiation, and harsh desert sand.",
    color: "from-blue-500 to-blue-700",
    borderHover: "hover:border-blue-400/60 hover:shadow-blue-500/20",
    features: [
      "Multi-stage machine paint correction & decontamination",
      "Full Ceramic Coating or precision PPF application",
      "Interior deep steam cleaning & leather nourishment",
      "Nano-ceramic window tinting with 99% UV heat rejection",
      "1-Year official warranty certification & support",
    ],
  },
  {
    year: "2nd Year",
    badge: "Loyalty Renewal",
    discount: "15% Discount",
    title: "Annual Maintenance Contract",
    tagline: "Hydrophobic Boost & Interior Revitalization",
    desc: "Dedicated 2nd-year maintenance for returning clients under Siyad's care, renewing gloss and hydrophobic defenses at an exclusive rate.",
    color: "from-emerald-500 to-teal-700",
    borderHover: "hover:border-emerald-400/60 hover:shadow-emerald-500/25",
    popular: true,
    features: [
      "15% Discount on complete renewal contract",
      "Ceramic coating hydrophobic booster replenishment",
      "PPF edge inspection, cleaning & seal rejuvenation",
      "Deep cabin sanitization & AC vent anti-bacterial fogging",
      "Doorstep pickup & delivery available (T&C apply)",
    ],
  },
  {
    year: "3rd Year",
    badge: "Elite Preservation",
    discount: "25% Discount",
    title: "Multi-Year Preservation Program",
    tagline: "Total Rejuvenation & Diamond Quartz Seal",
    desc: "Our premier loyalty privilege offering maximum savings for lasting vehicle heritage and flawless showroom resale value in the UAE.",
    color: "from-purple-500 to-indigo-700",
    borderHover: "hover:border-purple-400/60 hover:shadow-purple-500/25",
    features: [
      "25% Exclusive loyalty discount on full renewal",
      "Complete surface re-leveling & multi-layer quartz seal",
      "Deep leather restoration & fabric guard re-application",
      "Headlight clarity restoration & glass rain-repellent",
      "VIP priority scheduling & direct advisor support from Siyad",
    ],
  },
];
