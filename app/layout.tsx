import "./globals.css";

export const metadata = {
  title: "Ambpixel",
  description: "Cinematic AI Creative Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
