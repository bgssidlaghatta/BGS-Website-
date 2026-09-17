"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Lock, User, Eye, EyeOff, ArrowLeft, ShieldCheck, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed. Check your credentials.");
      }

      // Redirect to admin dashboard
      router.push("/admin");
      router.refresh();
    } catch (err: any) {
      setError(err?.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-maroon-deep via-brand-maroon to-[#250809] relative overflow-hidden">
      {/* Subtle background ornamentation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-brand-saffron/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-saffron/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-maroon/30 rounded-full blur-3xl pointer-events-none" />

      {/* Back button */}
      <div className="w-full max-w-md mb-6 z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-brand-cream/70 hover:text-brand-saffron transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Website
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-brand-cream/10 z-10"
      >
        {/* Header bar */}
        <div className="bg-brand-maroon px-6 py-8 text-center relative border-b border-brand-saffron/20">
          <div className="relative w-20 h-20 mx-auto mb-4 bg-white rounded-full p-1 shadow-md border-2 border-brand-saffron">
            <Image
              src="/images/logo.jpg"
              alt="BGS Logo"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="text-2xl font-serif font-bold text-brand-cream">
            BGS Admin Portal
          </h1>
          <p className="text-xs uppercase tracking-[0.2em] text-brand-saffron font-semibold mt-1">
            Gallery & Media Management
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2.5"
            >
              <AlertCircle className="w-5 h-5 shrink-0 text-red-500 mt-0.5" />
              <span>{error}</span>
            </motion.div>
          )}

          <div>
            <label
              htmlFor="username"
              className="block text-xs font-semibold uppercase tracking-wider text-brand-umber/80 mb-1.5"
            >
              Admin Username
            </label>
            <div className="relative rounded-lg shadow-xs">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-umber/40">
                <User className="w-5 h-5" />
              </div>
              <input
                id="username"
                name="username"
                type="text"
                required
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter admin username"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-maroon focus:ring-2 focus:ring-brand-maroon/20 text-brand-umber text-sm outline-none transition-all placeholder:text-gray-400"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xs font-semibold uppercase tracking-wider text-brand-umber/80 mb-1.5"
            >
              Password
            </label>
            <div className="relative rounded-lg shadow-xs">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-umber/40">
                <Lock className="w-5 h-5" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full pl-10 pr-11 py-3 rounded-xl border border-gray-200 focus:border-brand-maroon focus:ring-2 focus:ring-brand-maroon/20 text-brand-umber text-sm outline-none transition-all placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-brand-maroon"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 rounded-xl bg-brand-maroon hover:bg-brand-maroon-deep text-white font-semibold text-sm shadow-lg shadow-brand-maroon/20 hover:shadow-brand-maroon/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Authenticating...
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                Sign In to Dashboard
              </>
            )}
          </button>

          <div className="pt-2 text-center text-xs text-gray-500 flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-brand-saffron" />
            <span>Authorized BGS School Staff Only</span>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
