"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
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

function NavItem({ item }: { item: NavLink }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={item.href}
        className="nav-underline relative px-4 py-2 text-sm font-medium text-brand-umber/80 hover:text-brand-maroon transition-colors duration-300 flex items-center gap-1"
      >
        {item.name}
        {item.subItems && (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5 opacity-70"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <path d="m6 9 6 6 6-6" />
          </motion.svg>
        )}
      </Link>
      <AnimatePresence>
        {item.subItems && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-full pt-2 z-50 min-w-48"
          >
            <div className="bg-white border border-border py-2 flex flex-col overflow-hidden origin-top-left shadow-md">
              {item.subItems.map((subItem, idx) => (
                <motion.div
                  key={subItem.name}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.2 }}
                >
                  <Link
                    href={subItem.href}
                    className="block px-4 py-2.5 text-sm text-brand-umber/80 hover:text-brand-maroon hover:bg-brand-cream transition-all duration-200 hover:pl-5"
                    onClick={() => setIsOpen(false)}
                  >
                    {subItem.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-300",
          scrolled
            ? "bg-brand-cream/90 backdrop-blur-2xl border-brand-maroon/8 shadow-lg shadow-brand-maroon/5"
            : "bg-brand-cream/80 backdrop-blur-xl border-brand-maroon/5"
        )}
      >
        {/* Marquee Banner */}
        <div className="bg-brand-maroon text-brand-cream overflow-hidden py-1.5 md:py-2 border-b border-brand-saffron/20 w-full flex">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            className="flex whitespace-nowrap items-center text-[11px] md:text-sm font-semibold tracking-[0.2em] uppercase w-max"
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-6 md:gap-12 px-3 md:px-6 shrink-0">
                <span>Karnataka State Board</span>
                <span className="text-brand-saffron/60 text-[10px] md:text-xs">◆</span>
                <span>Affiliated</span>
                <span className="text-brand-saffron/60 text-[10px] md:text-xs">◆</span>
                <span>Pre-University Board</span>
                <span className="text-brand-saffron/60 text-[10px] md:text-xs">◆</span>
                <span>Recognized</span>
                <span className="text-brand-saffron/60 text-[10px] md:text-xs">◆</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex h-20 items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-white shadow-md transition-transform duration-300 group-hover:scale-105">
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
              <NavItem key={item.name} item={item} />
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/919901923097"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-brand-umber/60 hover:text-brand-saffron transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="ledger-data text-xs">+91 99019 23097</span>
            </a>
            <Link href="/contact" className={cn(buttonVariants(), "ml-2 shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5 btn-ripple")}>
              Enquire Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 p-2 text-brand-maroon"
            aria-label="Toggle navigation menu"
          >
            <motion.div
              animate={{ rotate: mobileOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
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
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
                      {item.subItems.map((subItem, si) => (
                        <motion.div
                          key={subItem.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06 + si * 0.04 + 0.2, duration: 0.3 }}
                        >
                          <Link
                            href={subItem.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-lg text-brand-cream/80 hover:text-brand-saffron transition-colors text-center"
                          >
                            {subItem.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.4 }}
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
