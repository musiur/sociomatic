import React from "react";
import { TestimonialCard } from "../services/_utils/testimonials";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";

const MasonryLayout = ({ reviews }: { reviews: object[] }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="columns-1 min-[700px]:columns-2 min-[1030px]:columns-3 space-x-4">
        {reviews?.length ? (
          reviews.map((review: any) => {
            return (
              <ANIM__FadeInOutOnScroll key={review?._id} className="py-4">
                <TestimonialCard details={review} />
              </ANIM__FadeInOutOnScroll>
            );
          })
        ) : (
          <div className="section">No review found! Please add newone.</div>
        )}
      </div>
    </div>
  );
};

export default MasonryLayout;
