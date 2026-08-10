"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/animations";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, var(--color-brand-saffron), var(--color-brand-gold))",
        boxShadow: "0 0 8px rgba(232,135,30,0.4)",
      }}
    />
  );
}
