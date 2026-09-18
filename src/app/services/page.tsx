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

const categoryTabStyles: Record<string, string> = {
  exterior: "bg-blue-500/15 border-blue-400/40 text-blue-300 hover:bg-blue-500/30 hover:border-blue-300 hover:shadow-blue-500/30",
  interior: "bg-emerald-500/15 border-emerald-400/40 text-emerald-300 hover:bg-emerald-500/30 hover:border-emerald-300 hover:shadow-emerald-500/30",
  protection: "bg-red-500/15 border-red-400/40 text-red-300 hover:bg-red-500/30 hover:border-red-300 hover:shadow-red-500/30",
  upholstery: "bg-purple-500/15 border-purple-400/40 text-purple-300 hover:bg-purple-500/30 hover:border-purple-300 hover:shadow-purple-500/30",
  additional: "bg-amber-500/15 border-amber-400/40 text-amber-300 hover:bg-amber-500/30 hover:border-amber-300 hover:shadow-amber-500/30",
};

const serviceAccents = [
  { gradient: "from-blue-500 to-indigo-600", border: "hover:border-blue-400/60 hover:shadow-blue-500/20", tag: "text-blue-400 group-hover:text-blue-200" },
  { gradient: "from-red-500 to-rose-600", border: "hover:border-red-400/60 hover:shadow-red-500/20", tag: "text-red-400 group-hover:text-red-200" },
  { gradient: "from-emerald-500 to-teal-600", border: "hover:border-emerald-400/60 hover:shadow-emerald-500/20", tag: "text-emerald-400 group-hover:text-emerald-200" },
  { gradient: "from-purple-500 to-violet-600", border: "hover:border-purple-400/60 hover:shadow-purple-500/20", tag: "text-purple-400 group-hover:text-purple-200" },
  { gradient: "from-amber-500 to-orange-600", border: "hover:border-amber-400/60 hover:shadow-amber-500/20", tag: "text-amber-400 group-hover:text-amber-200" },
  { gradient: "from-cyan-500 to-sky-600", border: "hover:border-cyan-400/60 hover:shadow-cyan-500/20", tag: "text-cyan-400 group-hover:text-cyan-200" },
];

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
            {categories.map((cat) => {
              const pillColor = categoryTabStyles[cat.key] || "border-sky-500/25 text-slate-200";
              return (
                <a
                  key={cat.key}
                  href={`#${cat.key}`}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border shadow-md shadow-navy-950/60 transition-all flex items-center gap-1.5 ${pillColor}`}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.title}</span>
                </a>
              );
            })}
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
                      {cat.subServices.map((sub, subIdx) => {
                        const accent = serviceAccents[subIdx % serviceAccents.length];

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
                                className={`absolute top-3 left-3 w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br ${accent.gradient} flex items-center justify-center shadow-md`}
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
                                <span className={`mt-2.5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold ${accent.tag} transition-colors`}>
                                  View details <FaArrowRight className="text-[10px]" />
                                </span>
                              )}
                            </div>
                          </>
                        ) : (
                          <div className="p-4 sm:p-5">
                            <div
                              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br ${accent.gradient} flex items-center justify-center mb-2.5 sm:mb-3 shadow-md`}
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

                        const cardClass = `h-full rounded-xl sm:rounded-2xl bg-[#0a1638]/85 backdrop-blur-md border border-sky-500/20 shadow-lg shadow-navy-950/60 ${accent.border} hover:shadow-xl transition-all group overflow-hidden ${
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

      {/* 3. Link to Why Choose Us */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-transparent via-[#070f26]/80 to-[#050b1d] border-t border-sky-500/20">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <FadeIn>
            <div className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0a1638] via-[#0d1e4e] to-[#08122c] border border-sky-500/30 p-6 sm:p-10 md:p-12 shadow-2xl shadow-navy-950/80 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-400/40 text-red-300 text-xs font-bold uppercase tracking-wider mb-3">
                  Pure Care Guarantee
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 sm:mb-4">
                  Why Choose <span className="gradient-text">Pure Care</span> For Your Car?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
                  With 10,000+ satisfied car owners across the UAE, certified installers, and comprehensive warranties on PPF and coatings, see why UAE drivers choose us.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link
                    href="/why-choose-us"
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-bold rounded-full text-sm sm:text-base transition-all justify-center shadow-lg shadow-red-500/30"
                  >
                    Learn Why Drivers Choose Pure Care <FaArrowRight />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 bg-white/10 hover:bg-white text-white hover:text-navy-950 border border-white/30 font-bold rounded-full text-sm sm:text-base transition-all justify-center backdrop-blur-sm shadow-md"
                  >
                    Contact Us & Location
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
