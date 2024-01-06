"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const PageView = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.dataLayer.push({
      event: "pageView",
      pageUrl: window.location.href,
    });
    console.log("Page Data Layer pushed");
  }, [pathname]);
  return null;
};

export default PageView;
