import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Corporate Governance",
  description: "Privacy policy and corporate data protection standards for Galvion Group and its operating business divisions.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#03010E] text-[#DAD4DE] py-14 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        <div className="space-y-2 border-b border-[#202128] pb-6">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#937AFF] block">
            Corporate Governance & Legal
          </span>
          <h1 className="hasHighlight text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Galvion Group <strong>Privacy Policy</strong>
          </h1>
          <p className="text-xs text-[#817E84] font-mono">
            Last Updated: Continuous Governance // Enterprise Data Standard
          </p>
        </div>

        <div className="space-y-8 text-sm text-[#DAD4DE] leading-relaxed">
          <section className="bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">1. Executive Overview</h2>
            <p className="text-[#817E84]">
              Galvion Group (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy, confidentiality, and data integrity of our clients, prospective partners, and website visitors across all our operating business divisions. This Privacy Policy outlines how we collect, process, and safeguard information submitted through www.galviongroup.com.
            </p>
          </section>

          <section className="bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">2. Information Collection & Usage</h2>
            <p className="text-[#817E84]">
              We collect information strictly when provided voluntarily through our corporate contact forms, technical discovery inquiries, or recruitment submissions. This may include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-[#DAD4DE]">
              <li>Full Name, Corporate Email Address, and Professional Phone Number</li>
              <li>Company / Organization Affiliation and Professional Title</li>
              <li>Project Context, Requirements Scope, and Division Selection</li>
              <li>Resume / CV and employment history (for recruitment submissions)</li>
            </ul>
            <p className="text-[#817E84]">
              Information collected is utilized exclusively for responding to inquiries, conducting technical scoping sessions, fulfilling contractual obligations, and improving corporate web performance.
            </p>
          </section>

          <section className="bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">3. Information Protection & Zero-Trust Architecture</h2>
            <p className="text-[#817E84]">
              We implement industry-standard administrative, technical, and physical safeguards. Data transmitted through our digital forms is encrypted in transit via TLS 1.3 encryption. We strictly restrict internal access to client inquiry data on a need-to-know basis.
            </p>
          </section>

          <section className="bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">4. Third-Party Disclosures & Commercial Non-Sale</h2>
            <p className="text-[#817E84]">
              Galvion Group does not sell, trade, or rent personal information to external commercial brokers or third parties. We disclose data solely to specialized infrastructure partners (such as hosting and cloud databases) bound by strict confidentiality covenants.
            </p>
          </section>

          <section className="bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">5. Contact Our Privacy Office</h2>
            <p className="text-[#817E84]">
              For inquiries regarding corporate privacy practices or data access requests, contact our corporate legal counsel at{" "}
              <a href="mailto:privacy@galviongroup.com" className="text-[#937AFF] underline font-mono">
                privacy@galviongroup.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
