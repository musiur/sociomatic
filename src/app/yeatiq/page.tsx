import GigsSection from "./_partials/gigs-section";
import HeroSection from "./_partials/hero-section";
import Testimonial from "@/app/_utils/testimonial";
import { homeTestimonialData } from "@/lib/data/data";

const Page = () => {
  return (
    <div>
      <HeroSection />
      <GigsSection />
      <Testimonial calendly={true} data={homeTestimonialData} />
    </div>
  );
};

export default Page;
