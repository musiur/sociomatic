"use client";

import React, { Fragment, useEffect, useState } from "react";
import Marquee from "@/components/ui/marquee";

interface MarqueeWrapperProps {
  children: React.ReactNode;
  duration?: string;
  className?: string;
  itemWidth?: number;
  gapWidth?: number;
}

const CARD_WIDTH = 300; // Default width of each card in pixels
const GAP_WIDTH = 16;   // Default gap between cards in pixels
const BASE_SPEED = 80;  // Much faster base speed
const SLOW_SPEED = 60;  // Faster speed for more items
const MIN_DURATION = 15; // Shorter minimum duration
const MAX_DURATION = 30; // Shorter maximum duration

const MarqueeWrapper = ({ 
  children, 
  duration: propDuration,
  className = "",
  itemWidth = CARD_WIDTH,
  gapWidth = GAP_WIDTH
}: MarqueeWrapperProps) => {
  // State to track if the marquee is hovered
  const [isHovered, setIsHovered] = useState(false);
  // State to check if the component is rendered on the client
  const [isClient, setIsClient] = useState(false);

  // Effect to set isClient to true after the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Convert children to an array for easier manipulation
  const childrenArray = React.Children.toArray(children);
  const itemCount = childrenArray.length;

  // Create duplicates for infinite scrolling
  const infiniteChildren = [
    ...childrenArray.slice(0, 2), // Add first two items for seamless effect
    ...childrenArray,
    ...childrenArray.slice(0, 2)  // Add first two items again at the end
  ];

  // Function to calculate the duration of the marquee animation
  const calculateDuration = () => {
    if (!isClient) return "0s"; // Return 0s if not on client

    // Calculate total width of all items
    const totalWidth = infiniteChildren.length * (itemWidth + gapWidth);
    // Determine speed factor based on item count
    const speedFactor = itemCount > 5 ? SLOW_SPEED : BASE_SPEED;
    // Calculate base duration based on total width and speed
    const baseDuration = totalWidth / speedFactor;
    // Ensure duration is within defined min and max limits
    const duration = Math.min(MAX_DURATION, Math.max(MIN_DURATION, baseDuration));
    
    return `${duration}s`; // Return calculated duration
  };

  // Use propDuration if provided, otherwise calculate it
  const calculatedDuration = propDuration || calculateDuration();

  // Style object for the marquee animation
  const style = {
    '--duration': calculatedDuration,
    animationPlayState: isHovered ? 'paused' : 'running' // Pause on hover
  } as React.CSSProperties;

  return (
    <div className="relative w-full overflow-hidden">
      <div 
        className="animate-marquee inline-flex"
        style={style}
        onMouseEnter={() => setIsHovered(true)} // Set hover state on mouse enter
        onMouseLeave={() => setIsHovered(false)} // Reset hover state on mouse leave
      >
        <div className="flex min-w-full shrink-0 gap-4 py-10">
          {infiniteChildren.map((child, index) => (
            <Fragment key={index}>{child}</Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeWrapper;
