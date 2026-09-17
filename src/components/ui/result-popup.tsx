"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

import { getCookie, setCookie, COOKIE_KEYS } from "@/lib/cookies";

export function ResultPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user already dismissed this popup via cookie
    const isDismissed = getCookie(COOKIE_KEYS.RESULT_POPUP_DISMISSED);
    if (isDismissed) {
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Remember for 1 day using cookie
    setCookie(COOKIE_KEYS.RESULT_POPUP_DISMISSED, "true", 1);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Subtle navy-to-white / neutral backdrop with slight blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#08233F]/80 backdrop-blur-sm transition-all duration-300"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-[#FAF9F6] rounded-[24px] shadow-[0_8px_30px_rgba(8,35,63,0.15)] overflow-hidden z-10 flex flex-col max-h-[94vh] lg:max-h-[90vh]"
          >
            {/* Fine geometric pattern background */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{ backgroundImage: 'radial-gradient(#123B63 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />

            {/* HEADER */}
            <div className="relative flex items-center justify-between px-6 py-4 bg-white border-b border-[#EEF1F4] shrink-0 z-10">
              <div className="flex items-center gap-3">
                {/* Small BGS emblem placeholder */}
                <div className="w-8 h-8 rounded-full bg-[#EEF1F4] border border-[#123B63]/10 flex items-center justify-center shrink-0 overflow-hidden">
                  <Image src="/images/logo.jpg" alt="BGS Logo" width={32} height={32} className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] md:text-sm font-bold text-[#08233F] tracking-wide uppercase leading-tight">
                    BGS PU COLLEGE
                  </span>
                  <span className="text-[10px] md:text-[11px] font-semibold text-[#D9A441] tracking-wider uppercase">
                    Academic Achievements • 2026
                  </span>
                </div>
              </div>
              
              <button
                onClick={handleClose}
                className="group relative p-2 rounded-full bg-[#EEF1F4] hover:bg-[#123B63] transition-colors duration-200"
              >
                <X className="w-4 h-4 text-[#172033] group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* CONTENT AREA (Scrollable) */}
            <div className="flex-1 overflow-y-auto custom-scrollbar relative z-0 pb-8">
              
              {/* Soft radial light behind poster */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-[300px] bg-[#D9A441]/5 blur-3xl pointer-events-none" />

              <div className="p-4 md:p-8 flex flex-col items-center">
                {/* ACHIEVEMENT POSTER */}
                <div className="relative w-full max-w-4xl bg-white p-2 md:p-4 rounded-xl shadow-[0_4px_20px_rgba(8,35,63,0.06)] border border-[#EEF1F4] mb-8">
                  <Image
                    src="/images/collegeresult.png"
                    alt="PU College Results Poster"
                    width={2000}
                    height={1000}
                    className="w-full h-auto object-contain rounded-lg"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    priority
                    unoptimized
                  />
                </div>

                {/* ACHIEVEMENT INFORMATION SECTION */}
                <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
                  
                  {/* Left: Text & CTA */}
                  <div className="flex-1 flex flex-col">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D9A441] mb-3">
                      II PUC BOARD EXAMINATION • MARCH 2026
                    </p>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#08233F] mb-4 leading-[1.2]">
                      Hearty Congratulations to Our Achievers!
                    </h3>
                    <div className="w-12 h-[2px] bg-[#D9A441] mb-5" />
                    <p className="text-[#172033]/80 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                      We are incredibly proud of our students’ outstanding performance in the Board Examinations. Hard work, dedication, and the right learning environment make all the difference.
                    </p>
                    
                    {/* CTA AREA */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                      <Link
                        href="/results"
                        onClick={handleClose}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-[8px] bg-[#08233F] text-white text-[15px] font-medium hover:bg-[#D9A441] transition-colors duration-200 shadow-sm"
                      >
                        View Full Results &rarr;
                      </Link>
                      <button
                        onClick={handleClose}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-[8px] bg-white border border-[#123B63] text-[#123B63] text-[15px] font-medium hover:bg-[#EEF1F4] transition-colors duration-200"
                      >
                        Continue to Website
                      </button>
                    </div>
                  </div>

                  {/* Right: Key Highlights Cards */}
                  <div className="w-full lg:w-[320px] shrink-0 grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
                    {[
                      { stat: "100%", label: "Overall Result", sub: "SSLC & PU Boards" },
                      { stat: "99.16%", label: "Highest Score", sub: "Commerce" },
                      { stat: "240+", label: "Distinctions", sub: "Across All Streams" },
                      { stat: "Excellence", label: "State Rank Achievers", sub: "Outstanding Record" },
                    ].map((item, i) => (
                      <div key={i} className="bg-white p-4 md:p-5 rounded-[12px] border border-[#EEF1F4] shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#D9A441]" />
                        <h4 className="text-xl md:text-2xl font-bold text-[#123B63] mb-0.5">{item.stat}</h4>
                        <p className="text-[13px] md:text-sm text-[#123B63] font-semibold leading-tight">{item.label}</p>
                        {item.sub && (
                          <p className="text-[11px] md:text-xs text-[#172033]/60 font-medium mt-0.5">{item.sub}</p>
                        )}
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
