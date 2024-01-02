"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

export const GTM_ID = process.env.NEXT_PUBLIC_GTM;

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

  //   if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") {
  //     return null;
  //   }

  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
      <meta
        name="google-site-verification"
        content="HGW6vnWMh6mOAQ_1OQdnsVq8n7YXAH6r3EtBFiXxs5E"
      />
      <Script
        id="data-layer"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];

          function trackPageView() {
            var pagePath = window.location.pathname;
            var pageURL = window.location.href;
            var referrer = document.referrer || 'unknown'; // Default to 'unknown' if no referrer is available
            var pageHostname = window.location.hostname;
        
            window.dataLayer.push({
              'event': 'pageview',
              'pagePath': pagePath,
              'pageURL': pageURL,
              'referrer': referrer,
              'pageHostname': pageHostname
            });
          }
        
          // Call trackPageView on initial page load
          trackPageView();
        
          // Listen for the popstate event to track dynamic page changes
          window.addEventListener('popstate', function() {
            // Call trackPageView on dynamic page change
            trackPageView();
          });`,
        }}
      />
      <Script
        id="contact-us-data-layer"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
          
              // Function to track contact form submissions
              function trackContactFormSubmission() {
                var formData = {
                  'name': document.getElementById('name').value,
                  'email': document.getElementById('email').value,
                  'phone': document.getElementById('phone').value,
                  'service': document.getElementById('service').value,
                  'message': document.getElementById('message').value
                };
            
                window.dataLayer.push({
                  'event': 'contactFormSubmission',
                  'formName': 'Contact Form',
                  'formData': formData
                  // Add other necessary parameters for form submission
                  // Example: 'formType': 'Contact Us',
                  //          'customParameter': 'value',
                });
              }
            
              // Example: Assume you have a function that handles form submission on the server side
              function handleOnSubmit(e) {
                e.preventDefault();
                console.log("On Submit Clicked!")
                // Call the function to track form submission
                trackContactFormSubmission();
            
                // Additional code to submit the form to the server
                // ...
              }
          `,
        }}
      />
    </>
  );
}
