import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="relative bg-brand-maroon-deep text-brand-cream overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-maroon via-brand-saffron to-brand-maroon" />

      {/* Main footer grid */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
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
              <p className="text-xs font-semibold text-brand-cream/80 italic tracking-wide">"Come to Learn, Go to Serve"</p>
            </div>
          </div>
          <p className="text-brand-cream/60 text-sm leading-relaxed max-w-xs mb-8">
            A premier institution in Sidlaghatta, offering holistic education from LKG through 2nd PU, with dedicated coaching for CET, NEET & JEE.
          </p>
            <div className="flex items-center gap-3 text-sm text-brand-cream/50">
              <MapPin className="w-4 h-4 shrink-0" />
              <address className="not-italic">Sidlaghatta, Karnataka, India</address>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-saffron mb-6">Navigate</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Academics", href: "/academics" },
                { name: "Results", href: "/results" },
                { name: "Faculty", href: "/faculty" },
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
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-saffron mb-6">Programs</h4>
            <ul className="space-y-3">
              {["School (LKG–10th)", "PU — PCMB", "PU — PCMCs", "PU — Commerce"].map((item) => (
                <li key={item} className="text-sm text-brand-cream/60">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-saffron mb-6">Get in Touch</h4>
            <div className="space-y-4 mb-8">
              <a href="tel:+910000000000" className="flex items-center gap-3 text-sm text-brand-cream/60 hover:text-brand-cream transition-colors">
                <Phone className="w-4 h-4 text-brand-saffron" /> +91 00000 00000
              </a>
              <a href="mailto:info@bgssidlaghatta.edu.in" className="flex items-center gap-3 text-sm text-brand-cream/60 hover:text-brand-cream transition-colors">
                <Mail className="w-4 h-4 text-brand-saffron" /> info@bgssidlaghatta.edu.in
              </a>
            </div>
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5")}>
              Enquire for Admission
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-cream/5">
        <div className="px-6 md:px-12 max-w-7xl mx-auto py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-cream/30 ledger-data">
            &copy; {new Date().getFullYear()} BGS Public School & PU College. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-brand-cream/30 hover:text-brand-cream/60 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-brand-cream/30 hover:text-brand-cream/60 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
