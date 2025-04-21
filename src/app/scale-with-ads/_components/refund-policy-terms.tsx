import React from 'react';

// Interface for section content
interface SectionContent {
  title: string;
  content: React.ReactNode;
}

// Component for rendering a section
const Section: React.FC<SectionContent> = ({ title, content }) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {content}
    </div>
  );
};

// Main component for Refund Policy Terms
export const RefundPolicyTerms: React.FC = () => {
  const effectiveDate = "21 APR 2025";
  const governingLaw = "Dubai, UAE";

  // Define sections data
  const sections: SectionContent[] = [
    {
      title: "1. Definitions",
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>KPIs:</strong> Pre-agreed, measurable targets (e.g., 20% ROAS, 50 leads/month) documented in writing during onboarding.</li>
          <li><strong>Fraudulent Claim:</strong> Any refund request where (a) KPIs were met, or (b) the client intentionally altered/hid data.</li>
          <li><strong>Force Majeure:</strong> Events outside our control (e.g., platform outages, war, pandemics).</li>
        </ul>
      ),
    },
    {
      title: "2. Refund Eligibility",
      content: (
        <div>
          <p className="mb-2">You qualify for a refund only if all of the following apply:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Full 90-Day Completion:</strong> No pauses, cancellations, or payment delays during the challenge period.</li>
            <li><strong>Unmet KPIs:</strong> We failed to achieve pre-agreed KPIs verified by third-party tools (e.g., Google Analytics, Meta Ads Manager). <em>(Example: 3.0x ROAS within 90 days or 100 qualified leads/month)</em></li>
            <li><strong>Full Collaboration:</strong> You approved budgets, audiences, and creatives as requested and did not reject critical optimizations.</li>
            <li><strong>No Data Tampering:</strong> Tracking codes, pixels, and analytics access remained unaltered.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. Non-Refundable Scenarios",
      content: (
        <div>
          <p className="mb-2">You forfeit all refund rights if:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>KPIs Were Met:</strong> Verified by our logs, third-party tools, or audits.</li>
            <li><strong>Access Revoked:</strong> You restricted admin access to ad accounts/analytics during or after the challenge.</li>
            <li>
              <strong>Data Manipulation:</strong> Examples include:
              <ul className="list-disc pl-5 mt-1">
                <li>Deleting/modifying tracking codes or pixels.</li>
                <li>Restricting Google Analytics/Meta access.</li>
                <li>Falsifying screenshots or reports.</li>
              </ul>
            </li>
            <li>
              <strong>Non-Collaboration:</strong> Examples include:
              <ul className="list-disc pl-5 mt-1">
                <li>Rejecting audience targeting or budget adjustments without cause.</li>
                <li>Delaying approvals &gt;48 hours for critical optimizations.</li>
              </ul>
            </li>
            <li>
              <strong>External Factors:</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Your website/product became unavailable (e.g., crashes, inventory shortages).</li>
                <li>Force Majeure events (UAE Civil Code, Article 273).</li>
              </ul>
            </li>
            <li><strong>Fraudulent Claims:</strong> Filing refund requests despite achieving KPIs (Federal Decree-Law No. 31/2021 on Fraud).</li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. Proof of Performance",
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Binding Evidence:</strong> Data from third-party tools (e.g., Meta Ads Manager, Google Analytics) overrides client-provided screenshots.</li>
          <li><strong>Audit Rights:</strong> We reserve the right to audit your accounts/data for 180 days post-challenge. Refusal voids refund eligibility.</li>
          <li><strong>Independent Tracking:</strong> We install server-side tracking (e.g., Google Tag Manager) to validate results.</li>
        </ul>
      ),
    },
    {
      title: "5. Penalties for Fraudulent Claims",
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Legal Liability:</strong> Under UAE law, fraudulent claims may result in:
            <ul className="list-disc pl-5 mt-1">
              <li>Reimbursement of 100% legal fees + 50% of service fees as damages (UAE Civil Code, Article 390).</li>
              <li>Criminal charges for <strong>fraudulent misrepresentation</strong> (Federal Decree-Law No. 31/2021, Article 6).</li>
            </ul>
          </li>
          <li><strong>Public Disclosure:</strong> We may share evidence of fraud with Dubai Courts, DIFC, or relevant authorities.</li>
        </ul>
      ),
    },
    {
      title: "6. Refund Process",
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Request Deadline:</strong> 7 days after challenge completion. Late requests void eligibility.</li>
          <li>
            <strong>Required Documentation:</strong>
            <ul className="list-disc pl-5 mt-1">
              <li>Signed KPI agreement from onboarding.</li>
              <li>Unedited screenshots of third-party analytics for the full 90 days.</li>
              <li>Approval/Denial: We respond within 5 business days. Disputes go to Dubai Courts.</li>
            </ul>
          </li>
        </ul>
      ),
    },
    {
      title: "7. Mediation Clause",
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Before legal action, both parties agree to mediation via the Dubai Chamber of Commerce & Industry.</li>
          <li>Mediation costs are split 50/50 unless fraud is proven.</li>
        </ul>
      ),
    },
    {
      title: "8. Governing Law",
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>This agreement adheres to UAE Federal Law No. 5/1985 (Civil Code) and DIFC Contract Law.</li>
          <li>All disputes resolved in Dubai Courts or DIFC Courts (client&apos;s choice).</li>
        </ul>
      ),
    },
    {
      title: "9. Entire Agreement",
      content: (
        <p>
          This Refund Policy, along with the signed KPI agreement, constitutes the entire agreement between the parties and supersedes any prior discussions or understandings. No amendment shall be valid unless made in writing and signed by both parties.
        </p>
      ),
    },
  ];

  return (
    <div className="terms-and-conditions">
      <h1 className="text-2xl font-bold mb-2">Terms and Conditions for Refund Policy</h1>
      <p className="mb-6"><strong>Effective Date:</strong> {effectiveDate} | <strong>Governing Law:</strong> {governingLaw}</p>
      
      {sections.map((section, index) => (
        <Section key={index} title={section.title} content={section.content} />
      ))}
    </div>
  );
};