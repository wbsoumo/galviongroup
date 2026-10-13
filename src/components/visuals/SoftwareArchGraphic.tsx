import React from "react";

export default function SoftwareArchGraphic() {
  return (
    <div className="w-full bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 shadow-2xl overflow-hidden font-mono text-xs relative group hover:border-[#937AFF]/40 transition-colors">
      {/* Ambient background glow inside graphic */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#937AFF]/15 rounded-full blur-[80px] pointer-events-none" />

      {/* Top Header Mockup */}
      <div className="flex items-center justify-between pb-4 border-b border-[#202128] text-[#817E84] relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#937AFF] inline-block animate-pulse shadow-[0_0_10px_#937AFF]" />
          <span className="text-[11px] font-semibold tracking-wider text-white">
            ENTERPRISE ARCHITECTURE // MESH HEALTH: 99.99%
          </span>
        </div>
        <span className="text-[10px] text-[#817E84] uppercase font-mono">Multi-Tenant Zero-Trust</span>
      </div>

      {/* Architecture SVG diagram */}
      <div className="py-6 relative z-10">
        <svg
          viewBox="0 0 600 320"
          className="w-full h-auto text-slate-200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background grid lines */}
          <defs>
            <pattern id="arch-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#202128" strokeWidth="0.75" />
            </pattern>
            <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#937AFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#4D36D0" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="accentGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF5353" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#937AFF" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <rect width="600" height="320" fill="url(#arch-grid)" rx="8" />

          {/* Incoming Traffic / Clients */}
          <g transform="translate(30, 110)">
            <rect x="0" y="0" width="100" height="90" rx="8" fill="#03010E" stroke="#202128" strokeWidth="1.5" />
            <text x="50" y="28" fill="#817E84" fontSize="10" textAnchor="middle" fontWeight="bold">CLIENT TIERS</text>
            <text x="50" y="46" fill="#DAD4DE" fontSize="9" textAnchor="middle">• Web & Mobile Apps</text>
            <text x="50" y="62" fill="#DAD4DE" fontSize="9" textAnchor="middle">• Enterprise B2B APIs</text>
            <text x="50" y="78" fill="#DAD4DE" fontSize="9" textAnchor="middle">• Partner Portals</text>
          </g>

          {/* Connection lines from Clients to Gateway */}
          <path d="M 130 155 L 180 155" stroke="#937AFF" strokeWidth="2" strokeDasharray="4 2" />
          <circle cx="155" cy="155" r="3" fill="#937AFF" />

          {/* API Gateway & Security Firewall */}
          <g transform="translate(180, 80)">
            <rect x="0" y="0" width="110" height="150" rx="8" fill="#03010E" stroke="#937AFF" strokeWidth="1.8" />
            <rect x="8" y="8" width="94" height="24" rx="4" fill="#0B0C17" />
            <text x="55" y="24" fill="#937AFF" fontSize="10" textAnchor="middle" fontWeight="bold">API GATEWAY</text>
            
            <text x="55" y="52" fill="#DAD4DE" fontSize="9" textAnchor="middle">TLS 1.3 Termination</text>
            <text x="55" y="72" fill="#DAD4DE" fontSize="9" textAnchor="middle">Auth0 / JWT Tokens</text>
            <text x="55" y="92" fill="#DAD4DE" fontSize="9" textAnchor="middle">Rate Limiting & WAF</text>
            <text x="55" y="112" fill="#DAD4DE" fontSize="9" textAnchor="middle">Event Dispatcher</text>
            <circle cx="55" cy="132" r="4" fill="#FF5353" />
          </g>

          {/* Connector to Microservices */}
          <path d="M 290 120 L 340 90" stroke="#937AFF" strokeWidth="1.5" />
          <path d="M 290 155 L 340 155" stroke="#937AFF" strokeWidth="1.5" />
          <path d="M 290 190 L 340 220" stroke="#937AFF" strokeWidth="1.5" />

          {/* Microservices Cluster */}
          <g transform="translate(340, 50)">
            {/* Service 1 */}
            <rect x="0" y="10" width="110" height="55" rx="6" fill="#03010E" stroke="#202128" strokeWidth="1.2" />
            <text x="55" y="32" fill="#937AFF" fontSize="9.5" textAnchor="middle" fontWeight="bold">CORE WORKFLOW</text>
            <text x="55" y="48" fill="#817E84" fontSize="8.5" textAnchor="middle">Go / Kubernetes Pod</text>

            {/* Service 2 */}
            <rect x="0" y="85" width="110" height="55" rx="6" fill="#03010E" stroke="#202128" strokeWidth="1.2" />
            <text x="55" y="107" fill="#937AFF" fontSize="9.5" textAnchor="middle" fontWeight="bold">INTEGRATIONS</text>
            <text x="55" y="123" fill="#817E84" fontSize="8.5" textAnchor="middle">Node.js / Async Jobs</text>

            {/* Service 3 */}
            <rect x="0" y="160" width="110" height="55" rx="6" fill="#03010E" stroke="#202128" strokeWidth="1.2" />
            <text x="55" y="182" fill="#937AFF" fontSize="9.5" textAnchor="middle" fontWeight="bold">DATA PIPELINE</text>
            <text x="55" y="198" fill="#817E84" fontSize="8.5" textAnchor="middle">Python / Kafka Streams</text>
          </g>

          {/* Connectors to Database & Cloud Storage */}
          <path d="M 450 90 L 490 125" stroke="#FF5353" strokeWidth="1.5" />
          <path d="M 450 155 L 490 155" stroke="#FF5353" strokeWidth="1.5" />
          <path d="M 450 220 L 490 185" stroke="#FF5353" strokeWidth="1.5" />

          {/* Database & Persistence Cluster */}
          <g transform="translate(490, 95)">
            <rect x="0" y="0" width="90" height="120" rx="8" fill="#03010E" stroke="#FF5353" strokeWidth="1.8" />
            <text x="45" y="24" fill="#FF5353" fontSize="10" textAnchor="middle" fontWeight="bold">DATA TIER</text>
            <text x="45" y="48" fill="#DAD4DE" fontSize="8.5" textAnchor="middle">PostgreSQL HA</text>
            <text x="45" y="68" fill="#DAD4DE" fontSize="8.5" textAnchor="middle">Redis Cache</text>
            <text x="45" y="88" fill="#DAD4DE" fontSize="8.5" textAnchor="middle">Object Storage</text>
            <text x="45" y="106" fill="#937AFF" fontSize="8" textAnchor="middle">Encrypted KMS</text>
          </g>
        </svg>
      </div>

      {/* Bottom Telemetry Metrics */}
      <div className="pt-4 border-t border-[#202128] grid grid-cols-3 gap-2 text-center relative z-10">
        <div className="bg-[#03010E] p-2 rounded-lg border border-[#202128]">
          <span className="text-[#817E84] block text-[9.5px]">P99 LATENCY</span>
          <span className="text-white font-bold text-xs">&lt; 14ms</span>
        </div>
        <div className="bg-[#03010E] p-2 rounded-lg border border-[#202128]">
          <span className="text-[#817E84] block text-[9.5px]">ENCRYPTION</span>
          <span className="text-[#937AFF] font-bold text-xs">AES-256 GCM</span>
        </div>
        <div className="bg-[#03010E] p-2 rounded-lg border border-[#202128]">
          <span className="text-[#817E84] block text-[9.5px]">AUTO-SCALING</span>
          <span className="text-[#FF5353] font-bold text-xs">Elastic HPA</span>
        </div>
      </div>
    </div>
  );
}
