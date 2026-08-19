import { IconType } from "react-icons";
import {
  FaTools,
  FaShieldAlt,
  FaStar,
  FaHeart,
  FaAward,
  FaClock,
  FaUser,
  FaUsers,
  FaHeadset,
} from "react-icons/fa";

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
    icon: FaTools,
    title: "Restore",
    desc: "We bring your vehicle back to its best — correcting paint, lifting embedded dirt and reviving every surface the sun, heat and dust have worn down.",
    color: "from-blue-primary to-blue-dark",
  },
  {
    icon: FaShieldAlt,
    title: "Protect",
    desc: "We shield what we've restored — ceramic coating, PPF and UV protection built to stand up to the UAE's relentless heat and desert grit.",
    color: "from-red-primary to-red-dark",
  },
  {
    icon: FaStar,
    title: "Beautify",
    desc: "We finish to a showroom standard — deep, mirror-like gloss outside and a cabin that feels brand new every time you step in.",
    color: "from-emerald-500 to-emerald-700",
  },
];

export const values: ValueItem[] = [
  {
    icon: FaStar,
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
    desc: "Pure Care was founded with a vision to provide premium auto care in the UAE.",
  },
  {
    year: "2016",
    title: "Expanding Services",
    desc: "Added ceramic coating, PPF, and graphene coating to our growing list of services.",
  },
  {
    year: "2019",
    title: "Growing Reputation",
    desc: "Became one of the most trusted auto care providers in the UAE with hundreds of satisfied customers.",
  },
  {
    year: "2022",
    title: "Modern Techniques",
    desc: "Adopted cutting-edge technology and expanded our team of skilled technicians.",
  },
  {
    year: "2024",
    title: "Industry Leader",
    desc: "Recognized as a leading auto accessories and care service provider in the UAE.",
  },
];

export const team: TeamItem[] = [
  {
    name: "Leadership Team",
    role: "Management",
    desc: "Driving Pure Care's vision with over a decade of experience in the auto care industry.",
    icon: FaUser,
  },
  {
    name: "Expert Technicians",
    role: "Service Team",
    desc: "Skilled professionals trained in the latest car care techniques and technologies.",
    icon: FaUsers,
  },
  {
    name: "Customer Support",
    role: "Support Team",
    desc: "Dedicated team ensuring seamless customer experience from inquiry to delivery.",
    icon: FaHeadset,
  },
];
