"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const serviceLinks = [
  { href: "/services/exterior", label: "Exterior Detailing" },
  { href: "/services/interior", label: "Interior Detailing" },
  { href: "/services#protection", label: "Paint Protection Film (PPF)" },
  { href: "/services#upholstery", label: "Seat Upholstery" },
  { href: "/services#additional", label: "Additional Detailing Services" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const footerSocials = [
  { icon: FaWhatsapp, href: "https://wa.me/971586368849" },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/purecaresharjah?igsi=MWJ0enZsem94OTN1dg%3D%3D&utm_source=qr",
  },
  { icon: FaFacebookF, href: "https://www.facebook.com" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com" },
  { icon: FaTiktok, href: "https://vt.tiktok.com/ZSVD4NByh/" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#091538] via-[#060e26] to-[#030715] border-t border-sky-500/20 text-slate-300 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-10 sm:py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <Link href="/" prefetch={true}>
              <Image
                src="/purecare-logo.png"
                alt="Pure Care Auto Accessories"
                width={1469}
                height={559}
                className="h-16 sm:h-20 w-auto object-contain drop-shadow-md"
              />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
              Premium car care and auto accessories services tailored for the Middle East climate.
              Transform your vehicle with our expert team and top-quality products.
            </p>
            <div className="flex gap-3 pt-2">
              {footerSocials.map(({ icon: Icon, href }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-full bg-blue-950/60 border border-sky-500/25 flex items-center justify-center text-sky-300 hover:text-white hover:bg-sky-500 hover:border-sky-400 transition-colors shadow-sm"
                >
                  <Icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-extrabold text-base sm:text-lg mb-4 sm:mb-6 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="text-slate-300 hover:text-sky-300 transition-colors text-sm flex items-center gap-2 group min-h-[36px] sm:min-h-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:scale-125 transition-transform shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white font-extrabold text-base sm:text-lg mb-4 sm:mb-6 tracking-wide">
              Our Services
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    prefetch={true}
                    className="text-slate-300 hover:text-sky-300 transition-colors text-sm flex items-center gap-2 group min-h-[36px] sm:min-h-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:scale-125 transition-transform shrink-0" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-extrabold text-base sm:text-lg mb-4 sm:mb-6 tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-primary mt-1 shrink-0 text-base" />
                <span className="text-slate-300 text-sm break-words leading-relaxed">
                  6 Sheikh Sultan, Bin Saqr Al Qasimi Street, Sharjah
                </span>
              </li>
              <li>
                <a
                  href="tel:+971586368849"
                  className="flex items-center gap-3 text-slate-300 hover:text-sky-300 transition-colors text-sm min-h-[36px] sm:min-h-0"
                >
                  <FaPhoneAlt className="text-sky-400 shrink-0" />
                  +971 58 636 8849
                </a>
              </li>
              <li>
                <a
                  href="tel:+971521652323"
                  className="flex items-center gap-3 text-slate-300 hover:text-sky-300 transition-colors text-sm min-h-[36px] sm:min-h-0"
                >
                  <FaPhoneAlt className="text-sky-400 shrink-0" />
                  +971 52 165 2323
                </a>
              </li>
              <li>
                <a
                  href="mailto:purecareautoacs@gmail.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-sky-300 transition-colors text-sm break-all min-h-[36px] sm:min-h-0"
                >
                  <FaEnvelope className="text-sky-400 shrink-0" />
                  purecareautoacs@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-sky-500/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs sm:text-sm text-center">
            © {new Date().getFullYear()} Pure Care Auto Accessories TR. L.L.C.
            All rights reserved. Powered by{" "}
            <a
              href="https://zetacoding.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-200 transition-colors font-semibold"
            >
              ZetaCoding
            </a>
          </p>
          <p className="text-sky-400/80 text-xs text-center font-medium tracking-wider uppercase">
            Clean. Protect. Restore.
          </p>
        </div>
      </div>
    </footer>
  );
}
