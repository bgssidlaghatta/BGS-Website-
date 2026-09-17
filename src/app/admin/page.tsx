"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  UploadCloud,
  Trash2,
  Camera,
  CheckCircle2,
  AlertTriangle,
  LogOut,
  ExternalLink,
  Search,
  X,
  RefreshCw,
  Sparkles,
  Info,
  Layers,
  Calendar,
  AlertCircle,
  Briefcase,
  Plus,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  GraduationCap,
  Users,
  ToggleLeft,
  ToggleRight,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryItem } from "@/lib/gallery-store";
import { Vacancy, CandidateApplication } from "@/lib/vacancies-store";

const DEFAULT_CATEGORIES = [
  "Campus",
  "Academic",
  "Facilities",
  "Activities",
  "Events",
  "Celebrations",
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Active top-level tab
  const [activeTab, setActiveTab] = useState<"recruitment" | "gallery">("recruitment");

  // Auth & config state
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<string | null>(null);
  const [cloudinaryConfigured, setCloudinaryConfigured] = useState(false);

  // ════════════════════ VACANCIES & RECRUITMENT STATE ════════════════════
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [applications, setApplications] = useState<CandidateApplication[]>([]);
  const [loadingVacancies, setLoadingVacancies] = useState(false);
  const [vacancyFilter, setVacancyFilter] = useState<"all" | "open" | "closed">("all");
  const [vacancySearch, setVacancySearch] = useState("");
  const [appSearch, setAppSearch] = useState("");

  // New Vacancy Form
  const [showVacancyForm, setShowVacancyForm] = useState(false);
  const [vacTitle, setVacTitle] = useState("");
  const [vacDepartment, setVacDepartment] = useState<
    "PU College" | "High School" | "Primary School" | "Languages" | "Other"
  >("PU College");
  const [vacSubject, setVacSubject] = useState("");
  const [vacQualifications, setVacQualifications] = useState("");
  const [vacExperience, setVacExperience] = useState("");
  const [vacType, setVacType] = useState<"Full-Time" | "Part-Time" | "Visiting Lecturer">("Full-Time");
  const [vacDeadline, setVacDeadline] = useState("");
  const [vacDescription, setVacDescription] = useState("");
  const [submittingVacancy, setSubmittingVacancy] = useState(false);
  const [vacancyError, setVacancyError] = useState<string | null>(null);
  const [vacancySuccess, setVacancySuccess] = useState<string | null>(null);
  const [vacancyToDelete, setVacancyToDelete] = useState<Vacancy | null>(null);
  const [isDeletingVacancy, setIsDeletingVacancy] = useState(false);

  // ════════════════════ GALLERY STATE ════════════════════
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Upload form state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Campus");
  const [customCategory, setCustomCategory] = useState("");
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);

  // Deletion modal state
  const [itemToDelete, setItemToDelete] = useState<GalleryItem | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Check auth session on load
  useEffect(() => {
    checkAuthAndLoadData();
  }, []);

  const checkAuthAndLoadData = async () => {
    setLoading(true);
    try {
      const authRes = await fetch("/api/admin/me");
      const authData = await authRes.json();

      if (!authRes.ok || !authData.authenticated) {
        router.push("/admin/login");
        return;
      }

      setUser(authData.username);
      setCloudinaryConfigured(authData.cloudinaryConfigured);

      // Fetch both Gallery and Vacancies data concurrently
      await Promise.all([fetchGalleryItems(), fetchVacanciesAndApplications()]);
    } catch (err) {
      console.error("Auth check failed:", err);
      router.push("/admin/login");
    } finally {
      setLoading(false);
    }
  };

  const fetchGalleryItems = async () => {
    try {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      if (data.items) {
        setItems(data.items);
      }
    } catch (err) {
      console.error("Failed to fetch gallery:", err);
    }
  };

  const fetchVacanciesAndApplications = async () => {
    setLoadingVacancies(true);
    try {
      const res = await fetch("/api/vacancies?all=true");
      const data = await res.json();
      if (data.vacancies) {
        setVacancies(data.vacancies);
      }
      if (data.applications) {
        setApplications(data.applications);
      }
    } catch (err) {
      console.error("Failed to fetch vacancies/applications:", err);
    } finally {
      setLoadingVacancies(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  // ════════════════════ VACANCY HANDLERS ════════════════════
  const handleCreateVacancy = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!vacTitle || !vacSubject || !vacQualifications) {
      setVacancyError("Please fill in Position Title, Subject, and Required Qualifications.");
      return;
    }

    setSubmittingVacancy(true);
    setVacancyError(null);
    setVacancySuccess(null);

    try {
      const res = await fetch("/api/vacancies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: vacTitle,
          department: vacDepartment,
          subject: vacSubject,
          qualifications: vacQualifications,
          experience: vacExperience || "1+ years",
          type: vacType,
          deadline: vacDeadline || "Open until filled",
          description: vacDescription || "Dedicated teacher to instruct curriculum and guide students.",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to create vacancy.");
      }

      setVacancySuccess("Vacancy published successfully to the website!");
      if (data.vacancy) {
        setVacancies((prev) => [data.vacancy, ...prev]);
      }

      // Reset form
      setVacTitle("");
      setVacSubject("");
      setVacQualifications("");
      setVacExperience("");
      setVacDeadline("");
      setVacDescription("");
      setShowVacancyForm(false);
    } catch (err: any) {
      setVacancyError(err?.message || "Failed to publish vacancy.");
    } finally {
      setSubmittingVacancy(false);
    }
  };

  const handleToggleVacancyStatus = async (id: string, currentStatus: "open" | "closed") => {
    const nextStatus = currentStatus === "open" ? "closed" : "open";
    try {
      const res = await fetch("/api/vacancies", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: nextStatus }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to update vacancy status.");
      }

      setVacancies((prev) =>
        prev.map((v) => (v.id === id ? { ...v, status: nextStatus } : v))
      );
    } catch (err: any) {
      alert(err?.message || "Failed to update status.");
    }
  };

  const confirmDeleteVacancy = async () => {
    if (!vacancyToDelete) return;
    setIsDeletingVacancy(true);

    try {
      const res = await fetch(`/api/vacancies?id=${vacancyToDelete.id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to delete vacancy.");
      }

      setVacancies((prev) => prev.filter((v) => v.id !== vacancyToDelete.id));
      setVacancyToDelete(null);
    } catch (err: any) {
      alert(err?.message || "Could not delete vacancy.");
    } finally {
      setIsDeletingVacancy(false);
    }
  };

  // ════════════════════ GALLERY HANDLERS ════════════════════
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setUploadError(null);
    setUploadSuccess(null);

    if (file) {
      if (!file.type.startsWith("image/")) {
        setUploadError("Please select a valid image file (JPG, PNG, WebP).");
        return;
      }

      setSelectedFile(file);
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);

      if (!title) {
        const cleanName = file.name
          .replace(/\.[^/.]+$/, "")
          .replace(/[-_]/g, " ");
        setTitle(cleanName.charAt(0).toUpperCase() + cleanName.slice(1));
      }
    }
  };

  const clearSelectedFile = () => {
    setSelectedFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      setUploadError("Please select or capture a photo first.");
      return;
    }

    setUploading(true);
    setUploadError(null);
    setUploadSuccess(null);

    const targetCategory = isCustomCategory
      ? customCategory.trim() || "Campus"
      : category;

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("title", title);
      formData.append("category", targetCategory);

      const res = await fetch("/api/gallery/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Upload failed.");
      }

      if (data.item) {
        setItems((prev) => [data.item, ...prev]);
      }

      setUploadSuccess("Photo uploaded successfully to Cloudinary & Gallery!");
      clearSelectedFile();
      setTitle("");
      setIsCustomCategory(false);
      setCustomCategory("");
    } catch (err: any) {
      setUploadError(
        err?.message ||
          "Failed to upload photo. Please check your connection and Cloudinary settings."
      );
    } finally {
      setUploading(false);
    }
  };

  const confirmDeleteGalleryItem = async () => {
    if (!itemToDelete) return;
    setIsDeleting(true);

    try {
      const res = await fetch("/api/gallery/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: itemToDelete.id,
          public_id: itemToDelete.public_id,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to delete photo.");
      }

      setItems((prev) => prev.filter((item) => item.id !== itemToDelete.id));
      setItemToDelete(null);
    } catch (err: any) {
      alert(err?.message || "Could not delete photo.");
    } finally {
      setIsDeleting(false);
    }
  };

  // ════════════════════ COMPUTED FILTERS ════════════════════
  const openVacanciesCount = vacancies.filter((v) => v.status === "open").length;

  const filteredVacancies = vacancies.filter((v) => {
    const matchesStatus =
      vacancyFilter === "all" || v.status === vacancyFilter;
    const matchesSearch =
      vacancySearch === "" ||
      v.title.toLowerCase().includes(vacancySearch.toLowerCase()) ||
      v.subject.toLowerCase().includes(vacancySearch.toLowerCase()) ||
      v.department.toLowerCase().includes(vacancySearch.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const filteredApplications = applications.filter((app) => {
    if (!appSearch) return true;
    const q = appSearch.toLowerCase();
    return (
      app.name.toLowerCase().includes(q) ||
      app.phone.toLowerCase().includes(q) ||
      app.email.toLowerCase().includes(q) ||
      (app.vacancyTitle && app.vacancyTitle.toLowerCase().includes(q)) ||
      app.qualification.toLowerCase().includes(q)
    );
  });

  const uniqueCategories = [
    "All",
    ...Array.from(new Set(items.map((i) => i.category))),
  ];

  const filteredGalleryItems = items.filter((item) => {
    const matchesCategory =
      filteredCategory === "All" ||
      item.category.toLowerCase() === filteredCategory.toLowerCase();
    const matchesQuery =
      searchQuery === "" ||
      item.alt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <RefreshCw className="w-8 h-8 text-brand-maroon animate-spin mb-4" />
        <p className="text-sm font-medium text-brand-umber/70">
          Loading BGS Administrative Control Hub...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-brand-umber flex flex-col font-sans">
      {/* ════════════ TOP NAVIGATION BAR ════════════ */}
      <header className="sticky top-0 z-40 bg-brand-maroon-deep text-brand-cream border-b border-brand-saffron/20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 bg-white rounded-full p-0.5 shadow-sm border border-brand-saffron overflow-hidden shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="BGS Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-base sm:text-lg leading-tight text-brand-cream">
                  BGS Admin Portal
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-brand-saffron text-brand-maroon-deep">
                  Control Center
                </span>
              </div>
              <p className="text-[11px] text-brand-cream/70 hidden sm:block">
                Logged in: <strong className="text-brand-saffron">{user}</strong>
              </p>
            </div>
          </div>

          {/* Tab Navigation in Header */}
          <div className="flex items-center gap-1 sm:gap-2 bg-black/20 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab("recruitment")}
              className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "recruitment"
                  ? "bg-brand-saffron text-brand-maroon-deep shadow-sm"
                  : "text-brand-cream/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Recruitment</span>
              {openVacanciesCount > 0 && (
                <span
                  className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                    activeTab === "recruitment"
                      ? "bg-brand-maroon-deep text-brand-saffron"
                      : "bg-emerald-500 text-white"
                  }`}
                >
                  {openVacanciesCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab("gallery")}
              className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "gallery"
                  ? "bg-brand-saffron text-brand-maroon-deep shadow-sm"
                  : "text-brand-cream/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Gallery</span>
              <span
                className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                  activeTab === "gallery"
                    ? "bg-brand-maroon-deep text-brand-saffron"
                    : "bg-white/20 text-white"
                }`}
              >
                {items.length}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {activeTab === "recruitment" ? (
              <Link
                href="/careers"
                target="_blank"
                className="px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium text-brand-cream/90 hover:text-white bg-white/10 hover:bg-white/15 transition-all flex items-center gap-1.5"
                title="View public careers page"
              >
                <ExternalLink className="w-3.5 h-3.5 text-brand-saffron" />
                <span className="hidden md:inline">Public</span> Careers
              </Link>
            ) : (
              <Link
                href="/gallery"
                target="_blank"
                className="px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium text-brand-cream/90 hover:text-white bg-white/10 hover:bg-white/15 transition-all flex items-center gap-1.5"
                title="View public gallery page"
              >
                <ExternalLink className="w-3.5 h-3.5 text-brand-saffron" />
                <span className="hidden md:inline">Public</span> Gallery
              </Link>
            )}

            <button
              onClick={handleLogout}
              className="px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium text-red-200 hover:text-white bg-red-950/40 hover:bg-red-900/60 border border-red-800/40 transition-all flex items-center gap-1 cursor-pointer"
              title="Logout from admin session"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* ════════════ MAIN CONTENT AREA ════════════ */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* ════════════════════════════════════════════════════════════
            TAB 1: TEACHER RECRUITMENT & VACANCY MANAGEMENT
        ════════════════════════════════════════════════════════════ */}
        {activeTab === "recruitment" && (
          <div className="space-y-8">
            
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-brand-maroon/10 shadow-xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Active Openings</p>
                  <p className="text-2xl font-bold text-brand-maroon font-serif">{openVacanciesCount}</p>
                  <p className="text-[11px] text-emerald-600 font-medium">Live on Careers Page</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-brand-maroon/10 shadow-xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Total Positions</p>
                  <p className="text-2xl font-bold text-brand-umber font-serif">{vacancies.length}</p>
                  <p className="text-[11px] text-gray-400">Created in Database</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-brand-maroon/10 shadow-xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Candidate Applications</p>
                  <p className="text-2xl font-bold text-purple-700 font-serif">{applications.length}</p>
                  <p className="text-[11px] text-purple-600 font-medium">Inquiries Logged</p>
                </div>
              </div>

              <div className="bg-emerald-50/80 p-5 rounded-2xl border border-emerald-200 shadow-xs flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-emerald-800 font-semibold uppercase tracking-wider">WhatsApp Dispatch</p>
                  <p className="text-base font-bold text-emerald-950 truncate">+91 99019 23097</p>
                  <p className="text-[11px] text-emerald-700 leading-tight">Instant alerts arrive on this phone number</p>
                </div>
              </div>
            </div>

            {/* Notification alert banner */}
            <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200/80 text-blue-900 text-xs sm:text-sm flex items-start gap-3 shadow-xs">
              <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <p className="font-semibold text-blue-950">
                  How the Teacher Recruitment Portal Works
                </p>
                <p className="text-blue-800 text-xs leading-relaxed">
                  When you release a vacancy here, it immediately appears on the public{" "}
                  <Link href="/careers" target="_blank" className="underline font-semibold hover:text-blue-950">
                    BGS Careers Page
                  </Link>
                  . Whenever an interested candidate submits their application, their complete details are safely archived in your admin log below and an automated pre-formatted application message is dispatched directly to the school WhatsApp number <strong>+91 99019 23097</strong>.
                </p>
              </div>
            </div>

            {/* ════════════ RELEASE NEW VACANCY SECTION ════════════ */}
            <section className="bg-white rounded-2xl shadow-sm border border-brand-maroon/10 overflow-hidden">
              <div className="bg-gradient-to-r from-brand-maroon to-brand-maroon-deep px-6 py-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Briefcase className="w-5 h-5 text-brand-saffron" />
                  <h2 className="font-serif font-bold text-lg text-white">
                    Release Teaching Vacancy
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setShowVacancyForm(!showVacancyForm)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-saffron text-brand-maroon-deep hover:bg-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {showVacancyForm ? (
                    <>
                      <X className="w-3.5 h-3.5" />
                      <span>Hide Form</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Release New Opening</span>
                    </>
                  )}
                </button>
              </div>

              <AnimatePresence>
                {showVacancyForm && (
                  <motion.form
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    onSubmit={handleCreateVacancy}
                    className="p-6 sm:p-8 space-y-6 border-b border-gray-100 bg-brand-cream/20"
                  >
                    {vacancyError && (
                      <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2.5">
                        <AlertCircle className="w-5 h-5 shrink-0 text-red-500 mt-0.5" />
                        <span>{vacancyError}</span>
                      </div>
                    )}

                    {vacancySuccess && (
                      <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600 mt-0.5" />
                        <span>{vacancySuccess}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {/* Position Title */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-brand-umber uppercase tracking-wider">
                          Position / Role Title *
                        </label>
                        <input
                          type="text"
                          required
                          value={vacTitle}
                          onChange={(e) => setVacTitle(e.target.value)}
                          placeholder="e.g., Lecturer in Mathematics / Science Teacher"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon text-sm bg-white"
                        />
                      </div>

                      {/* Department */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-brand-umber uppercase tracking-wider">
                          Department / Wing *
                        </label>
                        <select
                          value={vacDepartment}
                          onChange={(e) => setVacDepartment(e.target.value as any)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon text-sm bg-white"
                        >
                          <option value="PU College">PU College</option>
                          <option value="High School">High School (CBSE / State)</option>
                          <option value="Primary School">Primary & Middle School</option>
                          <option value="Languages">Languages (Kannada, Sanskrit, Hindi)</option>
                          <option value="Other">Other / Foundational / Sports</option>
                        </select>
                      </div>

                      {/* Subject */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-brand-umber uppercase tracking-wider">
                          Specialization / Subject *
                        </label>
                        <input
                          type="text"
                          required
                          value={vacSubject}
                          onChange={(e) => setVacSubject(e.target.value)}
                          placeholder="e.g., Physics, Commerce, English, Biology"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon text-sm bg-white"
                        />
                      </div>

                      {/* Required Qualification */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-brand-umber uppercase tracking-wider">
                          Required Qualifications *
                        </label>
                        <input
                          type="text"
                          required
                          value={vacQualifications}
                          onChange={(e) => setVacQualifications(e.target.value)}
                          placeholder="e.g., M.Sc, B.Ed / M.Com / M.A in Kannada"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon text-sm bg-white"
                        />
                      </div>

                      {/* Experience */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-brand-umber uppercase tracking-wider">
                          Experience Required
                        </label>
                        <input
                          type="text"
                          value={vacExperience}
                          onChange={(e) => setVacExperience(e.target.value)}
                          placeholder="e.g., 2+ years in PU / Freshers welcome"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon text-sm bg-white"
                        />
                      </div>

                      {/* Job Type */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-brand-umber uppercase tracking-wider">
                          Employment Type
                        </label>
                        <select
                          value={vacType}
                          onChange={(e) => setVacType(e.target.value as any)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon text-sm bg-white"
                        >
                          <option value="Full-Time">Full-Time</option>
                          <option value="Part-Time">Part-Time</option>
                          <option value="Visiting Lecturer">Visiting Lecturer</option>
                        </select>
                      </div>

                      {/* Deadline */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-brand-umber uppercase tracking-wider">
                          Application Deadline
                        </label>
                        <input
                          type="text"
                          value={vacDeadline}
                          onChange={(e) => setVacDeadline(e.target.value)}
                          placeholder="e.g., Immediate / 30 May 2026"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon text-sm bg-white"
                        />
                      </div>

                      {/* Description */}
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-xs font-semibold text-brand-umber uppercase tracking-wider">
                          Description & Responsibilities
                        </label>
                        <input
                          type="text"
                          value={vacDescription}
                          onChange={(e) => setVacDescription(e.target.value)}
                          placeholder="e.g., Deliver curriculum, mentor students for board examinations, foster analytical thinking."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon text-sm bg-white"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setShowVacancyForm(false)}
                        className="px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={submittingVacancy}
                        className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-brand-maroon hover:bg-brand-maroon-deep shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {submittingVacancy ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin text-brand-saffron" />
                            Publishing Vacancy...
                          </>
                        ) : (
                          <>
                            <Check className="w-4 h-4 text-brand-saffron" />
                            Publish Vacancy on Website
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* Vacancies List Toolbar */}
              <div className="p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-brand-maroon">
                      Released Vacancies ({filteredVacancies.length})
                    </h3>
                    <p className="text-xs text-gray-500">
                      Manage vacancy statuses or delete outdated openings.
                    </p>
                  </div>

                  {/* Filter & Search */}
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={vacancySearch}
                        onChange={(e) => setVacancySearch(e.target.value)}
                        placeholder="Search position..."
                        className="pl-8 pr-3 py-1.5 rounded-lg border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:border-brand-maroon"
                      />
                    </div>

                    <div className="flex rounded-lg border border-gray-200 p-0.5 bg-gray-50">
                      <button
                        onClick={() => setVacancyFilter("all")}
                        className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                          vacancyFilter === "all"
                            ? "bg-white text-brand-maroon shadow-xs font-semibold"
                            : "text-gray-500 hover:text-gray-800"
                        }`}
                      >
                        All ({vacancies.length})
                      </button>
                      <button
                        onClick={() => setVacancyFilter("open")}
                        className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                          vacancyFilter === "open"
                            ? "bg-emerald-600 text-white shadow-xs font-semibold"
                            : "text-gray-500 hover:text-gray-800"
                        }`}
                      >
                        Active ({openVacanciesCount})
                      </button>
                      <button
                        onClick={() => setVacancyFilter("closed")}
                        className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                          vacancyFilter === "closed"
                            ? "bg-gray-700 text-white shadow-xs font-semibold"
                            : "text-gray-500 hover:text-gray-800"
                        }`}
                      >
                        Closed ({vacancies.length - openVacanciesCount})
                      </button>
                    </div>
                  </div>
                </div>

                {/* Vacancy Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <AnimatePresence>
                    {filteredVacancies.map((vac) => (
                      <motion.div
                        key={vac.id}
                        layout
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        className={`p-5 rounded-xl border transition-all ${
                          vac.status === "open"
                            ? "bg-white border-emerald-200 shadow-xs hover:border-emerald-300"
                            : "bg-gray-50/70 border-gray-200 opacity-80"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                  vac.status === "open"
                                    ? "bg-emerald-100 text-emerald-800"
                                    : "bg-gray-200 text-gray-700"
                                }`}
                              >
                                {vac.status === "open" ? "Active / Open" : "Closed"}
                              </span>
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-brand-cream border border-brand-saffron/20 text-brand-maroon">
                                {vac.department}
                              </span>
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-gray-100 text-gray-600">
                                {vac.type}
                              </span>
                            </div>
                            <h4 className="font-serif font-bold text-base text-brand-umber">
                              {vac.title}
                            </h4>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              onClick={() => handleToggleVacancyStatus(vac.id, vac.status)}
                              className={`p-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                                vac.status === "open"
                                  ? "text-amber-700 hover:bg-amber-50"
                                  : "text-emerald-700 hover:bg-emerald-50"
                              }`}
                              title={vac.status === "open" ? "Close vacancy" : "Re-open vacancy"}
                            >
                              {vac.status === "open" ? (
                                <ToggleRight className="w-5 h-5 text-emerald-600" />
                              ) : (
                                <ToggleLeft className="w-5 h-5 text-gray-400" />
                              )}
                            </button>

                            <button
                              onClick={() => setVacancyToDelete(vac)}
                              className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                              title="Delete vacancy"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <p className="text-xs text-gray-600 line-clamp-2 mb-3">
                          {vac.description}
                        </p>

                        <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-500 pt-3 border-t border-gray-100">
                          <div>
                            <span className="font-semibold text-gray-700 block">Required:</span>
                            <span className="truncate block">{vac.qualifications}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-700 block">Experience:</span>
                            <span className="truncate block">{vac.experience}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-700 block">Deadline:</span>
                            <span className="truncate block">{vac.deadline}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-700 block">Subject:</span>
                            <span className="truncate block">{vac.subject}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {filteredVacancies.length === 0 && (
                  <div className="text-center py-12 bg-gray-50/50 rounded-xl border border-dashed border-gray-200">
                    <Briefcase className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-600">
                      No vacancies found matching your filters.
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Click &quot;Release New Opening&quot; above to publish a position.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* ════════════ CANDIDATE APPLICATIONS RECEIVED ════════════ */}
            <section className="bg-white rounded-2xl shadow-sm border border-brand-maroon/10 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-900 to-brand-maroon-deep px-6 py-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Users className="w-5 h-5 text-brand-saffron" />
                  <h3 className="font-serif font-bold text-lg text-white">
                    Candidate Inquiries & Applications ({applications.length})
                  </h3>
                </div>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={appSearch}
                    onChange={(e) => setAppSearch(e.target.value)}
                    placeholder="Search candidate name, phone..."
                    className="pl-8 pr-3 py-1 rounded-lg border border-white/20 text-xs bg-white/10 text-white placeholder-white/50 focus:bg-white focus:text-brand-umber focus:placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="p-6">
                {filteredApplications.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredApplications.map((app) => {
                      const cleanPhone = app.phone.replace(/[^0-9]/g, "");
                      const intlPhone = cleanPhone.startsWith("91")
                        ? cleanPhone
                        : cleanPhone.length === 10
                        ? `91${cleanPhone}`
                        : cleanPhone;

                      const replyMessage = `Hello ${app.name}, greetings from BGS Public School & PU College. We received your application for "${app.vacancyTitle || 'Teaching Faculty'}". We would like to connect regarding your profile.`;
                      const whatsappReplyUrl = `https://wa.me/${intlPhone}?text=${encodeURIComponent(replyMessage)}`;

                      return (
                        <div
                          key={app.id}
                          className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-brand-saffron/40 hover:shadow-sm transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <div>
                                <h4 className="font-serif font-bold text-base text-brand-maroon">
                                  {app.name}
                                </h4>
                                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-brand-cream border border-brand-saffron/30 text-brand-umber mt-0.5">
                                  Applied for: {app.vacancyTitle || "General Application"}
                                </span>
                              </div>
                              <span className="text-[10px] text-gray-400 font-mono whitespace-nowrap">
                                {new Date(app.submittedAt).toLocaleDateString("en-IN", {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                })}
                              </span>
                            </div>

                            <div className="space-y-1.5 text-xs text-gray-600 mb-3">
                              <p className="flex items-center gap-2">
                                <Phone className="w-3.5 h-3.5 text-brand-saffron shrink-0" />
                                <strong className="text-gray-800">{app.phone}</strong>
                              </p>
                              <p className="flex items-center gap-2">
                                <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                                <span>{app.email}</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <GraduationCap className="w-3.5 h-3.5 text-brand-maroon shrink-0" />
                                <span>{app.qualification} ({app.experience})</span>
                              </p>
                              {app.message && (
                                <p className="text-[11px] text-gray-500 bg-white p-2.5 rounded-lg border border-gray-100 italic mt-2">
                                  &quot;{app.message}&quot;
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="pt-3 border-t border-gray-200 flex items-center justify-between gap-2">
                            <span className="text-[10px] text-gray-400">
                              Direct Follow-up:
                            </span>

                            <div className="flex items-center gap-2">
                              <a
                                href={`tel:${app.phone}`}
                                className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors flex items-center gap-1"
                              >
                                <Phone className="w-3 h-3 text-gray-600" />
                                <span>Call</span>
                              </a>

                              <a
                                href={whatsappReplyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                              >
                                <MessageCircle className="w-3.5 h-3.5" />
                                <span>Chat on WhatsApp</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                    <Users className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-600">
                      No candidate submissions recorded yet.
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Whenever someone applies on the website, their message is sent to WhatsApp (+91 99019 23097) and logged here.
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════
            TAB 2: PHOTO GALLERY MANAGER
        ════════════════════════════════════════════════════════════ */}
        {activeTab === "gallery" && (
          <div className="space-y-8">
            
            {/* Cloudinary Status Banner */}
            {!cloudinaryConfigured ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold text-amber-800">
                      Cloudinary credentials are not configured yet
                    </p>
                    <p className="text-amber-700 text-xs sm:text-sm">
                      To upload new photos directly to your Cloudinary storage, add your{" "}
                      <code className="bg-amber-100 px-1.5 py-0.5 rounded font-mono text-xs text-amber-900">
                        CLOUDINARY_CLOUD_NAME
                      </code>
                      ,{" "}
                      <code className="bg-amber-100 px-1.5 py-0.5 rounded font-mono text-xs text-amber-900">
                        CLOUDINARY_API_KEY
                      </code>
                      , and{" "}
                      <code className="bg-amber-100 px-1.5 py-0.5 rounded font-mono text-xs text-amber-900">
                        CLOUDINARY_API_SECRET
                      </code>{" "}
                      inside <code className="font-mono text-xs">.env.local</code>.
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-emerald-50/80 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm">
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Cloudinary Storage Active & Ready for Photo Uploads</span>
                </div>
                <span className="text-[11px] text-emerald-600 uppercase tracking-wider font-semibold">
                  Live Connected
                </span>
              </div>
            )}

            {/* Upload Card */}
            <section className="bg-white rounded-2xl shadow-sm border border-brand-maroon/10 overflow-hidden">
              <div className="bg-gradient-to-r from-brand-maroon to-brand-maroon-deep px-6 py-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <UploadCloud className="w-5 h-5 text-brand-saffron" />
                  <h2 className="font-serif font-bold text-lg text-white">
                    Add New Photo to Gallery
                  </h2>
                </div>
                <span className="text-xs text-brand-saffron/90 hidden sm:inline">
                  Supports Mobile Camera & Laptop Files
                </span>
              </div>

              <form onSubmit={handleUploadSubmit} className="p-6 sm:p-8 space-y-6">
                {uploadError && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2.5"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 text-red-500 mt-0.5" />
                    <span>{uploadError}</span>
                  </motion.div>
                )}

                {uploadSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600 mt-0.5" />
                    <span>{uploadSuccess}</span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Drag & Drop / Camera Dropzone */}
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      id="gallery-file-input"
                    />

                    {!previewUrl ? (
                      <label
                        htmlFor="gallery-file-input"
                        className="group border-2 border-dashed border-gray-300 hover:border-brand-maroon rounded-2xl p-8 text-center cursor-pointer transition-all duration-200 bg-gray-50/60 hover:bg-brand-saffron/5 flex flex-col items-center justify-center min-h-[220px]"
                      >
                        <div className="w-14 h-14 rounded-full bg-brand-maroon/5 group-hover:bg-brand-maroon/10 flex items-center justify-center text-brand-maroon mb-3 transition-colors">
                          <Camera className="w-7 h-7 sm:hidden" />
                          <UploadCloud className="w-7 h-7 hidden sm:block" />
                        </div>
                        <p className="text-sm font-semibold text-brand-umber mb-1">
                          <span className="sm:hidden">Tap to Take Photo or Pick from Gallery</span>
                          <span className="hidden sm:inline">Click to Browse or Drag Photo Here</span>
                        </p>
                        <p className="text-xs text-gray-500 max-w-xs">
                          Supports JPG, PNG, WebP up to 15MB.
                        </p>
                      </label>
                    ) : (
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-gray-900 group">
                        <Image
                          src={previewUrl}
                          alt="Upload preview"
                          fill
                          className="object-contain"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="px-3 py-1.5 bg-white text-brand-umber text-xs font-semibold rounded-lg shadow hover:bg-gray-100 transition-colors cursor-pointer"
                          >
                            Change Photo
                          </button>
                          <button
                            type="button"
                            onClick={clearSelectedFile}
                            className="p-1.5 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition-colors cursor-pointer"
                            title="Remove preview"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Metadata Inputs */}
                  <div className="lg:col-span-7 space-y-4 flex flex-col justify-center">
                    <div>
                      <label className="block text-xs font-semibold text-brand-umber uppercase tracking-wider mb-1.5">
                        Photo Caption / Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g., Annual Sports Day 2026 Opening Ceremony"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon text-sm bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-umber uppercase tracking-wider mb-1.5">
                        Category / Gallery Tab *
                      </label>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-2">
                        {DEFAULT_CATEGORIES.map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => {
                              setCategory(cat);
                              setIsCustomCategory(false);
                            }}
                            className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all text-center cursor-pointer ${
                              !isCustomCategory && category === cat
                                ? "bg-brand-maroon text-white border-brand-maroon shadow-xs"
                                : "bg-white text-brand-umber/80 border-gray-200 hover:border-brand-maroon/30"
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          type="button"
                          onClick={() => setIsCustomCategory(!isCustomCategory)}
                          className="text-xs text-brand-saffron font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{isCustomCategory ? "Use standard category" : "+ Add custom category"}</span>
                        </button>
                      </div>

                      {isCustomCategory && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-2"
                        >
                          <input
                            type="text"
                            value={customCategory}
                            onChange={(e) => setCustomCategory(e.target.value)}
                            placeholder="Enter new category name..."
                            className="w-full px-4 py-2 rounded-xl border border-brand-saffron text-sm bg-white"
                          />
                        </motion.div>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={uploading || !selectedFile}
                        className="w-full sm:w-auto px-8 py-3 rounded-xl bg-brand-maroon hover:bg-brand-maroon-deep text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {uploading ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin text-brand-saffron" />
                            <span>Uploading to Cloudinary...</span>
                          </>
                        ) : (
                          <>
                            <UploadCloud className="w-4 h-4 text-brand-saffron" />
                            <span>Upload & Publish Photo</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </section>

            {/* Gallery Items Grid */}
            <section className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-200">
                <div>
                  <h3 className="font-serif font-bold text-xl text-brand-maroon">
                    Published Photos ({filteredGalleryItems.length})
                  </h3>
                  <p className="text-xs text-gray-500">
                    Live photos visible in the website gallery.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search photos..."
                      className="pl-9 pr-4 py-1.5 rounded-xl border border-gray-200 text-xs bg-white focus:outline-hidden focus:border-brand-maroon"
                    />
                  </div>

                  <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full">
                    {uniqueCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setFilteredCategory(cat)}
                        className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                          filteredCategory.toLowerCase() === cat.toLowerCase()
                            ? "bg-brand-maroon text-white"
                            : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <AnimatePresence>
                  {filteredGalleryItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow group flex flex-col"
                    >
                      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute top-2.5 left-2.5">
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-black/60 text-white backdrop-blur-xs">
                            {item.category}
                          </span>
                        </div>

                        {item.isSeed && (
                          <div className="absolute top-2.5 right-2.5">
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-brand-saffron/90 text-brand-maroon-deep shadow-xs">
                              Campus Default
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h4
                            className="font-medium text-sm text-brand-umber line-clamp-2"
                            title={item.alt}
                          >
                            {item.alt}
                          </h4>
                          <p className="text-[11px] text-gray-400 mt-1 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(item.createdAt).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-gray-100 mt-3 flex items-center justify-between">
                          <span className="text-[11px] text-gray-400 font-mono truncate max-w-[120px]">
                            {item.public_id || item.id}
                          </span>

                          <button
                            onClick={() => setItemToDelete(item)}
                            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-red-600 hover:text-white hover:bg-red-600 bg-red-50 transition-colors flex items-center gap-1 cursor-pointer"
                            title="Delete photo"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {filteredGalleryItems.length === 0 && (
                <div className="text-center py-16 bg-white rounded-2xl border border-gray-200/80">
                  <Layers className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-600">
                    No photos found matching your criteria.
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Upload a photo above to add to this category.
                  </p>
                </div>
              )}
            </section>
          </div>
        )}
      </main>

      {/* ════════════ CONFIRM VACANCY DELETE DIALOG ════════════ */}
      <AnimatePresence>
        {vacancyToDelete && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-200 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 text-red-600 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <Trash2 className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-brand-umber">
                    Confirm Vacancy Removal
                  </h3>
                  <p className="text-xs text-gray-500">
                    This will remove the position from the public careers page.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 mb-4 text-xs space-y-1">
                <p className="font-bold text-brand-maroon text-sm">{vacancyToDelete.title}</p>
                <p className="text-gray-600">Department: {vacancyToDelete.department}</p>
                <p className="text-gray-600">Subject: {vacancyToDelete.subject}</p>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  disabled={isDeletingVacancy}
                  onClick={() => setVacancyToDelete(null)}
                  className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={isDeletingVacancy}
                  onClick={confirmDeleteVacancy}
                  className="px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-md transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-60"
                >
                  {isDeletingVacancy ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      Removing...
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-3.5 h-3.5" />
                      Yes, Delete Vacancy
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ════════════ CONFIRM GALLERY PHOTO DELETE DIALOG ════════════ */}
      <AnimatePresence>
        {itemToDelete && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-200 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 text-red-600 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <Trash2 className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-brand-umber">
                    Confirm Photo Deletion
                  </h3>
                  <p className="text-xs text-gray-500">
                    This action cannot be undone.
                  </p>
                </div>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-gray-200 bg-gray-100">
                <Image
                  src={itemToDelete.src}
                  alt={itemToDelete.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-sm text-gray-700 mb-6">
                Are you sure you want to permanently delete{" "}
                <strong className="text-brand-umber">&quot;{itemToDelete.alt}&quot;</strong>?
                It will be removed from the gallery and Cloudinary storage.
              </p>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  disabled={isDeleting}
                  onClick={() => setItemToDelete(null)}
                  className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={isDeleting}
                  onClick={confirmDeleteGalleryItem}
                  className="px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-md transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-60"
                >
                  {isDeleting ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      Deleting...
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-3.5 h-3.5" />
                      Yes, Delete Photo
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
