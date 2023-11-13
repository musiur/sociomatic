"use client";

import SectionHead from "@/components/molecule/section-head";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="section" id="calendly">
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

export default Calendly;
