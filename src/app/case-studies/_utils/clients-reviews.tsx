import { Action___GET__AllReviews } from "@/app/reviews/post/_utils/actions";
import ProjectIdea from "../../_utils/project-idea-banner";
import Testimonials from "../../services/_utils/testimonials";

const ClientsReviews = async ({
  testimonial = true,
  projectIdea = true,
  reviews,
}: {
  testimonial?: boolean;
  projectIdea?: boolean;
  reviews?: any[];
}) => {
  if (!reviews) {
    const result = await Action___GET__AllReviews();
    reviews = result?.data?.length ? result?.data : [];
  }
  return (
    <>
      {testimonial ? <Testimonials data={reviews} /> : null}
      {projectIdea ? <ProjectIdea /> : null}
    </>
  );
};

export default ClientsReviews;
