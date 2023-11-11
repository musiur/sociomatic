import FeatureCard from "@/components/molecule/feature-card";
import { FeaturesData } from "../page";
import SectionHead from "@/components/molecule/section-head";
import HeroSection from "@/components/pages/home/herosection";
import HowWeWork from "@/components/pages/home/how-we-work";
import OurProcess from "@/components/pages/home/process";
import Testimonial from "@/components/pages/home/testimonial";
import Faq from "@/components/pages/home/faq";
import ProjectIdea from "@/components/pages/home/project-idea-banner";
import OurServices from "@/components/pages/home/our-services";

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
      <OurServices FeaturesData={FeaturesData} />
      <HowWeWork />
      <OurProcess />
      <Testimonial calendly={false}/>
      <div className="bg-[url('/images/backgrounds/CircleNest.svg')] bg-center bg-cover">
        <Faq />
        <ProjectIdea />
      </div>
    </main>
  );
};

export default Services;
