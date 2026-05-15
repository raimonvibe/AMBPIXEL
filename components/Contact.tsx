"use client";

import { useState, type FormEvent } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqvgvvn";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-4xl overflow-x-hidden px-4 py-32 sm:px-6">
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
            className="w-full min-w-0 rounded-2xl border border-white/10 bg-white/5 p-5 text-white outline-none placeholder:text-gray-500"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full min-w-0 rounded-2xl border border-white/10 bg-white/5 p-5 text-white outline-none placeholder:text-gray-500"
          />

          <textarea
            name="message"
            required
            placeholder="Tell me about your project"
            rows={6}
            className="w-full min-w-0 resize-y rounded-2xl border border-white/10 bg-white/5 p-5 text-white outline-none placeholder:text-gray-500"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="glow rounded-full bg-cyan-400 px-10 py-5 font-bold text-black disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? "Sending…" : "Submit Project"}
          </button>

          {status === "success" && (
            <p className="text-cyan-400" role="status">
              Thanks — your message was sent. We&apos;ll be in touch soon.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400" role="alert">
              Something went wrong. Please try again or reach out on WhatsApp.
            </p>
          )}
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
