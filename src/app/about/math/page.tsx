"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal, StaggerReveal, ParallaxLayer, motion, staggerContainer, fadeUp } from "@/lib/animations";
import { AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Sun, 
  Flame, 
  Utensils, 
  TreePine, 
  Waves, 
  BookOpen, 
  HeartHandshake, 
  GraduationCap, 
  Cpu, 
  ScrollText, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Feather,
  Compass,
  Award,
  Users
} from "lucide-react";

const heroSlides = [
  {
    image: "/images/math/kshethra.jpg",
    title: "Sri Kshetra Adichunchanagiri",
    subtitle: "Sacred Hill, Holy Kalyani & Ancient Natha Seat",
    badge: "2,000+ Years Sacred Heritage",
  },
  {
    image: "/images/math/adichunchanagiri-view.webp",
    title: "Sri Kalabhairaveshwara Swamy Sanctum",
    subtitle: "The Divine Presiding Deity of Sri Kshetra",
    badge: "Maha Kshetra Sanctum",
  },
  {
    image: "/images/math/temple-shrine.jpg",
    title: "Majestic White Granite Rajagopura",
    subtitle: "Monumental Dravidian & Vedic Temple Architecture",
    badge: "Architectural Splendour",
  },
];

export default function AboutMathPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <>
      {/* ════════════════════ FULL-SCREEN SLIDING HERO ════════════════════ */}
      <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-black text-white pt-28 pb-10">
        {/* Full-bleed background sliding images covering entire hero */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                fill
                priority
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          {/* Light atmospheric overlay so images are vivid and visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/40" />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Center Text Content */}
        <div className="relative z-10 px-6 md:px-12 max-w-6xl mx-auto w-full my-auto py-16 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            {/* Active Slide Dynamic Badge */}
            <motion.div
              key={`badge-${currentSlide}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <span className="inline-block text-xs font-semibold text-brand-saffron uppercase tracking-[0.25em] bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-brand-saffron/40 shadow-lg">
                {heroSlides[currentSlide].badge}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-[1.08] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
            >
              <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">Sri Adichunchanagiri</span> <br />
              <span className="text-brand-saffron drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">Mahasamsthana Math</span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="h-1 w-28 bg-gradient-to-r from-transparent via-brand-saffron to-transparent mx-auto mb-8 shadow-sm"
            />

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] font-medium"
            >
              Rooted in two millennia of spiritual resonance and over 1,500 years of unbroken monastic tradition — an illustrious beacon where timeless Vedic wisdom seamlessly unites with modern science, rural upliftment, and selfless humanitarian service.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Carousel Controls & Active Slide Details */}
        <div className="relative z-10 px-6 md:px-12 max-w-6xl mx-auto w-full pt-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/20">
            {/* Indicators & Slide Title */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                      idx === currentSlide
                        ? "w-10 bg-brand-saffron shadow-lg shadow-brand-saffron/50"
                        : "w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-brand-cream/70 font-mono">
                0{currentSlide + 1} / 0{heroSlides.length}
              </span>
              <span className="text-xs sm:text-sm font-serif text-white pl-3 border-l border-white/20 drop-shadow">
                {heroSlides[currentSlide].title} — <span className="text-brand-cream/70 font-sans text-xs">{heroSlides[currentSlide].subtitle}</span>
              </span>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════ SACRED ORIGINS & PANCHALINGA ════════════════════ */}
      <section className="py-28 md:py-36 bg-white">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-3">
                Sacred Antiquity
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-maroon leading-tight mb-6">
                Sri Kshetra: The Sanctified Seat of Lord Shiva & The Natha Tradition
              </h2>
              <div className="h-[2px] w-16 bg-brand-saffron mb-6" />
              <p className="text-brand-umber/70 text-lg leading-relaxed">
                Perched gracefully on a sacred rocky hill in Nagamangala taluk, Mandya district — approximately 63 miles west of Bengaluru — lies Sri Kshetra Adichunchanagiri. For over two millennia, this sanctified landscape has reverberated with cosmic energy, where sacred yagnas, silent contemplation, and deep reverence for mother nature established an enduring foundation of peace and righteousness.
              </p>
            </div>
          </Reveal>

          {/* Lore & Panchalinga Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Reveal>
              <div className="bg-brand-cream/60 rounded-2xl p-8 border border-brand-maroon/10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-maroon/10 flex items-center justify-center text-brand-maroon mb-6">
                    <Flame className="w-6 h-6 text-brand-saffron" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-maroon mb-4">
                    The Divine Penance & Origin
                  </h3>
                  <p className="text-brand-umber/70 text-sm leading-relaxed space-y-3">
                    Ancient lore recounts that Lord Shiva engaged in intense austerity at Sri Kshetra. During this cosmic tapasya, the Supreme Lord vanquished two unruly demons, Chuncha and Kancha, who had long perturbed the local sages and seekers. 
                  </p>
                  <p className="text-brand-umber/70 text-sm leading-relaxed mt-3">
                    Upon completing his penance, Lord Shiva consecrated a Siddayogi and inaugurated the revered <strong>Natha tradition</strong>, enjoining him to cultivate righteousness (Dharma), protect seekers, and nurture moral order throughout society.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-brand-maroon/10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-saffron">
                    Protecting Deities
                  </span>
                  <p className="text-sm font-medium text-brand-maroon mt-1">
                    Lord Kalabhyraveshwaraswamy (Manifestation of Shiva) & Goddess Parvathi as Sri Stambambike
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-brand-cream/60 rounded-2xl p-8 border border-brand-maroon/10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-maroon/10 flex items-center justify-center text-brand-maroon mb-6">
                    <Sun className="w-6 h-6 text-brand-saffron" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-maroon mb-4">
                    Panchalinga Kshetra
                  </h3>
                  <p className="text-brand-umber/70 text-sm leading-relaxed mb-6">
                    Lord Shiva vowed an eternal presence at Adichunchanagiri, manifesting in the divine form of the <strong>Panchalingas</strong>, transforming the holy hill into a celebrated pilgrimage destination:
                  </p>
                  
                  <ul className="space-y-2.5">
                    {[
                      { name: "Lord Gangadhareshwaraswamy", desc: "The Supreme Presiding Deity of the Kshetra" },
                      { name: "Lord Chandramouleshwaraswamy", desc: "Symbol of tranquility and lunar grace" },
                      { name: "Lord Malleshwaraswamy", desc: "Bestower of fortitude and auspiciousness" },
                      { name: "Lord Siddeshwaraswamy", desc: "The granter of spiritual attainments (Siddhis)" },
                      { name: "Lord Someshwaraswamy", desc: "The protector and source of nectarous bliss" },
                    ].map((linga, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs bg-white/80 p-2.5 rounded-lg border border-brand-maroon/5">
                        <span className="font-mono text-brand-saffron font-bold text-[11px] shrink-0 mt-0.5">0{idx + 1}.</span>
                        <div>
                          <strong className="text-brand-maroon font-serif text-sm">{linga.name}</strong>
                          <p className="text-brand-umber/60 text-[11px]">{linga.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════ SACRED ECOLOGY & LIVING TRADITIONS ════════════════════ */}
      <section className="py-24 md:py-32 bg-brand-offwhite border-t border-brand-maroon/5">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-3">
                Living Traditions
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-maroon mb-4">
                Sacred Nature & Boundless Compassion
              </h2>
              <p className="text-brand-umber/60 text-sm md:text-base">
                Sri Kshetra exemplifies harmony between nature and spirit — where sacred waters heal, peacocks roam freely, and no hungry seeker ever leaves without food.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.05}>
              <div className="bg-white rounded-2xl p-8 border border-brand-maroon/5 shadow-sm hover:shadow-md transition-all duration-300 card-lift h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mb-6">
                  <Utensils className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-maroon mb-3">
                  Annadani Math
                </h3>
                <p className="text-sm text-brand-umber/70 leading-relaxed mb-4 flex-1">
                  Renowned across India as the <em>&ldquo;Annadani Math&rdquo;</em>, the monastery serves freshly prepared, sanctified food (Prasada) to more than <strong>20,000 devotees, pilgrims, and students every single day</strong>. The kitchen fires never cool, affirming that spiritual hunger begins with physical sustenance.
                </p>
                <div className="pt-4 border-t border-brand-maroon/5 text-xs text-brand-saffron font-semibold uppercase tracking-wider">
                  Universal Anna Dasoha
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-brand-maroon/5 shadow-sm hover:shadow-md transition-all duration-300 card-lift h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                  <Waves className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-maroon mb-3">
                  Bindu Sarovara
                </h3>
                <p className="text-sm text-brand-umber/70 leading-relaxed mb-4 flex-1">
                  Resting naturally on the middle hill of the Kshetra, this sacred reservoir is revered as being charged by the celestial waters descending from the Jata (matted locks) of Lord Gangadhareshwara stationed above. Faithful pilgrims take a holy dip in its serene waters to attain mental clarity and spiritual purification.
                </p>
                <div className="pt-4 border-t border-brand-maroon/5 text-xs text-brand-saffron font-semibold uppercase tracking-wider">
                  The Celestial Lake
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="bg-white rounded-2xl p-8 border border-brand-maroon/5 shadow-sm hover:shadow-md transition-all duration-300 card-lift h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
                  <Feather className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-maroon mb-3">
                  Mayura Vana Sanctuary
                </h3>
                <p className="text-sm text-brand-umber/70 leading-relaxed mb-4 flex-1">
                  Enveloping the monastery is an expansive natural deciduous forest known as <em>Mayura Vana</em>. Dedicated as a sanctuary for hundreds of wild peacocks, the forest resonates with morning birdsong and quiet meditative solitude, exemplifying the Math&apos;s deep eco-spiritual pledge to preserve local biodiversity.
                </p>
                <div className="pt-4 border-t border-brand-maroon/5 text-xs text-brand-saffron font-semibold uppercase tracking-wider">
                  Peacock Forest & Bio-Reserve
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════ THE DIVINE LINEAGE (GURU-SHISHYA PARAMPARA) ════════════════════ */}
      <section className="py-28 md:py-36 bg-white">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-3">
                Guru-Shishya Parampara
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-maroon mb-6">
                The Architects of Modern Renaissance
              </h2>
              <p className="text-brand-umber/70 text-lg leading-relaxed">
                The timeless legacy of Sri Adichunchanagiri Math thrives through the divine torchbearers of its holy seat — visionary pontiffs who translated ancient spiritual convictions into monumental educational and social revolutions.
              </p>
            </div>
          </Reveal>

          {/* ── 1. DR. BALAGANGADHARANATHA MAHASWAMIJI ── */}
          <div className="mb-24 bg-brand-cream/40 rounded-3xl p-8 md:p-12 border border-brand-maroon/10">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-2 border-brand-saffron/30 relative group bg-brand-maroon-deep">
                  <Image
                    src="/images/math/balagangadharanatha-swamiji.jpg"
                    alt="Byravaikya Jagadguru Padmabhushana Sri Sri Sri Dr. Balagangadharanatha Maha Swamiji"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon-deep/95 via-brand-maroon-deep/20 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-5 text-center">
                    <p className="font-serif text-lg font-bold text-white drop-shadow-md">
                      Jagadguru Padmabhushana
                    </p>
                    <p className="font-serif text-sm text-brand-saffron font-medium drop-shadow-sm">
                      Sri Sri Sri Dr. Balagangadharanatha Maha Swamiji
                    </p>
                    <p className="text-[11px] text-brand-cream/80 mt-1">
                      71st Pontiff in Holy Lineage • Ascended 1974
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-xl bg-white border border-brand-maroon/5 text-center shadow-sm">
                  <span className="text-xs font-semibold text-brand-maroon block font-serif">Honoured with Padma Bhushan</span>
                  <span className="text-[11px] text-brand-umber/60">Government of India for Social & Educational Service</span>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="inline-block px-3 py-1 bg-brand-maroon/5 text-brand-maroon text-xs font-semibold rounded-md uppercase tracking-wider mb-4">
                  The Visionary Founder
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-maroon mb-4 leading-tight">
                  Byravaikya Sri Sri Sri Dr. Balagangadharanatha Maha Swamiji
                </h3>
                <p className="text-brand-umber/75 text-base leading-relaxed mb-4">
                  Ascending the sacred seat as the 71st pontiff in 1974, Poojya Mahaswamiji heralded an unprecedented era of social upliftment. With an enlightened spirit that embraced every individual irrespective of caste, religion, gender, or economic background, he approached societal challenges with an ingenious blend of scientific logic and spiritual compassion.
                </p>
                <p className="text-brand-umber/75 text-base leading-relaxed mb-6">
                  Recognizing that education was the most potent vehicle to dissolve generational poverty, Mahaswamiji established the <strong>Sri Adichunchanagiri Shikshana Trust in 1974</strong>. From a modest start, the Trust grew into an educational empire encompassing over 500+ institutions serving more than 1,30,000 students nationwide, with focused emphasis on rural and semi-urban youth.
                </p>

                {/* Eightfold Path - Ashtanga Seva */}
                <div className="bg-white p-6 rounded-2xl border border-brand-maroon/10">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-saffron mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-gold" />
                    The Eightfold Path of Humanity (Ashtanga Seva)
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    {[
                      { title: "Adhyathmika", desc: "Spirituality" },
                      { title: "Anna", desc: "Nourishment" },
                      { title: "Akshara", desc: "Knowledge" },
                      { title: "Arogya", desc: "Healthcare" },
                      { title: "Ashraya", desc: "Shelter" },
                      { title: "Anukampa", desc: "Compassion" },
                      { title: "Aranya", desc: "Afforestation" },
                      { title: "Akalu", desc: "Cattle Care" },
                    ].map((item, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-brand-cream/70 border border-brand-maroon/5">
                        <span className="font-serif font-bold text-sm text-brand-maroon block leading-tight">{item.title}</span>
                        <span className="text-[10px] text-brand-umber/60 tracking-tight">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── 2. DR. NIRMALANANDANATHA MAHASWAMIJI ── */}
          <div className="mb-24 bg-brand-cream/40 rounded-3xl p-8 md:p-12 border border-brand-maroon/10">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 lg:order-2">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-2 border-brand-saffron/30 relative group bg-brand-maroon-deep">
                  <Image
                    src="/images/math/nirmalanandanatha-swamiji.jpg"
                    alt="Jagadguru Sri Sri Sri Dr. Nirmalanandanatha Maha Swamiji"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon-deep/95 via-brand-maroon-deep/20 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-5 text-center">
                    <p className="font-serif text-lg font-bold text-white drop-shadow-md">
                      Jagadguru Sri Sri Sri Dr.
                    </p>
                    <p className="font-serif text-sm text-brand-saffron font-medium drop-shadow-sm">
                      Nirmalanandanatha Maha Swamiji
                    </p>
                    <p className="text-[11px] text-brand-cream/80 mt-1">
                      72nd Pontiff & President, SAST • D.Sc. (Honoris Causa)
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-xl bg-white border border-brand-maroon/5 text-center shadow-sm">
                  <span className="text-xs font-semibold text-brand-maroon block font-serif">Doctor of Science (Doctor Honoris Causa)</span>
                  <span className="text-[11px] text-brand-umber/60">Conferred by University of Mysore (2016)</span>
                </div>
              </div>

              <div className="lg:col-span-7 lg:order-1">
                <div className="inline-block px-3 py-1 bg-brand-maroon/5 text-brand-maroon text-xs font-semibold rounded-md uppercase tracking-wider mb-4">
                  Present President & Spiritual Preceptor
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-maroon mb-4 leading-tight">
                  Jagadguru Sri Sri Sri Dr. Nirmalanandanatha Maha Swamiji
                </h3>
                <p className="text-brand-umber/75 text-base leading-relaxed mb-4">
                  Stepping away from material pursuits in youth, Poojya Mahaswamiji embraced an austere ascetic life in 1998, undergoing rigorous immersion in traditional Vedic knowledge, Upanishads, and classical Shastras. His thirst for knowledge remains insatiable; in scholarly forums, he is renowned for attentively absorbing philosophical discourses with the purity and curiosity of a young student.
                </p>
                <p className="text-brand-umber/75 text-base leading-relaxed mb-4">
                  Equipped with an advanced engineering background, Mahaswamiji revolutionized the educational institutions under the Shikshana Trust. He pioneered digital infrastructure, computerized administrative workflows, and modernized scientific labs, cultivating institutions that bridge classical Bharatiya ethos with futuristic technological readiness.
                </p>
                
                <div className="p-5 rounded-xl bg-white border-l-4 border-brand-saffron shadow-sm">
                  <p className="font-serif text-base italic text-brand-maroon leading-relaxed">
                    &ldquo;Preserve, Promote, Pursue, and Progress with Passion in the Path of his Patriarch.&rdquo;
                  </p>
                  <p className="text-xs text-brand-umber/50 mt-2 uppercase tracking-wider font-semibold">
                    — The Guiding Creed of Poojya Mahaswamiji
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── 3. SRI SRI MANGALANATHA SWAMIJI ── */}
          <div className="bg-brand-cream/40 rounded-3xl p-8 md:p-12 border border-brand-maroon/10">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-2 border-brand-saffron/30 relative group bg-brand-maroon-deep">
                  <Image
                    src="/images/math/mangalanatha-swamiji.jpg"
                    alt="Poojya Sri Sri Mangalanatha Swamiji"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon-deep/95 via-brand-maroon-deep/20 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-5 text-center">
                    <p className="font-serif text-lg font-bold text-white drop-shadow-md">
                      Poojya Sri Sri
                    </p>
                    <p className="font-serif text-sm text-brand-saffron font-medium drop-shadow-sm">
                      Mangalanatha Swamiji
                    </p>
                    <p className="text-[11px] text-brand-cream/80 mt-1">
                      Head, Chickballapur Shakha Math • Secretary, BGS Chickballapur
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-xl bg-white border border-brand-maroon/5 text-center shadow-sm">
                  <span className="text-xs font-semibold text-brand-maroon block font-serif">34+ Years of Dedicated Service</span>
                  <span className="text-[11px] text-brand-umber/60">Scholar in Advaita, Vedanta & Sanskrit (Post-Graduate)</span>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="inline-block px-3 py-1 bg-brand-maroon/5 text-brand-maroon text-xs font-semibold rounded-md uppercase tracking-wider mb-4">
                  Secretary & Regional Guardian
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-maroon mb-4 leading-tight">
                  Poojya Sri Sri Mangalanatha Swamiji
                </h3>
                <p className="text-brand-umber/75 text-base leading-relaxed mb-4">
                  Embracing Sanyasatva in 2005 under the divine blessings of His Holiness Sri Sri Sri Dr. Balagangadharanatha Mahaswamiji, Poojya Swamiji has devoted over 34 years of his life in selfless service to Sri Adichunchanagiri Math. A distinguished intellectual, he completed Post-Graduation in Advaita Vedanta, Veda, Aagama, and Sanskrit literature, making his discourses widely revered across the state.
                </p>
                <p className="text-brand-umber/75 text-base leading-relaxed mb-4">
                  In 2010, Swamiji was entrusted with the leadership of the <strong>Sri Chickballapur Shakha Math</strong>, located conveniently 20 km from Kempegowda International Airport. Appointed as the <strong>Secretary of BGS Educational Institutions (Chickballapur Branch)</strong> by Sri Sri Sri Dr. Nirmalanandanatha Mahaswamiji, he galvanized educational and social initiatives across Chickballapur, Kolar, and Tumkur districts.
                </p>
                <p className="text-brand-umber/75 text-base leading-relaxed">
                  As our management representative and spiritual mentor, Sri Sri Swamiji plays an indispensable role in institutional governance, setting high academic benchmarks, articulating forward-looking policies, and ensuring every student develops disciplined moral character and academic excellence.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════ INSTITUTIONAL PILLARS ════════════════════ */}
      <section className="py-24 bg-brand-maroon-deep text-brand-cream">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                The Quadruple Mission of the Math
              </h2>
              <div className="w-16 h-1 bg-brand-saffron mx-auto mb-6 rounded-full" />
              <p className="text-brand-cream/60 text-sm md:text-base">
                How Sri Kshetra translates timeless sacred ethos into real, impactful transformation on the ground.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Jnana Dasoha",
                sub: "Universal Education",
                desc: "Spreading high-quality schools, polytechnics, medical, and engineering colleges to rural communities."
              },
              {
                icon: Utensils,
                title: "Anna Dasoha",
                sub: "Nourishment for All",
                desc: "Feeding over 20,000 pilgrims and students daily, embodying unconditional hospitality and service."
              },
              {
                icon: HeartHandshake,
                title: "Arogya Seva",
                sub: "Compassionate Healthcare",
                desc: "Hospitals and free rural health camps extending modern diagnostic and medical relief to the underserved."
              },
              {
                icon: TreePine,
                title: "Prakruti Samrakshana",
                sub: "Eco-Conscious Living",
                desc: "Massive afforestation drives, Mayura Vana bird sanctuary, and ethical cattle shelters (Goshalas)."
              },
            ].map((pillar, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl h-full flex flex-col hover:border-brand-saffron/40 hover:bg-white/[0.08] transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-brand-saffron/10 flex items-center justify-center text-brand-saffron mb-4">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-1">{pillar.title}</h3>
                  <p className="text-[11px] font-semibold text-brand-saffron uppercase tracking-wider mb-3">{pillar.sub}</p>
                  <p className="text-xs text-brand-cream/60 leading-relaxed">{pillar.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ CROSS NAVIGATION / EXPLORE MORE ════════════════════ */}
      <section className="py-20 bg-brand-cream paper-texture border-t border-brand-maroon/10">
        <div className="px-6 md:px-12 max-w-5xl mx-auto text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-3">
              Explore Our Institution
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-maroon mb-10">
              Continue Learning About Our Heritage
            </h2>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <Link
                href="/about"
                className="group p-6 rounded-2xl bg-white border border-brand-maroon/5 shadow-sm hover:shadow-md hover:border-brand-saffron/30 transition-all duration-300 card-lift"
              >
                <p className="text-xs font-semibold text-brand-saffron uppercase tracking-wider mb-2">Campus & Story</p>
                <h3 className="font-serif font-bold text-xl text-brand-maroon mb-2 flex items-center justify-between">
                  About BGS
                  <ArrowRight className="w-4 h-4 text-brand-saffron opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-xs text-brand-umber/60 leading-relaxed">
                  Discover our school history, ethos, principal&apos;s message, and campus life at Sidlaghatta.
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
                  Explore the foundational values guiding our teaching methodology and institutional character.
                </p>
              </Link>

              <Link
                href="/academics"
                className="group p-6 rounded-2xl bg-white border border-brand-maroon/5 shadow-sm hover:shadow-md hover:border-brand-saffron/30 transition-all duration-300 card-lift"
              >
                <p className="text-xs font-semibold text-brand-saffron uppercase tracking-wider mb-2">Academic Excellence</p>
                <h3 className="font-serif font-bold text-xl text-brand-maroon mb-2 flex items-center justify-between">
                  Curriculum & Streams
                  <ArrowRight className="w-4 h-4 text-brand-saffron opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-xs text-brand-umber/60 leading-relaxed">
                  Comprehensive academic streams from Kindergarten to 2nd PU (PCMB, PCMCs, Commerce) with CET/NEET coaching.
                </p>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
