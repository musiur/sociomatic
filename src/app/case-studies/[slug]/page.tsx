import About from "@/app/case-studies/_utils/about";
import Approach from "@/app/case-studies/_utils/approach";
import Challenges from "@/app/case-studies/_utils/challenges";
import ClientsReviews from "@/app/case-studies/_utils/clients-reviews";
import Hero from "@/app/case-studies/_utils/hero";
import OurReview from "@/app/case-studies/_utils/our-review";
import Results from "@/app/case-studies/_utils/results";
import { BarChart, DatabaseZap, Filter } from "lucide-react";

type T__Slug = "googleads";

const CaseStudiesTemplate = ({ params }: { params: { slug: string } }) => {
  let data = PageData.googleads;
  if (Object.keys(data).includes(params.slug)) {
    const key = params.slug.replaceAll("-", "");
    data = PageData[key as T__Slug];
  }

  const { hero, about, challenge, apporach, result, review } = data;
  return (
    <>
      <Hero data={hero} />
      <About data={about} />
      <Challenges data={challenge} />
      <Approach data={apporach} />
      <Results data={result} />
      <OurReview data={review} />
      <ClientsReviews />
    </>
  );
};

export default CaseStudiesTemplate;

const PageData = {
  googleads: {
    hero: {
      tagline: <>We are thirsty for you satisfaction</>,
      title: (
        <>
          Success we brought for <br />
          <span>Deinhandymarkt</span>
        </>
      ),
      body: (
        <>
          With our easy-to-use solutions, start a smooth Google Ads experience
          to streamline the procedure for newbies to guarantee peak performance
          - the best Return On Investment (ROI)
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
    },
    about: {
      image: "https://utfs.io/f/915ff318-de2b-4494-b3df-73a78967133d-9fmvb.png",
      paragraphs: [
        {
          id: 1,
          text: (
            <>
              Being delivered in a unique pill shape, this shaker eradicates
              supplement accumulation, creating a dynamic environment for a
              superior mix that doesn&apos;t require a mixing ball or mesh grid.
            </>
          ),
        },
        {
          id: 2,
          text: (
            <>
              The simplicity of such shakers is what makes ShareSphere unique in
              the industry. No corners means no smell, less and easier cleaning,
              and completely no wastage.
            </>
          ),
        },
        {
          id: 3,
          text: (
            <>
              Being inspired by the idea of revolutionising the shaker bottle
              market and creating products that improve health, ShakeSphere
              Bottle is a go-to solution for before, during, and after a
              workout.
            </>
          ),
        },
      ],
    },
    challenge: {
      title: "Challenges We Have Faced",
      description:
        "With our easy-to-use solutions, start a smooth Google Ads experience to streamline the procedure for newbies to guarantee peak performance - the best Return On Investment (ROI)",
      challenges: [
        {
          id: 1,
          text: (
            <>
              The brand had a pretty good listing as a &quot;sports shaker&quot;
              in the Top 5 of the product category on Amazon US.
            </>
          ),
        },
        {
          id: 2,
          text: (
            <>
              The brand had a pretty good listing as a &quot;sports shaker&quot;
              in the Top 5 of the product category on Amazon US.
            </>
          ),
        },
        {
          id: 3,
          text: (
            <>
              The brand had a pretty good listing as a &quot;sports shaker&quot;
              in the Top 5 of the product category on Amazon US.
            </>
          ),
        },
        {
          id: 4,
          text: (
            <>
              The brand had a pretty good listing as a &quot;sports shaker&quot;
              in the Top 5 of the product category on Amazon US.
            </>
          ),
        },
        {
          id: 5,
          text: (
            <>
              The brand had a pretty good listing as a &quot;sports shaker&quot;
              in the Top 5 of the product category on Amazon US.
            </>
          ),
        },
        {
          id: 6,
          text: (
            <>
              The brand had a pretty good listing as a &quot;sports shaker&quot;
              in the Top 5 of the product category on Amazon US.
            </>
          ),
        },
      ],
    },
    apporach: {
      title: "Our Strategic Approaches",
      description:
        "With our easy-to-use solutions, start a smooth Google Ads experience to streamline the procedure for newbies to guarantee peak performance - the best Return On Investment (ROI)",
      approaches: [
        {
          id: 1,
          text: (
            <>
              Being delivered in a unique pill shape, this shaker eradicates
              supplement accumulation, creating a dynamic environment.
            </>
          ),
        },
        {
          id: 2,
          text: (
            <>
              The simplicity of such shakers is what makes ShareSphere unique in
              the industry. No corners means no smell.
            </>
          ),
        },
        {
          id: 3,
          text: (
            <>
              Being inspired by the idea of revolutionising the shaker bottle
              market and creating products that improve health.
            </>
          ),
        },
      ],
      image: "https://utfs.io/f/915ff318-de2b-4494-b3df-73a78967133d-9fmvb.png",
    },
    result: {
      image: "https://utfs.io/f/915ff318-de2b-4494-b3df-73a78967133d-9fmvb.png",
      results: [
        {
          id: 1,
          text: (
            <>
              Being delivered in a unique pill shape, this shaker eradicates
              supplement accumulation, creating a dynamic environment.
            </>
          ),
        },
        {
          id: 2,
          text: (
            <>
              The simplicity of such shakers is what makes ShareSphere unique in
              the industry. No corners means no smell.
            </>
          ),
        },
        {
          id: 3,
          text: (
            <>
              Being inspired by the idea of revolutionising the shaker bottle
              market and creating products that improve health.
            </>
          ),
        },
        {
          id: 4,
          text: (
            <>
              Being inspired by the idea of revolutionising the shaker bottle
              market and creating products that improve health.
            </>
          ),
        },
      ],
    },
    review: {
      title: "Trust That We Gain",
      description: (
        <>
          With our easy-to-use solutions, start a smooth Google Ads experience
          to streamline the procedure for newbies to guarantee peak performance
          - the best Return On Investment (ROI)
        </>
      ),
      review: {
        qouteText: (
          <>
            &quot;&nbsp; Being delivered in a unique pill shape, this shaker
            eradicates supplement accumulation, creating a dynamic environment
            for a superior mix that doesn&apos;t require a mixing ball or mesh
            grid. The simplicity of such shakers is what makes ShareSphere
            unique in the industry. No corners means no smell, less and easier
            cleaning, and completely no wastage&nbsp;&quot;
          </>
        ),
        name: "Hanna Sillitoe",
        avatar: "https://github.com/shadcn.png",
        org: "Skin Healing Expert, BBC Dragon's Den Brand",
      },
      image: "https://utfs.io/f/915ff318-de2b-4494-b3df-73a78967133d-9fmvb.png",
    },
  },
  // googleanalytics: {},
  // customwebdevelopment: {},
  // wordpressdevelopment: {},
  // shopifydevelopment: {},
  // softwaredevelopent: {},
  // uiux: {},
};
