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
import LinkButton from "@/components/molecule/link-button";
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
            Setting up and administering a is difficult for a newbie, resulting
            in poor performance and a low <span>return on investment</span>
            &nbsp; (ROI)
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
            <h6 className="text-[16px] lg:text-[20px] text-secondary font-semibold">
              What We Provide
            </h6>
            <h2 className="text-primary">
              Why Choose The <span className="text-secondary">Sociomatic</span>?
            </h2>
            <p>Our strategies are proven and tested for the following keys:</p>
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
            highlighter="Our Services"
            H2={
              <>
                Why we choose the approach of{" "}
                <span className="text-secondary">Google PPC</span>?
              </>
            }
            paragraphs={[
              <>
                Pay-per-click advertising, or PPC, is a technique that allows
                you to advertise on Google, reaching a large audience of people
                looking for products, services, or information that you can
                supply.
              </>,
              <>
                Millions of websites and businesses across the world use Google
                PPC: it&apos;s a powerful, cost-effective approach to raise
                brand awareness and bring quality traffic to your site,
                resulting in increased sales and other conversions.
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
        </div>
      </section>
      <HowWeWork />
      <section className="bg-[url('/images/backgrounds/SquareBackground.svg')] bg-center bg-cover">
        <div className="container section flex flex-col large-gap">
          <SectionHead
            highlighter="Our Packages"
            H2={
              <>
                Choose the&nbsp;<span className="text-secondary">Best</span>
                &nbsp;Deal
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
                    id === 2 ? "border border-b-[5px] border-secondarymuted border-b-secondary hover:border-secondary" : "border"
                  } border-secondary-muted hover:border-secondary bg-white/5 backdrop-blur-[8px] hover:backdrop-blur-[8px] w-full px-[25px] py-[50px] shadow-[0_4px_25px_0_rgba(89,86,255,0.05)] transition ease-in-out duration-500 group`}
                >
                  <div className="flex flex-col items-center justify-center small-gap">
                    {image}

                    <h2
                      className={`${
                        id === 1
                          ? "text-decade"
                          : id === 2
                          ? "text-secondary"
                          : "text-primary"
                      }`}
                    >
                      {H1}
                    </h2>
                    <h4 className="text-xl lg:text-3xl font-bold text-primary">
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
  <>Create ads for maximum reach.</>,
  <>
    Schedule your ad campaigns to run on weekends, weekdays, or any date you
    choose - at the time that&apos;s <span>most convenient</span> for you
  </>,
  <>
    Optimize your campaigns with A/B testing to see what works best and give
    your business <span>a boost</span> in conversions.
  </>,
  <>
    Target specific audiences with intelligent filters to keep viewers focused
    on what they&apos;re interested in.
  </>,
  <>24/7 client support team</>,
  <>Deliver you the best quality of work results</>,
];

const FeaturesData = [
  {
    id: 1,
    image: <TargetAudience />,
    title: "Targeting Market",
    description: (
      <>
        You&apos;ll find yourself in front of the appropriate people at the
        right moment because you&apos;ll be found when they&apos;re looking for
        what you have to give.
      </>
    ),
    list: [],
    link: "/",
  },
  {
    id: 2,
    image: <ROI />,
    title: "Return on Investment",
    description: (
      <>
        There are genuine, specific, tangible, real-time indicators that track
        your return-on-investment, unlike traditional print and broadcast
        marketing (ROI). There will be no more &quot;spray and pray&quot;
        marketing.
      </>
    ),
    list: [],
    link: "/",
  },
  {
    id: 3,
    image: <Competition />,
    title: "We never work with your competition",
    description: (
      <>
        Pay-per-click (PPC) advertising allows you to target prospects down to
        the postal code level. Gender, age, income, and interests are additional
        limits that can be utilised to limit campaigns to only individuals who
        are ready to purchase from you.
      </>
    ),
    list: [],
    link: "/",
  },
  {
    id: 4,
    image: <GeoTargetting />,
    title: "Geo-Targeting",
    description: (
      <>
        Even $100 a month is a significant marketing investment for some small
        firms. A $100 investment in print or broadcast advertising will not get
        you very far, or even on the air. Pay-per-click advertising works well
        on a limited budget (PPC).
      </>
    ),
    list: [],
    link: "/",
  },
  {
    id: 5,
    image: <LongTermPartnership />,
    title: "Long term partership",
    description: (
      <>
        You get our undivided attention to make you the best organically in your
        industry. It also doesn&apos;t make sense to compete against ourselves.
      </>
    ),
    list: [],
    link: "/",
  },
  {
    id: 6,
    image: <SME />,
    title: "Perfect for SMEs",
    description: (
      <>
        We place a high value on long-term relationships. We value the
        friendship and trust that has developed (or is developing) between us.
      </>
    ),
    list: [],
    link: "/",
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
