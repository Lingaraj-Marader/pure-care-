"use client";

import { motion } from "framer-motion";
import {
  FaStar,
  FaHandshake,
  FaCheckCircle,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import FadeIn from "@/components/FadeIn";
import {
  strengths,
  stats,
  testimonials,
  processSteps,
} from "@/data/whyChooseUsData";

export default function WhyChooseUsPage() {
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
              Why Choose Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              Why <span className="gradient-text">Pure Care</span> Stands Out
            </h1>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
              We go above and beyond to ensure every vehicle receives the highest
              standard of care and attention. Here&apos;s what makes us the Middle East climate&apos;s
              most trusted auto care provider.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Strengths Section */}
      <section className="py-8 sm:py-10 md:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <FadeIn className="text-center mb-6 sm:mb-8 md:mb-10">
            <span className="text-sky-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Our Strengths
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
              What Makes Us <span className="gradient-text-blue">Different</span>
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {strengths.map((item, idx) => (
              <FadeIn key={item.title} delay={0.08 * idx}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full text-center p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-[#0a1638]/85 backdrop-blur-md border border-sky-500/20 shadow-lg shadow-navy-950/60 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-500/20 transition-all group"
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-5 shadow-lg shadow-sky-500/25`}
                  >
                    <item.icon className="text-lg sm:text-xl text-white" />
                  </div>
                  <h3
                    className="text-white font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 group-hover:text-sky-300 transition-colors"
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Numbers Section */}
      <section className="py-8 sm:py-10 md:py-14">
        <div className="section-divider mb-8 sm:mb-10 md:mb-14" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <FadeIn className="text-center mb-6 sm:mb-8 md:mb-10">
            <span className="text-sky-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Our Numbers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
              Achievements That <span className="gradient-text-red">Speak</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {stats.map((st, idx) => (
              <FadeIn key={st.label} delay={0.08 * idx}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#0a1638]/85 backdrop-blur-md border border-sky-500/20 shadow-lg shadow-navy-950/60"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 mb-1 drop-shadow-sm">
                    {st.value}
                  </div>
                  <div className="text-slate-300 text-[10px] sm:text-xs font-medium">
                    {st.label}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process Section */}
      <section className="py-8 sm:py-10 md:py-14">
        <div className="section-divider mb-8 sm:mb-10 md:mb-14" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <FadeIn className="text-center mb-6 sm:mb-8 md:mb-10">
            <span className="text-sky-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              How We Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
              Our <span className="gradient-text-blue">Process</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto px-2">
              From consultation to delivery, every step is designed to ensure
              excellence.
            </p>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 via-blue-500/50 to-transparent hidden sm:block shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
            <div className="space-y-6 sm:space-y-8">
              {processSteps.map((step, idx) => (
                <FadeIn key={step.step} delay={0.1 * idx} direction="left">
                  <div className="flex gap-4 sm:gap-6 items-start">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center shrink-0 relative z-10 text-white font-extrabold text-sm sm:text-lg shadow-lg shadow-sky-500/30">
                      {step.step}
                    </div>
                    <div className="flex-1 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#0a1638]/85 backdrop-blur-md border border-sky-500/20 shadow-lg shadow-navy-950/60">
                      <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-1 sm:mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="py-8 sm:py-10 md:py-14">
        <div className="section-divider mb-8 sm:mb-10 md:mb-14" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <FadeIn className="text-center mb-6 sm:mb-8 md:mb-10">
            <span className="text-sky-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((test, idx) => (
              <FadeIn key={test.name} delay={0.1 * idx}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="h-full p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-[#0a1638]/85 backdrop-blur-md border border-sky-500/20 shadow-lg shadow-navy-950/60 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-500/20 transition-all"
                >
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {Array.from({ length: test.rating }).map((_, rIdx) => (
                      <FaStar
                        key={rIdx}
                        className="text-amber-400 text-xs sm:text-sm"
                      />
                    ))}
                  </div>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 italic">
                    &ldquo;{test.text}&rdquo;
                  </p>
                  <div>
                    <p className="text-white font-bold text-sm sm:text-base">
                      {test.name}
                    </p>
                    <p className="text-sky-400 text-xs sm:text-sm font-medium">
                      {test.car}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Promise & CTA Section */}
      <section className="py-8 sm:py-10 md:py-14">
        <div className="section-divider mb-8 sm:mb-10 md:mb-14" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <FadeIn>
            <div className="text-center p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0a1638] via-[#0d1d49] to-[#060c20] border border-sky-500/25 shadow-2xl shadow-navy-950/70">
              <FaHandshake className="text-4xl sm:text-5xl text-sky-400 mx-auto mb-4 sm:mb-6 drop-shadow-md" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 sm:mb-4">
                Our Promise to Customers
              </h2>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
                At Pure Care, we promise to treat every vehicle with the same care
                and attention we would give our own. Your satisfaction isn&apos;t
                just a goal — it&apos;s our guarantee.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto mb-6 sm:mb-8">
                {[
                  "Genuine Products",
                  "Skilled Experts",
                  "Fair Pricing",
                  "On-Time Delivery",
                  "Full Warranty",
                  "Free Consultation",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-1.5 sm:gap-2 text-slate-200 text-xs sm:text-sm"
                  >
                    <FaCheckCircle className="text-sky-400 shrink-0 text-[10px] sm:text-xs" />
                    {point}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="https://wa.me/971586368849"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full text-sm sm:text-lg hover:shadow-xl hover:shadow-green-500/30 transition-all justify-center shadow-lg"
                >
                  <FaWhatsapp className="text-lg sm:text-xl" /> WhatsApp Us
                </a>
                <a
                  href="tel:+971586368849"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 text-white font-bold rounded-full text-sm sm:text-lg hover:from-sky-400 hover:to-blue-600 hover:shadow-xl hover:shadow-sky-500/30 transition-all justify-center shadow-lg border border-sky-400/30"
                >
                  <FaPhoneAlt /> Call Now
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
