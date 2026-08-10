"use client";

import { PageTransitionProvider } from "@/components/layout/page-transition-provider";

/**
 * Next.js App Router template — re-renders on every navigation.
 * This is the correct way to trigger entrance animations on route change
 * (layout.tsx does NOT re-render, but template.tsx does).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransitionProvider>{children}</PageTransitionProvider>;
}
