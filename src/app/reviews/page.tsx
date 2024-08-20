import MasonryLayout from "../_utils/masonry-layout";

const Reviews = () => {
  return (
    <div className="bg-[url('/images/backgrounds/SquareBackground.svg')] bg-center bg-cover">
      <div className="bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50 section">
        <h2 className="text-muted text-center">Our Wall of Love</h2>
      </div>
      <div className="-mt-[50px] container pb-20">
        <MasonryLayout />
      </div>
    </div>
  );
};

export default Reviews;
