"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const DataLayerPusher = () => {
  const router = useRouter();
  const handleDataLayerPusher = () => {
    window.dataLayer.push({
      event: "free_online_session_button_click",
    });
    router.push("/get-a-quote");
  };
  return (
    <Button variant="outline" onClick={handleDataLayerPusher}>
      Free Online Session
    </Button>
  );
};

export default DataLayerPusher;
