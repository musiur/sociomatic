import About from "@/components/pages/case-studies/about";
import Approach from "@/components/pages/case-studies/approach";
import Challenges from "@/components/pages/case-studies/challenges";
import ClientsReviews from "@/components/pages/case-studies/clients-reviews";
import Hero from "@/components/pages/case-studies/hero";
import OurReview from "@/components/pages/case-studies/our-review";
import Results from "@/components/pages/case-studies/results";
import { BarChart, DatabaseZap, Filter } from "lucide-react";

const HeroProps = {
  tagline: <>We are thirsty for you satisfaction</>,
  title: (
    <>
      Success we brought for <br />
      <span>Deinhandymarkt</span>
    </>
  ),
  body: (
    <>
      With our easy-to-use solutions, start a smooth Google Ads experience to
      streamline the procedure for newbies to guarantee peak performance - the
      best Return On Investment (ROI)
    </>
  ),
  features: [
    {
      id: 1,
      icon: <BarChart />,
      text: (
        <>
          <span>+50%</span>eCom CVR
        </>
      ),
    },
    {
      id: 2,
      icon: <Filter />,
      text: (
        <>
          <span>3X</span>Organic Traffic
        </>
      ),
    },
    {
      id: 3,
      icon: <DatabaseZap />,
      text: (
        <>
          <span>2X</span>MO. Revenue
        </>
      ),
    },
  ],
  cta: {
    primary: {
      text: <>Get other case studies</>,
      link: "/",
    },
    secondary: {
      text: <>Get a free consultation</>,
      link: "/",
    },
  },
};

const CaseStudiesTemplate = () => {
  return (
    <>
      <Hero data={HeroProps} />
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
