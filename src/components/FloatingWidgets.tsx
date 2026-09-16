"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingWidgets() {
  const handleOpenConsultation = () => {
    if (typeof window !== "undefined" && window.openConsultationModal) {
      window.openConsultationModal();
    }
  };

  return (
    <>
      {/* Desktop Vertical Tab */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="hidden md:block fixed top-1/2 right-0 -translate-y-1/2 z-50 cursor-pointer"
        onClick={handleOpenConsultation}
      >
        <div className="bg-gradient-to-b from-sky-500 via-blue-600 to-navy-800 hover:from-sky-400 hover:to-blue-600 text-white py-6 px-3.5 shadow-xl shadow-sky-500/25 rounded-l-xl border-l border-y border-sky-400/40 hover:shadow-2xl hover:shadow-sky-400/40 transition-all duration-300 backdrop-blur-md">
          <div
            className="font-extrabold text-xs tracking-widest uppercase drop-shadow-sm"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            Free Consultation
          </div>
        </div>
      </motion.div>

      {/* Mobile Vertical Tab */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="md:hidden fixed top-1/2 right-0 -translate-y-1/2 z-40 cursor-pointer"
        onClick={handleOpenConsultation}
      >
        <div className="bg-gradient-to-b from-sky-500 via-blue-600 to-navy-800 hover:from-sky-400 hover:to-blue-600 text-white py-4 px-2.5 shadow-xl shadow-sky-500/25 rounded-l-lg border-l border-y border-sky-400/40">
          <div
            className="font-bold text-[10px] tracking-wider uppercase drop-shadow-sm"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            Free Consultation
          </div>
        </div>
      </motion.div>

      {/* Floating Bottom Action Buttons (Call & WhatsApp) */}
      <div className="fixed bottom-4 right-2 sm:right-4 z-50 flex flex-col gap-3 sm:gap-4">
        <motion.a
          href="tel:+971586368849"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-sky-500 to-blue-700 hover:from-sky-400 hover:to-blue-600 rounded-full flex items-center justify-center shadow-xl shadow-sky-500/40 hover:shadow-2xl hover:shadow-sky-400/50 transition-all duration-300 border border-sky-400/30"
          title="Call us"
          aria-label="Call us"
        >
          <FaPhoneAlt className="text-white text-lg sm:text-xl drop-shadow-md" />
        </motion.a>

        <motion.a
          href="https://wa.me/971586368849?text=Hello!%20I%20want%20to%20know%20more%20about%20your%20services.%20Please%20call%20me%20back.%20Thanks"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/45 transition-all duration-300 border border-green-400/30"
          title="Chat on WhatsApp"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-white text-xl sm:text-2xl drop-shadow-md" />
        </motion.a>
      </div>
    </>
  );
}
