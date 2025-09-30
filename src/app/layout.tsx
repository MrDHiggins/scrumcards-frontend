import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScrumdCards",
  description: "ScrumdCards - A Poker Planning Web Application for Agile Teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
