import React from "react";
import { TestimonialCard } from "../services/_utils/testimonials";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { Action___GET__AllReviews } from "../reviews/post/_utils/actions";

const MasonryLayout = async () => {
  const reviews = await Action___GET__AllReviews();
  return (
    <div className="container mx-auto p-4">
      <div className="columns-1 min-[700px]:columns-2 min-[1030px]:columns-3 space-x-4">
        {reviews?.data?.length ? (
          reviews.data.map((review: any) => {
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
