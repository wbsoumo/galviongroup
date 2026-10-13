import React from "react";

export default function MarketingFunnelGraphic() {
  return (
    <div className="w-full bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 shadow-2xl overflow-hidden font-mono text-xs relative group hover:border-[#937AFF]/40 transition-colors">
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#937AFF]/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="flex items-center justify-between pb-4 border-b border-[#202128] text-[#817E84] relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#937AFF] inline-block animate-pulse shadow-[0_0_10px_#937AFF]" />
          <span className="text-[11px] font-semibold tracking-wider text-white">
            MARKETING ATTRIBUTION // REVENUE ENGINE
          </span>
        </div>
        <span className="text-[10px] text-[#937AFF] font-bold uppercase font-mono">Multi-Touch Attribution</span>
      </div>

      <div className="py-6 relative z-10">
        <svg
          viewBox="0 0 600 280"
          className="w-full h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top Acquisition Channels */}
          <g transform="translate(20, 20)">
            <rect x="0" y="0" width="160" height="45" rx="6" fill="#03010E" stroke="#202128" strokeWidth="1.2" />
            <text x="80" y="20" fill="#937AFF" fontSize="9.5" textAnchor="middle" fontWeight="bold">PAID PERFORMANCE</text>
            <text x="80" y="34" fill="#817E84" fontSize="8.5" textAnchor="middle">Search & High-Intent Social</text>
          </g>

          <g transform="translate(220, 20)">
            <rect x="0" y="0" width="160" height="45" rx="6" fill="#03010E" stroke="#202128" strokeWidth="1.2" />
            <text x="80" y="20" fill="#FF5353" fontSize="9.5" textAnchor="middle" fontWeight="bold">ORGANIC AUTHORITY</text>
            <text x="80" y="34" fill="#817E84" fontSize="8.5" textAnchor="middle">Technical SEO & Thought Pieces</text>
          </g>

          <g transform="translate(420, 20)">
            <rect x="0" y="0" width="160" height="45" rx="6" fill="#03010E" stroke="#202128" strokeWidth="1.2" />
            <text x="80" y="20" fill="#937AFF" fontSize="9.5" textAnchor="middle" fontWeight="bold">EXECUTIVE NURTURE</text>
            <text x="80" y="34" fill="#817E84" fontSize="8.5" textAnchor="middle">Target Account Sequences</text>
          </g>

          {/* Flow Lines to Central Attribution Engine */}
          <path d="M 100 65 L 100 100 L 260 130" stroke="#937AFF" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 300 65 L 300 115" stroke="#FF5353" strokeWidth="1.5" />
          <path d="M 500 65 L 500 100 L 340 130" stroke="#937AFF" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Central Analytics & Attribution Core */}
          <g transform="translate(180, 115)">
            <rect x="0" y="0" width="240" height="65" rx="8" fill="#03010E" stroke="#937AFF" strokeWidth="1.8" />
            <text x="120" y="26" fill="#FFFFFF" fontSize="11" textAnchor="middle" fontWeight="bold">ATTRIBUTION ENGINE</text>
            <text x="120" y="44" fill="#817E84" fontSize="9" textAnchor="middle">First-Party Data // CAC Optimization</text>
            <text x="120" y="56" fill="#937AFF" fontSize="8.5" textAnchor="middle">Server-Side Tracking & Intent Signals</text>
          </g>

          {/* Downward Output Flow */}
          <path d="M 300 180 L 300 215" stroke="#937AFF" strokeWidth="2" />
          <polygon points="300,220 295,212 305,212" fill="#937AFF" />

          {/* Commercial Conversion & Revenue Result */}
          <g transform="translate(140, 222)">
            <rect x="0" y="0" width="320" height="45" rx="6" fill="#03010E" stroke="#202128" strokeWidth="1.2" />
            <text x="160" y="22" fill="#FFFFFF" fontSize="10" textAnchor="middle" fontWeight="bold">QUALIFIED SALES PIPELINE & ROI TELEMETRY</text>
            <text x="160" y="36" fill="#FF5353" fontSize="8.5" textAnchor="middle">Verified Cost Per Acquisition (CPA) & LTV Expansion</text>
          </g>
        </svg>
      </div>

      <div className="pt-4 border-t border-[#202128] grid grid-cols-3 gap-2 text-center relative z-10">
        <div className="bg-[#03010E] p-2 rounded-lg border border-[#202128]">
          <span className="text-[#817E84] block text-[9.5px]">ATTRIBUTION</span>
          <span className="text-[#937AFF] font-bold text-xs">Deterministic</span>
        </div>
        <div className="bg-[#03010E] p-2 rounded-lg border border-[#202128]">
          <span className="text-[#817E84] block text-[9.5px]">TRACKING</span>
          <span className="text-white font-bold text-xs">Server-Side CAPI</span>
        </div>
        <div className="bg-[#03010E] p-2 rounded-lg border border-[#202128]">
          <span className="text-[#817E84] block text-[9.5px]">BENCHMARK</span>
          <span className="text-[#FF5353] font-bold text-xs">Direct Revenue</span>
        </div>
      </div>
    </div>
  );
}
