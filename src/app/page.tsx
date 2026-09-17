"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Reveal,
  AnimatedCounter,
  ImageReveal,
  StaggerReveal,
  StaggerItem,
  motion,
  staggerContainer,
  fadeUp,
} from "@/lib/animations";
import {
  GraduationCap,
  BookOpen,
  Users,
  FlaskConical,
  Monitor,
  Dumbbell,
  Bus,
  ArrowRight,
  Phone,
  MessageCircle,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  Award,
  Target,
  Lightbulb,
  Library,
} from "lucide-react";
import { ReviewsSection } from "@/components/ui/reviews";
import { ResultPopup } from "@/components/ui/result-popup";
import { AdmissionsPopup } from "@/components/ui/admissions-popup";

const heroImages = [
  {
    src: "/images/Hero-section.png",
    title: "Main Campus Building",
    subtitle: "Front Entrance & Administrative Portal",
    alt: "BGS Public School & PU College Main Campus Building",
  },
  {
    src: "/images/Hero-section-2.png",
    title: "Campus Architecture",
    subtitle: "Grand Colonnade & Heritage Facade",
    alt: "BGS Campus Architecture and Courtyard",
  },
  {
    src: "https://res.cloudinary.com/xd8uritd/image/upload/v1789621192/image-clean_fmrqe6.png",
    title: "Campus Grounds",
    subtitle: "Sprawling Tree-Lined Entrance & Courtyard",
    alt: "BGS Campus Central Entrance and Grounds",
  },
  {
    src: "https://res.cloudinary.com/xd8uritd/image/upload/v1789642129/ChatGPT_Image_Sep_17_2026_04_17_29_PM_bgxgel.png",
    title: "College Classrooms",
    subtitle: "Pre-University Learning & Lecture Halls",
    alt: "BGS PU College Academic Classrooms and Studies",
  },
];

