"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

export function ResultPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // For testing purposes, we're showing it every time the page loads.
    // We can add the sessionStorage check back later if you want it to show only once.
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500); // reduced delay to half a second
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-brand-maroon-deep/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-brand-cream rounded-2xl shadow-2xl overflow-hidden border-2 border-brand-maroon/20 z-10 flex flex-col max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 p-2 bg-brand-maroon text-brand-cream rounded-full hover:bg-brand-saffron hover:text-brand-maroon transition-all shadow-lg border border-transparent hover:border-brand-maroon/20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="relative w-full bg-white flex justify-center">
                <Image
                  src="/images/collegeresult.png"
                  alt="PU College Results"
                  width={2000}
                  height={1000}
                  className="w-full h-auto object-contain max-h-[60vh]"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  unoptimized
                />
              </div>
              <div className="p-6 md:p-8 bg-brand-cream text-center border-t border-brand-maroon/10">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-maroon mb-3">
                  Hearty Congratulations to our Achievers!
                </h3>
                <p className="text-brand-umber/70 mb-6 max-w-2xl mx-auto text-sm md:text-base">
                  We are incredibly proud of our students' outstanding performance in the Board Examinations. Hard work, dedication, and the right environment make all the difference.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/results"
                    onClick={handleClose}
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-brand-maroon text-brand-cream font-semibold hover:bg-brand-saffron hover:text-brand-maroon transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    View Full Results
                  </Link>
                  <button
                    onClick={handleClose}
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-transparent border border-brand-maroon/20 text-brand-maroon font-semibold hover:bg-brand-maroon/5 transition-all"
                  >
                    Continue to Site
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
