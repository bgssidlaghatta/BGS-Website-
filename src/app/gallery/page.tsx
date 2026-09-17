"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Reveal, motion, staggerContainer, fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Maximize2, X, RefreshCw } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { GalleryItem } from "@/lib/gallery-store";

const INITIAL_IMAGES: GalleryItem[] = [
  { id: "seed-1", public_id: "seed-1", src: "/images/Hero-section.png", alt: "BGS Public School & PU College Main Building", category: "Campus", createdAt: "2026-01-01" },
  { id: "seed-2", public_id: "seed-2", src: "/images/Hero-section-2.png", alt: "Campus Architecture and Courtyard", category: "Campus", createdAt: "2026-01-01" },
  { id: "seed-3", public_id: "image-clean_fmrqe6", src: "https://res.cloudinary.com/xd8uritd/image/upload/v1789621192/image-clean_fmrqe6.png", alt: "Central Entrance and Tree-Lined Grounds", category: "Campus", createdAt: "2026-01-01" },
  { id: "seed-4", public_id: "seed-4", src: "/images/Kindergarden.png", alt: "Kindergarten Early Childhood Learning", category: "Academic", createdAt: "2026-01-01" },
  { id: "seed-5", public_id: "seed-5", src: "/images/primary_class.png", alt: "Primary Classroom Interactive Learning", category: "Academic", createdAt: "2026-01-01" },
  { id: "seed-high-school", public_id: "ChatGPT_Image_Sep_17_2026_03_09_33_PM_vmr3qc", src: "https://res.cloudinary.com/xd8uritd/image/upload/v1789638235/ChatGPT_Image_Sep_17_2026_03_09_33_PM_vmr3qc.png", alt: "High School Academic Learning & Classroom", category: "Academic", createdAt: "2026-01-01" },
  { id: "seed-college-classroom", public_id: "ChatGPT_Image_Sep_17_2026_04_17_29_PM_bgxgel", src: "https://res.cloudinary.com/xd8uritd/image/upload/v1789642129/ChatGPT_Image_Sep_17_2026_04_17_29_PM_bgxgel.png", alt: "BGS Pre-University College Classrooms & Lectures", category: "Academic", createdAt: "2026-01-01" },
  { id: "seed-6", public_id: "seed-6", src: "/images/computer-lab.png", alt: "Modern Computer Laboratory", category: "Facilities", createdAt: "2026-01-01" },
  { id: "sports-ground", public_id: "Sports_tcb3ce", src: "https://res.cloudinary.com/xd8uritd/image/upload/v1789554940/Sports_tcb3ce.png", alt: "Sports & Athletics Grounds", category: "Activities", createdAt: "2026-01-01" },
  { id: "bgs-school-bus", public_id: "Bus_fn4rdo", src: "https://res.cloudinary.com/xd8uritd/image/upload/v1789554938/Bus_fn4rdo.png", alt: "BGS School Bus Transport Fleet", category: "Facilities", createdAt: "2026-01-01" },
];

import { getCookie, setCookie, COOKIE_KEYS, hasConsentFor } from "@/lib/cookies";

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryItem[]>(INITIAL_IMAGES);
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; category?: string } | null>(null);

  useEffect(() => {
    // Restore last visited gallery category from cookie
    const savedTab = getCookie(COOKIE_KEYS.GALLERY_TAB);
    if (savedTab) {
      setActiveTab(savedTab);
    }

    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        if (data.items && Array.isArray(data.items) && data.items.length > 0) {
          setImages(data.items);
        }
      })
      .catch((err) => console.error("Could not fetch gallery items:", err));
  }, []);

  const handleTabChange = (category: string) => {
    setActiveTab(category);
    if (hasConsentFor("analytics")) {
      setCookie(COOKIE_KEYS.GALLERY_TAB, category, 30);
    }
  };

  const categories = [
    "All",
    ...Array.from(new Set(images.map((img) => img.category))),
  ];

  const filteredImages =
    activeTab === "All"
      ? images
      : images.filter((img) => img.category.toLowerCase() === activeTab.toLowerCase());

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
                  onClick={() => handleTabChange(category)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer",
                    activeTab.toLowerCase() === category.toLowerCase() 
                      ? "bg-brand-maroon text-brand-cream shadow-lg shadow-brand-maroon/20"
                      : "bg-white text-brand-umber/70 hover:bg-brand-saffron/10 hover:text-brand-maroon border border-brand-maroon/10"
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
                  key={image.id || image.src + activeTab}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-2xl transition-all duration-500 bg-brand-maroon/5"
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
                    <p className="text-brand-cream font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-2">
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
              className="absolute top-6 right-6 p-2 bg-brand-cream/10 hover:bg-brand-saffron hover:text-brand-maroon-deep rounded-full text-brand-cream transition-colors z-50 cursor-pointer"
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
                className="object-contain bg-black/40"
                sizes="100vw"
                quality={100}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-maroon-deep/90 to-transparent p-6 pt-20">
                <p className="text-brand-cream font-serif text-2xl mb-1">{selectedImage.alt}</p>
                {selectedImage.category && (
                  <p className="text-brand-saffron text-xs uppercase tracking-widest font-semibold">
                    {selectedImage.category}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
