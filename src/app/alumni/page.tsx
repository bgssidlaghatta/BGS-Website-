"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Reveal, StaggerReveal, ParallaxLayer, motion, staggerContainer, fadeUp, AnimatedCounter } from "@/lib/animations";
import { ArrowRight, GraduationCap, Briefcase, ArrowUpRight, Search, Sparkles } from "lucide-react";

const alumniData = [
  {
    name: "Yaseer Pasha",
    batch: "2006–08",
    designation: "IT",
  },
  {
    name: "Binduja",
    batch: "2008–09",
    designation: "Veterinary",
  },
  {
    name: "Dr. Abhishek",
    batch: "2009–10",
    designation: "MBBS",
  },
  {
    name: "Nalina L",
    batch: "2009–10",
    designation: "Civil Engineer",
  },
  {
    name: "Deepika",
    batch: "2010–11",
    designation: "Physical Design Engineer",
  },
  {
    name: "Lakshmi",
    batch: "2010–11",
    designation: "Wireless Software",
  },
  {
    name: "Girish C R",
    batch: "2010–12",
    designation: "Ph.D. Scholar",
  },
  {
    name: "Dr. Suma S.B",
    batch: "2010–12",
    designation: "MBBS",
  },
  {
    name: "Dr. Jyothi",
    batch: "2012–13",
    designation: "Medical Officer",
  },
  {
    name: "Kishor Kumar",
    batch: "2012–13",
    designation: "B.Sc. Agriculture",
  },
  {
    name: "Sunil K",
    batch: "2012–13",
    designation: "Banker",
  },
  {
    name: "Umesh",
    batch: "2012–13",
    designation: "Pharmacy Officer",
  },
  {
    name: "Abhishek Gowda",
    batch: "2015–16",
    designation: "B.Com Agriculture",
  },
  {
    name: "Bhargav D",
    batch: "2015–16",
    designation: "Team Leader, Excitel",
  },
  {
    name: "Suma V",
    batch: "2017–18",
    designation: "Software Engineer",
  },
];

