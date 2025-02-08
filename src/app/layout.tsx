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
import UnderConstruction from "@/components/molecule/under-construction";
import { Toaster as ToasterSonner } from "sonner";
import { cookies } from "next/headers";
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  const token = (await cookies())?.get("token")?.value;
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

        <script
          id="vtag-ai-js"
          async
          src="https://r2.leadsy.ai/tag.js"
          data-pid="1oBHnrjiydTAck930"
          data-version="062024"
        ></script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WP6VXKV"
            height="0"
            width="0"
            style={{ display: "none", opacity: "none" }}
          ></iframe>
        </noscript>
        <PageView />
        <UnderConstruction />
        {/* <NavWrapper /> */}
        <Navbar token={token} />
        <main className="overflow-hidden">{children}</main>
        <SpeedInsights />
        <Toaster />
        <ToasterSonner />
        {/* <CookiePolicyNotificationBar /> */}
        <WhatsApp />
        <GotoTop />
        <Footer />
      </body>
    </html>
  );
}
