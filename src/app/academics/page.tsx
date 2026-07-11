"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal, motion, staggerContainer, fadeUp } from "@/lib/animations";
import { Atom, Calculator, Briefcase, Beaker, ChevronRight, ArrowRight, CheckCircle, Clock, Target } from "lucide-react";

export default function AcademicsPage() {
  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <Image
          src="/images/classroom.png"
          alt="BGS classroom with students learning"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon-deep via-brand-maroon-deep/60 to-transparent" />
        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full pb-20 pt-40">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
              Curriculum
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-brand-cream mb-6 leading-tight max-w-3xl">
              Every Subject Taught <br />Like It&apos;s <span className="text-brand-saffron">the Only One.</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════ CURRICULUM OVERVIEW ════════════════════ */}
      <section id="overview" className="py-20 md:py-28 bg-brand-cream paper-texture">
        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
              Curriculum Overview
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-maroon mb-6 leading-tight">
              A Seamless Journey from Play to Purpose
            </h2>
            <p className="text-brand-umber/70 text-lg leading-relaxed max-w-3xl mx-auto mb-16">
              Our curriculum is a thoughtfully designed continuum. From the foundational years of early childhood to the rigorous preparation of Pre-University, every phase is crafted to build upon the last. We emphasize conceptual clarity, critical thinking, and character development at every step.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════ PRE-SCHOOL & KINDERGARTEN ════════════════════ */}
      <section id="pre-school" className="py-20 bg-brand-offwhite border-t border-brand-maroon/5">
        <div id="kindergarten" className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
                  Early Years
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-maroon mb-6">
                  Pre-School & Kindergarten
                </h2>
                <div className="h-[2px] w-16 bg-brand-saffron mb-8" />
                <p className="text-brand-umber/70 text-lg leading-relaxed mb-6">
                  The first steps in education should be joyful and engaging. Our Pre-School and Kindergarten programs focus on play-based learning, sensory development, and foundational literacy and numeracy.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-saffron shrink-0 mt-1" />
                    <span className="text-brand-umber/70">Activity-based learning to foster curiosity.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-saffron shrink-0 mt-1" />
                    <span className="text-brand-umber/70">Development of fine and gross motor skills.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-saffron shrink-0 mt-1" />
                    <span className="text-brand-umber/70">Individualized attention with low student-teacher ratios.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-cream-dark aspect-video lg:aspect-square">
                <Image src="/images/classroom.png" alt="Kindergarten students" fill className="object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════ PRIMARY SCHOOL ════════════════════ */}
      <section id="primary" className="py-20 bg-brand-cream paper-texture border-t border-brand-maroon/5">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            <Reveal>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
                  Grades 1 to 5
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-maroon mb-6">
                  Primary School
                </h2>
                <div className="h-[2px] w-16 bg-brand-saffron mb-8" />
                <p className="text-brand-umber/70 text-lg leading-relaxed mb-6">
                  In Primary School, we transition from play-based to inquiry-based learning. Students are encouraged to ask questions, explore concepts deeply, and develop strong reading, writing, and analytical skills.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-saffron shrink-0 mt-1" />
                    <span className="text-brand-umber/70">Core subjects taught through interactive and practical methods.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-saffron shrink-0 mt-1" />
                    <span className="text-brand-umber/70">Regular reading proficiency benchmarks and vocabulary building.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-saffron shrink-0 mt-1" />
                    <span className="text-brand-umber/70">Introduction to environmental awareness and basic sciences.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-cream-dark aspect-video lg:aspect-square">
                <Image src="/images/library.png" alt="Primary school learning" fill className="object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════ HIGH SCHOOL ════════════════════ */}
      <section id="high-school" className="py-20 bg-brand-offwhite border-t border-brand-maroon/5">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
                  Grades 6 to 10
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-maroon mb-6">
                  High School
                </h2>
                <div className="h-[2px] w-16 bg-brand-saffron mb-8" />
                <p className="text-brand-umber/70 text-lg leading-relaxed mb-6">
                  High School is where conceptual depth meets competitive readiness. Students engage in specialized subjects, hands-on lab experiments, and intensive preparation for board examinations.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-saffron shrink-0 mt-1" />
                    <span className="text-brand-umber/70">Dedicated labs for Physics, Chemistry, and Biology practicals.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-saffron shrink-0 mt-1" />
                    <span className="text-brand-umber/70">First exposure to competitive-style problem sets and Olympiads.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-saffron shrink-0 mt-1" />
                    <span className="text-brand-umber/70">Rigorous SSLC preparation yielding a consistent exceptional pass rate.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-cream-dark aspect-video lg:aspect-square">
                <Image src="/images/science-lab.png" alt="High school lab" fill className="object-cover" />
                <div className="absolute -bottom-6 -left-6 bg-brand-maroon-deep rounded-xl p-6 shadow-2xl hidden sm:block">
                  <p className="ledger-data text-4xl font-bold text-brand-gold mb-1">99%</p>
                  <p className="text-[10px] text-brand-cream/60 uppercase tracking-widest">SSLC Pass Rate</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════ PU STREAMS ════════════════════ */}
      <section id="pu" className="py-28 md:py-36 bg-brand-cream paper-texture border-t border-brand-maroon/5">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
                Pre-University College
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-maroon mb-6">
                Three Streams. One Standard: Excellence.
              </h2>
              <p className="text-brand-umber/50 text-lg leading-relaxed">
                Our PU program doesn&apos;t bolt on competitive coaching as an afterthought. 
                CET, NEET, and JEE preparation is woven into the daily timetable from Day 1 of 1st PU.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Atom,
                name: "PCMB",
                full: "Physics · Chemistry · Mathematics · Biology",
                gradient: "from-[#5C1A1B] to-[#3D0F10]",
                subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
                coaching: "NEET + CET",
                ideal: "Medical, Dental, Pharma, Bio-Sciences, Allied Health",
                features: [
                  "Daily NEET-pattern MCQ practice",
                  "Weekly full-length mock tests",
                  "Chapter-wise error analysis",
                  "One-on-one doubt clearing sessions",
                ],
                highlight: "100%",
                highlightLabel: "Board Pass Rate",
              },
              {
                icon: Calculator,
                name: "PCMCs",
                full: "Physics · Chemistry · Mathematics · Computer Science",
                gradient: "from-[#3D0F10] to-[#2B1B12]",
                subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
                coaching: "JEE + CET",
                ideal: "Engineering, IT, Data Science, Technology",
                features: [
                  "Integrated CET & JEE preparation",
                  "Programming fundamentals in CS",
                  "Advanced problem-solving drills",
                  "Competitive coding exposure",
                ],
                highlight: "98%",
                highlightLabel: "Top Score",
              },
              {
                icon: Briefcase,
                name: "Commerce",
                full: "Accountancy · Business Studies · Economics",
                gradient: "from-[#5C1A1B] to-[#3D0F10]",
                subjects: ["Accountancy", "Business Studies", "Economics", "Statistics / Elective"],
                coaching: "CA Foundation Prep",
                ideal: "Chartered Accountancy, Finance, MBA, Entrepreneurship",
                features: [
                  "Practical accounting exercises",
                  "Case study based learning",
                  "Mock financial statement preparation",
                  "Industry guest lectures",
                ],
                highlight: "50+",
                highlightLabel: "Distinctions",
              },
            ].map((stream, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="group bg-brand-cream rounded-2xl overflow-hidden border border-brand-maroon/5 hover:shadow-2xl hover:shadow-brand-maroon/10 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${stream.gradient} p-8 pb-10 relative`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cream/5 rounded-bl-[80px]" />
                    <stream.icon className="w-10 h-10 text-brand-saffron mb-4 relative z-10" />
                    <h3 className="ledger-data text-4xl font-bold text-brand-cream mb-1 relative z-10">{stream.name}</h3>
                    <p className="text-xs text-brand-cream/30 relative z-10">{stream.full}</p>
                    <div className="absolute -bottom-5 right-8 bg-brand-offwhite px-4 py-2 rounded-lg shadow-lg border border-brand-maroon/5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-saffron">{stream.coaching}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8 pt-10 flex-1 flex flex-col">
                    <div className="mb-6">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-saffron mb-3">What We Deliver</p>
                      <ul className="space-y-2.5">
                        {stream.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-sm text-brand-umber/60">
                            <CheckCircle className="w-4 h-4 text-brand-saffron shrink-0 mt-0.5" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-6 border-t border-brand-maroon/5">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-umber/30 mb-1">Career Paths</p>
                      <p className="text-sm text-brand-maroon font-medium">{stream.ideal}</p>
                    </div>
                  </div>

                  {/* Highlight footer */}
                  <div className="px-8 py-5 bg-brand-maroon/5 border-t border-brand-maroon/5 flex items-baseline justify-between">
                    <span className="ledger-data text-3xl font-bold text-brand-gold">{stream.highlight}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-umber/40">{stream.highlightLabel}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ TEACHING METHOD ════════════════════ */}
      <section className="py-28 bg-brand-cream paper-texture">
        <div className="relative z-10 px-6 md:px-12 max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
                How We Teach
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-maroon">
                The BGS Method
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "Daily Doubt Clearing", desc: "Teachers stay after school hours every day for one-on-one doubt resolution. No student leaves confused." },
              { icon: Target, title: "Weekly Mock Tests", desc: "Board-pattern and competitive-pattern tests every week. Results analysed student-by-student, with targeted remedial work." },
              { icon: Beaker, title: "Hands-On Practicals", desc: "Daily lab sessions — not just during exams. Students learn by doing, building intuition that no amount of theory reading can replace." },
            ].map((method, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-brand-offwhite rounded-2xl p-8 border border-brand-maroon/5 text-center hover:shadow-lg transition-shadow h-full">
                  <method.icon className="w-8 h-8 text-brand-saffron mx-auto mb-5" />
                  <h3 className="font-serif text-lg font-bold text-brand-maroon mb-3">{method.title}</h3>
                  <p className="text-sm text-brand-umber/60 leading-relaxed">{method.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ CTA ════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <Image src="/images/science-lab.png" alt="BGS science lab" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-brand-maroon-deep/90" />
        <div className="relative z-10 px-6 md:px-12 max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-cream mb-6">
              Which Stream Is Right for Your Child?
            </h2>
            <p className="text-brand-cream/50 mb-10 text-lg">
              Our academic counsellors can help you choose the right program based on your child&apos;s 
              strengths and career goals. No pressure, no hard sell — just honest guidance.
            </p>
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "group shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300 mt-6 px-10 py-6 text-base")}>
              Talk to a Counsellor
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
