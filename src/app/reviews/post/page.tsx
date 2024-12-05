import { TestimonialCard } from "@/app/services/_utils/testimonials";
import { Action___GET__AllReviews } from "./_utils/actions";
import ReviewPostForm from "./_utils/form";
import { Delete, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import DeleteReview from "./_utils/delete-review";

const Page = async () => {
  const reviews = await Action___GET__AllReviews();
  return null;
  return (
    <>
      <section className="container section space-y-4">
        <h2>Add a new review</h2>
        <div className="max-w-[460px] bg-gray-100 p-4 md:p-8 rounded-xl">
          <ReviewPostForm />
        </div>
      </section>
      <section className="container section space-y-4">
        <h2>All Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews?.data?.length ? (
            reviews.data.map((review: any, index: number) => {
              return (
                <div
                  key={review?._id}
                  className="border rounded-2xl p-1 flex flex-col items-center justify-center"
                >
                  <TestimonialCard details={review} />
                  <div className="py-2 flex items-center gap-2">
                    <div className="p-2 bg-gray-200 border">{index + 1}</div>
                    <Button size="icon" variant="outline" disabled>
                      <Edit />
                    </Button>
                    <DeleteReview id={review?._id} />
                  </div>
                </div>
              );
            })
          ) : (
            <div>No review found! Please add newone.</div>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;
