import VideoPlayer from "@/components/core/home/video-player";
import FeatureCard from "@/components/molecule/feature-card";
import GetConsultation from "@/components/molecule/get-consultation";
import SectionHead from "@/components/molecule/section-head";
import Faq from "@/components/pages/home/faq";
import HeroSection from "@/components/pages/home/herosection";
import HowWeWork from "@/components/pages/home/how-we-work";
import ProjectIdea from "@/components/pages/home/project-idea-banner";
import Testimonial from "@/components/pages/home/testimonial";
import { Button } from "@/components/ui/button";
import {
  ContentWringAndSEOServicePageData,
  CustomWebDevelopmentServicePageData,
  DataAnalyticsServicePageData,
  GoogleAdsServicePageData,
  ShopifyDevelopmentServicePageData,
  SocialMediaAdsServicePageData,
  SoftwareDevelopmentServicePageData,
  UIUXandGraphicDesignServicePageData,
  WordpressDevelopmentServicePageData,
} from "@/lib/data/data";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Services = ({ params }: { params: { slug: string } }) => {
  let data: any = GoogleAdsServicePageData;
  if (params.slug.includes("google-paid-ads")) {
    data = GoogleAdsServicePageData;
  } else if (params.slug.includes("data-analytics")) {
    data = DataAnalyticsServicePageData;
  } else if (params.slug.includes("wordpress-development")) {
    data = WordpressDevelopmentServicePageData;
  } else if (params.slug.includes("content-writing-and-seo")) {
    data = ContentWringAndSEOServicePageData;
  } else if (params.slug.includes("shopify-store-development")) {
    data = ShopifyDevelopmentServicePageData;
  } else if (params.slug.includes("social-media-paid-ads")) {
    data = SocialMediaAdsServicePageData;
  } else if (params.slug.includes("custom-web-development")) {
    data = CustomWebDevelopmentServicePageData;
  } else if (params.slug.includes("software-development")) {
    data = SoftwareDevelopmentServicePageData;
  } else if (params.slug.includes("ui-ux-and-graphic-design")) {
    data = UIUXandGraphicDesignServicePageData;
  }
  return (
    <div>
      <HeroSection
        H1={data.herosection.H1}
        P={data.herosection.P}
        videoLink={data.herosection.videoLink}
        brands={data.herosection.brands}
        background={data.herosection.background}
      />
      <section className="container section">
        <div className="grid grid-cols-1 md:grid-cols-2 large-gap">
          <div className="relative flex items-center">
            <Image
              src={`/images/pages/home/${data.whyChooseSection.videoThumbnail}`}
              alt=""
              width={1000}
              height={1000}
              className="w-full"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <VideoPlayer videoLink={data.whyChooseSection.videoLink} />
            </div>
          </div>
          <div className="flex flex-col justify-center small-gap">
            <h2 className="text-primary [&>span]:text-secondary">
              {data.whyChooseSection.H2}
            </h2>
            <ul className="grid grid-cols-1 gap-[10px]">
              {data.whyChooseSection.list.map((item: any, index: number) => {
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
            highlighter={data.whyService.highlighter}
            H2={data.whyService.H2}
            paragraphs={data.paragraphs}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-start large-gap">
            {data.whyService.cardList.map((item: any) => {
              const { id, image, title, description, list } = item;
              return (
                <FeatureCard
                  key={id}
                  image={image}
                  title={title}
                  description={description}
                  list={list}
                  link=""
                />
              );
            })}
          </div>
        </div>
      </section>
      <HowWeWork />
      {params.slug.includes("software-development") ||
      params.slug.includes("custom-web-development") ? null : (
        <section className="bg-[url('/images/backgrounds/SquareBackground.svg')] bg-center bg-cover">
          <div className="container section flex flex-col large-gap">
            <SectionHead
              highlighter={data.ourPackages.highlighter}
              H2={data.ourPackages.H2}
              paragraphs={data.ourPackages.paragraphs}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-start large-gap">
              {data.ourPackages.packageList.map((item: any) => {
                const { id, image, title, description, list, link } = item;
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
                      <h4 className="text-2xl lg:text-3xl font-bold text-primary">
                        {title}
                      </h4>
                      <ul className="flex flex-col gap-[1rem]">
                        {list.map((item: string, index: number) => {
                          return (
                            <li
                              key={index}
                              className="flex items-start justify-start gap-[6.7px]"
                            >
                              <BadgeCheck className="mt-[4px] h-[16px] min-w-[16px] max-w-[16px] stroke-dimmed stroke-[1.3px]" />
                              &nbsp;
                              <span>{item}</span>
                            </li>
                          );
                        })}
                      </ul>
                      <Link
                        href="/contact-us"
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
              {data.ourPackages?.footerContent?.p ? (
                <p className="text-center">
                  {data.ourPackages.footerContent.p}
                </p>
              ) : null}
              <div className="flex flex-wrap items-center justify-center small-gap">
                <GetConsultation />
                <Link href={`/case-studies/${params.slug}`}>
                  <Button>Case Studies</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
      <Testimonial calendly={false} data={data.testimonial} />
      <Faq data={data.faqData} />
      <ProjectIdea />
    </div>
  );
};
 
export default Services;
