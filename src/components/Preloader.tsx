"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    word: "Clean",
    label: "01. Clean",
    color: "text-sky-400",
    bg: "bg-sky-500/15",
    border: "border-sky-400/40",
    glow: "rgba(56, 189, 248, 0.25)",
  },
  {
    word: "Protect",
    label: "02. Protect",
    color: "text-red-primary",
    bg: "bg-red-primary/15",
    border: "border-red-primary/40",
    glow: "rgba(223, 10, 22, 0.25)",
  },
  {
    word: "Restore",
    label: "03. Restore",
    color: "text-cyan-400",
    bg: "bg-cyan-500/15",
    border: "border-cyan-400/40",
    glow: "rgba(6, 182, 212, 0.25)",
  },
];

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setCurrentStep(1), 1200);
    const t2 = setTimeout(() => setCurrentStep(2), 2400);
    const t3 = setTimeout(() => setLoading(false), 3800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  const active = steps[currentStep] ?? steps[0];

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#070f26] flex flex-col items-center justify-center pointer-events-none select-none"
        >
          {/* Dynamic Ambient Background Glow based on current step */}
          <motion.div
            key={active.word + "-glow"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div
              className="w-80 sm:w-96 md:w-[460px] h-80 sm:h-96 md:h-[460px] rounded-full blur-[130px] transition-all duration-700"
              style={{ backgroundColor: active.glow }}
            />
          </motion.div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-lg w-full">
            {/* Pure Care Official Logo */}
            <motion.div
              initial={{ opacity: 0, y: -25, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6 sm:mb-8"
            >
              <Image
                src="/purecare-logo.png"
                alt="Pure Care Auto Accessories"
                width={1469}
                height={559}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain drop-shadow-[0_4px_20px_rgba(24,142,215,0.4)]"
                priority
              />
            </motion.div>

            {/* Serial Animated Words: Clean -> Protect -> Restore */}
            <div className="h-20 sm:h-24 md:h-28 flex items-center justify-center w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.word}
                  initial={{ opacity: 0, y: 40, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -35, scale: 0.9 }}
                  transition={{
                    duration: 0.45,
                    type: "spring",
                    stiffness: 220,
                    damping: 22,
                  }}
                  className={`text-4xl sm:text-6xl md:text-7xl font-black tracking-tight ${active.color} drop-shadow-md`}
                >
                  {active.word}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Series Steps Progression Indicators */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
              {steps.map((s, idx) => {
                const isCurrent = idx === currentStep;
                const isPast = idx < currentStep;

                return (
                  <motion.div
                    key={s.word}
                    animate={{
                      scale: isCurrent ? 1.06 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 border ${
                      isCurrent
                        ? `${s.bg} ${s.color} ${s.border} shadow-lg shadow-sky-500/20`
                        : isPast
                        ? "bg-[#0d1c44] text-slate-300 border-sky-500/20"
                        : "bg-[#07112c] text-slate-500 border-sky-900/30"
                    }`}
                  >
                    {s.label}
                  </motion.div>
                );
              })}
            </div>

            {/* Animated Progress Bar */}
            <div className="mt-8 sm:mt-10 w-48 sm:w-60 h-1.5 bg-[#0d1d49] rounded-full overflow-hidden relative border border-sky-500/20">
              <motion.div
                initial={{ width: "0%" }}
                animate={{
                  width:
                    currentStep === 0
                      ? "33%"
                      : currentStep === 1
                      ? "66%"
                      : "100%",
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.8)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
