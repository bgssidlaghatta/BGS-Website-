"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal, StaggerReveal, ParallaxLayer, AnimatedCounter, motion, staggerContainer, fadeUp } from "@/lib/animations";
import { AnimatePresence } from "framer-motion";
import { Trophy, TrendingUp, Award, Medal, ChevronRight, ArrowUpRight, ChevronLeft, Sparkles, ChevronDown } from "lucide-react";

const heroSlides = [
  {
    image: "/images/collegeresult.png",
    tag: "Pre-University Achievements",
    title: "PU Board State Rank Holders",
    highlight: "State 6th Rank (99.16%) & State 10th Rank (98.33%) • 100% Results",
    link: "/results/pu",
  },
  {
    image: "/images/schoolresult.png",
    tag: "High School Achievements",
    title: "SSLC Board State Toppers",
    highlight: "Taluk 1st, 2nd & 3rd Toppers • State 4th, 5th, 6th Ranks • 100% Pass",
    link: "/results/sslc",
  },
  {
    image: "/images/Hero-section.png",
    tag: "Jnanankura Campus",
    title: "A Tradition of Pure Merit",
    highlight: "Comprehensive CET, NEET & JEE Coaching with Proven Track Record",
    link: "/academics",
  },
];

export default function ResultsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <>
      {/* ════════════════════ FULL-SCREEN SLIDING HERO ════════════════════ */}
      <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-black text-white pt-28 pb-12">
        {/* Background Image Carousel with smooth fade transition */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                fill
                priority
                unoptimized
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          {/* Soft ambient overlay so background images (mark sheets & campus) are bright, vivid, and clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

        {/* Top Tag & Context */}
        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full pt-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/25 text-xs font-semibold tracking-[0.25em] text-brand-saffron uppercase shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            Verified Academic Record
          </motion.div>
        </div>

        {/* Center Main Hero Content */}
        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full my-auto py-10">
          <div className="max-w-3xl">
            {/* Active slide badge */}
            <motion.div
              key={`badge-${currentSlide}`}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="inline-block text-xs md:text-sm font-semibold text-brand-gold uppercase tracking-[0.25em] bg-black/60 px-3 py-1 rounded-md border border-brand-gold/30 backdrop-blur-md shadow-md">
                {heroSlides[currentSlide].tag}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-[1.05] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
            >
              Our Mark Sheet <br />
              Is Our <span className="text-brand-saffron underline decoration-brand-saffron/40 decoration-wavy decoration-2">Marketing.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg md:text-xl text-white font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] max-w-2xl leading-relaxed mb-6"
            >
              Every number on this page is from a real exam, a real student, a real year. 
              No approximations. No best-case cherry-picking.
            </motion.p>

            {/* Slide specific highlight */}
            <motion.div
              key={`highlight-${currentSlide}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 p-3.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 max-w-xl text-xs md:text-sm text-white flex items-center gap-3 shadow-xl"
            >
              <Trophy className="w-5 h-5 text-brand-saffron shrink-0" />
              <span className="font-medium drop-shadow">{heroSlides[currentSlide].highlight}</span>
            </motion.div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/results/pu"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-brand-saffron hover:bg-brand-saffron-light text-brand-maroon-deep font-bold shadow-xl shadow-brand-saffron/25 transition-all duration-300 hover:-translate-y-0.5 px-8 py-6 text-sm md:text-base btn-ripple"
                )}
              >
                PU Board Results
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Link>

              <Link
                href="/results/sslc"
                className="px-8 py-3.5 rounded-xl bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/30 text-white font-semibold text-sm md:text-base transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2 shadow-lg"
              >
                SSLC Board Results
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Slide indicators, title and controls */}
        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full pt-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/15">
            {/* Progress indicators & Slide title */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                      idx === currentSlide
                        ? "w-10 bg-brand-saffron shadow-lg shadow-brand-saffron/50"
                        : "w-2.5 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-white/80 font-mono drop-shadow">
                0{currentSlide + 1} / 0{heroSlides.length}
              </span>
              <span className="text-xs font-serif text-white pl-3 border-l border-white/30 drop-shadow font-medium">
                {heroSlides[currentSlide].title}
              </span>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ STATS ════════════════════ */}
      <section className="bg-brand-offwhite border-y border-brand-maroon/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-maroon/5">
          {[
            { value: 100, suffix: "%", label: "Pass Rate", icon: Trophy, sub: "100% in SSLC & PUC" },
            { value: 99, suffix: ".17%", label: "Highest Ever", icon: TrendingUp, sub: "PCMB 2022" },
            { value: 150, suffix: "+", label: "Total Distinctions", icon: Award, sub: "2022–2024" },
            { value: 3, suffix: "", label: "PU Streams", icon: Medal, sub: "PCMB · PCMCs · Commerce" },
          ].map((stat, i) => (
            <div key={i} className="py-12 px-6 text-center group">
              <stat.icon className="w-5 h-5 text-brand-saffron mx-auto mb-3 icon-hover-rotate" />
              <div className="ledger-data text-4xl md:text-5xl font-bold text-brand-maroon mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[11px] font-semibold text-brand-umber/60 uppercase tracking-widest">{stat.label}</p>
              <p className="text-[10px] text-brand-umber/30 mt-1 ledger-data">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════ RESULTS LINKS ════════════════════ */}
      <section className="py-28 bg-brand-cream paper-texture">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <StaggerReveal staggerDelay={0.1}>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* SSLC Link */}
              <motion.div variants={fadeUp} className="h-full">
                <Link href="/results/sslc" className="block group h-full">
                  <div className="bg-white rounded-3xl p-10 h-full shadow-xl border-t-4 border-brand-maroon card-lift relative overflow-hidden">
                    <div className="absolute right-0 top-0 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Trophy className="w-32 h-32 -mt-4 -mr-4 text-brand-maroon" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-brand-maroon mb-4">SSLC Board Results</h3>
                    <p className="text-brand-umber/60 leading-relaxed mb-8">View the remarkable performance of our high school students in the state board examinations.</p>
                    <div className="flex items-center text-brand-saffron font-bold text-sm uppercase tracking-widest group-hover:text-brand-maroon transition-colors">
                      View Results <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* PU Link */}
              <motion.div variants={fadeUp} className="h-full">
                <Link href="/results/pu" className="block group h-full">
                  <div className="bg-brand-maroon-deep rounded-3xl p-10 h-full shadow-xl border-t-4 border-brand-saffron card-lift relative overflow-hidden">
                    <div className="absolute right-0 top-0 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Medal className="w-32 h-32 -mt-4 -mr-4 text-brand-cream" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-brand-cream mb-4">PU Board Results</h3>
                    <p className="text-brand-cream/60 leading-relaxed mb-8">Detailed breakdown of our PCMB, PCMCs, and Commerce streams in the Pre-University exams.</p>
                    <div className="flex items-center text-brand-saffron font-bold text-sm uppercase tracking-widest group-hover:text-white transition-colors">
                      View Results <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </StaggerReveal>
        </div>
      </section>

      {/* ════════════════════ CTA ════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <ParallaxLayer speed={0.3} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <Image src="/images/Hero-section-2.png" alt="BGS campus" fill className="object-cover" sizes="100vw" />
        </ParallaxLayer>
        <div className="absolute inset-0 bg-brand-maroon-deep/90" />
        <div className="relative z-10 px-6 md:px-12 max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-cream mb-6">
              Your Child Could Be on This List Next Year.
            </h2>
            <p className="text-brand-cream/50 mb-10 text-lg">
              The students on this page were once in your shoes — researching schools, 
              weighing options. They chose BGS. Their results did the rest.
            </p>
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "group shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300 mt-6 px-10 py-6 text-base btn-ripple")}>
              Start the Admission Process
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
