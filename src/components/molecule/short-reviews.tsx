"use client";

import Script from "next/script";
import SectionHead from "./section-head";
import { Button } from "../ui/button";
import Link from "next/link";

const ShortReviews = () => {
  return (
    <section className="bg-[url('/images/backgrounds/SquareBackground.svg')] bg-center bg-cover">
      <Script
        src="https://static.senja.io/dist/platform.js"
        // onLoad={() => {}}}
      />
      <div className="section container">
        <SectionHead
          highlighter="What Our Customers Say?"
          H2={
            <>
              Let <span>Trust</span> Play the Role
            </>
          }
          paragraphs={[]}
        />
        <div
          className="senja-embed pt-[50px]"
          data-id="4edcde1c-797a-4469-b0b2-abac5fdd3d58"
          data-lazyload="false"
        ></div>
        <div className="flex items-center justify-center pt-[50px]">
          <Link href="/reviews/#topPoint">
            <Button variant={"outline"}>View Our Wall of Love</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ShortReviews;
