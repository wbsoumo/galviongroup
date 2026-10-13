import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { DIVISIONS } from "@/lib/data/divisions";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import DivisionCard from "@/components/ui/DivisionCard";

export const metadata: Metadata = {
  title: "Our Businesses | Operating Divisions & Enterprise Portfolio",
  description:
    "Explore the five distinct business divisions of Galvion Group: Software Solutions, Marketing, Telecom, Research & Growth, and Fintech.",
};

export default function BusinessesPage() {
  return (
    <div className="bg-[#03010E] text-[#DAD4DE]">
      {/* Header */}
      <div className="border-b border-[#202128] py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-[#937AFF]/15 blur-[140px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <Breadcrumbs items={[{ label: "Our Businesses" }]} />
          <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
            Operating Portfolio
          </span>
          <h1 className="hasHighlight text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Five Focused Divisions. One Unified <strong>Parent Standard.</strong>
          </h1>
          <p className="text-[#DAD4DE] text-base sm:text-lg max-w-3xl leading-relaxed">
            Galvion Group unites five independent business units across software engineering, strategic marketing, telecommunications infrastructure, financial intelligence, and financial technology.
          </p>
        </div>
      </div>

      {/* Main Divisions Listing */}
      <section className="py-16 lg:py-24 border-b border-[#202128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-6">
            {DIVISIONS.map((division) => (
              <DivisionCard key={division.id} division={division} layout="horizontal" />
            ))}
          </div>
        </div>
      </section>

      {/* Group Engagement Modes */}
      <section className="py-16 lg:py-24 border-b border-[#202128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
              Engagement Flexibility
            </span>
            <h2 className="hasHighlight text-3xl font-extrabold text-white tracking-tight">
              Flexible <strong>Engagement Frameworks</strong>
            </h2>
            <p className="text-[#817E84] text-sm">
              We structure client partnerships to match your specific organizational requirements and governance structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative bg-[#0B0C17] rounded-3xl p-8 border border-[#202128] hover:border-[#937AFF]/50 transition-colors shadow-lg space-y-4 group">
              <span className="text-xs font-mono font-bold text-[#937AFF] uppercase tracking-wider block">
                Mode A
              </span>
              <h3 className="text-xl font-bold text-white group-hover:text-[#937AFF] transition-colors">
                Dedicated Vertical Engagement
              </h3>
              <p className="text-sm text-[#817E84] leading-relaxed">
                Partner with an isolated division (e.g., custom software development or technical SEO) with dedicated squad leads and specialized pricing. Ideal for targeted technical challenges.
              </p>
              <ul className="text-xs text-[#DAD4DE] space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#937AFF] shrink-0" />
                  <span>Direct collaboration with vertical practice engineers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#937AFF] shrink-0" />
                  <span>Clear project-based or dedicated team retained agreements</span>
                </li>
              </ul>
            </div>

            <div className="relative bg-[#0B0C17] rounded-3xl p-8 border border-[#202128] hover:border-[#937AFF]/50 transition-colors shadow-lg space-y-4 group">
              <span className="text-xs font-mono font-bold text-[#FF5353] uppercase tracking-wider block">
                Mode B
              </span>
              <h3 className="text-xl font-bold text-white group-hover:text-[#937AFF] transition-colors">
                Multidisciplinary Enterprise Synergy
              </h3>
              <p className="text-sm text-[#817E84] leading-relaxed">
                Coordinate multiple Galvion divisions simultaneously for comprehensive transformation (e.g., software engineering paired with brand strategy and financial intelligence).
              </p>
              <ul className="text-xs text-[#DAD4DE] space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5353] shrink-0" />
                  <span>Single unified executive sponsor and master service agreement (MSA)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5353] shrink-0" />
                  <span>Synchronized roadmaps eliminating vendor handoff friction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#937AFF]/15 blur-[120px] pointer-events-none rounded-full" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <h2 className="hasHighlight text-2xl sm:text-3xl font-extrabold text-white">
            Discuss Your <strong>Enterprise Requirements</strong>
          </h2>
          <p className="text-[#817E84] text-sm max-w-xl mx-auto">
            Our practice leads are prepared to evaluate your project scope and recommend the right capabilities.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm shadow-[0_0_25px_rgba(147,122,255,0.3)]"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
