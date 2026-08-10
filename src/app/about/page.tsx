"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, StaggerReveal, ParallaxLayer, motion, staggerContainer, fadeUp } from "@/lib/animations";
import { History, Target, Compass, Award, Shield, ChevronRight, Users, BookOpen } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* ════════════════════ HERO — full-bleed with image ════════════════════ */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <ParallaxLayer speed={0.3} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <Image
            src="/images/campus-hero.png"
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
              Est. Sidlaghatta
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-brand-cream mb-6 leading-tight max-w-3xl">
              Built on Results, <br /><span className="text-brand-saffron">Not Promises.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-lg text-brand-cream/50 max-w-xl leading-relaxed">
              Over two decades of consistent academic results, competitive exam
              performance, and a community that trusts us with their children&apos;s futures.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════ FOUNDING STORY — editorial ════════════════════ */}
      <section className="py-28 md:py-36 bg-brand-cream paper-texture">
        <div className="relative z-10 px-6 md:px-12 max-w-6xl mx-auto">
          <Reveal>
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">Our Story</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
                  From a Small Beginning to the Region&apos;s Most Trusted Institution
                </h2>
              </div>
              <div className="md:col-span-8">
                <div className="prose prose-lg text-brand-umber/70 leading-relaxed space-y-6 border-l-2 border-brand-maroon/10 pl-8">
                  <p>
                    BGS Public School & PU College was founded in Sidlaghatta with a single, non-negotiable 
                    principle: <strong className="text-white">every child who walks through our doors leaves prepared.</strong> Not 
                    just for exams — for the real demands of competitive careers and responsible citizenship.
                  </p>
                  <p>
                    What started as a small school serving the local community has grown into a comprehensive 
                    institution offering education from LKG through 2nd PU. Our growth has never been about 
                    building a bigger campus — it&apos;s been about building a better track record. Every year, 
                    our PU students walk into CET and NEET halls knowing they&apos;ve been drilled harder than 
                    any coaching centre could manage, because their teachers know them by name, know their 
                    weak chapters, and know exactly where they need to push harder.
                  </p>
                  <p>
                    Today, parents across the Sidlaghatta region choose BGS not because of advertisements, 
                    but because their neighbours&apos; children scored here. That kind of reputation can&apos;t be 
                    manufactured — it&apos;s earned, one result at a time.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>


      {/* ════════════════════ PRINCIPAL MESSAGE ════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Message side — reversed order */}
          <div className="bg-brand-offwhite px-8 md:px-16 py-20 lg:py-28 flex items-center order-2 lg:order-1">
            <div className="max-w-lg">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
                  Principal&apos;s Message
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 leading-tight">
                  &ldquo;We don&apos;t produce students. We produce competitors.&rdquo;
                </h2>
                <div className="space-y-5 text-brand-umber/60 leading-relaxed">
                  <p>
                    Welcome to BGS. If you&apos;re reading this, you&apos;re likely a parent evaluating 
                    whether this is the right institution for your child. Here&apos;s what I can tell you: 
                    our PU students don&apos;t just pass the board exam — they walk into CET and NEET 
                    having already written 50+ full-length mock tests under exam conditions.
                  </p>
                  <p>
                    Every teacher in this institution knows that their job isn&apos;t done when the bell 
                    rings. Our doubt-clearing sessions run until the last student is satisfied. Our 
                    weekly assessments are analysed student-by-student. We don&apos;t believe in batch 
                    teaching — we believe in knowing exactly where each student stands and pushing 
                    them past their own expectations.
                  </p>
                  <p className="italic text-white/40 text-sm border-t border-brand-maroon/10 pt-5 mt-5">
                    Full principal&apos;s message and portrait will be published upon receipt.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Portrait side */}
          <div className="relative h-[500px] lg:h-auto bg-brand-maroon flex items-center justify-center p-16 order-1 lg:order-2">
            <div className="relative w-full max-w-xs">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-brand-maroon-deep border-2 border-brand-cream/10 shadow-2xl">
                <div className="w-full h-full flex items-center justify-center text-brand-cream/15 font-mono text-xs p-6 text-center bg-gradient-to-br from-brand-maroon-deep to-brand-maroon">
                  Principal&apos;s official portrait will be placed here upon receipt
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-offwhite rounded-xl p-5 shadow-2xl border border-brand-maroon/5">
                <p className="font-serif text-sm font-bold text-white mb-1">[Principal Name]</p>
                <p className="text-[10px] text-brand-saffron font-semibold uppercase tracking-widest">Principal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ ACCREDITATION ════════════════════ */}
      <section className="py-20 bg-brand-cream border-y border-brand-maroon/5">
        <div className="px-6 md:px-12 max-w-5xl mx-auto">
          <StaggerReveal staggerDelay={0.1}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              {[
                { icon: Shield, label: "Karnataka State Board", sub: "Affiliated" },
                { icon: Award, label: "Pre-University Board", sub: "Recognized" },
              ].map((badge, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-center gap-5 px-8 py-6 bg-brand-offwhite rounded-xl border border-brand-maroon/5 shadow-sm card-lift">
                  <badge.icon className="w-10 h-10 text-white icon-hover-rotate" />
                  <div>
                    <p className="font-semibold text-white">{badge.label}</p>
                    <p className="text-xs text-brand-umber/40 ledger-data">{badge.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </StaggerReveal>
        </div>
      </section>

      {/* ════════════════════ CTA ════════════════════ */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <Image src="/images/campus-hero.png" alt="BGS campus" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-brand-maroon-deep/90" />
        <div className="relative z-10 px-6 md:px-12 max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-cream mb-6">
              Come See It for Yourself
            </h2>
            <p className="text-brand-cream/50 mb-10 text-lg">
              Schedule a campus visit. Meet the faculty. Sit in on a class. 
              The best way to judge a school is to walk through it.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-10 py-4 bg-brand-saffron text-white font-semibold rounded-xl shadow-2xl shadow-brand-saffron/30 hover:shadow-brand-saffron/50 hover:-translate-y-0.5 transition-all duration-300 btn-ripple"
            >
              Schedule a Visit
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
