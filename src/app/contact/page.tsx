"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal, StaggerReveal, ParallaxLayer, motion, staggerContainer, fadeUp } from "@/lib/animations";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, ArrowUpRight, Loader2, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    phone: "",
    admissionFor: "",
    currentSchool: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName.trim()) {
      setErrorMsg("Please enter Parent / Guardian Name.");
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg("Please enter Phone / WhatsApp number.");
      return;
    }
    if (!formData.admissionFor) {
      setErrorMsg("Please select the class for admission.");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const formBody = new URLSearchParams();
      // Google Form fields
      // entry.861424855 -> Student Name
      formBody.append("entry.861424855", formData.studentName.trim() || formData.parentName.trim());
      // entry.1602947175 -> Father's Name
      formBody.append("entry.1602947175", formData.parentName.trim());
      // entry.308003396 -> Parents' Contact Number
      formBody.append("entry.308003396", formData.phone.trim());
      // entry.924290245 -> Current studying class
      formBody.append("entry.924290245", formData.admissionFor);
      // entry.2071457004 -> Current inquiries
      const enquiryNotes = [
        formData.message.trim(),
        formData.currentSchool ? `Current School: ${formData.currentSchool}` : "",
      ].filter(Boolean).join(" | ");
      formBody.append("entry.2071457004", enquiryNotes || "Website Admission Enquiry");

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSesE37UcXnG8mGUiROCSSpipmBH7Yz4yj26g44U-HHWIqpD4g/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody.toString(),
        }
      );

      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      parentName: "",
      studentName: "",
      phone: "",
      admissionFor: "",
      currentSchool: "",
      message: "",
    });
    setIsSubmitted(false);
    setErrorMsg("");
  };

  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <ParallaxLayer speed={0.3} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <Image
            src="https://res.cloudinary.com/xd8uritd/image/upload/v1789621192/image-clean_fmrqe6.png"
            alt="BGS campus entrance"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </ParallaxLayer>
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
          <StaggerReveal staggerDelay={0.06} className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: MapPin, label: "Campus", value: "Sidlaghatta, Karnataka", href: "#map" },
              { icon: MessageCircle, label: "WhatsApp", value: "+91 99019 23097", href: "https://wa.me/919901923097" },
              { icon: Mail, label: "Email", value: "bgsadmin5@gmail.com", href: "mailto:bgsadmin5@gmail.com" },
              { icon: Clock, label: "Working Hours", value: "Mon-Sat, 9AM-5PM", href: "#" },
            ].map((c, i) => (
              <motion.a variants={fadeUp} key={i} href={c.href} className="group block bg-brand-offwhite rounded-xl p-5 border border-brand-maroon/5 hover:border-brand-saffron/20 card-lift text-center">
                <c.icon className="w-5 h-5 text-brand-saffron mx-auto mb-3 icon-hover-rotate" />
                <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-umber/30 mb-1">{c.label}</p>
                <p className="font-semibold text-brand-maroon text-xs leading-tight">{c.value}</p>
              </motion.a>
            ))}
          </StaggerReveal>
      </section>

      {/* ════════════════════ FORM + SIDE INFO ════════════════════ */}
      <section className="py-28 md:py-36 bg-brand-cream paper-texture">
        <div className="relative z-10 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="bg-brand-offwhite rounded-3xl p-8 md:p-12 border border-brand-maroon/5 shadow-xl shadow-brand-maroon/5">
                  
                  {/* Official Google Form Banner */}
                  <div className="mb-8 p-5 rounded-2xl bg-gradient-to-br from-brand-maroon/5 via-brand-saffron/10 to-brand-gold/5 border border-brand-saffron/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-maroon uppercase tracking-wider mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-brand-saffron" />
                        Official Online Admission Form
                      </div>
                      <p className="text-xs text-brand-umber/70 leading-relaxed max-w-md">
                        Prefer the official Google Form? Fill it directly for admission enquiries and swift processing.
                      </p>
                    </div>
                    <a
                      href="https://forms.gle/TQCsmK1dde6qhaA98"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 px-4 py-2.5 rounded-xl bg-brand-maroon hover:bg-brand-maroon-deep text-brand-cream font-semibold text-xs tracking-wide transition-all shadow-md hover:shadow-lg inline-flex items-center gap-1.5"
                    >
                      Open Google Form
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <h2 className="text-3xl font-serif font-bold text-brand-maroon mb-2">Admission Enquiry</h2>
                  <p className="text-sm text-brand-umber/70 mb-8 leading-relaxed">
                    Fill this form and our admissions coordinator will call you back within 24 hours (Monday to Saturday, 9:00 AM – 5:00 PM).
                  </p>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-8 text-center bg-white rounded-2xl border border-brand-maroon/10 shadow-lg my-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-bold text-brand-saffron uppercase tracking-[0.25em]">|| Jai Sri Gurudev ||</span>
                      <h3 className="text-2xl font-serif font-bold text-brand-maroon mt-2 mb-3">
                        Enquiry Submitted Successfully!
                      </h3>
                      <p className="text-sm text-brand-umber/70 max-w-md mx-auto leading-relaxed mb-6">
                        Thank you for reaching out to BGS Public School & PU College. We have received your inquiry for{" "}
                        <strong className="text-brand-maroon">{formData.studentName || formData.parentName}</strong> ({formData.admissionFor}).
                        Our admissions team will contact you at <strong className="text-brand-maroon">{formData.phone}</strong> between 9:00 AM and 5:00 PM, Monday to Saturday.
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-3">
                        <a
                          href="https://forms.gle/TQCsmK1dde6qhaA98"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-xl bg-brand-saffron text-brand-maroon-deep font-bold text-xs hover:bg-brand-saffron-light transition-all shadow-md inline-flex items-center gap-1.5"
                        >
                          View Official Google Form
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                        <button
                          type="button"
                          onClick={handleReset}
                          className="px-5 py-2.5 rounded-xl border border-brand-maroon/20 hover:bg-brand-maroon/5 text-brand-maroon font-semibold text-xs transition-all"
                        >
                          Submit Another Enquiry
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {errorMsg && (
                        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                          {errorMsg}
                        </div>
                      )}

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="parentName" className="text-[10px] font-semibold uppercase tracking-widest text-brand-umber/60">
                            Parent / Guardian Name <span className="text-brand-saffron">*</span>
                          </Label>
                          <Input
                            id="parentName"
                            type="text"
                            value={formData.parentName}
                            onChange={(e) => setFormData((prev) => ({ ...prev, parentName: e.target.value }))}
                            className="h-12 bg-white"
                            placeholder="Full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="studentName" className="text-[10px] font-semibold uppercase tracking-widest text-brand-umber/60">
                            Student Name
                          </Label>
                          <Input
                            id="studentName"
                            type="text"
                            value={formData.studentName}
                            onChange={(e) => setFormData((prev) => ({ ...prev, studentName: e.target.value }))}
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
                          value={formData.phone}
                          onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                          className="h-12 bg-white ledger-data"
                          placeholder="+91 99019 23097"
                          required
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="admissionFor" className="text-[10px] font-semibold uppercase tracking-widest text-brand-umber/60">
                            Admission For <span className="text-brand-saffron">*</span>
                          </Label>
                          <Select
                            value={formData.admissionFor}
                            onValueChange={(val) => setFormData((prev) => ({ ...prev, admissionFor: val || "" }))}
                          >
                            <SelectTrigger id="admissionFor" className="h-12 bg-white text-brand-umber">
                              <SelectValue placeholder="Select class" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="LKG / UKG">LKG / UKG</SelectItem>
                              <SelectItem value="1st – 5th Standard">1st – 5th Standard</SelectItem>
                              <SelectItem value="6th – 8th Standard">6th – 8th Standard</SelectItem>
                              <SelectItem value="9th – 10th Standard (SSLC)">9th – 10th Standard (SSLC)</SelectItem>
                              <SelectItem value="1st PU — PCMB">1st PU — PCMB</SelectItem>
                              <SelectItem value="1st PU — PCMCs">1st PU — PCMCs</SelectItem>
                              <SelectItem value="1st PU — Commerce">1st PU — Commerce</SelectItem>
                              <SelectItem value="2nd PU (Transfer)">2nd PU (Transfer)</SelectItem>
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
                            value={formData.currentSchool}
                            onChange={(e) => setFormData((prev) => ({ ...prev, currentSchool: e.target.value }))}
                            className="h-12 bg-white"
                            placeholder="Current school name"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-[10px] font-semibold uppercase tracking-widest text-brand-umber/60">
                          Current Inquiries / How can we help you?
                        </Label>
                        <Textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                          className="bg-white resize-none"
                          placeholder="Please write your questions regarding admissions, fees, streams, or campus facilities..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full h-14 group shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 text-base mt-2 btn-ripple"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Submitting Enquiry...
                          </>
                        ) : (
                          <>
                            Submit Enquiry
                            <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                          </>
                        )}
                      </Button>

                      <p className="text-[10px] text-brand-umber/50 text-center pt-2 leading-relaxed">
                        The information provided will be collected with your consent and used solely for admission purposes.
                      </p>
                    </form>
                  )}
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
                    <MessageCircle className="w-8 h-8 text-brand-saffron mb-4 relative z-10 animate-pulse-glow rounded-full" />
                    <h3 className="font-serif text-xl font-bold text-brand-cream mb-3 relative z-10">Prefer WhatsApp?</h3>
                    <p className="text-sm text-brand-cream/50 mb-6 leading-relaxed relative z-10">
                      Most parents find WhatsApp quicker. Our admissions team typically 
                      responds within an hour during office hours.
                    </p>
                    <a
                      href="https://wa.me/919901923097"
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
                      Walk through the labs, sit in on a class, meet the teachers. Message us on WhatsApp to 
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
