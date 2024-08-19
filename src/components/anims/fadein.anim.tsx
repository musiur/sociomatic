// components/ANIM__FadeInOutOnScroll.tsx
"use client";

import React, { useEffect, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface ANIM__FadeInOutOnScrollProps {
  children: ReactNode;
  className?: string;
}

const ANIM__FadeInOutOnScroll: React.FC<ANIM__FadeInOutOnScrollProps> = ({
  children,
  className = "",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: i * 0.1, // Staggered delay for each child
      },
    }),
  };

  const wrapImmediateChildren = (children: ReactNode): ReactNode =>
    React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return (
          <motion.div
            initial="hidden"
            animate={controls}
            custom={index} // Pass index as a custom prop
            variants={variants}
            key={child.key}
            // style={child.props.style} // Preserve styles
            // className={child.props.className} // Preserve class names
          >
            {child}
          </motion.div>
        );
      }
      return child;
    });

  return (
    <div ref={ref} className={className}>
      {wrapImmediateChildren(children)}
    </div>
  );
};

export default ANIM__FadeInOutOnScroll;
