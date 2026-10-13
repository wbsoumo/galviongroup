import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us | Corporate Heritage & Diversified Model",
  description:
    "Learn about Galvion Group's diversified multi-industry model, operating across technology, strategic marketing, telecommunications, financial intelligence, and financial technology.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#03010E] text-[#DAD4DE]">
      {/* Page Header */}
      <div className="border-b border-[#202128] py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-[#937AFF]/15 blur-[140px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <Breadcrumbs items={[{ label: "About Galvion Group" }]} />
          <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
            About Galvion Group
          </span>
          <h1 className="hasHighlight text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            A Diversified Corporate Group Built for <strong>Strategic Scale.</strong>
          </h1>
          <p className="text-[#DAD4DE] text-base sm:text-lg max-w-3xl leading-relaxed">
            Galvion Group was established around a clear operating conviction: modern enterprise growth demands multidisciplinary technical excellence, strategic commercial clarity, and operational integrity under one cohesive parent brand.
          </p>
        </div>
      </div>

      {/* Main Narrative Section */}
      <section className="py-16 lg:py-24 border-b border-[#202128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-[#DAD4DE] text-base leading-relaxed">
              <h2 className="hasHighlight text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Our Operating <strong>Philosophy</strong>
              </h2>
              <p>
                In a global economy defined by accelerated digital transformation and complex financial dynamics, businesses often struggle with fragmented vendor relationships. A software agency rarely understands regulatory compliance; a creative marketing studio rarely possesses deep technical architecture capability; telecom consultancies often operate detached from customer software touchpoints.
              </p>
              <p>
                Galvion Group bridges these disconnects. By uniting specialized divisions across Software Solutions, Marketing, Telecom, Research & Growth, and Fintech, we provide our clients with deep vertical specialization backed by the cross-domain synergies of a diversified group.
              </p>
              <p>
                Each division operates with dedicated leadership squads, specialized tooling, and industry-tailored methodologies. At the same time, all divisions adhere strictly to Galvion Group&apos;s centralized governance standards: zero-trust security postures, transparent commercial pricing, and long-term client alignment.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#0B0C17] rounded-xl p-5 border border-[#202128]">
                  <span className="text-2xl font-mono font-bold text-[#937AFF] block mb-1">05</span>
                  <span className="font-bold text-white text-sm block">Specialized Verticals</span>
                  <p className="text-xs text-[#817E84] mt-1">Focused domain execution across technology, marketing, telecom, and finance.</p>
                </div>
                <div className="bg-[#0B0C17] rounded-xl p-5 border border-[#202128]">
                  <span className="text-2xl font-mono font-bold text-[#FF5353] block mb-1">100%</span>
                  <span className="font-bold text-white text-sm block">Commercial Transparency</span>
                  <p className="text-xs text-[#817E84] mt-1">Audit-ready statements, clear project scopes, and zero speculative claims.</p>
                </div>
              </div>
            </div>

            {/* Right Group Pillars Box */}
            <div className="lg:col-span-5 bg-[#0B0C17] text-white rounded-3xl p-8 sm:p-10 border border-[#202128] shadow-2xl space-y-6 relative overflow-hidden group hover:border-[#937AFF]/40 transition-colors">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#937AFF]/15 blur-[80px] pointer-events-none rounded-full" />
              <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block relative z-10">
                Parent Group Values
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white relative z-10">
                Principles That Guide Every Division
              </h3>

              <div className="space-y-4 text-xs text-[#DAD4DE] relative z-10">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#937AFF]/10 text-[#937AFF] flex items-center justify-center shrink-0 mt-0.5 border border-[#937AFF]/25">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm mb-0.5">Technical & Architectural Rigor</strong>
                    We engineer for long-term maintainability, zero-trust security, and elastic performance rather than disposable shortcuts.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#937AFF]/10 text-[#937AFF] flex items-center justify-center shrink-0 mt-0.5 border border-[#937AFF]/25">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm mb-0.5">Evidence-Based Integrity</strong>
                    Our research, campaigns, and systems are grounded in empirical facts, verifiable datasets, and clear service boundaries.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#937AFF]/10 text-[#937AFF] flex items-center justify-center shrink-0 mt-0.5 border border-[#937AFF]/25">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm mb-0.5">Operational Partnership</strong>
                    We act as long-term strategic collaborators, aligning our commercial success with tangible outcomes for our clients.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#202128] relative z-10">
                <Link
                  href="/vision-mission"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#937AFF] hover:text-white transition-colors font-mono"
                >
                  <span>Explore Vision & Mission</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Structure Overview */}
      <section className="py-16 lg:py-24 border-b border-[#202128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
              Organization
            </span>
            <h2 className="hasHighlight text-3xl font-extrabold text-white tracking-tight">
              A Unified Multi-Industry <strong>Corporate Structure</strong>
            </h2>
            <p className="text-[#817E84] text-sm">
              How our five business divisions operate under central corporate governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-[#0B0C17] rounded-2xl p-6 border border-[#202128] hover:border-[#937AFF]/50 transition-colors shadow-sm space-y-2 text-center group">
              <span className="text-xs font-mono font-bold text-[#937AFF] block">01</span>
              <h3 className="font-bold text-sm text-white group-hover:text-[#937AFF] transition-colors">Software Solutions</h3>
              <p className="text-xs text-[#817E84]">Enterprise applications, cloud infrastructure, and APIs.</p>
              <Link href="/software" className="text-xs font-bold text-[#937AFF] block pt-2 font-mono">
                Explore →
              </Link>
            </div>

            <div className="bg-[#0B0C17] rounded-2xl p-6 border border-[#202128] hover:border-[#937AFF]/50 transition-colors shadow-sm space-y-2 text-center group">
              <span className="text-xs font-mono font-bold text-[#FF5353] block">02</span>
              <h3 className="font-bold text-sm text-white group-hover:text-[#937AFF] transition-colors">Marketing</h3>
              <p className="text-xs text-[#817E84]">Brand positioning, SEO, and paid performance marketing.</p>
              <Link href="/marketing" className="text-xs font-bold text-[#937AFF] block pt-2 font-mono">
                Explore →
              </Link>
            </div>

            <div className="bg-[#0B0C17] rounded-2xl p-6 border border-[#202128] hover:border-[#937AFF]/50 transition-colors shadow-sm space-y-2 text-center group">
              <span className="text-xs font-mono font-bold text-[#937AFF] block">03</span>
              <h3 className="font-bold text-sm text-white group-hover:text-[#937AFF] transition-colors">Telecom</h3>
              <p className="text-xs text-[#817E84]">SD-WAN connectivity, network audits, and unified telephony.</p>
              <Link href="/telecom" className="text-xs font-bold text-[#937AFF] block pt-2 font-mono">
                Explore →
              </Link>
            </div>

            <div className="bg-[#0B0C17] rounded-2xl p-6 border border-[#202128] hover:border-[#937AFF]/50 transition-colors shadow-sm space-y-2 text-center group">
              <span className="text-xs font-mono font-bold text-[#FF5353] block">04</span>
              <h3 className="font-bold text-sm text-white group-hover:text-[#937AFF] transition-colors">Research & Growth</h3>
              <p className="text-xs text-[#817E84]">Quantitative modeling, market sector intelligence, and KPIs.</p>
              <Link href="/research" className="text-xs font-bold text-[#937AFF] block pt-2 font-mono">
                Explore →
              </Link>
            </div>

            <div className="bg-[#0B0C17] rounded-2xl p-6 border border-[#202128] hover:border-[#937AFF]/50 transition-colors shadow-sm space-y-2 text-center group">
              <span className="text-xs font-mono font-bold text-[#937AFF] block">05</span>
              <h3 className="font-bold text-sm text-white group-hover:text-[#937AFF] transition-colors">Fintech</h3>
              <p className="text-xs text-[#817E84]">Payment integrations, currency exchange data, and remittance software.</p>
              <Link href="/fintech" className="text-xs font-bold text-[#937AFF] block pt-2 font-mono">
                Explore →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#937AFF]/15 blur-[120px] pointer-events-none rounded-full" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <h2 className="hasHighlight text-2xl sm:text-3xl font-extrabold text-white">
            Ready to collaborate with <strong>Galvion Group?</strong>
          </h2>
          <p className="text-[#817E84] text-sm max-w-xl mx-auto">
            Discuss your requirements with our corporate team to determine the optimal division or multi-disciplinary engagement for your enterprise.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm shadow-[0_0_25px_rgba(147,122,255,0.3)]"
            >
              <span>Initiate Project Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
