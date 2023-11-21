import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import GotoTop from "@/components/molecule/go-to-top";
import { Toaster } from "@/components/ui/toaster";
import WhatsApp from "@/components/molecule/whatsapp";
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
      <body className={inter.className}>
        <div className="py-2 text-center bg-pink-700 text-white animate-pulse">
          This site is under maintenance
        </div>
        <Navbar />
        {children}
        <Toaster />
        {/* <CookiePolicyNotificationBar /> */}
        <WhatsApp />
        <GotoTop />
        <Footer />
      </body>
    </html>
  );
}
