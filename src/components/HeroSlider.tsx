"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaVolumeMute,
  FaVolumeUp,
  FaVideo,
} from "react-icons/fa";

export interface HeroSlide {
  type: "video" | "image";
  src: string;
  alt: string;
  title?: string;
}

const bannerSlides: HeroSlide[] = [
  {
    type: "video",
    src: "/hero-video.mp4",
    alt: "Pure Care Auto Accessories — Premium Detailing & Paint Protection Workshop Reel",
    title: "Craftsmanship & Precision Detailing",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const ambientVideoRef = useRef<HTMLVideoElement>(null);

  const paginate = useCallback((direction: number) => {
    setCurrentSlide(
      (prev) => (prev + direction + bannerSlides.length) % bannerSlides.length
    );
  }, []);

  // Sync and control video playback when slide changes
  useEffect(() => {
    const isVideoSlide = bannerSlides[currentSlide].type === "video";
    if (isVideoSlide) {
      if (mainVideoRef.current) {
        mainVideoRef.current.disablePictureInPicture = true;
        mainVideoRef.current.currentTime = 0;
        mainVideoRef.current.play().catch(() => {});
      }
      if (ambientVideoRef.current) {
        ambientVideoRef.current.disablePictureInPicture = true;
        ambientVideoRef.current.currentTime = 0;
        ambientVideoRef.current.play().catch(() => {});
      }
    } else {
      if (mainVideoRef.current) {
        mainVideoRef.current.pause();
      }
      if (ambientVideoRef.current) {
        ambientVideoRef.current.pause();
      }
    }
  }, [currentSlide]);

  // Handle slide autoplay: only auto-advance if multiple slides exist
  useEffect(() => {
    if (bannerSlides.length <= 1 || isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isHovered, currentSlide]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!mainVideoRef.current) return;
    const nextMuted = !isMuted;
    mainVideoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div className="w-full">
      <div
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden shadow-2xl shadow-navy-950/80 group bg-slate-950 select-none border-y border-sky-500/20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {bannerSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          const isVideo = slide.type === "video";

          return (
            <motion.div
              key={slide.src}
              className="absolute inset-0 w-full h-full"
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 1.02,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              aria-hidden={!isActive}
            >
              {isVideo ? (
                <div className="relative w-full h-full overflow-hidden bg-slate-950">
                  {/* 1. Ambient Background Layer: fills 100% of widescreen with matching motion & lighting so no leftover space exists */}
                  <video
                    ref={ambientVideoRef}
                    src={slide.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    disablePictureInPicture
                    controlsList="nodownload noplaybackrate nopictureinpicture"
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-60 scale-110 pointer-events-none"
                  />

                  {/* Dark gradient overlay for text legibility and contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/30 to-slate-950/50 pointer-events-none" />

                  {/* 2. Primary Foreground Video: Cover mode fills 100% edge-to-edge */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <video
                      ref={mainVideoRef}
                      src={slide.src}
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      preload="auto"
                      disablePictureInPicture
                      controlsList="nodownload noplaybackrate nopictureinpicture"
                      onEnded={() => {
                        if (bannerSlides.length > 1) paginate(1);
                      }}
                      className="w-full h-full object-cover object-[center_30%]"
                    />
                  </div>

                  {/* Bottom-left Title (hidden on small mobile to avoid overlay clutter) */}
                  <div className="hidden sm:block absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 max-w-md pointer-events-none">
                    <p className="text-white/90 text-xs uppercase tracking-wider font-semibold">
                      Pure Care Auto Accessories
                    </p>
                    <h3 className="text-white text-base sm:text-xl font-extrabold drop-shadow-md">
                      {slide.title}
                    </h3>
                  </div>

                  {/* Bottom-right Audio Control */}
                  <div className="absolute bottom-3 sm:bottom-5 right-3 sm:right-6 z-20">
                    <button
                      type="button"
                      onClick={toggleMute}
                      aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/75 hover:bg-black/90 text-white backdrop-blur-md border border-white/25 transition-all text-xs font-semibold shadow-lg hover:border-sky-400/50 hover:shadow-sky-500/25 active:scale-95 cursor-pointer"
                    >
                      {isMuted ? (
                        <>
                          <FaVolumeMute className="text-red-primary text-sm" />
                          <span>Unmute</span>
                        </>
                      ) : (
                        <>
                          <FaVolumeUp className="text-green-400 text-sm" />
                          <span>Sound On</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 1}
                  sizes="100vw"
                  className="object-cover"
                />
              )}
            </motion.div>
          );
        })}

        {/* Previous Button (Only if multiple slides) */}
        {bannerSlides.length > 1 && (
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous slide"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#070f26]/80 hover:bg-sky-500 text-slate-100 hover:text-white border border-sky-500/30 hover:border-sky-400 backdrop-blur-md flex items-center justify-center shadow-lg shadow-navy-950/60 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <FaChevronLeft className="text-sm sm:text-base" />
          </button>
        )}

        {/* Next Button (Only if multiple slides) */}
        {bannerSlides.length > 1 && (
          <button
            onClick={() => paginate(1)}
            aria-label="Next slide"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#070f26]/80 hover:bg-sky-500 text-slate-100 hover:text-white border border-sky-500/30 hover:border-sky-400 backdrop-blur-md flex items-center justify-center shadow-lg shadow-navy-950/60 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <FaChevronRight className="text-sm sm:text-base" />
          </button>
        )}
      </div>

      {/* Pagination Dots with Video Indicator (Only if multiple slides) */}
      {bannerSlides.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          {bannerSlides.map((slide, index) => {
            const isCurrent = index === currentSlide;
            const isVideo = slide.type === "video";

            return (
              <button
                key={slide.src}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}${isVideo ? " (Video)" : ""}`}
                aria-current={isCurrent}
                className={`h-2.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                  isCurrent
                    ? "w-9 bg-gradient-to-r from-sky-400 to-blue-500 shadow-md shadow-sky-500/50"
                    : "w-2.5 bg-blue-900/60 border border-sky-500/30 hover:bg-sky-400/50"
                }`}
              >
                {isVideo && isCurrent && (
                  <FaVideo className="text-[8px] text-white" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
