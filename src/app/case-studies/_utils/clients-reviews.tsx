import { Action___GET__AllReviews } from "@/app/reviews/post/_utils/actions";
import ProjectIdea from "../../_utils/project-idea-banner";
import Testimonials from "../../services/_utils/testimonials";

const ClientsReviews = async () => {
  const result = await Action___GET__AllReviews();
  const reviews = result?.data?.length ? result?.data : [];
  return (
    <>
      <Testimonials data={reviews} />
      <ProjectIdea />
    </>
  );
};

export default ClientsReviews;
