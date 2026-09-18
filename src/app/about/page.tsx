"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCarSide,
  FaSmile,
  FaAward,
} from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import FadeIn from "@/components/FadeIn";
import { missionItems, values, timeline, team } from "@/data/aboutData";

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              The Story Behind{" "}
              <span className="gradient-text">Pure Care</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
              From a small workshop to the UAE&apos;s most trusted
              auto care provider, discover the journey, values, and people behind
              Pure Care Auto Accessories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="py-8 sm:py-10 md:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
                Who <span className="gradient-text-blue">We Are</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                Pure Care Auto Accessories TR. L.L.C is a premier car care and
                auto accessories company engineered for the UAE climate.
                We have been serving car enthusiasts and everyday vehicle owners
                with top-notch auto care services for over a decade.
              </p>
              <p className="text-slate-300 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                Our state-of-the-art facility at 6 Sheikh Sultan, Bin Saqr Al
                Qasimi Street is equipped with the latest tools and technology to
                handle everything from car tinting and wrapping to advanced
                ceramic coating and graphene protection.
              </p>
              <p className="text-slate-300 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                We believe every vehicle deserves premium care, regardless of
                make or model. Our team of skilled technicians is trained to
                deliver flawless results every single time, making us the
                preferred choice for car owners across the UAE.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  "12+ Services",
                  "10000+ Cars Serviced",
                  "10+ Years Experience",
                  "10000+ Happy Clients",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-slate-200 text-xs sm:text-sm font-medium"
                  >
                    <FaCheckCircle className="text-sky-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative space-y-4 sm:space-y-6">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-2xl sm:rounded-3xl blur-3xl pointer-events-none" />

                {/* Pure Care Official Logo Card on Clean White / Light Background */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white via-slate-50 to-sky-50/90 border-2 border-sky-300/60 shadow-[0_20px_60px_-15px_rgba(14,165,233,0.3)] p-6 sm:p-8 flex flex-col items-center justify-center text-center"
                >
                  <Image
                    src="/purecare-logo.png"
                    alt="Pure Care Auto Accessories - Clean | Restore | Protect"
                    width={1386}
                    height={536}
                    className="w-56 sm:w-68 md:w-76 h-auto object-contain drop-shadow-sm mb-3"
                    priority
                  />
                  <span className="inline-block px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-extrabold uppercase tracking-wider">
                    UAE&apos;s Premium Pure Care
                  </span>
                  <p className="text-slate-600 text-xs font-semibold mt-2 flex items-center justify-center gap-1.5">
                    <FaMapMarkerAlt className="text-sky-600" /> Sharjah, UAE • Since 2014
                  </p>
                </motion.div>

                {/* Performance Stats Card */}
                <div className="relative rounded-2xl sm:rounded-3xl bg-[#0a1638]/85 backdrop-blur-md border border-sky-500/25 shadow-2xl shadow-navy-950/70 p-5 sm:p-6">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {[
                      { icon: FaCarSide, value: "10000+", label: "Cars Serviced" },
                      { icon: MdMiscellaneousServices, value: "12+", label: "Services" },
                      { icon: FaSmile, value: "10000+", label: "Happy Clients" },
                      { icon: FaAward, value: "10+", label: "Years Experience" },
                    ].map((st, idx) => (
                      <motion.div
                        key={st.label}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx, type: "spring" }}
                        className="text-center p-3 sm:p-4 rounded-xl bg-[#060c20]/60 border border-sky-500/15"
                      >
                        <st.icon className="text-xl sm:text-2xl text-sky-400 mx-auto mb-1.5 sm:mb-2" />
                        <div className="text-2xl sm:text-3xl font-extrabold text-white mb-0.5 sm:mb-1 drop-shadow-sm">
                          {st.value}
                        </div>
                        <div className="text-slate-300 text-xs sm:text-sm">
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
            <span className="text-sky-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Our Mission
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
              Clean. <span className="gradient-text">Restore.</span> Protect.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              Three pillars define everything we do at Pure Care — clean,
              restore, and protect every vehicle to perfection in the UAE.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {missionItems.map((item, idx) => (
              <FadeIn key={item.title} delay={0.12 * idx}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full text-center p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-[#0a1638]/85 backdrop-blur-md border border-sky-500/20 shadow-lg shadow-navy-950/60 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-500/20 transition-all flex flex-col items-center group"
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 sm:mb-4 md:mb-5 shadow-lg shadow-sky-500/25`}
                  >
                    <item.icon className="text-base sm:text-xl md:text-2xl text-white" />
                  </div>
                  <h3 className="text-white font-extrabold text-base sm:text-lg md:text-xl mb-1.5 sm:mb-2 group-hover:text-sky-300 transition-colors">
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

      {/* 4. Showcase Banner Images */}
      <section className="py-8 sm:py-10 md:py-14">
        <div className="section-divider mb-8 sm:mb-10 md:mb-14" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="md:col-span-2 relative aspect-[16/10] md:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-sky-500/25 shadow-xl shadow-navy-950/70 group">
                <Image
                  src="/showcase/2.png"
                  alt="Pure Care Auto — State of the art facility in Sharjah, UAE"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b1d]/80 via-transparent to-transparent flex items-end p-4 sm:p-6">
                  <span className="text-white font-bold text-sm sm:text-base drop-shadow-md">Our State-of-the-Art Facility</span>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4 sm:gap-6">
                <div className="relative aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden border border-sky-500/25 shadow-lg shadow-navy-950/60 group">
                  <Image
                    src="/showcase/ppf-installation.jpg"
                    alt="Pure Care Auto — PPF Paint Protection Installation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050b1d]/80 via-transparent to-transparent flex items-end p-3 sm:p-4">
                    <span className="text-white font-bold text-xs sm:text-sm drop-shadow-md">PPF & Paint Protection</span>
                  </div>
                </div>
                <div className="relative aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden border border-sky-500/25 shadow-lg shadow-navy-950/60 group">
                  <Image
                    src="/showcase/luxury-interior.jpg"
                    alt="Pure Care Auto — Luxury Interior Detailing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050b1d]/80 via-transparent to-transparent flex items-end p-3 sm:p-4">
                    <span className="text-white font-bold text-xs sm:text-sm drop-shadow-md">Luxury Interior & Detailing</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. Values Section */}
      <section className="py-8 sm:py-10 md:py-14">
        <div className="section-divider mb-8 sm:mb-10 md:mb-14" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <FadeIn className="text-center mb-6 sm:mb-8 md:mb-10">
            <span className="text-sky-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Our Values
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
              What <span className="gradient-text">Drives Us</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
            {values.map((v, idx) => (
              <FadeIn key={v.title} delay={0.1 * idx}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`h-full text-center p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-[#0a1638]/85 backdrop-blur-md border border-sky-500/20 shadow-lg shadow-navy-950/60 ${v.borderHover} hover:shadow-xl ${v.shadowHover} transition-all flex flex-col items-center group`}
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-5 shadow-lg ${v.shadowHover}`}
                  >
                    <v.icon className="text-sm sm:text-base md:text-xl text-white" />
                  </div>
                  <h3
                    className={`text-white font-bold text-xs sm:text-base md:text-lg mb-1 sm:mb-2 ${v.accentText} transition-colors`}
                  >
                    {v.title}
                  </h3>
                  <p className="text-slate-300 text-[10px] sm:text-xs md:text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Timeline Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="section-divider mb-8 sm:mb-10 md:mb-14" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <FadeIn className="text-center mb-6 sm:mb-8 md:mb-10">
            <span className="text-sky-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
              The <span className="gradient-text-blue">Timeline</span>
            </h2>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 via-blue-500 to-transparent shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
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
                  <div
                    className={`flex w-9 h-9 sm:hidden rounded-full bg-gradient-to-br ${item.badgeGradient} shrink-0 items-center justify-center relative z-10 shadow-lg`}
                  >
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
                    <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#0a1638]/85 backdrop-blur-md border border-sky-500/20 shadow-lg shadow-navy-950/60 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-500/20 transition-all group">
                      <span
                        className={`inline-block font-extrabold text-sm sm:text-lg text-transparent bg-clip-text bg-gradient-to-r ${item.badgeGradient} drop-shadow-sm`}
                      >
                        {item.year}
                      </span>
                      <h3 className="text-white font-bold text-base sm:text-xl mt-0.5 sm:mt-1 mb-1 sm:mb-2 group-hover:text-sky-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot for desktop */}
                  <div
                    className={`hidden sm:flex w-4 h-4 rounded-full bg-gradient-to-br ${item.badgeGradient} shrink-0 relative z-10 shadow-md`}
                  />
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
            <span className="text-sky-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Our Team
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
              Meet The <span className="gradient-text">Experts</span>
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {team.map((member, idx) => (
              <FadeIn key={member.name} delay={0.1 * idx}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-[#0a1638]/85 backdrop-blur-md border border-sky-500/20 shadow-lg shadow-navy-950/60 ${member.borderHover} hover:shadow-xl ${member.shadowHover} transition-all group`}
                >
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-5 shadow-lg ${member.shadowHover}`}
                  >
                    <member.icon className="text-xl sm:text-2xl md:text-3xl text-white" />
                  </div>
                  <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-1.5 sm:mb-2 group-hover:text-white transition-colors">
                    {member.name}
                  </h3>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${member.badgeBg}`}
                  >
                    {member.role}
                  </span>
                  <p className="text-slate-300 text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed">
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
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 sm:mb-6">
              Visit Our Showroom
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-slate-300 text-xs sm:text-sm">
              <span className="flex items-center gap-2 text-center">
                <FaMapMarkerAlt className="text-red-primary shrink-0" />
                6 Sheikh Sultan, Bin Saqr Al Qasimi Street, Sharjah
              </span>
              <span className="flex items-center gap-2">
                <FaPhoneAlt className="text-sky-400 shrink-0" />
                <a href="tel:+971586368849" className="hover:text-sky-300 transition-colors">
                  +971 58 636 8849
                </a>
                <span className="text-slate-500">/</span>
                <a href="tel:+971521652323" className="hover:text-sky-300 transition-colors">
                  +971 52 165 2323
                </a>
              </span>
              <span className="flex items-center gap-2 break-all">
                <FaEnvelope className="text-sky-400 shrink-0" />
                purecareautoacs@gmail.com
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
