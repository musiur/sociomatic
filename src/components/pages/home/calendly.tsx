"use client";

import SectionHead from "@/components/molecule/section-head";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="bg-[url('/images/backgrounds/HeroBackground.svg')] bg-center bg-cover">
      <div className="container section grid grid-cols-1 large-gap">
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
