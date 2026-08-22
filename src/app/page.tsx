"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCar,
  FaShieldAlt,
  FaStar,
  FaUsers,
  FaTools,
  FaWhatsapp,
  FaArrowRight,
  FaCheckCircle,
  FaTag,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  MdDirectionsCar,
  MdBuild,
  MdColorLens,
  MdLayers,
  MdWeekend,
  MdLocalCarWash,
} from "react-icons/md";
import HeroSlider from "@/components/HeroSlider";
import FadeIn from "@/components/FadeIn";

const homeServices = [
  {
    icon: FaCar,
    title: "Exterior Detailing",
    desc: "Hand wash, clay bar, machine polishing, paint correction, waxing and ceramic protection for a showroom-fresh exterior.",
    image: "/services/Car-Polish.jpg",
    link: "/services/exterior",
  },
  {
    icon: MdDirectionsCar,
    title: "Interior Detailing",
    desc: "Deep vacuum, steam sanitization, seat shampooing, dashboard care and odor removal for a fresh, hygienic cabin.",
    image: "/services/interior-detailing/dashboard-console/1.png",
    link: "/services/interior",
  },
  {
    icon: FaShieldAlt,
    title: "Paint Protection Services",
    desc: "Ceramic coating, PPF, scratch and swirl correction and long-lasting UV protection that guard your paint for years.",
    image: "/services/Ceramic-Coating.jpg",
    link: "/services#protection",
  },
  {
    icon: MdBuild,
    title: "Additional Detailing Services",
    desc: "Engine bay cleaning, alloy wheel detailing, window polishing and full sanitization to finish every detail.",
    image: "/services/Car-Tinting.jpg",
    link: "/services#additional",
  },
];

const stats = [
  { value: "2000+", label: "Cars Serviced" },
  { value: "15+", label: "Services" },
  { value: "100%", label: "Satisfaction" },
  { value: "10+", label: "Years Experience" },
];

const homeProducts = [
  {
    title: "Ceramic Coating Products",
    icon: FaStar,
    image: "/products/1.png",
    items: ["Gtechniq Crystal Serum", "Ceramic Pro 9H", "IGL Coatings Kenzo"],
    color: "from-red-primary to-red-dark",
    hoverBorder: "hover:border-red-primary/50",
    hoverText: "group-hover:text-red-primary",
    price: "From AED 1,500",
  },
  {
    title: "PPF Films",
    icon: FaShieldAlt,
    image: "/products/6.png",
    items: ["XPEL Ultimate Plus", "3M Scotchgard Pro", "SunTek Ultra PPF"],
    color: "from-emerald-500 to-emerald-700",
    hoverBorder: "hover:border-red-primary/50",
    hoverText: "group-hover:text-red-primary",
    price: "From AED 3,000",
  },
  {
    title: "Vinyl Wraps",
    icon: MdColorLens,
    image: "/products/4.png",
    items: [
      "3M 2080 Series",
      "Avery Dennison Supreme",
      "Chrome & Special Effects",
    ],
    color: "from-purple-500 to-purple-700",
    hoverBorder: "hover:border-red-primary/50",
    hoverText: "group-hover:text-red-primary",
    price: "From AED 2,500",
  },
  {
    title: "Window Tinting Films",
    icon: MdLayers,
    image: "/products/3.png",
    items: ["3M Crystalline Series", "Llumar CTX Series", "SunTek CXP Carbon"],
    color: "from-blue-primary to-blue-dark",
    hoverBorder: "hover:border-red-primary/50",
    hoverText: "group-hover:text-red-primary",
    price: "From AED 450",
  },
  {
    title: "Interior Accessories",
    icon: MdWeekend,
    image: "/products/7.png",
    items: ["Custom Seat Covers", "3D/5D Floor Mats", "Ambient Lighting Kits"],
    color: "from-amber-500 to-amber-700",
    hoverBorder: "hover:border-red-primary/50",
    hoverText: "group-hover:text-red-primary",
    price: "From AED 50",
  },
  {
    title: "Car Care Products",
    icon: MdLocalCarWash,
    image: "/products/5.png",
    items: [
      "Meguiar's Professional",
      "Chemical Guys Collection",
      "Sonax Professional",
    ],
    color: "from-yellow-500 to-orange-500",
    hoverBorder: "hover:border-red-primary/50",
    hoverText: "group-hover:text-red-primary",
    price: "Various",
  },
];

