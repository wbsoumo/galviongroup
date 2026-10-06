"use client";

import React from "react";
import Image from "next/image";

export interface BrandList {
  image?: string;
  lightimg?: string;
  name: string;
  country?: string;
}

interface BrandSliderProps {
  brandList: BrandList[];
}

export default function BrandSlider({ brandList }: BrandSliderProps) {
  // Triple array for seamless infinite looping
  const extendedBrands = [...brandList, ...brandList, ...brandList];

  return (
    <div className="py-12 bg-neutral-950 border-t border-b border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs uppercase tracking-widest font-semibold text-neutral-400">
          Trusted by Top US & Indian Tech Startups
        </p>
      </div>

      <div className="relative w-full flex overflow-x-hidden">
        <div className="flex space-x-8 sm:space-x-12 animate-marquee whitespace-nowrap items-center min-w-full justify-around">
          {extendedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center space-x-2.5 bg-neutral-900/60 border border-neutral-800/80 rounded-full px-5 py-2.5 hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-300 shadow-md group shrink-0"
            >
              {brand.image ? (
                <Image
                  src={brand.lightimg || brand.image}
                  alt={brand.name}
                  width={100}
                  height={30}
                  className="h-6 w-auto object-contain filter invert brightness-200"
                />
              ) : (
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform" />
              )}
              <span className="text-sm font-bold tracking-tight text-neutral-200 group-hover:text-white transition-colors">
                {brand.name}
              </span>
              {brand.country && (
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-400 border border-neutral-700/50">
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
