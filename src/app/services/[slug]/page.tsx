import Competition from "@/components/assets/competition";
import GeoTargetting from "@/components/assets/geo-targetting";
import LongTermPartnership from "@/components/assets/long-term-partnership";
import Popular from "@/components/assets/popular";
import Premium from "@/components/assets/premium";
import ROI from "@/components/assets/roi";
import SME from "@/components/assets/sme";
import Starter from "@/components/assets/starter";
import TargetAudience from "@/components/assets/target-audience";
import VideoPlayer from "@/components/core/home/video-player";
import FeatureCard from "@/components/molecule/feature-card";
import SectionHead from "@/components/molecule/section-head";
import Faq from "@/components/pages/home/faq";
import HeroSection from "@/components/pages/home/herosection";
import HowWeWork from "@/components/pages/home/how-we-work";
import ProjectIdea from "@/components/pages/home/project-idea-banner";
import Testimonial from "@/components/pages/home/testimonial";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Services = ({ params }: { params: { slug: string } }) => {
  // let texting1 = "Hello";
  // let texting2 = "Jello";
  // let data = "";
  // if (params.slug.includes("software-development")) {
  //   data = texting1;
  // } else {
  //   data = texting2;
  // }
  return (
    <div>
      <HeroSection
        H1={
          <>
            Set up, Manage, and <span className="text-secondary">Optimize</span>
            &nbsp; Google Ads with us
          </>
        }
        P={
          <>
            With our easy-to-use solutions, start a smooth Google Ads
            experience. We streamline the procedure for newbies to guarantee
            peak performance and the best&nbsp;
            <span>return on investment (ROI)</span>. Start enjoying efficiency
            and benefits right away!
          </>
        }
        videoLink="https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ"
        brands={false}
        background="HeroBackgroundServices"
      />
      <section className="container section">
        <div className="grid grid-cols-1 md:grid-cols-2 large-gap">
          <div className="relative flex items-center">
            <Image
              src="/images/pages/home/whyChooseVideo.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <VideoPlayer videoLink="https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ" />
            </div>
          </div>
          <div className="flex flex-col justify-center small-gap">
            <h2 className="text-primary">
              Why Choose The <span className="text-secondary">Sociomatic</span>?
            </h2>
            <p>
              Choose The Sociomatic for a systematic, outcome-oriented Google
              AdWords strategy to take your company to new heights online
            </p>
            <ul className="grid grid-cols-1 gap-[10px]">
              {WhyChooseList.map((item, index) => {
                return (
                  <li key={index} className="flex items-start gap-[10px]">
                    <div className="min-w-[16px] mt-[4px]">
                      <BadgeCheck className="w-[16px] h-[16px] stroke-dimmed" />
                    </div>
                    <p className="w-auto [&>span]:font-semibold [&>span]:text-primary">
                      {item}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-[url('/images/backgrounds/SquareBackground.svg')] bg-center bg-cover">
        <div className="container section flex flex-col large-gap">
          <SectionHead
            highlighter="What We Provide"
            H2={
              <>
                Why&nbsp;
                <span className="text-secondary">Google Paid Ads</span>?
              </>
            }
            paragraphs={[
              <>
                Unlock Google&apos;s potential with well-thought-out search,
                display, and video ads to increase exposure and interaction.
                With targeted and economical pay-per-click marketing, you can
                effectively reach your audience.
              </>,
            ]}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-start large-gap">
            {FeaturesData.map((item: any) => {
              const { id, image, title, description, list, link } = item;
              return (
                <FeatureCard
                  key={id}
                  image={image}
                  title={title}
                  description={description}
                  list={list}
                  link={link}
                />
              );
            })}
          </div>
          <p className="text-center font-semibold">
            For cost-effective, targeted advertising on search, display, video,
            and commerce platforms, go with Google Paid Ads.
          </p>
        </div>
      </section>
      <HowWeWork />
      <section className="bg-[url('/images/backgrounds/SquareBackground.svg')] bg-center bg-cover">
        <div className="container section flex flex-col large-gap">
          <SectionHead
            highlighter="Our Packages"
            H2={
              <>
                Tailor-made Packages to Help Your Business{" "}
                <span className="text-secondary">Grow</span>
              </>
            }
            paragraphs={[
              <>
                We&apos;ll listen to your goals and complete a free audit to
                discover if we&apos;re a great fit to work with each other.
              </>,
            ]}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-start large-gap">
            {PackagesData.map((item: any) => {
              const { id, image, title, H1, description, list, link } = item;
              return (
                <div
                  key={id}
                  className={`rounded-[10px] ${
                    id === 2
                      ? "border border-b-[5px] border-secondarymuted border-b-secondary hover:border-secondary"
                      : "border"
                  } border-secondary-muted hover:border-secondary bg-white/5 backdrop-blur-[8px] hover:backdrop-blur-[8px] w-full px-[25px] py-[50px] shadow-[0_4px_25px_0_rgba(89,86,255,0.05)] transition ease-in-out duration-500 group`}
                >
                  <div className="flex flex-col items-center justify-center small-gap">
                    {image}

                    <h3
                      className={`${
                        id === 1
                          ? "text-decade"
                          : id === 2
                          ? "text-secondary"
                          : "text-primary"
                      } text-5xl lg:text-6xl font-black`}
                    >
                      {H1}
                    </h3>
                    <h4 className="text-2xl lg:text-3xl font-bold text-primary">
                      {title}
                    </h4>
                    <p className="[&>span]:font-medium [&>span]:text-primary text-center">
                      {description}
                    </p>
                    <ul>
                      {list.map((item: string, index: number) => {
                        return (
                          <li
                            key={index}
                            className="flex items-start justify-start gap-[6.7px]"
                          >
                            <BadgeCheck className="mt-[4px] h-[16px] w-[16px] stroke-dimmed stroke-[1.3px]" />{" "}
                            <span>{item}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <Link
                      href={link}
                      className="text-primary hover:text-secondary"
                    >
                      <Button
                        className={`${
                          id === 1
                            ? "bg-decade"
                            : id === 2
                            ? "bg-secondary"
                            : "bg-primary"
                        }`}
                      >
                        Get A Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 small-gap">
            <p className="text-center">
              Consequat amet veniam qui cillum magna ipsum ipsum culpa.
            </p>
            <div className="flex flex-wrap items-center justify-center small-gap">
              <Button variant="outline">Get A Free Consultation</Button>
              <Button>Get A Quote</Button>
            </div>
          </div>
        </div>
      </section>
      <Testimonial calendly={false} />
      <Faq />
      <ProjectIdea />
    </div>
  );
};

export default Services;

const WhyChooseList = [
  <>
    <span>Google Ads Mastery:</span> Make a statement where it counts with
    professional advertisements.
  </>,
  <>
    <span>Customized Plans:</span> We create one-of-a-kind initiatives designed
    to meet your company&apos;s objectives.
  </>,
  <>
    <span>Data-Driven Precision:</span> Maximize the impact of your ads by
    optimizing them with real-time data.
  </>,
  <>
    <span>Transparent Analytics:</span> confident choices and clear insights for
    the best possible marketing performance
  </>,
  <>
    <span>Cost-Effective Impact:</span> Optimize outcomes with sensible
    investments and cost-effective tactics with each click.
  </>,
  <>
    <span>Proven Online Success:</span> Choose Sociomatic for dependable
    outcomes and thrive with greater visibility and conversions.
  </>,
];

const FeaturesData = [
  {
    id: 1,
    image: <TargetAudience />,
    title: "PPC Search Ads",
    list: [
      <>Immediately show up in pertinent search results.</>,
      <>Find people who are actively looking for your goods or services.</>,
      <>Increase visibility by using targeted keywords strategically</>,
      <>Pay-per-click guarantees economy of cost.</>,
    ],
  },
  {
    id: 2,
    image: <ROI />,
    title: "Display Ads",
    list: [
      <>Grab viewers attention with eye-catching banner advertisements.</>,
      <>
        Expand your audience by using Google&apos;s extensive display network.
      </>,
      <>Raise brand recognition with eye-catching images.</>,
      <>For precision, focus on particular demographics.</>,
    ],
  },
  {
    id: 3,
    image: <Competition />,
    title: "Video Ads",
    list: [
      <>
        Take advantage of YouTube&apos;s broad user base by using video
        advertising.
      </>,
      <>Captivate viewers with vibrant, engaging visual content.</>,
      <>Use immersive video experiences to tell the story of your brand.</>,
      <>Use in-stream advertising to increase engagement and conversions.</>,
    ],
  },
  {
    id: 4,
    image: <GeoTargetting />,
    title: "Shopping Ads",
    list: [
      <>Display merchandise straight within Google&apos;s shopping results.</>,
      <>
        Increase online sales through aesthetically pleasing product listings.
      </>,
      <>Speak with people who are eager to buy.</>,
      <>Profitable pay-per-click strategy for maximum return on investment.</>,
    ],
  },
  {
    id: 5,
    image: <LongTermPartnership />,
    title: "Benefits of Google Paid Advertising",
    list: [
      <>Consistently hold the top spots in search results.</>,
      <>Quickly raise brand recognition and visibility.</>,
      <>Speak to the appropriate audience when it matters.</>,
      <>Optimize the delivery of ads based on user activity and preferences.</>,
    ],
  },
  {
    id: 6,
    image: <SME />,
    title: "Disadvantages of Google Paid Ads",
    list: [
      <>
        Expenses may rise quickly, particularly in markets with intense
        competition.
      </>,
      <>Click costs could change according to consumer demand.</>,
      <>
        To prevent overspending, the ad budget needs to be closely monitored.
      </>,
      <>Ongoing tweaks could be required to achieve the best ROI.</>,
    ],
  },
];

const PackagesData = [
  {
    id: 1,
    image: <Starter />,
    title: "Starter",
    H1: "$2000",
    description: (
      <>
        Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit in
        et.
      </>
    ),
    list: [
      "Lorem ipsum tellie testie",
      "Lorem ipsum tellie testie",
      "Lorem ipsum tellie testie",
    ],
    link: "/",
  },
  {
    id: 2,
    image: <Popular />,
    title: "Popular",
    H1: "$2500",
    description: (
      <>
        Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit in
        et.
      </>
    ),
    list: [
      "Lorem ipsum tellie testie",
      "Lorem ipsum tellie testie",
      "Lorem ipsum tellie testie",
    ],
    link: "/",
  },
  {
    id: 3,
    image: <Premium />,
    title: "Premium",
    H1: "$3500",
    description: (
      <>
        Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit in
        et.
      </>
    ),
    list: [
      "Lorem ipsum tellie testie",
      "Lorem ipsum tellie testie",
      "Lorem ipsum tellie testie",
    ],
    link: "/",
  },
];
