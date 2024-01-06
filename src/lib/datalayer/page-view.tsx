"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const PageView = () => {
  const pathname = usePathname();

  useEffect(() => {
    var pagePath = window.location.pathname;
    var pageURL = window.location.href;
    var referrer = document.referrer || "unknown";
    var pageHostname = window.location.hostname;

    window.dataLayer.push({
      event: "pageview",
      pagePath,
      pageURL,
      referrer,
      pageHostname,
      // Add other necessary parameters for page view
      // Example: 'pageTitle': document.title,
      //          'pageType': 'article',
      //          'customParameter': 'value',
    });
  }, [pathname]);
  return null;
};

export default PageView;
