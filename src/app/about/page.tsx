"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCar,
  FaTools,
  FaUsers,
  FaStar,
} from "react-icons/fa";
import FadeIn from "@/components/FadeIn";
import { missionItems, values, timeline, team } from "@/data/aboutData";

export default function AboutPage() {
  return (
    <>
      {/* 1. Header Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(79,195,247,0.12),_transparent_50%)]" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-primary/10 border border-blue-primary/20 text-blue-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              About Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 sm:mb-6">
              The Story Behind{" "}
              <span className="gradient-text">Pure Care</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
              From a small workshop to the UAE&apos;s most trusted auto care
              provider, discover the journey, values, and people behind Pure
              Care Auto Accessories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="py-8 sm:py-10 md:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 sm:mb-6">
                Who <span className="gradient-text-blue">We Are</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                Pure Care Auto Accessories TR. L.L.C is a premier car care and
                auto accessories company based in the UAE. We have been serving
                car enthusiasts and everyday vehicle owners with top-notch auto
                care services for over a decade.
              </p>
              <p className="text-slate-600 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                Our state-of-the-art facility at 6 Sheikh Sultan, Bin Saqr Al
                Qasimi Street is equipped with the latest tools and technology to
                handle everything from car tinting and wrapping to advanced
                ceramic coating and graphene protection.
              </p>
              <p className="text-slate-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                We believe every vehicle deserves premium care, regardless of
                make or model. Our team of skilled technicians is trained to
                deliver flawless results every single time, making us the
                preferred choice for car owners across the UAE.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  "12+ Services",
                  "2000+ Cars Serviced",
                  "10+ Years Experience",
                  "100% Satisfaction",
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
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-primary/10 to-red-primary/10 rounded-2xl sm:rounded-3xl blur-3xl" />
                <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-sm p-6 sm:p-8 md:p-10">
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    {[
                      { icon: FaCar, value: "2000+", label: "Cars Serviced" },
                      { icon: FaTools, value: "12+", label: "Services" },
                      { icon: FaUsers, value: "1500+", label: "Happy Clients" },
                      { icon: FaStar, value: "10+", label: "Years" },
                    ].map((st, idx) => (
                      <motion.div
                        key={st.label}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx, type: "spring" }}
                        className="text-center p-3 sm:p-4"
                      >
                        <st.icon className="text-xl sm:text-2xl text-blue-primary mx-auto mb-2 sm:mb-3" />
                        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-0.5 sm:mb-1">
                          {st.value}
                        </div>
                        <div className="text-slate-600 text-xs sm:text-sm">
                          {st.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Mission Section */}
      <section className="py-8 sm:py-10 md:py-14">
        <div className="section-divider mb-8 sm:mb-10 md:mb-14" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <FadeIn className="text-center mb-6 sm:mb-8 md:mb-10">
            <span className="text-blue-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Our Mission
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 sm:mt-3 mb-3 sm:mb-4">
              Restore. <span className="gradient-text">Protect.</span> Beautify.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              Three words define everything we do at Pure Care — and every
              vehicle that leaves our workshop has been through all three.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {missionItems.map((item, idx) => (
              <FadeIn key={item.title} delay={0.12 * idx}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full text-center p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-red-primary/50 hover:shadow-md transition-all flex flex-col items-center"
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 sm:mb-4 md:mb-5`}
                  >
                    <item.icon className="text-base sm:text-xl md:text-2xl text-white" />
                  </div>
                  <h3 className="text-slate-900 font-extrabold text-base sm:text-lg md:text-xl mb-1.5 sm:mb-2">
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

      {/* 4. Showcase Banner Image */}
      <section className="py-8 sm:py-10 md:py-14">
        <div className="section-divider mb-8 sm:mb-10 md:mb-14" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <FadeIn>
            <div className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
              <Image
                src="/showcase/2.png"
                alt="Pure Care Auto — premium car care services in the UAE"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. Values Section */}
      <section className="py-8 sm:py-10 md:py-14">
        <div className="section-divider mb-8 sm:mb-10 md:mb-14" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <FadeIn className="text-center mb-6 sm:mb-8 md:mb-10">
            <span className="text-red-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Our Values
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 sm:mt-3 mb-3 sm:mb-4">
              What <span className="gradient-text-red">Drives Us</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
            {values.map((v, idx) => (
              <FadeIn key={v.title} delay={0.1 * idx}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full text-center p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-red-primary/50 hover:shadow-md transition-all flex flex-col items-center"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-red-primary to-red-dark flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-5">
                    <v.icon className="text-sm sm:text-base md:text-xl text-white" />
                  </div>
                  <h3 className="text-slate-900 font-bold text-xs sm:text-base md:text-lg mb-1 sm:mb-2">
                    {v.title}
                  </h3>
                  <p className="text-slate-600 text-[10px] sm:text-xs md:text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Timeline Section */}
      <section className="py-8 sm:py-10 md:py-14">
        <div className="section-divider mb-8 sm:mb-10 md:mb-14" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-6 sm:mb-8 md:mb-10">
            <span className="text-blue-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 sm:mt-3 mb-3 sm:mb-4">
              The <span className="gradient-text-blue">Timeline</span>
            </h2>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-primary via-blue-primary/50 to-transparent" />
            {timeline.map((item, idx) => (
              <FadeIn
                key={item.year}
                delay={0.1 * idx}
                direction={idx % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`flex items-start sm:items-center gap-4 sm:gap-8 mb-8 sm:mb-12 ${
                    idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Mobile year badge */}
                  <div className="flex w-8 h-8 sm:hidden rounded-full bg-blue-primary shrink-0 items-center justify-center relative z-10 glow-blue">
                    <span className="text-[10px] font-bold text-white">
                      {item.year.slice(2)}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 ${
                      idx % 2 === 0 ? "sm:text-right" : "sm:text-left"
                    }`}
                  >
                    <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-red-primary/50 hover:shadow-md transition-all">
                      <span className="text-blue-primary font-bold text-sm sm:text-lg">
                        {item.year}
                      </span>
                      <h3 className="text-slate-900 font-bold text-base sm:text-xl mt-0.5 sm:mt-1 mb-1 sm:mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot for desktop */}
                  <div className="hidden sm:flex w-4 h-4 rounded-full bg-blue-primary shrink-0 relative z-10 glow-blue" />
                  <div className="flex-1 hidden sm:block" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Team Section */}
      <section className="py-8 sm:py-10 md:py-14">
        <div className="section-divider mb-8 sm:mb-10 md:mb-14" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <FadeIn className="text-center mb-6 sm:mb-8 md:mb-10">
            <span className="text-blue-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Our Team
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 sm:mt-3 mb-3 sm:mb-4">
              Meet The <span className="gradient-text">Experts</span>
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {team.map((member, idx) => (
              <FadeIn key={member.name} delay={0.1 * idx}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-red-primary/50 hover:shadow-md transition-all"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-primary to-blue-dark flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-5">
                    <member.icon className="text-xl sm:text-2xl md:text-3xl text-white" />
                  </div>
                  <h3 className="text-slate-900 font-bold text-base sm:text-lg md:text-xl mb-0.5 sm:mb-1">
                    {member.name}
                  </h3>
                  <span className="text-blue-primary text-xs sm:text-sm font-medium">
                    {member.role}
                  </span>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed">
                    {member.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Visit Our Showroom Info */}
      <section className="py-8 sm:py-10 md:py-14">
        <div className="section-divider mb-8 sm:mb-10 md:mb-14" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 sm:mb-6">
              Visit Our Showroom
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-slate-600 text-xs sm:text-sm">
              <span className="flex items-center gap-2 text-center">
                <FaMapMarkerAlt className="text-red-primary shrink-0" />
                6 Sheikh Sultan, Bin Saqr Al Qasimi Street, Sharjah
              </span>
              <span className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-primary shrink-0" />
                +971 58 636 8849
              </span>
              <span className="flex items-center gap-2 break-all">
                <FaEnvelope className="text-blue-primary shrink-0" />
                purecareautoacs@gmail.com
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
