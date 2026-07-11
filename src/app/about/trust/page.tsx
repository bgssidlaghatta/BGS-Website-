"use client";

import Image from "next/image";
import { Reveal, staggerContainer, fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { Building2, GraduationCap, HeartHandshake } from "lucide-react";

export default function TrustPage() {
  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative py-28 md:py-36 bg-brand-maroon-deep text-brand-cream overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(242,183,5,0.15)_0%,_transparent_50%)]" />
        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-6">
              Our Guiding Force
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              Sri Adichunchanagiri <br className="hidden md:block" /> Shikshana Trust (R)
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-lg text-brand-cream/60 max-w-2xl mx-auto leading-relaxed">
              Managing over 500 educational and charitable institutions across India and abroad, shaping the future of over 1.5 lakh students every year.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════ CHAIRMAN MESSAGE — immersive ════════════════════ */}
      <section className="relative overflow-hidden bg-brand-cream border-y border-brand-maroon/10">
        <div className="grid lg:grid-cols-2">
          {/* Portrait side */}
          <div className="relative h-[500px] lg:h-auto bg-brand-maroon-deep flex items-center justify-center p-16">
            <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-10 mix-blend-overlay" />
            <div className="relative w-full max-w-xs z-10">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-brand-maroon border-2 border-brand-cream/10 shadow-2xl">
                <div className="w-full h-full flex items-center justify-center text-brand-cream/20 font-mono text-xs p-6 text-center bg-gradient-to-br from-brand-maroon to-brand-maroon-deep">
                  President&apos;s official portrait will be placed here upon receipt
                </div>
              </div>
              {/* Name card overlay */}
              <div className="absolute -bottom-6 -right-6 bg-brand-offwhite rounded-xl p-5 shadow-2xl border border-brand-maroon/5 min-w-[200px]">
                <p className="font-serif text-sm font-bold text-brand-maroon leading-tight">Sri Sri Sri Dr.</p>
                <p className="font-serif text-sm font-bold text-brand-maroon leading-tight">Nirmalanandanatha</p>
                <p className="font-serif text-sm font-bold text-brand-maroon leading-tight mb-1">Maha Swamiji</p>
                <p className="text-[10px] text-brand-saffron font-semibold uppercase tracking-widest">President, SAST</p>
              </div>
            </div>
          </div>

          {/* Message side */}
          <div className="bg-brand-cream paper-texture px-8 md:px-16 py-20 lg:py-28 flex items-center">
            <div className="relative z-10 max-w-xl">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
                  President&apos;s Message
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-maroon mb-8 leading-tight">
                  &ldquo;Education is not preparation for life — education is life itself.&rdquo;
                </h2>
                <div className="space-y-6 text-brand-umber/70 leading-relaxed text-lg">
                  <p>
                    Under the divine guidance and blessings of the 71st Pontiff, the Trust has grown into a banyan tree of knowledge. As the 72nd Pontiff and President of the Trust, Sri Sri Sri Dr. Nirmalanandanatha Mahaswamiji continues this incredible legacy with a focus on integrating modern scientific temperament with ancient spiritual wisdom.
                  </p>
                  <p>
                    With a background in engineering from a premier institute, Mahaswamiji brings a unique blend of technological foresight and spiritual depth to the Trust's educational initiatives, ensuring that BGS institutions remain at the cutting edge of modern education while staying rooted in timeless values.
                  </p>
                  <p className="italic text-brand-maroon/40 text-sm border-t border-brand-maroon/10 pt-6 mt-6">
                    Full official message will be published upon receipt from the BGS administration.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ TRUST SCALE ════════════════════ */}
      <section className="py-28 md:py-36 bg-white">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-maroon mb-4">
                A Legacy of Scale and Impact
              </h2>
              <p className="text-brand-umber/60 max-w-2xl mx-auto">
                SAST doesn't just run schools; it builds entire ecosystems of learning and care.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                stat: "500+",
                label: "Institutions",
                desc: "Ranging from primary schools in rural areas to world-class medical and engineering colleges."
              },
              {
                icon: GraduationCap,
                stat: "1.5 Lakh+",
                label: "Students",
                desc: "Young minds being nurtured annually across various disciplines and levels of education."
              },
              {
                icon: HeartHandshake,
                stat: "Millions",
                label: "Lives Touched",
                desc: "Through free healthcare, environmental initiatives, and community service programs."
              }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="text-center p-10 rounded-3xl bg-brand-offwhite border border-brand-maroon/5 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-20 h-20 bg-brand-cream rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:-translate-y-2 transition-transform">
                    <item.icon className="w-10 h-10 text-brand-saffron" />
                  </div>
                  <h3 className="text-4xl font-serif font-bold text-brand-maroon mb-2">{item.stat}</h3>
                  <p className="text-sm font-semibold uppercase tracking-widest text-brand-saffron mb-4">{item.label}</p>
                  <p className="text-brand-umber/60 leading-relaxed text-sm">
                    {item.desc}
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
