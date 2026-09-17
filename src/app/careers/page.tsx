"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Briefcase,
  Bell,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Mail,
  Phone,
  CheckCircle2,
  Calendar,
  GraduationCap,
  MessageCircle,
  X,
  Send,
  Loader2,
  AlertCircle,
  Clock,
  Layers,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal, motion, staggerContainer, fadeUp } from "@/lib/animations";
import { AnimatePresence } from "framer-motion";
import { Vacancy } from "@/lib/vacancies-store";

export default function CareersPage() {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [loading, setLoading] = useState(true);

  // Application Modal state
  const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGeneralApplication, setIsGeneralApplication] = useState(false);

  // Form inputs
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    fetchVacancies();
  }, []);

  const fetchVacancies = async () => {
    try {
      const res = await fetch("/api/vacancies");
      const data = await res.json();
      if (data.vacancies) {
        setVacancies(data.vacancies);
      }
    } catch (err) {
      console.error("Failed to load vacancies:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (vac?: Vacancy) => {
    if (vac) {
      setSelectedVacancy(vac);
      setIsGeneralApplication(false);
    } else {
      setSelectedVacancy(null);
      setIsGeneralApplication(true);
    }
    setSubmitError(null);
    setSubmitSuccess(false);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVacancy(null);
    setSubmitSuccess(false);
    setSubmitError(null);
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    const targetTitle = selectedVacancy
      ? `${selectedVacancy.title} (${selectedVacancy.department})`
      : "General Teaching Application";

    try {
      const res = await fetch("/api/vacancies/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vacancyId: selectedVacancy?.id || "general",
          vacancyTitle: targetTitle,
          name,
          phone,
          email,
          qualification,
          experience,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit application.");
      }

      setSubmitSuccess(true);

      // Open WhatsApp pre-filled link
      if (data.whatsappUrl) {
        setTimeout(() => {
          window.open(data.whatsappUrl, "_blank");
        }, 600);
      }
    } catch (err: any) {
      setSubmitError(err?.message || "Failed to submit application.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative py-28 md:py-36 bg-brand-maroon-deep text-brand-cream overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(232,135,30,0.08)_0%,_transparent_60%)]" />
        <div className="relative z-10 px-6 md:px-12 max-w-5xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <Briefcase className="w-4 h-4 text-brand-saffron" />
              Teacher Recruitment & Opportunities
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-serif font-bold text-brand-cream mb-6 leading-tight">
              Join Our Academic Community
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-brand-cream/70 max-w-2xl mx-auto leading-relaxed">
              At BGS Public School & PU College, we nurture a culture of pedagogical excellence, disciplined values, and continuous growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════ MAIN CONTENT ════════════════════ */}
      <section className="py-20 md:py-28 bg-brand-cream paper-texture">
        <div className="px-6 md:px-12 max-w-5xl mx-auto space-y-12">
          
          {/* Active Vacancies Section */}
          {vacancies.length > 0 ? (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    Now Hiring — Active Openings
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-brand-maroon">
                    Current Teaching Vacancies
                  </h2>
                </div>
                <button
                  onClick={() => handleOpenModal()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-brand-maroon text-brand-maroon hover:bg-brand-maroon hover:text-white text-xs font-semibold transition-all shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-brand-saffron" />
                  General Application
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {vacancies.map((vac) => (
                  <motion.div
                    key={vac.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-maroon/15 shadow-lg shadow-brand-maroon/5 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-maroon via-brand-saffron to-brand-maroon" />

                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-brand-saffron/15 text-brand-maroon">
                          {vac.department}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {vac.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-serif font-bold text-brand-umber mb-1">
                        {vac.title}
                      </h3>
                      <p className="text-xs font-semibold text-brand-saffron mb-4">
                        Subject: {vac.subject}
                      </p>

                      <div className="space-y-2 text-xs text-gray-600 bg-gray-50 p-4 rounded-xl mb-4 border border-gray-100">
                        <div className="flex items-start gap-2">
                          <GraduationCap className="w-4 h-4 text-brand-maroon shrink-0 mt-0.5" />
                          <span><strong>Qualification:</strong> {vac.qualifications}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-brand-maroon shrink-0 mt-0.5" />
                          <span><strong>Experience:</strong> {vac.experience}</span>
                        </div>
                        {vac.description && (
                          <p className="pt-1 text-gray-500 border-t border-gray-200/60 leading-relaxed">
                            {vac.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenModal(vac)}
                      className="w-full py-3 px-4 rounded-xl bg-brand-maroon hover:bg-brand-maroon-deep text-white font-semibold text-xs shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-brand-saffron" />
                      Apply via WhatsApp
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            /* No vacancies notification banner */
            <Reveal>
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-brand-maroon/10 shadow-xl shadow-brand-maroon/5 space-y-6">
                <div className="p-6 md:p-8 rounded-2xl bg-amber-50/80 border border-amber-200 flex flex-col md:flex-row items-start gap-5">
                  <div className="p-3.5 rounded-2xl bg-amber-500/10 text-amber-800 shrink-0">
                    <Bell className="w-7 h-7" />
                  </div>
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-200/70 text-amber-950 text-xs font-bold uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                      Notice from Administration
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                      No active vacancies at this moment.
                    </h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Please check back periodically. The administration posts vacancies here with required qualifications and experience for teaching and non-teaching roles.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => handleOpenModal()}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-maroon hover:bg-brand-maroon-deep text-white text-xs font-semibold shadow-md transition-colors cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4 text-brand-saffron" />
                        Submit General Expression of Interest
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* Hiring Areas Breakdown */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-brand-maroon/10 shadow-md space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-saffron" />
              <h3 className="font-serif font-bold text-2xl text-brand-maroon">
                Academic Disciplines We Regularly Hire For
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              {/* Teaching card */}
              <div className="p-6 rounded-2xl bg-brand-cream border border-brand-maroon/10">
                <div className="w-10 h-10 rounded-xl bg-brand-maroon text-white flex items-center justify-center font-bold mb-4">
                  T
                </div>
                <h4 className="font-serif font-bold text-lg text-brand-maroon mb-2">
                  Teaching Positions
                </h4>
                <ul className="space-y-2 text-xs text-brand-umber/80 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-saffron shrink-0" />
                    PU Science Lecturers: Physics, Chemistry, Mathematics, Biology, Computer Science
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-saffron shrink-0" />
                    PU Commerce Lecturers: Accountancy, Business Studies, Economics, CS
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-saffron shrink-0" />
                    Languages: English, Kannada, Hindi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-saffron shrink-0" />
                    High School & Primary School Teachers (B.Ed / D.Ed)
                  </li>
                </ul>
              </div>

              {/* Non-Teaching card */}
              <div className="p-6 rounded-2xl bg-brand-cream border border-brand-maroon/10">
                <div className="w-10 h-10 rounded-xl bg-brand-maroon text-white flex items-center justify-center font-bold mb-4">
                  NT
                </div>
                <h4 className="font-serif font-bold text-lg text-brand-maroon mb-2">
                  Non-Teaching & Support Roles
                </h4>
                <ul className="space-y-2 text-xs text-brand-umber/80 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-saffron shrink-0" />
                    Science & Computer Laboratory Technicians
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-saffron shrink-0" />
                    Office Administration & Accounts Personnel
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-saffron shrink-0" />
                    Librarians, Counselors & Physical Education Instructors
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer note */}
            <div className="pt-6 border-t border-brand-maroon/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-brand-umber/60 space-y-1 text-center sm:text-left">
                <p>For administrative or recruitment queries:</p>
                <p className="font-semibold text-brand-maroon">
                  bgsadmin5@gmail.com • +91 99019 23097
                </p>
              </div>

              <Link
                href="/faculty"
                className={cn(buttonVariants({ variant: "outline" }), "inline-flex items-center gap-2 text-sm")}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Faculty
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ APPLICATION / INTEREST MODAL ════════════════════ */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-brand-maroon/15 relative"
            >
              {/* Header */}
              <div className="bg-brand-maroon px-6 py-5 text-white flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-bold text-lg text-white">
                    {selectedVacancy ? `Apply for ${selectedVacancy.title}` : "Teacher Application & Interest"}
                  </h3>
                  <p className="text-xs text-brand-saffron">
                    Details will be sent directly to Administration on WhatsApp
                  </p>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitSuccess ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-brand-umber">
                    Application Ready to Send!
                  </h4>
                  <p className="text-xs text-gray-600 max-w-xs mx-auto leading-relaxed">
                    Your details have been registered. WhatsApp should now open automatically with your pre-filled application message.
                  </p>
                  <button
                    onClick={handleCloseModal}
                    className="px-6 py-2.5 bg-brand-maroon text-white text-xs font-semibold rounded-xl hover:bg-brand-maroon-deep transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitApplication} className="p-6 sm:p-8 space-y-4 max-h-[80vh] overflow-y-auto">
                  {submitError && (
                    <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl flex items-center gap-2 border border-red-200">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-umber/80 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-brand-maroon outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-umber/80 mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 9876543210"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-brand-maroon outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-umber/80 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. ramesh@gmail.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-brand-maroon outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-umber/80 mb-1">
                        Highest Qualification *
                      </label>
                      <input
                        type="text"
                        required
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        placeholder="e.g. M.Sc, B.Ed"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-brand-maroon outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-umber/80 mb-1">
                        Teaching Experience *
                      </label>
                      <input
                        type="text"
                        required
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        placeholder="e.g. 3 years / Fresher"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-brand-maroon outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-umber/80 mb-1">
                      Subject / Notes / Message
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Mention your preferred classes (PU / High School), subjects, and any relevant background..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-brand-maroon outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 px-4 rounded-xl bg-brand-maroon hover:bg-brand-maroon-deep text-white font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-4 h-4 text-brand-saffron" />
                          Submit & Send to School WhatsApp
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-gray-500 text-center mt-2">
                      Will open WhatsApp on your phone or computer with your filled details.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
