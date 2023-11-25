"use client";

import Script from "next/script";

const Reviews = () => {
  return (
    <div className="container section">
      <Script
        src="https://static.senja.io/dist/platform.js"
        onLoad={() => {
          console.log("console hoilo...");
        }}
      />
      <div
        className="senja-embed"
        data-id="86199e4d-576f-46ff-a865-e5bb9e3f3abf"
        data-lazyload="false"
      />
    </div>
  );
};

export default Reviews;
