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
      <InlineWidget url="https://calendly.com/thesociomatic/thesociomatic" />
    </div>
  );
};

export default LandingCalendlySection;
