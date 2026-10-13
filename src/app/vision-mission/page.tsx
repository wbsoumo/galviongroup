import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Compass, Target } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Vision & Mission | Strategic Direction & Long-Term Commitments",
  description:
    "Explore Galvion Group's corporate vision, mission statement, and strategic pillars guiding our operations across technology, marketing, telecom, and financial services.",
};

export default function VisionMissionPage() {
  return (
    <div className="bg-[#03010E] text-[#DAD4DE]">
      {/* Header */}
      <div className="border-b border-[#202128] py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-[#937AFF]/15 blur-[140px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <Breadcrumbs
            items={[
              { label: "About", href: "/about" },
              { label: "Vision & Mission" },
            ]}
          />
          <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
            Strategic Direction
          </span>
          <h1 className="hasHighlight text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Vision, Mission & <strong>Strategic Pillars.</strong>
          </h1>
          <p className="text-[#DAD4DE] text-base sm:text-lg max-w-3xl leading-relaxed">
            Defining the long-term commitments, ethical standards, and architectural benchmarks that direct our business divisions as we build what moves business forward.
          </p>
        </div>
      </div>

      {/* Vision & Mission Split */}
      <section className="py-16 lg:py-24 border-b border-[#202128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <div className="relative bg-[#0B0C17] border border-[#202128] text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col justify-between space-y-6 hover:border-[#937AFF]/50 transition-colors group">
              <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#03010E] border border-[#202128] flex items-center justify-center text-[#937AFF]">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
                  Our Corporate Vision
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  To be a premier global benchmark for multidisciplinary corporate execution.
                </h2>
                <p className="text-[#DAD4DE] text-sm leading-relaxed">
                  We envision Galvion Group as an internationally respected group of complementary enterprises recognized for high-assurance software engineering, evidence-based strategic marketing, resilient telecommunications, and transparent financial technology.
                </p>
              </div>

              <div className="pt-6 border-t border-[#202128] text-xs text-[#817E84] font-mono">
                Focus: Enduring Value, Operational Resilience, Long-Term Partnerships
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative bg-[#0B0C17] border border-[#202128] text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col justify-between space-y-6 hover:border-[#937AFF]/50 transition-colors group">
              <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#03010E] border border-[#202128] flex items-center justify-center text-[#FF5353]">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-widest font-mono text-[#FF5353] font-bold block">
                  Our Corporate Mission
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  One Group. Multiple Capabilities. A Shared Vision for Growth.
                </h2>
                <p className="text-[#DAD4DE] text-sm leading-relaxed">
                  Galvion Group brings together digital innovation, strategic marketing, communication infrastructure, financial intelligence, and modern financial services to help businesses operate more efficiently and grow with confidence.
                </p>
              </div>

              <div className="pt-6 border-t border-[#202128] text-xs text-[#817E84] font-mono">
                Commitment: Measurable ROI, Security by Design, Regulatory Transparency
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-16 lg:py-24 border-b border-[#202128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
              Core Tenets
            </span>
            <h2 className="hasHighlight text-3xl font-extrabold text-white tracking-tight">
              The Four Pillars of <strong>Galvion Governance</strong>
            </h2>
            <p className="text-[#817E84] text-sm">
              How we hold every business division to institutional-grade execution standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0B0C17] rounded-2xl p-6 border border-[#202128] shadow-sm space-y-3 hover:border-[#937AFF]/50 transition-colors group">
              <div className="w-9 h-9 rounded-lg bg-[#03010E] border border-[#202128] text-[#937AFF] flex items-center justify-center font-bold font-mono text-xs">
                01
              </div>
              <h3 className="font-bold text-base text-white group-hover:text-[#937AFF] transition-colors">Architectural Rigor</h3>
              <p className="text-xs text-[#817E84] leading-relaxed">
                Whether deploying code, designing networks, or modeling cash flows, we build for fault-tolerance, clear documentation, and minimal technical debt.
              </p>
            </div>

            <div className="bg-[#0B0C17] rounded-2xl p-6 border border-[#202128] shadow-sm space-y-3 hover:border-[#937AFF]/50 transition-colors group">
              <div className="w-9 h-9 rounded-lg bg-[#03010E] border border-[#202128] text-[#FF5353] flex items-center justify-center font-bold font-mono text-xs">
                02
              </div>
              <h3 className="font-bold text-base text-white group-hover:text-[#FF5353] transition-colors">Commercial Integrity</h3>
              <p className="text-xs text-[#817E84] leading-relaxed">
                We reject opaque markups, inflated campaign metrics, and speculative projections. Every service scope is clearly defined and auditable.
              </p>
            </div>

            <div className="bg-[#0B0C17] rounded-2xl p-6 border border-[#202128] shadow-sm space-y-3 hover:border-[#937AFF]/50 transition-colors group">
              <div className="w-9 h-9 rounded-lg bg-[#03010E] border border-[#202128] text-[#937AFF] flex items-center justify-center font-bold font-mono text-xs">
                03
              </div>
              <h3 className="font-bold text-base text-white group-hover:text-[#937AFF] transition-colors">Zero-Trust Security</h3>
              <p className="text-xs text-[#817E84] leading-relaxed">
                All software systems, financial flows, and network configurations are designed with end-to-end encryption, role-based controls, and proactive auditing.
              </p>
            </div>

            <div className="bg-[#0B0C17] rounded-2xl p-6 border border-[#202128] shadow-sm space-y-3 hover:border-[#937AFF]/50 transition-colors group">
              <div className="w-9 h-9 rounded-lg bg-[#03010E] border border-[#202128] text-[#FF5353] flex items-center justify-center font-bold font-mono text-xs">
                04
              </div>
              <h3 className="font-bold text-base text-white group-hover:text-[#FF5353] transition-colors">Client Partnership</h3>
              <p className="text-xs text-[#817E84] leading-relaxed">
                We measure our success not by isolated project completions, but by our clients&apos; compound operational gains and market durability over years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#937AFF]/15 blur-[120px] pointer-events-none rounded-full" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <h2 className="hasHighlight text-2xl sm:text-3xl font-extrabold text-white">
            Experience our <strong>vision in action.</strong>
          </h2>
          <p className="text-[#817E84] text-sm max-w-xl mx-auto">
            Discover how our five operating divisions apply these principles to your business.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/businesses"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm shadow-[0_0_25px_rgba(147,122,255,0.3)]"
            >
              <span>Explore Business Divisions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
