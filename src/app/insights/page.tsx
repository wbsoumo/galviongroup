import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Clock } from "lucide-react";
import { INSIGHTS_ARTICLES } from "@/lib/data/insights";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Insights & Perspectives | Corporate Research & Analysis",
  description:
    "Executive insights, engineering perspectives, and quantitative research across technology, marketing, telecom, and fintech from Galvion Group practice leaders.",
};

export default function InsightsPage() {
  return (
    <div className="bg-[#03010E] text-[#DAD4DE]">
      {/* Header */}
      <div className="border-b border-[#202128] py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-[#937AFF]/15 blur-[140px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <Breadcrumbs items={[{ label: "Insights & Perspectives" }]} />
          <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
            Executive Perspectives
          </span>
          <h1 className="hasHighlight text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Research, Perspectives & <strong>Industry Intelligence.</strong>
          </h1>
          <p className="text-[#DAD4DE] text-base sm:text-lg max-w-3xl leading-relaxed">
            In-depth analysis and technical briefs from Galvion Group practice leaders examining enterprise cloud architectures, brand positioning, telecom redundancy, quantitative market models, and payment technologies.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <section className="py-16 lg:py-24 border-b border-[#202128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INSIGHTS_ARTICLES.map((article) => (
              <article
                key={article.slug}
                className="relative bg-[#0B0C17] rounded-3xl border border-[#202128] p-7 shadow-lg hover:border-[#937AFF]/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_25px_rgba(147,122,255,0.12)]"
              >
                <span className="absolute top-2 left-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
                <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#937AFF] px-2.5 py-1 rounded-full bg-[#937AFF]/10 border border-[#937AFF]/25 font-mono text-[10px]">
                      {article.category}
                    </span>
                    <span className="text-[#817E84] font-mono flex items-center gap-1 text-[11px]">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white tracking-tight group-hover:text-[#937AFF] transition-colors leading-snug">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-[#817E84] text-xs leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#202128] mt-6 flex items-center justify-between">
                  <div className="text-[11px] text-[#817E84]">
                    <span className="block font-bold text-white">{article.author.name}</span>
                    <span className="font-mono text-[10px]">{article.author.role}</span>
                  </div>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="text-xs font-bold text-[#937AFF] group-hover:text-white flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
