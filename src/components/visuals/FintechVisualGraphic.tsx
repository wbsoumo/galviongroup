import React from "react";

export default function FintechVisualGraphic() {
  return (
    <div className="w-full bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 shadow-2xl overflow-hidden font-mono text-xs relative group hover:border-[#937AFF]/40 transition-colors">
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#937AFF]/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="flex items-center justify-between pb-4 border-b border-[#202128] text-[#817E84] relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#937AFF] inline-block animate-pulse shadow-[0_0_10px_#937AFF]" />
          <span className="text-[11px] font-semibold tracking-wider text-white">
            TRANSACTION ENGINE // PAYMENT ORCHESTRATION
          </span>
        </div>
        <span className="text-[10px] text-[#937AFF] font-bold uppercase font-mono">PCI-DSS Tokenized</span>
      </div>

      <div className="py-6 relative z-10">
        <svg
          viewBox="0 0 600 280"
          className="w-full h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Currency Ingestion Node */}
          <g transform="translate(30, 85)">
            <rect x="0" y="0" width="120" height="110" rx="8" fill="#03010E" stroke="#937AFF" strokeWidth="1.6" />
            <rect x="8" y="8" width="104" height="22" rx="4" fill="#0B0C17" />
            <text x="60" y="23" fill="#937AFF" fontSize="9" textAnchor="middle" fontWeight="bold">SENDER CLIENT</text>
            <text x="60" y="48" fill="#DAD4DE" fontSize="8.5" textAnchor="middle">USD / EUR / GBP</text>
            <text x="60" y="66" fill="#817E84" fontSize="8" textAnchor="middle">Tokenized Request</text>
            <rect x="15" y="80" width="90" height="18" rx="3" fill="#0B0C17" />
            <text x="60" y="92" fill="#937AFF" fontSize="8" textAnchor="middle">TLS 1.3 Strict</text>
          </g>

          {/* Connection */}
          <path d="M 150 140 L 210 140" stroke="#937AFF" strokeWidth="2" strokeDasharray="3 3" />

          {/* Core Processing / Compliance Switch */}
          <g transform="translate(210, 60)">
            <rect x="0" y="0" width="180" height="160" rx="10" fill="#03010E" stroke="#937AFF" strokeWidth="2" />
            <text x="90" y="28" fill="#FFFFFF" fontSize="11" textAnchor="middle" fontWeight="bold">PAYMENT SWITCH</text>
            <text x="90" y="48" fill="#817E84" fontSize="8.5" textAnchor="middle">FX Real-Time Pricing</text>
            
            {/* Compliance Verification box */}
            <rect x="15" y="62" width="150" height="34" rx="4" fill="#0B0C17" stroke="#202128" strokeWidth="1" />
            <text x="90" y="76" fill="#937AFF" fontSize="8" textAnchor="middle">AUTOMATED KYC/AML</text>
            <text x="90" y="88" fill="#DAD4DE" fontSize="7.5" textAnchor="middle">Watchlist Verification: PASS</text>

            {/* Ledger entry */}
            <rect x="15" y="106" width="150" height="34" rx="4" fill="#0B0C17" stroke="#202128" strokeWidth="1" />
            <text x="90" y="120" fill="#FF5353" fontSize="8" textAnchor="middle">DOUBLE-ENTRY LEDGER</text>
            <text x="90" y="132" fill="#DAD4DE" fontSize="7.5" textAnchor="middle">Immutable Audit Trace</text>
          </g>

          {/* Connection to Banking Rails */}
          <path d="M 390 140 L 450 140" stroke="#FF5353" strokeWidth="2" />

          {/* Beneficiary Settlement Node */}
          <g transform="translate(450, 85)">
            <rect x="0" y="0" width="120" height="110" rx="8" fill="#03010E" stroke="#FF5353" strokeWidth="1.6" />
            <rect x="8" y="8" width="104" height="22" rx="4" fill="#0B0C17" />
            <text x="60" y="23" fill="#FF5353" fontSize="9" textAnchor="middle" fontWeight="bold">SETTLEMENT RAILS</text>
            <text x="60" y="48" fill="#DAD4DE" fontSize="8.5" textAnchor="middle">FedNow / SEPA Instant</text>
            <text x="60" y="66" fill="#817E84" fontSize="8" textAnchor="middle">Sponsor Banks</text>
            <rect x="15" y="80" width="90" height="18" rx="3" fill="#0B0C17" />
            <text x="60" y="92" fill="#937AFF" fontSize="8" textAnchor="middle">ISO 20022 Schema</text>
          </g>
        </svg>
      </div>

      <div className="pt-4 border-t border-[#202128] grid grid-cols-3 gap-2 text-center relative z-10">
        <div className="bg-[#03010E] p-2 rounded-lg border border-[#202128]">
          <span className="text-[#817E84] block text-[9.5px]">SECURITY</span>
          <span className="text-[#937AFF] font-bold text-xs">PCI-DSS Level 1</span>
        </div>
        <div className="bg-[#03010E] p-2 rounded-lg border border-[#202128]">
          <span className="text-[#817E84] block text-[9.5px]">MESSAGING</span>
          <span className="text-white font-bold text-xs">ISO 20022 XML</span>
        </div>
        <div className="bg-[#03010E] p-2 rounded-lg border border-[#202128]">
          <span className="text-[#817E84] block text-[9.5px]">RECONCILIATION</span>
          <span className="text-[#FF5353] font-bold text-xs">Automated 100%</span>
        </div>
      </div>
    </div>
  );
}
