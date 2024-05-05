import About from "@/components/pages/case-studies/about";
import Approach from "@/components/pages/case-studies/approach";
import Challenges from "@/components/pages/case-studies/challenges";
import ClientsReviews from "@/components/pages/case-studies/clients-reviews";
import Hero from "@/components/pages/case-studies/hero";
import OurReview from "@/components/pages/case-studies/our-review";
import Results from "@/components/pages/case-studies/results";

const CaseStudiesTemplate = () => {
  return (
    <>
      <Hero />
      <About />
      <Challenges />
      <Approach />
      <Results />
      <OurReview />
      <ClientsReviews />
    </>
  );
};

export default CaseStudiesTemplate;
