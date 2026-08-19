"use client";

import { motion } from "framer-motion";
import { FaTag, FaClock } from "react-icons/fa";
import FadeIn from "@/components/FadeIn";
import { blogPosts } from "@/data/blogData";

export default function BlogPage() {
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
              Blog & Tips
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 sm:mb-6">
              Pure Care <span className="gradient-text-blue">Insights</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
              Expert tips, guides, and insights to help you make the best
              decisions for your vehicle&apos;s care and protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Blog Cards Grid */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {blogPosts.map((post, idx) => (
              <FadeIn key={post.title} delay={0.08 * idx}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="h-full flex flex-col rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-red-primary/50 hover:shadow-md transition-all overflow-hidden group"
                >
                  <div
                    className={`h-36 sm:h-44 md:h-48 bg-gradient-to-br ${post.color} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/30" />
                    <h3 className="relative z-10 text-white text-sm sm:text-base md:text-xl font-bold px-4 sm:px-6 text-center leading-snug sm:leading-tight">
                      {post.title}
                    </h3>
                  </div>
                  <div className="flex-1 p-4 sm:p-5 md:p-6 flex flex-col">
                    <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3 text-[10px] sm:text-xs">
                      <span className="flex items-center gap-1 text-blue-primary">
                        <FaTag /> {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <FaClock /> {post.readTime}
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed flex-1 mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                      {post.excerpt}
                    </p>
                    <span className="text-slate-400 text-[10px] sm:text-xs">
                      {post.date}
                    </span>
                  </div>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Articles Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="section-divider mb-6 sm:mb-8 md:mb-10" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <FadeIn className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Featured <span className="gradient-text-blue">Articles</span>
            </h2>
          </FadeIn>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {blogPosts.slice(0, 3).map((article, idx) => (
              <FadeIn key={article.title}>
                <article className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4 text-xs sm:text-sm">
                    <span
                      className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r ${article.color} text-white text-[10px] sm:text-xs font-medium`}
                    >
                      {article.category}
                    </span>
                    <span className="text-slate-500 text-[10px] sm:text-xs">
                      {article.date}
                    </span>
                    <span className="text-slate-500 text-[10px] sm:text-xs">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 mb-3 sm:mb-4">
                    {article.title}
                  </h3>

                  <div className="space-y-2 sm:space-y-3">
                    {article.content.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-slate-600 text-xs sm:text-sm leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>

                {idx < 2 && (
                  <div className="section-divider mt-8 sm:mt-12 md:mt-16" />
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
