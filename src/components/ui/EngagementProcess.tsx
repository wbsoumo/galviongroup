import React from "react";
import { CheckCircle2 } from "lucide-react";

export interface ProcessStep {
  step: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
}

export const ENGAGEMENT_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    headline: "Rigorous Technical Discovery & Objective Framing",
    description: "We begin every engagement by analyzing the underlying operational reality—assessing legacy software systems, audience metrics, connectivity infrastructure, or financial constraints before proposing solutions.",
    deliverables: [
      "Technical architecture audit",
      "Stakeholder requirements synthesis",
      "Risk assessment & feasibility scope",
    ],
  },
  {
    step: "02",
    title: "Strategize",
    headline: "Architectural Roadmapping & Execution Strategy",
    description: "Our practice leaders synthesize findings into an actionable execution blueprint with clear architectural specifications, resource planning, and risk mitigation protocols.",
    deliverables: [
      "Detailed architectural blueprint",
      "Milestone roadmap with defined SLAs",
      "Resource allocation & security governance",
    ],
  },
  {
    step: "03",
    title: "Deliver",
    headline: "Disciplined Engineering & Structured Implementation",
    description: "Execution is conducted with rigorous quality standards, automated continuous integration, strict type-safety, and regular executive demonstrations to ensure complete milestone transparency.",
    deliverables: [
      "Modular production-grade deliverables",
      "Automated CI/CD & testing verification",
      "Executive review demos & documentation",
    ],
  },
  {
    step: "04",
    title: "Improve",
    headline: "Performance Telemetry & Continuous Optimization",
    description: "Deployment is not the end of our responsibility. We monitor production performance, analyze user telemetry, and optimize systems to guarantee ongoing operational excellence.",
    deliverables: [
      "Real-time telemetry & latency monitoring",
      "Performance optimization recommendations",
      "Long-term support & knowledge transfer",
    ],
  },
];

export default function EngagementProcess() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {ENGAGEMENT_STEPS.map((item, idx) => (
          <div
            key={item.step}
            className="relative bg-[#0B0C17] rounded-2xl border border-[#202128] p-6 sm:p-7 hover:border-[#937AFF]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[0_0_25px_rgba(147,122,255,0.12)]"
          >
            {/* Step Top Badge */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#937AFF] to-[#C4B5FD]">
                  {item.step}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#817E84] bg-[#03010E] px-2.5 py-1 rounded-full border border-[#202128] font-mono">
                  Phase 0{idx + 1}
                </span>
              </div>

              <h4 className="text-xl font-bold text-white mb-1.5 group-hover:text-[#937AFF] transition-colors">
                {item.title}
              </h4>

              <h5 className="text-xs font-semibold text-[#817E84] mb-3 leading-snug">
                {item.headline}
              </h5>

              <p className="text-[#DAD4DE] text-xs leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#202128] space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#817E84] block font-mono">
                Key Deliverables
              </span>
              {item.deliverables.map((deliv, dIdx) => (
                <div key={dIdx} className="flex items-center gap-2 text-xs text-[#DAD4DE]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#937AFF] shrink-0" />
                  <span className="truncate">{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
