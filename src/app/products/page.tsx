"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import FadeIn from "@/components/FadeIn";
import { productsData } from "@/data/productsData";

export default function ProductsPage() {
  return (
    <>
      {/* 1. Header Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.15),_transparent_60%)]" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-sm">
              Our Products
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              Premium <span className="gradient-text">Products</span> Used
            </h1>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
              We partner with the world&apos;s leading automotive brands to ensure
              only the best products touch your vehicle. Quality you can trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Products Categories List */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 space-y-12 sm:space-y-16 md:space-y-20">
          {productsData.map((category, catIdx) => {
            const isAlternate = catIdx % 2 === 1;

            return (
              <FadeIn key={category.title}>
                {/* Category Header with Image and Description */}
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center mb-6 sm:mb-8">
                  <div className={isAlternate ? "lg:order-2" : ""}>
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-sky-500/25 shadow-xl shadow-navy-950/70">
                      <Image
                        src={category.image}
                        alt={category.title}
                        width={928}
                        height={760}
                        className="w-full h-auto"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  <div className={isAlternate ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div
                        className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shrink-0 shadow-lg shadow-sky-500/25`}
                      >
                        <category.icon className="text-lg sm:text-2xl text-white" />
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                        {category.title}
                      </h2>
                    </div>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  {category.products.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                      whileHover={{ y: -4 }}
                      className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-[#0a1638]/85 backdrop-blur-md border border-sky-500/20 shadow-lg shadow-navy-950/60 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-500/20 transition-all group"
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0 mb-2 sm:mb-3">
                        <h3 className="text-white font-bold text-sm sm:text-base md:text-lg group-hover:text-sky-300 transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-sky-400 text-xs sm:text-sm font-bold shrink-0">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm mb-3 sm:mb-4">
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-2">
                        <FaCheckCircle className="text-emerald-400 text-[10px] sm:text-xs" />
                        <span className="text-slate-400 text-[10px] sm:text-xs">
                          Available at Pure Care
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* 3. Pricing Disclaimer & Direct Consultation CTA */}
      <section className="pb-16 sm:pb-20 md:pb-24">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0d1f4d] via-[#102a6b] to-[#0d1f4d] border border-sky-400/30 p-6 sm:p-8 md:p-12 text-center shadow-2xl shadow-navy-950/80 max-w-5xl mx-auto">
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-sky-400/20 text-sky-300 text-xs sm:text-sm font-semibold mb-4">
              Transparent Pricing & Authenticity Guaranteed
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Need a Custom Package or Specific Product?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8">
              Prices shown are starting estimates for standard vehicles. Exact quotes depend on vehicle model, dimensions, and custom specifications. All our materials are 100% genuine with official manufacturer warranties.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/971586368849?text=Hello%20Pure%20Care!%20I%20would%20like%20a%20custom%20pricing%20quote%20for%20products%20and%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/30 hover:scale-[1.02] transition-all"
              >
                <FaWhatsapp className="text-xl" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+971586368849"
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-400/40 font-bold text-sm sm:text-base hover:scale-[1.02] transition-all"
              >
                <FaPhoneAlt className="text-base" />
                Call +971 58 636 8849
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
