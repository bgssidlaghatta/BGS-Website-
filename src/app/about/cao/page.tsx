"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, StaggerReveal, motion, staggerContainer, fadeUp } from "@/lib/animations";
import { 
  GraduationCap, 
  Mail, 
  Sparkles, 
  Brain, 
  Heart, 
  Compass, 
  Target, 
  ArrowRight,
  BookOpen,
  Award,
  ShieldCheck,
  Send
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AboutCAOPage() {
  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative py-28 md:py-36 bg-brand-maroon-deep text-brand-cream overflow-hidden">
        {/* Atmospheric ambient lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,135,30,0.15)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(242,183,5,0.08)_0%,_transparent_50%)]" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px"
          }}
        />

        <div className="relative z-10 px-6 md:px-12 max-w-5xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              About the <span className="text-brand-saffron">CAO</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="h-1 w-20 bg-gradient-to-r from-transparent via-brand-saffron to-transparent mx-auto mb-6" />

            <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-brand-cream/70 max-w-2xl mx-auto leading-relaxed">
              Chief Administrative Officer — Pioneering a scientifically planned, student-centric cognitive learning ecosystem at BGS Public School & PU College.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════ PROFILE & EXECUTIVE MESSAGE ════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Portrait & Credentials Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <Reveal>
                <div className="bg-brand-cream/60 rounded-3xl p-6 sm:p-8 border border-brand-maroon/10 shadow-sm">
                  {/* Portrait Box */}
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-brand-maroon-deep shadow-xl border-2 border-brand-saffron/20 mb-6 group">
                    <Image
                      src="/images/cao.jpg"
                      alt="Chief Administrative Officer (CAO) - BGS Public School & PU College"
                      fill
                      priority
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-75" />
                    <div className="absolute bottom-0 inset-x-0 p-4 text-center">
                      <p className="font-serif text-lg font-bold text-white drop-shadow-md">
                        Chief Administrative Officer
                      </p>
                      <p className="text-xs text-brand-saffron font-medium">
                        BGS Public School & PU College
                      </p>
                    </div>
                  </div>

                  {/* Identity Details */}
                  <div className="text-center mb-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-brand-saffron block mb-1">
                      Chief Administrative Officer
                    </span>
                    <h2 className="text-2xl font-serif font-bold text-brand-maroon leading-snug">
                      BGS Administration
                    </h2>
                    <p className="text-xs text-brand-umber/60 mt-1">
                      BGS Public School & PU College, Sidlaghatta
                    </p>
                  </div>

                  {/* Education Qualification Badge */}
                  <div className="bg-white rounded-xl p-4 border border-brand-maroon/10 mb-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-brand-maroon/5 flex items-center justify-center text-brand-saffron">
                        <Award className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-maroon">
                        Educational Qualification
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-11">
                      {["B.Sc.", "M.Ed.", "Ph.D."].map((degree) => (
                        <span 
                          key={degree}
                          className="px-3 py-1 rounded-md bg-brand-maroon/5 text-brand-maroon font-serif font-bold text-sm border border-brand-maroon/10"
                        >
                          {degree}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Email & Contact */}
                  <div className="bg-white rounded-xl p-4 border border-brand-maroon/10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-brand-maroon/5 flex items-center justify-center text-brand-saffron">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-maroon">
                        Official Correspondence
                      </span>
                    </div>
                    <div className="pl-11">
                      <a 
                        href="mailto:nsrbgs1@gmail.com"
                        className="text-sm font-semibold text-brand-maroon hover:text-brand-saffron transition-colors inline-flex items-center gap-1.5 break-all"
                      >
                        nsrbgs1@gmail.com
                        <ArrowRight className="w-3 h-3 shrink-0" />
                      </a>
                    </div>
                  </div>

                  {/* Send Email Action */}
                  <div className="mt-6">
                    <a
                      href="mailto:nsrbgs1@gmail.com"
                      className={cn(buttonVariants({ size: "lg" }), "w-full justify-center gap-2 shadow-md shadow-primary/10 hover:shadow-primary/20 btn-ripple")}
                    >
                      <Send className="w-4 h-4" />
                      Send Email to CAO
                    </a>
                  </div>

                </div>
              </Reveal>
            </div>

            {/* Right Column: Overview & Experience Article */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-3">
                    Administrative & Pedagogical Philosophy
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brand-maroon leading-tight mb-4">
                    Overview & Experience
                  </h2>
                  <div className="h-[2px] w-16 bg-brand-saffron mb-8" />
                </div>

                {/* Primary Message Card */}
                <div className="space-y-6 text-brand-umber/75 text-base sm:text-lg leading-relaxed border-l-2 border-brand-saffron/30 pl-6 sm:pl-8 mb-12">
                  <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-brand-maroon first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                    Learning environment is said that the social and emotional environment which is invisible to teacher. Students react to the environment which is a composite of many factors and particular aspects of the environment effect changes in particular areas of the cognitive development at certain critical points in time and plays a crucial and influential role in the cognitive development process of the students.
                  </p>

                  <p>
                    These environmental factors provide a richly structured milieu of experience, which affects the student&apos;s far reaching manner, and they might shape and determine many of the student&apos;s preferences, habits etc., and will consciously and subconsciously influence many of their behaviours and actions.
                  </p>

                  <blockquote className="border-l-4 border-brand-maroon pl-6 my-8 italic text-brand-maroon bg-brand-cream/60 p-6 rounded-r-2xl font-serif text-xl sm:text-2xl leading-snug">
                    &ldquo;Cognitive development normally and naturally takes place within an environment; therefore a lot of emphasis is placed on shaping the college&apos;s environment to be &lsquo;student-friendly&rsquo; and &lsquo;student-centric&rsquo;.&rdquo;
                  </blockquote>

                  <p>
                    Such a nurturing environment will enhance their experience and exposure and also will to increase their self-worth. At this college, the environment in which learning occurs is scientifically planned and specially created to achieve the stated objectives and desired goals, sparing no expenses.
                  </p>

                  <p>
                    The emphasis will be on providing an uplifting social and academic environment in which the student can grow, be taught and learn the relevance of and respect for all the things in life.
                  </p>
                </div>
              </Reveal>

              {/* Core Pillars from the Vision */}
              <Reveal delay={0.1}>
                <div className="pt-8 border-t border-brand-maroon/10">
                  <h3 className="text-xl font-serif font-bold text-brand-maroon mb-6 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-brand-saffron" />
                    Key Dimensions of the Educational Milieu
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      {
                        icon: Brain,
                        title: "Cognitive Milieu",
                        desc: "Recognizing that students react dynamically to physical and emotional settings during critical developmental windows."
                      },
                      {
                        icon: Heart,
                        title: "Student-Centric Culture",
                        desc: "Cultivating an atmosphere of psychological security, high self-worth, and meaningful experiential exposure."
                      },
                      {
                        icon: Target,
                        title: "Scientifically Planned",
                        desc: "Classrooms, laboratories, and study schedules are architected with purpose — sparing no expenses for student success."
                      },
                      {
                        icon: Compass,
                        title: "Respect for All Life",
                        desc: "Guiding learners toward moral responsibility, civic empathy, and true lifelong relevance beyond textbooks."
                      },
                    ].map((pillar, idx) => (
                      <div 
                        key={idx} 
                        className="bg-brand-cream/40 rounded-xl p-5 border border-brand-maroon/5 hover:border-brand-saffron/20 transition-all duration-300"
                      >
                        <div className="w-9 h-9 rounded-lg bg-brand-maroon/5 flex items-center justify-center text-brand-saffron mb-3">
                          <pillar.icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-serif font-bold text-brand-maroon text-base mb-1.5">{pillar.title}</h4>
                        <p className="text-xs text-brand-umber/65 leading-relaxed">{pillar.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════ CROSS-NAVIGATION ════════════════════ */}
      <section className="py-20 bg-brand-cream paper-texture border-t border-brand-maroon/10">
        <div className="px-6 md:px-12 max-w-5xl mx-auto text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-3">
              Explore Leadership & Institution
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-maroon mb-10">
              Related About Sections
            </h2>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <Link
                href="/about"
                className="group p-6 rounded-2xl bg-white border border-brand-maroon/5 shadow-sm hover:shadow-md hover:border-brand-saffron/30 transition-all duration-300 card-lift"
              >
                <p className="text-xs font-semibold text-brand-saffron uppercase tracking-wider mb-2">Institution</p>
                <h3 className="font-serif font-bold text-xl text-brand-maroon mb-2 flex items-center justify-between">
                  About BGS
                  <ArrowRight className="w-4 h-4 text-brand-saffron opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-xs text-brand-umber/60 leading-relaxed">
                  Discover our school history, ethos, principal&apos;s message, and campus life at Sidlaghatta.
                </p>
              </Link>

              <Link
                href="/about/math"
                className="group p-6 rounded-2xl bg-white border border-brand-maroon/5 shadow-sm hover:shadow-md hover:border-brand-saffron/30 transition-all duration-300 card-lift"
              >
                <p className="text-xs font-semibold text-brand-saffron uppercase tracking-wider mb-2">Sacred Lineage</p>
                <h3 className="font-serif font-bold text-xl text-brand-maroon mb-2 flex items-center justify-between">
                  About Math
                  <ArrowRight className="w-4 h-4 text-brand-saffron opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-xs text-brand-umber/60 leading-relaxed">
                  Explore the 1,500-year legacy of Sri Adichunchanagiri Mahasamsthana Math and the pontiffs.
                </p>
              </Link>

              <Link
                href="/about/vision-mission"
                className="group p-6 rounded-2xl bg-white border border-brand-maroon/5 shadow-sm hover:shadow-md hover:border-brand-saffron/30 transition-all duration-300 card-lift"
              >
                <p className="text-xs font-semibold text-brand-saffron uppercase tracking-wider mb-2">Guiding Purpose</p>
                <h3 className="font-serif font-bold text-xl text-brand-maroon mb-2 flex items-center justify-between">
                  Vision & Mission
                  <ArrowRight className="w-4 h-4 text-brand-saffron opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-xs text-brand-umber/60 leading-relaxed">
                  Understand our core institutional values, academic rigour, integrity, and inclusivity.
                </p>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
