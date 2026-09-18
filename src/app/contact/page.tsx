"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import FadeIn from "@/components/FadeIn";
import { contactCards, businessHours } from "@/data/contactData";

const socialLinks = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/971586368849",
    color:
      "hover:bg-green-600 hover:border-green-400 hover:text-white",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/purecaresharjah?igsi=MWJ0enZsem94OTN1dg%3D%3D&utm_source=qr",
    color:
      "hover:bg-sky-500 hover:border-sky-400 hover:text-white",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com",
    color:
      "hover:bg-sky-500 hover:border-sky-400 hover:text-white",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    color:
      "hover:bg-sky-500 hover:border-sky-400 hover:text-white",
  },
  {
    icon: FaTiktok,
    label: "TikTok",
    href: "https://vt.tiktok.com/ZSVD4NByh/",
    color:
      "hover:bg-sky-500 hover:border-sky-400 hover:text-white",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Pure Care! I'm ${formData.name}.%0A%0AService: ${formData.service}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage: ${formData.message}%0A`;

    window.open(`https://wa.me/971586368849?text=${text}`, "_blank");
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

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
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              Contact <span className="gradient-text">Pure Care</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
              Ready to transform your vehicle? Reach out to us for a free
              consultation and quote. We&apos;re here to help you get the best
              care for your car.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. 4 Info Cards */}
      <section className="py-6 sm:py-8 md:py-12">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {contactCards.map((card, idx) => (
              <FadeIn key={card.title} delay={0.1 * idx} className="h-full">
                <motion.a
                  href={card.link}
                  target={
                    card.title === "WhatsApp" || card.title === "Location"
                      ? "_blank"
                      : undefined
                  }
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`h-full flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-[#0a1638]/85 backdrop-blur-md border border-sky-500/20 shadow-lg shadow-navy-950/60 hover:border-sky-400/60 hover:shadow-xl hover:shadow-sky-500/20 transition-all text-center group min-h-[160px] sm:min-h-[180px] md:min-h-[200px]`}
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 shadow-lg shadow-sky-500/25`}
                  >
                    <card.icon className="text-base sm:text-lg md:text-xl text-white" />
                  </div>
                  <h3
                    className="text-white font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 group-hover:text-sky-300 transition-colors"
                  >
                    {card.title}
                  </h3>
                  {card.details.map((detail, dIdx) => (
                    <p
                      key={dIdx}
                      className="text-slate-300 text-[10px] sm:text-xs md:text-sm break-all sm:break-normal"
                    >
                      {detail}
                    </p>
                  ))}
                </motion.a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Form & Details Grid */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Left: Contact Form */}
            <FadeIn direction="left">
              <div className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-[#0a1638]/85 backdrop-blur-md border border-sky-500/20 shadow-xl shadow-navy-950/70">
                <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-1 sm:mb-2">
                  Send Us a Message
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm mb-5 sm:mb-8">
                  Fill out the form below and we&apos;ll get back to you via
                  WhatsApp.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-3 sm:space-y-4 md:space-y-5"
                >
                  <div>
                    <label className="block text-slate-200 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#060c20] border border-sky-500/25 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                    <div>
                      <label className="block text-slate-200 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#060c20] border border-sky-500/25 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-200 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#060c20] border border-sky-500/25 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-200 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#060c20] border border-sky-500/25 text-white text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                    >
                      <option value="" className="bg-[#0a1638] text-white">
                        Select a service
                      </option>
                      <option
                        value="Exterior Detailing"
                        className="bg-[#0a1638] text-white"
                      >
                        Exterior Detailing
                      </option>
                      <option
                        value="Interior Detailing"
                        className="bg-[#0a1638] text-white"
                      >
                        Interior Detailing
                      </option>
                      <option
                        value="Paint Protection Services"
                        className="bg-[#0a1638] text-white"
                      >
                        Paint Protection Services
                      </option>
                      <option
                        value="Additional Detailing Services"
                        className="bg-[#0a1638] text-white"
                      >
                        Additional Detailing Services
                      </option>
                      <option value="Other" className="bg-[#0a1638] text-white">
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-200 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#060c20] border border-sky-500/25 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-white text-sm sm:text-lg flex items-center justify-center gap-2 transition-all min-h-[44px] shadow-lg shadow-sky-500/30 border border-sky-400/30 ${
                      isSubmitted
                        ? "bg-green-500"
                        : "bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-400 hover:to-blue-600"
                    }`}
                  >
                    {isSubmitted ? (
                      "Message Sent!"
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </FadeIn>

            {/* Right: Map, Hours, Details, Socials */}
            <FadeIn direction="right">
              <div className="space-y-4 sm:space-y-6">
                {/* Google Map */}
                <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-sky-500/25 shadow-xl shadow-navy-950/70 h-48 sm:h-64 md:h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.0!2d55.38!3d25.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIxJzAwLjAiTiA1NcKwMjInNDguMCJF!5e0!3m2!1sen!2sae!4v1600000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Pure Care Location"
                  />
                </div>

                {/* Business Hours */}
                <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-[#0a1638]/85 backdrop-blur-md border border-sky-500/20 shadow-lg shadow-navy-950/60">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <FaClock className="text-sky-400 text-base sm:text-lg" />
                    <h3 className="text-white font-bold text-base sm:text-lg">
                      Business Hours
                    </h3>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {businessHours.map((hour) => (
                      <div
                        key={hour.day}
                        className="flex justify-between items-center text-xs sm:text-sm"
                      >
                        <span className="text-slate-300">{hour.day}</span>
                        <span className="text-sky-400 font-semibold">
                          {hour.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Company Details */}
                <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0a1638] via-[#0d1d49] to-[#060c20] border border-sky-500/25 shadow-lg shadow-navy-950/60">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-0.5 sm:mb-1">
                    Pure Care Auto Accessories
                  </h3>
                  <p className="text-sky-300 text-xs sm:text-sm mb-3 sm:mb-4">
                    TR. L.L.C — Clean · Restore · Protect
                  </p>
                  <div className="space-y-1.5 sm:space-y-2">
                    <a
                      href="tel:+971586368849"
                      className="flex items-center gap-2 text-slate-200 text-xs sm:text-sm hover:text-sky-300 transition-colors min-h-[36px] sm:min-h-0"
                    >
                      <FaPhoneAlt className="text-sky-400 shrink-0" />
                      +971 58 636 8849 (Siyad)
                    </a>
                    <a
                      href="tel:+971506553018"
                      className="flex items-center gap-2 text-slate-200 text-xs sm:text-sm hover:text-sky-300 transition-colors min-h-[36px] sm:min-h-0"
                    >
                      <FaPhoneAlt className="text-sky-400 shrink-0" />
                      +971 50 655 3018 (Dayanand)
                    </a>
                    <a
                      href="tel:+971521652323"
                      className="flex items-center gap-2 text-slate-200 text-xs sm:text-sm hover:text-sky-300 transition-colors min-h-[36px] sm:min-h-0"
                    >
                      <FaPhoneAlt className="text-sky-400 shrink-0" />
                      +971 52 165 2323 (Shop)
                    </a>
                    <a
                      href="mailto:purecareautoacs@gmail.com"
                      className="flex items-center gap-2 text-slate-200 text-xs sm:text-sm hover:text-sky-300 transition-colors break-all min-h-[36px] sm:min-h-0"
                    >
                      <FaEnvelope className="text-sky-400 shrink-0" />
                      purecareautoacs@gmail.com
                    </a>
                  </div>
                </div>

                {/* Follow Us */}
                <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-[#0a1638]/85 backdrop-blur-md border border-sky-500/20 shadow-lg shadow-navy-950/60">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-2 sm:gap-3">
                    {socialLinks.map(({ icon: Icon, label, href, color }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#060c20] border border-sky-500/25 flex items-center justify-center text-sky-300 transition-all ${color}`}
                        title={label}
                      >
                        <Icon className="text-sm sm:text-lg" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
