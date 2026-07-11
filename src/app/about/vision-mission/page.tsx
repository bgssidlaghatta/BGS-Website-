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

      {/* ════════════════════ VISION & MISSION CARDS ════════════════════ */}
      <section className="py-28 bg-brand-cream paper-texture border-b border-brand-maroon/10">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Vision */}
            <Reveal>
              <div className="group relative bg-white rounded-3xl p-10 md:p-14 shadow-2xl shadow-brand-maroon/5 border-t-4 border-brand-gold hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Compass className="w-64 h-64 text-brand-maroon" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-brand-cream flex items-center justify-center mb-8 shadow-inner border border-brand-maroon/10">
                    <Compass className="w-8 h-8 text-brand-gold" />
                  </div>
                  <h2 className="text-4xl font-serif font-bold text-brand-maroon mb-6">Our Vision</h2>
                  <p className="text-lg text-brand-umber/70 leading-relaxed font-medium">
                    To be the institution that parents in Karnataka trust by reputation alone — where the mark sheet, the character, and the confidence of every graduate speaks for itself. We aim to nurture young minds into global citizens with a strong foundation in Indian values.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Mission */}
            <Reveal delay={0.2}>
              <div className="group relative bg-brand-maroon-deep rounded-3xl p-10 md:p-14 shadow-2xl shadow-brand-maroon/20 border-t-4 border-brand-saffron hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Target className="w-64 h-64 text-brand-cream" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-brand-maroon flex items-center justify-center mb-8 shadow-inner border border-brand-cream/10">
                    <Target className="w-8 h-8 text-brand-saffron" />
                  </div>
                  <h2 className="text-4xl font-serif font-bold text-brand-cream mb-6">Our Mission</h2>
                  <p className="text-lg text-brand-cream/70 leading-relaxed font-medium">
                    To produce students who don&apos;t just pass exams but dominate them. Through integrated competitive coaching, relentless practice, and personal accountability from every teacher, we strive to unlock the highest potential in every student, regardless of their background.
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-maroon">
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
                  <h3 className="text-xl font-serif font-bold text-brand-maroon mb-4">{value.title}</h3>
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
