import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Radio,
  Code2,
  Megaphone,
  CreditCard,
  CheckCircle2,
} from "lucide-react";
import { DIVISIONS } from "@/lib/data/divisions";
import { INSIGHTS_ARTICLES } from "@/lib/data/insights";
import DivisionCard from "@/components/ui/DivisionCard";
import CapabilitiesMatrix from "@/components/ui/CapabilitiesMatrix";
import EngagementProcess from "@/components/ui/EngagementProcess";
import SoftwareArchGraphic from "@/components/visuals/SoftwareArchGraphic";
import HeroVideoShowcase from "@/components/ui/HeroVideoShowcase";
import HeroAnimatedText from "@/components/ui/HeroAnimatedText";
import HeroSporeCanvas from "@/components/ui/HeroSporeCanvas";
import EnterpriseMarquee from "@/components/ui/EnterpriseMarquee";

export default function HomePage() {
  return (
    <div className="bg-[#03010E] text-[#DAD4DE] selection:bg-[#937AFF] selection:text-white">
      {/* SECTION 1: AUTOMARK HERO WITH RADIAL GLOW & AMBIENT PURPLE AURA */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-28 border-b border-[#202128]">
        {/* Automark signature ambient spore particles canvas */}
        <HeroSporeCanvas />

        {/* Automark signature ambient radial background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#937AFF]/15 blur-[160px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] bg-[#4D36D0]/20 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-[350px] h-[250px] bg-[#FF5353]/10 blur-[120px] pointer-events-none rounded-full" />

        {/* Subtle geometric starfield grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#20212825_1px,transparent_1px),linear-gradient(to_bottom,#20212825_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          {/* Central Hero Header */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 bg-[#0B0C17] border border-[#202128] hover:border-[#937AFF]/50 px-4 py-1.5 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(147,122,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#937AFF] animate-pulse shadow-[0_0_8px_#937AFF]" />
              <span className="text-xs font-semibold text-[#937AFF] tracking-wider uppercase font-mono">
                Enterprise Multi-Industry Group
              </span>
            </div>

            {/* Automark Animated Text Headline */}
            <HeroAnimatedText
              prefix="Building What Moves"
              phrases={[
                "Business Forward.",
                "Enterprise Scale.",
                "Resilient Networks.",
                "Financial Rails.",
                "Predictive Growth.",
              ]}
            />

            <p className="text-base sm:text-xl text-[#DAD4DE] max-w-3xl mx-auto leading-relaxed font-normal">
              From enterprise software engineering and brand acquisition to telecom infrastructure, quantitative research, and fintech software—Galvion Group brings specialized practices together into a unified corporate powerhouse.
            </p>

            {/* Pill Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/businesses"
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm shadow-[0_0_25px_rgba(147,122,255,0.35)] group"
              >
                <span>Explore Our Businesses</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="btn-outline inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm"
              >
                <span>Initiate Corporate Inquiry</span>
              </Link>
            </div>

            {/* Automark Capability Pills Row */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-mono text-[#817E84]">
              <span className="bg-[#0B0C17] border border-[#202128] px-3.5 py-1.5 rounded-full flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-[#937AFF]" />
                Cloud & APIs
              </span>
              <span className="bg-[#0B0C17] border border-[#202128] px-3.5 py-1.5 rounded-full flex items-center gap-2">
                <Megaphone className="w-3.5 h-3.5 text-[#FF5353]" />
                Growth Strategy
              </span>
              <span className="bg-[#0B0C17] border border-[#202128] px-3.5 py-1.5 rounded-full flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-[#937AFF]" />
                Telecom Mesh
              </span>
              <span className="bg-[#0B0C17] border border-[#202128] px-3.5 py-1.5 rounded-full flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-[#FF5353]" />
                Market Models
              </span>
              <span className="bg-[#0B0C17] border border-[#202128] px-3.5 py-1.5 rounded-full flex items-center gap-2">
                <CreditCard className="w-3.5 h-3.5 text-[#937AFF]" />
                Fintech Rails
              </span>
            </div>
          </div>

          {/* Regional Enterprise Ecosystem Marquee: India, Vietnam, Thailand, Dubai, Qatar */}
          <EnterpriseMarquee />

          {/* Automark 3D Perspective Revealing Video Showcase Card */}
          <div className="pt-4">
            <HeroVideoShowcase />
          </div>
        </div>
      </section>

      {/* SECTION 2: CORPORATE FOUNDATIONS / GOVERNANCE BENTO */}
      <section className="py-20 lg:py-28 border-b border-[#202128] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
                Corporate Foundations
              </span>
              <h2 className="hasHighlight text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                A Unified Group Built Around <strong>Possibility.</strong>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#937AFF] to-[#4D36D0] rounded-full" />
              <p className="text-[#DAD4DE] text-sm sm:text-base leading-relaxed pt-2">
                Modern enterprises face multidimensional challenges that cannot be resolved in isolation. Scaling a technology product requires disciplined software engineering, targeted brand positioning, resilient connectivity networks, and rigorous financial intelligence.
              </p>
              <p className="text-[#817E84] text-sm sm:text-base leading-relaxed">
                Galvion Group structures independent operating divisions under a unified parent governance framework, providing clients with deep domain expertise while ensuring cohesive delivery across every operational touchpoint.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#937AFF] hover:text-white group font-mono"
                >
                  <span>Learn more about our governance and model</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 space-y-2.5 hover:border-[#937AFF]/40 transition-colors">
                <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
                <div className="w-9 h-9 rounded-lg bg-[#937AFF]/10 border border-[#937AFF]/30 text-[#937AFF] flex items-center justify-center font-mono font-bold text-xs">
                  01
                </div>
                <h3 className="font-bold text-base text-white">Independent Domain Focus</h3>
                <p className="text-xs text-[#817E84] leading-relaxed">
                  Each division maintains specialized engineering squads, dedicated tooling, and custom processes tailored strictly to its operational industry.
                </p>
              </div>

              <div className="relative bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 space-y-2.5 hover:border-[#937AFF]/40 transition-colors">
                <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
                <div className="w-9 h-9 rounded-lg bg-[#937AFF]/10 border border-[#937AFF]/30 text-[#937AFF] flex items-center justify-center font-mono font-bold text-xs">
                  02
                </div>
                <h3 className="font-bold text-base text-white">Unified Quality Standard</h3>
                <p className="text-xs text-[#817E84] leading-relaxed">
                  All divisions adhere to the parent group’s zero-trust security standards, rigorous QA review boards, and transparent client reporting.
                </p>
              </div>

              <div className="relative bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 space-y-2.5 hover:border-[#937AFF]/40 transition-colors">
                <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
                <div className="w-9 h-9 rounded-lg bg-[#FF5353]/10 border border-[#FF5353]/30 text-[#FF5353] flex items-center justify-center font-mono font-bold text-xs">
                  03
                </div>
                <h3 className="font-bold text-base text-white">Strategic Cross-Pollination</h3>
                <p className="text-xs text-[#817E84] leading-relaxed">
                  Insights from financial data modeling inform fintech architectures; marketing performance data steers software UI/UX engineering.
                </p>
              </div>

              <div className="relative bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 space-y-2.5 hover:border-[#937AFF]/40 transition-colors">
                <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
                <div className="w-9 h-9 rounded-lg bg-[#937AFF]/10 border border-[#937AFF]/30 text-[#937AFF] flex items-center justify-center font-mono font-bold text-xs">
                  04
                </div>
                <h3 className="font-bold text-base text-white">Scalable Engagement</h3>
                <p className="text-xs text-[#817E84] leading-relaxed">
                  Clients can engage an isolated division for a targeted requirement or partner across multiple verticals for holistic transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OPERATING PORTFOLIO (5 DIVISIONS) */}
      <section id="businesses" className="py-20 lg:py-28 border-b border-[#202128] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
                Operating Portfolio
              </span>
              <h2 className="hasHighlight text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Five Specialized <strong>Operating Divisions</strong>
              </h2>
              <p className="text-[#817E84] text-sm sm:text-base leading-relaxed">
                Explore our distinct business divisions. Each operates with dedicated technical expertise, customized delivery frameworks, and specialized solutions.
              </p>
            </div>
            <div>
              <Link
                href="/businesses"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#937AFF] hover:text-white group font-mono"
              >
                <span>View Full Portfolio Overview</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIVISIONS.map((division) => (
              <DivisionCard key={division.id} division={division} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE CAPABILITIES MATRIX */}
      <section className="py-20 lg:py-28 border-b border-[#202128] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
              Core Competencies
            </span>
            <h2 className="hasHighlight text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              An Integrated Matrix of <strong>Strategic Capabilities</strong>
            </h2>
            <p className="text-[#817E84] text-sm sm:text-base leading-relaxed">
              We bring together five pillars of modern corporate execution to deliver compounding advantages for forward-thinking organizations.
            </p>
          </div>

          <CapabilitiesMatrix />

          {/* Group System Architecture Blueprint */}
          <div className="pt-8">
            <div className="text-center pb-6">
              <span className="text-xs font-mono text-[#937AFF] uppercase tracking-wider">
                Cross-Vertical Orchestration
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Zero-Trust Unified Cloud & Infrastructure Pipeline
              </h3>
            </div>
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-[#202128] via-[#202128]/40 to-transparent shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <SoftwareArchGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR APPROACH / 4-STAGE METHODOLOGY */}
      <section className="py-20 lg:py-28 border-b border-[#202128] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
                Execution Framework
              </span>
              <h2 className="hasHighlight text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Our 4-Stage <strong>Engagement Methodology</strong>
              </h2>
              <p className="text-[#817E84] text-sm sm:text-base leading-relaxed">
                A structured, repeatable framework ensuring transparency, risk containment, and measurable delivery outcomes across every engagement.
              </p>
            </div>
            <div>
              <Link
                href="/approach"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#937AFF] hover:text-white group font-mono"
              >
                <span>Read detailed methodology</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <EngagementProcess />
        </div>
      </section>

      {/* SECTION 6: EDITORIAL RESEARCH & STRATEGIC INSIGHTS */}
      <section className="py-20 lg:py-28 border-b border-[#202128] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
                Executive Perspectives
              </span>
              <h2 className="hasHighlight text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Editorial Research & <strong>Strategic Insights</strong>
              </h2>
              <p className="text-[#817E84] text-sm sm:text-base leading-relaxed">
                Objective analysis and engineering perspectives from practice leaders across cloud architecture, brand equity, telecommunications, and financial technology.
              </p>
            </div>
            <div>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#937AFF] hover:text-white group font-mono"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSIGHTS_ARTICLES.slice(0, 3).map((article) => (
              <div
                key={article.slug}
                className="relative bg-[#0B0C17] rounded-2xl border border-[#202128] p-6 sm:p-7 hover:border-[#937AFF]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[0_0_25px_rgba(147,122,255,0.12)]"
              >
                <span className="absolute top-2 left-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
                <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#937AFF] px-2.5 py-1 rounded-full bg-[#937AFF]/10 border border-[#937AFF]/25 font-mono text-[10px]">
                      {article.category}
                    </span>
                    <span className="text-[#817E84] font-mono text-[11px]">{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#937AFF] transition-colors line-clamp-2">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-[#817E84] text-xs leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#202128] mt-6 flex items-center justify-between">
                  <div className="text-[11px] text-[#817E84]">
                    <span className="block font-semibold text-white">{article.author.name}</span>
                    <span className="font-mono text-[10px]">{article.publishedDate}</span>
                  </div>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="text-xs font-semibold text-[#937AFF] group-hover:text-white flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: TALENT & CULTURE BENTO */}
      <section className="py-20 lg:py-28 border-b border-[#202128] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#0B0C17] rounded-3xl border border-[#202128] p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden group hover:border-[#937AFF]/40 transition-colors">
            {/* Ambient aura */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#937AFF]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
                  Talent & Practice Culture
                </span>
                <h2 className="hasHighlight text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Solve Complex Challenges Across <strong>Diverse Industries.</strong>
                </h2>
                <p className="text-[#DAD4DE] text-sm leading-relaxed">
                  Galvion Group brings together experienced software engineers, brand strategists, network architects, quantitative researchers, and fintech specialists. We cultivate an environment centered on intellectual rigor, autonomous problem-solving, and continuous learning.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 font-mono">
                  <div className="p-3 bg-[#03010E] rounded-xl border border-[#202128]">
                    <span className="font-bold text-sm text-white block">Intellectual Rigor</span>
                    <span className="text-[10px] text-[#817E84]">Evidence-based decisions</span>
                  </div>
                  <div className="p-3 bg-[#03010E] rounded-xl border border-[#202128]">
                    <span className="font-bold text-sm text-white block">Cross-Domain</span>
                    <span className="text-[10px] text-[#817E84]">5 business verticals</span>
                  </div>
                  <div className="p-3 bg-[#03010E] rounded-xl border border-[#202128]">
                    <span className="font-bold text-sm text-white block">Meritocracy</span>
                    <span className="text-[10px] text-[#817E84]">Autonomous leadership</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end space-y-4">
                <p className="text-xs text-[#817E84] lg:text-right max-w-xs">
                  We are continually seeking experienced domain leads and senior practitioners across our operating verticals.
                </p>
                <Link
                  href="/careers"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(147,122,255,0.3)] group"
                >
                  <span>Explore Careers at Galvion</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CONVERSION CTA WITH AUTOMARK PURPLE GLOW */}
      <section className="py-24 lg:py-32 relative overflow-hidden text-center">
        {/* Deep ambient radial violet glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#937AFF]/20 blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-[#4D36D0]/30 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
            Initiate Engagement
          </span>

          <h2 className="hasHighlight text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Let&apos;s Build <strong>What&apos;s Next.</strong>
          </h2>

          <p className="text-[#DAD4DE] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have a business challenge, a new initiative, or an idea worth exploring? Connect with Galvion Group to discuss the right capabilities for your needs.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm shadow-[0_0_30px_rgba(147,122,255,0.4)] group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/businesses"
              className="btn-outline inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm"
            >
              <span>Review All Capabilities</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
