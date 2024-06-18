"use client";

import Script from "next/script";
import MasonryLayout from "../_utils/masonry-layout";

const Reviews = () => {
  return (
    <div className="bg-[url('/images/backgrounds/SquareBackground.svg')] bg-center bg-cover">
      <Script
        src="https://static.senja.io/dist/platform.js"
        onLoad={() => {
          console.log("console hoilo...");
        }}
      />
      <div className="bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50 section">
        <h1 className="text-muted text-center">Our Wall of Love</h1>
      </div>
      {/* <div
        className="senja-embed -mt-[50px] container pb-20"
        data-id="86199e4d-576f-46ff-a865-e5bb9e3f3abf"
        data-lazyload="false"
      /> */}
      <div className="-mt-[50px] container pb-20">
        <MasonryLayout />
      </div>
    </div>
  );
};

export default Reviews;
