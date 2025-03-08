"use client"

import { Action___GET__AllReviews } from "@/app/reviews/post/_utils/actions";
import ProjectIdea from "../../_utils/project-idea-banner";
import Testimonials from "../../services/_utils/testimonials";
import { useEffect, useState } from "react";

const ClientsReviews = ({
  testimonial = true,
  projectIdea = true,
  reviews = [],
  hideCTA = false
}: {
  testimonial?: boolean;
  projectIdea?: boolean;
  reviews?: object[];
  hideCTA?: boolean;
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
  
  return (
    <>
      {testimonial ? (
        clientReviews?.length ? (
          <Testimonials data={clientReviews} hideCTA={hideCTA}/>
        ) : null
      ) : null}
      {projectIdea ? <ProjectIdea /> : null}
    </>
  );
};

export default ClientsReviews;
