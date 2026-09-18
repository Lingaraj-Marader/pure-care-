import { IconType } from "react-icons";
import {
  FaShieldAlt,
  FaHeart,
  FaAward,
  FaClock,
  FaUserTie,
  FaWrench,
  FaHeadset,
  FaGem,
} from "react-icons/fa";
import { MdCleaningServices, MdAutoFixHigh } from "react-icons/md";

export interface MissionItem {
  icon: IconType;
  title: string;
  desc: string;
  color: string;
}

export interface ValueItem {
  icon: IconType;
  title: string;
  desc: string;
  color: string;
  borderHover: string;
  shadowHover: string;
  accentText: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
  badgeGradient: string;
  glowColor: string;
}

export interface TeamItem {
  name: string;
  role: string;
  desc: string;
  icon: IconType;
  color: string;
  roleColor: string;
  badgeBg: string;
  borderHover: string;
  shadowHover: string;
}

export const missionItems: MissionItem[] = [
  {
    icon: MdCleaningServices,
    title: "Clean",
    desc: "We deep clean, wash, and sanitize every interior and exterior surface — eliminating embedded desert grit, dust, and contaminants to create a spotless, hygienic foundation.",
    color: "from-blue-primary to-blue-dark",
  },
  {
    icon: MdAutoFixHigh,
    title: "Restore",
    desc: "We bring your vehicle back to its best — correcting paint, lifting embedded dirt and reviving every surface worn down by the harsh UAE sun, heat and dust.",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    icon: FaShieldAlt,
    title: "Protect",
    desc: "We shield what we've restored — ceramic coating, PPF and UV protection built to stand up to the UAE's relentless heat and desert grit.",
    color: "from-red-primary to-red-dark",
  },
];

export const values: ValueItem[] = [
  {
    icon: FaGem,
    title: "Quality First",
    desc: "We never compromise on the quality of materials or workmanship. Every job is executed to showroom perfection.",
    color: "from-blue-500 via-indigo-600 to-blue-700",
    borderHover: "hover:border-blue-400/60",
    shadowHover: "hover:shadow-blue-500/25",
    accentText: "group-hover:text-blue-300",
  },
  {
    icon: FaHeart,
    title: "Customer Care",
    desc: "Your complete satisfaction is our highest priority. We treat every client vehicle with royal, dedicated attention.",
    color: "from-red-500 via-rose-600 to-red-700",
    borderHover: "hover:border-red-400/60",
    shadowHover: "hover:shadow-red-500/25",
    accentText: "group-hover:text-red-300",
  },
  {
    icon: FaAward,
    title: "Excellence",
    desc: "We uphold elite industry standards in every service, leveraging cutting-edge tools and internationally certified products.",
    color: "from-amber-400 via-amber-500 to-orange-600",
    borderHover: "hover:border-amber-400/60",
    shadowHover: "hover:shadow-amber-500/25",
    accentText: "group-hover:text-amber-300",
  },
  {
    icon: FaClock,
    title: "Timely Delivery",
    desc: "We value your schedule and ensure all detailing and protection treatments are completed precisely on time.",
    color: "from-emerald-400 via-teal-500 to-emerald-700",
    borderHover: "hover:border-emerald-400/60",
    shadowHover: "hover:shadow-emerald-500/25",
    accentText: "group-hover:text-emerald-300",
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "2014",
    title: "The Beginning",
    desc: "Pure Care was founded in Sharjah with a bold vision to provide premium automotive care and accessories tailored for the UAE climate.",
    badgeGradient: "from-sky-400 to-blue-600",
    glowColor: "rgba(56,189,248,0.8)",
  },
  {
    year: "2016",
    title: "Ceramic vs Graphene Innovation",
    desc: "Pioneered specialized 9H Ceramic Coatings and ultra-durable Graphene Nano-coatings with superior heat dispersion alongside Self-Healing PPF, providing distinct tiers of ultimate surface protection.",
    badgeGradient: "from-red-500 to-rose-600",
    glowColor: "rgba(239,68,68,0.8)",
  },
  {
    year: "2019",
    title: "UAE Recognition",
    desc: "Recognized across the UAE as one of the country's most trusted auto care and paint protection providers, serving thousands of discerning vehicle owners.",
    badgeGradient: "from-emerald-400 to-teal-600",
    glowColor: "rgba(16,185,129,0.8)",
  },
  {
    year: "2022",
    title: "Modern Detailing Facility",
    desc: "Upgraded our state-of-the-art facility on Sheikh Sultan Bin Saqr Al Qasimi Street with dust-free PPF installation bays and advanced spectrophotometer paint matching.",
    badgeGradient: "from-amber-400 to-orange-600",
    glowColor: "rgba(245,158,11,0.8)",
  },
  {
    year: "2024",
    title: "UAE Premier Benchmark",
    desc: "Firmly established as the UAE's premier landmark for luxury vehicle detailing, high-performance nano-coatings, and certified auto accessories.",
    badgeGradient: "from-purple-500 to-indigo-600",
    glowColor: "rgba(168,85,247,0.8)",
  },
];

export const team: TeamItem[] = [
  {
    name: "Leadership Team",
    role: "Executive Management",
    desc: "Driving Pure Care's vision with over a decade of hands-on automotive expertise in the UAE luxury market.",
    icon: FaUserTie,
    color: "from-blue-500 via-indigo-600 to-blue-700",
    roleColor: "text-sky-400",
    badgeBg: "bg-blue-500/15 border-blue-400/30 text-sky-300",
    borderHover: "hover:border-blue-400/50",
    shadowHover: "hover:shadow-blue-500/25",
  },
  {
    name: "Master Technicians",
    role: "Detailing & PPF Specialists",
    desc: "Certified technicians trained in micro-finishing, precision PPF edge wrapping, and multi-stage paint correction.",
    icon: FaWrench,
    color: "from-red-500 via-rose-600 to-red-700",
    roleColor: "text-red-400",
    badgeBg: "bg-red-500/15 border-red-400/30 text-red-300",
    borderHover: "hover:border-red-400/50",
    shadowHover: "hover:shadow-red-500/25",
  },
  {
    name: "Customer Advisory",
    role: "Client Care & Support",
    desc: "Dedicated automotive consultants providing honest guidance, transparent quotes, and complete satisfaction.",
    icon: FaHeadset,
    color: "from-emerald-500 via-teal-600 to-emerald-700",
    roleColor: "text-emerald-400",
    badgeBg: "bg-emerald-500/15 border-emerald-400/30 text-emerald-300",
    borderHover: "hover:border-emerald-400/50",
    shadowHover: "hover:shadow-emerald-500/25",
  },
];
