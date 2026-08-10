"use client";

import { useReducedMotion } from "@/lib/animations";

export function FloatingShapes() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden hidden lg:block"
      aria-hidden="true"
    >
      {/* Shape 1 — large saffron circle, top-right */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.03] animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, var(--color-brand-saffron) 0%, transparent 70%)",
        }}
      />

      {/* Shape 2 — gold ellipse, bottom-left */}
      <div
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-[0.025] animate-float-slower"
        style={{
          background:
            "radial-gradient(circle, var(--color-brand-gold) 0%, transparent 70%)",
        }}
      />

      {/* Shape 3 — small maroon dot, mid-right */}
      <div
        className="absolute top-1/3 right-[10%] w-40 h-40 rounded-full opacity-[0.02] animate-float-medium"
        style={{
          background:
            "radial-gradient(circle, var(--color-brand-maroon) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
