import React from "react";

export default function NetworkTopologyGraphic() {
  return (
    <div className="w-full bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 shadow-2xl overflow-hidden font-mono text-xs relative group hover:border-[#937AFF]/40 transition-colors">
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#937AFF]/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="flex items-center justify-between pb-4 border-b border-[#202128] text-[#817E84] relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#937AFF] inline-block animate-pulse shadow-[0_0_10px_#937AFF]" />
          <span className="text-[11px] font-semibold tracking-wider text-white">
            ENTERPRISE SD-WAN // TOPOLOGY MONITOR
          </span>
        </div>
        <span className="text-[10px] text-[#937AFF] font-bold uppercase font-mono">Dual-Carrier Failover</span>
      </div>

      <div className="py-6 relative z-10">
        <svg
          viewBox="0 0 600 300"
          className="w-full h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background grid */}
          <line x1="50" y1="150" x2="550" y2="150" stroke="#202128" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="300" y1="30" x2="300" y2="270" stroke="#202128" strokeWidth="1" strokeDasharray="4 4" />

          {/* Headquarters Node */}
          <g transform="translate(40, 105)">
            <rect x="0" y="0" width="130" height="90" rx="8" fill="#03010E" stroke="#937AFF" strokeWidth="1.8" />
            <rect x="8" y="8" width="114" height="20" rx="4" fill="#0B0C17" />
            <text x="65" y="22" fill="#937AFF" fontSize="9.5" textAnchor="middle" fontWeight="bold">CORPORATE HQ</text>
            <text x="65" y="45" fill="#DAD4DE" fontSize="8.5" textAnchor="middle">Primary Core Router</text>
            <text x="65" y="60" fill="#937AFF" fontSize="8" textAnchor="middle">Link A: Active (10 Gbps)</text>
            <text x="65" y="75" fill="#FF5353" fontSize="8" textAnchor="middle">Link B: Standby (10 Gbps)</text>
          </g>

          {/* Central SD-WAN Orchestration Cloud */}
          <g transform="translate(225, 80)">
            <rect x="0" y="0" width="150" height="140" rx="12" fill="#03010E" stroke="#937AFF" strokeWidth="2" />
            <text x="75" y="28" fill="#FFFFFF" fontSize="11" textAnchor="middle" fontWeight="bold">SD-WAN FABRIC</text>
            <text x="75" y="48" fill="#817E84" fontSize="8.5" textAnchor="middle">Dynamic Mesh Routing</text>
            <circle cx="75" cy="75" r="18" fill="#0B0C17" stroke="#937AFF" strokeWidth="1.5" />
            <text x="75" y="78" fill="#937AFF" fontSize="9" textAnchor="middle">QoS</text>
            <text x="75" y="108" fill="#DAD4DE" fontSize="8.5" textAnchor="middle">Sub-second Failover</text>
            <text x="75" y="124" fill="#FF5353" fontSize="8" textAnchor="middle">Jitter: &lt; 2ms</text>
          </g>

          {/* High-speed Meshed connection HQ to Fabric */}
          <path d="M 170 140 L 225 140" stroke="#937AFF" strokeWidth="2.5" />
          <path d="M 170 160 L 225 160" stroke="#FF5353" strokeWidth="1.5" strokeDasharray="4 2" />

          {/* Branch Offices Nodes */}
          {/* Branch 1 */}
          <g transform="translate(430, 30)">
            <rect x="0" y="0" width="130" height="70" rx="8" fill="#03010E" stroke="#202128" strokeWidth="1.2" />
            <text x="65" y="22" fill="#FFFFFF" fontSize="9" textAnchor="middle" fontWeight="bold">REGIONAL BRANCH 01</text>
            <text x="65" y="40" fill="#817E84" fontSize="8" textAnchor="middle">Zero-Trust Edge</text>
            <text x="65" y="55" fill="#937AFF" fontSize="8" textAnchor="middle">Status: Nominal</text>
          </g>

          {/* Branch 2 */}
          <g transform="translate(430, 115)">
            <rect x="0" y="0" width="130" height="70" rx="8" fill="#03010E" stroke="#202128" strokeWidth="1.2" />
            <text x="65" y="22" fill="#FFFFFF" fontSize="9" textAnchor="middle" fontWeight="bold">REGIONAL BRANCH 02</text>
            <text x="65" y="40" fill="#817E84" fontSize="8" textAnchor="middle">Zero-Trust Edge</text>
            <text x="65" y="55" fill="#937AFF" fontSize="8" textAnchor="middle">Status: Nominal</text>
          </g>

          {/* Branch 3 */}
          <g transform="translate(430, 200)">
            <rect x="0" y="0" width="130" height="70" rx="8" fill="#03010E" stroke="#202128" strokeWidth="1.2" />
            <text x="65" y="22" fill="#FFFFFF" fontSize="9" textAnchor="middle" fontWeight="bold">DC COLO NODE</text>
            <text x="65" y="40" fill="#817E84" fontSize="8" textAnchor="middle">Cross-Connect 40G</text>
            <text x="65" y="55" fill="#937AFF" fontSize="8" textAnchor="middle">Status: Nominal</text>
          </g>

          {/* Meshed connection lines from Fabric to Branches */}
          <path d="M 375 120 L 430 65" stroke="#937AFF" strokeWidth="1.5" />
          <path d="M 375 150 L 430 150" stroke="#937AFF" strokeWidth="1.5" />
          <path d="M 375 180 L 430 235" stroke="#937AFF" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="pt-4 border-t border-[#202128] grid grid-cols-3 gap-2 text-center relative z-10">
        <div className="bg-[#03010E] p-2 rounded-lg border border-[#202128]">
          <span className="text-[#817E84] block text-[9.5px]">UPTIME SLA</span>
          <span className="text-[#937AFF] font-bold text-xs">99.999%</span>
        </div>
        <div className="bg-[#03010E] p-2 rounded-lg border border-[#202128]">
          <span className="text-[#817E84] block text-[9.5px]">FAILOVER TIME</span>
          <span className="text-white font-bold text-xs">&lt; 350ms</span>
        </div>
        <div className="bg-[#03010E] p-2 rounded-lg border border-[#202128]">
          <span className="text-[#817E84] block text-[9.5px]">CARRIER STATUS</span>
          <span className="text-[#FF5353] font-bold text-xs">Dual Multi-Path</span>
        </div>
      </div>
    </div>
  );
}
