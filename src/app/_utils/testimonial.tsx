"use client";

import SectionHead from "@/components/molecule/section-head";
import TestimonialUserCard from "@/components/molecule/testimonial-user-card";
import { useState } from "react";
import Calendly from "./calendly";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";

const Testimonial = ({ data, calendly }: { data: any; calendly: boolean }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(2);
  return (
    <section className="bg-[url('/images/backgrounds/TestimonialBackground.svg')] bg-center bg-contain bg-no-repeat">
      <div className="container section flex flex-col large-gap">
        <SectionHead
          highlighter={data?.highlighter}
          H2={data?.H2}
          paragraphs={data?.paragraphs}
        />
        <div className="flex flex-col lg:flex-row items-center justify-center small-gap">
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-[5px] lg:gap-[25px]">
            {data?.testimonialList.map(
              (item: {
                id: number;
                name: string;
                country: string;
                imageSlug: string;
              }) => {
                const { id, name, country, imageSlug } = item;
                return (
                  <div key={id} onClick={() => setCurrentTestimonial(id)}>
                    <TestimonialUserCard
                      name={name}
                      country={country}
                      imageSlug={imageSlug}
                      selected={id === currentTestimonial}
                    />
                  </div>
                );
              }
            )}
          </div>
          <ANIM__FadeInOutOnScroll className="max-w-[611px] min-w-[300px] bg-[url('/images/backgrounds/Quotes.svg')] bg-center bg-contain bg-no-repeat flex items-center justify-center">
            <p className="hero-description text-center lg:text-left p-[16.5px] italic leading-loose">
              {
                data.testimonialList.find(
                  (item: any) => item.id === currentTestimonial
                )?.testimonial
              }
            </p>
          </ANIM__FadeInOutOnScroll>
        </div>
        <Link href="/reviews" className="flex items-center justify-center">
          <Button variant={"outline"}>View Our Wall of Love</Button>
        </Link>
      </div>
      {calendly ? <Calendly /> : null}
    </section>
  );
};

export default Testimonial;
