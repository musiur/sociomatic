"use client";

import SectionHead from "@/components/molecule/section-head";
import Cal from "@calcom/embed-react";

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

      <Cal 
        calLink="yeatiq-ceo-of-the-sociomatic/unlock-real-growth-your-90-day-ad-challenge" 
        config={{ theme: "light" }}
      ></Cal>
    </div>
  );
};

export default Calendly;
