import About from "@/app/case-studies/_utils/about";
import Approach from "@/app/case-studies/_utils/approach";
import Challenges from "@/app/case-studies/_utils/challenges";
import ClientsReviews from "@/app/case-studies/_utils/clients-reviews";
import Hero from "@/app/case-studies/_utils/hero";
import OurReview from "@/app/case-studies/_utils/our-review";
import Results from "@/app/case-studies/_utils/results";
import CaseStudiesData from "../_utils/data/data";
import { Fragment } from "react";

type T__Slug = "google-paid-ads" | "google-analytics" | "social-media-paid-ads";

const CaseStudiesTemplate = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  let data = CaseStudiesData["google-paid-ads"];
  if (Object.keys(CaseStudiesData).includes(params.slug)) {
    const key = params.slug;
    data = CaseStudiesData[key as T__Slug];
  }
  const { hero, about, challenge, approach, result, review } = data;
  return (
    <Fragment>
      <Hero data={hero} />
      <About data={about} />
      <Challenges data={challenge} />
      <Approach data={approach} />
      <Results data={result} />
      <OurReview data={review} />
      <ClientsReviews testimonial={true} />
    </Fragment>
  );
};

export default CaseStudiesTemplate;
