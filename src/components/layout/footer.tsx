"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight, MessageCircle, Lock } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal, StaggerReveal, StaggerItem } from "@/lib/animations";

export function Footer() {
  return (
    <footer className="relative bg-brand-maroon-deep text-brand-cream overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-maroon via-brand-saffron to-brand-maroon" />

      {/* Main footer grid */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto pt-20 pb-12">
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <StaggerItem className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-16 h-16 bg-white rounded-full shadow-lg overflow-hidden border-2 border-brand-cream">
                <Image
                  src="/images/logo.jpg"
                  alt="BGS Logo"
                  fill
                  className="object-cover scale-105"
                />
              </div>
              <div>
              <p className="font-serif font-bold text-lg text-brand-cream leading-tight">BGS Public School</p>
              <p className="text-[11px] font-medium text-brand-saffron uppercase tracking-[0.2em] mb-3">& PU College</p>
              <p className="text-xs font-semibold text-brand-cream/80 italic tracking-wide">&quot;Come to Learn, Go to Serve&quot;</p>
            </div>
          </div>
          <p className="text-brand-cream/60 text-sm leading-relaxed max-w-xs mb-8">
            A premier institution in Sidlaghatta, offering holistic education from LKG through 2nd PU, with dedicated coaching for CET, NEET & JEE.
          </p>
            <div className="flex items-center gap-3 text-sm text-brand-cream/50">
              <MapPin className="w-4 h-4 shrink-0" />
              <address className="not-italic">Sidlaghatta, Karnataka, India</address>
            </div>
          </StaggerItem>

          {/* Quick Links */}
          <StaggerItem className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-saffron mb-6">Navigate</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "About Math", href: "/about/math" },
                { name: "About CAO", href: "/about/cao" },
                { name: "Academics", href: "/academics" },
                { name: "Results", href: "/results" },
                { name: "Faculty", href: "/faculty" },
                { name: "Careers", href: "/careers" },
                { name: "Gallery", href: "/gallery" },
                { name: "Alumni", href: "/alumni" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-cream/60 hover:text-brand-saffron transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0.5 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* Programs */}
          <StaggerItem className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-saffron mb-6">Programs</h4>
            <ul className="space-y-3">
              {["School (LKG–10th)", "PU — PCMB", "PU — PCMCs", "PU — Commerce"].map((item) => (
                <li key={item} className="text-sm text-brand-cream/60">{item}</li>
              ))}
            </ul>
          </StaggerItem>

          {/* Contact */}
          <StaggerItem className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white mb-6">Get in Touch</h4>
            <div className="space-y-4 mb-8">
              <a href="https://wa.me/919901923097" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-brand-cream/60 hover:text-brand-cream transition-colors duration-200">
                <MessageCircle className="w-4 h-4 text-brand-saffron" /> +91 99019 23097
              </a>
              <a href="mailto:bgsadmin5@gmail.com" className="flex items-center gap-3 text-sm text-brand-cream/60 hover:text-brand-cream transition-colors duration-200">
                <Mail className="w-4 h-4 text-brand-saffron" /> bgsadmin5@gmail.com
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="https://forms.gle/TQCsmK1dde6qhaA98" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn(buttonVariants({ size: "lg" }), "shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 btn-ripple inline-flex items-center gap-1.5")}
              >
                Admission Form
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href="https://forms.gle/kqZzV7jSUaEfsd9N8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-3 rounded-md border border-brand-cream/20 hover:border-brand-saffron text-brand-cream hover:text-brand-saffron text-sm font-semibold transition-all inline-flex items-center justify-center gap-1.5"
              >
                Alumni Form
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-cream/5">
        <div className="px-6 md:px-12 max-w-7xl mx-auto py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-cream/40 text-center md:text-left">
          <p className="ledger-data text-brand-cream/30">
            &copy; {new Date().getFullYear()} BGS Public School & PU College. All rights reserved.
          </p>

          <p className="text-brand-cream/50">
            Developed by{" "}
            <a
              href="https://opti-x.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-saffron font-medium hover:underline hover:text-brand-saffron-light transition-colors"
            >
              Mudasir Shariff (opti-x.in)
            </a>
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-brand-cream/30 hover:text-brand-cream/60 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-brand-cream/30 hover:text-brand-cream/60 transition-colors">Terms</Link>
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new Event("open-cookie-preferences"));
                }
              }}
              className="text-xs text-brand-cream/30 hover:text-brand-cream/60 transition-colors cursor-pointer"
            >
              Cookies
            </button>
            <Link href="/admin" className="text-xs text-brand-cream/30 hover:text-brand-saffron transition-colors inline-flex items-center gap-1">
              <Lock className="w-3 h-3" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