export default function Home() {
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextHero = () => setCurrentHeroIdx((prev) => (prev + 1) % heroImages.length);
  const prevHero = () => setCurrentHeroIdx((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <>
      {/* Popups */}
      <ResultPopup />
      <AdmissionsPopup />

      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-maroon-deep">
        {/* Real Campus Building Photos Slideshow */}
        <div className="absolute inset-0 overflow-hidden">
          {heroImages.map((hero, idx) => (
            <div
              key={hero.src}
              className={cn(
                "absolute inset-0 transition-all duration-1000 ease-in-out",
                currentHeroIdx === idx
                  ? "opacity-100 scale-100 z-[1]"
                  : "opacity-0 scale-105 pointer-events-none z-0"
              )}
            >
              <Image
                src={hero.src}
                alt={hero.alt}
                fill
                priority={idx === 0}
                className="object-cover object-center"
                sizes="100vw"
                quality={90}
              />
            </div>
          ))}
        </div>

        {/* Cinematic gradient overlays: deep contrast on the left for text, building clearly visible on the right */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-brand-maroon-deep/95 via-brand-maroon-deep/70 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-brand-maroon-deep via-transparent to-black/40 pointer-events-none" />

        {/* Campus Building Slideshow Controls & Badge */}
        <div className="absolute bottom-8 right-6 md:right-12 z-20 flex items-center gap-3">
          <div className="hidden sm:flex flex-col items-end mr-2 text-right">
            <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider">
              {heroImages[currentHeroIdx].title}
            </span>
            <span className="text-[10px] text-brand-cream/70">
              Campus View {currentHeroIdx + 1} of {heroImages.length}
            </span>
          </div>

          <button
            type="button"
            onClick={prevHero}
            aria-label="Previous building photo"
            className="w-8 h-8 rounded-full bg-black/50 hover:bg-brand-saffron hover:text-brand-maroon-deep text-white/90 border border-white/20 flex items-center justify-center transition-colors cursor-pointer backdrop-blur-md shadow-md"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {heroImages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentHeroIdx(i)}
                aria-label={`View hero slide ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                  currentHeroIdx === i ? "w-7 bg-brand-saffron" : "w-2 bg-white/40 hover:bg-white/70"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextHero}
            aria-label="Next building photo"
            className="w-8 h-8 rounded-full bg-black/50 hover:bg-brand-saffron hover:text-brand-maroon-deep text-white/90 border border-white/20 flex items-center justify-center transition-colors cursor-pointer backdrop-blur-md shadow-md"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Content — left-aligned editorial layout */}
        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-8">
              <Badge variant="outline" className="px-4 py-1.5 bg-white/5 border-white/10 text-white/70 text-xs font-medium tracking-wider uppercase backdrop-blur-sm gap-2">
                <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
                Come to Learn, Go to Serve
              </Badge>
            </motion.div>

            {/* Headline — editorial, large, with meaning */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-bold text-brand-cream leading-[1.05] tracking-tight mb-8"
            >
              Where Every Student
              <br />
              Is <span className="relative inline-block">
                <span className="text-brand-saffron">Prepared</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-2 left-0 right-0 h-[3px] bg-brand-saffron origin-left"
                />
              </span>,
              <br />
              Not Just Taught.
            </motion.h1>

            {/* Sub copy */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-brand-cream/60 max-w-xl leading-relaxed mb-10"
            >
              LKG through 2nd PU. Three specialized streams — PCMB, PCMCs, Commerce — 
              with integrated CET, NEET & JEE coaching that has delivered 100% results in both SSLC & PUC 
              and 240+ distinctions this year.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "group px-8 py-6 text-base hover:-translate-y-0.5 transition-all duration-300 btn-ripple border border-transparent hover:border-brand-saffron")}>
                Start Your Admission
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/919901923097"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 text-brand-cream/50 hover:text-brand-cream text-sm transition-colors border border-brand-cream/10 rounded-xl hover:border-brand-cream/20 hover:bg-brand-cream/5 duration-300"
              >
                <MessageCircle className="w-4 h-4 text-brand-saffron" />
                <span className="ledger-data">+91 99019 23097</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border-2 border-brand-cream/20 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-brand-cream/40 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════ RESULTS STRIP ════════════════════ */}
      <section className="bg-brand-maroon-deep border-t border-brand-saffron/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-cream/5">
          {[
            { value: 100, suffix: "%", label: "Board Pass Rate", sub: "100% in SSLC & PUC" },
            { value: 99.16, suffix: "%", label: "Highest Score", sub: "Commerce" },
            { value: 240, suffix: "+", label: "Distinctions", sub: "Across All Streams" },
            { value: 25, suffix: "+", label: "Years of Trust", sub: "Since Founding" },
          ].map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="py-10 md:py-14 px-4 md:px-8 text-center group">
                <div className="ledger-data text-3xl md:text-5xl font-bold text-brand-cream mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[11px] font-semibold text-brand-cream/60 uppercase tracking-widest">{stat.label}</p>
                <p className="text-[10px] text-brand-cream/30 mt-1 ledger-data">{stat.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════════════ WHY BGS — editorial layout ════════════════════ */}
      <section className="py-36 md:py-48 bg-white">
        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left — section intro */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
                  The BGS Difference
                </p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-maroon mb-6 leading-tight">
                  Not Just a School. <br />A Launchpad.
                </h2>
                <div className="h-[2px] w-16 bg-brand-saffron mb-8 line-grow-in" />
                <p className="text-brand-umber/60 text-lg leading-relaxed mb-8">
                  Parents don&apos;t choose BGS because of brochures. They choose us because 
                  their neighbour&apos;s child scored 590/600 here, because our teachers stay after 
                  hours for doubt-clearing, because our results speak louder than any tagline.
                </p>
                <Link href="/about" className={cn(buttonVariants({ variant: "link" }), "px-0 text-primary font-semibold hover:no-underline hover:gap-3 transition-all group text-sm")}>
                  Read Our Full Story
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            </div>

            {/* Right — pillar cards */}
            <div className="lg:col-span-7 space-y-6">
              {[
                {
                  icon: GraduationCap,
                  title: "Faculty Who Stay After Hours",
                  desc: "Our teachers don't clock out at 4 PM. Every faculty member holds daily doubt-clearing sessions, runs weekend test series, and personally tracks each student's weak areas through the academic year. Most have 10+ years of PU board and competitive exam teaching experience.",
                  stat: "15:1",
                  statLabel: "Student-Teacher Ratio",
                },
                {
                  icon: Target,
                  title: "CET/NEET Coaching Built-In",
                  desc: "No need for a separate coaching centre. Our PU program integrates CET, NEET, and JEE preparation directly into the timetable — with weekly mock tests, chapter-wise assessments, and performance analytics that parents can review monthly.",
                  stat: "100%",
                  statLabel: "Integrated Coaching",
                },
                {
                  icon: BookOpen,
                  title: "More Than Marks",
                  desc: "Science exhibitions, inter-school sports, cultural festivals, community service drives — we build students who can lead a team, speak on a stage, and solve problems the textbook didn't cover. Academic rigour and character development aren't opposites here.",
                  stat: "20+",
                  statLabel: "Annual Events",
                },
                {
                  icon: Lightbulb,
                  title: "Infrastructure That Matches the Ambition",
                  desc: "Fully equipped Physics, Chemistry, and Biology labs. A dedicated computer lab with modern workstations. A library with 5,000+ volumes. Sports facilities for cricket, basketball, and athletics. We invest in the tools that make learning real.",
                  stat: "6",
                  statLabel: "Specialized Labs",
                },
              ].map((pillar, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="group flex gap-6 bg-white p-8 border-b border-border hover:border-brand-saffron/40 transition-all duration-500">
                    <div className="shrink-0 hidden md:block">
                      <div className="w-14 h-14 rounded-xl bg-brand-maroon/5 flex items-center justify-center text-brand-saffron group-hover:bg-brand-saffron/10 transition-colors duration-300">
                        <pillar.icon className="w-7 h-7 icon-hover-rotate" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-bold text-brand-maroon mb-3">{pillar.title}</h3>
                      <p className="text-brand-umber/60 text-sm leading-relaxed mb-4">{pillar.desc}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="ledger-data text-2xl font-bold text-brand-gold">{pillar.stat}</span>
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-umber/40">{pillar.statLabel}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ STREAMS — immersive split ════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[700px]">
          {/* Image half */}
          <div className="relative w-full min-h-[400px] h-full lg:min-h-[700px] overflow-hidden">
            <Image
              src="https://res.cloudinary.com/xd8uritd/image/upload/v1789621192/image-clean_fmrqe6.png"
              alt="BGS campus entrance and tree-lined courtyard"
              fill
              className="object-cover"
              sizes="50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-maroon-deep/30 lg:hidden" />
          </div>

          {/* Content half */}
          <div className="bg-brand-maroon-deep px-8 md:px-16 py-20 flex items-center relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(232,135,30,0.06)_0%,_transparent_60%)]" />
            <div className="relative z-10 max-w-lg">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
                  Academic Programs
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-cream mb-6 leading-tight">
                  A Seamless Journey from LKG to Career-Ready
                </h2>
                <div className="h-[2px] w-12 bg-brand-saffron mb-8 line-grow-in" />

                <div className="space-y-6 mb-10">
                  <div className="flex gap-4">
                    <div className="w-1 bg-brand-saffron rounded-full shrink-0" />
                    <div>
                      <h3 className="font-serif text-lg font-bold text-brand-cream mb-1">School — LKG to 10th SSLC</h3>
                      <p className="text-sm text-brand-cream/40">Strong foundations, critical thinking, regular assessments, and a 100% SSLC pass rate.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1 bg-gradient-to-b from-brand-saffron to-brand-gold rounded-full shrink-0" />
                    <div>
                      <h3 className="font-serif text-lg font-bold text-brand-cream mb-2">Pre-University — 1st & 2nd PU</h3>
                      <p className="text-sm text-brand-cream/40 mb-4">Specialized streams with a 100% PU board pass rate and integrated competitive exam coaching.</p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { name: "PCMB", sub: "Medical / Bio" },
                          { name: "PCMCs", sub: "Engineering / IT" },
                          { name: "Commerce", sub: "Business / CA" },
                        ].map((s) => (
                          <div key={s.name} className="px-4 py-3 bg-brand-cream/5 border border-brand-cream/10 rounded-xl hover:border-brand-saffron/30 hover:bg-brand-cream/8 transition-all duration-300 cursor-default">
                            <span className="ledger-data text-base font-bold text-brand-cream block">{s.name}</span>
                            <span className="text-[9px] text-brand-cream/30 uppercase tracking-wider">{s.sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/academics" className={cn(buttonVariants({ size: "lg" }), "group transition-all duration-300 hover:-translate-y-0.5 mt-4 btn-ripple border border-transparent hover:border-brand-saffron")}>
                  See Full Curriculum
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ CAMPUS FACILITIES — image grid ════════════════════ */}
      <section className="py-28 md:py-36 bg-brand-offwhite">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
                Infrastructure
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-maroon mb-6">
                Built for Serious Learning
              </h2>
              <p className="text-brand-umber/50">
                Every facility is designed to support the curriculum — not for show, but for use. 
                Comprehensive sports grounds, high-tech computing labs, and safe GPS-tracked bus transit across Sidlaghatta.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {/* Large — Campus Infrastructure */}
            <ImageReveal className="col-span-2 row-span-2">
              <div className="relative h-full min-h-[400px] overflow-hidden group rounded-2xl">
                <Image
                  src="https://res.cloudinary.com/xd8uritd/image/upload/v1789621192/image-clean_fmrqe6.png"
                  alt="BGS expansive campus infrastructure"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon-deep/90 via-brand-maroon-deep/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 z-10 border-l-4 border-brand-saffron ml-4 mb-4">
                  <h3 className="font-serif text-2xl font-bold text-brand-cream mb-1">Campus Infrastructure</h3>
                  <p className="text-sm text-brand-cream/70 max-w-xs">Expansive landscaped learning grounds with serene, distraction-free environment.</p>
                </div>
              </div>
            </ImageReveal>

            {/* Computer Lab */}
            <ImageReveal delay={0.1}>
              <div className="relative aspect-square rounded-2xl overflow-hidden group">
                <Image src="/images/computer-lab.png" alt="BGS computer laboratory" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon-deep/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 z-10">
                  <Monitor className="w-6 h-6 text-brand-saffron mb-2 icon-hover-rotate" />
                  <h3 className="font-serif text-base font-bold text-brand-cream">Computer Lab</h3>
                  <p className="text-[11px] text-brand-cream/40">High-speed networked PCs</p>
                </div>
              </div>
            </ImageReveal>

            {/* Academic Classrooms */}
            <ImageReveal delay={0.15}>
              <div className="relative aspect-square rounded-2xl overflow-hidden group">
                <Image
                  src="https://res.cloudinary.com/xd8uritd/image/upload/v1789638235/ChatGPT_Image_Sep_17_2026_03_09_33_PM_vmr3qc.png"
                  alt="BGS modern classrooms"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon-deep/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 z-10">
                  <BookOpen className="w-6 h-6 text-brand-saffron mb-2 icon-hover-rotate" />
                  <h3 className="font-serif text-base font-bold text-brand-cream">Classrooms</h3>
                  <p className="text-[11px] text-brand-cream/40">Smart & engaging learning</p>
                </div>
              </div>
            </ImageReveal>

            {/* Sports */}
            <ImageReveal delay={0.2} className="col-span-1">
              <div className="relative aspect-square rounded-2xl overflow-hidden group">
                <Image src="https://res.cloudinary.com/xd8uritd/image/upload/v1789554940/Sports_tcb3ce.png" alt="BGS sports ground" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon-deep/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 z-10">
                  <Dumbbell className="w-6 h-6 text-brand-saffron mb-2 icon-hover-rotate" />
                  <h3 className="font-serif text-base font-bold text-brand-cream">Sports & Athletics</h3>
                  <p className="text-[11px] text-brand-cream/40">Indoor & outdoor grounds</p>
                </div>
              </div>
            </ImageReveal>

            {/* School Transport / Bus Fleet */}
            <ImageReveal delay={0.25} className="col-span-1">
              <div className="relative aspect-square rounded-2xl overflow-hidden group">
                <Image src="https://res.cloudinary.com/xd8uritd/image/upload/v1789554938/Bus_fn4rdo.png" alt="BGS school bus fleet" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon-deep/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 z-10">
                  <Bus className="w-6 h-6 text-brand-saffron mb-2 icon-hover-rotate" />
                  <h3 className="font-serif text-base font-bold text-brand-cream">Safe Transport</h3>
                  <p className="text-[11px] text-brand-cream/40">GPS-tracked bus fleet</p>
                </div>
              </div>
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* ════════════════════ TESTIMONIAL ════════════════════ */}
      <ReviewsSection />


    </>
  );
}
