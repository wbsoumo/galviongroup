import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, Clock, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { INSIGHTS_ARTICLES } from "@/lib/data/insights";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return INSIGHTS_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found | Galvion Group" };

  return {
    title: `${article.title} | Galvion Group Insights`,
    description: article.summary,
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = INSIGHTS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="bg-[#03010E] text-[#DAD4DE]">
      {/* Header */}
      <div className="border-b border-[#202128] py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-[#937AFF]/15 blur-[140px] pointer-events-none rounded-full" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Insights", href: "/insights" },
              { label: article.category },
            ]}
          />

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="text-xs font-semibold text-[#937AFF] px-3 py-1 rounded-full bg-[#937AFF]/10 border border-[#937AFF]/25 font-mono">
              {article.category}
            </span>
            <span className="text-xs text-[#817E84] font-mono flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span className="text-xs text-[#817E84]/50 font-mono">•</span>
            <span className="text-xs text-[#817E84] font-mono flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.publishedDate}
            </span>
          </div>

          <h1 className="hasHighlight text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="pt-4 border-t border-[#202128] flex items-center justify-between text-xs text-[#817E84]">
            <div>
              <span className="font-bold text-white block">{article.author.name}</span>
              <span className="font-mono text-[10px]">{article.author.role}</span>
            </div>
            <Link
              href={article.relatedDivisionHref}
              className="text-xs font-semibold text-[#937AFF] hover:text-white flex items-center gap-1 font-mono"
            >
              <span>{article.relatedDivision}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-16 lg:py-20 border-b border-[#202128]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Executive Summary & Key Takeaways */}
          <div className="bg-[#0B0C17] border border-[#202128] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#937AFF] block">
              Executive Summary & Key Takeaways
            </span>
            <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
              {article.summary}
            </p>
            <div className="pt-2 space-y-2 border-t border-[#202128]">
              {article.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#DAD4DE]">
                  <CheckCircle2 className="w-4 h-4 text-[#937AFF] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Article Body */}
          <div className="space-y-8 text-[#DAD4DE] text-base leading-relaxed">
            {article.bodyParagraphs.map((para, idx) => (
              <div key={idx} className="space-y-3">
                {para.heading && (
                  <h2 className="text-2xl font-bold text-white tracking-tight pt-4">
                    {para.heading}
                  </h2>
                )}
                <p className="text-[#DAD4DE]">{para.content}</p>
              </div>
            ))}
          </div>

          {/* Practice Division Callout */}
          <div className="pt-8 border-t border-[#202128]">
            <div className="bg-[#0B0C17] border border-[#202128] text-white rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden group hover:border-[#937AFF]/40 transition-colors">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#937AFF]/15 blur-[80px] pointer-events-none rounded-full" />
              <div className="space-y-1 relative z-10">
                <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
                  Related Practice Area
                </span>
                <h3 className="text-xl font-bold text-white">
                  {article.relatedDivision}
                </h3>
                <p className="text-xs text-[#817E84] max-w-md">
                  Discover how our practice leads implement these frameworks for enterprise clients.
                </p>
              </div>

              <Link
                href={article.relatedDivisionHref}
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold shrink-0 relative z-10 shadow-[0_0_20px_rgba(147,122,255,0.3)]"
              >
                <span>Explore Practice</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Back to insights */}
          <div className="pt-4">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#817E84] hover:text-[#937AFF] transition-colors font-mono"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all insights & research</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
