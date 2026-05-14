const categories = [
  "UGC Videos",
  "Fintech Commercials",
  "AI Movies",
  "Explainer Videos",
  "Animations",
  "Brand Commercials",
];

function categoryToPath(category: string) {
  return `/videos/${category.toLowerCase().replace(/\s/g, "-")}/sample.mp4`;
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-32 md:px-16">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
        Portfolio
      </p>

      <h2 className="mb-16 text-5xl font-black">Featured AI Productions</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {categories.map((category) => (
          <div
            key={category}
            className="group relative overflow-hidden rounded-[40px]"
          >
            <video
              muted
              loop
              autoPlay
              playsInline
              className="h-[400px] w-full object-cover transition duration-500 group-hover:scale-110"
            >
              <source src={categoryToPath(category)} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-black">{category}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
