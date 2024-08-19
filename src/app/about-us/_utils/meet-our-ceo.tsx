import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MeetOurCEO = () => {
  return (
    <section className="container section grid grid-cols-1 md:grid-cols-2 large-gap bg-[url('/images/backgrounds/StarBackground.svg')] bg-cover bg-center">
      <ANIM__FadeInOutOnScroll className="flex flex-col small-gap">
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
          Yeatiq, the driving force behind Sociomatic, serves as the CEO and is
          recognized as a top-rated seller in the digital landscape. With an
          unwavering commitment to excellence, Yeatiq brings experience and
          expertise to the forefront.
        </p>
      </ANIM__FadeInOutOnScroll>
      <ANIM__FadeInOutOnScroll className="flex flex-col large-gap">
        <ANIM__FadeInOutOnScroll className="flex flex-col small-gap">
          <h4 className="text-[16px] md:text-[20px] font-semibold text-primary">
            Years of Experience
          </h4>
          <p>
            Active contributors to the digital landscape&nbsp;
            <span className="text-primary font-medium">since 2019</span>,
            we&apos;ve accumulated invaluable experience and insights.
          </p>
        </ANIM__FadeInOutOnScroll>
        <ANIM__FadeInOutOnScroll className="flex flex-col small-gap">
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
              className="text-secondary hover:underline font-medium inline-flex items-center group gap-[2px]"
            >
              wings to Dubai{" "}
              <ArrowUpRight className="w-[12px] h-[12px] stroke-secondary group-hover:mb-2 transition ease-in-out duration-500" />
            </Link>
            , adding a new chapter to its Journey. We envision Sociomatic as a
            catalyst for brands in Dubai, propelling them to new heights in the
            digital realm
          </p>
        </ANIM__FadeInOutOnScroll>
        <ANIM__FadeInOutOnScroll className="flex flex-col small-gap">
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
            catalyst for brands in Dubai, propelling them to new heights in the
            digital realm
          </p>
        </ANIM__FadeInOutOnScroll>
        <div className="font-semibold text-primary">
          Yeatiq and Sociomatic are dedicated to making your brands fly and soar
          in the digital skies. Let&apos;s chart the course for your
          brand&apos;s digital success together!
        </div>
      </ANIM__FadeInOutOnScroll>
    </section>
  );
};

export default MeetOurCEO;
