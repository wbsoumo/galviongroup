"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
}

export default function FaqAccordion({ items, title = "Frequently Asked Questions", subtitle }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full space-y-6">
      {(title || subtitle) && (
        <div className="space-y-2">
          {title && <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>}
          {subtitle && <p className="text-sm text-[#817E84]">{subtitle}</p>}
        </div>
      )}

      <div className="divide-y divide-[#202128] border-y border-[#202128]">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-4">
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between text-left focus:outline-none group py-1"
                aria-expanded={isOpen}
              >
                <span className="text-base font-bold text-white group-hover:text-[#937AFF] transition-colors pr-4">
                  {item.question}
                </span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                    isOpen
                      ? "bg-[#937AFF]/15 border-[#937AFF]/50 text-[#937AFF] rotate-180 shadow-[0_0_10px_rgba(147,122,255,0.3)]"
                      : "bg-[#0B0C17] border-[#202128] text-[#817E84] group-hover:border-[#937AFF]/40 group-hover:text-white"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="mt-3 text-sm text-[#DAD4DE] leading-relaxed pr-8 animate-in fade-in duration-200">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
