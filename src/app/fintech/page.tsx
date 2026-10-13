import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowRight,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  ShieldAlert,
} from "lucide-react";
import { DIVISIONS } from "@/lib/data/divisions";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqAccordion from "@/components/ui/FaqAccordion";
import ContactForm from "@/components/forms/ContactForm";
import FintechVisualGraphic from "@/components/visuals/FintechVisualGraphic";
import FxRatesWidget from "@/components/visuals/FxRatesWidget";

const division = DIVISIONS.find((d) => d.id === "fintech")!;

export const metadata: Metadata = {
  title: "Galvion Fintech | Digital Payments & Financial Technology Infrastructure",
  description:
    "Secure payment gateway integrations, foreign exchange information engines, cross-border remittance software, and double-entry ledger systems.",
};

export default function FintechPage() {
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

              <div className="inline-flex items-center gap-2 bg-[#0B0C17] border border-[#202128] px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#937AFF] shadow-[0_0_15px_rgba(147,122,255,0.15)]">
                <span>Division 05 // Payments & Financial Systems</span>
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
                  <span>Request Fintech Scoping</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#demo"
                  className="btn-outline inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm"
                >
                  <span>View FX Demonstrator</span>
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
              <FintechVisualGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FX Demonstrator Section */}
      <section id="demo" className="py-16 lg:py-24 border-b border-[#202128] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
              Technology Demonstration
            </span>
            <h2 className="hasHighlight text-3xl font-extrabold text-white tracking-tight">
              Real-Time Currency & Remittance <strong>Pricing Architecture</strong>
            </h2>
            <p className="text-[#817E84] text-sm">
              An interactive demonstration of our real-time foreign exchange market ingestion, algorithmic conversion logic, and automated watchlist screening pipeline.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <FxRatesWidget />
          </div>
        </div>
      </section>

      {/* Strategic Overview & Operating Safeguards */}
      <section className="py-16 lg:py-24 border-b border-[#202128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
                Engineering Integrity
              </span>
              <h2 className="hasHighlight text-3xl font-extrabold text-white tracking-tight">
                Architecting High-Volume <strong>Financial Transaction Systems</strong>
              </h2>
              <p className="text-[#DAD4DE] text-sm leading-relaxed">
                Modern commerce demands frictionless payment checkout flows, transparent foreign exchange spreads, and audit-proof reconciliation. Galvion Fintech specializes in developing the software infrastructure connecting merchants, payment gateways, and licensed financial partners.
              </p>
              <p className="text-[#817E84] text-sm leading-relaxed">
                By enforcing hosted tokenization (minimizing PCI-DSS exposure) alongside double-entry immutable ledgers, we ensure that high-volume platforms operate with zero data leakage and real-time reconciliation.
              </p>
            </div>

            <div className="lg:col-span-6 bg-[#0B0C17] border border-[#202128] rounded-3xl p-8 space-y-4 relative group hover:border-[#937AFF]/40 transition-colors">
              <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
              <h3 className="font-bold text-white text-base">
                Core Fintech Principles:
              </h3>
              <div className="space-y-3">
                {division.operatingPrinciples.map((op, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-[#DAD4DE]">
                    <CheckCircle2 className="w-4 h-4 text-[#937AFF] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-bold">{op.title}</strong>
                      <span className="text-[#817E84]">{op.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#202128]">
                <span className="text-[11px] font-mono text-[#817E84] block mb-2 uppercase">
                  Security & Integration Stack:
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

      {/* Dedicated Services */}
      <section id="services" className="py-16 lg:py-24 border-b border-[#202128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
              Core Practices
            </span>
            <h2 className="hasHighlight text-3xl font-extrabold text-white tracking-tight">
              Fintech Software & <strong>Payment Engineering Practices</strong>
            </h2>
            <p className="text-[#817E84] text-sm">
              Explore our core financial technology practices spanning currency conversion engines, payment gateways, and automated reconciliation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {division.services.map((service) => (
              <div
                key={service.slug}
                className="relative bg-[#0B0C17] rounded-2xl border border-[#202128] p-7 hover:border-[#937AFF]/50 transition-all flex flex-col justify-between group shadow-lg hover:shadow-[0_0_25px_rgba(147,122,255,0.12)]"
              >
                <span className="absolute top-2 left-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
                <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>

                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#03010E] border border-[#202128] flex items-center justify-center text-[#937AFF] mb-4 group-hover:border-[#937AFF]/40 transition-colors">
                    <RefreshCw className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#937AFF] transition-colors mb-2">
                    <Link href={`/fintech/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>

                  <p className="text-[#817E84] text-xs leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-1.5 border-t border-[#202128] pt-4 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#817E84] block mb-1 font-mono">
                      Business Outcomes
                    </span>
                    {service.businessOutcomes.slice(0, 3).map((bo, bIdx) => (
                      <div key={bIdx} className="text-xs text-[#DAD4DE] flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#937AFF] shrink-0 mt-0.5" />
                        <span className="leading-tight">{bo}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#202128]">
                  <Link
                    href={`/fintech/${service.slug}`}
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
              Problem Framing
            </span>
            <h2 className="hasHighlight text-3xl font-extrabold text-white tracking-tight">
              Transaction & Fintech Challenges <strong>We Address</strong>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {division.keyChallenges.map((item, idx) => (
              <div key={idx} className="bg-[#0B0C17] rounded-2xl p-6 border border-[#202128] space-y-3 relative group hover:border-[#FF5353]/40 transition-colors">
                <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
                <div className="text-xs font-mono font-bold text-[#FF5353] uppercase flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Challenge</span>
                </div>
                <h3 className="font-bold text-sm text-white leading-snug">
                  {item.challenge}
                </h3>
                <div className="pt-2 border-t border-[#202128] text-xs text-[#DAD4DE] leading-relaxed">
                  <strong className="text-[#937AFF] block mb-1">Our Resolution:</strong>
                  {item.solution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Scope Clarification */}
      <section className="py-12 bg-[#0B0C17] border-b border-[#202128]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-[#FF5353] shrink-0 mt-1" />
          <div className="text-xs text-[#DAD4DE] space-y-1 leading-relaxed">
            <strong className="text-sm font-bold block text-white font-mono">Regulatory Scope & Technology Clarification:</strong>
            <p className="text-[#817E84]">
              Galvion Fintech engineers proprietary financial software, API gateways, currency pricing feeds, and double-entry reconciliation software. Direct currency transmissions, money remittance handling, and merchant acquiring operate through authorized, licensed financial institutions and partner banks.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 lg:py-24 border-b border-[#202128]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion
            items={division.faqs}
            title="Fintech & Payments FAQs"
            subtitle="Common questions regarding our software architecture, PCI-DSS compliance scope, and partner banking rail integrations."
          />
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-16 lg:py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#937AFF]/10 blur-[140px] pointer-events-none rounded-full" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ContactForm defaultDivision="fintech" />
        </div>
      </section>
    </div>
  );
}
