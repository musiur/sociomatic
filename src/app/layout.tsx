/* eslint-disable @next/next/next-script-for-ga */
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import GotoTop from "@/components/molecule/go-to-top";
import { Toaster } from "@/components/ui/toaster";
import WhatsApp from "@/components/molecule/whatsapp";
import CookiePolicyNotificationBar from "@/components/molecule/cookie-policy";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Sociomatic | Digital Solutions for Growth",
  description:
    "Elevate your online presence with Sociomatic. We provide cutting-edge digital marketing and web development services, delivering measurable results for businesses worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WP6VXKV');
          `,
          }}
        />
        <script
          id="data-layer"
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
        ></script>
        <script
          id="contact-us-data-layer"
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
        ></script>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WP6VXKV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <div className="py-2 text-center bg-pink-700 text-white animate-pulse">
          This site is under maintenance
        </div>
        <Navbar />
        {children}
        <Toaster />
        <CookiePolicyNotificationBar />
        <WhatsApp />
        <GotoTop />
        <Footer />
      </body>
    </html>
  );
}
