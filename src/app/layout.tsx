import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import GotoTop from "@/components/molecule/go-to-top";

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
        <Navbar />
        {children}
        <GotoTop />
        <Footer />
      </body>
    </html>
  );
}
