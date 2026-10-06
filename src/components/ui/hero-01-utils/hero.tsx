"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";

export interface AvatarList {
  image: string;
}

interface HeroSectionProps {
  avatarList: AvatarList[];
}

export default function HeroSection({ avatarList }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-neutral-950 text-white">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Rating / Social Proof Pill */}
        <div className="inline-flex items-center space-x-3 bg-neutral-900/80 border border-neutral-800 rounded-full px-4 py-2 mb-8 shadow-xl backdrop-blur-md">
          <div className="flex -space-x-2">
            {avatarList.map((avatar, idx) => (
              <div key={idx} className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-neutral-950">
                <Image
                  src={avatar.image}
                  alt={`Client avatar ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-1">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-neutral-300 pl-1">5.0 Star Rating</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.1] max-w-5xl mx-auto mb-6">
          Empowering Brands With{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            Digital Innovation
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          We design and build award-winning digital experiences, scalable products, and cutting-edge web applications for forward-thinking companies worldwide.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white hover:bg-neutral-200 text-neutral-950 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 shadow-xl group"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200"
          >
            <span>View Our Work</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
