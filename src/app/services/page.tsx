import FeatureCard from "@/components/molecule/feature-card";
import { FeaturesData } from "../page";
import SectionHead from "@/components/molecule/section-head";
import HeroSection from "@/components/pages/home/herosection";

const Services = () => {
  return (
    <main>
      <HeroSection
        H1={
          <>
            We Craft <span>Solution</span> on Demand to Go Online and Grow
            Business
          </>
        }
        P={
          <>
            Being digital <span>agency</span>, the sociomatic&nbsp;
            <span>specialized with A to Z</span> to help improving
            business&nbsp;
            <span>analytics</span>, software <span>development</span>,&nbsp;
            <span>campaigns</span>, and extensive <span>maintenance</span>
          </>
        }
        videoLink="https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ"
        brands={false}
      />
      <section className="bg-[url('/images/backgrounds/SquareBackground.svg')] bg-center bg-cover">
        <div className="container section flex flex-col large-gap">
          <SectionHead
            highlighter="Our Services"
            H2={<>Understanding Your Business</>}
            paragraphs={[
              <>
                We&apos;ll listen to <span>your goals</span> and complete a free
                audit to discover if we&apos;re a great fit to work with each
                other.
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
    </main>
  );
};

export default Services;
