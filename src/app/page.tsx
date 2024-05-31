import OurProcess from "@/app/_utils/process";
import OurServices from "@/app/_utils/our-services";
import ProjectIdea from "@/app/_utils/project-idea-banner";
import HowWeWork from "@/app/_utils/how-we-work";
import Testimonial from "@/app/_utils/testimonial";
import {
  homeFAQ,
  homeFeaturesData,
  homeTestimonialData,
} from "@/lib/data/data";
import HeroSection from "./_utils/herosection";
import Faq from "./_utils/faq";

const Home = () => {
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
        brands={true}
        background="HeroBackground"
      />
      <OurServices FeaturesData={homeFeaturesData.slice(0, 6)} />
      <OurProcess />
      <HowWeWork />
      <Testimonial calendly={true} data={homeTestimonialData} />
      <div className="bg-[url('/images/backgrounds/CircleNest.svg')] bg-center bg-cover">
        <Faq data={homeFAQ} />
        <ProjectIdea />
      </div>
    </main>
  );
};

export default Home;
