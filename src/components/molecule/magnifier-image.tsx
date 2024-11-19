"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MagnifierImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const MagnifierImage: React.FC<MagnifierImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  const [magnifierStyle, setMagnifierStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMagnifierStyle({
      display: "block",
      top: y,
      left: x,
      backgroundPosition: `-${x * 2}px -${y * 2}px`,
    });
  };

  const handleMouseLeave = () => setMagnifierStyle({ display: "none" });

  return (
    <div
      className="relative overflow-visible"
      style={{ width: "inherit", height: "inherit" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(className, "w-full h-full")}
      />
      <div
        className="absolute hidden w-48 h-48 rounded-full border-4 border-secondary bg-cover bg-no-repeat pointer-events-none shadow-[inset_0_1px_15px_rgba(0,0,0,0.5)]"
        style={{
          ...magnifierStyle,
          backgroundImage: `url(${src})`,
          backgroundSize: `${width * 2}px ${height * 2}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default MagnifierImage;
