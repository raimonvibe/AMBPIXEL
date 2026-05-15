"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";

const navItems = [
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const skills = [
  { name: "AI Video Production", level: "98%" },
  { name: "Motion Graphics", level: "95%" },
  { name: "UGC AI Ads", level: "96%" },
  { name: "Creative Direction", level: "94%" },
];

const testimonials = [
  {
    name: "Daniel Brooks",
    text: "Ambpixel transformed our ads into cinematic campaigns.",
  },
  {
    name: "Sarah Lee",
    text: "The AI visuals felt like a Netflix production.",
  },
  {
    name: "Michael Ray",
    text: "Engagement increased massively after working with Ambpixel.",
  },
];

const portfolioItems = [
  { title: "Brand & UGC Ads", src: "/videos/ads.mp4", type: "video/mp4" },
  { title: "Fintech & Trading", src: "/videos/trader.mp4", type: "video/mp4" },
  {
    title: "Education Explainers",
    src: "/videos/elite-exams.mp4",
    type: "video/mp4",
  },
  {
    title: "Health & Prevention",
    src: "/videos/disease-prevention.mov",
    type: "video/quicktime",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Portfolio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (dark) {
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
    }
  }, [dark]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", closeOnDesktop);
    return () => mq.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <main>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled ? "glass border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-16">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-black tracking-[0.3em]"
          >
            AMBPIXEL
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActive(item.name)}
                className="relative text-sm uppercase tracking-[0.25em] text-white/70 transition hover:text-white"
              >
                {item.name}

                {active === item.name && (
                  <motion.div
                    layoutId="active"
                    className="absolute -bottom-2 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-purple-500"
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDark(!dark)}
              className="glass rounded-full p-3"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="https://wa.me/2348069802450"
              className="hidden rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-black md:block"
            >
              WhatsApp
            </a>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex md:hidden"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="glass border-t border-white/10 md:hidden"
            >
              <div className="flex flex-col gap-6 p-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setActive(item.name);
                      setMenuOpen(false);
                    }}
                    className="text-lg uppercase tracking-[0.2em]"
                  >
                    {item.name}
                  </a>
                ))}

                <a
                  href="https://wa.me/2348069802450"
                  className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 text-center font-bold text-black"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full scale-110 object-cover"
        >
          <source src="/videos/ads.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col justify-between gap-16 px-6 pb-20 pt-36 md:flex-row md:items-center md:px-16">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 text-xs uppercase tracking-[0.5em] text-cyan-400 md:text-sm"
            >
              AI CREATIVE STUDIO
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-black leading-[0.95] tracking-tight md:text-8xl"
            >
              Cinematic AI
              <br />
              Content
              <span className="gradient-text mt-2 block">
                That Demands Attention.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
            >
              AI commercials, UGC ads, motion graphics, AI influencers,
              explainer videos and futuristic storytelling for brands that
              want to dominate attention.
            </motion.p>

            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href="#portfolio"
                className="glow rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-10 py-5 text-lg font-bold text-black transition hover:scale-105"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="glass rounded-full px-10 py-5 text-lg"
              >
                Start A Project
              </a>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative mx-auto md:mx-0"
          >
            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-cyan-500 to-purple-600 opacity-30 blur-3xl" />

            <img
              src="/images/founder/founder.jpg"
              alt="Founder"
              className="relative z-10 h-[420px] w-[320px] rounded-[40px] object-cover md:h-[620px] md:w-[450px]"
            />
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-32 md:px-16"
      >
        <div className="grid gap-20 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
              About Ambpixel
            </p>

            <h2 className="text-5xl font-black leading-tight">
              Building The Future
              <span className="gradient-text block">
                Of AI Storytelling.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-lg text-gray-300">
            <p>
              Ambpixel is a cinematic AI creative studio blending motion
              graphics, generative video, AI influencers and visual
              storytelling into premium brand experiences.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="glass rounded-3xl p-6">
                <h3 className="text-4xl font-black text-cyan-400">10+</h3>

                <p className="mt-2 text-gray-400">Brands Worked With</p>
              </div>

              <div className="glass rounded-3xl p-6">
                <h3 className="text-4xl font-black text-purple-400">
                  100+
                </h3>

                <p className="mt-2 text-gray-400">AI Projects Created</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="mx-auto max-w-7xl px-6 py-32 md:px-16"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Skills & Tools
        </p>

        <h2 className="mb-16 text-5xl font-black">Creative AI Expertise</h2>

        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="mb-2 flex justify-between">
                <p>{skill.name}</p>
                <p>{skill.level}</p>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  style={{ width: skill.level }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="mx-auto max-w-7xl px-6 py-32 md:px-16"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Portfolio
        </p>

        <h2 className="mb-16 text-5xl font-black">Featured Productions</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {portfolioItems.map(({ title, src, type }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-[40px]"
            >
              <video
                muted
                autoPlay
                loop
                playsInline
                className="h-[400px] w-full object-cover transition duration-500 group-hover:scale-110"
              >
                <source src={src} type={type} />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-black">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-32 md:px-16">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Testimonials
        </p>

        <h2 className="mb-16 text-5xl font-black">What Clients Say</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div key={index} className="glass rounded-[40px] p-10">
              <p className="text-gray-300">“{item.text}”</p>

              <h3 className="mt-8 text-xl font-bold">{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-4xl px-6 py-32">
        <div className="glass rounded-[40px] p-10 md:p-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-5xl font-black">
            Let’s Build Something
            <span className="gradient-text block">Cinematic.</span>
          </h2>

          <form className="mt-12 space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 outline-none"
            />

            <textarea
              rows={6}
              placeholder="Tell me about your project"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 outline-none"
            />

            <button className="glow rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-10 py-5 font-bold text-black">
              Submit Project
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
