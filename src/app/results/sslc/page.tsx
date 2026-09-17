"use client";

import Image from "next/image";
import { Reveal, staggerContainer, fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { Sparkles, FileCheck, Target, Users } from "lucide-react";

export default function SSLCResultsPage() {
  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative py-28 md:py-36 bg-brand-cream paper-texture border-b border-brand-maroon/10">
        <div className="px-6 md:px-12 max-w-5xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-6">
              High School
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-serif font-bold text-brand-maroon mb-6 leading-tight">
              SSLC Board Results
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-brand-umber/70 max-w-2xl mx-auto leading-relaxed">
              Consistently achieving 100% SSLC board results and producing state toppers, our rigorous high school foundation ensures that students enter Pre-University with absolute confidence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════ RESULTS BANNER & TABLE ════════════════════ */}
      <section className="py-28 bg-brand-offwhite">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          
          <Reveal>
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl mb-12 border-2 border-brand-maroon/10 bg-white group">
              <Image 
                src="/images/schoolresult.png" 
                alt="SSLC Board Results Banner" 
                width={2000}
                height={1000}
                className="w-full h-auto object-contain" 
                sizes="100vw"
                priority
                unoptimized
              />
            </div>
          </Reveal>

          {/* ════════════════════ HOW WE ACHIEVE THESE RESULTS ════════════════════ */}
          <div className="mt-20">
            <Reveal>
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-brand-maroon/10 shadow-xl relative overflow-hidden">
                <div className="max-w-3xl mb-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-maroon/5 text-brand-maroon text-xs font-semibold uppercase tracking-wider mb-4 border border-brand-maroon/10">
                    <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                    The Chickballapur Division Advantage
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-maroon mb-4">
                    The Science Behind Our 100% SSLC Board Results & Distinctions
                  </h3>
                  <p className="text-brand-umber/70 text-sm md:text-base leading-relaxed">
                    Exemplary board performance at BGS is the direct outcome of an uncompromising assessment ecosystem formulated across the Chickballapur Division:
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl bg-brand-cream/50 border border-brand-maroon/5">
                    <div className="w-10 h-10 rounded-xl bg-brand-saffron/10 flex items-center justify-center text-brand-saffron mb-4">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif font-bold text-lg text-brand-maroon mb-2">
                      External Blind Question Papers
                    </h4>
                    <p className="text-xs text-brand-umber/70 leading-relaxed">
                      From LKG through SSLC, all examination papers are prepared by independent external educators. Class teachers remain unaware of the paper sources, fostering unbiased preparation and high seriousness.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-brand-cream/50 border border-brand-maroon/5">
                    <div className="w-10 h-10 rounded-xl bg-brand-saffron/10 flex items-center justify-center text-brand-saffron mb-4">
                      <Target className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif font-bold text-lg text-brand-maroon mb-2">
                      Formative & Summative Precision
                    </h4>
                    <p className="text-xs text-brand-umber/70 leading-relaxed">
                      Frequent continuous diagnostic tests detect micro-learning gaps early, followed by bi-annual summative examinations that evaluate mastery and determine promotion eligibility.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-brand-cream/50 border border-brand-maroon/5">
                    <div className="w-10 h-10 rounded-xl bg-brand-saffron/10 flex items-center justify-center text-brand-saffron mb-4">
                      <Users className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif font-bold text-lg text-brand-maroon mb-2">
                      Targeted SSLC Workshops
                    </h4>
                    <p className="text-xs text-brand-umber/70 leading-relaxed">
                      Dedicated academic tracks: advanced problem-solving workshops for high achievers aiming for state ranks, and scaffolded remedial clinics to elevate every student into distinctions.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>
    </>
  );
}
