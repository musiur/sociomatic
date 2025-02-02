import Carousel from "@/components/molecule/carousel";
import FadeInOnScroll from "@/components/anims/fadein-onscroll";
import { Send, Star, Trophy, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Action___GET__AllGigs } from "./_utils/actions";
import { Button } from "@/components/ui/button";
import StripePaymentButton from "./_utils/stripe-payment-button";

type T___Gig = {
  _id: string;
  title: string;
  link: string;
  startFrom: number;
  thumbnails: string[];
  rating: number;
  updatedAt: string;
  createdAt: string;
};

const GigsPage = async () => {
  const result = await Action___GET__AllGigs();
  const gigs: T___Gig[] = result.data;
  return (
    <Fragment>
      <div className="section container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-wrap gap-10">
            <Image
              src="/images/yeatiq.png"
              alt="yeatiqs-image"
              height={1000}
              width={1000}
              className="w-[150px] h-[160px] rounded-md"
            />
            <div className="flex flex-col items-start justify-start gap-2">
              <h2 className="font-bold text-2xl">
                Yeatiq&nbsp;
                <span className="font-semibold text-gray-400 text-lg">
                  @Yeatiq
                </span>
              </h2>
              <div className="flex items-center gap-[5px]">
                <Star className="stroke-[1.3px] fill-black w-4 h-4" />
                5.0 (<span className="underline">474</span>)
              </div>
              <div className="flex items-center justify-start gap-2">
                <Star className="w-4 h-4 stroke-[1.3px]" /> Top Rated
              </div>
            </div>
          </div>
          <FadeInOnScroll>
            <div className="max-w-[600px]">
              <h3 className="text-lg font-bold pb-3">About</h3>
              <p>
                Hello, I am a digital marketing professional with over two years
                of experience. I have worked for ad agencies as a Digital
                Marketer, responsible for setting up and executing ad campaigns.
                I earned a LinkedIn assessment badge on google analytics.
                I&apos;m in the top 30% of 492k people who took this assessment.
                I look forward to working with you.
              </p>
            </div>
          </FadeInOnScroll>
          <div className="block md:hidden">
            <Characteristics />
          </div>
          <div className="max-w-[600px]">
            <h3 className="text-lg font-bold">Skills</h3>
            <ul className="flex flex-wrap gap-2 pt-3">
              {skills.map((item) => {
                return (
                  <li key={item}>
                    <FadeInOnScroll>
                      <div className="px-4 py-1 rounded-full bg-gray-100 border">
                        {item}
                      </div>
                    </FadeInOnScroll>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="hidden md:block">
            <Characteristics />
          </div>
          <div className="w-[300px] p-5 rounded-md border flex flex-col gap-2">
            <h3>
              <span className="font-bold">Know more</span> about Yeatiqur Rahman
            </h3>
            <Link
              href="https://thesociomatic.com"
              passHref={true}
              target="_blank"
            >
              <Button className="w-full gap-2">
                <Send className="w-4 h-4" />
                Visit Fiverr Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold">All My Gigs</h2>
      </div>
      <div className="pb-32 pt-10 container mx-auto flex flex-wrap justify-start items-start gap-10">
        {gigs.map((item: T___Gig) => {
          return (
            <div className="w-[300px] group" key={item._id}>
              <FadeInOnScroll>
                <Carousel images={item.thumbnails} />
                <div className="flex flex-col items-start justify-start gap-4 pt-4">
                  <Link href={item.link}>
                    <h4 className="font-medium hover:underline cursor-pointer">
                      {item.title}
                    </h4>
                  </Link>
                  <p><span className="text-gray-400">Starting from</span> US$15</p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline">Buy on Fiverr</Button>
                    <StripePaymentButton gigId={item._id} />
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default GigsPage;

const Characteristics = () => {
  return (
    <div className="max-w-[600px]">
      <ul className="flex flex-col gap-10">
        {characteristics.map((item) => {
          return (
            <li key={item.id}>
              <FadeInOnScroll>
                <div className="flex items-start gap-[8px]">
                  <div className="min-w-[30px]">{item.icon}</div>
                  <div className="flex flex-col gap-[4px]">
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </FadeInOnScroll>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const skills = [
  "Social Media Marketing",
  "Facebook Ads",
  "On-page SEO",
  "Google Tag Manager",
  "Google Analytics",
  "Digital Marketing",
  "SEO",
  "Social Media Management",
  "Wordpress",
  "Shopify",
  "Custom Web Development",
  "Google Ads",
  "UI/UX",
];

const characteristics = [
  {
    id: 1,
    title: "Top Rated",
    icon: <Star />,
    description:
      "Top Rated seller are individually selected by Fiverr after meeting specific bench and services",
  },
  {
    id: 2,
    title: "Buyers Keep Returning",
    icon: <Trophy />,
    description: "Yeatiq has an exceptional numbers of returning buyers",
  },
  {
    id: 3,
    title: "Highly Responsive",
    icon: <Zap />,
    description: "Known for exceptionally quick replies",
  },
];
