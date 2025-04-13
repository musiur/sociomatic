"use client";

import Cal from "@calcom/embed-react";
import { useEffect, useState } from "react";
import SectionHead from "@/components/molecule/section-head";

const Calendly = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="section" id="calendly">
      <div className="container pb-[25px]">
        <SectionHead
          highlighter=""
          H2={<>Book Now To Discuss Your Project With Us</>}
          paragraphs={[]}
        />
      </div>

      {isClient ? (
        <div className="w-0 h-0 overflow-scroll" id="my-cal-inline"></div>
      ) : null}
      <Cal
        calLink="yeatiq-ceo-of-the-sociomatic/unlock-real-growth-your-90-day-ad-challenge"
        config={{ theme: "light" }}
        id="my-cal-inline"
      ></Cal>
    </div>
  );
};

export default Calendly;
