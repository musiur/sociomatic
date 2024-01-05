/* eslint-disable @next/next/next-script-for-ga */
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

export const pageview = (url: string) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event: "pageview",
      page: url,
    });
  } else {
    console.log({
      event: "pageview",
      page: url,
    });
  }
};

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname, searchParams]);

  return (
    <>
      <script
        id="gtm-script"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WP6VXKV');
          `,
        }}
      />
      <meta
        name="google-site-verification"
        content="HGW6vnWMh6mOAQ_1OQdnsVq8n7YXAH6r3EtBFiXxs5E"
      />
    </>
  );
}
