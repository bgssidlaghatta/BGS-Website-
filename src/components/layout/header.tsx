"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavLink = {
  name: string;
  href: string;
  subItems?: { name: string; href: string; }[];
};

const navLinks: NavLink[] = [

  { 
    name: "About", 
    href: "/about",
    subItems: [
      { name: "About BGS", href: "/about" },
      { name: "Vision & Mission", href: "/about/vision-mission" },
      { name: "About the Founder", href: "/about/founder" },
      { name: "About the Trust", href: "/about/trust" },
    ]
  },
  { 
    name: "Academics", 
    href: "/academics",
    subItems: [
      { name: "Curriculum Overview", href: "/academics#overview" },
      { name: "Pre School", href: "/academics#pre-school" },
      { name: "Kindergarten", href: "/academics#kindergarten" },
      { name: "Primary School", href: "/academics#primary" },
      { name: "High School", href: "/academics#high-school" },
      { name: "PU", href: "/academics#pu" },
    ]
  },
  { 
    name: "Results", 
    href: "/results",
    subItems: [
      { name: "Results Overview", href: "/results" },
      { name: "SSLC Board Results", href: "/results/sslc" },
      { name: "PU Board Results", href: "/results/pu" },
      { name: "Entrance Exams", href: "/results/competitive" },
    ]
  },
  { name: "Faculty", href: "/faculty" },
  { name: "Gallery", href: "/gallery" },
  { name: "Alumni", href: "/alumni" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-brand-cream/80 backdrop-blur-xl border-b border-brand-maroon/5">
        <div className="flex h-20 items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-white shadow-md">
              <Image 
                src="/images/logo.jpg"
                alt="BGS Public School & PU College Logo"
                fill
                className="object-cover scale-105"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif font-bold text-lg text-brand-maroon leading-tight tracking-tight">
                BGS Public School
              </span>
              <span className="text-[11px] font-medium text-brand-saffron uppercase tracking-[0.2em] leading-tight">
                & PU College, Sidlaghatta
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-brand-umber/80 hover:text-brand-maroon transition-colors duration-300 flex items-center gap-1"
                >
                  {item.name}
                  {item.subItems && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200"
                    >
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  )}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand-saffron group-hover:w-2/3 transition-all duration-300 ease-out" />
                </Link>
                {item.subItems && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-48">
                    <div className="bg-white rounded-lg shadow-xl border border-brand-maroon/10 py-2 flex flex-col overflow-hidden">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="px-4 py-2.5 text-sm text-brand-umber/80 hover:text-brand-maroon hover:bg-brand-cream transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+910000000000"
              className="flex items-center gap-2 text-sm text-brand-umber/60 hover:text-brand-saffron transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="ledger-data text-xs">+91 00000 00000</span>
            </a>
            <Link href="/contact" className={cn(buttonVariants(), "ml-2 shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5")}>
              Enquire Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 p-2 text-brand-maroon"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-maroon-deep/95 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6 w-full max-h-[80vh] overflow-y-auto px-4 pb-8">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex flex-col items-center w-full"
                >
                  <Link
                    href={item.href}
                    onClick={() => !item.subItems && setMobileOpen(false)}
                    className="text-3xl font-serif font-bold text-brand-cream hover:text-brand-saffron transition-colors text-center"
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <div className="flex flex-col items-center gap-4 mt-5 mb-2 w-full">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-lg text-brand-cream/80 hover:text-brand-saffron transition-colors text-center"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
              >
                <Link href="/contact" onClick={() => setMobileOpen(false)} className={cn(buttonVariants({ size: "lg" }), "mt-4 text-lg")}>
                  Enquire Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
