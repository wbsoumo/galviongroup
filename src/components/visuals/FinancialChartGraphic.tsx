import React from "react";

export default function FinancialChartGraphic() {
  return (
    <div className="w-full bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 shadow-2xl overflow-hidden font-mono text-xs relative group hover:border-[#937AFF]/40 transition-colors">
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#937AFF]/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="flex items-center justify-between pb-4 border-b border-[#202128] text-[#817E84] relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#937AFF] inline-block animate-pulse shadow-[0_0_10px_#937AFF]" />
          <span className="text-[11px] font-semibold tracking-wider text-white">
            QUANTITATIVE MODEL // SCENARIO SENSITIVITY MATRIX
          </span>
        </div>
        <span className="text-[10px] text-[#937AFF] font-bold uppercase font-mono">Confidence Interval 95%</span>
      </div>

      <div className="py-6 relative z-10">
        <svg
          viewBox="0 0 600 280"
          className="w-full h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grid lines */}
          <line x1="50" y1="40" x2="550" y2="40" stroke="#202128" strokeWidth="0.8" />
          <line x1="50" y1="90" x2="550" y2="90" stroke="#202128" strokeWidth="0.8" />
          <line x1="50" y1="140" x2="550" y2="140" stroke="#202128" strokeWidth="0.8" />
          <line x1="50" y1="190" x2="550" y2="190" stroke="#202128" strokeWidth="0.8" />
          <line x1="50" y1="240" x2="550" y2="240" stroke="#202128" strokeWidth="1.2" />

          {/* Y Axis labels */}
          <text x="40" y="44" fill="#817E84" fontSize="9" textAnchor="end">+40%</text>
          <text x="40" y="94" fill="#817E84" fontSize="9" textAnchor="end">+20%</text>
          <text x="40" y="144" fill="#817E84" fontSize="9" textAnchor="end">Base</text>
          <text x="40" y="194" fill="#817E84" fontSize="9" textAnchor="end">-20%</text>
          <text x="40" y="244" fill="#817E84" fontSize="9" textAnchor="end">-40%</text>

          {/* Shaded Confidence Band */}
          <path
            d="M 60 140 Q 150 120 250 100 T 400 70 T 540 50 L 540 180 Q 400 170 250 160 T 60 140 Z"
            fill="#937AFF"
            fillOpacity="0.1"
          />

          {/* Base Forecast Curve */}
          <path
            d="M 60 140 Q 150 135 250 120 T 400 105 T 540 90"
            stroke="#937AFF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Upside Scenario Curve */}
          <path
            d="M 60 140 Q 150 120 250 100 T 400 70 T 540 50"
            stroke="#C4B5FD"
            strokeWidth="1.8"
            strokeDasharray="4 3"
            strokeLinecap="round"
          />

          {/* Downside Stress Scenario Curve */}
          <path
            d="M 60 140 Q 150 150 250 160 T 400 170 T 540 180"
            stroke="#FF5353"
            strokeWidth="1.8"
            strokeDasharray="4 3"
            strokeLinecap="round"
          />

          {/* Legend Items */}
          <g transform="translate(70, 260)">
            <circle cx="5" cy="5" r="4" fill="#C4B5FD" />
            <text x="14" y="8" fill="#817E84" fontSize="8.5">Expansion (+1.8σ)</text>

            <circle cx="160" cy="5" r="4" fill="#937AFF" />
            <text x="169" y="8" fill="#FFFFFF" fontSize="8.5">Expected Baseline</text>

            <circle cx="320" cy="5" r="4" fill="#FF5353" />
            <text x="329" y="8" fill="#817E84" fontSize="8.5">Stress Shock (-1.5σ)</text>
          </g>
        </svg>
      </div>

      <div className="pt-4 border-t border-[#202128] grid grid-cols-3 gap-2 text-center relative z-10">
        <div className="bg-[#03010E] p-2 rounded-lg border border-[#202128]">
          <span className="text-[#817E84] block text-[9.5px]">CONFIDENCE</span>
          <span className="text-[#937AFF] font-bold text-xs">95% Monte Carlo</span>
        </div>
        <div className="bg-[#03010E] p-2 rounded-lg border border-[#202128]">
          <span className="text-[#817E84] block text-[9.5px]">DATA POINTS</span>
          <span className="text-white font-bold text-xs">2.4M Historical</span>
        </div>
        <div className="bg-[#03010E] p-2 rounded-lg border border-[#202128]">
          <span className="text-[#817E84] block text-[9.5px]">REGULATORY SCOPE</span>
          <span className="text-[#FF5353] font-bold text-xs">Empirical Modeling</span>
        </div>
      </div>
    </div>
  );
}
