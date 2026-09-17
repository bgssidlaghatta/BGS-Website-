"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal, StaggerReveal, ParallaxLayer, motion, staggerContainer, fadeUp } from "@/lib/animations";
import { Atom, Calculator, Briefcase, Beaker, ChevronRight, ArrowRight, CheckCircle, Clock, Target, FileCheck, Award, Sparkles, Users } from "lucide-react";

export default function AcademicsPage() {
  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <ParallaxLayer speed={0.3} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <Image
            src="/images/Hero-section.png"
            alt="BGS Public School & PU College campus"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </ParallaxLayer>
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

      {/* ════════════════════ KINDERGARTEN (LKG & UKG) ════════════════════ */}
      <section id="kindergarten" className="py-20 bg-brand-offwhite border-t border-brand-maroon/5">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
                  Early Years (LKG & UKG)
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-maroon mb-6">
                  Kindergarten
                </h2>
                <div className="h-[2px] w-16 bg-brand-saffron mb-8" />
                <p className="text-brand-umber/70 text-lg leading-relaxed mb-6">
                  The first steps in school education should be joyful and engaging. Our Kindergarten (LKG & UKG) program focuses on play-based learning, sensory development, and foundational literacy and numeracy.
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-cream-dark aspect-video lg:aspect-square group">
                <Image
                  src="/images/Kindergarden.png"
                  alt="BGS Kindergarten students learning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-cream-dark aspect-video lg:aspect-square group">
                <Image
                  src="/images/primary_class.png"
                  alt="BGS Primary School classroom interactive learning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
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
                    <span className="text-brand-umber/70">Rigorous SSLC preparation yielding a consistent 100% board pass rate.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-cream-dark aspect-video lg:aspect-square group">
                <Image
                  src="https://res.cloudinary.com/xd8uritd/image/upload/v1789638235/ChatGPT_Image_Sep_17_2026_03_09_33_PM_vmr3qc.png"
                  alt="BGS High School students and academic learning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 bg-brand-maroon-deep rounded-xl p-6 shadow-2xl hidden sm:block">
                  <p className="ledger-data text-4xl font-bold text-brand-gold mb-1">100%</p>
                  <p className="text-[10px] text-brand-cream/60 uppercase tracking-widest">SSLC Pass Rate</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════ ASSESSMENT & EXAMINATION RIGOUR ════════════════════ */}
      <section id="assessment" className="py-24 md:py-32 bg-brand-maroon-deep text-brand-cream relative overflow-hidden border-t border-brand-saffron/20">
        {/* Subtle decorative background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(232,135,30,0.12)_0%,_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(217,119,6,0.08)_0%,_transparent_50%)]" />

        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-3">
                Continuous & Comprehensive Evaluation
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                The Chickballapur Division Examination Benchmark
              </h2>
              <div className="w-16 h-1 bg-brand-saffron mx-auto mb-6 rounded-full" />
              <p className="text-brand-cream/70 text-base md:text-lg leading-relaxed">
                Academic readiness is never left to chance. Through frequent formative diagnostics, objective summative assessments, and an uncompromised external question paper protocol, we ensure students and teachers maintain absolute seriousness and mastery from early childhood to board exams.
              </p>
            </div>
          </Reveal>

          {/* Division Specialty Banner */}
          <Reveal>
            <div className="bg-gradient-to-r from-brand-maroon to-brand-maroon-deep p-8 md:p-10 rounded-3xl border border-brand-saffron/30 shadow-2xl mb-12 relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                <FileCheck className="w-64 h-64 text-brand-gold" />
              </div>
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-saffron/20 text-brand-saffron text-xs font-semibold uppercase tracking-wider mb-4 border border-brand-saffron/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  Division-Wide Specialty • LKG to SSLC
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                  Blind External Question Paper Protocol
                </h3>
                <p className="text-brand-cream/80 text-sm md:text-base leading-relaxed mb-4">
                  A distinguishing standard of BGS institutions in the Chickballapur Division is our complete separation of teaching and question paper setting. Question papers across all classes — from LKG through 10th Standard (SSLC) — are curated exclusively by external subject matter specialists from peer institutions.
                </p>
                <p className="text-brand-cream/70 text-sm leading-relaxed">
                  Crucially, classroom teachers remain completely unaware of the question paper sources until examination morning. This eliminates predictable questioning, guarantees uncompromised curriculum coverage, and instills profound academic discipline and accountability in both mentors and students.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Evaluation Pillars Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <Reveal delay={0.05}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl h-full flex flex-col hover:border-brand-saffron/40 hover:bg-white/[0.08] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-saffron/10 flex items-center justify-center text-brand-saffron mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  Frequent Formative Diagnostics
                </h3>
                <p className="text-xs font-semibold text-brand-saffron uppercase tracking-widest mb-3">
                  Ongoing Skill Assessment
                </p>
                <p className="text-sm text-brand-cream/65 leading-relaxed">
                  Short, frequent formative tests are conducted periodically to evaluate progressive understanding, pinpoint specific conceptual gaps, and calibrate teaching methodologies before doubts turn into deficits.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl h-full flex flex-col hover:border-brand-saffron/40 hover:bg-white/[0.08] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-saffron/10 flex items-center justify-center text-brand-saffron mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  Bi-Annual Summative Exams
                </h3>
                <p className="text-xs font-semibold text-brand-saffron uppercase tracking-widest mb-3">
                  Promotion Benchmarks
                </p>
                <p className="text-sm text-brand-cream/65 leading-relaxed">
                  Rigorous summative examinations are administered twice every academic year. These comprehensive assessments measure holistic retention, test stamina, and determine promotion eligibility to the next grade.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl h-full flex flex-col hover:border-brand-saffron/40 hover:bg-white/[0.08] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-saffron/10 flex items-center justify-center text-brand-saffron mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  Targeted SSLC Workshops
                </h3>
                <p className="text-xs font-semibold text-brand-saffron uppercase tracking-widest mb-3">
                  Dual-Track Empowerment
                </p>
                <p className="text-sm text-brand-cream/65 leading-relaxed">
                  Specialized workshops are designed to elevate SSLC board performance: advanced challenge clinics for high achievers targeting state ranks, paired with patient, scaffolded remedial workshops for students needing extra reinforcement.
                </p>
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

          <StaggerReveal staggerDelay={0.1}>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Atom,
                  name: "PCMB",
                  full: "Physics · Chemistry · Mathematics · Biology",
                  image: "https://res.cloudinary.com/xd8uritd/image/upload/v1789638235/ChatGPT_Image_Sep_17_2026_03_09_33_PM_vmr3qc.png",
                  alt: "PCMB Science and Mathematics Academic Studies",
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
                  image: "/images/computer-lab.png",
                  alt: "PCMCs Computer Science Coding & Innovation Lab",
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
                  full: "Accountancy · Business Studies · Economics · Computer Science",
                  image: "/images/commerce-stream.jpg",
                  alt: "Commerce Financial Analysis and Accounting Seminar",
                  subjects: ["Accountancy", "Business Studies", "Economics", "Computer Science"],
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
                <motion.div key={i} variants={fadeUp} className="group bg-brand-cream rounded-2xl overflow-hidden border border-brand-maroon/10 card-lift h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Card Image Banner */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-maroon-deep">
                    <Image
                      src={stream.image}
                      alt={stream.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon-deep via-brand-maroon-deep/30 to-black/20" />
                    
                    {/* Top badges */}
                    <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-serif font-bold text-sm border border-white/20 shadow-md">
                        <stream.icon className="w-4 h-4 text-brand-saffron" />
                        {stream.name}
                      </span>
                      <span className="inline-block px-3 py-1 rounded-full bg-brand-saffron text-brand-maroon-deep text-[10px] font-bold uppercase tracking-wider shadow-md">
                        {stream.coaching}
                      </span>
                    </div>

                    {/* Bottom Stream Title */}
                    <div className="absolute bottom-3 inset-x-4">
                      <p className="text-white font-serif text-sm sm:text-base font-semibold leading-tight drop-shadow-md">
                        {stream.full}
                      </p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-7 pt-6 flex-1 flex flex-col">
                    <div className="mb-6">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-saffron mb-3">What We Deliver</p>
                      <ul className="space-y-2.5">
                        {stream.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-sm text-brand-umber/70">
                            <CheckCircle className="w-4 h-4 text-brand-saffron shrink-0 mt-0.5" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-6 border-t border-brand-maroon/10">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-umber/40 mb-1">Career Paths</p>
                      <p className="text-sm text-brand-maroon font-semibold">{stream.ideal}</p>
                    </div>
                  </div>

                  {/* Highlight footer */}
                  <div className="px-7 py-4 bg-brand-maroon/5 border-t border-brand-maroon/10 flex items-baseline justify-between">
                    <span className="ledger-data text-3xl font-bold text-brand-gold">{stream.highlight}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-umber/50">{stream.highlightLabel}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </StaggerReveal>
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
                <div className="bg-brand-offwhite rounded-2xl p-8 border border-brand-maroon/5 text-center card-lift h-full">
                  <method.icon className="w-8 h-8 text-brand-saffron mx-auto mb-5 icon-hover-rotate" />
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
        <Image src="/images/Hero-section-2.png" alt="BGS campus architecture" fill className="object-cover" sizes="100vw" />
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
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "group shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300 mt-6 px-10 py-6 text-base btn-ripple")}>
              Talk to a Counsellor
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
