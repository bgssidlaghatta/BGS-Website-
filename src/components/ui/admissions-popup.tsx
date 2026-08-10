"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function AdmissionsPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 2 minutes = 120,000 milliseconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 120000);
    
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
            className="relative w-full max-w-4xl bg-brand-maroon-deep rounded-2xl shadow-2xl overflow-hidden border border-brand-saffron/20 z-10 flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-white text-white hover:text-brand-maroon rounded-full transition-all shadow-lg backdrop-blur-md"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Section */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[300px]">
              <Image
                src="/images/campus-hero.png"
                alt="BGS Campus"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon-deep to-transparent md:bg-gradient-to-r md:from-transparent md:to-brand-maroon-deep" />
            </div>

            {/* Content Section */}
            <div className="relative w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
                Admissions Open
              </p>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-cream mb-4 leading-tight">
                The Right School Changes Everything.
              </h3>
              <p className="text-brand-cream/70 mb-8 text-sm md:text-base leading-relaxed">
                Admissions are open for LKG through 2nd PU across all streams. 
                Visit the campus, meet the faculty, or start your application today.
              </p>

              <div className="flex flex-col gap-4">
                <Link 
                  href="/contact" 
                  onClick={handleClose}
                  className={cn(buttonVariants({ size: "lg" }), "group justify-center text-sm transition-all duration-300 hover:-translate-y-0.5 btn-ripple border border-transparent hover:border-brand-saffron")}
                >
                  Start Your Application
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a
                  href="https://wa.me/919901923097"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 text-brand-cream hover:text-brand-maroon text-sm font-medium transition-colors border border-brand-cream/20 rounded-xl hover:bg-brand-saffron duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="ledger-data text-base">+91 99019 23097</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
