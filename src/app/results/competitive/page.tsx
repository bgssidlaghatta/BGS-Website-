"use client";

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

const competitiveResults: any[] = [
];

export default function CompetitiveResultsPage() {
  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative py-28 md:py-36 bg-brand-cream paper-texture border-b border-brand-maroon/10">
        <div className="px-6 md:px-12 max-w-5xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-6">
              National Level
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-serif font-bold text-brand-maroon mb-6 leading-tight">
              Entrance Exams
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-brand-umber/70 max-w-2xl mx-auto leading-relaxed">
              Our integrated coaching methodology prepares students for the toughest competitive exams in the country, including NEET, CET, and JEE Main.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════ RESULTS TABLE ════════════════════ */}
      <section className="py-28 bg-brand-offwhite">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          
          <Reveal>
            <div className="rounded-3xl overflow-hidden border border-brand-maroon/10 shadow-xl">
              <div className="overflow-x-auto">
                <Table className="w-full min-w-[600px]">
                  <TableHeader>
                    <TableRow className="bg-brand-maroon-deep hover:bg-brand-maroon-deep">
                      <TableHead className="px-8 py-6 text-left text-xs font-semibold uppercase tracking-widest text-brand-cream/60">Year</TableHead>
                      <TableHead className="px-8 py-6 text-left text-xs font-semibold uppercase tracking-widest text-brand-cream/60">Student Name</TableHead>
                      <TableHead className="px-8 py-6 text-left text-xs font-semibold uppercase tracking-widest text-brand-cream/60">Exam</TableHead>
                      <TableHead className="px-8 py-6 text-right text-xs font-semibold uppercase tracking-widest text-brand-cream/60">Rank / Score</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {competitiveResults.map((row, i) => (
                      <TableRow key={i} className={`border-b border-brand-maroon/5 hover:bg-brand-saffron/5 transition-colors ${i % 2 === 0 ? 'bg-brand-cream' : 'bg-brand-offwhite'}`}>
                        <TableCell className="px-8 py-6 ledger-data text-base font-bold text-brand-umber/70">{row.year}</TableCell>
                        <TableCell className="px-8 py-6 text-base font-medium text-brand-maroon">{row.name}</TableCell>
                        <TableCell className="px-8 py-6">
                          <span className="px-4 py-2 bg-brand-gold/10 text-brand-maroon text-xs font-bold rounded-lg ledger-data uppercase">
                            {row.exam}
                          </span>
                        </TableCell>
                        <TableCell className="px-8 py-6 text-right ledger-data text-xl font-bold text-brand-maroon">{row.score}</TableCell>
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
