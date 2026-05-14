import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ambpixel",
  description: "AI Creative Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
