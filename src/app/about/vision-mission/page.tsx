"use client";

import Image from "next/image";
import { Reveal, staggerContainer, fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { Target, Compass, Sparkles, BookOpen, Users, ShieldCheck } from "lucide-react";

export default function VisionMissionPage() {
  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative py-32 md:py-40 bg-brand-maroon-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(242,183,5,0.08)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(251,243,231,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,243,231,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 px-6 md:px-12 max-w-5xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-6">
              Our Purpose
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-brand-cream mb-8 leading-tight">
              Vision & <span className="text-brand-saffron">Mission</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-lg text-brand-cream/50 max-w-2xl mx-auto leading-relaxed">
              We are driven by a singular purpose: to provide holistic, value-based education that prepares students not just for examinations, but for life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════ VISION & MISSION SECTION ════════════════════ */}
      <section className="relative bg-brand-cream paper-texture py-24 md:py-32 lg:pb-48 overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-saffron/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-maroon/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 xl:gap-24 items-center">
            
            {/* Vision */}
            <Reveal className="flex-1 w-full relative">
              {/* Shadow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-maroon/10 to-transparent rounded-[2.5rem] transform -rotate-2 scale-105 hidden md:block" />
              
              <div className="relative bg-white rounded-[2.5rem] p-10 md:p-14 lg:p-16 shadow-[0_20px_60px_rgba(107,33,39,0.06)] border border-brand-maroon/5 overflow-hidden group">
                <div className="absolute right-0 top-0 w-72 h-72 bg-gradient-to-bl from-brand-maroon/[0.03] to-transparent rounded-bl-full transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-700 ease-out" />
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8 md:mb-10">
                    <div className="w-20 h-20 shrink-0 rounded-2xl bg-gradient-to-br from-brand-cream to-white flex items-center justify-center shadow-lg border border-brand-maroon/5 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                      <Compass className="w-10 h-10 text-brand-gold" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">Our Vision</h2>
                  </div>
                  
                  <p className="text-2xl md:text-3xl text-brand-umber/90 leading-snug font-serif mb-8">
                    To be the institution that parents in Karnataka trust by <span className="italic text-brand-saffron">reputation alone</span>.
                  </p>
                  
                  <div className="h-px w-24 bg-gradient-to-r from-brand-saffron to-transparent my-8" />
                  
                  <p className="text-lg md:text-xl text-brand-umber/70 leading-relaxed font-light">
                    Where the mark sheet, the character, and the confidence of every graduate speaks for itself. We aim to nurture young minds into global citizens with a strong foundation in Indian values.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Mission */}
            <Reveal delay={0.2} className="flex-1 w-full relative lg:translate-y-32">
              {/* Shadow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-saffron/30 to-transparent rounded-[2.5rem] transform rotate-2 scale-105 hidden md:block" />
              
              <div className="relative bg-brand-maroon-deep rounded-[2.5rem] p-10 md:p-14 lg:p-16 shadow-[0_20px_60px_rgba(242,183,5,0.15)] border border-brand-saffron/20 overflow-hidden group">
                <div className="absolute left-0 bottom-0 w-72 h-72 bg-gradient-to-tr from-brand-saffron/10 to-transparent rounded-tr-full transform -translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700 ease-out" />
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8 md:mb-10">
                    <div className="w-20 h-20 shrink-0 rounded-2xl bg-gradient-to-br from-brand-saffron to-[#f59e0b] flex items-center justify-center shadow-lg shadow-brand-saffron/20 transform rotate-6 group-hover:rotate-0 transition-transform duration-500">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-cream tracking-tight">Our Mission</h2>
                  </div>
                  
                  <p className="text-2xl md:text-3xl text-brand-cream leading-snug font-serif mb-8">
                    To produce students who don&apos;t just pass exams but <span className="italic text-brand-saffron">dominate them</span>.
                  </p>
                  
                  <div className="h-px w-24 bg-gradient-to-r from-brand-saffron to-transparent my-8 opacity-50" />
                  
                  <p className="text-lg md:text-xl text-brand-cream/70 leading-relaxed font-light">
                    Through integrated competitive coaching, relentless practice, and personal accountability from every teacher, we strive to unlock the highest potential in every student, regardless of their background.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ════════════════════ CORE VALUES ════════════════════ */}
      <section className="py-28 md:py-36 bg-brand-offwhite">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
                The Pillars
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                Our Core Values
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Academic Rigour",
                desc: "We do not compromise on the depth or quality of education. We challenge our students to reach beyond their perceived limits."
              },
              {
                icon: ShieldCheck,
                title: "Integrity",
                desc: "Honesty and strong moral principles form the bedrock of our culture, reflecting the heritage of our founding trust."
              },
              {
                icon: Users,
                title: "Inclusivity",
                desc: "We believe in equal opportunity. We nurture talent from all backgrounds, empowering them to compete on a global stage."
              }
            ].map((value, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-brand-cream p-10 rounded-2xl border border-brand-maroon/5 hover:border-brand-saffron transition-colors h-full">
                  <value.icon className="w-10 h-10 text-brand-saffron mb-6" />
                  <h3 className="text-xl font-serif font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-brand-umber/60 leading-relaxed text-sm">
                    {value.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
