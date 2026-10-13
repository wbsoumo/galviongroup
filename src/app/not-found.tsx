import React from "react";
import Link from "next/link";
import { Home, Layers, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-[#03010E] py-24 lg:py-36 flex items-center justify-center relative overflow-hidden text-[#DAD4DE]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#937AFF]/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#0B0C17] border border-[#202128] px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#937AFF] shadow-[0_0_15px_rgba(147,122,255,0.15)]">
          <span>HTTP 404 // Resource Not Found</span>
        </div>

        <h1 className="hasHighlight text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Page <strong>Not Located</strong>
        </h1>

        <p className="text-[#817E84] text-sm sm:text-base leading-relaxed">
          The requested page or corporate resource could not be found. It may have been relocated, restructured, or is temporarily inaccessible.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs shadow-[0_0_20px_rgba(147,122,255,0.3)]"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/businesses"
            className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs"
          >
            <Layers className="w-4 h-4" />
            <span>Explore Businesses</span>
          </Link>

          <Link
            href="/contact"
            className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
