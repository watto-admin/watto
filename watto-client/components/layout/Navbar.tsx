"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none">
      <motion.nav
        className={`pointer-events-auto flex items-center justify-between px-4 py-2 md:px-8 md:py-3 rounded-full border transition-all duration-300 ${
          isScrolled
            ? "bg-black/30 backdrop-blur-xl border-white/10 shadow-[0_0_50px_10px_rgba(100,150,255,0.4)]"
            : "bg-white/5 backdrop-blur-sm border-white/5 shadow-[0_0_20px_0_rgba(255,255,255,0.1)]"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ width: "min(90%, 800px)" }}
      >
        <Link
          href="/"
          className="text-xl md:text-3xl font-black tracking-tight text-white font-[family-name:var(--font-comfortaa)]"
        >
          watto
        </Link>
        <div className="flex gap-3 md:gap-8 text-sm md:text-base font-bold text-gray-200/90">
          <Link
            href="/about"
            className="hover:text-white hover:scale-105 transition-all duration-200"
          >
            About
          </Link>
          <Link
            href="/faq"
            className="hover:text-white hover:scale-105 transition-all duration-200"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="hover:text-white hover:scale-105 transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </motion.nav>
    </div>
  );
}
