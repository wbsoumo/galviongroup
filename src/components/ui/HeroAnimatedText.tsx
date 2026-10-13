"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroAnimatedTextProps {
  prefix?: string;
  phrases?: string[];
}

const DEFAULT_PHRASES = [
  "Business Forward.",
  "Enterprise Scale.",
  "Resilient Networks.",
  "Financial Rails.",
  "Predictive Growth.",
];

export default function HeroAnimatedText({
  prefix = "Building What Moves",
  phrases = DEFAULT_PHRASES,
}: HeroAnimatedTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [phrases.length]);

  return (
    <h1 className="hasHighlight text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
      <span>{prefix}</span> <br className="hidden sm:inline" />
      <span className="relative inline-block min-w-[280px] sm:min-w-[460px] h-[1.25em] align-middle overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.strong
            key={phrases[index]}
            initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -35, filter: "blur(8px)" }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {phrases[index]}
          </motion.strong>
        </AnimatePresence>
      </span>
    </h1>
  );
}
