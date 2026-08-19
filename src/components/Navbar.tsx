"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { categories } from "@/data/servicesData";

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/why-choose-us", label: "Why Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    icon: FaWhatsapp,
    href: "https://wa.me/971586368849",
    label: "WhatsApp",
    color: "hover:text-green-600",
    size: "text-lg lg:text-xl",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com",
    label: "Instagram",
    color: "hover:text-red-primary",
    size: "text-lg lg:text-xl",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com",
    label: "Facebook",
    color: "hover:text-red-primary",
    size: "text-sm lg:text-base",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com",
    label: "YouTube",
    color: "hover:text-red-primary",
    size: "text-sm lg:text-base",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com",
    label: "LinkedIn",
    color: "hover:text-red-primary",
    size: "text-sm lg:text-base",
  },
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com",
    label: "TikTok",
    color: "hover:text-red-primary",
    size: "text-sm lg:text-base",
  },
];

const getSubServiceUrl = (catKey: string, slug?: string) =>
  slug ? `/services/${slug}` : `/services/${catKey}`;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeCategoryKey, setActiveCategoryKey] = useState(categories[0].key);

  const pathname = usePathname();

  const activeCategory =
    categories.find((c) => c.key === activeCategoryKey) ?? categories[0];

  const closeMenus = () => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close menus automatically whenever pathname changes
  useEffect(() => {
    closeMenus();
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg shadow-slate-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <Link href="/" prefetch={true} className="shrink-0" onClick={closeMenus}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/pure-care-logo2-wide.png"
                alt="Pure Care Auto Accessories"
                width={942}
                height={436}
                className="h-16 sm:h-20 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.label === "Services") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => {
                      setServicesDropdownOpen(true);
                      setActiveCategoryKey(categories[0].key);
                    }}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href="/services"
                      prefetch={true}
                      onClick={closeMenus}
                      className={`relative flex items-center gap-1 px-2.5 lg:px-3 xl:px-4 py-2 text-xs lg:text-sm font-medium transition-colors group ${
                        isActive
                          ? "text-blue-primary"
                          : "text-slate-700 hover:text-red-primary"
                      }`}
                    >
                      {link.label}
                      <FaChevronDown
                        className={`text-[9px] transition-transform duration-300 ${
                          servicesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                      <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-blue-primary transition-all duration-300 ${
                          isActive
                            ? "w-3/4"
                            : "w-0 group-hover:w-3/4 group-hover:bg-red-primary"
                        }`}
                      />
                    </Link>

                    {/* Services Mega Dropdown */}
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                        >
                          <div className="w-[600px] max-w-[calc(100vw-2rem)] rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-300/50 overflow-hidden">
                            <div className="flex">
                              {/* Categories column */}
                              <div className="w-[46%] bg-slate-50 border-r border-slate-100 p-2 space-y-0.5">
                                {categories.map((cat) => (
                                  <Link
                                    key={cat.key}
                                    href={`/services/${cat.key}`}
                                    prefetch={true}
                                    onClick={closeMenus}
                                    onMouseEnter={() =>
                                      setActiveCategoryKey(cat.key)
                                    }
                                    className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                                      activeCategoryKey === cat.key
                                        ? "bg-white text-red-primary shadow-sm"
                                        : "text-slate-700 hover:text-red-primary"
                                    }`}
                                  >
                                    {cat.title}
                                  </Link>
                                ))}
                              </div>

                              {/* Subservices column */}
                              <div className="w-[54%] p-3 flex flex-col">
                                <p className="px-2 mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                                  {activeCategory.title}
                                </p>
                                <motion.ul
                                  key={activeCategoryKey}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ duration: 0.12 }}
                                  className="space-y-0.5 flex-1"
                                >
                                  {activeCategory.subServices.map((sub) => (
                                    <li key={sub.name}>
                                      <Link
                                        href={getSubServiceUrl(
                                          activeCategory.key,
                                          sub.slug
                                        )}
                                        prefetch={true}
                                        onClick={closeMenus}
                                        className="block rounded-lg px-3 py-2 text-xs text-slate-600 hover:text-red-primary hover:bg-red-primary/5 transition-colors leading-snug"
                                      >
                                        {sub.name}
                                      </Link>
                                    </li>
                                  ))}
                                </motion.ul>
                                <Link
                                  href={`/services/${activeCategory.key}`}
                                  prefetch={true}
                                  onClick={closeMenus}
                                  className="mt-2 pt-2.5 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs font-semibold text-blue-primary hover:text-red-primary transition-colors"
                                >
                                  View all {activeCategory.title} →
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  onClick={closeMenus}
                  className={`relative px-2.5 lg:px-3 xl:px-4 py-2 text-xs lg:text-sm font-medium transition-colors group ${
                    isActive
                      ? "text-blue-primary"
                      : "text-slate-700 hover:text-red-primary"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-blue-primary transition-all duration-300 ${
                      isActive
                        ? "w-3/4"
                        : "w-0 group-hover:w-3/4 group-hover:bg-red-primary"
                    }`}
                  />
                </Link>
              );
            })}

            <Link
              href="/contact"
              prefetch={true}
              onClick={closeMenus}
              className="ml-2 lg:ml-3 px-4 lg:px-5 py-2 bg-gradient-to-r from-blue-primary to-blue-dark text-white text-xs lg:text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-red-primary/30 hover:from-red-primary hover:to-red-dark transition-all duration-300"
            >
              Get Quote
            </Link>

            {/* Social icons */}
            <div className="flex items-center gap-1 ml-2 lg:ml-3 pl-2 lg:pl-3 border-l border-slate-200">
              {socialLinks.map(({ icon: Icon, href, label, color, size }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 flex items-center justify-center text-slate-600 ${color} transition-colors rounded-full hover:bg-red-primary/5`}
                  title={label}
                >
                  <Icon className={size} />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => {
              setMobileMenuOpen((prev) => !prev);
              setMobileServicesOpen(false);
            }}
            className="md:hidden text-2xl text-slate-900 p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 overflow-hidden max-h-[calc(100dvh-5rem)]"
          >
            <div className="px-4 py-4 sm:py-6 space-y-1 overflow-y-auto">
              {navLinks.map((link, idx) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                if (link.label === "Services") {
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * idx }}
                    >
                      <button
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-base rounded-lg transition-all min-h-[44px] ${
                          isActive
                            ? "text-blue-primary bg-blue-primary/5 border-l-2 border-blue-primary"
                            : "text-slate-700 hover:text-red-primary hover:bg-red-primary/5"
                        }`}
                        aria-expanded={mobileServicesOpen}
                      >
                        <span>Services</span>
                        <FaChevronDown
                          className={`text-xs transition-transform duration-300 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-2 py-1 space-y-2">
                              {categories.map((cat) => (
                                <div key={cat.key}>
                                  <Link
                                    href={`/services/${cat.key}`}
                                    prefetch={true}
                                    onClick={closeMenus}
                                    className="block px-4 py-2 text-sm font-semibold text-slate-900 rounded-lg hover:text-red-primary hover:bg-red-primary/5 transition-colors"
                                  >
                                    {cat.title}
                                  </Link>
                                  <div className="pl-3 border-l border-slate-100 ml-4">
                                    {cat.subServices.map((sub) => (
                                      <Link
                                        key={sub.name}
                                        href={getSubServiceUrl(
                                          cat.key,
                                          sub.slug
                                        )}
                                        prefetch={true}
                                        onClick={closeMenus}
                                        className="block px-3 py-1.5 text-xs text-slate-600 rounded-md hover:text-red-primary hover:bg-red-primary/5 transition-colors"
                                      >
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                              <Link
                                href="/services"
                                prefetch={true}
                                onClick={closeMenus}
                                className="block px-4 py-2 text-sm font-semibold text-blue-primary hover:text-red-primary transition-colors"
                              >
                                View all services →
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx }}
                  >
                    <Link
                      href={link.href}
                      prefetch={true}
                      onClick={closeMenus}
                      className={`block px-4 py-3 text-base rounded-lg transition-all min-h-[44px] flex items-center ${
                        isActive
                          ? "text-blue-primary bg-blue-primary/5 border-l-2 border-blue-primary"
                          : "text-slate-700 hover:text-red-primary hover:bg-red-primary/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * navLinks.length }}
                className="pt-4 border-t border-slate-200 mt-3"
              >
                <p className="text-slate-500 text-xs uppercase tracking-widest mb-3 px-4">
                  Follow Us
                </p>
                <div className="flex items-center gap-2 px-4">
                  {socialLinks.map(({ icon: Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 flex items-center justify-center text-slate-600 ${color} transition-colors rounded-full bg-slate-100 border border-slate-200`}
                      title={label}
                    >
                      <Icon className="text-sm" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
