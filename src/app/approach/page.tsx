import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import EngagementProcess from "@/components/ui/EngagementProcess";

export const metadata: Metadata = {
  title: "Our Approach | Client Engagement & Delivery Framework",
  description:
    "Learn about Galvion Group's structured 4-stage client engagement framework: Discover, Strategize, Deliver, and Improve.",
};

export default function ApproachPage() {
  return (
    <div className="bg-[#03010E] text-[#DAD4DE]">
      {/* Header */}
      <div className="border-b border-[#202128] py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-[#937AFF]/15 blur-[140px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <Breadcrumbs
            items={[
              { label: "About", href: "/about" },
              { label: "Our Approach" },
            ]}
          />
          <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
            Execution Framework
          </span>
          <h1 className="hasHighlight text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Predictable Outcomes Through <strong>Disciplined Methodology.</strong>
          </h1>
          <p className="text-[#DAD4DE] text-base sm:text-lg max-w-3xl leading-relaxed">
            We eliminate the ambiguity and variance common in agency relationships. Our structured four-phase engagement framework ensures alignment, technical excellence, and measurable business outcomes from discovery through continuous enhancement.
          </p>
        </div>
      </div>

      {/* 4 Phase Visualization */}
      <section className="py-16 lg:py-24 border-b border-[#202128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
              The 4 Phases
            </span>
            <h2 className="hasHighlight text-3xl font-extrabold text-white tracking-tight">
              From Initial Problem Framing to <strong>Long-Term Operational Scale</strong>
            </h2>
            <p className="text-[#817E84] text-sm">
              Each phase features clear entrance criteria, milestone checkpoints, and formal deliverables.
            </p>
          </div>

          <EngagementProcess />
        </div>
      </section>

      {/* Deep Dive into Quality Assurance & Governance */}
      <section className="py-16 lg:py-24 border-b border-[#202128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
                Quality Assurance
              </span>
              <h2 className="hasHighlight text-3xl font-extrabold text-white tracking-tight">
                Our Rigorous Standards & <strong>Operating Safeguards</strong>
              </h2>
              <p className="text-[#DAD4DE] text-sm leading-relaxed">
                We believe that code quality and operational reliability are not afterthoughts to be tested at the end of a project. They are embedded into our daily development lifecycle.
              </p>

              <div className="space-y-4 text-xs text-[#DAD4DE]">
                <div className="p-4 bg-[#0B0C17] rounded-xl border border-[#202128] space-y-1">
                  <strong className="text-white text-sm block">1. Static Analysis & Strict Type-Safety</strong>
                  <span className="text-[#817E84]">Every software deliverable passes TypeScript strict typing, ESLint zero-warning rules, and automated vulnerability scanning before merging.</span>
                </div>

                <div className="p-4 bg-[#0B0C17] rounded-xl border border-[#202128] space-y-1">
                  <strong className="text-white text-sm block">2. Automated Performance & Accessibility Benchmarks</strong>
                  <span className="text-[#817E84]">We build to WCAG 2.2 AA accessibility standards and enforce strict Core Web Vitals thresholds (LCP &lt; 2.5s, CLS &lt; 0.1).</span>
                </div>

                <div className="p-4 bg-[#0B0C17] rounded-xl border border-[#202128] space-y-1">
                  <strong className="text-white text-sm block">3. Bi-Weekly Milestone Demonstrations</strong>
                  <span className="text-[#817E84]">Clients observe real functional software increments in staging environments, avoiding end-of-project surprises.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#0B0C17] text-white rounded-3xl p-8 sm:p-12 border border-[#202128] shadow-2xl space-y-6 relative overflow-hidden group hover:border-[#937AFF]/40 transition-colors">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#937AFF]/15 blur-[80px] pointer-events-none rounded-full" />
              <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block relative z-10">
                Client Communication Cadence
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white relative z-10">
                How We Keep Leadership Informed
              </h3>

              <div className="space-y-4 text-xs text-[#DAD4DE] relative z-10">
                <div className="border-l-2 border-[#937AFF] pl-4 py-1">
                  <strong className="text-white block text-sm">Sprint Standups & Direct Collaboration</strong>
                  <span className="text-[#817E84]">Direct access to vertical technical leads with real-time operational communication.</span>
                </div>

                <div className="border-l-2 border-[#937AFF] pl-4 py-1">
                  <strong className="text-white block text-sm">Bi-Weekly Executive Demos</strong>
                  <span className="text-[#817E84]">Structured milestone reviews with progress vs. budget burn analysis.</span>
                </div>

                <div className="border-l-2 border-[#937AFF] pl-4 py-1">
                  <strong className="text-white block text-sm">Monthly Strategic Retrospectives</strong>
                  <span className="text-[#817E84]">Long-term roadmap reviews and risk assessments with parent group practice directors.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#202128] relative z-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#937AFF] hover:text-white font-mono"
                >
                  <span>Initiate Engagement Discussion</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#937AFF]/15 blur-[120px] pointer-events-none rounded-full" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <h2 className="hasHighlight text-2xl sm:text-3xl font-extrabold text-white">
            Start Phase 1: <strong>Technical Discovery</strong>
          </h2>
          <p className="text-[#817E84] text-sm max-w-xl mx-auto">
            Contact us today to schedule a confidential discovery session with our senior practice architects.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm shadow-[0_0_25px_rgba(147,122,255,0.3)]"
            >
              <span>Schedule Discovery Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
