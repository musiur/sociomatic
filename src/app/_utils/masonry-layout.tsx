import React from "react";
import { TestimonialCard } from "../services/_utils/testimonials";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";

const MasonryLayout = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="columns-1 min-[700px]:columns-2 min-[1030px]:columns-3 space-x-4">
        {testimonials.map((testimonial) => {
          return (
            <ANIM__FadeInOutOnScroll key={testimonial.id} className="py-4">
              <TestimonialCard details={{ ...testimonial }} />
            </ANIM__FadeInOutOnScroll>
          );
        })}
      </div>
    </div>
  );
};

export default MasonryLayout;

const testimonials = [
  {
    id: 1,
    testimonial: "This service has completely exceeded my expectations.",
    image: "image_to_replace",
    customer: {
      name: "John Doe",
      company: "Apple Inc",
      rating: 5,
      image: "image_to_replace",
    },
  },
  {
    id: 2,
    testimonial:
      "I am extremely satisfied with the quality of the work. The attention to detail and dedication to the project was evident in the results. They truly care about their clients.",
    image: "image_to_replace",
    customer: {
      name: "Jane Smith",
      company: "Google LLC",
      rating: 5,
      image: "image_to_replace",
    },
  },
  {
    id: 3,
    testimonial:
      "Fantastic experience from start to finish. The customer support was excellent, and the end result.",
    image: "image_to_replace",
    customer: {
      name: "Alice Johnson",
      company: "Microsoft",
      rating: 4,
      image: "image_to_replace",
    },
  },
  {
    id: 4,
    testimonial:
      "I would highly recommend this service to anyone looking for high-quality work. The team went above and beyond to ensure my satisfaction. Their professionalism is unmatched.",
    image: "image_to_replace",
    customer: {
      name: "Robert Brown",
      company: "Amazon",
      rating: 5,
      image: "image_to_replace",
    },
  },
  {
    id: 5,
    testimonial:
      "Professional, reliable, and efficient. The project was completed on time and exceeded my expectations in every way.",
    image: "image_to_replace",
    customer: {
      name: "Emily Davis",
      company: "Facebook",
      rating: 5,
      image: "image_to_replace",
    },
  },
  {
    id: 6,
    testimonial:
      "I was thoroughly impressed with the level of expertise and professionalism displayed by the team. The results speak for themselves. They truly are the best in the business.",
    image: "image_to_replace",
    customer: {
      name: "Michael Wilson",
      company: "Tesla",
      rating: 4,
      image: "image_to_replace",
    },
  },
  {
    id: 7,
    testimonial: "The service provided was top-notch.",
    image: "image_to_replace",
    customer: {
      name: "Sarah Taylor",
      company: "Netflix",
      rating: 5,
      image: "image_to_replace",
    },
  },
  {
    id: 8,
    testimonial:
      "I am incredibly happy with the final product. The team was responsive, communicative, and dedicated to delivering quality work. I couldn't have asked for a better experience.",
    image: "image_to_replace",
    customer: {
      name: "Chris Martinez",
      company: "Airbnb",
      rating: 5,
      image: "image_to_replace",
    },
  },
  {
    id: 9,
    testimonial:
      "Exceptional service  than I could have imagined. Highly recommend them to anyone.",
    image: "image_to_replace",
    customer: {
      name: "Laura Harris",
      company: "Spotify",
      rating: 5,
      image: "image_to_replace",
    },
  },
  {
    id: 10,
    testimonial:
      "I highly recommend this service. The team was professional, efficient, are about their clients and it shows.",
    image: "image_to_replace",
    customer: {
      name: "Daniel Clark",
      company: "Adobe",
      rating: 4,
      image: "image_to_replace",
    },
  },
  {
    id: 11,
    testimonial:
      "The team did an amazing job. They were attentive to my needs, provided valuable feedback, and delivered an excellent final product. Their expertise is unmatched.",
    image: "image_to_replace",
    customer: {
      name: "Jessica Lewis",
      company: "Twitter",
      rating: 5,
      image: "image_to_replace",
    },
  },
  {
    id: 12,
    testimonial:
      "Great experience overall. The team was professional, the project was completed on time, and the final product was fantastic. I will definitely use their services again.",
    image: "image_to_replace",
    customer: {
      name: "Matthew Walker",
      company: "Uber",
      rating: 4,
      image: "image_to_replace",
    },
  },
  {
    id: 13,
    testimonial:
      "I am very impressed with the level of service provided. The team was .",
    image: "image_to_replace",
    customer: {
      name: "Lisa Hall",
      company: "LinkedIn",
      rating: 5,
      image: "image_to_replace",
    },
  },
  {
    id: 14,
    testimonial:
      "The results were beyond my expectations. The team was professional, efficient, and dedicated to ensuring my satisfaction. I couldn't be happier with the outcome.",
    image: "image_to_replace",
    customer: {
      name: "James Young",
      company: "PayPal",
      rating: 5,
      image: "image_to_replace",
    },
  },
  {
    id: 15,
    testimonial:
      "Excellent service from start to finish. Their dedication to customer satisfaction is clear.",
    image: "image_to_replace",
    customer: {
      name: "Patricia King",
      company: "Salesforce",
      rating: 5,
      image: "image_to_replace",
    },
  },
];
