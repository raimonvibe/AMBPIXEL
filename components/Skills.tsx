const skills = [
  { name: "AI Video Production", level: "98%" },
  { name: "Motion Graphics", level: "95%" },
  { name: "UGC AI Ads", level: "96%" },
  { name: "Creative Direction", level: "94%" },
  { name: "Storytelling", level: "93%" },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-32 md:px-16">
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

            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div
                style={{ width: skill.level }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {[
          "HeyGen Pro",
          "Veo 3",
          "Google Flow",
          "CapCut",
          "Grok",
          "AI Motion Tools",
        ].map((tool) => (
          <div
            key={tool}
            className="glass rounded-3xl p-8 text-center text-xl font-semibold"
          >
            {tool}
          </div>
        ))}
      </div>
    </section>
  );
}
