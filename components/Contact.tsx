"use client";

import type { FormEvent } from "react";

export default function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-32">
      <div className="glass rounded-[40px] p-10 md:p-16">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>

        <h2 className="text-5xl font-black">
          Let&apos;s Build Something
          <span className="gradient-text block">Cinematic.</span>
        </h2>

        <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-white outline-none placeholder:text-gray-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-white outline-none placeholder:text-gray-500"
          />

          <textarea
            name="message"
            placeholder="Tell me about your project"
            rows={6}
            className="w-full resize-y rounded-2xl border border-white/10 bg-white/5 p-5 text-white outline-none placeholder:text-gray-500"
          />

          <button
            type="submit"
            className="glow rounded-full bg-cyan-400 px-10 py-5 font-bold text-black"
          >
            Submit Project
          </button>
        </form>

        <div className="mt-12 flex flex-wrap gap-6">
          <a
            href="https://wa.me/2348069802450"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 px-8 py-4 transition hover:bg-white/5"
          >
            WhatsApp
          </a>

          <a
            href="mailto:chikaugwu0121@gmail.com"
            className="rounded-full border border-white/10 px-8 py-4 transition hover:bg-white/5"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
