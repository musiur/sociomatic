// /* eslint-disable @next/next/next-script-for-ga */
// "use client";

// import { usePathname, useSearchParams } from "next/navigation";
// import Script from "next/script";
// import { useEffect } from "react";

// type WindowWithDataLayer = Window & {
//   dataLayer: Record<string, any>[];
// };

// declare const window: WindowWithDataLayer;

// export const pageview = (url: string) => {
//   if (typeof window.dataLayer !== "undefined") {
//     window.dataLayer.push({
//       event: "pageview",
//       page: url,
//     });
//   } else {
//     console.log({
//       event: "pageview",
//       page: url,
//     });
//   }
// };

// export default function Analytics() {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     if (pathname) {
//       pageview(pathname);
//     }
//   }, [pathname, searchParams]);

//   return (
//     <>
      
//     </>
//   );
// }
