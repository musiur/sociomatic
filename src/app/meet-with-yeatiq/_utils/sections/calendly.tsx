"use client";

import SectionHead from "@/components/molecule/section-head";
import { InlineWidget } from "react-calendly";

const LandingCalendlySection = () => {
  return (
    <div className="section" id="contact">
      <div className="container pb-[25px]">
        <SectionHead
          highlighter=""
          H2={<>Book Now To Discuss Your Project With Us</>}
          paragraphs={[]}
        />
      </div>
      <InlineWidget url="https://calendly.com/yeatiqpersonal/let-s-make-your-business-a-success-story?hide_gdpr_banner=1" />
    </div>
  );
};

export default LandingCalendlySection;
