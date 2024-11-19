"use client"
import { useEffect } from "react";

declare global {
    interface Window {
      neetoCal?: {
        embed: (options: {
          type: string;
          id: string;
          organization: string;
          elementSelector: string;
          styles: { height: string; width: string };
        }) => void;
        q?: any[];
      };
    }
  }
  

interface NeetoCalEmbedProps {
  id: string;
  organization: string;
}

const NeetoCal: React.FC<NeetoCalEmbedProps> = ({ id, organization }) => {
  useEffect(() => {
    // Add the embed script dynamically
    const script = document.createElement("script");
    script.src = "https://the-sociomatic-llc.neetocal.com/javascript/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize NeetoCal after the script is loaded
      if (window.neetoCal) {
        window.neetoCal.embed({
          type: "inline",
          id,
          organization,
          elementSelector: "#inline-embed-container",
          styles: { height: "100%", width: "100%"},
        });
      }
    };

    // Cleanup the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, [id, organization]);

  return (
    <div
      id="inline-embed-container"
      style={{ minHeight: "90dvh", height: "100dvh", width: "100%" }}
    >
      {/* NeetoCal widget will be added here */}
    </div>
  );
};

export default NeetoCal;
