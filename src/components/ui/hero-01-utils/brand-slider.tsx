"use client";

import React from "react";
import Image from "next/image";

export interface BrandList {
  logoUrl?: string;
  name: string;
  country?: string;
}

interface BrandSliderProps {
  brandList: BrandList[];
}

export default function BrandSlider({ brandList }: BrandSliderProps) {
  // Triple array for seamless fast infinite loop
  const extendedBrands = [...brandList, ...brandList, ...brandList];

  return (
    <div className="py-4 bg-neutral-950 border-t border-b border-neutral-900/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-3 text-center">
        <p className="text-[11px] uppercase tracking-widest font-semibold text-neutral-400">
          Trusted by Prominent US & Indian Ventures
        </p>
      </div>

      <div className="relative w-full flex overflow-x-hidden">
        <div className="flex space-x-6 sm:space-x-8 animate-marquee whitespace-nowrap items-center min-w-full justify-around">
          {extendedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center space-x-2.5 bg-neutral-900/80 border border-neutral-800 rounded-full px-4 py-1.5 hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-300 shadow-sm group shrink-0 cursor-pointer"
            >
              {brand.logoUrl ? (
                <div className="w-5 h-5 rounded-full overflow-hidden relative flex-shrink-0 border border-neutral-700">
                  <Image
                    src={brand.logoUrl}
                    alt={brand.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">
                  {brand.name.charAt(0)}
                </div>
              )}
              <span className="text-xs font-bold tracking-tight text-neutral-200 group-hover:text-white transition-colors">
                {brand.name}
              </span>
              {brand.country && (
                <span className="text-[9px] uppercase font-semibold px-1.5 py-0.5 rounded-md bg-neutral-800 text-neutral-400 border border-neutral-700/50">
                  {brand.country}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
