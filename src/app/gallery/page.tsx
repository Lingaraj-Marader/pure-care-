"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaVideo,
  FaImages,
} from "react-icons/fa";
import { galleryCategories, galleryItems, GalleryItem } from "@/data/galleryData";

const videoList = galleryItems.filter((item) => item.type === "video");

const galleryCategoryStyles: Record<
  string,
  { active: string; inactive: string }
> = {
  All: {
    active:
      "bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 text-white shadow-lg shadow-sky-500/35 border border-sky-400/50",
    inactive:
      "bg-sky-500/10 border border-sky-400/30 text-sky-200 hover:text-white hover:border-sky-400 hover:bg-sky-500/25 shadow-sm",
  },
  Videos: {
    active:
      "bg-gradient-to-r from-red-500 via-rose-600 to-red-700 text-white shadow-lg shadow-red-500/35 border border-red-400/50",
    inactive:
      "bg-red-500/10 border border-red-400/30 text-red-200 hover:text-white hover:border-red-400 hover:bg-red-500/25 shadow-sm",
  },
  "Exterior Detailing": {
    active:
      "bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-700 text-white shadow-lg shadow-blue-500/35 border border-blue-400/50",
    inactive:
      "bg-blue-500/10 border border-blue-400/30 text-blue-200 hover:text-white hover:border-blue-400 hover:bg-blue-500/25 shadow-sm",
  },
  "Interior Detailing": {
    active:
      "bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-700 text-white shadow-lg shadow-emerald-500/35 border border-emerald-400/50",
    inactive:
      "bg-emerald-500/10 border border-emerald-400/30 text-emerald-200 hover:text-white hover:border-emerald-400 hover:bg-emerald-500/25 shadow-sm",
  },
  "Paint Protection Film (PPF)": {
    active:
      "bg-gradient-to-r from-rose-500 via-red-600 to-rose-700 text-white shadow-lg shadow-rose-500/35 border border-rose-400/50",
    inactive:
      "bg-rose-500/10 border border-rose-400/30 text-rose-200 hover:text-white hover:border-rose-400 hover:bg-rose-500/25 shadow-sm",
  },
  "Seat Upholstery": {
    active:
      "bg-gradient-to-r from-purple-500 via-violet-600 to-purple-700 text-white shadow-lg shadow-purple-500/35 border border-purple-400/50",
    inactive:
      "bg-purple-500/10 border border-purple-400/30 text-purple-200 hover:text-white hover:border-purple-400 hover:bg-purple-500/25 shadow-sm",
  },
  "Additional Detailing Services": {
    active:
      "bg-gradient-to-r from-amber-500 via-orange-600 to-amber-700 text-white shadow-lg shadow-amber-500/35 border border-amber-400/50",
    inactive:
      "bg-amber-500/10 border border-amber-400/30 text-amber-200 hover:text-white hover:border-amber-400 hover:bg-amber-500/25 shadow-sm",
  },
};

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState<GalleryItem>(videoList[0]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const theaterVideoRef = useRef<HTMLVideoElement>(null);

  // Filter items based on selectedCategory
  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : selectedCategory === "Videos"
      ? galleryItems.filter((item) => item.type === "video")
      : galleryItems.filter((item) => item.category === selectedCategory);

  const closeLightbox = () => setLightboxIndex(null);

  const paginate = (dir: number) => {
    if (lightboxIndex === null) return;
    const newIdx = lightboxIndex + dir;
    if (newIdx >= 0 && newIdx < filteredItems.length) {
      setLightboxIndex(newIdx);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const handleSelectVideo = (video: GalleryItem) => {
    setActiveVideo(video);
    if (theaterVideoRef.current) {
      theaterVideoRef.current.src = video.src;
      theaterVideoRef.current.play().catch(() => {});
    }
  };

  return (
    <>
      {/* 1. Header Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8 md:pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.15),_transparent_60%)]" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-sm">
              Visual Portfolio
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              Project <span className="gradient-text-blue">Gallery & Videos</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
              Explore our videos and completed vehicle transformations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. DEDICATED FEATURED VIDEO THEATER SECTION */}
      <section className="py-6 sm:py-8 bg-gradient-to-b from-[#070f26] via-[#09173d] to-[#070f26] text-white border-y border-sky-500/20">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center justify-between gap-3 mb-5">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-2">
                  <FaVideo className="text-sky-400 text-xs" /> Video Player
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                  Videos
                </h2>
              </div>
            </div>

            {/* Video Player Display */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-sky-500/30 shadow-2xl shadow-navy-950/90">
              <div className="relative aspect-video w-full bg-black">
                <video
                  ref={theaterVideoRef}
                  key={activeVideo.src}
                  src={activeVideo.src}
                  controls
                  playsInline
                  autoPlay={false}
                  preload="metadata"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Player Info Bar */}
              <div className="p-3.5 sm:p-4 bg-[#060c20]/95 border-t border-sky-500/20 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
                    <FaPlay className="ml-0.5 text-xs" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {activeVideo.title}
                  </h3>
                </div>

                <button
                  onClick={() => {
                    const idx = filteredItems.findIndex(
                      (item) => item.src === activeVideo.src
                    );
                    setLightboxIndex(idx !== -1 ? idx : 0);
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-xs font-semibold text-sky-300 border border-sky-400/30 transition-colors"
                >
                  Fullscreen
                </button>
              </div>
            </div>

            {/* Video Selector Row */}
            <div className="mt-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {videoList.map((video) => {
                  const isCurrent = activeVideo.src === video.src;
                  return (
                    <div
                      key={video.src}
                      onClick={() => handleSelectVideo(video)}
                      className={`group p-2 rounded-xl cursor-pointer transition-all border text-center ${
                        isCurrent
                          ? "bg-sky-500/20 border-sky-400 ring-1 ring-sky-400 shadow-md shadow-sky-500/20"
                          : "bg-[#0a1638]/70 border-sky-500/20 hover:bg-[#102456] hover:border-sky-400/50"
                      }`}
                    >
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-black mb-2 border border-sky-900/40">
                        <video
                          src={video.src}
                          muted
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${
                              isCurrent
                                ? "bg-sky-400 text-slate-950 shadow-lg shadow-sky-400/50"
                                : "bg-white/90 text-slate-900"
                            }`}
                          >
                            <FaPlay className="ml-0.5 text-[9px]" />
                          </div>
                        </div>
                      </div>
                      <p
                        className={`text-xs font-semibold ${
                          isCurrent ? "text-sky-300" : "text-slate-300 group-hover:text-white"
                        }`}
                      >
                        {video.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Filter Pills for All Media */}
      <section className="pt-10 pb-4">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Browse Gallery
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {galleryCategories.map((cat) => {
              const styles = galleryCategoryStyles[cat] || {
                active: "bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 text-white shadow-lg shadow-sky-500/35 border border-sky-400/50",
                inactive: "bg-[#0a1638] border border-sky-500/20 text-slate-300 hover:text-white hover:border-sky-400 hover:bg-sky-500/20 shadow-sm",
              };
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                    isActive ? styles.active : styles.inactive
                  }`}
                >
                  {cat === "Videos" && <FaVideo className="text-xs" />}
                  {cat === "All" && <FaImages className="text-xs" />}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Media Grid */}
      <section className="py-6 sm:py-8 md:py-10">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.src + selectedCategory}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.35, delay: 0.02 * idx }}
                  className="group cursor-pointer"
                  onClick={() => {
                    if (item.type === "video") {
                      handleSelectVideo(item);
                      window.scrollTo({ top: 320, behavior: "smooth" });
                    } else {
                      setLightboxIndex(idx);
                    }
                  }}
                >
                  <div className="relative aspect-video sm:aspect-square rounded-xl sm:rounded-2xl overflow-hidden border border-sky-500/20 bg-[#0a1638] shadow-lg shadow-navy-950/60 hover:shadow-2xl hover:border-sky-400/60 hover:shadow-sky-500/20 transition-all duration-300">
                    {item.type === "video" ? (
                      <>
                        <video
                          src={item.src}
                          muted
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Video overlay with Play badge */}
                        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-sky-500/50 group-hover:scale-110 transition-transform">
                            <FaPlay className="ml-1 text-sm sm:text-base" />
                          </div>
                        </div>

                        {/* Top tag badge */}
                        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-[#070f26]/80 backdrop-blur-sm text-sky-300 text-[11px] font-semibold flex items-center gap-1.5 border border-sky-400/30 shadow">
                          <FaVideo className="text-[10px] text-sky-400" />
                          <span>{item.title}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <Image
                          src={item.src}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#060c20]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {/* Bottom Captions for Photos */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-[#060c20]/95 via-[#060c20]/60 to-transparent">
                          <h3 className="text-white font-bold text-xs sm:text-sm line-clamp-1">
                            {item.title}
                          </h3>
                          <p className="text-sky-400 text-[10px] sm:text-xs">
                            {item.category}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-400 text-sm">
                No items found for this category.
              </p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-3 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-semibold hover:from-sky-400 hover:to-blue-500 transition-colors shadow-lg shadow-sky-500/30"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 5. Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-[#020510]/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-20"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            {/* Prev Button */}
            {lightboxIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(-1);
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-20"
                aria-label="Previous"
              >
                <FaChevronLeft />
              </button>
            )}

            {/* Next Button */}
            {lightboxIndex < filteredItems.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(1);
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-20"
                aria-label="Next"
              >
                <FaChevronRight />
              </button>
            )}

            {/* Modal Player Content */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] rounded-2xl overflow-hidden bg-black flex items-center justify-center shadow-2xl border border-sky-500/20">
                {filteredItems[lightboxIndex].type === "video" ? (
                  <video
                    src={filteredItems[lightboxIndex].src}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full max-h-[75vh] object-contain rounded-2xl"
                  />
                ) : (
                  <Image
                    src={filteredItems[lightboxIndex].src}
                    alt={filteredItems[lightboxIndex].title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                )}
              </div>
              <div className="mt-3 text-center text-white">
                <div className="flex items-center justify-center gap-2 mb-1">
                  {filteredItems[lightboxIndex].type === "video" ? (
                    <span className="px-2 py-0.5 rounded-full bg-red-primary text-white text-[10px] font-semibold flex items-center gap-1 shadow-sm">
                      <FaVideo className="text-[8px]" /> Video
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-sky-500 text-white text-[10px] font-semibold flex items-center gap-1 shadow-sm">
                      <FaImages className="text-[8px]" /> Photo
                    </span>
                  )}
                  <p className="text-xs text-sky-400 font-medium">
                    {filteredItems[lightboxIndex].category}
                  </p>
                </div>
                <h3 className="font-bold text-sm sm:text-base">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {lightboxIndex + 1} of {filteredItems.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
