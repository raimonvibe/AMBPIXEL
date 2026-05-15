import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://ambpixel.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ambpixel",
  description: "Cinematic AI Creative Studio",
  applicationName: "Ambpixel",
  appleWebApp: {
    capable: true,
    title: "Ambpixel",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ambpixel",
    title: "Ambpixel",
    description: "Cinematic AI Creative Studio",
    images: [
      {
        url: "/images/social.png",
        width: 309,
        height: 340,
        alt: "Ambpixel — Cinematic AI Creative Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ambpixel",
    description: "Cinematic AI Creative Studio",
    images: ["/images/social.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef2f7" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
