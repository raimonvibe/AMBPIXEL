"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 md:pt-28">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/ads.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-6 md:flex-row md:gap-10 md:px-16">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400"
          >
            AI Creative Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-shadow text-5xl font-black leading-tight md:text-8xl"
          >
            Cinematic AI Content
            <span className="gradient-text block">
              That Demands Attention.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 max-w-2xl text-lg text-gray-300"
          >
            AI commercials, UGC ads, motion graphics, AI influencers, explainer
            videos and futuristic storytelling for modern brands.
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="glow inline-flex rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex rounded-full border border-white/20 px-8 py-4 transition hover:bg-white/10"
            >
              Start A Project
            </a>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative w-full max-w-sm shrink-0 md:max-w-md"
        >
          <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-cyan-500 to-purple-600 opacity-30 blur-3xl" />

          <img
            src="/images/founder/founder.jpg"
            alt="Founder"
            className="relative z-10 mx-auto h-[min(420px,55vh)] w-full max-w-[320px] rounded-[40px] object-cover md:h-[500px] md:max-w-none"
          />
        </motion.div>
      </div>
    </section>
  );
}
