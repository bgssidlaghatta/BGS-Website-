"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal, motion, staggerContainer, fadeUp } from "@/lib/animations";
import { ArrowRight, GraduationCap, MapPin, Briefcase } from "lucide-react";

const alumniData = [
  {
    name: "Alumni Name",
    batch: "Class of 2018",
    role: "Software Engineer",
    company: "Tech Corp",
    location: "Bangalore, India",
    image: "A"
  },
  {
    name: "Alumni Name",
    batch: "Class of 2016",
    role: "Doctor",
    company: "City Hospital",
    location: "Mysore, India",
    image: "A"
  },
  {
    name: "Alumni Name",
    batch: "Class of 2019",
    role: "Entrepreneur",
    company: "Startup Inc",
    location: "Mumbai, India",
    image: "A"
  },
  {
    name: "Alumni Name",
    batch: "Class of 2015",
    role: "Research Scholar",
    company: "IISc",
    location: "Bangalore, India",
    image: "A"
  },
  {
    name: "Alumni Name",
    batch: "Class of 2020",
    role: "CA Finalist",
    company: "Finance Firm",
    location: "Chennai, India",
    image: "A"
  },
  {
    name: "Alumni Name",
    batch: "Class of 2017",
    role: "Civil Servant",
    company: "Govt. of Karnataka",
    location: "Bangalore, India",
    image: "A"
  }
];

export default function AlumniPage() {
  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <Image
          src="/images/campus-hero.png"
          alt="BGS Campus"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon-deep via-brand-maroon-deep/70 to-brand-maroon-deep/30" />
        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full pb-20 pt-40">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
              BGS Alumni Network
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-brand-cream mb-6 leading-tight max-w-3xl">
              Once a BGSian, <br />Always a <span className="text-brand-saffron">BGSian.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-brand-cream/80 text-lg max-w-xl">
              Connect with fellow graduates, give back to your alma mater, and continue to carry the legacy of BGS Public School wherever you go.
            </motion.p>
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
                  <p className="text-4xl font-serif font-bold text-brand-maroon mb-1">5,000+</p>
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand-umber/50">Global Alumni</p>
                </div>
                <div className="border-l-2 border-brand-saffron pl-4">
                  <p className="text-4xl font-serif font-bold text-brand-maroon mb-1">20+</p>
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand-umber/50">Years of Legacy</p>
                </div>
              </div>
            </Reveal>
          </div>
          
          <div className="lg:w-1/2 relative">
            <Reveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/classroom.png"
                  alt="Students in classroom"
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
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
                Success Stories
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-maroon mb-6">
                Meet Our Notable Alumni
              </h2>
              <p className="text-brand-umber/60 leading-relaxed text-lg">
                From pioneering startups to serving the nation, our alumni are making their mark in diverse fields. Here are just a few of our proud graduates.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumniData.map((alumni, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-white rounded-2xl p-6 border border-brand-maroon/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-brand-cream flex items-center justify-center shrink-0">
                      <span className="font-serif text-2xl font-bold text-brand-maroon/20">{alumni.image}</span>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-brand-maroon text-lg group-hover:text-brand-saffron transition-colors">{alumni.name}</h3>
                      <p className="text-sm font-medium text-brand-saffron">{alumni.batch}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-4 h-4 text-brand-umber/40 mt-1 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-brand-umber/90">{alumni.role}</p>
                        <p className="text-xs text-brand-umber/50">{alumni.company}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-brand-umber/40 mt-0.5 shrink-0" />
                      <p className="text-sm text-brand-umber/70">{alumni.location}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal>
            <div className="mt-16 text-center">
              <p className="text-brand-umber/50 text-sm mb-4">Want to be featured in our alumni spotlight?</p>
              <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }), "border-brand-maroon/20 hover:bg-brand-maroon hover:text-white transition-colors")}>
                Share Your Story
              </Link>
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
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-brand-saffron text-brand-maroon-deep hover:bg-white transition-colors shadow-xl group px-8 py-6 text-base")}>
              Register Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
