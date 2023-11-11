"use client";

import SectionHead from "@/components/molecule/section-head";
import TestimonialUserCard from "@/components/molecule/testimonial-user-card";
import { useState } from "react";
import Calendly from "./calendly";

const Testimonial = ({ calendly }: { calendly: boolean }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(2);
  return (
    <section className="bg-[url('/images/backgrounds/TestimonialBackground.svg')] bg-center bg-contain bg-no-repeat">
      <div className="container section flex flex-col large-gap">
        <SectionHead
          highlighter="Testimonials"
          H2={<>Don&apos;t Take Our Words, We Embrace Their</>}
          paragraphs={[
            <>
              Our <span>satisfied</span> clients are from all over the world. We
              understand your requirements and deliver <span>growth</span>, no
              fluff.
            </>,
          ]}
        />
        <div className="flex flex-col lg:flex-row items-center justify-center small-gap">
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-[5px] lg:gap-[25px]">
            {TestimonialUserData.map(
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
                TestimonialUserData.find(
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

const TestimonialUserData = [
  {
    id: 1,
    name: "Samuel H",
    designation: "CEO @Analyzen",
    imageSlug: "user1",
    testimonial: (
      <>
        1I have never in my life experienced service like what I received from
        thesociomatic. They finished 3 days of work in about 2 hrs. They{" "}
        <span>went above and beyond what was expected of him</span>. I will Hire
        Them again and can fully recommend them to any potential client.
      </>
    ),
  },
  {
    id: 2,
    name: "John Doe",
    designation: "CTO @Apple Inc",
    imageSlug: "user2",
    testimonial: (
      <>
        2I have never in my life experienced service like what I received from
        thesociomatic. They finished 3 days of work in about 2 hrs. They{" "}
        <span>went above and beyond what was expected of him</span>. I will Hire
        Them again and can fully recommend them to any potential client.
      </>
    ),
  },
  {
    id: 3,
    name: "Nabina Nel",
    designation: "COO @Rabble",
    imageSlug: "user3",
    testimonial: (
      <>
        3I have never in my life experienced service like what I received from
        thesociomatic. They finished 3 days of work in about 2 hrs. They{" "}
        <span>went above and beyond what was expected of him</span>. I will Hire
        Them again and can fully recommend them to any potential client.
      </>
    ),
  },
];
