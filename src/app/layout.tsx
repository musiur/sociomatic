import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import GotoTop from "@/components/molecule/go-to-top";
import { Toaster } from "@/components/ui/toaster";
import WhatsApp from "@/components/molecule/whatsapp";
import CookiePolicyNotificationBar from "@/components/molecule/cookie-policy";
import Script from "next/script";
import Head from "next/head";
// import CookiePolicyNotificationBar from "@/components/molecule/cookie-policy";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sociomatic",
  description:
    "An agency for every aspect in IT industries with all sorts of services from software development to business development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      <Head>
      

      </Head> */}
      <body className={inter.className}>
        
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
