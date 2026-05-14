export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-32 md:px-16">
      <div className="grid gap-20 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            About Ambpixel
          </p>

          <h2 className="text-5xl font-black leading-tight">
            Building The Future
            <span className="gradient-text block">Of AI Storytelling.</span>
          </h2>
        </div>

        <div className="space-y-6 text-lg text-gray-300">
          <p>
            Ambpixel is a cinematic AI creative studio blending motion
            graphics, generative video, AI influencers, and visual storytelling
            into premium brand experiences.
          </p>

          <p>
            From UGC-style commercials to futuristic AI campaigns, every
            visual is crafted to make brands impossible to ignore.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="glass rounded-3xl p-6">
              <h3 className="text-4xl font-black text-cyan-400">10+</h3>
              <p className="mt-2 text-gray-400">Brands Worked With</p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-4xl font-black text-purple-400">100+</h3>
              <p className="mt-2 text-gray-400">AI Projects Created</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
