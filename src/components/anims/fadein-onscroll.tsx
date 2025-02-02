"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const FadeInOnScroll = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.01 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
