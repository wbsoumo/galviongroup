import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Careers | Join Galvion Group",
  description:
    "Explore career opportunities, engineering culture, and professional growth across Galvion Group's specialized operating divisions.",
};

export default function CareersPage() {
  return (
    <div className="bg-[#03010E] text-[#DAD4DE]">
      {/* Header */}
      <div className="border-b border-[#202128] py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-[#937AFF]/15 blur-[140px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <Breadcrumbs items={[{ label: "Careers & Culture" }]} />
          <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
            Practice Culture
          </span>
          <h1 className="hasHighlight text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Build High-Impact Solutions With <strong>Exceptional Peers.</strong>
          </h1>
          <p className="text-[#DAD4DE] text-base sm:text-lg max-w-3xl leading-relaxed">
            At Galvion Group, we assemble multidisciplinary practitioners who value craftsmanship, intellectual honesty, and tangible business impact across our five operating divisions.
          </p>
        </div>
      </div>

      {/* Cultural Pillars */}
      <section className="py-16 lg:py-24 border-b border-[#202128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
              Our Values
            </span>
            <h2 className="hasHighlight text-3xl font-extrabold text-white tracking-tight">
              What Defines the <strong>Galvion Group Culture</strong>
            </h2>
            <p className="text-[#817E84] text-sm">
              We foster an environment of high autonomy, clear accountability, and continuous professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative bg-[#0B0C17] border border-[#202128] rounded-3xl p-8 shadow-lg space-y-4 hover:border-[#937AFF]/50 transition-colors group">
              <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
              <div className="w-10 h-10 rounded-xl bg-[#03010E] border border-[#202128] text-[#937AFF] flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#937AFF] transition-colors">
                Intellectual Rigor & Continuous Learning
              </h3>
              <p className="text-[#817E84] text-xs leading-relaxed">
                We believe the best decisions come from empirical data, peer review, and deep technical curiosity. We allocate continuous learning budgets and encourage cross-division knowledge sharing.
              </p>
            </div>

            <div className="relative bg-[#0B0C17] border border-[#202128] rounded-3xl p-8 shadow-lg space-y-4 hover:border-[#937AFF]/50 transition-colors group">
              <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
              <div className="w-10 h-10 rounded-xl bg-[#03010E] border border-[#202128] text-[#FF5353] flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#FF5353] transition-colors">
                Cross-Domain Exposure
              </h3>
              <p className="text-[#817E84] text-xs leading-relaxed">
                Engineers collaborate with quantitative financial analysts; marketing strategists work alongside telecom network consultants. You develop broad commercial perspective alongside deep vertical expertise.
              </p>
            </div>

            <div className="relative bg-[#0B0C17] border border-[#202128] rounded-3xl p-8 shadow-lg space-y-4 hover:border-[#937AFF]/50 transition-colors group">
              <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
              <div className="w-10 h-10 rounded-xl bg-[#03010E] border border-[#202128] text-[#937AFF] flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#937AFF] transition-colors">
                Meritocracy & Meaningful Ownership
              </h3>
              <p className="text-[#817E84] text-xs leading-relaxed">
                We reward measurable delivery and thoughtful problem solving rather than bureaucratic tenure. Team members are given clear ownership of systems and client outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* General Talent Inquiry Section */}
      <section className="py-16 lg:py-24 border-b border-[#202128]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B0C17] rounded-3xl border border-[#202128] p-8 sm:p-12 shadow-2xl space-y-6 relative overflow-hidden group hover:border-[#937AFF]/40 transition-colors">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#937AFF]/15 blur-[80px] pointer-events-none rounded-full" />
            <div className="space-y-2 relative z-10">
              <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
                General Recruitment Inquiry
              </span>
              <h2 className="hasHighlight text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Express Your Interest in <strong>Joining Our Practice</strong>
              </h2>
              <p className="text-[#DAD4DE] text-sm leading-relaxed">
                We are actively looking for senior software architects, performance marketing leads, telecom network consultants, financial data engineers, and fintech product specialists across our operating verticals.
              </p>
            </div>

            <div className="pt-2 relative z-10">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm shadow-[0_0_25px_rgba(147,122,255,0.3)]"
              >
                <span>Submit Talent Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
