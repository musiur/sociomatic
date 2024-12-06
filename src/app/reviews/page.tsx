import MasonryLayout from "../_utils/masonry-layout";
import { Action___GET__AllReviews } from "./post/_utils/actions";

const Reviews = async () => {
  const result = await Action___GET__AllReviews();
  const reviews = result?.data?.length ? result?.data : [];
  return (
    <div className="bg-[url('/images/backgrounds/SquareBackground.svg')] bg-center bg-cover">
      <div className="bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50 section">
        <h2 className="text-muted text-center">Our Wall of Love</h2>
      </div>
      <div className="-mt-[50px] container pb-20">
        <MasonryLayout reviews={reviews} />
      </div>
    </div>
  );
};

export default Reviews;
