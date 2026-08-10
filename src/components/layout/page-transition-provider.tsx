"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/animations";

/**
 * Page transition wrapper using Next.js template pattern.
 * Fade + subtle slide-up (y: 12→0) per ui-ux-pro-max motion guidelines:
 * - 200-300ms duration
 * - ease-out for entering content
 * - Asymmetric: entrance only (no exit animation to keep navigation snappy)
 */
export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
