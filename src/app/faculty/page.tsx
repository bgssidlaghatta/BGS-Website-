"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal, StaggerReveal, ParallaxLayer, motion, staggerContainer, fadeUp } from "@/lib/animations";
import { ChevronRight, ArrowRight } from "lucide-react";

const departments = [
  {
    name: "Science Department — PU",
    desc: "The backbone of our PCMB and PCMCs programs. Faculty with 10+ years of PU board and competitive exam coaching experience.",
    accent: "from-brand-saffron to-brand-saffron-light",
    staff: [
      { name: "Faculty details pending", subject: "Physics", qual: "M.Sc, B.Ed", exp: "12+ years" },
      { name: "Faculty details pending", subject: "Chemistry", qual: "M.Sc, B.Ed", exp: "10+ years" },
      { name: "Faculty details pending", subject: "Mathematics", qual: "M.Sc, B.Ed", exp: "15+ years" },
      { name: "Faculty details pending", subject: "Biology", qual: "M.Sc, B.Ed", exp: "11+ years" },
      { name: "Faculty details pending", subject: "Computer Science", qual: "MCA, B.Ed", exp: "8+ years" },
    ],
  },
  {
    name: "Commerce Department — PU",
    desc: "Practical-oriented teaching with CA Foundation preparation and real-world business case studies.",
    accent: "from-brand-gold to-brand-saffron",
    staff: [
      { name: "Faculty details pending", subject: "Accountancy", qual: "M.Com, B.Ed", exp: "10+ years" },
      { name: "Faculty details pending", subject: "Business Studies", qual: "M.Com, B.Ed", exp: "9+ years" },
      { name: "Faculty details pending", subject: "Economics", qual: "MA, B.Ed", exp: "12+ years" },
    ],
  },
  {
    name: "High School — 6th to 10th",
    desc: "Preparing students for SSLC with strong conceptual foundations and exam-readiness strategies.",
    accent: "from-brand-maroon to-brand-maroon-deep",
    staff: [
      { name: "Faculty details pending", subject: "Science", qual: "B.Sc, B.Ed", exp: "10+ years" },
      { name: "Faculty details pending", subject: "Mathematics", qual: "B.Sc, B.Ed", exp: "12+ years" },
      { name: "Faculty details pending", subject: "English", qual: "MA, B.Ed", exp: "8+ years" },
      { name: "Faculty details pending", subject: "Social Science", qual: "MA, B.Ed", exp: "9+ years" },
      { name: "Faculty details pending", subject: "Kannada", qual: "MA, B.Ed", exp: "11+ years" },
    ],
  },
  {
    name: "Primary School — LKG to 5th",
    desc: "Nurturing curiosity and building foundational skills through activity-based and play-based learning.",
    accent: "from-brand-saffron to-brand-gold",
    staff: [
      { name: "Faculty details pending", subject: "Class Teacher", qual: "B.Ed", exp: "7+ years" },
      { name: "Faculty details pending", subject: "Class Teacher", qual: "B.Ed", exp: "6+ years" },
      { name: "Faculty details pending", subject: "Class Teacher", qual: "D.Ed", exp: "8+ years" },
      { name: "Faculty details pending", subject: "Activity Teacher", qual: "B.Ed", exp: "5+ years" },
    ],
  },
];

export default function FacultyPage() {
  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <ParallaxLayer speed={0.3} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <Image
            src="/images/classroom.png"
            alt="BGS classroom with teacher and students"
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
              Our Team
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-brand-cream mb-6 leading-tight max-w-3xl">
              Teachers Who Stay <br />Until the Last <span className="text-brand-saffron">Doubt Is Cleared.</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════ DEPARTMENTS ════════════════════ */}
      <section className="py-28 md:py-36 bg-brand-cream paper-texture">
        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-20">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
                Department-Wise Directory
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Experienced. Dedicated. Accountable.
              </h2>
              <p className="text-brand-umber/60 leading-relaxed">
                Our faculty are recruited for two things: subject mastery and the ability 
                to make students care about the subject. Full names, photographs, and 
                detailed qualifications will be published once privacy consent is obtained 
                from each faculty member.
              </p>
            </div>
          </Reveal>

          <div className="space-y-20">
            {departments.map((dept, di) => (
              <Reveal key={di}>
                <div>
                  {/* Department header */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                    <div>
                      <div className={`h-1 w-16 bg-gradient-to-r ${dept.accent} rounded-full mb-4 line-grow-in`} />
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">{dept.name}</h3>
                      <p className="text-sm text-brand-umber/50 mt-2 max-w-md">{dept.desc}</p>
                    </div>
                    <p className="ledger-data text-sm text-brand-umber/30">{dept.staff.length} faculty members</p>
                  </div>

                  {/* Staff grid */}
                  <StaggerReveal staggerDelay={0.06}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {dept.staff.map((member, mi) => (
                        <motion.div key={mi} variants={fadeUp} className="group bg-brand-offwhite rounded-2xl overflow-hidden border border-brand-maroon/5 hover:border-brand-saffron/20 card-lift">
                          {/* Photo placeholder */}
                          <div className="aspect-[4/5] bg-gradient-to-br from-brand-cream-dark to-brand-cream flex items-center justify-center relative overflow-hidden">
                            <div className="w-16 h-16 rounded-full bg-brand-maroon/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                              <span className="font-serif text-2xl font-bold text-white/15">{member.subject[0]}</span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-brand-offwhite to-transparent" />
                          </div>
                          {/* Info */}
                          <div className="p-4">
                            <p className="text-xs font-bold text-brand-saffron mb-1">{member.subject}</p>
                            <p className="text-[11px] text-brand-umber/50 ledger-data mb-0.5">{member.qual}</p>
                            <p className="text-[10px] text-brand-umber/30 ledger-data">{member.exp}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </StaggerReveal>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ CAREERS CTA ════════════════════ */}
      <section className="py-20 bg-brand-offwhite border-y border-brand-maroon/5">
        <div className="px-6 md:px-12 max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Want to Teach at BGS?
            </h2>
            <p className="text-brand-umber/50 mb-8 text-lg max-w-xl mx-auto">
              We&apos;re always looking for passionate educators who believe teaching is about 
              changing lives, not just covering syllabus. If that&apos;s you, let&apos;s talk.
            </p>
            <Link href="/contact" className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "group shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 mt-6 px-10 py-6 text-base btn-ripple")}>
              Apply for a Teaching Position
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
