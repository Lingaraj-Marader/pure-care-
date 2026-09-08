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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(79,195,247,0.12),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(239,68,68,0.08),_transparent_50%)]" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-primary/10 border border-blue-primary/20 text-blue-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Why Choose Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 sm:mb-6">
              Why <span className="gradient-text">Pure Care</span> Stands Out
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
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
            <span className="text-blue-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Our Strengths
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 sm:mt-3 mb-3 sm:mb-4">
              What Makes Us <span className="gradient-text-blue">Different</span>
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {strengths.map((item, idx) => (
              <FadeIn key={item.title} delay={0.08 * idx}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`h-full text-center p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm ${item.hoverBorder} hover:shadow-md transition-all group`}
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-5`}
                  >
                    <item.icon className="text-lg sm:text-xl text-white" />
                  </div>
                  <h3
                    className={`text-slate-900 font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 ${item.hoverText} transition-colors`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
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
            <span className="text-red-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Our Numbers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 sm:mt-3 mb-3 sm:mb-4">
              Achievements That <span className="gradient-text-red">Speak</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {stats.map((st, idx) => (
              <FadeIn key={st.label} delay={0.08 * idx}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-primary mb-1">
                    {st.value}
                  </div>
                  <div className="text-slate-600 text-[10px] sm:text-xs">
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
            <span className="text-blue-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
              How We Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 sm:mt-3 mb-3 sm:mb-4">
              Our <span className="gradient-text-blue">Process</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto px-2">
              From consultation to delivery, every step is designed to ensure
              excellence.
            </p>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-primary via-blue-primary/30 to-transparent hidden sm:block" />
            <div className="space-y-6 sm:space-y-8">
              {processSteps.map((step, idx) => (
                <FadeIn key={step.step} delay={0.1 * idx} direction="left">
                  <div className="flex gap-4 sm:gap-6 items-start">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-primary to-blue-dark flex items-center justify-center shrink-0 relative z-10 text-white font-extrabold text-sm sm:text-lg">
                      {step.step}
                    </div>
                    <div className="flex-1 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm">
                      <h3 className="text-slate-900 font-bold text-base sm:text-lg md:text-xl mb-1 sm:mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
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
            <span className="text-red-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 sm:mt-3 mb-3 sm:mb-4">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((test, idx) => (
              <FadeIn key={test.name} delay={0.1 * idx}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="h-full p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-red-primary/50 hover:shadow-md transition-all"
                >
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {Array.from({ length: test.rating }).map((_, rIdx) => (
                      <FaStar
                        key={rIdx}
                        className="text-amber-500 text-xs sm:text-sm"
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 italic">
                    &ldquo;{test.text}&rdquo;
                  </p>
                  <div>
                    <p className="text-slate-900 font-bold text-sm sm:text-base">
                      {test.name}
                    </p>
                    <p className="text-blue-primary text-xs sm:text-sm">
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
            <div className="text-center p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-primary/10 to-red-primary/10 border border-slate-200">
              <FaHandshake className="text-4xl sm:text-5xl text-blue-primary mx-auto mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 sm:mb-4">
                Our Promise to Customers
              </h2>
              <p className="text-slate-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
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
                    className="flex items-center gap-1.5 sm:gap-2 text-slate-700 text-xs sm:text-sm"
                  >
                    <FaCheckCircle className="text-blue-primary shrink-0 text-[10px] sm:text-xs" />
                    {point}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="https://wa.me/971586368849"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full text-sm sm:text-lg hover:shadow-xl hover:shadow-green-500/30 transition-all justify-center"
                >
                  <FaWhatsapp className="text-lg sm:text-xl" /> WhatsApp Us
                </a>
                <a
                  href="tel:+971586368849"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-primary to-blue-dark text-white font-bold rounded-full text-sm sm:text-lg hover:from-red-primary hover:to-red-dark hover:shadow-xl hover:shadow-red-primary/30 transition-all justify-center"
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
