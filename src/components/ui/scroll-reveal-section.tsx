"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles, Zap, ShieldCheck, Rocket, Layers, Code } from "lucide-react";

export interface ScrollFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

export default function ScrollRevealSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scale = useTransform(smoothProgress, [0.1, 0.4], [0.85, 1]);
  const opacity = useTransform(smoothProgress, [0.1, 0.3], [0, 1]);
  const textY = useTransform(smoothProgress, [0.1, 0.4], [100, 0]);

  const features: ScrollFeature[] = [
    {
      title: "Ultra Responsive",
      description: "Designed to look stunning on every device screens, from mobile displays to ultra-wide desktop monitors.",
      icon: <Zap className="w-6 h-6 text-indigo-400" />,
      tag: "Performance",
    },
    {
      title: "Modern Architecture",
      description: "Built with Next.js 16, React 19, and Tailwind CSS for lightning-fast render speeds.",
      icon: <Code className="w-6 h-6 text-purple-400" />,
      tag: "Tech Stack",
    },
    {
      title: "Seamless Motion",
      description: "Fluid Framer Motion animations that react naturally as you scroll down the page.",
      icon: <Sparkles className="w-6 h-6 text-pink-400" />,
      tag: "Interactivity",
    },
    {
      title: "Enterprise Grade",
      description: "Rigorous standards for security, accessibility, and high performance at scale.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      tag: "Security",
    },
    {
      title: "Rapid Deployment",
      description: "Integrated out of the box with Vercel for zero-downtime continuous deployments.",
      icon: <Rocket className="w-6 h-6 text-amber-400" />,
      tag: "DevOps",
    },
    {
      title: "Modular Design",
      description: "Easily customisable layout components designed using shadcn UI standards.",
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      tag: "Components",
    },
  ];

  return (
    <section ref={containerRef} className="relative py-32 bg-neutral-950 text-white overflow-hidden border-t border-neutral-900">
      {/* Background Decorator */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div style={{ opacity, y: textY }} className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-neutral-900/90 border border-neutral-800 px-4 py-1.5 rounded-full mb-6">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-semibold text-neutral-300 uppercase tracking-widest">
              You Can Scroll
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Interactive Experiences{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              That Flow With You
            </span>
          </h2>

          <p className="text-lg text-neutral-400 leading-relaxed">
            Scroll down to explore how our interactive components scale dynamically, building engagement every step of the way.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div style={{ scale, opacity }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-neutral-900/50 border border-neutral-800/80 rounded-2xl p-8 backdrop-blur-sm hover:border-neutral-700 transition-all shadow-xl group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-neutral-800/80 border border-neutral-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700/50">
                  {feature.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {feature.title}
              </h3>

              <p className="text-neutral-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
