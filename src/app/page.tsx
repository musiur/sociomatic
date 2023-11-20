import BlueGoogle from "@/components/assets/blue-google";
import Campaigns from "@/components/assets/campaigns";
import CodeCloud from "@/components/assets/code-cloud";
import Contents from "@/components/assets/contents";
import Feather from "@/components/assets/feather";
import GoogleAnalytics from "@/components/assets/google-analytics";
import PenTool from "@/components/assets/pen-tool";
import Shopify from "@/components/assets/shopify";
import Wordpress from "@/components/assets/wordpress";
import HeroSection from "@/components/pages/home/herosection";
import OurProcess from "@/components/pages/home/process";
import OurServices from "@/components/pages/home/our-services";
import ProjectIdea from "@/components/pages/home/project-idea-banner";
import Faq from "@/components/pages/home/faq";
import HowWeWork from "@/components/pages/home/how-we-work";
import Testimonial from "@/components/pages/home/testimonial";
import {
  homeFAQ,
  homeFeaturesData,
  homeTestimonialData,
} from "@/lib/data/data";

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
