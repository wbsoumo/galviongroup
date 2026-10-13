import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { DIVISIONS } from "@/lib/data/divisions";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContactForm from "@/components/forms/ContactForm";

const division = DIVISIONS.find((d) => d.id === "marketing")!;

interface ServicePageProps {
  params: Promise<{
    service: string;
  }>;
}

export async function generateStaticParams() {
  return division.services.map((s) => ({
    service: s.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const service = division.services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found | Galvion Group" };

  return {
    title: `${service.title} | Galvion Marketing`,
    description: service.shortDesc,
  };
}

export default async function MarketingServicePage({ params }: ServicePageProps) {
  const { service: slug } = await params;
  const service = division.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-[#03010E] text-[#DAD4DE]">
      {/* Header */}
      <div className="border-b border-[#202128] py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-[#937AFF]/15 blur-[140px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Our Businesses", href: "/businesses" },
              { label: "Marketing", href: "/marketing" },
              { label: service.title },
            ]}
          />

          <span className="text-xs uppercase tracking-widest font-mono text-[#FF5353] font-bold block">
            Practice Service Detail // Division 02
          </span>

          <h1 className="hasHighlight text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-[#DAD4DE] text-base sm:text-lg max-w-3xl leading-relaxed">
            {service.fullDesc}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 lg:py-24 border-b border-[#202128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h2 className="hasHighlight text-2xl font-bold text-white tracking-tight">
                  Capabilities & <strong>Growth Scope</strong>
                </h2>
                <p className="text-[#817E84] text-sm leading-relaxed">
                  Our marketing practice leads connect brand architecture with rigorous data-driven acquisition engines, measuring success through closed pipeline rather than surface impressions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.capabilities.map((cap, idx) => (
                    <div key={idx} className="p-4 bg-[#0B0C17] border border-[#202128] rounded-xl space-y-1 hover:border-[#FF5353]/40 transition-colors">
                      <div className="flex items-center gap-2 text-[#FF5353] font-bold text-xs font-mono">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Practice {idx + 1}</span>
                      </div>
                      <span className="text-xs text-white font-semibold block">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#202128]">
                <h2 className="hasHighlight text-2xl font-bold text-white tracking-tight">
                  Target Commercial <strong>Outcomes</strong>
                </h2>
                <p className="text-[#817E84] text-sm leading-relaxed">
                  Every campaign and strategy is evaluated against revenue metrics, lowering customer acquisition cost (CAC) and maximizing lifetime value (LTV).
                </p>

                <div className="space-y-2.5">
                  {service.businessOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 bg-[#0B0C17] border border-[#202128] rounded-xl text-xs text-[#DAD4DE]">
                      <div className="w-5 h-5 rounded-full bg-[#FF5353]/15 text-[#FF5353] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 border border-[#FF5353]/30 font-mono">
                        {idx + 1}
                      </div>
                      <span className="font-medium leading-relaxed">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Services in Marketing */}
              <div className="pt-8 border-t border-[#202128]">
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#817E84] mb-3 font-bold">
                  Other Services in Division 02
                </h3>
                <div className="flex flex-wrap gap-2">
                  {division.services
                    .filter((s) => s.slug !== slug)
                    .map((s) => (
                      <Link
                        key={s.slug}
                        href={`/marketing/${s.slug}`}
                        className="px-3.5 py-1.5 rounded-full border border-[#202128] bg-[#0B0C17] text-xs font-semibold text-[#817E84] hover:text-[#937AFF] hover:border-[#937AFF]/40 transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/marketing"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#817E84] hover:text-[#937AFF] transition-colors font-mono"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Marketing Overview</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-5">
              <ContactForm defaultDivision="marketing" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
