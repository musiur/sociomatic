/* eslint-disable @next/next/next-script-for-ga */
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";
import "./globals.scss";
import GotoTop from "@/components/molecule/go-to-top";
import { Toaster } from "@/components/ui/toaster";
import WhatsApp from "@/components/molecule/whatsapp";
import CookiePolicyNotificationBar from "@/components/molecule/cookie-policy";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PageView from "@/lib/datalayer/page-view";
import { Poppins, Lato } from "next/font/google";
import Script from "next/script";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

// Declare the dataLayer object as a global variable
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const metadata: Metadata = {
  title: "Sociomatic | Digital Solutions for Growth",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WP6VXKV');`,
          }}
        />
        <meta
          name="google-site-verification"
          content="HGW6vnWMh6mOAQ_1OQdnsVq8n7YXAH6r3EtBFiXxs5E"
        />
        <script
          id="data-layer"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];`,
          }}
        />
      </head>

      <body className={`${poppins.className} ${lato.variable}`}>
        {/* <Script
          type="text/javascript"
          src="//static.klaviyo.com/onsite/js/klaviyo.js?company_id=X5AtQr"
        /> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WP6VXKV"
            height="0"
            width="0"
            style={{ display: "none", opacity: "none" }}
          ></iframe>
        </noscript>
        <PageView />
        <div className="py-2 text-center bg-pink-700 text-white animate-pulse">
          This site is under maintenance
        </div>
        <Navbar />
        <main className="overflow-hidden">{children}</main>
        <SpeedInsights />
        <Toaster />
        <CookiePolicyNotificationBar />
        <WhatsApp />
        <GotoTop />
        <Footer />
      </body>
    </html>
  );
}
