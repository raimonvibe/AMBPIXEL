const portfolioItems: { title: string; src: string; type: string }[] = [
  {
    title: "Brand & UGC Ads",
    src: "/videos/ads.mp4",
    type: "video/mp4",
  },
  {
    title: "Fintech & Trading",
    src: "/videos/trader.mp4",
    type: "video/mp4",
  },
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

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-32 md:px-16">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
        Portfolio
      </p>

      <h2 className="mb-16 text-5xl font-black">Featured AI Productions</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {portfolioItems.map(({ title, src, type }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-[40px]"
          >
            <video
              muted
              loop
              autoPlay
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
  );
}
