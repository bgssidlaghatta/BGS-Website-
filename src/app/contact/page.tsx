"use client";

import Image from "next/image";
import { Reveal, motion, staggerContainer, fadeUp } from "@/lib/animations";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactPage() {
  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <Image
          src="/images/campus-hero.png"
          alt="BGS campus entrance"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon-deep via-brand-maroon-deep/70 to-brand-maroon-deep/30" />
        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full pb-16 pt-36">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
              We&apos;re Here to Help
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-brand-cream mb-4 leading-tight max-w-3xl">
              Let&apos;s Talk About <span className="text-brand-saffron">Your Child&apos;s Future.</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════ CONTACT CARDS ════════════════════ */}
      <section className="relative -mt-8 z-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { icon: MapPin, label: "Campus", value: "Sidlaghatta, Karnataka", href: "#map" },
            { icon: Phone, label: "Call", value: "+91 00000 00000", href: "tel:+910000000000" },
            { icon: Mail, label: "Email", value: "info@bgssidlaghatta.edu.in", href: "mailto:info@bgssidlaghatta.edu.in" },
            { icon: MessageCircle, label: "WhatsApp", value: "Quick Response", href: "https://wa.me/910000000000" },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <a href={c.href} className="group block bg-brand-offwhite rounded-xl p-5 border border-brand-maroon/5 hover:border-brand-saffron/20 hover:shadow-lg transition-all duration-500 hover:-translate-y-0.5 text-center">
                <c.icon className="w-5 h-5 text-brand-saffron mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-umber/30 mb-1">{c.label}</p>
                <p className="font-semibold text-brand-maroon text-xs leading-tight">{c.value}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════════════ FORM + SIDE INFO ════════════════════ */}
      <section className="py-28 md:py-36 bg-brand-cream paper-texture">
        <div className="relative z-10 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="bg-brand-offwhite rounded-3xl p-8 md:p-12 border border-brand-maroon/5 shadow-xl shadow-brand-maroon/5">
                  <h2 className="text-3xl font-serif font-bold text-brand-maroon mb-2">Admission Inquiry</h2>
                  <p className="text-sm text-brand-umber/40 mb-10">
                    Fill this form and our admissions coordinator will call you back within 24 hours. 
                    No automated responses — a real person, a real conversation.
                  </p>

                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="parentName" className="text-[10px] font-semibold uppercase tracking-widest text-brand-umber/60">
                          Parent / Guardian Name <span className="text-brand-saffron">*</span>
                        </Label>
                        <Input
                          id="parentName"
                          type="text"
                          className="h-12 bg-white"
                          placeholder="Full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="studentName" className="text-[10px] font-semibold uppercase tracking-widest text-brand-umber/60">
                          Student Name
                        </Label>
                        <Input
                          id="studentName"
                          type="text"
                          className="h-12 bg-white"
                          placeholder="Child's name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[10px] font-semibold uppercase tracking-widest text-brand-umber/60">
                        Phone / WhatsApp <span className="text-brand-saffron">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        className="h-12 bg-white ledger-data"
                        placeholder="+91 00000 00000"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="admissionFor" className="text-[10px] font-semibold uppercase tracking-widest text-brand-umber/60">
                          Admission For <span className="text-brand-saffron">*</span>
                        </Label>
                        <Select>
                          <SelectTrigger className="h-12 bg-white text-brand-umber">
                            <SelectValue placeholder="Select class" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="lkg-ukg">LKG / UKG</SelectItem>
                            <SelectItem value="1-5">1st – 5th Standard</SelectItem>
                            <SelectItem value="6-8">6th – 8th Standard</SelectItem>
                            <SelectItem value="9-10">9th – 10th Standard (SSLC)</SelectItem>
                            <SelectItem value="pcmb">1st PU — PCMB</SelectItem>
                            <SelectItem value="pcmcs">1st PU — PCMCs</SelectItem>
                            <SelectItem value="commerce">1st PU — Commerce</SelectItem>
                            <SelectItem value="2-pu">2nd PU (Transfer)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currentSchool" className="text-[10px] font-semibold uppercase tracking-widest text-brand-umber/60">
                          Current School
                        </Label>
                        <Input
                          id="currentSchool"
                          type="text"
                          className="h-12 bg-white"
                          placeholder="Current school name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[10px] font-semibold uppercase tracking-widest text-brand-umber/60">
                        Questions or Comments
                      </Label>
                      <Textarea
                        id="message"
                        rows={4}
                        className="bg-white resize-none"
                        placeholder="Any specific questions about our programs, fees, or campus?"
                      />
                    </div>

                    <Button
                      type="button"
                      size="lg"
                      className="w-full h-14 group shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 text-base mt-2"
                    >
                      Submit Inquiry
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </Button>

                    <p className="text-[10px] text-brand-umber/40 text-center pt-2">
                      Your information is private and will only be used to respond to your inquiry.
                    </p>
                  </form>
                </div>
              </Reveal>
            </div>

            {/* Side info */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-8">
                <Reveal direction="right">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-brand-maroon mb-6">Office Hours</h3>
                    <div className="bg-brand-offwhite rounded-xl border border-brand-maroon/5 overflow-hidden">
                      {[
                        { day: "Monday – Friday", time: "9:00 AM – 4:00 PM", active: true },
                        { day: "Saturday", time: "9:00 AM – 1:00 PM", active: true },
                        { day: "Sunday", time: "Closed", active: false },
                      ].map((slot, i) => (
                        <div key={i} className="flex justify-between items-center px-6 py-4 border-b border-brand-maroon/5 last:border-b-0">
                          <span className="text-sm text-brand-umber/70">{slot.day}</span>
                          <span className={`ledger-data text-sm font-semibold ${slot.active ? 'text-brand-maroon' : 'text-brand-umber/30'}`}>{slot.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>

                <Reveal direction="right" delay={0.1}>
                  <div className="bg-brand-maroon-deep rounded-2xl p-8 text-brand-cream relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-saffron/10 rounded-bl-[60px]" />
                    <MessageCircle className="w-8 h-8 text-brand-saffron mb-4 relative z-10" />
                    <h3 className="font-serif text-xl font-bold text-brand-cream mb-3 relative z-10">Prefer WhatsApp?</h3>
                    <p className="text-sm text-brand-cream/50 mb-6 leading-relaxed relative z-10">
                      Most parents find WhatsApp quicker. Our admissions team typically 
                      responds within an hour during office hours.
                    </p>
                    <a
                      href="https://wa.me/910000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-sm font-semibold rounded-lg hover:bg-[#20BD5A] transition-colors shadow-lg shadow-[#25D366]/20 relative z-10"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </Reveal>

                <Reveal direction="right" delay={0.2}>
                  <div className="bg-brand-offwhite rounded-xl p-6 border border-brand-maroon/5">
                    <h3 className="font-serif text-lg font-bold text-brand-maroon mb-3">Campus Visit</h3>
                    <p className="text-sm text-brand-umber/50 leading-relaxed">
                      We encourage every parent to visit the campus before making a decision. 
                      Walk through the labs, sit in on a class, meet the teachers. Call us to 
                      schedule a visit at your convenience.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ MAP ════════════════════ */}
      <section id="map" className="h-[450px] w-full bg-brand-maroon/5 border-t border-brand-maroon/10 flex items-center justify-center relative">
        <div className="text-center">
          <MapPin className="w-8 h-8 text-brand-maroon/15 mx-auto mb-3" />
          <p className="text-brand-maroon/25 font-mono text-xs">Google Map embed will be added with API key and exact coordinates</p>
          <p className="text-brand-maroon/15 font-mono text-[10px] mt-1">BGS Public School & PU College, Sidlaghatta, Karnataka</p>
        </div>
      </section>
    </>
  );
}
