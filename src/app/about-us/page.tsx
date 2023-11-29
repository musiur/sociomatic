"use client";
import { BrandCarousel } from "@/components/core/home/carousel";
import SectionHead from "@/components/molecule/section-head";
import ShortReviews from "@/components/molecule/short-reviews";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Clock,
  Globe,
  MessageCircle,
  PieChartIcon,
  RocketIcon,
  Stars,
  Wand2Icon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const AboutUS = () => {
  const [captcha, setCaptcha] = useState(false);
  const NumberCards = [
    {
      id: 1,
      numbers: "700+",
      title: "Projects Completed",
      desc: (
        <>
          With a proven track record, we&apos;ve successfully executed over 700
          projects, showcasing our expertise across diverse domains.
        </>
      ),
    },
    {
      id: 2,
      numbers: "400%",
      title: "Return on Investment",
      desc: (
        <>
          We&apos;re dedicated to driving success for our clients, consistently
          delivering a remarkable 400% return on investment.
        </>
      ),
    },
    {
      id: 3,
      numbers: "500+",
      title: "Satisfied Clients",
      desc: (
        <>
          Our client-centric approach has garnered trust and satisfaction from
          more than 500 clients globally
        </>
      ),
    },
  ];
  const Values = [
    {
      id: 1,
      icon: <RocketIcon />,
      title: "Trust at the Core",
      desc: (
        <>
          Prioritizing faith as the cornerstone of Sociomatic&apos;s ethos—trust
          in our capabilities, on-time delivery, and commitment to your
          brand&apos;s success
        </>
      ),
    },
    {
      id: 2,
      icon: <Clock />,
      title: "On-Time Delivery",
      desc: (
        <>
          Punctuality is paramount. At Sociomatic, we take pride in delivering
          every project on time with efficiency and reliability
        </>
      ),
    },
    {
      id: 3,
      icon: <Stars />,
      title: "Tailored Solutions",
      desc: (
        <>
          We believe in an approach where one size doesn&apos;t fit all. We
          offer customized solutions tailored to your brand&apos;s unique needs
          for a perfect fit.
        </>
      ),
    },
    {
      id: 4,
      icon: <MessageCircle />,
      title: "Continuous Communication",
      desc: (
        <>
          Fostering a culture of open communication, we keep you in the loop,
          ensuring transparency aligns with your vision
        </>
      ),
    },
  ];
  const Offerings = [
    {
      id: 1,
      icon: <Wand2Icon />,
      title: "Digital Transformation",
      desc: (
        <>
          Seamlessly navigate the digital era with our transformative solutions
          to elevate your online presence
        </>
      ),
    },
    {
      id: 2,
      icon: <PieChartIcon />,
      title: "Data Analytics",
      desc: (
        <>
          Unlock the power of data with our advanced analytics services,
          providing valuable insights for strategic decision-making.
        </>
      ),
    },
    {
      id: 3,
      icon: <Stars />,
      title: "Content Writing & SEO",
      desc: (
        <>
          Craft compelling narratives and boost your online visibility with our
          content creation and SEO optimization services
        </>
      ),
    },
    {
      id: 4,
      icon: <MessageCircle />,
      title: "Social Media Management",
      desc: (
        <>
          Dominate the social sphere with our expertise in managing paid ads on
          platforms like Facebook, Instagram, LinkedIn, Twitter, and Pinterest
        </>
      ),
    },
    {
      id: 5,
      icon: <Globe />,
      title: "Website Development",
      desc: (
        <>
          From WordPress to custom web development, we bring your digital vision
          to life with user-centric design and functionality.
        </>
      ),
    },
  ];
  return (
    <>
      <section className="bg-muted">
        <div className="bg-[url('/images/backgrounds/WhiteGrid.svg')] bg-cover bg-center">
          <div className="container section flex flex-col large-gap">
            <SectionHead
              highlighter="About us"
              H2={<>About the Sociomatic</>}
              paragraphs={[
                <>
                  At Sociomatic, we redefine digital excellence, having
                  completed over 700 projects with 400 plus reviews for a
                  diverse clientele. With a portfolio spanning various
                  industries, we are committed to delivering innovative
                  solutions tailored to our clients unique needs.
                </>,
              ]}
            />
            <div className="w-full bg-[url('/images/pages/about-us/about.jpg')] bg-center bg-cover grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 large-gap p-[25px] md:p-[50px] rounded-[10px]">
              {NumberCards.map((item: any) => {
                return (
                  <div
                    key={item.id}
                    className={`backdrop-blur-lg bg-white/30 border border-secondarymuted rounded-[10px] px-4 py-8 flex flex-col small-gap text-center items-center justify-center ${
                      item.id === 3
                        ? "col-span-1 sm:col-span-2 lg:col-span-1"
                        : "col-span-1"
                    }`}
                  >
                    <span className="text-6xl font-bold text-white">
                      {item.numbers}
                    </span>
                    <h3 className="text-white text-[16px] md:text-[20px] font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-white">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="section flex flex-col large-gap bg-[url('/images/backgrounds/StarBackground.svg')] bg-center bg-cover">
        <SectionHead
          highlighter="Our Commitment"
          H2={<>We&apos;re an ambitious and smart team with a shared mission</>}
          paragraphs={[
            <>Our shared values keep us connected and guide us as one team</>,
          ]}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 large-gap container">
          {Values.map((item: any) => {
            return (
              <div
                key={item.id}
                className={`flex flex-col small-gap text-center items-center justify-center ${
                  item.id % 5 === 0 ? "col-span-1 sm:col-span-2 " : "col-span-1"
                } bg-white/5 backdrop-blur border rounded-[10px] border-secondarymuted  hover:shadow-lg p-[25px] transition ease-in-out duration-750`}
              >
                <div className="[&>svg]:stroke-secondary border border-secondary border-dashed rounded inline-block mx-auto p-3">
                  {item.icon}
                </div>
                <h3 className="text-[16px] md:text-[20px] font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-muted rounded-b-[20px] md:rounded-b-[40px]">
        <div className="py-[63px] container">
          <BrandCarousel />
        </div>
      </section>
      <section className="container section bg-[url('/images/backgrounds/CircleNest.svg')] bg-cover bg-center">
        <h2 className="text-center text-primary">Key Offerings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 large-gap pt-[50px]">
          {Offerings.map((item: any) => {
            return (
              <div
                key={item.id}
                className={`flex flex-col small-gap text-center items-center justify-center ${
                  item.id % 5 === 0 ? "col-span-1 sm:col-span-2 " : "col-span-1"
                } bg-white/5 backdrop-blur border rounded-[10px] border-secondarymuted  hover:shadow-lg p-[25px] transition ease-in-out duration-750`}
              >
                <div className="[&>svg]:stroke-secondary border border-secondary border-dashed rounded inline-block mx-auto p-3">
                  {item.icon}
                </div>
                <h3 className="text-[16px] md:text-[20px] font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container section grid grid-cols-1 md:grid-cols-2 large-gap bg-[url('/images/backgrounds/StarBackground.svg')] bg-cover bg-center">
        <div className="flex flex-col small-gap">
          <span className="text-[16px] md:text-[20px] font-semibold text-secondary text-center md:text-left">
            Our Leadership
          </span>
          <div className="max-w-[250px] mx-auto md:mr-auto md:ml-0">
            <Image
              src="/images/yeatiq.png"
              alt="CEO"
              width={1000}
              height={1000}
              className="w-full h-full rounded-2xl"
            />
          </div>

          <h2 className="text-primary">
            Meet&nbsp;<span className="text-secondary">Yeatiqur Rahman</span>,
            Visionary CEO and Top Rated Seller
          </h2>

          <p>
            Yeatiq, the driving force behind Sociomatic, serves as the CEO and
            is recognized as a top-rated seller in the digital landscape. With
            an unwavering commitment to excellence, Yeatiq brings experience and
            expertise to the forefront.
          </p>
        </div>
        <div className="flex flex-col large-gap">
          <div className="flex flex-col small-gap">
            <h4 className="text-[16px] md:text-[20px] font-semibold text-primary">
              Years of Experience
            </h4>
            <p>
              Active contributors to the digital landscape&nbsp;
              <span className="text-primary font-medium">since 2019</span>,
              we&apos;ve accumulated invaluable experience and insights.
            </p>
          </div>
          <div className="flex flex-col small-gap">
            <h4 className="text-[16px] md:text-[20px] font-semibold text-primary">
              Sociomatic in&nbsp;
              <span className="text-[16px] md:text-[20px] font-semibold text-secondary">
                Dubai
              </span>
            </h4>
            <p>
              Sociomatic recently spread its&nbsp;
              <Link
                href="https://drive.google.com/file/d/1g6Vz623OdZHR_YtJfUbDUIXyxIH_K513/view?usp=sharing"
                passHref={true}
                target="_blank"
                className="text-secondary underline font-medium"
              >
                wings to Dubai
              </Link>
              , adding a new chapter to its Journey. We envision Sociomatic as a
              catalyst for brands in Dubai, propelling them to new heights in
              the digital realm
            </p>
          </div>
          <div className="flex flex-col small-gap">
            <h4 className="text-[16px] md:text-[20px] font-semibold text-primary">
              Innovate, Elevate,&nbsp;
              <span className="text-[16px] md:text-[20px] font-semibold text-secondary">
                Dominate
              </span>
            </h4>
            <p>
              Yeatiq&apos;s mantra for success mirrors what every CEO aspires to
              achieve - continuous innovation, elevation of standards, and
              ultimate market domination.
              <span className="text-primary font-medium">wings to Dubai</span>,
              adding a new chapter to its Journey. We envision Sociomatic as a
              catalyst for brands in Dubai, propelling them to new heights in
              the digital realm
            </p>
          </div>
          <div className="font-semibold text-primary">
            Yeatiq and Sociomatic are dedicated to making your brands fly and
            soar in the digital skies. Let&apos;s chart the course for your
            brand&apos;s digital success together!
          </div>
        </div>
      </section>

      <ShortReviews />
      <section className="bg-primary">
        <div className="container section flex flex-col md:flex-row justify-between items-center large-gap">
          <div className="flex flex-col small-gap">
            <h2 className="text-muted text-center md:text-left">
              Join Us on the Journey
            </h2>
            <p className="text-muted text-center md:text-left">
              Whether you&apos;re a startup seeking a digital foothold or an
              established enterprise aiming for growth, Sociomatics is your
              trusted partner on the Journey to digital success. Let&apos;s
              create, innovate, and elevate together
            </p>
          </div>
          <div className="flex flex-col small-gap min-w-[300px]">
            <Input placeholder="Enter your email" />
            <ReCAPTCHA
              sitekey={process.env.siteKey!}
              onChange={(e: any) => {
                console.log(e);
                e ? setCaptcha(true) : setCaptcha(false);
              }}
            />
            <Button disabled={!captcha} variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUS;