const homeBlogs = [
  {
    title: "The Ultimate Guide to Ceramic Coating: Is It Worth It?",
    excerpt:
      "Ceramic coating has revolutionized car paint protection. Learn about the benefits, costs, and whether it's the right choice for your vehicle.",
    category: "Ceramic Coating",
    date: "March 15, 2026",
    readTime: "8 min read",
    color: "from-red-primary to-red-dark",
  },
  {
    title: "PPF vs Ceramic Coating: Which One Does Your Car Need?",
    excerpt:
      "Two of the most popular paint protection options compared head-to-head. Find out which protection method suits your driving needs and budget.",
    category: "Paint Protection",
    date: "March 10, 2026",
    readTime: "10 min read",
    color: "from-blue-primary to-blue-dark",
  },
  {
    title: "Top 5 Benefits of Professional Car Tinting in UAE",
    excerpt:
      "Living in the UAE means dealing with extreme heat. Discover how professional window tinting can protect you and your vehicle's interior.",
    category: "Car Tinting",
    date: "March 5, 2026",
    readTime: "6 min read",
    color: "from-cyan-500 to-cyan-700",
  },
];

const whyChoosePreview = [
  {
    icon: FaStar,
    title: "Premium Quality",
    desc: "We use only the highest quality materials and products from trusted brands.",
  },
  {
    icon: FaUsers,
    title: "Expert Team",
    desc: "Our skilled technicians have years of experience in auto care services.",
  },
  {
    icon: FaShieldAlt,
    title: "Warranty",
    desc: "All our services come with warranty for your complete peace of mind.",
  },
  {
    icon: FaTools,
    title: "Latest Technology",
    desc: "We use cutting-edge tools and techniques for flawless results.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Banner Slider */}
      <section className="pt-20 sm:pt-24 pb-2 sm:pb-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <HeroSlider />
        </motion.div>
      </section>

      {/* 2. Hero Header & Stats */}
      <section className="py-8 sm:py-10 md:py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(24,142,215,0.06),_transparent_55%)]" />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-primary/10 border border-blue-primary/20 text-blue-primary text-xs sm:text-sm font-medium mb-4 sm:mb-5"
          >
            UAE&apos;s Premium Pure Care
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 sm:mb-5"
          >
            <span className="text-slate-900">Transform Your </span>
            <span className="gradient-text">Vehicle Today</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-2"
          >
            Premium car detailing, ceramic coating, PPF and paint protection —
            expert auto care that makes your vehicle look and feel brand new.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Link
              href="/services"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-primary to-blue-dark hover:from-red-primary hover:to-red-dark text-white font-bold rounded-full text-sm sm:text-lg hover:shadow-xl hover:shadow-red-primary/30 transition-all duration-300 pulse-glow flex items-center justify-center gap-2"
            >
              Our Services <FaArrowRight />
            </Link>

            <a
              href="https://wa.me/971586368849"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-green-600 text-green-600 font-bold rounded-full text-sm sm:text-lg hover:bg-green-600/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-lg sm:text-xl" /> WhatsApp Us
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 sm:mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-primary mb-0.5 sm:mb-1">
                  {s.value}
                </div>
                <div className="text-slate-600 text-xs sm:text-sm">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <section className="py-8 sm:py-12 md:py-16 relative">
        <div className="section-divider mb-8 sm:mb-10 md:mb-14" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
              <span className="text-blue-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
                About Pure Care
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 sm:mt-3 mb-4 sm:mb-6">
                UAE&apos;s Trusted{" "}
                <span className="gradient-text-red">Pure Care</span> Experts
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                Pure Care Auto Accessories TR. L.L.C is a leading car care
                service provider based in the UAE. We specialize in transforming
                and protecting vehicles with our comprehensive range of services
                including car tinting, wrapping, polishing, ceramic coating,
                PPF, and much more.
              </p>
              <p className="text-slate-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                Our team of skilled professionals is dedicated to delivering
                exceptional quality and customer satisfaction. We use only
                premium products and the latest techniques to ensure your vehicle
                gets the care it deserves.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {[
                  "Premium Products",
                  "Expert Technicians",
                  "Affordable Prices",
                  "Customer First",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm"
                  >
                    <FaCheckCircle className="text-blue-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-red-primary to-red-dark text-white text-sm sm:text-base font-semibold rounded-full hover:shadow-lg hover:shadow-red-primary/30 transition-all duration-300"
              >
                Learn More <FaArrowRight />
              </Link>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative aspect-square max-w-[280px] sm:max-w-sm md:max-w-md mx-auto">
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-primary/20 to-red-primary/20 blur-3xl" />
                <div className="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden gradient-border bg-gradient-to-br from-slate-50 to-white shadow-sm flex items-center justify-center">
                  <div className="text-center p-6 sm:p-8">
                    <Image
                      src="/purecare-logo.png"
                      alt="Pure Care"
                      width={512}
                      height={512}
                      className="w-40 sm:w-52 md:w-64 h-auto mx-auto mb-4 sm:mb-6 object-contain"
                    />
                    <div className="mt-4 sm:mt-6 space-y-1 sm:space-y-2">
                      <p className="text-blue-primary text-xs sm:text-sm flex items-center justify-center gap-1">
                        <FaMapMarkerAlt /> UAE
                      </p>
                      <p className="text-slate-600 text-xs sm:text-sm">
                        Since 2014
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section className="py-8 sm:py-12 md:py-16 relative">
        <div className="section-divider mb-8 sm:mb-10 md:mb-14" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <FadeIn className="text-center mb-6 sm:mb-8 md:mb-10">
            <span className="text-blue-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
              What We Offer
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 sm:mt-3 mb-3 sm:mb-4">
              Our <span className="gradient-text-blue">Services</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto px-2">
              From exterior and interior detailing to paint protection and
              finishing treatments, we cover every service your vehicle needs to
              stay pristine.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {homeServices.map((service, idx) => (
              <FadeIn key={service.title} delay={idx * 0.08}>
                <Link href={service.link} className="block h-full">
                  <div className="h-full rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-red-primary/50 hover:shadow-md transition-all duration-300 group cursor-pointer overflow-hidden">
                    <div className="relative h-28 sm:h-32 md:h-40 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-3 sm:p-4 md:p-5">
                      <h3 className="text-slate-900 font-bold text-xs sm:text-sm md:text-lg mb-1 sm:mb-2 group-hover:text-red-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-[10px] sm:text-xs md:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-white border border-slate-200 hover:border-red-primary/50 text-slate-900 hover:text-red-primary text-sm sm:text-base font-semibold rounded-full transition-all duration-300 hover:bg-red-primary/5 hover:shadow-md"
            >
              View All Services <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Products Section */}
      <section className="py-8 sm:py-12 md:py-16 relative">
        <div className="section-divider mb-8 sm:mb-10 md:mb-14" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <FadeIn className="text-center mb-6 sm:mb-8 md:mb-10">
            <span className="text-red-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
              What We Use
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 sm:mt-3 mb-3 sm:mb-4">
              Premium <span className="gradient-text-red">Products</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto px-2">
              We partner with the world&apos;s leading automotive brands to
              ensure only the best products touch your vehicle.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {homeProducts.map((prod, idx) => (
              <FadeIn key={prod.title} delay={idx * 0.08}>
                <Link href="/products" className="block">
                  <div className="relative aspect-[6/5] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:border-red-primary/50 hover:shadow-md transition-all group">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-4 sm:p-5">
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${prod.color} flex items-center justify-center mb-2 sm:mb-3`}
                      >
                        <prod.icon className="text-sm sm:text-base text-white" />
                      </div>
                      <h3 className="text-white font-bold text-sm sm:text-base md:text-lg mb-2">
                        {prod.title}
                      </h3>
                      <ul className="space-y-1 sm:space-y-1.5 mb-2 sm:mb-3">
                        {prod.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-1.5 text-slate-200 text-[10px] sm:text-xs"
                          >
                            <FaCheckCircle className="text-blue-primary shrink-0 text-[8px] sm:text-[10px]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <span className="text-blue-primary font-semibold text-xs sm:text-sm">
                        {prod.price}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-slate-900 font-bold text-xs sm:text-sm md:text-base mt-2 sm:mt-3 text-center group-hover:text-red-primary transition-colors">
                    {prod.title}
                  </h3>
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-white border border-slate-200 hover:border-red-primary/50 text-slate-900 hover:text-red-primary text-sm sm:text-base font-semibold rounded-full transition-all duration-300 hover:bg-red-primary/5 hover:shadow-md"
            >
              View All Products <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us Section */}
      <section className="py-8 sm:py-12 md:py-16 relative">
        <div className="section-divider mb-8 sm:mb-10 md:mb-14" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <FadeIn className="text-center mb-6 sm:mb-8 md:mb-10">
            <span className="text-blue-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Why Us
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 sm:mt-3 mb-3 sm:mb-4">
              Why Choose <span className="gradient-text">Pure Care</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto px-2">
              We combine years of expertise, cutting-edge technology, and
              world-class products to deliver unmatched auto care results.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {whyChoosePreview.map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="h-full p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-red-primary/50 hover:shadow-md transition-all text-center group"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-primary to-blue-dark flex items-center justify-center mx-auto mb-3 text-white">
                    <item.icon className="text-base sm:text-lg" />
                  </div>
                  <h3 className="text-slate-900 font-bold text-xs sm:text-sm md:text-base mb-1 group-hover:text-red-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-[10px] sm:text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/why-choose-us"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-white border border-slate-200 hover:border-red-primary/50 text-slate-900 hover:text-red-primary text-sm sm:text-base font-semibold rounded-full transition-all duration-300 hover:bg-red-primary/5 hover:shadow-md"
            >
              Why Pure Care Stands Out <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Blog & Insights Section */}
      <section className="py-8 sm:py-12 md:py-16 relative">
        <div className="section-divider mb-8 sm:mb-10 md:mb-14" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <FadeIn className="text-center mb-6 sm:mb-8 md:mb-10">
            <span className="text-blue-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Blog & Tips
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 sm:mt-3 mb-3 sm:mb-4">
              Latest <span className="gradient-text-blue">Insights</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto px-2">
              Expert tips and guides to help you protect and maintain your
              vehicle in the UAE climate.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {homeBlogs.map((blog, idx) => (
              <FadeIn key={blog.title} delay={idx * 0.08}>
                <Link href="/blog" className="block h-full">
                  <motion.article
                    whileHover={{ y: -8 }}
                    className="h-full flex flex-col rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-red-primary/50 hover:shadow-md transition-all overflow-hidden group"
                  >
                    <div
                      className={`h-36 sm:h-44 md:h-48 bg-gradient-to-br ${blog.color} flex items-center justify-center relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/30" />
                      <h3 className="relative z-10 text-white text-sm sm:text-base md:text-xl font-bold px-4 sm:px-6 text-center leading-snug sm:leading-tight">
                        {blog.title}
                      </h3>
                    </div>
                    <div className="flex-1 p-4 sm:p-5 md:p-6 flex flex-col">
                      <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3 text-[10px] sm:text-xs">
                        <span className="flex items-center gap-1 text-blue-primary">
                          <FaTag /> {blog.category}
                        </span>
                        <span className="flex items-center gap-1 text-slate-500">
                          <FaClock /> {blog.readTime}
                        </span>
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed flex-1 mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                        {blog.excerpt}
                      </p>
                      <span className="text-slate-400 text-[10px] sm:text-xs">
                        {blog.date}
                      </span>
                    </div>
                  </motion.article>
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-white border border-slate-200 hover:border-red-primary/50 text-slate-900 hover:text-red-primary text-sm sm:text-base font-semibold rounded-full transition-all duration-300 hover:bg-red-primary/5 hover:shadow-md"
            >
              View All Articles <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <FadeIn>
            <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-primary via-blue-dark to-slate-900 text-white p-6 sm:p-10 md:p-14 text-center overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(223,10,22,0.15),_transparent_70%)]" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4">
                  Ready to Transform Your Vehicle?
                </h2>
                <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                  Get in touch with us today for a free quote and consultation.
                  Our team is ready to give your car the care it deserves.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <a
                    href="https://wa.me/971586368849"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full text-sm sm:text-lg hover:shadow-xl hover:shadow-green-500/30 transition-all justify-center"
                  >
                    <FaWhatsapp className="text-lg sm:text-xl" /> WhatsApp Us
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 hover:text-red-primary font-bold rounded-full text-sm sm:text-lg hover:shadow-xl transition-all justify-center"
                  >
                    Contact Us <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
