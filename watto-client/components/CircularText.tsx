"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "speedUp" | "slowDown" | "pause" | "goBonkers";
  className?: string;
}

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}) => {
  const letters = Array.from(text);
  const angle = 360 / letters.length;
  const controls = useAnimation();
  const [currentDuration, setCurrentDuration] = useState(spinDuration);

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: currentDuration,
      },
    });
  }, [currentDuration, controls]);

  const handleMouseEnter = () => {
    if (onHover === "speedUp") {
      setCurrentDuration(spinDuration / 4);
    } else if (onHover === "slowDown") {
      setCurrentDuration(spinDuration * 2);
    } else if (onHover === "pause") {
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (onHover === "pause") {
      controls.start({
        rotate: 360,
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration: spinDuration,
        },
      });
    } else {
      setCurrentDuration(spinDuration);
    }
  };

  return (
    <div
      className={`relative flex items-center justify-center rounded-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={controls}
        className="absolute inset-0 w-full h-full flex items-center justify-center"
      >
        {letters.map((letter, i) => (
          <span
            key={i}
            className="absolute top-0 left-1/2 -translate-x-1/2 font-black text-gray-300 font-[family-name:var(--font-fredoka)]"
            style={{
              height: "50%", // Radius
              transform: `rotate(${i * angle}deg)`,
              transformOrigin: "bottom center",
            }}
          >
            {letter}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default CircularText;
