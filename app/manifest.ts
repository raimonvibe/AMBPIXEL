import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ambpixel",
    short_name: "Ambpixel",
    description: "Cinematic AI Creative Studio",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      {
        src: "/images/social.png",
        sizes: "309x340",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/social.png",
        sizes: "309x340",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
