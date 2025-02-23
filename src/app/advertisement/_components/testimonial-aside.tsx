"use client";

import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import TestimonialUserCard from "@/components/molecule/testimonial-user-card";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Anhtieu415",
    country: "usa.svg",
    imageSlug: "user1",
    testimonial: (
      <>
        I liked that he Yeatiq was patient with me and answered my questions in
        a timely manner. I appreciate the video that he made to explain things
        to me. He was very professional with his work and communication skills.
      </>
    ),
  },
  {
    id: 2,
    name: "agnieszkavv",
    country: "ireland.svg",
    imageSlug: "user2",
    testimonial: (
      <>
        It&apos;s been a great pleasure working with Yeatiq. Very responsive and
        helpful. Since the universal analytics shut down, we couldn&apos;t see
        our old data in Looker Studio. . Yeatig configured Google Analytics 4
        for us and also created two Looker Studio dashboards for us to be able
        to view both the old and new data. Amazing job and saved us a lot of
        stress at the end of the year.
      </>
    ),
  },
  {
    id: 3,
    name: "maxinetubbe",
    country: "canada.svg",
    imageSlug: "user3",
    testimonial: (
      <>
        Yeatiq did such a great job of setting up my analytics and pixels that I
        also hired him for FB ads. You have to supply the graphics, he sets up,
        monitors and adjusts the ad campaigns. Knowledgeable and great
        communication (sent me Loom videos to explain what he was doing or what
        he needed, etc ).
      </>
    ),
  },
];

const TestimonialAside = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(2);
  return (
    <div className="flex flex-col items-center justify-center small-gap">
      <div className="grid grid-cols-3 gap-[5px] lg:gap-[25px]">
        {testimonials.map(
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
      <ANIM__FadeInOutOnScroll className="max-w-[811px] min-w-[300px] bg-[url('/images/backgrounds/Quotes.svg')] bg-center bg-contain bg-no-repeat flex items-center justify-center">
        <p className="text-center text-xl p-[16.5px] italic leading-loose">
          {
            testimonials.find((item: any) => item.id === currentTestimonial)
              ?.testimonial
          }
        </p>
      </ANIM__FadeInOutOnScroll>
    </div>
  );
};

export default TestimonialAside;
