"use client";

import { useEffect, useState, type FormEvent } from "react";
import Image from "next/image";
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
  { name: "Storytelling", level: "93%" },
];

const tools = [
  "HeyGen Pro",
  "Veo 3",
  "Google Flow",
  "CapCut",
  "Grok",
  "AI Motion Tools",
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

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqvgvvn";

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
  const [themeReady, setThemeReady] = useState(false);
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") setDark(false);
    if (saved === "dark") setDark(true);
    setThemeReady(true);
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!themeReady) return;
    if (dark) {
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [dark, themeReady]);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const match = navItems.find(
            (item) => item.href === `#${visible[0].target.id}`,
          );
          if (match) setActive(match.name);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", closeOnDesktop);
    return () => mq.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <main>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 isolate z-[200] w-full transition-all duration-500 ${
          scrolled ? "glass border-b" : "nav-at-top bg-transparent"
        }`}
        style={scrolled ? { borderColor: "var(--nav-border)" } : undefined}
      >
        <div className="relative z-[201] mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-16">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="relative z-[202] text-2xl font-black tracking-[0.3em] touch-manipulation"
          >
            AMBPIXEL
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActive(item.name)}
                className="nav-link relative text-sm uppercase tracking-[0.25em]"
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

          <div className="relative z-[202] flex items-center gap-3">
            <button
              type="button"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              onClick={() => setDark(!dark)}
              className={`nav-icon-btn flex h-11 w-11 shrink-0 cursor-pointer touch-manipulation items-center justify-center rounded-full ${scrolled ? "glass" : ""}`}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="https://wa.me/2348069802450"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-black md:block"
            >
              WhatsApp
            </a>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className={`nav-icon-btn flex h-11 w-11 shrink-0 cursor-pointer touch-manipulation items-center justify-center rounded-full md:hidden ${scrolled ? "glass" : ""}`}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="relative z-[201] overflow-hidden border-t md:hidden"
              style={{
                background: "var(--glass-bg)",
                borderColor: "var(--nav-border)",
              }}
            >
              <div className="flex flex-col gap-2 p-4 pb-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setActive(item.name);
                      setMenuOpen(false);
                    }}
                    className="nav-link mobile-nav-item flex min-h-[48px] cursor-pointer touch-manipulation items-center rounded-xl px-4 text-lg uppercase tracking-[0.2em]"
                  >
                    {item.name}
                  </a>
                ))}

                <a
                  href="https://wa.me/2348069802450"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 flex min-h-[48px] cursor-pointer touch-manipulation items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 text-center font-bold text-black active:opacity-90"
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
        className="on-dark relative flex min-h-screen items-center overflow-hidden"
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
              className="text-muted mt-8 max-w-2xl text-lg leading-relaxed md:text-xl"
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
            className="relative mx-auto w-full max-w-[320px] shrink-0 md:mx-0 md:max-w-[520px] lg:max-w-[600px] xl:max-w-[680px]"
          >
            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-cyan-500 to-purple-600 opacity-30 blur-3xl" />

            <Image
              src="/images/founder/founder.jpg"
              alt="Founder of Ambpixel"
              width={680}
              height={760}
              priority
              sizes="(max-width: 768px) 320px, (max-width: 1024px) 520px, 680px"
              className="relative z-10 h-[420px] w-full rounded-[40px] object-cover md:h-[min(72vh,640px)] lg:h-[min(75vh,700px)] xl:h-[min(78vh,760px)]"
            />
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-7xl overflow-x-hidden px-6 py-32 md:px-16"
      >
        <div className="grid w-full gap-12 md:grid-cols-2 md:gap-20">
          <div className="min-w-0 w-full">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
              About Ambpixel
            </p>

            <h2 className="max-w-full text-balance text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl">
              Building The Future
              <span className="gradient-text mt-1 block sm:mt-2">
                Of AI Storytelling.
              </span>
            </h2>
          </div>

          <div className="text-muted min-w-0 w-full space-y-6 text-lg">
            <p>
              Ambpixel is a cinematic AI creative studio blending motion
              graphics, generative video, AI influencers, and visual
              storytelling into premium brand experiences.
            </p>

            <p>
              From UGC-style commercials to futuristic AI campaigns, every
              visual is crafted to make brands impossible to ignore.
            </p>

            <div className="grid w-full grid-cols-2 gap-3 pt-8 sm:gap-6">
              <div className="glass min-w-0 rounded-2xl p-4 sm:rounded-3xl sm:p-6">
                <h3 className="text-3xl font-black text-cyan-400 sm:text-4xl">
                  10+
                </h3>
                <p className="text-subtle mt-2 text-sm leading-snug sm:text-base">
                  Brands Worked With
                </p>
              </div>

              <div className="glass min-w-0 rounded-2xl p-4 sm:rounded-3xl sm:p-6">
                <h3 className="text-3xl font-black text-purple-400 sm:text-4xl">
                  100+
                </h3>
                <p className="text-subtle mt-2 text-sm leading-snug sm:text-base">
                  AI Projects Created
                </p>
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
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex justify-between">
                <p>{skill.name}</p>
                <p>{skill.level}</p>
              </div>

              <div className="theme-track h-3 overflow-hidden rounded-full">
                <div
                  style={{ width: skill.level }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {tools.map((tool) => (
            <div
              key={tool}
              className="glass rounded-3xl p-8 text-center text-xl font-semibold"
            >
              {tool}
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="mx-auto max-w-7xl overflow-x-hidden px-6 py-32 md:px-16"
      >
        <div className="min-w-0 w-full">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Portfolio
          </p>

          <h2 className="mb-16 max-w-full text-balance text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl">
            Featured Productions
          </h2>
        </div>

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
                preload="metadata"
                className="h-[400px] w-full object-cover transition duration-500 group-hover:scale-110"
              >
                <source src={src} type={type} />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-black text-white">{title}</h3>
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
          {testimonials.map((item) => (
            <div key={item.name} className="glass rounded-[40px] p-10">
              <p className="text-muted">“{item.text}”</p>

              <h3 className="mt-8 text-xl font-bold">{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-4xl overflow-x-hidden px-4 py-32 sm:px-6"
      >
        <div className="glass min-w-0 overflow-hidden rounded-[40px] p-6 sm:p-10 md:p-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="max-w-full break-words text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Cinematic.</span>
          </h2>

          <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="theme-input"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="theme-input"
            />

            <textarea
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project"
              className="theme-input resize-y"
            />

            <button
              type="submit"
              disabled={formStatus === "sending"}
              className="glow rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-10 py-5 font-bold text-black disabled:cursor-not-allowed disabled:opacity-70"
            >
              {formStatus === "sending" ? "Sending…" : "Submit Project"}
            </button>

            {formStatus === "success" && (
              <p className="form-status-success" role="status">
                Thanks — your message was sent. We&apos;ll be in touch soon.
              </p>
            )}

            {formStatus === "error" && (
              <p className="form-status-error" role="alert">
                Something went wrong. Please try again or reach out on WhatsApp.
              </p>
            )}
          </form>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="https://wa.me/2348069802450"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-outline-btn"
            >
              WhatsApp
            </a>

            <a href="mailto:chikaugwu0121@gmail.com" className="theme-outline-btn">
              Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
