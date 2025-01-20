"use client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const GetConsultation = () => {
  const router = useRouter();
  const handleLinkClick = () => {
    router.push("/#calendly");
    window.dataLayer.push({
      event: "get_a_free_consultation_button_click",
    });
  };
  return (
    <Button
      variant="outline"
      className="w-full sm:w-auto"
      onClick={handleLinkClick}
    >
      Get a Free Consultation
    </Button>
  );
};

export default GetConsultation;
