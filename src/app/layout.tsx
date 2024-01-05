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
import { SpeedInsights } from "@vercel/speed-insights/next";
import Analytics from "@/components/layout/analytics";

const inter = Inter({ subsets: ["latin"] });

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
      <Analytics />
      </head>
      <body className={inter.className}>
        <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=GTM-WP6VXKV`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        <div className="py-2 text-center bg-pink-700 text-white animate-pulse">
          This site is under maintenance
        </div>
        <Navbar />
        {children}
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
