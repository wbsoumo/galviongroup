"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  Activity,
  Server,
  Radio,
  BarChart3,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function HeroVideoShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState<"tech" | "telecom" | "marketing" | "research" | "fintech">("tech");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(28);

  // Scroll perspective reveal
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // RotateX from 16deg (tilted back) to 0deg (straight on)
  const rotateX = useTransform(smoothProgress, [0, 1], [16, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [0.88, 1]);
  const translateY = useTransform(smoothProgress, [0, 1], [40, 0]);

  // Subtle interactive 3D mouse tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Simulated progress bar ticker when modal is open
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 400);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsPlaying(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPlaying]);

  return (
    <>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full max-w-6xl mx-auto perspective-[1200px] relative pt-6 pb-12 cursor-pointer group"
        onClick={() => setIsPlaying(true)}
      >
        {/* Ambient Halo Radial Glow behind the tilted card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[75%] bg-gradient-to-tr from-[#FF5353]/25 via-[#937AFF]/35 to-[#4D36D0]/30 blur-[110px] -z-10 rounded-full pointer-events-none transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-80" />

        {/* 3D Tilted Card Container */}
        <motion.div
          style={{
            rotateX,
            scale,
            translateY,
            rotateY: mousePosition.x * 6,
            transformStyle: "preserve-3d",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="relative rounded-[2rem] sm:rounded-[2.75rem] p-2 sm:p-3 bg-gradient-to-b from-[#202128] via-[#121320] to-[#0B0C17] border border-[#202128] shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_50px_rgba(147,122,255,0.2)] overflow-hidden"
        >
          {/* Subtle Glass Glare Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none rounded-[2.5rem] z-20" />

          {/* Device Screen Frame */}
          <div className="relative rounded-[1.6rem] sm:rounded-[2.2rem] bg-[#070811] overflow-hidden border border-[#202128]/80">
            {/* Top Device Bar (Browser / App Frame) */}
            <div className="bg-[#0B0C17] border-b border-[#202128] px-4 sm:px-6 py-3 flex items-center justify-between">
              {/* Traffic Light Dots */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]/80 inline-block" />
              </div>

              {/* URL Address Bar */}
              <div className="hidden sm:flex items-center gap-2 bg-[#03010E] border border-[#202128] rounded-full px-4 py-1 text-xs font-mono text-[#817E84]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#937AFF] animate-ping" />
                <span>galvion.group/enterprise-orchestrator-v4</span>
              </div>

              {/* Status Pill */}
              <div className="flex items-center gap-2 text-xs font-mono text-[#937AFF] bg-[#937AFF]/10 border border-[#937AFF]/30 px-2.5 py-0.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Active Nodes</span>
                <span>99.99%</span>
              </div>
            </div>

            {/* Platform Screenshot & Interface Mockup */}
            <div className="relative aspect-[16/9] w-full bg-[#03010E] select-none overflow-hidden">
              {/* Internal Mockup Layout */}
              <div className="absolute inset-0 grid grid-cols-12 gap-0">
                {/* Left Mini Sidebar */}
                <div className="col-span-1 hidden md:flex flex-col items-center py-6 border-r border-[#202128] bg-[#070811] space-y-6">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#937AFF] to-[#4D36D0] flex items-center justify-center text-white font-bold text-xs shadow-[0_0_12px_#937AFF]">
                    G
                  </div>
                  <div className="space-y-4 text-[#817E84]">
                    <div className="w-7 h-7 rounded-md bg-[#202128] flex items-center justify-center text-white">
                      <Activity className="w-3.5 h-3.5 text-[#937AFF]" />
                    </div>
                    <div className="w-7 h-7 rounded-md hover:bg-[#202128] flex items-center justify-center">
                      <Server className="w-3.5 h-3.5" />
                    </div>
                    <div className="w-7 h-7 rounded-md hover:bg-[#202128] flex items-center justify-center">
                      <Radio className="w-3.5 h-3.5" />
                    </div>
                    <div className="w-7 h-7 rounded-md hover:bg-[#202128] flex items-center justify-center">
                      <BarChart3 className="w-3.5 h-3.5" />
                    </div>
                    <div className="w-7 h-7 rounded-md hover:bg-[#202128] flex items-center justify-center">
                      <CreditCard className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Main Dashboard Canvas Area */}
                <div className="col-span-12 md:col-span-11 p-4 sm:p-8 space-y-4 sm:space-y-6 relative">
                  {/* Top Header Metrics Row */}
                  <div className="flex items-center justify-between border-b border-[#202128] pb-4">
                    <div>
                      <div className="text-xs uppercase tracking-wider font-mono text-[#817E84]">
                        Autonomous Enterprise Core
                      </div>
                      <div className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                        Galvion Multi-Industry Operations Platform
                        <span className="text-xs bg-[#202128] text-[#937AFF] px-2 py-0.5 rounded-full font-mono">
                          Live
                        </span>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 text-xs font-mono">
                      <div className="bg-[#0B0C17] border border-[#202128] px-3 py-1 rounded-md">
                        <span className="text-[#817E84]">Global Tx: </span>
                        <span className="text-white font-bold">14,290/s</span>
                      </div>
                      <div className="bg-[#0B0C17] border border-[#202128] px-3 py-1 rounded-md">
                        <span className="text-[#817E84]">Mesh Latency: </span>
                        <span className="text-[#27C93F] font-bold">8.4ms</span>
                      </div>
                    </div>
                  </div>

                  {/* Mockup Dashboard Cards Grid */}
                  <div className="grid grid-cols-12 gap-3 sm:gap-4">
                    {/* Left Metric Widget */}
                    <div className="col-span-12 lg:col-span-7 bg-[#0B0C17]/90 border border-[#202128] rounded-xl p-4 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#DAD4DE] font-semibold">Active Pipeline Throughput</span>
                        <span className="text-[#937AFF] font-mono">99.98% Healthy</span>
                      </div>
                      {/* Simulated Chart Bars */}
                      <div className="h-28 sm:h-36 flex items-end gap-2 pt-2 border-b border-[#202128]/50 pb-2">
                        {[45, 62, 58, 80, 75, 90, 84, 96, 88, 100, 92, 95].map((val, idx) => (
                          <div
                            key={idx}
                            className="flex-1 bg-gradient-to-t from-[#4D36D0]/40 to-[#937AFF] rounded-t-sm transition-all duration-500 group-hover:brightness-125"
                            style={{ height: `${val}%` }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between text-[10px] font-mono text-[#817E84]">
                        <span>00:00 UTC</span>
                        <span>06:00 UTC</span>
                        <span>12:00 UTC</span>
                        <span>18:00 UTC</span>
                      </div>
                    </div>

                    {/* Right Division Status Feed */}
                    <div className="col-span-12 lg:col-span-5 bg-[#0B0C17]/90 border border-[#202128] rounded-xl p-4 space-y-2.5">
                      <div className="text-xs font-semibold text-[#DAD4DE] border-b border-[#202128] pb-2 flex items-center justify-between">
                        <span>Division Health Matrix</span>
                        <span className="w-2 h-2 rounded-full bg-[#27C93F] animate-pulse" />
                      </div>
                      <div className="space-y-2 text-xs font-mono">
                        <div className="flex items-center justify-between bg-[#03010E] p-2 rounded border border-[#202128]">
                          <span className="text-[#DAD4DE]">Technology (Cloud API)</span>
                          <span className="text-[#937AFF]">0.02ms cold start</span>
                        </div>
                        <div className="flex items-center justify-between bg-[#03010E] p-2 rounded border border-[#202128]">
                          <span className="text-[#DAD4DE]">Telecom (SD-WAN Mesh)</span>
                          <span className="text-[#27C93F]">Carrier-Agnostic OK</span>
                        </div>
                        <div className="flex items-center justify-between bg-[#03010E] p-2 rounded border border-[#202128]">
                          <span className="text-[#DAD4DE]">Fintech (Clearing Rails)</span>
                          <span className="text-[#FF5353]">ISO 20022 Synced</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Centered Floating Collaboration Card Mockup (Matching user's attached screenshot) */}
                  <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 lg:w-96 bg-[#161726]/95 border border-[#937AFF]/40 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(147,122,255,0.25)] backdrop-blur-md z-10 transition-transform group-hover:scale-105">
                    <div className="flex items-center justify-between border-b border-[#202128] pb-2 mb-3">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#937AFF]" />
                        Galvion Multi-Team Orchestration
                      </span>
                      <span className="text-[10px] font-mono text-[#817E84]">v4.2</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#937AFF]/30 to-[#FF5353]/30 border border-[#937AFF]/40 flex items-center justify-center shrink-0">
                        <Activity className="w-6 h-6 text-[#937AFF]" />
                      </div>
                      <div className="space-y-1 text-left">
                        <div className="text-xs font-semibold text-white">
                          Automated Cross-Division Sync
                        </div>
                        <div className="text-[11px] text-[#817E84] leading-tight">
                          Syncing 5 specialized practices across unified governance rails.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Centered Glowing Play Button Overlay (Automark Signature) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 group-hover:bg-black/25 transition-all duration-300 z-30">
                <div className="relative group/btn">
                  {/* Spinning Automark Outer Ring */}
                  <div
                    className="absolute -inset-2.5 rounded-full border-2 border-dashed border-[#937AFF] animate-spin"
                    style={{ animationDuration: "5s" }}
                  />

                  {/* Glowing Pulse Ring */}
                  <div className="absolute -inset-1 rounded-full bg-[#937AFF]/30 blur-md group-hover/btn:bg-[#937AFF]/60 transition-all duration-300 animate-pulse" />

                  {/* Play Button Circle */}
                  <button
                    aria-label="Play Platform Showcase Video"
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/95 hover:bg-white text-[#937AFF] flex items-center justify-center shadow-[0_0_40px_rgba(147,122,255,0.6)] transition-transform duration-300 group-hover/btn:scale-110"
                  >
                    <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-[#937AFF] text-[#937AFF] translate-x-1" />
                  </button>
                </div>

                {/* Subtitle Label under Play Button */}
                <div className="mt-4 px-4 py-1 rounded-full bg-[#0B0C17]/90 border border-[#202128] text-xs font-semibold text-white tracking-wide shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#27C93F] animate-ping" />
                  <span>Click to Watch Platform Overview & Architecture Walkthrough</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FULLSCREEN / EXPANDED INTERACTIVE VIDEO DEMO MODAL */}
      <AnimatePresence>
        {isPlaying && (
          <div
            onClick={() => setIsPlaying(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-xl"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-[#0B0C17] border border-[#202128] rounded-3xl shadow-[0_25px_100px_rgba(0,0,0,0.95),0_0_60px_rgba(147,122,255,0.3)] overflow-hidden flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 bg-[#070811] border-b border-[#202128] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#937AFF] animate-ping" />
                  <span className="text-sm font-bold text-white">
                    Galvion Group Architecture & Enterprise Operations Tour
                  </span>
                  <span className="hidden sm:inline-block text-xs font-mono text-[#817E84] bg-[#202128] px-2.5 py-0.5 rounded-full">
                    4K Interactive Stream
                  </span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying(false);
                  }}
                  className="p-1.5 rounded-full bg-[#202128] hover:bg-[#FF5353] text-[#DAD4DE] hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Division Navigation Tabs within video showcase */}
              <div className="px-4 sm:px-6 py-2.5 bg-[#03010E] border-b border-[#202128] flex items-center gap-2 overflow-x-auto text-xs font-mono">
                <button
                  onClick={() => setActiveTab("tech")}
                  className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                    activeTab === "tech"
                      ? "bg-[#937AFF] text-white font-bold shadow-[0_0_15px_#937AFF]"
                      : "text-[#817E84] hover:text-white bg-[#0B0C17]"
                  }`}
                >
                  <Server className="w-3.5 h-3.5" />
                  Technology
                </button>
                <button
                  onClick={() => setActiveTab("telecom")}
                  className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                    activeTab === "telecom"
                      ? "bg-[#937AFF] text-white font-bold shadow-[0_0_15px_#937AFF]"
                      : "text-[#817E84] hover:text-white bg-[#0B0C17]"
                  }`}
                >
                  <Radio className="w-3.5 h-3.5" />
                  Telecom Mesh
                </button>
                <button
                  onClick={() => setActiveTab("marketing")}
                  className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                    activeTab === "marketing"
                      ? "bg-[#937AFF] text-white font-bold shadow-[0_0_15px_#937AFF]"
                      : "text-[#817E84] hover:text-white bg-[#0B0C17]"
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" />
                  Marketing Attribution
                </button>
                <button
                  onClick={() => setActiveTab("research")}
                  className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                    activeTab === "research"
                      ? "bg-[#937AFF] text-white font-bold shadow-[0_0_15px_#937AFF]"
                      : "text-[#817E84] hover:text-white bg-[#0B0C17]"
                  }`}
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  Financial Risk
                </button>
                <button
                  onClick={() => setActiveTab("fintech")}
                  className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                    activeTab === "fintech"
                      ? "bg-[#937AFF] text-white font-bold shadow-[0_0_15px_#937AFF]"
                      : "text-[#817E84] hover:text-white bg-[#0B0C17]"
                  }`}
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  Fintech Rails
                </button>
              </div>

              {/* Main Simulated Video Screen */}
              <div className="relative aspect-video w-full bg-[#03010E] flex items-center justify-center p-6 sm:p-12 overflow-hidden">
                {/* Dynamic Screen Content based on tab */}
                {activeTab === "tech" && (
                  <div className="w-full max-w-3xl space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-[#937AFF]">
                      <span>Microservices Deployment Pipeline</span>
                      <span>Cluster Status: Auto-scaled 42 Nodes</span>
                    </div>
                    <div className="p-5 rounded-2xl bg-[#0B0C17] border border-[#202128] space-y-3 font-mono text-xs">
                      <div className="flex justify-between items-center text-white pb-2 border-b border-[#202128]">
                        <span>[CI/CD] Containerized Micro-Kernels</span>
                        <span className="text-[#27C93F]">✓ Latency: 4.1ms</span>
                      </div>
                      <div className="text-[#817E84] space-y-1">
                        <div>&gt; Initializing zero-trust identity token exchange...</div>
                        <div>&gt; Multi-region replication synced to Frankfurt, Singapore, N. Virginia.</div>
                        <div>&gt; Automated canary rollouts verified across 100% live traffic.</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "telecom" && (
                  <div className="w-full max-w-3xl space-y-4 font-mono">
                    <div className="flex items-center justify-between text-xs text-[#27C93F]">
                      <span>SD-WAN Dynamic Carrier Topology</span>
                      <span>Redundancy: Tier-1 Dual Multi-Homing</span>
                    </div>
                    <div className="p-5 rounded-2xl bg-[#0B0C17] border border-[#202128] space-y-2 text-xs">
                      <div className="flex justify-between text-white">
                        <span>Transit Provider A (Cogent/Lumen)</span>
                        <span className="text-[#27C93F]">Active [0% packet loss]</span>
                      </div>
                      <div className="flex justify-between text-white">
                        <span>Transit Provider B (NTT/Telia)</span>
                        <span className="text-[#937AFF]">Standby Hot-Failover</span>
                      </div>
                      <div className="text-[#817E84] text-[11px] pt-2">
                        Automatic packet-level steering triggers in sub-50 milliseconds on brownout.
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "marketing" && (
                  <div className="w-full max-w-3xl space-y-4">
                    <div className="text-xs font-mono text-[#FF5353]">
                      Enterprise Multi-Touch Attribution Engine
                    </div>
                    <div className="p-5 rounded-2xl bg-[#0B0C17] border border-[#202128] space-y-3 text-xs">
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="bg-[#03010E] p-3 rounded-xl border border-[#202128]">
                          <div className="text-[#817E84] text-[10px]">Blended CAC</div>
                          <div className="text-white font-bold text-base mt-1">-34.2%</div>
                        </div>
                        <div className="bg-[#03010E] p-3 rounded-xl border border-[#202128]">
                          <div className="text-[#817E84] text-[10px]">Enterprise ROAS</div>
                          <div className="text-[#937AFF] font-bold text-base mt-1">4.82x</div>
                        </div>
                        <div className="bg-[#03010E] p-3 rounded-xl border border-[#202128]">
                          <div className="text-[#817E84] text-[10px]">LTV:CAC Ratio</div>
                          <div className="text-[#27C93F] font-bold text-base mt-1">6.1 : 1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "research" && (
                  <div className="w-full max-w-3xl space-y-4">
                    <div className="text-xs font-mono text-[#937AFF]">
                      Monte Carlo 10,000-Iteration Risk Simulator
                    </div>
                    <div className="p-5 rounded-2xl bg-[#0B0C17] border border-[#202128] space-y-2 text-xs font-mono">
                      <div className="flex justify-between text-[#DAD4DE]">
                        <span>VaR (99% Confidence, 10-Day)</span>
                        <span className="text-white font-bold">1.48% Margin</span>
                      </div>
                      <div className="flex justify-between text-[#DAD4DE]">
                        <span>Stochastic Volatility Filter</span>
                        <span className="text-[#27C93F]">Calibrated</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "fintech" && (
                  <div className="w-full max-w-3xl space-y-4">
                    <div className="text-xs font-mono text-[#FF5353]">
                      Galvion Pay Transaction Clearing Engine
                    </div>
                    <div className="p-5 rounded-2xl bg-[#0B0C17] border border-[#202128] space-y-3 text-xs font-mono">
                      <div className="flex justify-between text-white">
                        <span>Cross-Border ISO 20022 Messaging</span>
                        <span className="text-[#27C93F]">Settled (0.34s)</span>
                      </div>
                      <div className="flex justify-between text-white">
                        <span>Ledger Idempotency Check</span>
                        <span className="text-[#937AFF]">Verified (UUIDv4)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Video Controls Bar */}
              <div className="px-6 py-4 bg-[#070811] border-t border-[#202128] flex flex-col gap-3">
                {/* Progress Bar */}
                <div className="w-full bg-[#202128] h-1.5 rounded-full overflow-hidden cursor-pointer">
                  <div
                    className="bg-gradient-to-r from-[#937AFF] to-[#FF5353] h-full rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-[#817E84]">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="p-1.5 rounded-full bg-[#202128] hover:bg-[#937AFF] text-white transition-colors"
                    >
                      <Play className="w-4 h-4 fill-white" />
                    </button>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-1.5 rounded-full bg-[#202128] hover:bg-[#937AFF] text-white transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <span className="font-mono text-white">01:42 / 04:30</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-[#937AFF]">
                      Interactive Galvion Engine v4.2
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
