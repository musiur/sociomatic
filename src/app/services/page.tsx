import Testimonial from "@/app/_utils/testimonial";
import OurServices from "@/app/_utils/our-services";
import {
  homeFAQ,
  homeFeaturesData,
  homeTestimonialData,
} from "@/lib/data/data";
import Faq from "../_utils/faq";
import { Fragment } from "react";

const Services = () => {
  return (
    <Fragment>
      <OurServices FeaturesData={homeFeaturesData} />
      <Testimonial calendly={true} data={homeTestimonialData} />
      <div className="bg-[url('/images/backgrounds/CircleNest.svg')] bg-center bg-cover">
        <Faq data={homeFAQ} />
      </div>
    </Fragment>
  );
};

export default Services;
