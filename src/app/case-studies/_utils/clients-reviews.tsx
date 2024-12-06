"use client"

import { Action___GET__AllReviews } from "@/app/reviews/post/_utils/actions";
import ProjectIdea from "../../_utils/project-idea-banner";
import Testimonials from "../../services/_utils/testimonials";
import { useEffect, useState } from "react";

const ClientsReviews = ({
  testimonial = true,
  projectIdea = true,
  reviews = [],
}: {
  testimonial?: boolean;
  projectIdea?: boolean;
  reviews?: object[];
  }) => {
  const [clientReviews, setClientReviews] = useState<object[]>(reviews);
  const fetchReviews = async () => {
    const result = await Action___GET__AllReviews();
    setClientReviews(result?.data?.length ? result?.data : []);
  }
  

  useEffect(() => {
    if (!reviews) {
      fetchReviews();
    }
  }, [reviews]);
  console.log(reviews?.length, clientReviews?.length)
  return (
    <>
      {testimonial ? (
        clientReviews?.length ? (
          <Testimonials data={clientReviews} />
        ) : null
      ) : null}
      {projectIdea ? <ProjectIdea /> : null}
    </>
  );
};

export default ClientsReviews;
