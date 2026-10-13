import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { Division } from "@/lib/data/divisions";

interface DivisionCardProps {
  division: Division;
  layout?: "vertical" | "horizontal";
}

export default function DivisionCard({ division, layout = "vertical" }: DivisionCardProps) {
  if (layout === "horizontal") {
    return (
      <div className="relative bg-[#0B0C17] rounded-2xl border border-[#202128] p-8 hover:border-[#937AFF]/50 transition-all duration-300 group shadow-lg hover:shadow-[0_0_30px_rgba(147,122,255,0.12)]">
        {/* Subtle corner crosshairs */}
        <span className="absolute top-2 left-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
        <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
        <span className="absolute bottom-2 left-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
        <span className="absolute bottom-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#937AFF] px-3 py-1 rounded-full bg-[#937AFF]/10 border border-[#937AFF]/30">
                Division {division.number}
              </span>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#817E84]">
                {division.category}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#937AFF] transition-colors">
              <Link href={`/${division.slug}`}>
                {division.name}
              </Link>
            </h3>

            <p className="text-[#DAD4DE] text-sm leading-relaxed max-w-2xl">
              {division.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              {division.services.slice(0, 4).map((service, sIdx) => (
                <Link
                  key={sIdx}
                  href={`/${division.slug}/${service.slug}`}
                  className="flex items-center gap-2 text-xs text-[#817E84] hover:text-[#937AFF] transition-colors py-1 group/item"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#937AFF] group-hover/item:translate-x-0.5 transition-transform" />
                  <span className="font-medium truncate">{service.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end border-t lg:border-t-0 lg:border-l border-[#202128] pt-6 lg:pt-0 lg:pl-8 space-y-6">
            <div className="space-y-1.5 w-full lg:text-right">
              <span className="text-[10px] font-semibold text-[#817E84] uppercase tracking-wider block font-mono">
                Primary Standard
              </span>
              <span className="text-sm font-bold text-white block">
                {division.statItems[0]?.detail}
              </span>
            </div>

            <Link
              href={`/${division.slug}`}
              className="inline-flex items-center gap-2 btn-primary px-6 py-2.5 text-xs font-semibold rounded-full group-hover:shadow-[0_0_20px_rgba(147,122,255,0.4)] transition-all"
            >
              <span>Explore Division</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-[#0B0C17] rounded-2xl border border-[#202128] p-6 sm:p-7 hover:border-[#937AFF]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[0_0_25px_rgba(147,122,255,0.12)]">
      {/* Subtle corner crosshairs */}
      <span className="absolute top-2 left-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
      <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
      <span className="absolute bottom-2 left-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
      <span className="absolute bottom-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>

      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs font-bold text-[#937AFF] px-3 py-1 rounded-full bg-[#937AFF]/10 border border-[#937AFF]/30">
            {division.number}
          </span>
          <span className="text-[11px] font-semibold text-[#817E84] uppercase tracking-wider line-clamp-1 font-mono">
            {division.category.split(" ")[0]}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#937AFF] transition-colors mb-2.5">
          <Link href={`/${division.slug}`}>
            {division.name}
          </Link>
        </h3>

        <p className="text-[#DAD4DE] text-sm leading-relaxed mb-6 line-clamp-3">
          {division.description}
        </p>

        <div className="space-y-2 border-t border-[#202128] pt-4 mb-6">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#817E84] block mb-1 font-mono">
            Core Specialized Services
          </span>
          {division.services.slice(0, 4).map((service, sIdx) => (
            <Link
              key={sIdx}
              href={`/${division.slug}/${service.slug}`}
              className="flex items-center gap-2 text-xs text-[#817E84] hover:text-[#937AFF] transition-colors group/link"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#937AFF]/40 group-hover/link:bg-[#937AFF] shrink-0" />
              <span className="truncate">{service.title}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-[#202128] flex items-center justify-between">
        <Link
          href={`/${division.slug}`}
          className="text-xs font-semibold text-[#937AFF] hover:text-white flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform"
        >
          <span>Explore Division</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <span className="text-[11px] text-[#817E84] font-medium font-mono">
          {division.services.length} Practices
        </span>
      </div>
    </div>
  );
}
