import ClientsReviews from "@/app/case-studies/_utils/clients-reviews";
import { Action___Get__Review_By_Category } from "@/app/reviews/post/_utils/actions";
import { Fragment } from "react";

const TestimonialsSection = async () => {
  const result = await Action___Get__Review_By_Category("googleads");
  const reviews = result?.data?.length ? result?.data : [];
  return (
    <Fragment>
      <ClientsReviews reviews={reviews} projectIdea={false} hideCTA={true} />
    </Fragment>
  );
};

export default TestimonialsSection;
