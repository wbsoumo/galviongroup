"use client";

import React from "react";
import Image from "next/image";

export interface BrandList {
  image: string;
  lightimg?: string;
  name: string;
}

interface BrandSliderProps {
  brandList: BrandList[];
}

export default function BrandSlider({ brandList }: BrandSliderProps) {
  // Duplicate array to create continuous infinite scroll effect
  const extendedBrands = [...brandList, ...brandList, ...brandList];

  return (
    <div className="py-12 bg-neutral-950 border-t border-b border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs uppercase tracking-widest font-semibold text-neutral-500">
          Trusted by Industry Leaders Worldwide
        </p>
      </div>

      <div className="relative w-full flex overflow-x-hidden mask-linear-gradient">
        <div className="flex space-x-12 animate-marquee whitespace-nowrap items-center min-w-full justify-around">
          {extendedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 px-4"
            >
              <Image
                src={brand.lightimg || brand.image}
                alt={brand.name}
                width={130}
                height={40}
                className="h-9 w-auto object-contain filter invert brightness-200"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
