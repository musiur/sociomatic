"use client";

import ShimmerButton from "@/components/magicui/shimmer-button";
import { useRouter } from "next/navigation";

const DataLayerPusherLink = () => {
  const router = useRouter();
  const handleDataLayerPusher = () => {
    window.dataLayer.push({
      event: "book_free_strategy_session_button_click",
    });
    router.push("/meet-with-yeatiq/#contact");
  };
  return (
    <div onClick={handleDataLayerPusher} className="inline-block">
      <ShimmerButton>Book Your Free Strategy Session Now!</ShimmerButton>
    </div>
  );
};

export default DataLayerPusherLink;
