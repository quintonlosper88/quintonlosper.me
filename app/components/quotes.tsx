"use client"; // Required for useEffect and useState

import { useState, useEffect } from "react";
import { quotes } from "@/lib/data/quotes";
export default function QuoteCarousel() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Start Fade Out
      setFade(false);

      // 2. Wait for fade out animation (300ms) then switch text
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setFade(true);
      }, 1000);
    }, 20000); // 3 seconds total

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="h-40 flex items-center justify-center text-center p-6">
      <p
        className={` italic text-xl md:text-2xl font-medium text-zinc-300 transition-opacity duration-300 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        “{quotes[index].quote}”
      </p>
    </div>
  );
}
