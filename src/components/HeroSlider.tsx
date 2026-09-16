"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
  FaVideo,
  FaExpand,
  FaCompress,
} from "react-icons/fa";

export interface HeroSlide {
  type: "video" | "image";
  src: string;
  alt: string;
  badge?: string;
  title?: string;
}

const bannerSlides: HeroSlide[] = [
  {
    type: "video",
    src: "/hero-video.mp4",
    alt: "Pure Care Workshop in Action — Real Detailing & Paint Protection Reel",
    badge: "Workshop In Action",
    title: "Craftsmanship & Precision Detailing",
  },
  {
    type: "image",
    src: "/banner/banner-image.png",
    alt: "Pure Care — Your Car. Our Obsession. Premium ceramic coating & window tinting in the Middle East climate",
  },
  {
    type: "image",
    src: "/banner/banner-image2.png",
    alt: "Pure Care — Legendary Finish. Exceptional Service. Advanced paint protection",
  },
  {
    type: "image",
    src: "/banner/banner-image3.png",
    alt: "Pure Care — Mastering Every Detail. Diamond-infused ceramic paint protection",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [fitMode, setFitMode] = useState<"cover" | "ambient">("cover");

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
        mainVideoRef.current.currentTime = 0;
        mainVideoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
      if (ambientVideoRef.current) {
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

  // Handle slide autoplay: only auto-advance on image slides so the video isn't cut off
  useEffect(() => {
    if (isHovered) return;
    const isVideoSlide = bannerSlides[currentSlide].type === "video";
    if (isVideoSlide && isPlaying) {
      // Allow the video to play without premature interruption
      return;
    }
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isHovered, currentSlide, isPlaying]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!mainVideoRef.current) return;
    if (isPlaying) {
      mainVideoRef.current.pause();
      ambientVideoRef.current?.pause();
      setIsPlaying(false);
    } else {
      mainVideoRef.current.play().catch(() => {});
      ambientVideoRef.current?.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!mainVideoRef.current) return;
    const nextMuted = !isMuted;
    mainVideoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const toggleFitMode = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFitMode((prev) => (prev === "cover" ? "ambient" : "cover"));
  };

  return (
    <div className="w-full">
      <div
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden shadow-lg shadow-slate-300/40 group bg-slate-950 select-none"
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
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-60 scale-110 pointer-events-none"
                  />

                  {/* Dark gradient overlay for text legibility and contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/30 to-slate-950/50 pointer-events-none" />

                  {/* 2. Primary Foreground Video: Cover mode fills 100% edge-to-edge; Ambient mode preserves full reel height */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <video
                      ref={mainVideoRef}
                      src={slide.src}
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      preload="auto"
                      onEnded={() => paginate(1)}
                      className={`w-full h-full transition-all duration-500 ${
                        fitMode === "cover"
                          ? "object-cover object-[center_30%]"
                          : "object-contain max-h-full drop-shadow-2xl"
                      }`}
                    />
                  </div>

                  {/* Top-left Badge */}
                  <div className="absolute top-3 sm:top-5 left-3 sm:left-6 z-20 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-semibold shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-red-primary animate-ping" />
                      <span className="w-2 h-2 rounded-full bg-red-primary absolute" />
                      <span className="ml-2">{slide.badge ?? "Workshop Reel"}</span>
                    </span>
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

                  {/* Bottom-right Interactive Controls */}
                  <div className="absolute bottom-3 sm:bottom-5 right-3 sm:right-6 z-20 flex items-center gap-2">
                    {/* Audio Toggle */}
                    <button
                      type="button"
                      onClick={toggleMute}
                      aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/25 transition-all text-xs font-semibold shadow-lg active:scale-95"
                    >
                      {isMuted ? (
                        <>
                          <FaVolumeMute className="text-red-primary text-sm" />
                          <span className="hidden sm:inline">Unmute</span>
                        </>
                      ) : (
                        <>
                          <FaVolumeUp className="text-green-400 text-sm" />
                          <span className="hidden sm:inline">Sound On</span>
                        </>
                      )}
                    </button>

                    {/* Play/Pause Toggle */}
                    <button
                      type="button"
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                      className="w-8 h-8 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all text-xs shadow-lg active:scale-95"
                    >
                      {isPlaying ? (
                        <FaPause className="text-[11px]" />
                      ) : (
                        <FaPlay className="text-[11px] ml-0.5" />
                      )}
                    </button>

                    {/* Mode Toggle: Cover vs Fit Reel */}
                    <button
                      type="button"
                      onClick={toggleFitMode}
                      aria-label={
                        fitMode === "cover"
                          ? "Switch to Fit Reel mode"
                          : "Switch to Full Cover mode"
                      }
                      className="hidden md:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/25 transition-all text-[11px] font-medium shadow-lg active:scale-95"
                      title={fitMode === "cover" ? "Fit Reel View" : "Full Cover View"}
                    >
                      {fitMode === "cover" ? (
                        <>
                          <FaCompress className="text-[10px]" />
                          <span>Fit Reel</span>
                        </>
                      ) : (
                        <>
                          <FaExpand className="text-[10px]" />
                          <span>Full Cover</span>
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

        {/* Previous Button */}
        <button
          onClick={() => paginate(-1)}
          aria-label="Previous slide"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#070f26]/80 hover:bg-sky-500 text-slate-100 hover:text-white border border-sky-500/30 hover:border-sky-400 backdrop-blur-md flex items-center justify-center shadow-lg shadow-navy-950/60 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 active:scale-95"
        >
          <FaChevronLeft className="text-sm sm:text-base" />
        </button>

        {/* Next Button */}
        <button
          onClick={() => paginate(1)}
          aria-label="Next slide"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#070f26]/80 hover:bg-sky-500 text-slate-100 hover:text-white border border-sky-500/30 hover:border-sky-400 backdrop-blur-md flex items-center justify-center shadow-lg shadow-navy-950/60 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 active:scale-95"
        >
          <FaChevronRight className="text-sm sm:text-base" />
        </button>
      </div>

      {/* Pagination Dots with Video Indicator */}
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
    </div>
  );
}
