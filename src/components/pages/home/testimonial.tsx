"use client";

import SectionHead from "@/components/molecule/section-head";
import TestimonialUserCard from "@/components/molecule/testimonial-user-card";
import { useState } from "react";
import Calendly from "./calendly";

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
                designation: string;
                imageSlug: string;
              }) => {
                const { id, name, designation, imageSlug } = item;
                return (
                  <div key={id} onClick={() => setCurrentTestimonial(id)}>
                    <TestimonialUserCard
                      name={name}
                      designation={designation}
                      imageSlug={imageSlug}
                      selected={id === currentTestimonial}
                    />
                  </div>
                );
              }
            )}
          </div>
          <div className="max-w-[611px] bg-[url('/images/backgrounds/Quotes.svg')] bg-center bg-contain bg-no-repeat flex items-center justify-center">
            <p className="hero-description text-center p-[16.5px]">
              {
                data.testimonialList.find(
                  (item: any) => item.id === currentTestimonial
                )?.testimonial
              }
            </p>
          </div>
        </div>
      </div>
      {calendly ? <Calendly /> : null}
    </section>
  );
};

export default Testimonial;
