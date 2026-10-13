import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Use | Corporate Governance",
  description: "Terms of use and service conditions governing the website and corporate materials of Galvion Group.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#03010E] text-[#DAD4DE] py-14 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: "Terms of Use" }]} />

        <div className="space-y-2 border-b border-[#202128] pb-6">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#937AFF] block">
            Corporate Governance & Legal
          </span>
          <h1 className="hasHighlight text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Galvion Group <strong>Terms of Use</strong>
          </h1>
          <p className="text-xs text-[#817E84] font-mono">
            Last Updated: Continuous Governance // Enterprise Standards
          </p>
        </div>

        <div className="space-y-8 text-sm text-[#DAD4DE] leading-relaxed">
          <section className="bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
            <p className="text-[#817E84]">
              By accessing, browsing, or using www.galviongroup.com and any affiliated digital properties operated by Galvion Group and its five operating divisions, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and all applicable laws and regulations.
            </p>
          </section>

          <section className="bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">2. Intellectual Property Rights</h2>
            <p className="text-[#817E84]">
              All content, trademarks, logos, brand emblems, custom SVG diagrams, editorial articles, and software architecture schematics featured on this website are the intellectual property of Galvion Group or its respective division entities, protected under international copyright and intellectual property treaties. Reproduction without prior written authorization is prohibited.
            </p>
          </section>

          <section className="bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">3. Professional Scoping & Service Scope Clarification</h2>
            <p className="text-[#817E84]">
              The materials and descriptions provided on this website are for informational and business discovery purposes. Website descriptions do not constitute formal commercial warranties or binding service contracts. Formal project commitments are executed exclusively through customized Master Service Agreements (MSA) and Statements of Work (SOW).
            </p>
            <p className="text-[#817E84]">
              As explicitly stated across vertical landing pages:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-[#DAD4DE] text-xs">
              <li>Galvion Telecom provides engineering consulting and systems integration; it does not own carrier spectrum or operating carrier licenses.</li>
              <li>Galvion Research & Growth provides commercial sector intelligence and econometric analysis; it does not offer regulated individual retail investment advice.</li>
              <li>Galvion Fintech engineers financial software, APIs, and rate data systems; money transfer execution is routed via licensed partner institutions.</li>
            </ul>
          </section>

          <section className="bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">4. Governing Law</h2>
            <p className="text-[#817E84]">
              These Terms shall be governed by and construed in accordance with standard corporate commercial law principles. Inquiries concerning corporate governance can be directed to{" "}
              <a href="mailto:legal@galviongroup.com" className="text-[#937AFF] underline font-mono">
                legal@galviongroup.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
