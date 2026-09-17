"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal, StaggerReveal, ParallaxLayer, motion, staggerContainer, fadeUp } from "@/lib/animations";
import { AnimatePresence } from "framer-motion";
import { ArrowRight, X, Briefcase, Bell, Info } from "lucide-react";

interface FacultyMember {
  name: string;
  role: string;
  subject: string;
  qual: string;
  exp: string;
  image: string;
}

interface Department {
  name: string;
  badge: string;
  desc: string;
  accent: string;
  staff: FacultyMember[];
}

const departments: Department[] = [
  {
    name: "Leadership & Coordinators",
    badge: "Academic Leadership",
    desc: "Guiding institutional excellence, curriculum delivery, discipline, and student mentorship across School and PU College.",
    accent: "from-brand-maroon to-brand-maroon-deep",
    staff: [
      {
        name: "Narayanaswami",
        role: "School Academic Coordinator",
        subject: "Administration & High School",
        qual: "M.A, B.Ed",
        exp: "15+ years",
        image: "/images/Faculty%20image/Narayanaswami_school_coordinator.png",
      },
      {
        name: "Natraj",
        role: "School Academic Coordinator",
        subject: "Administration & Curriculum",
        qual: "M.Sc, B.Ed",
        exp: "14+ years",
        image: "/images/Faculty%20image/Natraj_School_Coordinator.png",
      },
      {
        name: "Vijay Kumar GT",
        role: "Academic Coordinator",
        subject: "Lecturer in English",
        qual: "M.A, B.Ed",
        exp: "12+ years",
        image: "/images/Faculty%20image/Vijay%20Kumar%20GT_English_college_scince.png",
      },
      {
        name: "Ambika",
        role: "Nursery & Pre-Primary Coordinator",
        subject: "Early Childhood Education",
        qual: "B.Ed, ECE Certified",
        exp: "10+ years",
        image: "/images/Faculty%20image/Ambika_Nersacry_coordinator.png",
      },
      {
        name: "Madhu Kumar",
        role: "HOD of Commerce & Lecturer",
        subject: "Accountancy & Taxation",
        qual: "M.Com, B.Ed",
        exp: "12+ years",
        image: "/images/Faculty%20image/Madhu%20kumar_Accountancy_HOD%20of%20commerece.png",
      },
      {
        name: "Science HOD",
        role: "HOD of Science & Senior Lecturer",
        subject: "Biology & Science Administration",
        qual: "M.Sc, B.Ed",
        exp: "16+ years",
        image: "/images/Faculty%20image/Science_HOD_Biology.png",
      },
    ],
  },
  {
    name: "PU Science (PCMB/PCMCs)",
    badge: "Pre-University Science",
    desc: "Comprehensive PU Board curriculum integrated with intensive KCET, NEET & JEE competitive examination training.",
    accent: "from-brand-saffron to-brand-saffron-light",
    staff: [
      {
        name: "Physics Faculty (Senior)",
        role: "Senior Lecturer in Physics",
        subject: "Physics",
        qual: "M.Sc, B.Ed",
        exp: "14+ years",
        image: "/images/Faculty%20image/Physics.png",
      },
      {
        name: "Physics Faculty",
        role: "Lecturer in Physics",
        subject: "Physics",
        qual: "M.Sc, B.Ed",
        exp: "8+ years",
        image: "/images/Faculty%20image/Physics-2.png",
      },
      {
        name: "Hari Krishna",
        role: "Lecturer in Chemistry",
        subject: "Chemistry",
        qual: "M.Sc, B.Ed",
        exp: "10+ years",
        image: "/images/Faculty%20image/Hari%20Krishna_Chemistry.png",
      },
      {
        name: "Uma Shankar",
        role: "Lecturer in Chemistry",
        subject: "Chemistry",
        qual: "M.Sc, B.Ed",
        exp: "11+ years",
        image: "/images/Faculty%20image/Uma%20Shankar_Chemistry.png",
      },
      {
        name: "Ramalingaiah",
        role: "Lecturer in Chemistry",
        subject: "Chemistry",
        qual: "M.Sc, B.Ed",
        exp: "10+ years",
        image: "/images/Faculty%20image/Ramalingaiah_Chemistry.png",
      },
      {
        name: "Chaithra",
        role: "Lecturer in Chemistry",
        subject: "Chemistry",
        qual: "M.Sc, B.Ed",
        exp: "7+ years",
        image: "/images/Faculty%20image/Chaithra_Chemistry.png",
      },
      {
        name: "Shashikala GT",
        role: "Lecturer in Mathematics",
        subject: "Mathematics",
        qual: "M.Sc, B.Ed",
        exp: "12+ years",
        image: "/images/Faculty%20image/Shashikala%20GT_Mathematics.png",
      },
      {
        name: "Tejaswini",
        role: "Lecturer in Mathematics",
        subject: "Mathematics",
        qual: "M.Sc, B.Ed",
        exp: "9+ years",
        image: "/images/Faculty%20image/Tejaswini_Mathematics.png",
      },
      {
        name: "Science HOD",
        role: "HOD of Science & Senior Lecturer in Biology",
        subject: "Biology (PCMB) / Botany / Zoology",
        qual: "M.Sc, B.Ed",
        exp: "16+ years",
        image: "/images/Faculty%20image/Science_HOD_Biology.png",
      },
      {
        name: "Bhargav",
        role: "Lecturer in Biology",
        subject: "Biology",
        qual: "M.Sc, B.Ed",
        exp: "8+ years",
        image: "/images/Faculty%20image/Bhargav_Biology.png",
      },
      {
        name: "Ashwini",
        role: "Lecturer in Biology",
        subject: "Biology",
        qual: "M.Sc, B.Ed",
        exp: "8+ years",
        image: "/images/Faculty%20image/Ashwini_Biology.png",
      },
      {
        name: "Architha",
        role: "Lecturer in Computer Science",
        subject: "Computer Science (PCMCs)",
        qual: "MCA, B.Ed",
        exp: "8+ years",
        image: "/images/Faculty%20image/Architha_Computer%20Science.png",
      },
    ],
  },
  {
    name: "PU Commerce",
    badge: "Pre-University Commerce",
    desc: "Rigorous commerce education covering Accountancy, Business Studies, Economics, and Computer Science with CA Foundation orientation.",
    accent: "from-brand-gold to-brand-saffron",
    staff: [
      {
        name: "Madhu Kumar",
        role: "HOD of Commerce & Lecturer",
        subject: "Accountancy",
        qual: "M.Com, B.Ed",
        exp: "12+ years",
        image: "/images/Faculty%20image/Madhu%20kumar_Accountancy_HOD%20of%20commerece.png",
      },
      {
        name: "Naveen Kumar",
        role: "Lecturer in Commerce",
        subject: "Business Studies & Accountancy",
        qual: "M.Com, B.Ed",
        exp: "9+ years",
        image: "/images/Faculty%20image/Naveen%20kumar_Business&Accountancy.png",
      },
      {
        name: "Chaithra",
        role: "Lecturer in Business Studies",
        subject: "Business Studies",
        qual: "M.Com, B.Ed",
        exp: "8+ years",
        image: "/images/Faculty%20image/Chaithra_Business.png",
      },
      {
        name: "Shashikala",
        role: "Lecturer in Economics",
        subject: "Economics",
        qual: "M.A (Economics), B.Ed",
        exp: "10+ years",
        image: "/images/Faculty%20image/Gemini_Generated_Image_ybuixrybuixrybui.png",
      },
      {
        name: "Swamitha",
        role: "Lecturer in Computer Science",
        subject: "Computer Science (Commerce)",
        qual: "M.Sc (CS), B.Ed",
        exp: "7+ years",
        image: "/images/Faculty%20image/Swamitha_Computer%20Science.png",
      },
    ],
  },
  {
    name: "Languages",
    badge: "Languages & Humanities",
    desc: "Developing eloquent communication, literary depth, grammar proficiency, and cultural values in English and Kannada.",
    accent: "from-brand-maroon to-brand-saffron",
    staff: [
      {
        name: "Vijay Kumar GT",
        role: "Lecturer in English & Academic Coordinator",
        subject: "English (PU Science)",
        qual: "M.A, B.Ed",
        exp: "12+ years",
        image: "/images/Faculty%20image/Vijay%20Kumar%20GT_English_college_scince.png",
      },
      {
        name: "Vijay Venkatesh",
        role: "Lecturer in English",
        subject: "English (PU Commerce)",
        qual: "M.A, B.Ed",
        exp: "11+ years",
        image: "/images/Faculty%20image/Vijay%20Venktesh_English_college_commerece.png",
      },
      {
        name: "Prakash",
        role: "Faculty in English",
        subject: "English (High School)",
        qual: "M.A, B.Ed",
        exp: "9+ years",
        image: "/images/Faculty%20image/Prakash_English.png",
      },
      {
        name: "Shivamuthu",
        role: "Faculty in Kannada",
        subject: "Kannada Language & Literature",
        qual: "M.A, B.Ed",
        exp: "12+ years",
        image: "/images/Faculty%20image/Shivamuthu_Kannada.png",
      },
      {
        name: "Kannada Faculty (Senior)",
        role: "Senior Faculty in Kannada",
        subject: "Kannada Literature & Grammar",
        qual: "M.A, B.Ed",
        exp: "14+ years",
        image: "/images/Faculty%20image/Kannada.png",
      },
    ],
  },
  {
    name: "High School & Primary",
    badge: "Foundational & School Wing",
    desc: "Laying solid conceptual clarity, ethical foundations, and cognitive development from early childhood to SSLC.",
    accent: "from-brand-saffron to-brand-gold",
    staff: [
      {
        name: "Narayanaswami",
        role: "School Academic Coordinator",
        subject: "School Administration",
        qual: "M.A, B.Ed",
        exp: "15+ years",
        image: "/images/Faculty%20image/Narayanaswami_school_coordinator.png",
      },
      {
        name: "Natraj",
        role: "School Academic Coordinator",
        subject: "High School Curriculum",
        qual: "M.Sc, B.Ed",
        exp: "14+ years",
        image: "/images/Faculty%20image/Natraj_School_Coordinator.png",
      },
      {
        name: "Ambika",
        role: "Nursery & Pre-Primary Coordinator",
        subject: "Early Childhood Foundation",
        qual: "B.Ed, ECE Certified",
        exp: "10+ years",
        image: "/images/Faculty%20image/Ambika_Nersacry_coordinator.png",
      },
    ],
  },
];

