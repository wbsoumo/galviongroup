import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  ShieldAlert,
} from "lucide-react";
import { DIVISIONS } from "@/lib/data/divisions";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqAccordion from "@/components/ui/FaqAccordion";
import ContactForm from "@/components/forms/ContactForm";
import FinancialChartGraphic from "@/components/visuals/FinancialChartGraphic";

const division = DIVISIONS.find((d) => d.id === "research")!;

export const metadata: Metadata = {
  title: "Galvion Research & Growth | Quantitative Analysis & Financial Intelligence",
  description:
    "Objective financial market research, quantitative econometric modeling, dynamic scenario planning, and enterprise business intelligence.",
};

export default function ResearchPage() {
  return (
    <div className="bg-[#03010E] text-[#DAD4DE]">
      {/* Division Hero */}
      <section className="border-b border-[#202128] py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-[#937AFF]/15 blur-[150px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Breadcrumbs
                items={[
                  { label: "Our Businesses", href: "/businesses" },
                  { label: division.shortName },
                ]}
              />

              <div className="inline-flex items-center gap-2 bg-[#0B0C17] border border-[#202128] px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#FF5353] shadow-[0_0_15px_rgba(255,83,83,0.15)]">
                <span>Division 04 // Market Intelligence & Strategy</span>
              </div>

              <h1 className="hasHighlight text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
                {division.heroHeadline}
              </h1>

              <p className="text-[#DAD4DE] text-base sm:text-lg leading-relaxed">
                {division.heroSubheadline}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#inquiry"
                  className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(147,122,255,0.3)]"
                >
                  <span>Request Strategic Brief</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#services"
                  className="btn-outline inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm"
                >
                  <span>View Research Practices</span>
                </a>
              </div>

              {/* Key Specs */}
              <div className="pt-6 border-t border-[#202128] grid grid-cols-3 gap-4 text-xs font-mono">
                {division.statItems.map((item, idx) => (
                  <div key={idx}>
                    <span className="text-[#817E84] block text-[10px] uppercase">{item.label}</span>
                    <span className="font-bold text-white text-xs sm:text-sm">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <FinancialChartGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Overview & Objectivity Commitment */}
      <section className="py-16 lg:py-24 border-b border-[#202128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
                Empirical Decision Making
              </span>
              <h2 className="hasHighlight text-3xl font-extrabold text-white tracking-tight">
                Grounding Executive Decisions in <strong>Verifiable Quantitative Data</strong>
              </h2>
              <p className="text-[#DAD4DE] text-sm leading-relaxed">
                Strategic corporate decisions carry high stakes. Relying on intuition or generic industry commentary often exposes capital to unmodeled downside variance. Galvion Research & Growth delivers mathematically sound research, custom financial models, and automated analytics telemetry.
              </p>
              <p className="text-[#817E84] text-sm leading-relaxed">
                Our quantitative analysts build scenario models across dynamic interest rate, liquidity, and supply chain conditions—enabling leadership teams to stress-test corporate decisions before deployment.
              </p>

              {/* Crucial Disclosure Box */}
              <div className="p-4 rounded-xl bg-[#0B0C17] border border-[#202128] text-xs text-[#817E84] space-y-1">
                <span className="font-bold text-white flex items-center gap-1.5 font-mono">
                  <ShieldAlert className="w-4 h-4 text-[#FF5353]" />
                  Regulatory Transparency Disclosure
                </span>
                <p>
                  Galvion Research & Growth provides operational research, financial scenario modeling, and data analytics tools for enterprise business planning. We do not provide regulated investment advice, retail trading recommendations, or individual securities management.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#0B0C17] border border-[#202128] rounded-3xl p-8 space-y-4 relative group hover:border-[#937AFF]/40 transition-colors">
              <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
              <h3 className="font-bold text-white text-base">
                Core Research Methodologies:
              </h3>
              <div className="space-y-3">
                {division.operatingPrinciples.map((op, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-[#DAD4DE]">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5353] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-bold">{op.title}</strong>
                      <span className="text-[#817E84]">{op.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#202128]">
                <span className="text-[11px] font-mono text-[#817E84] block mb-2 uppercase">
                  Modeling Tooling & Languages:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {division.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-[#03010E] border border-[#202128] text-[11px] font-mono font-medium text-[#DAD4DE]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 border-b border-[#202128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
              Practice Domains
            </span>
            <h2 className="hasHighlight text-3xl font-extrabold text-white tracking-tight">
              Quantitative Research & <strong>Analytics Practices</strong>
            </h2>
            <p className="text-[#817E84] text-sm">
              Explore our core analytical research services engineered to provide mathematical clarity to boardrooms and operational leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {division.services.map((service) => (
              <div
                key={service.slug}
                className="relative bg-[#0B0C17] rounded-2xl border border-[#202128] p-7 hover:border-[#937AFF]/50 transition-all flex flex-col justify-between group shadow-lg hover:shadow-[0_0_25px_rgba(147,122,255,0.12)]"
              >
                <span className="absolute top-2 left-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
                <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>

                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#03010E] border border-[#202128] flex items-center justify-center text-[#FF5353] mb-4 group-hover:border-[#FF5353]/40 transition-colors">
                    <TrendingUp className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#937AFF] transition-colors mb-2">
                    <Link href={`/research/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>

                  <p className="text-[#817E84] text-xs leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-1.5 border-t border-[#202128] pt-4 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#817E84] block mb-1 font-mono">
                      Decision Intelligence Outcomes
                    </span>
                    {service.businessOutcomes.slice(0, 3).map((bo, bIdx) => (
                      <div key={bIdx} className="text-xs text-[#DAD4DE] flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5353] shrink-0 mt-0.5" />
                        <span className="leading-tight">{bo}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#202128]">
                  <Link
                    href={`/research/${service.slug}`}
                    className="text-xs font-bold text-[#937AFF] hover:text-white flex items-center gap-1 group/link"
                  >
                    <span>Detailed Service Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Addressed */}
      <section className="py-16 lg:py-24 border-b border-[#202128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
              Decision Traps
            </span>
            <h2 className="hasHighlight text-3xl font-extrabold text-white tracking-tight">
              Analytical Blindspots <strong>We Solve</strong>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {division.keyChallenges.map((item, idx) => (
              <div key={idx} className="bg-[#0B0C17] rounded-2xl p-6 border border-[#202128] space-y-3 relative group hover:border-[#FF5353]/40 transition-colors">
                <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
                <div className="text-xs font-mono font-bold text-[#FF5353] uppercase flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Blindspot</span>
                </div>
                <h3 className="font-bold text-sm text-white leading-snug">
                  {item.challenge}
                </h3>
                <div className="pt-2 border-t border-[#202128] text-xs text-[#DAD4DE] leading-relaxed">
                  <strong className="text-[#937AFF] block mb-1">Our Model:</strong>
                  {item.solution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 lg:py-24 border-b border-[#202128]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion
            items={division.faqs}
            title="Research Practice FAQs"
            subtitle="Transparent details regarding data sources, analytical tool delivery, and advisory limits."
          />
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-16 lg:py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#937AFF]/10 blur-[140px] pointer-events-none rounded-full" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ContactForm defaultDivision="research" />
        </div>
      </section>
    </div>
  );
}
