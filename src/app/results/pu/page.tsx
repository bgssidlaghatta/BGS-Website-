"use client";

import Image from "next/image";
import { Reveal, staggerContainer, fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const puResults = [
  { year: "2026", name: "Results Awaiting", stream: "PCMB", score: "—", pct: "—" },
  { year: "2026", name: "Results Awaiting", stream: "PCMCs", score: "—", pct: "—" },
  { year: "2026", name: "Results Awaiting", stream: "Commerce", score: "—", pct: "—" },
];

export default function PUResultsPage() {
  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative py-28 md:py-36 bg-brand-cream paper-texture border-b border-brand-maroon/10">
        <div className="px-6 md:px-12 max-w-5xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-6">
              Pre-University
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              PU Board Results
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-brand-umber/70 max-w-2xl mx-auto leading-relaxed">
              Excellence across all streams. Our PU students don't just clear the boards—they dominate them, setting the stage for top-tier professional courses.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════ RESULTS BANNER & TABLE ════════════════════ */}
      <section className="py-28 bg-brand-offwhite">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          
          <Reveal>
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl mb-16 border-2 border-brand-maroon/10 bg-white group">
              <Image 
                src="/images/collegeresult.png" 
                alt="PU Board Results Banner" 
                width={2000}
                height={1000}
                className="w-full h-auto object-contain" 
                sizes="100vw"
                unoptimized
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl overflow-hidden border border-brand-maroon/10 shadow-xl">
              <div className="overflow-x-auto">
                <Table className="w-full min-w-[700px]">
                  <TableHeader>
                    <TableRow className="bg-brand-maroon-deep hover:bg-brand-maroon-deep">
                      <TableHead className="px-8 py-6 text-left text-xs font-semibold uppercase tracking-widest text-brand-cream/60">Year</TableHead>
                      <TableHead className="px-8 py-6 text-left text-xs font-semibold uppercase tracking-widest text-brand-cream/60">Student Name</TableHead>
                      <TableHead className="px-8 py-6 text-left text-xs font-semibold uppercase tracking-widest text-brand-cream/60">Stream</TableHead>
                      <TableHead className="px-8 py-6 text-right text-xs font-semibold uppercase tracking-widest text-brand-cream/60">Score</TableHead>
                      <TableHead className="px-8 py-6 text-right text-xs font-semibold uppercase tracking-widest text-brand-cream/60">Percentage</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {puResults.map((row, i) => (
                      <TableRow key={i} className={`border-b border-brand-maroon/5 hover:bg-brand-saffron/5 transition-colors ${i % 2 === 0 ? 'bg-brand-cream' : 'bg-brand-offwhite'}`}>
                        <TableCell className="px-8 py-6 ledger-data text-base font-bold text-brand-umber/70">{row.year}</TableCell>
                        <TableCell className="px-8 py-6 text-base font-medium text-white">{row.name}</TableCell>
                        <TableCell className="px-8 py-6">
                          <span className="px-4 py-2 bg-brand-maroon/5 text-white text-xs font-semibold rounded-lg ledger-data">
                            {row.stream}
                          </span>
                        </TableCell>
                        <TableCell className="px-8 py-6 text-right ledger-data text-xl font-bold text-white">{row.score}</TableCell>
                        <TableCell className="px-8 py-6 text-right ledger-data text-xl font-bold text-brand-gold">{row.pct}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </Reveal>

        </div>
      </section>
    </>
  );
}
