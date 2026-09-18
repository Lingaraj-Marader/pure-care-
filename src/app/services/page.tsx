"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import FadeIn from "@/components/FadeIn";
import { categories } from "@/data/servicesData";

const makeWhatsAppUrl = (title: string) =>
  `https://wa.me/971586368849?text=${encodeURIComponent(
    `Hi Pure Care! I'm interested in your *${title}*.\n\nPlease share the available time slots and a quote.\n\nThank you!`
  )}`;

export default function ServicesPage() {
  return (
    <>
      {/* 1. Header Hero & Category Quick Jump */}
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
              Our Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              Premium <span className="gradient-text">Pure Care</span> Services
            </h1>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
              Five comprehensive auto care categories — exterior detailing, interior
              detailing, paint protection film (PPF), seat upholstery, and additional
              detailing services — engineered to transform, protect and maintain
              your vehicle in the UAE.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {categories.map((cat) => (
              <a
                key={cat.key}
                href={`#${cat.key}`}
                className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-[#0a1638] border border-sky-500/25 shadow-md shadow-navy-950/60 text-slate-200 hover:text-white hover:border-sky-400 hover:bg-sky-500/20 transition-all flex items-center"
              >
                <span className="mr-1.5">{cat.emoji}</span>
                {cat.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. All Categories Breakdown */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="space-y-14 sm:space-y-20 md:space-y-24">
            {categories.map((cat, catIdx) => {
              const isEven = catIdx % 2 === 0;

              return (
                <FadeIn key={cat.key}>
                  <div id={cat.key} className="scroll-mt-24 sm:scroll-mt-28">
                    {/* Category Top Banner & Intro */}
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-8 sm:mb-10">
                      <div className={!isEven ? "lg:order-2" : ""}>
                        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <div
                            className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center shrink-0 shadow-lg shadow-sky-500/25`}
                          >
                            <cat.icon className="text-lg sm:text-2xl text-white" />
                          </div>
                          <div>
                            <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
                              <span>{cat.emoji}</span> {cat.title}
                            </h2>
                            <span
                              className={`text-xs sm:text-sm font-semibold ${cat.accent}`}
                            >
                              {cat.tagline}
                            </span>
                          </div>
                        </div>

                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                          {cat.intro}
                        </p>

                        <a
                          href={makeWhatsAppUrl(cat.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-500/30 transition-all text-xs sm:text-sm shadow-md"
                        >
                          <FaWhatsapp className="text-base" /> Book {cat.title}
                        </a>
                      </div>

                      {/* Featured Category Image */}
                      <div className={!isEven ? "lg:order-1" : ""}>
                        <div
                          className={`aspect-[4/3] rounded-2xl sm:rounded-3xl bg-gradient-to-br ${cat.color} p-px overflow-hidden shadow-2xl shadow-navy-950/70 border border-sky-500/20`}
                        >
                          <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden relative">
                            <Image
                              src={cat.image}
                              alt={cat.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#060c20]/70 to-transparent" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SubServices Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {cat.subServices.map((sub) => {
                        const cardContent = sub.image ? (
                          <>
                            <div className="relative h-36 sm:h-44 w-full overflow-hidden">
                              <Image
                                src={sub.image}
                                alt={sub.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1638] via-black/40 to-transparent" />
                              <div
                                className={`absolute top-3 left-3 w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-md`}
                              >
                                <sub.icon className="text-sm sm:text-base text-white" />
                              </div>
                            </div>
                            <div className="p-4 sm:p-5">
                              <h3 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-1.5 leading-snug group-hover:text-sky-300 transition-colors">
                                {sub.name}
                              </h3>
                              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                                {sub.blurb}
                              </p>
                              {sub.slug && (
                                <span className="mt-2.5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-400 group-hover:text-sky-200 transition-colors">
                                  View details <FaArrowRight className="text-[10px]" />
                                </span>
                              )}
                            </div>
                          </>
                        ) : (
                          <div className="p-4 sm:p-5">
                            <div
                              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-2.5 sm:mb-3 shadow-md`}
                            >
                              <sub.icon className="text-sm sm:text-base text-white" />
                            </div>
                            <h3 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-1.5 leading-snug">
                              {sub.name}
                            </h3>
                            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                              {sub.blurb}
                            </p>
                          </div>
                        );

                        const cardClass = `h-full rounded-xl sm:rounded-2xl bg-[#0a1638]/85 backdrop-blur-md border border-sky-500/20 shadow-lg shadow-navy-950/60 hover:border-sky-400/60 hover:shadow-xl hover:shadow-sky-500/20 transition-all group overflow-hidden ${
                          sub.slug ? "cursor-pointer" : ""
                        }`;

                        return sub.slug ? (
                          <div key={sub.name} className={cardClass}>
                            <Link
                              href={`/services/${sub.slug}`}
                              className="block h-full"
                            >
                              {cardContent}
                            </Link>
                          </div>
                        ) : (
                          <div key={sub.name} className={cardClass}>
                            {cardContent}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {catIdx < categories.length - 1 && (
                    <div className="section-divider mt-14 sm:mt-20 md:mt-24" />
                  )}
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
