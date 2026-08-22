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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(79,195,247,0.15),_transparent_55%)]" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-primary/10 border border-blue-primary/20 text-blue-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Visual Portfolio
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 sm:mb-6">
              Project <span className="gradient-text-blue">Gallery & Videos</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
              Explore our videos and completed vehicle transformations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. DEDICATED FEATURED VIDEO THEATER SECTION */}
      <section className="py-6 sm:py-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-y border-slate-800">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center justify-between gap-3 mb-5">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-primary/20 border border-red-primary/40 text-red-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <FaVideo className="text-red-primary text-xs" /> Video Player
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                  Videos
                </h2>
              </div>
            </div>

            {/* Video Player Display */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-slate-800 shadow-2xl">
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
              <div className="p-3.5 sm:p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-primary/20 border border-red-primary/30 flex items-center justify-center text-red-primary shrink-0">
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
                  className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
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
                          ? "bg-red-primary/15 border-red-primary ring-1 ring-red-primary"
                          : "bg-slate-800/60 border-slate-700/60 hover:bg-slate-800 hover:border-slate-600"
                      }`}
                    >
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-black mb-2 border border-slate-700">
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
                                ? "bg-red-primary text-white shadow-lg shadow-red-primary/50"
                                : "bg-white/90 text-slate-900"
                            }`}
                          >
                            <FaPlay className="ml-0.5 text-[9px]" />
                          </div>
                        </div>
                      </div>
                      <p
                        className={`text-xs font-semibold ${
                          isCurrent ? "text-red-400" : "text-slate-300 group-hover:text-white"
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Browse Gallery
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-blue-primary to-blue-dark text-white shadow-lg shadow-blue-primary/20"
                    : "bg-white border border-slate-200 text-slate-600 hover:text-red-primary hover:border-red-primary/50 shadow-sm"
                }`}
              >
                {cat === "Videos" && <FaVideo className="text-xs" />}
                {cat === "All" && <FaImages className="text-xs" />}
                <span>{cat}</span>
              </button>
            ))}
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
                  <div className="relative aspect-video sm:aspect-square rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shadow-sm hover:shadow-xl hover:border-red-primary/60 transition-all duration-300">
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
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-primary/95 text-white flex items-center justify-center shadow-lg shadow-red-primary/50 group-hover:scale-110 transition-transform">
                            <FaPlay className="ml-1 text-sm sm:text-base" />
                          </div>
                        </div>

                        {/* Top tag badge */}
                        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white text-[11px] font-semibold flex items-center gap-1.5 border border-white/20 shadow">
                          <FaVideo className="text-[10px] text-red-400" />
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {/* Bottom Captions for Photos */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/85 via-black/50 to-transparent">
                          <h3 className="text-white font-bold text-xs sm:text-sm line-clamp-1">
                            {item.title}
                          </h3>
                          <p className="text-blue-300 text-[10px] sm:text-xs">
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
              <p className="text-slate-500 text-sm">
                No items found for this category.
              </p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-3 px-4 py-2 rounded-full bg-blue-primary text-white text-xs font-semibold hover:bg-blue-dark transition-colors"
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
            className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
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
              <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] rounded-2xl overflow-hidden bg-black flex items-center justify-center shadow-2xl">
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
                    <span className="px-2 py-0.5 rounded-full bg-red-primary text-white text-[10px] font-semibold flex items-center gap-1">
                      <FaVideo className="text-[8px]" /> Video
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-blue-primary text-white text-[10px] font-semibold flex items-center gap-1">
                      <FaImages className="text-[8px]" /> Photo
                    </span>
                  )}
                  <p className="text-xs text-blue-300">
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
