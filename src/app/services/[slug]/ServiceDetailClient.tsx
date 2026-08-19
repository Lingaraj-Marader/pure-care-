"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import FadeIn from "@/components/FadeIn";
import { getCategoryByKey, getServiceBySlug } from "@/data/servicesData";

const makeWhatsAppUrl = (title: string) =>
  `https://wa.me/971586368849?text=${encodeURIComponent(
    `Hi Pure Care! I'm interested in your *${title}*.\n\nPlease share the available time slots and a quote.\n\nThank you!`
  )}`;

interface ServiceDetailClientProps {
  slug: string;
}

export default function ServiceDetailClient({ slug }: ServiceDetailClientProps) {
  const category = getCategoryByKey(slug);
  const service = category ? undefined : getServiceBySlug(slug);

  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // CASE 1: Category Page (e.g., /services/exterior or /services/interior)
  if (category) {
    return (
      <>
        {/* Banner Section */}
        <section className="pt-20 sm:pt-24 pb-2 sm:pb-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden shadow-lg shadow-slate-300/40"
          >
            <Image
              src={category.image}
              alt={category.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 md:p-12">
              <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 w-full">
                <span className="block text-white/80 text-[10px] sm:text-sm font-semibold tracking-widest uppercase mb-1 sm:mb-2">
                  Pure Care Services
                </span>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  {category.title}
                </h1>
                <p className="text-white/90 text-xs sm:text-base md:text-lg mt-1 sm:mt-2 max-w-2xl">
                  {category.tagline}
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Intro & Book WhatsApp */}
        <section className="py-6 sm:py-8">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6 flex-wrap">
              <Link
                href="/services"
                className="hover:text-red-primary transition-colors"
              >
                Services
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-700 font-medium">
                {category.title}
              </span>
            </nav>

            <FadeIn>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-6 sm:mb-8">
                {category.intro}
              </p>
              <a
                href={makeWhatsAppUrl(category.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-green-500/30 transition-all text-sm sm:text-base"
              >
                <FaWhatsapp className="text-lg" /> Book {category.title}
              </a>
            </FadeIn>
          </div>
        </section>

        {/* All Subservices in this category */}
        <section className="pb-8 sm:pb-12">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <div className="section-divider mb-8 sm:mb-10" />
            <FadeIn className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
                All {category.title} Services
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {category.subServices.map((sub) => {
                const cardInner = sub.image ? (
                  <>
                    <div className="relative h-40 sm:h-48 w-full overflow-hidden">
                      <Image
                        src={sub.image}
                        alt={sub.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div
                        className={`absolute top-3 left-3 w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-md`}
                      >
                        <sub.icon className="text-sm sm:text-base text-white" />
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h3 className="text-slate-900 font-bold text-sm sm:text-base mb-1 sm:mb-1.5 leading-snug group-hover:text-red-primary transition-colors">
                        {sub.name}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {sub.blurb}
                      </p>
                      {sub.slug && (
                        <span className="mt-2.5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-primary group-hover:text-red-primary transition-colors">
                          View details <FaArrowRight className="text-[10px]" />
                        </span>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="p-4 sm:p-5">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-2.5 sm:mb-3`}
                    >
                      <sub.icon className="text-sm sm:text-base text-white" />
                    </div>
                    <h3 className="text-slate-900 font-bold text-sm sm:text-base mb-1 sm:mb-1.5 leading-snug">
                      {sub.name}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {sub.blurb}
                    </p>
                  </div>
                );

                const cardClass = `h-full rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm ${category.hoverBorder} hover:shadow-md transition-all group overflow-hidden ${
                  sub.slug ? "cursor-pointer" : ""
                }`;

                return sub.slug ? (
                  <motion.div
                    key={sub.name}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={cardClass}
                  >
                    <Link
                      href={`/services/${sub.slug}`}
                      className="block h-full"
                    >
                      {cardInner}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key={sub.name}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={cardClass}
                  >
                    {cardInner}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-8 sm:py-10 md:py-14">
          <div className="section-divider mb-8 sm:mb-10" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-primary to-blue-dark hover:from-red-primary hover:to-red-dark text-white font-bold rounded-full text-sm sm:text-base transition-all justify-center"
                >
                  <FaArrowLeft /> All Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 text-slate-900 font-bold rounded-full text-sm sm:text-base hover:border-red-primary hover:text-red-primary hover:bg-red-primary/5 transition-all justify-center"
                >
                  Contact Us <FaArrowRight />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </>
    );
  }

  // CASE 2: Subservice Page (e.g. /services/machine-polishing-paint-correction)
  if (service) {
    const gallery = service.gallery ?? [];

    return (
      <>
        {/* Banner Section */}
        {service.banner && (
          <section className="pt-20 sm:pt-24 pb-2 sm:pb-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full overflow-hidden shadow-lg shadow-slate-300/40"
            >
              <Image
                src={service.banner}
                alt={service.name}
                width={service.bannerW ?? 1600}
                height={service.bannerH ?? 900}
                className="w-full h-auto"
                priority
                sizes="100vw"
              />
            </motion.div>
          </section>
        )}

        {/* Content Section */}
        <section className="py-6 sm:py-8 md:py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-5 sm:mb-7 flex-wrap">
              <Link
                href="/services"
                className="hover:text-red-primary transition-colors"
              >
                Services
              </Link>
              <span className="text-slate-300">/</span>
              <Link
                href={`/services/${service.categoryKey}`}
                className="hover:text-red-primary transition-colors"
              >
                {service.categoryTitle}
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-700 font-medium">{service.name}</span>
            </nav>

            <FadeIn>
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shrink-0`}
                >
                  <service.icon className="text-xl sm:text-2xl text-white" />
                </div>
                <div>
                  <Link
                    href={`/services/${service.categoryKey}`}
                    className="text-xs sm:text-sm font-semibold text-blue-primary hover:text-red-primary transition-colors"
                  >
                    {service.categoryTitle}
                  </Link>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                    {service.name}
                  </h1>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                {service.description}
              </p>

              {service.features && service.features.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                  {service.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-2.5 rounded-xl bg-white border border-slate-200 shadow-sm px-3.5 py-2.5 sm:py-3"
                    >
                      <FaCheckCircle className="text-blue-primary shrink-0 text-sm" />
                      <span className="text-slate-700 text-xs sm:text-sm font-medium">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <a
                href={makeWhatsAppUrl(service.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-green-500/30 transition-all text-sm sm:text-base"
              >
                <FaWhatsapp className="text-lg" /> Book {service.name}
              </a>
            </FadeIn>
          </div>
        </section>

        {/* Gallery Section */}
        {gallery.length > 0 && (
          <section className="py-6 sm:py-8 md:py-12">
            <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
              <div className="section-divider mb-8 sm:mb-10" />
              <FadeIn className="text-center mb-6 sm:mb-8">
                <span className="text-blue-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
                  Gallery
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  {service.name} in{" "}
                  <span className="gradient-text-blue">Action</span>
                </h2>
              </FadeIn>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {gallery.map((photo, idx) => (
                  <motion.button
                    key={photo}
                    onClick={() => setActivePhotoIndex(idx)}
                    whileHover={{ y: -4 }}
                    className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:border-red-primary/50 hover:shadow-md transition-all group"
                  >
                    <Image
                      src={photo}
                      alt={`${service.name} — photo ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* More in Category CTA */}
        <section className="py-8 sm:py-10 md:py-14">
          <div className="section-divider mb-8 sm:mb-10" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
                More {service.categoryTitle}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mb-6 px-2">
                Explore the full range of {service.categoryTitle.toLowerCase()} at
                Pure Care.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  href={`/services/${service.categoryKey}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-primary to-blue-dark hover:from-red-primary hover:to-red-dark text-white font-bold rounded-full text-sm sm:text-base transition-all justify-center"
                >
                  <FaArrowLeft /> {service.categoryTitle}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 text-slate-900 font-bold rounded-full text-sm sm:text-base hover:border-red-primary hover:text-red-primary hover:bg-red-primary/5 transition-all justify-center"
                >
                  Contact Us <FaArrowRight />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activePhotoIndex !== null && gallery[activePhotoIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setActivePhotoIndex(null)}
            >
              <button
                onClick={() => setActivePhotoIndex(null)}
                aria-label="Close"
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              >
                <FaTimes />
              </button>

              {activePhotoIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIndex(activePhotoIndex - 1);
                  }}
                  aria-label="Previous"
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-10"
                >
                  <FaChevronLeft />
                </button>
              )}

              {activePhotoIndex < gallery.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIndex(activePhotoIndex + 1);
                  }}
                  aria-label="Next"
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-10"
                >
                  <FaChevronRight />
                </button>
              )}

              <motion.div
                key={activePhotoIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-5xl h-[60vh] sm:h-[75vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={gallery[activePhotoIndex]}
                  alt={`${service.name} — photo ${activePhotoIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // FALLBACK: Not Found
  return (
    <section className="pt-28 sm:pt-32 pb-20 min-h-[60vh] flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
          Service not found
        </h1>
        <p className="text-slate-600 mb-6">
          The service you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-primary to-blue-dark hover:from-red-primary hover:to-red-dark text-white font-bold rounded-full transition-all"
        >
          <FaArrowLeft /> Back to Services
        </Link>
      </div>
    </section>
  );
}
