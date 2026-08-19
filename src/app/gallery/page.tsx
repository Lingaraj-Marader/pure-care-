"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { galleryCategories, galleryItems } from "@/data/galleryData";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const closeLightbox = () => setLightboxIndex(null);

  const paginate = (dir: number) => {
    if (lightboxIndex === null) return;
    const newIdx = lightboxIndex + dir;
    if (newIdx >= 0 && newIdx < filteredItems.length) {
      setLightboxIndex(newIdx);
    }
  };

  return (
    <>
      {/* 1. Header Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(79,195,247,0.12),_transparent_50%)]" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-primary/10 border border-blue-primary/20 text-blue-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Our Work
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 sm:mb-6">
              Project <span className="gradient-text-blue">Gallery</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
              Browse through our portfolio of completed projects. Every vehicle is
              a testament to our commitment to quality and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Filter Pills */}
      <section className="py-4 sm:py-6">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-blue-primary to-blue-dark text-white shadow-lg shadow-blue-primary/20"
                    : "bg-white border border-slate-200 text-slate-600 hover:text-red-primary hover:border-red-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Photos Grid with AnimatePresence */}
      <section className="py-6 sm:py-8 md:py-10">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.src + selectedCategory}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.05 * idx }}
                  className="group cursor-pointer"
                  onClick={() => setLightboxIndex(idx)}
                >
                  <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md hover:border-red-primary/50 transition-all">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-bold text-xs sm:text-sm">
                        {item.title}
                      </h3>
                      <p className="text-blue-primary text-[10px] sm:text-xs">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <p className="text-center text-slate-500 py-16">
              No images found for this category.
            </p>
          )}
        </div>
      </section>

      {/* 4. Fullscreen Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            {lightboxIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(-1);
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                aria-label="Previous"
              >
                <FaChevronLeft />
              </button>
            )}

            {lightboxIndex < filteredItems.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(1);
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                aria-label="Next"
              >
                <FaChevronRight />
              </button>
            )}

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full max-h-[80vh] aspect-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] rounded-2xl overflow-hidden">
                <Image
                  src={filteredItems[lightboxIndex].src}
                  alt={filteredItems[lightboxIndex].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <div className="mt-3 text-center text-white">
                <h3 className="font-bold text-sm sm:text-base">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs text-blue-primary">
                  {filteredItems[lightboxIndex].category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
