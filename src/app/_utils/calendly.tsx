"use client";

import SectionHead from "@/components/molecule/section-head";
import Script from "next/script";
import { InlineWidget } from "react-calendly";
import NeetoCal from "./neetocal";

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
      {/* <InlineWidget url="https://calendly.com/thesociomatic/thesociomatic" /> */}

      <NeetoCal
        id="fb3bc1b0-66f3-479c-95da-ad3f83bdc85e"
        organization="the-sociomatic-llc"
      />
    </div>
  );
};

export default Calendly;
