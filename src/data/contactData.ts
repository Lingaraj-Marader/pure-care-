import { IconType } from "react-icons";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export interface ContactCard {
  icon: IconType;
  title: string;
  details: string[];
  link: string;
  color: string;
  hoverBorder: string;
  hoverText: string;
}

export interface BusinessHour {
  day: string;
  time: string;
}

export const contactCards: ContactCard[] = [
  {
    icon: FaPhoneAlt,
    title: "Phone",
    details: ["+971 58 636 8849", "+971 52 948 8821"],
    link: "tel:+971586368849",
    color: "from-blue-primary to-blue-dark",
    hoverBorder: "hover:border-red-primary/50",
    hoverText: "group-hover:text-red-primary",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    details: ["+971 58 636 8849"],
    link: "https://wa.me/971586368849",
    color: "from-green-500 to-green-600",
    hoverBorder: "hover:border-green-500/40",
    hoverText: "group-hover:text-green-600",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    details: ["purecareautoacs@gmail.com"],
    link: "mailto:purecareautoacs@gmail.com",
    color: "from-red-primary to-red-dark",
    hoverBorder: "hover:border-red-primary/50",
    hoverText: "group-hover:text-red-primary",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    details: ["6 Sheikh Sultan, Bin Saqr", "Al Qasimi St, Sharjah"],
    link: "https://maps.google.com/?q=6+Sheikh+Sultan+Bin+Saqr+Al+Qasimi+Street+Sharjah+UAE",
    color: "from-amber-500 to-amber-700",
    hoverBorder: "hover:border-red-primary/50",
    hoverText: "group-hover:text-red-primary",
  },
];

export const businessHours: BusinessHour[] = [
  {
    day: "Saturday - Thursday",
    time: "8:00 AM - 10:00 PM",
  },
  {
    day: "Friday",
    time: "2:00 PM - 10:00 PM",
  },
];
