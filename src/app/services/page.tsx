import Testimonial from "@/components/pages/home/testimonial";
import Faq from "@/components/pages/home/faq";
import OurServices from "@/components/pages/home/our-services";
import {
  homeFAQ,
  homeFeaturesData,
  homeTestimonialData,
} from "@/lib/data/data";

const Services = () => {
  return (
    <main>
      {/* <HeroSection
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
      /> */}
      <OurServices FeaturesData={homeFeaturesData} />
      {/* <HowWeWork /> */}
      {/* <OurProcess /> */}
      <Testimonial calendly={true} data={homeTestimonialData} />
      <div className="bg-[url('/images/backgrounds/CircleNest.svg')] bg-center bg-cover">
        <Faq data={homeFAQ} />
        {/* <ProjectIdea /> */}
      </div>
    </main>
  );
};

export default Services;
