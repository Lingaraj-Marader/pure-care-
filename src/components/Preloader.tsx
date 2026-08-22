"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
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

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-48 h-48 bg-red-primary/8 rounded-full blur-[80px]" />

          <div className="relative w-48 h-48 sm:w-60 sm:h-60 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-[3px] border-transparent"
              style={{
                borderTopColor: "#188ed7",
                borderRightColor: "rgba(24, 142, 215, 0.3)",
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 sm:inset-5 rounded-full border-[3px] border-transparent"
              style={{
                borderBottomColor: "#df0a16",
                borderLeftColor: "rgba(223, 10, 22, 0.3)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              >
                <Image
                  src="/purecare-logo.png"
                  alt="Pure Care"
                  width={1469}
                  height={559}
                  className="w-32 sm:w-44 h-auto object-contain"
                  priority
                />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 w-40 sm:w-48 h-0.5 bg-slate-200 rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-1/2 bg-gradient-to-r from-transparent via-blue-primary to-transparent rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
