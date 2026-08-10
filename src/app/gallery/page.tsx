"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal, motion, staggerContainer, fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Maximize2, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const galleryImages = [
  { src: "/images/campus-hero.png", alt: "BGS Campus Aerial View", category: "Campus" },
  { src: "/images/classroom.png", alt: "Interactive Classroom Session", category: "Academic" },
  { src: "/images/computer-lab.png", alt: "Modern Computer Laboratory", category: "Facilities" },
  { src: "/images/science-lab.png", alt: "Advanced Science Experiments", category: "Facilities" },
  { src: "/images/library.png", alt: "Extensive Library Collection", category: "Facilities" },
  { src: "/images/sports-ground.png", alt: "Sports and Athletics", category: "Activities" },
];

const categories = ["All", "Campus", "Academic", "Facilities", "Activities"];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImage, setSelectedImage] = useState<{src: string; alt: string} | null>(null);

  const filteredImages = activeTab === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-brand-maroon-deep">
        <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-maroon-deep to-transparent" />
        
        <div className="relative z-10 px-6 text-center max-w-4xl mx-auto pt-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
              Visual Journey
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-serif font-bold text-brand-cream mb-6">
              Our Campus in Pictures
            </motion.h1>
            <motion.p variants={fadeUp} className="text-brand-cream/70 text-lg max-w-2xl mx-auto">
              Explore the vibrant life, state-of-the-art facilities, and academic excellence at BGS Public School.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════ GALLERY GRID ════════════════════ */}
      <section className="py-20 md:py-28 bg-brand-cream paper-texture min-h-screen">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          
          {/* Tabs */}
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                    activeTab === category 
                      ? "bg-brand-maroon text-brand-cream shadow-lg shadow-brand-maroon/20"
                      : "bg-white text-brand-umber/70 hover:bg-brand-saffron/10 hover:text-white border border-brand-maroon/10"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, idx) => (
                <motion.div
                  key={image.src + activeTab}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 bg-brand-maroon/5"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon-deep/90 via-brand-maroon-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <Maximize2 className="w-6 h-6 text-brand-saffron mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                    <p className="text-brand-cream font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {image.alt}
                    </p>
                    <p className="text-brand-saffron/80 text-sm uppercase tracking-wider font-semibold mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                      {image.category}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-20 text-brand-umber/50">
              No images found for this category.
            </div>
          )}
        </div>
      </section>

      {/* ════════════════════ LIGHTBOX ════════════════════ */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-maroon-deep/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-brand-cream/10 hover:bg-brand-saffron hover:text-white rounded-full text-brand-cream transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-6xl max-h-[85vh] aspect-video rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain bg-black/20"
                sizes="100vw"
                quality={100}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-maroon-deep/90 to-transparent p-6 pt-20">
                <p className="text-brand-cream font-serif text-2xl mb-1">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
