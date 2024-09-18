// components/ANIM__ScrollFade.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface ANIM__ScrollFadeProps {
  children: React.ReactNode;
  className?: string;
}

const ANIM__ScrollFade: React.FC<ANIM__ScrollFadeProps> = ({
  children,
  className = "",
}) => {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  useEffect(() => {
    if (scrollDirection === "up") {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, scrollDirection]);

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ANIM__ScrollFade;
