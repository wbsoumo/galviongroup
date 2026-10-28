"use client";

import React from "react";
import Image from "next/image";

export interface BrandList {
  logoUrl?: string;
  logo?: React.ReactNode;
  name: string;
  country?: string;
}

interface BrandSliderProps {
  brandList?: BrandList[];
}

export default function BrandSlider({ brandList }: BrandSliderProps) {
  // Triple array for seamless fast infinite loop
  const list = brandList && brandList.length > 0 ? brandList : [];
  const extendedBrands = [...list, ...list, ...list];

  return (
    <div className="py-4 bg-[#0B0C17]/60 border-t border-b border-[#202128] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-3 text-center">
        <p className="text-[11px] uppercase tracking-widest font-mono font-semibold text-[#817E84]">
          Trusted by Prominent Enterprises Across India, SE Asia & Middle East
        </p>
      </div>

      <div className="relative w-full flex overflow-x-hidden">
        <div className="flex space-x-4 sm:space-x-6 animate-marquee whitespace-nowrap items-center min-w-full justify-around">
          {extendedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center space-x-2.5 bg-[#0B0C17] border border-[#202128] rounded-full px-3.5 py-1.5 hover:border-[#937AFF]/50 hover:bg-[#101222] transition-all duration-300 shadow-sm group shrink-0 cursor-pointer"
            >
              {brand.logo ? (
                <div className="w-4 h-4 rounded-full overflow-hidden relative flex-shrink-0">
                  {brand.logo}
                </div>
              ) : brand.logoUrl ? (
                <div className="w-4 h-4 rounded-full overflow-hidden relative flex-shrink-0 border border-neutral-700">
                  <Image
                    src={brand.logoUrl}
                    alt={brand.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#937AFF] to-[#4D36D0] flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">
                  {brand.name.charAt(0)}
                </div>
              )}
              <span className="text-xs font-semibold tracking-tight text-neutral-200 group-hover:text-white transition-colors">
                {brand.name}
              </span>
              {brand.country && (
                <span className="text-[9px] uppercase font-mono font-semibold px-1.5 py-0.5 rounded-md bg-[#1B1D28] text-[#817E84] border border-[#252836] group-hover:text-[#937AFF] transition-colors">
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
