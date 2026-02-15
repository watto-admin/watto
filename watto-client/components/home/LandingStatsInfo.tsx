"use client";

import React from "react";
import Link from "next/link";
import Counter from "../Counter";

export default function LandingStatsInfo() {
  return (
    <section className="bg-sky-500 justifiy-center mx-auto text-white py-24 px-4 rounded-2xl border-2 border-sky-500 p-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">
          Turn a Daily Necessity into Your Billboard
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mb-16">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <div className="flex items-baseline justify-center mb-2">
              <Counter
                value={70}
                places={[10, 1]}
                fontSize={100}
                padding={0}
                gap={0}
                textColor="white"
                fontWeight={800}
                gradientFrom="transparent"
                gradientTo="transparent"
                digitStyle={{
                  transform: "scaleY(1.2)",
                  transformOrigin: "center",
                }}
                springOptions={{ stiffness: 35, damping: 20 }}
              />
              <span className="text-4xl md:text-6xl font-bold ml-1">Crore</span>
            </div>
            <p className="text-lg md:text-xl font-medium opacity-90 max-w-xs mx-auto uppercase">
              bottles sold in India
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <div className="flex items-baseline justify-center mb-2">
              <Counter
                value={24}
                places={[10, 1]}
                fontSize={100}
                padding={0}
                gap={0}
                textColor="white"
                fontWeight={800}
                gradientFrom="transparent"
                gradientTo="transparent"
                digitStyle={{
                  transform: "scaleY(1.2)",
                  transformOrigin: "center",
                }}
                springOptions={{ stiffness: 35, damping: 20 }}
              />
              <span className="text-4xl md:text-6xl font-bold ml-1">mins</span>
            </div>
            <p className="text-lg md:text-xl font-medium opacity-90 max-w-xs mx-auto uppercase">
              Avg brand exposure
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <div className="flex items-baseline justify-center mb-2">
              <Counter
                value={21}
                places={[10, 1]}
                fontSize={100}
                padding={0}
                gap={0}
                textColor="white"
                fontWeight={800}
                gradientFrom="transparent"
                gradientTo="transparent"
                digitStyle={{
                  transform: "scaleY(1.2)",
                  transformOrigin: "center",
                }}
                springOptions={{ stiffness: 35, damping: 20 }}
              />
              <span className="text-4xl md:text-6xl font-bold ml-1">%</span>
            </div>
            <p className="text-lg md:text-xl font-medium opacity-90 max-w-xs mx-auto uppercase">
              QR engagement rate
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl font-medium mb-10 opacity-90 ">
          Hand-Held Advertising. Every bottle, a mini-billboard.
        </p>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="bg-white text-sky-500 hover:bg-gray-100 transition-colors duration-300 font-bold text-xl px-10 py-4 rounded-full shadow-lg"
        >
          Start Your Campaign
        </Link>
      </div>
    </section>
  );
}
