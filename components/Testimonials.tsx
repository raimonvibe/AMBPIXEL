const testimonials = [
  {
    name: "Daniel Brooks",
    text: "Ambpixel transformed our ads into cinematic campaigns that immediately elevated our brand.",
  },
  {
    name: "Sarah Lee",
    text: "The AI video quality felt like a Netflix production. Exceptional creative direction.",
  },
  {
    name: "Michael Ray",
    text: "Our engagement increased massively after working with Ambpixel.",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32 md:px-16">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
        Testimonials
      </p>

      <h2 className="mb-16 text-5xl font-black">What Clients Say</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.name} className="glass rounded-[40px] p-10">
            <p className="text-gray-300">{`"${item.text}"`}</p>

            <h3 className="mt-8 text-xl font-bold">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
