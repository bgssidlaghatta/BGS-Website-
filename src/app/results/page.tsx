"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Reveal, StaggerReveal, ParallaxLayer, AnimatedCounter, motion, staggerContainer, fadeUp } from "@/lib/animations";
import { Trophy, TrendingUp, Award, Medal, ChevronRight, ArrowUpRight } from "lucide-react";

const sslcResults = [
];

const puResults = [
];

const competitiveResults = [
];

export default function ResultsPage() {
  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative py-32 md:py-40 bg-brand-maroon-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(242,183,5,0.08)_0%,_transparent_50%)]" />
        {/* Ledger grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(251,243,231,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,243,231,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 px-6 md:px-12 max-w-5xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-6">
              Academic Record
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-brand-cream mb-8 leading-tight">
              Our Mark Sheet <br />Is Our <span className="text-brand-gold">Marketing.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-lg text-brand-cream/50 max-w-xl mx-auto leading-relaxed">
              Every number on this page is from a real exam, a real student, a real year. 
              No approximations. No best-case cherry-picking.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════ STATS ════════════════════ */}
      <section className="bg-brand-offwhite border-y border-brand-maroon/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-maroon/5">
          {[
            { value: 100, suffix: "%", label: "Pass Rate", icon: Trophy, sub: "3 Years Running" },
            { value: 99, suffix: ".17%", label: "Highest Ever", icon: TrendingUp, sub: "PCMB 2022" },
            { value: 150, suffix: "+", label: "Total Distinctions", icon: Award, sub: "2022–2024" },
            { value: 3, suffix: "", label: "PU Streams", icon: Medal, sub: "PCMB · PCMCs · Commerce" },
          ].map((stat, i) => (
            <div key={i} className="py-12 px-6 text-center group">
              <stat.icon className="w-5 h-5 text-brand-saffron mx-auto mb-3 icon-hover-rotate" />
              <div className="ledger-data text-4xl md:text-5xl font-bold text-white mb-2">
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
            <div className="grid md:grid-cols-3 gap-8">
              {/* SSLC Link */}
              <motion.div variants={fadeUp} className="h-full">
                <Link href="/results/sslc" className="block group h-full">
                  <div className="bg-white rounded-3xl p-10 h-full shadow-xl border-t-4 border-brand-maroon card-lift relative overflow-hidden">
                    <div className="absolute right-0 top-0 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Trophy className="w-32 h-32 -mt-4 -mr-4 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-4">SSLC Board Results</h3>
                    <p className="text-brand-umber/60 leading-relaxed mb-8">View the remarkable performance of our high school students in the state board examinations.</p>
                    <div className="flex items-center text-brand-saffron font-bold text-sm uppercase tracking-widest group-hover:text-white transition-colors">
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

              {/* Competitive Link */}
              <motion.div variants={fadeUp} className="h-full">
                <Link href="/results/competitive" className="block group h-full">
                  <div className="bg-white rounded-3xl p-10 h-full shadow-xl border-t-4 border-brand-gold card-lift relative overflow-hidden">
                    <div className="absolute right-0 top-0 opacity-5 group-hover:opacity-10 transition-opacity">
                      <TrendingUp className="w-32 h-32 -mt-4 -mr-4 text-brand-gold" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-4">Entrance Exams</h3>
                    <p className="text-brand-umber/60 leading-relaxed mb-8">Our track record in national competitive examinations including NEET, CET, and JEE Main.</p>
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
          <Image src="/images/campus-hero.png" alt="BGS campus" fill className="object-cover" sizes="100vw" />
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
