"use client";

import Image from "next/image";
import { Reveal, staggerContainer, fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { BookOpen, TreePine, Heart } from "lucide-react";

export default function FounderPage() {
  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative py-28 md:py-36 bg-brand-cream paper-texture overflow-hidden border-b border-brand-maroon/10">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="order-2 lg:order-1">
              <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-6">
                Our Founder
              </motion.p>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-maroon mb-6 leading-tight">
                Paramapoojya Jagadguru Padmabhushana
                <span className="block text-brand-saffron mt-2 text-3xl md:text-4xl lg:text-5xl">
                  Sri Sri Sri Dr. Balagangadharanatha Mahaswamiji
                </span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-brand-umber/70 leading-relaxed max-w-xl">
                A visionary spiritual leader whose profound dedication to education, healthcare, and social empowerment laid the foundation for the Sri Adichunchanagiri Shikshana Trust.
              </motion.p>
            </motion.div>

            {/* Portrait Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 relative max-w-md mx-auto lg:ml-auto w-full"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-brand-maroon-deep shadow-2xl border-4 border-white/20 relative group">
                <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-10 mix-blend-overlay" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-brand-cream/40 bg-brand-maroon">
                  <span className="text-sm font-mono mb-4 border border-brand-cream/20 px-4 py-2 rounded-lg backdrop-blur-sm">Image Placeholder</span>
                  <p className="text-xs">
                    Please place the official portrait of the Founder Mahaswamiji here.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-xl border border-brand-maroon/5 z-10 max-w-[280px]">
                <p className="font-serif font-bold text-brand-maroon text-lg leading-tight italic">
                  &ldquo;Service to mankind is service to God.&rdquo;
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════ THE LEGACY ════════════════════ */}
      <section className="py-28 bg-white">
        <div className="px-6 md:px-12 max-w-4xl mx-auto">
          <Reveal>
            <div className="prose prose-lg md:prose-xl text-brand-umber/70 leading-relaxed mx-auto">
              <p className="first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:text-brand-maroon first-letter:mr-3 first-letter:float-left">
                The 71st Pontiff of the Sri Adichunchanagiri Math, His Holiness Sri Sri Sri Dr. Balagangadharanatha Mahaswamiji, was a divine incarnation of compassion and progress. He took over the peetha in 1974 at a very young age and immediately recognized that true spiritual awakening must be accompanied by social and educational empowerment.
              </p>
              <p>
                Under his visionary leadership, the Math underwent a profound transformation from a purely spiritual center into a dynamic hub of social service. He believed that poverty and ignorance could only be eradicated through the light of knowledge and the care of modern healthcare.
              </p>
              <blockquote className="border-l-4 border-brand-saffron pl-6 my-10 italic text-brand-maroon bg-brand-cream/50 p-6 rounded-r-2xl">
                His singular vision resulted in the establishment of the Sri Adichunchanagiri Shikshana Trust, which today operates over 500 educational institutions, transforming the lives of over 1.5 lakh students annually.
              </blockquote>
              <p>
                He placed special emphasis on rural education, ensuring that world-class facilities and modern teaching methodologies reached the deepest parts of Karnataka. Beyond education, his monumental efforts in environmental conservation (afforestation) and Anna Dasoha (free feeding) earned him the highest civilian honors, including the prestigious Padma Bhushan.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════ PILLARS OF HIS VISION ════════════════════ */}
      <section className="py-28 bg-brand-maroon-deep text-brand-cream">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                The Core Philosophy
              </h2>
              <div className="w-20 h-1 bg-brand-saffron mx-auto rounded-full" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: BookOpen,
                title: "Jnana Dasoha",
                desc: "The gift of knowledge. Establishing schools and colleges to ensure education reaches every child, breaking the cycle of poverty."
              },
              {
                icon: Heart,
                title: "Anna & Arogya Dasoha",
                desc: "The gift of food and health. Providing free meals and establishing state-of-the-art hospitals to serve the rural populace."
              },
              {
                icon: TreePine,
                title: "Parisara Dasoha",
                desc: "The gift of environment. Massive afforestation drives planting millions of trees to protect Mother Nature for future generations."
              }
            ].map((pillar, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors h-full">
                  <div className="w-16 h-16 bg-brand-saffron/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <pillar.icon className="w-8 h-8 text-brand-saffron" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{pillar.title}</h3>
                  <p className="text-white/60 leading-relaxed">
                    {pillar.desc}
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
