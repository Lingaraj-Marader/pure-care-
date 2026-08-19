"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import FadeIn from "@/components/FadeIn";
import { productsData } from "@/data/productsData";

export default function ProductsPage() {
  return (
    <>
      {/* 1. Header Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(239,68,68,0.1),_transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-primary/10 border border-red-primary/20 text-red-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Our Products
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 sm:mb-6">
              Premium <span className="gradient-text-red">Products</span> We Use
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
              We partner with the world&apos;s leading automotive brands to ensure
              only the best products touch your vehicle. Quality you can trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Products Categories List */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20">
          {productsData.map((category, catIdx) => {
            const isAlternate = catIdx % 2 === 1;

            return (
              <FadeIn key={category.title}>
                {/* Category Header with Image and Description */}
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center mb-6 sm:mb-8">
                  <div className={isAlternate ? "lg:order-2" : ""}>
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-md">
                      <Image
                        src={category.image}
                        alt={category.title}
                        width={928}
                        height={760}
                        className="w-full h-auto"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  <div className={isAlternate ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div
                        className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shrink-0`}
                      >
                        <category.icon className="text-lg sm:text-2xl text-white" />
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
                        {category.title}
                      </h2>
                    </div>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  {category.products.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                      whileHover={{ y: -4 }}
                      className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-red-primary/50 hover:shadow-md transition-all group"
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0 mb-2 sm:mb-3">
                        <h3 className="text-slate-900 font-bold text-sm sm:text-base md:text-lg group-hover:text-red-primary transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-blue-primary text-xs sm:text-sm font-medium shrink-0">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm mb-3 sm:mb-4">
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-600 text-[10px] sm:text-xs" />
                        <span className="text-slate-500 text-[10px] sm:text-xs">
                          Available at Pure Care
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </>
  );
}
