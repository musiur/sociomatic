import VideoPlayer from "@/components/core/home/video-player";
import { Button } from "@/components/ui/button";
import { Frown, Smile } from "lucide-react";

const CaseStudies = ({ params }: { params: { slug: string } }) => {
  let data: any = CaseStudyPageData;
  if (params.slug.includes("google-paid-ads")) {
    data = CaseStudyPageData;
  } else if (params.slug.includes("data-analytics")) {
    data = CaseStudyPageData;
  } else if (params.slug.includes("wordpress-development")) {
    data = CaseStudyPageData;
  } else if (params.slug.includes("content-writing-and-seo")) {
    data = CaseStudyPageData;
  } else if (params.slug.includes("shopify-store-development")) {
    data = CaseStudyPageData;
  } else if (params.slug.includes("social-media-paid-ads")) {
    data = CaseStudyPageData;
  } else if (params.slug.includes("custom-web-development")) {
    data = CaseStudyPageData;
  } else if (params.slug.includes("software-development")) {
    data = CaseStudyPageData;
  } else if (params.slug.includes("ui-ux-and-graphic-design")) {
    data = CaseStudyPageData;
  }
  return (
    <div>
      <div className="mt-10 container">
        <div className="min-h-[50vh] flex items-center justify-center bg-[url('/images/pages/home/heroVideo.png')] bg-contain bg-center bg-no-repeat">
          <VideoPlayer videoLink={data.heroVideo} />
        </div>
      </div>
      <section className="section grid grid-cols-1 large-gap">
        <div className="max-w-[600px] mx-auto px-5 flex flex-col small-gap items-center justify-center text-center">
          <h4 className="text-[16px] lg:text-[20px] font-semibold text-secondary">
            {data.H4}
          </h4>
          <h2 className="text-primary">{data.H2}</h2>
          <p className="">{data.P}</p>
        </div>
        <div className="container grid grid-cols-1 lg:grid-cols-2 small-gap">
          {data.studies.map((item: any) => {
            const {
              id,
              image,
              brand,
              title,
              challenge,
              followup,
              before,
              after,
            } = item;
            return (
              <div
                key={id}
                className="rounded-[10px] border border-secondary-muted hover:border-secondary bg-white/5 backdrop-blur-[8px] hover:backdrop-blur-[8px] w-full shadow-[0_4px_25px_0_rgba(89,86,255,0.05)] transition ease-in-out duration-500 overflow-hidden"
              >
                <div
                  className={`bg-[url('/images/pages/case-studies/${image}')] min-h-[300px] w-full bg-cover bg-center`}
                ></div>
                <div className="flex flex-col items-start justify-start small-gap px-[25px] py-[50px]">
                  <h3 className="text-[20px] lg:text-[24px] font-bold">
                    {brand}
                  </h3>
                  <h4 className="font-bold text-primary text-[16px] md:text-[20px]">
                    {title}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 small-gap">
                    <div className="grid grid-cols-1 small-gap sm:border-r sm:pr-[10px]">
                      <div className="grid grid-cols-1 gap-[10px] ">
                        <h4 className="font-bold text-dimmed flex items-center gap-[5px]">
                          <Frown /> The Challenge
                        </h4>
                        <p>{challenge}</p>
                      </div>
                      <div className="grid grid-cols-1 gap-[10px]">
                        <h4 className="font-bold text-secondary flex items-center gap-[5px]">
                          <Smile className="stroke-secondary" /> Our Follow-Up
                          Actions
                        </h4>
                        <p>{followup}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 small-gap ms:pl-[20px]">
                      <div className="grid grid-cols-1 gap-[10px]">
                        <h4 className="font-bold text-dimmed flex items-center gap-[5px]">
                          <Frown /> Results Before
                        </h4>
                        <p>{before}</p>
                      </div>
                      <div className="grid grid-cols-1 gap-[10px]">
                        <h4 className="font-bold text-secondary flex items-center gap-[5px]">
                          <Smile className="stroke-secondary" /> After
                          Sociomatic
                        </h4>
                        <ul>
                          {after.map((li: any, index: number) => {
                            return <li key={index}>{li}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-between small-gap pt-[25px] border-t">
                    <p className="text-primary text-xl md:text-2xl font-bold">
                      26X Revenue
                    </p>
                    <p className="text-primary text-xl md:text-2xl font-bold">
                      -87% CPA
                    </p>
                  </div>
                  <div className="flex justify-center w-full">
                    <Button>Get a Quote</Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

const CaseStudyPageData = {
  heroVideo: "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
  H4: <>Case Studies</>,
  H2: (
    <>
      Let the <span className="text-secondary">Numbers</span> <br /> Do the
      Talking.
    </>
  ),
  P: (
    <>
      As you brows through the case studies, you will understand that we
      don&apos;t require a “budget”, there is no “expense” as such. We are
      revenue and profit generators, so the sooner you start working with us,
      the faster you will get ahead of your competition.
    </>
  ),
  studies: [
    {
      id: 1,
      image: "image1.jpg",
      brand: "Floganza Dubai",
      title: (
        <>
          Floganza Dubai&apos;s Extravaganza: From 20 to&nbsp;
          <span className="text-[16px] md:text-[20px] text-secondary">
            340+ Form Submissions
          </span>
          !
        </>
      ),
      challenge: (
        <>
          Floganza Dubai, the maestro of event planning, faced the challenge of
          limited applause with 20 to 30 monthly form submissions. Their grand
          event was yearning for a larger audience.
        </>
      ),
      followup: (
        <>
          Sociomatic took center stage, crafting a crescendo of engagement
          through refined targeting and strategic ad optimisation. The aim?
          Elevate Floganza Dubai&apos;s event to a grand extravaganza.
        </>
      ),
      before: <>Monthly form submissions: 20 to 60+</>,
      after: [
        <>
          Monthly form submissions soared to 340+, transforming their event into
          a sold-out success.
        </>,
        <>
          &nbsp; Amplified brand visibility, higher engagement rates, and a
          spectacular&nbsp;
          <span className="text-primary font-medium">
            1160% increase in lead generation
          </span>
        </>,
      ],
    },
    {
      id: 2,
      image: "image1.png",
      brand: "Photoshoot Dubai Escape",
      title: (
        <>
          Capturing Dreams: From 0 to&nbsp;
          <span className="text-[16px] md:text-[20px] text-secondary">
            60+ Form Submissions
          </span>
          !
        </>
      ),
      challenge: (
        <>
          Photoshoot Dubai Escape, a visionary in photography, faced a silent
          stage with a meager 0 to 50 monthly form submissions. The echo of
          their artistry wasn&apos;t reaching the right ears.
        </>
      ),
      followup: (
        <>
          Sociomatic stepped into the frame, orchestrating a symphony of
          targeted visuals and strategic outreach. The goal is to transform
          their silent stage into a vibrant showcase.
        </>
      ),
      before: <>Monthly form submissions: 0 to 5</>,
      after: [
        <>
          Monthly form submissions surged to 60+, capturing the hearts of a
          broader audience.
        </>,
        <>
          &nbsp; Enhanced brand visibility, amplified engagement, and a
          stunning&nbsp;
          <span className="text-primary font-medium">
            200% increase in lead generation
          </span>
        </>,
      ],
    },
  ],
};
