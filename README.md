# Ambpixel

**Live site:** [https://ambpixel.vercel.app/](https://ambpixel.vercel.app/)

![Founder — Ambpixel](public/images/founder/founder.jpg)

Cinematic AI creative studio portfolio: hero video, about, skills, portfolio grid, testimonials, and contact. Built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/) (icons)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Media assets

Files under `public/`:

| Path | Purpose |
|------|---------|
| `public/videos/ads.mp4` | Hero background |
| `public/videos/trader.mp4` | Portfolio — Fintech & Trading |
| `public/videos/elite-exams.mp4` | Portfolio — Education Explainers |
| `public/videos/disease-prevention.mov` | Portfolio — Health & Prevention |
| `public/images/founder/founder.jpg` | Founder image (hero) |

Compress large videos before deploy for faster loads (especially `elite-exams.mp4`).

## Deploy

Connect this repo on [Vercel](https://vercel.com/) to redeploy on push to `main`.

## License

[MIT](LICENSE)
