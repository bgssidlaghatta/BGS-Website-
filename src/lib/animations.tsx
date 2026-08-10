"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
  AnimatePresence,
  useReducedMotion as useFramerReducedMotion,
  type Variants,
} from "framer-motion";

/* ── Easing tokens ── */
const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;
const EASE_BOUNCE = [0.34, 1.56, 0.64, 1] as const;
const EASE_SMOOTH = [0.4, 0, 0.2, 1] as const;

/* ── Reduced motion hook ── */
export function useReducedMotion(): boolean {
  const prefersReduced = useFramerReducedMotion();
  return !!prefersReduced;
}

/* ── Stagger orchestration ── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

/* ── Basic animation variants ── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_PREMIUM },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_PREMIUM },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_PREMIUM },
  },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_PREMIUM },
  },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_PREMIUM },
  },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_PREMIUM },
  },
};

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_BOUNCE },
  },
};

/* ── Reveal wrapper ── */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();

  const variants: Record<string, Variants> = {
    up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
  };

  if (reducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ duration: 0.7, delay, ease: EASE_PREMIUM }}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger Reveal — auto-staggers children ── */
export function StaggerReveal({
  children,
  className,
  staggerDelay = 0.08,
  delayChildren = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger child item ── */
export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: EASE_PREMIUM },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── Image Reveal — clip-path mask reveal ── */
export function ImageReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = useReducedMotion();

  const clipVariants: Record<string, Variants> = {
    up: {
      hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
      visible: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
    },
    down: {
      hidden: { clipPath: "inset(0% 0% 100% 0%)", opacity: 0 },
      visible: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
    },
    left: {
      hidden: { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 },
      visible: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
    },
    right: {
      hidden: { clipPath: "inset(0% 0% 0% 100%)", opacity: 0 },
      visible: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
    },
  };

  if (reducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={clipVariants[direction]}
      transition={{ duration: 0.9, delay, ease: EASE_PREMIUM }}
    >
      {children}
    </motion.div>
  );
}

/* ── Text Reveal — per-word stagger ── */
export function TextReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  staggerDelay = 0.04,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = useReducedMotion();
  const words = text.split(" ");

  if (reducedMotion) {
    return <Tag ref={ref} className={className}>{text}</Tag>;
  }

  return (
    <Tag ref={ref} className={className}>
      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: staggerDelay,
              delayChildren: delay,
            },
          },
        }}
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className={wordClassName}
            style={{ display: "inline-block", marginRight: "0.3em" }}
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.5, ease: EASE_PREMIUM },
              },
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}

/* ── Animated counter ── */
export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  className,
  duration = 2,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (reducedMotion) {
      setDisplayValue(value);
      return;
    }

    const end = value;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [isInView, value, duration, reducedMotion]);

  // Format number with commas for thousands
  const formatted = displayValue >= 1000
    ? displayValue.toLocaleString()
    : displayValue.toString();

  return (
    <span ref={ref} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  );
}

/* ── Parallax layer ── */
export function ParallaxLayer({
  children,
  speed = 0.3,
  className,
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 200]);

  if (reducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/* ── Hover scale wrapper (for cards) ── */
export function HoverLift({
  children,
  className,
  scale = 1.02,
  shadow = true,
}: {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  shadow?: boolean;
}) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        y: -4,
        transition: { duration: 0.3, ease: EASE_SMOOTH },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}

export { motion, AnimatePresence, useInView, useScroll, useTransform, useSpring, useMotionValue };
export { EASE_PREMIUM, EASE_BOUNCE, EASE_SMOOTH };
