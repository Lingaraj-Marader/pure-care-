"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const serviceLinks = [
  { href: "/services/exterior", label: "Exterior Detailing" },
  { href: "/services/interior", label: "Interior Detailing" },
  { href: "/services#protection", label: "Paint Protection Services" },
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
  // { icon: FaYoutube, href: "https://www.youtube.com" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com" },
  { icon: FaTiktok, href: "https://vt.tiktok.com/ZSVD4NByh/" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <Link href="/" prefetch={true}>
              <Image
                src="/purecare-logo.png"
                alt="Pure Care Auto Accessories"
                width={1469}
                height={559}
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
              Premium car care and auto accessories services across the UAE.
              Transform your vehicle with our expert team and top-quality products.
            </p>
            <div className="flex gap-3">
              {footerSocials.map(({ icon: Icon, href }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-red-primary hover:border-red-primary/50 transition-colors"
                >
                  <Icon className="text-xs" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-semibold text-base sm:text-lg mb-4 sm:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="text-slate-600 hover:text-red-primary transition-colors text-sm flex items-center gap-2 group min-h-[36px] sm:min-h-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-primary/50 group-hover:bg-red-primary transition-colors shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-slate-900 font-semibold text-base sm:text-lg mb-4 sm:mb-6">
              Our Services
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    prefetch={true}
                    className="text-slate-600 hover:text-red-primary transition-colors text-sm flex items-center gap-2 group min-h-[36px] sm:min-h-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-primary/50 group-hover:bg-red-primary transition-colors shrink-0" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-slate-900 font-semibold text-base sm:text-lg mb-4 sm:mb-6">
              Contact Us
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-primary mt-1 shrink-0" />
                <span className="text-slate-600 text-sm break-words">
                  6 Sheikh Sultan, Bin Saqr Al Qasimi Street, Sharjah - UAE
                </span>
              </li>
              <li>
                <a
                  href="tel:+971586368849"
                  className="flex items-center gap-3 text-slate-600 hover:text-red-primary transition-colors text-sm min-h-[36px] sm:min-h-0"
                >
                  <FaPhoneAlt className="text-blue-primary shrink-0" />
                  +971 58 636 8849
                </a>
              </li>
              <li>
                <a
                  href="tel:+971529488821"
                  className="flex items-center gap-3 text-slate-600 hover:text-red-primary transition-colors text-sm min-h-[36px] sm:min-h-0"
                >
                  <FaPhoneAlt className="text-blue-primary shrink-0" />
                  +971 52 948 8821
                </a>
              </li>
              <li>
                <a
                  href="mailto:purecareautoacs@gmail.com"
                  className="flex items-center gap-3 text-slate-600 hover:text-red-primary transition-colors text-sm break-all min-h-[36px] sm:min-h-0"
                >
                  <FaEnvelope className="text-blue-primary shrink-0" />
                  purecareautoacs@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Bottom */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200 flex flex-col items-center gap-3 sm:gap-4 md:flex-row md:justify-between">
          <p className="text-slate-500 text-xs sm:text-sm text-center">
            © {new Date().getFullYear()} Pure Care Auto Accessories TR. L.L.C.
            All rights reserved. Powered by{" "}
            <a
              href="https://zetacoding.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-primary hover:text-red-primary transition-colors font-medium"
            >
              ZetaCoding
            </a>
          </p>
          <p className="text-slate-400 text-xs text-center">
            Restore. Protect. Beautify.
          </p>
        </div>
      </div>
    </footer>
  );
}
