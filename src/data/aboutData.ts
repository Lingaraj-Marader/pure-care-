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
}

export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

export interface TeamItem {
  name: string;
  role: string;
  desc: string;
  icon: IconType;
}

export const missionItems: MissionItem[] = [
  {
    icon: MdCleaningServices,
    title: "Clean",
    desc: "We deep clean, wash, and sanitize every interior and exterior surface — eliminating embedded desert grit, dust, and contaminants to create a spotless, hygienic foundation.",
    color: "from-blue-primary to-blue-dark",
  },
  {
    icon: FaShieldAlt,
    title: "Protect",
    desc: "We shield what we've restored — ceramic coating, PPF and UV protection built to stand up to the Middle East climate's relentless heat and desert grit.",
    color: "from-red-primary to-red-dark",
  },
  {
    icon: MdAutoFixHigh,
    title: "Restore",
    desc: "We bring your vehicle back to its best — correcting paint, lifting embedded dirt and reviving every surface the Middle East climate's sun, heat and dust have worn down.",
    color: "from-emerald-500 to-emerald-700",
  },
];

export const values: ValueItem[] = [
  {
    icon: FaGem,
    title: "Quality First",
    desc: "We never compromise on the quality of materials or workmanship. Every job is done to perfection.",
  },
  {
    icon: FaHeart,
    title: "Customer Care",
    desc: "Your satisfaction is our top priority. We treat every vehicle as if it were our own.",
  },
  {
    icon: FaAward,
    title: "Excellence",
    desc: "We strive for excellence in every service, using the latest techniques and premium products.",
  },
  {
    icon: FaClock,
    title: "Timely Delivery",
    desc: "We respect your time and ensure all services are completed within the promised timeframe.",
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "2014",
    title: "The Beginning",
    desc: "Pure Care was founded with a vision to provide premium auto care tailored for the Middle East climate.",
  },
  {
    year: "2016",
    title: "Expanding Services",
    desc: "Added ceramic coating, PPF, and graphene coating to our growing list of services.",
  },
  {
    year: "2019",
    title: "Growing Reputation",
    desc: "Became one of the most trusted auto care providers in the Middle East climate with thousands of satisfied customers.",
  },
  {
    year: "2022",
    title: "Modern Techniques",
    desc: "Adopted cutting-edge technology and expanded our team of skilled technicians.",
  },
  {
    year: "2024",
    title: "Industry Leader",
    desc: "One of the leading auto accessories and car service provider.",
  },
];

export const team: TeamItem[] = [
  {
    name: "Leadership Team",
    role: "Management",
    desc: "Driving Pure Care's vision with over a decade of experience in the auto care industry.",
    icon: FaUserTie,
  },
  {
    name: "Expert Technicians",
    role: "Service Team",
    desc: "Skilled professionals trained in the latest car care techniques and technologies.",
    icon: FaWrench,
  },
  {
    name: "Customer Support",
    role: "Support Team",
    desc: "Dedicated team ensuring seamless customer experience from inquiry to delivery.",
    icon: FaHeadset,
  },
];
