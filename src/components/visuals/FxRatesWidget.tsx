"use client";

import React, { useState } from "react";
import { RefreshCw, ArrowRightLeft, ShieldCheck, Info } from "lucide-react";

interface CurrencyRate {
  pair: string;
  base: string;
  target: string;
  rate: number;
  change: string;
  isPositive: boolean;
}

const SAMPLE_RATES: CurrencyRate[] = [
  { pair: "USD / EUR", base: "USD", target: "EUR", rate: 0.9245, change: "+0.12%", isPositive: true },
  { pair: "USD / GBP", base: "USD", target: "GBP", rate: 0.7890, change: "-0.08%", isPositive: false },
  { pair: "USD / INR", base: "USD", target: "INR", rate: 83.425, change: "+0.05%", isPositive: true },
  { pair: "USD / CAD", base: "USD", target: "CAD", rate: 1.3615, change: "+0.18%", isPositive: true },
  { pair: "EUR / USD", base: "EUR", target: "USD", rate: 1.0817, change: "-0.11%", isPositive: false },
  { pair: "GBP / USD", base: "GBP", target: "USD", rate: 1.2674, change: "+0.09%", isPositive: true },
];

export default function FxRatesWidget() {
  const [selectedPairIndex, setSelectedPairIndex] = useState(0);
  const [amount, setAmount] = useState<number>(5000);
  const selected = SAMPLE_RATES[selectedPairIndex];

  const convertedValue = (amount * selected.rate).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="bg-[#0B0C17] rounded-2xl border border-[#202128] shadow-2xl overflow-hidden text-[#DAD4DE]">
      {/* Widget Header */}
      <div className="bg-[#03010E] text-white p-5 border-b border-[#202128] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#937AFF]/15 text-[#937AFF] flex items-center justify-center font-bold border border-[#937AFF]/30">
            <RefreshCw className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold tracking-tight text-white leading-tight">
              Institutional FX & Remittance Rate Demonstrator
            </h4>
            <p className="text-[11px] text-[#817E84]">
              Technology prototype: Real-time currency pricing & conversion engine
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-[#937AFF] bg-[#937AFF]/10 px-2.5 py-1 rounded-full border border-[#937AFF]/30 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[#937AFF] animate-pulse" />
          <span>API Stream: Active</span>
        </div>
      </div>

      <div className="p-6">
        {/* Pair Selector Pills */}
        <div className="mb-6">
          <label className="text-xs font-bold uppercase tracking-wider text-[#817E84] block mb-2 font-mono">
            Select Active Currency Pair
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {SAMPLE_RATES.map((item, idx) => (
              <button
                key={item.pair}
                type="button"
                onClick={() => setSelectedPairIndex(idx)}
                className={`py-2 px-2.5 rounded-xl text-xs font-mono font-semibold transition-all text-center border ${
                  selectedPairIndex === idx
                    ? "bg-[#937AFF] text-white border-[#937AFF] shadow-[0_0_15px_rgba(147,122,255,0.4)]"
                    : "bg-[#03010E] text-[#817E84] border-[#202128] hover:border-[#937AFF]/40 hover:text-white"
                }`}
              >
                <div>{item.pair}</div>
                <div
                  className={`text-[10px] mt-0.5 ${
                    selectedPairIndex === idx
                      ? "text-white"
                      : item.isPositive
                      ? "text-[#937AFF]"
                      : "text-[#FF5353]"
                  }`}
                >
                  {item.rate}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Converter Calculator */}
        <div className="bg-[#03010E] rounded-xl p-5 border border-[#202128] grid grid-cols-1 md:grid-cols-12 gap-4 items-center mb-6">
          <div className="md:col-span-5">
            <label className="text-xs font-semibold text-[#817E84] block mb-1 font-mono">
              Send Amount ({selected.base})
            </label>
            <div className="relative">
              <input
                type="number"
                min="100"
                step="100"
                value={amount}
                onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
                className="w-full bg-[#0B0C17] border border-[#202128] rounded-xl px-4 py-2.5 text-base font-bold text-white focus:outline-none focus:border-[#937AFF] focus:ring-1 focus:ring-[#937AFF] font-mono"
              />
              <span className="absolute right-3 top-2.5 text-xs font-bold text-[#817E84] bg-[#03010E] px-2 py-0.5 rounded border border-[#202128] font-mono">
                {selected.base}
              </span>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center text-[#817E84]">
            <div className="w-8 h-8 rounded-full bg-[#0B0C17] border border-[#202128] flex items-center justify-center shadow-sm">
              <ArrowRightLeft className="w-4 h-4 text-[#937AFF]" />
            </div>
          </div>

          <div className="md:col-span-5">
            <label className="text-xs font-semibold text-[#817E84] block mb-1 font-mono">
              Estimated Settlement ({selected.target})
            </label>
            <div className="relative bg-[#0B0C17] border border-[#202128] rounded-xl px-4 py-2.5 flex items-center justify-between">
              <span className="text-base font-bold text-white font-mono">
                {convertedValue}
              </span>
              <span className="text-xs font-bold text-[#817E84] bg-[#03010E] px-2 py-0.5 rounded border border-[#202128] font-mono">
                {selected.target}
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Transparency & Spread Breakdown */}
        <div className="border border-[#202128] rounded-xl p-4 bg-[#03010E] space-y-2.5 text-xs text-[#DAD4DE]">
          <div className="flex justify-between items-center py-1 border-b border-[#202128]">
            <span className="text-[#817E84]">Live Interbank Indicative Rate:</span>
            <span className="font-mono font-bold text-white">
              1 {selected.base} = {selected.rate} {selected.target}
            </span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-[#202128]">
            <span className="text-[#817E84]">API Latency Standard:</span>
            <span className="font-mono text-[#937AFF] font-semibold">&lt; 85ms Streaming Updates</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-[#817E84]">Compliance & Regulatory Routing:</span>
            <span className="text-white font-semibold flex items-center gap-1 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-[#937AFF]" />
              Automated Watchlist Check & Sanction Filter
            </span>
          </div>
        </div>

        {/* Regulatory disclaimer */}
        <div className="mt-4 flex items-start gap-2 text-[11px] text-[#817E84] leading-tight">
          <Info className="w-3.5 h-3.5 text-[#817E84] shrink-0 mt-0.5" />
          <p>
            Demonstration purposes: Galvion Fintech engineers proprietary financial software, API gateways, and payment workflows. Direct remittance and fund transmissions operate via authorized and licensed financial partners.
          </p>
        </div>
      </div>
    </div>
  );
}