export default function FacultyPage() {
  const [showVacancyModal, setShowVacancyModal] = useState(false);

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
        <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon-deep via-brand-maroon-deep/70 to-transparent" />
        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full pb-20 pt-40">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
              Our Educators & Mentors
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-brand-cream mb-6 leading-tight max-w-3xl">
              Teachers Who Stay <br />Until the Last <span className="text-brand-saffron">Doubt Is Cleared.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-brand-cream/80 text-base md:text-lg max-w-2xl font-light">
              Meet our distinguished team of experienced lecturers, subject matter specialists, and coordinators dedicated to academic excellence and student success.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════ KEY HIGHLIGHTS ════════════════════ */}
      <section className="bg-brand-maroon-deep text-white border-b border-white/10 py-10">
        <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="border-r border-white/10 last:border-r-0 pr-4">
            <p className="text-3xl md:text-4xl font-serif font-bold text-brand-saffron">25+</p>
            <p className="text-xs text-white/70 uppercase tracking-wider mt-1 font-semibold">Distinguished Faculty</p>
          </div>
          <div className="border-r border-white/10 last:border-r-0 pr-4">
            <p className="text-3xl md:text-4xl font-serif font-bold text-brand-saffron">10+ Yrs</p>
            <p className="text-xs text-white/70 uppercase tracking-wider mt-1 font-semibold">Average Experience</p>
          </div>
          <div className="border-r border-white/10 last:border-r-0 pr-4">
            <p className="text-3xl md:text-4xl font-serif font-bold text-brand-saffron">100%</p>
            <p className="text-xs text-white/70 uppercase tracking-wider mt-1 font-semibold">B.Ed & Master&apos;s Qualified</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-serif font-bold text-brand-saffron">1 : 20</p>
            <p className="text-xs text-white/70 uppercase tracking-wider mt-1 font-semibold">Teacher-Student Ratio</p>
          </div>
        </div>
      </section>

      {/* ════════════════════ DEPARTMENTS DIRECTORY ════════════════════ */}
      <section className="py-20 md:py-28 bg-brand-cream paper-texture">
        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
          {/* Section Header */}
          <Reveal>
            <div className="max-w-2xl mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-3">
                Department Directory
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-maroon mb-4">
                Experienced. Dedicated. Accountable.
              </h2>
              <p className="text-brand-umber/70 leading-relaxed text-sm md:text-base">
                Every faculty member at BGS combines academic mastery with an unwavering commitment to mentoring students. Explore our educators across PU College and High School.
              </p>
            </div>
          </Reveal>

          {/* Department Sections */}
          <div className="space-y-24">
            {departments.map((dept, di) => (
              <Reveal key={di}>
                <div>
                  {/* Department Header */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-brand-maroon/10">
                    <div>
                      <div className={`h-1 w-16 bg-gradient-to-r ${dept.accent} rounded-full mb-3 line-grow-in`} />
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-maroon">
                          {dept.name}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full bg-brand-saffron/15 text-brand-maroon text-[11px] font-bold tracking-wider uppercase">
                          {dept.badge}
                        </span>
                      </div>
                      <p className="text-sm text-brand-umber/60 max-w-xl">{dept.desc}</p>
                    </div>
                    <p className="ledger-data text-xs text-brand-umber/40 whitespace-nowrap">
                      <strong className="text-brand-maroon font-semibold">{dept.staff.length}</strong> faculty members
                    </p>
                  </div>

                  {/* Staff Grid */}
                  <StaggerReveal staggerDelay={0.05}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                      {dept.staff.map((member, mi) => (
                        <motion.div
                          key={`${member.name}-${member.subject}-${mi}`}
                          variants={fadeUp}
                          className="group bg-brand-offwhite rounded-2xl overflow-hidden border border-brand-maroon/10 hover:border-brand-saffron/40 transition-all duration-300 shadow-sm hover:shadow-xl card-lift flex flex-col"
                        >
                          {/* Portrait Photo */}
                          <div className="aspect-[4/5] bg-gradient-to-br from-brand-cream-dark via-brand-cream to-brand-offwhite relative overflow-hidden shrink-0">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            {/* Subtle hover gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                              <span className="text-[10px] text-white/90 font-medium tracking-wide">
                                {member.role}
                              </span>
                            </div>
                          </div>

                          {/* Details */}
                          <div className="p-4 flex-1 flex flex-col justify-between">
                            <div>
                              <div className="inline-block px-2 py-0.5 rounded-md bg-brand-saffron/15 text-brand-maroon text-[10px] font-bold uppercase tracking-wider mb-2">
                                {member.subject.split("(")[0].trim()}
                              </div>

                              <h4 className="font-serif font-bold text-sm md:text-base text-brand-maroon group-hover:text-brand-saffron transition-colors leading-snug line-clamp-2">
                                {member.name}
                              </h4>

                              <p className="text-[11px] text-brand-umber/70 mt-1 line-clamp-1">
                                {member.role}
                              </p>
                            </div>

                            <div className="pt-3 mt-3 border-t border-brand-maroon/5 flex items-center justify-between text-[10px] ledger-data text-brand-umber/60">
                              <span className="font-medium text-brand-maroon/80">{member.qual}</span>
                              <span className="text-brand-saffron font-bold">{member.exp}</span>
                            </div>
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-maroon mb-4">
              Want to Teach at BGS?
            </h2>
            <p className="text-brand-umber/70 mb-8 text-base md:text-lg max-w-xl mx-auto">
              We&apos;re always looking for passionate educators who believe teaching is about 
              changing lives, not just covering syllabus. If that&apos;s you, let&apos;s talk.
            </p>
            <button
              onClick={() => setShowVacancyModal(true)}
              className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "group shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 mt-2 px-10 py-6 text-base btn-ripple cursor-pointer inline-flex items-center gap-2")}
            >
              Apply for a Teaching Position
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════ VACANCY STATUS MODAL ════════════════════ */}
      <AnimatePresence>
        {showVacancyModal && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowVacancyModal(false)}
              className="absolute inset-0 bg-[#08233F]/80 backdrop-blur-sm transition-all duration-300"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-brand-maroon/10 max-h-[92vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-5 bg-brand-maroon text-white border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-brand-saffron shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-white leading-tight">
                      Recruitment & Vacancies Notice
                    </h3>
                    <p className="text-[11px] text-brand-saffron uppercase tracking-widest font-semibold">
                      BGS Public School & PU College, Sidlaghatta
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowVacancyModal(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-left">
                {/* Primary Alert Notice */}
                <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-800 shrink-0 mt-0.5">
                    <Bell className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-200/60 text-amber-900 text-[11px] font-bold tracking-wider uppercase">
                      <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                      Notice from Administration
                    </div>
                    <p className="text-gray-900 font-bold text-base leading-snug">
                      We don&apos;t have any vacancies for now.
                    </p>
                    <p className="text-gray-700 text-sm md:text-[14.5px] leading-relaxed">
                      Please be active on this website to get early news about vacancies. We will post vacancies with required qualification and experience based on requirements for both <strong className="text-gray-900 font-semibold">teaching and non-teaching</strong> positions. Once we have any requirement, the application portal will be live.
                    </p>
                  </div>
                </div>

                {/* Additional Guidance */}
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-3 text-xs text-blue-950/80 leading-relaxed">
                  <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <p>
                    All prospective openings are announced with clear eligibility parameters, subject specializations, job descriptions, and submission deadlines right here on the official portal.
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-5 md:px-8 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                <p className="text-xs text-gray-500 text-center sm:text-left">
                  General queries: <a href="mailto:bgsadmin5@gmail.com" className="text-brand-maroon font-semibold hover:underline">bgsadmin5@gmail.com</a> • <span className="font-semibold text-gray-700">+91 99019 23097</span>
                </p>
                <button
                  onClick={() => setShowVacancyModal(false)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-brand-maroon text-white text-sm font-semibold hover:bg-brand-maroon-deep transition-colors cursor-pointer"
                >
                  Understood
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
