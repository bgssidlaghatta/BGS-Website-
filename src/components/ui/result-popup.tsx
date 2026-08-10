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

    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Elegant heavily blurred backdrop */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 transition-all duration-500"
          />

          {/* Borderless Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-6xl z-10 flex flex-col items-center"
          >
            <div className="relative w-full flex flex-col items-center group">
              {/* Floating Close Button - absolute to the image container */}
              <button
                onClick={handleClose}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-20 p-2.5 bg-white text-gray-900 rounded-full hover:bg-brand-saffron hover:text-white transition-all shadow-xl hover:scale-110 duration-300"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* The Banner Image */}
              <div className="relative w-full max-h-[85vh] rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
                <Image
                  src="/images/collegeresult.png"
                  alt="PU College Results"
                  width={2000}
                  height={1000}
                  className="w-full h-auto max-h-[85vh] object-contain bg-white"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                  unoptimized
                />
              </div>
              
              {/* Optional sleek CTA underneath */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 md:mt-8"
              >
                <Link
                  href="/results"
                  onClick={handleClose}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-saffron text-white font-semibold hover:bg-white hover:text-brand-maroon transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300 tracking-wide"
                >
                  View Full Academic Results
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
