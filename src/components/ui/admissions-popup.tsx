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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/70 transition-all duration-700"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 28, stiffness: 250 }}
            className="relative w-full max-w-4xl rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden z-10 aspect-[4/5] md:aspect-[21/10]"
          >
            {/* Full Bleed Background Image */}
            <Image
              src="/images/campus-hero.png"
              alt="BGS Campus"
              fill
              className="object-cover transition-transform duration-[20s] ease-out hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
            {/* Elegant Gradients for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon-deep via-brand-maroon-deep/70 to-brand-maroon-deep/30" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(232,135,30,0.15)_0%,_transparent_60%)]" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-2.5 bg-white/10 hover:bg-white text-white hover:text-brand-maroon rounded-full transition-all shadow-lg backdrop-blur-md border border-white/20"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Content Section */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="max-w-2xl"
              >
                <div className="inline-block px-4 py-1.5 rounded-full bg-brand-saffron/20 border border-brand-saffron/30 backdrop-blur-md mb-6">
                  <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-brand-saffron">
                    Admissions Open 2026-27
                  </p>
                </div>
                
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 md:mb-6 leading-[1.1] drop-shadow-lg">
                  The Right School Changes Everything.
                </h3>
                
                <p className="text-white/80 mb-8 text-base md:text-lg leading-relaxed md:max-w-xl font-medium drop-shadow-md">
                  Admissions are open for LKG through 2nd PU across all streams. 
                  Visit the campus, meet the faculty, or start your application today.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link 
                    href="/contact" 
                    onClick={handleClose}
                    className={cn(buttonVariants({ size: "lg" }), "group w-full sm:w-auto justify-center px-8 py-6 text-base transition-all duration-300 hover:-translate-y-1 btn-ripple bg-brand-saffron text-brand-maroon hover:bg-white shadow-[0_10px_20px_rgba(0,0,0,0.2)]")}
                  >
                    Start Your Application
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <a
                    href="https://wa.me/919901923097"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-5 text-white hover:text-brand-saffron text-sm font-semibold transition-all border border-white/20 rounded-xl hover:bg-white/10 backdrop-blur-md duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="ledger-data text-base">+91 99019 23097</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
