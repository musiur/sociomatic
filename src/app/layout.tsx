/* eslint-disable @next/next/next-script-for-ga */
import "./globals.scss";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";
import GotoTop from "@/components/molecule/go-to-top";
import { Toaster } from "@/components/ui/toaster";
import WhatsApp from "@/components/molecule/whatsapp";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PageView from "@/lib/datalayer/page-view";
import { Poppins, Lato } from "next/font/google";
import UnderConstruction from "@/components/molecule/under-construction";
import { Toaster as ToasterSonner } from "sonner";
import { cookies } from "next/headers";
import { CalDotComProvider, DataLayerProvider, TagManagerProvider } from "@/lib/scripts";

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
        <DataLayerProvider />
        <CalDotComProvider />
      </head>

      <body className={`${poppins.className} ${lato.variable}`}>
        <TagManagerProvider />
        <PageView />
        <UnderConstruction />
        <Navbar token={token} />
        <main className="overflow-hidden">{children}</main>
        <SpeedInsights />
        <Toaster />
        <ToasterSonner />
        <WhatsApp />
        <GotoTop />
        <Footer />
      </body>
    </html>
  );
}
