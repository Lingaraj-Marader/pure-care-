"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const bannerSlides = [
  {
    src: "/banner/banner-image.png",
    alt: "Pure Care — Your Car. Our Obsession. Premium ceramic coating & window tinting in the Middle East climate",
  },
  {
    src: "/banner/banner-image2.png",
    alt: "Pure Care — Legendary Finish. Exceptional Service. Advanced paint protection",
  },
  {
    src: "/banner/banner-image3.png",
    alt: "Pure Care — Mastering Every Detail. Diamond-infused ceramic paint protection",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const paginate = useCallback((direction: number) => {
    setCurrentSlide(
      (prev) => (prev + direction + bannerSlides.length) % bannerSlides.length
    );
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <div className="w-full">
      <div
        className="relative w-full aspect-[16/9] overflow-hidden shadow-lg shadow-slate-300/40 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {bannerSlides.map((slide, index) => (
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            aria-hidden={index !== currentSlide}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        ))}

        {/* Previous Button */}
        <button
          onClick={() => paginate(-1)}
          aria-label="Previous slide"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/70 hover:bg-white text-slate-900 hover:text-red-primary backdrop-blur flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300"
        >
          <FaChevronLeft className="text-sm sm:text-base" />
        </button>

        {/* Next Button */}
        <button
          onClick={() => paginate(1)}
          aria-label="Next slide"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/70 hover:bg-white text-slate-900 hover:text-red-primary backdrop-blur flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300"
        >
          <FaChevronRight className="text-sm sm:text-base" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5">
        {bannerSlides.map((slide, index) => (
          <button
            key={slide.src}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-7 bg-red-primary"
                : "w-2 bg-slate-300 hover:bg-red-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