export default function AlumniPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAlumni = alumniData.filter((alumni) =>
    alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alumni.batch.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alumni.designation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <ParallaxLayer speed={0.3} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <Image
            src="/images/Hero-section-2.png"
            alt="BGS Campus"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </ParallaxLayer>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon-deep via-brand-maroon-deep/70 to-brand-maroon-deep/30" />
        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full pb-20 pt-40">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
              BGS Alumni Network
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-brand-cream mb-6 leading-tight max-w-3xl">
              Once a BGSian, <br />Always a <span className="text-brand-saffron">BGSian.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-brand-cream/80 text-lg max-w-xl mb-8">
              Connect with fellow graduates, give back to your alma mater, and continue to carry the legacy of BGS Public School wherever you go.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="https://forms.gle/kqZzV7jSUaEfsd9N8"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "bg-brand-saffron text-brand-maroon-deep hover:bg-white transition-all shadow-xl font-bold px-8 py-6 text-base btn-ripple inline-flex items-center gap-2")}
              >
                Register as Alumni
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════ WELCOME ════════════════════ */}
      <section className="py-20 md:py-32 bg-brand-cream paper-texture">
        <div className="px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-maroon mb-6 leading-tight">
                Our Pride, Our Legacy.
              </h2>
              <p className="text-brand-umber/70 leading-relaxed mb-6 text-lg">
                Over the past decades, BGS Public School has shaped thousands of minds. Our alumni are spread across the globe, leading organizations, driving innovations, and making a difference in their communities.
              </p>
              <p className="text-brand-umber/70 leading-relaxed mb-8">
                The Alumni Association is built to foster a lifelong relationship between the institution and its graduates. We invite you to stay engaged, mentor the current students, and share in the continued success of your alma mater.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="border-l-2 border-brand-saffron pl-4">
                  <p className="text-4xl font-serif font-bold text-brand-maroon mb-1">
                    <AnimatedCounter value={5000} suffix="+" />
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand-umber/50">Global Alumni</p>
                </div>
                <div className="border-l-2 border-brand-saffron pl-4">
                  <p className="text-4xl font-serif font-bold text-brand-maroon mb-1">
                    <AnimatedCounter value={20} suffix="+" />
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand-umber/50">Years of Legacy</p>
                </div>
              </div>
            </Reveal>
          </div>
          
          <div className="lg:w-1/2 relative">
            <Reveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Hero-section.png"
                  alt="BGS Campus Building"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-brand-maroon/20 mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-saffron text-brand-maroon-deep p-8 rounded-xl shadow-xl max-w-xs hidden md:block">
                <GraduationCap className="w-10 h-10 mb-4 opacity-80" />
                <p className="font-serif font-bold text-xl leading-tight">Building a network of excellence, together.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════ NOTABLE ALUMNI ════════════════════ */}
      <section className="py-20 md:py-32 bg-brand-offwhite">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
                Distinguished Graduates
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-maroon mb-6">
                Meet Our Notable Alumni
              </h2>
              <p className="text-brand-umber/70 leading-relaxed text-lg mb-5">
                From medical healthcare and software architecture to agriculture and civil services, our alumni continue to uphold the prestigious legacy of BGS.
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-saffron/10 border border-brand-saffron/25 text-xs md:text-sm font-medium text-brand-maroon mb-8 shadow-sm">
                <Sparkles className="w-4 h-4 text-brand-saffron shrink-0" />
                <span>
                  Please note: These are <strong>less than 0.5% of our students</strong> whose records we have currently compiled.
                </span>
              </div>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="w-4 h-4 text-brand-umber/40 absolute left-4 top-1/2 -translate-y-1/2" />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, batch, or designation..."
                  className="pl-11 pr-4 h-12 bg-white rounded-full border-brand-maroon/15 shadow-sm text-sm focus:border-brand-saffron"
                />
              </div>
            </div>
          </Reveal>

          {filteredAlumni.length > 0 ? (
            <StaggerReveal staggerDelay={0.05}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAlumni.map((alumni, idx) => {
                  const initial = alumni.name.replace(/^Dr\.\s*/i, "").trim().charAt(0);
                  return (
                    <motion.div
                      key={`${alumni.name}-${idx}`}
                      variants={fadeUp}
                      className="bg-white rounded-2xl p-6 border border-brand-maroon/10 shadow-sm hover:shadow-md card-lift group flex flex-col justify-between transition-all"
                    >
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 rounded-2xl bg-brand-cream border border-brand-maroon/10 flex items-center justify-center shrink-0 group-hover:bg-brand-saffron/20 transition-colors shadow-sm">
                            <span className="font-serif text-xl font-bold text-brand-maroon">
                              {initial}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-serif font-bold text-brand-maroon text-lg group-hover:text-brand-saffron transition-colors leading-snug">
                              {alumni.name}
                            </h3>
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-saffron bg-brand-saffron/10 px-2.5 py-0.5 rounded-full mt-1">
                              <GraduationCap className="w-3.5 h-3.5" />
                              Batch {alumni.batch}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-brand-maroon/5 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-maroon/5 flex items-center justify-center text-brand-saffron shrink-0">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] text-brand-umber/40 uppercase tracking-wider font-semibold">Designation</p>
                          <p className="text-sm font-semibold text-brand-maroon leading-tight">{alumni.designation}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </StaggerReveal>
          ) : (
            <div className="py-12 text-center bg-white rounded-2xl border border-brand-maroon/10 max-w-md mx-auto">
              <p className="text-sm text-brand-umber/60 mb-4">No alumni found matching &ldquo;{searchQuery}&rdquo;</p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-xs font-semibold text-brand-saffron hover:underline"
              >
                Clear Search Filter
              </button>
            </div>
          )}
          
          <Reveal>
            <div className="mt-16 text-center">
              <p className="text-brand-umber/70 text-sm mb-4 font-medium">
                These are less than 0.5% of our students whose records we currently have compiled. Help us complete our records — want to be featured here?
              </p>
              <a 
                href="https://forms.gle/kqZzV7jSUaEfsd9N8" 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }), "border-brand-maroon/20 hover:bg-brand-maroon hover:text-white transition-colors inline-flex items-center gap-2")}
              >
                Share Your Details
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════ REGISTRATION CTA ════════════════════ */}
      <section className="py-24 bg-brand-maroon relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-5" />
        <div className="px-6 md:px-12 max-w-4xl mx-auto text-center relative z-10">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-cream mb-6">
              Join the Alumni Directory
            </h2>
            <p className="text-brand-cream/70 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
              Reconnect with old friends, network with professionals, and stay updated on the latest developments and events at your alma mater. Registration is quick and free.
            </p>
            <a 
              href="https://forms.gle/kqZzV7jSUaEfsd9N8" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "bg-brand-saffron text-brand-maroon-deep hover:bg-white transition-colors shadow-xl group px-8 py-6 text-base btn-ripple inline-flex items-center gap-2 font-bold")}
            >
              Fill Alumni Form
              <ArrowUpRight className="w-5 h-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
