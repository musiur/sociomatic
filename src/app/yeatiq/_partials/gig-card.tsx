"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import WhatsAppIcon from "@/components/assets/whatsapp";

type Gig = {
  image: string;
  title: string;
  highlight: string;
  description: string;
  features: string[];
  cta: string;
  reverse?: boolean;
  ctaLink?: string;
};

export function GigCard({ gig }: { gig: Gig }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <ANIM__FadeInOutOnScroll>
      <motion.div
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
        className={`group flex flex-col-reverse md:flex-row ${
          gig.reverse ? "md:flex-row-reverse" : ""
        } items-center bg-white rounded-3xl shadow-lg overflow-hidden`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Animated Image Container */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center p-8 bg-gradient-to-br from-blue-100 via-purple-100 to-green-100"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Image
            src={gig.image}
            alt={gig.highlight}
            width={400}
            height={320}
            className="rounded-xl shadow-xl"
          />
        </motion.div>

        <div className="md:w-1/2 w-full p-8 space-y-4">
          <h2 className="text-3xl font-bold">
            {gig.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
              {gig.highlight}
            </span>
          </h2>

          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden text-gray-700 space-y-3"
              >
                <p>{gig.description}</p>
                {gig.features.map((f, i) => (
                  <p key={i} className="font-semibold">
                    {f}
                  </p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="https://wa.me/+971507477541"
              passHref={true}
              target="_blank"
            >
              <Button className="items-center gap-2">
                <WhatsAppIcon className="w-6 h-6 stroke-white stroke-[1.6px]" />{" "}
                WhatsApp
              </Button>
            </Link>
            <Link
              href={gig?.ctaLink || ""}
              passHref={true}
              target="_blank"
              className="block"
            >
              <Button variant="outline">{gig.cta}</Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </ANIM__FadeInOutOnScroll>
  );
}
