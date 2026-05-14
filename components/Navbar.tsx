"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-5 md:px-16"
    >
      <h1 className="text-2xl font-black tracking-[0.2em]">AMBPIXEL</h1>

      <div className="hidden gap-8 text-sm font-medium text-white/80 md:flex">
        <a href="#portfolio" className="transition hover:text-white">
          Portfolio
        </a>
        <a href="#about" className="transition hover:text-white">
          About
        </a>
        <a href="#skills" className="transition hover:text-white">
          Skills
        </a>
        <a href="#contact" className="transition hover:text-white">
          Contact
        </a>
      </div>

      <a
        href="https://wa.me/2348069802450"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
      >
        WhatsApp
      </a>
    </motion.nav>
  );
}
