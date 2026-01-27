'use client';

import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text-2xl font-bold tracking-tight text-white">watto</div>
      <div className="flex gap-6 text-sm font-medium text-gray-300">
        <Link href="/about" className="hover:text-white transition-colors">About</Link>
        <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
        <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
      </div>
    </motion.nav>
  );
}
