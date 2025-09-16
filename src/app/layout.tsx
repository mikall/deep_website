import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import "./typography.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Deep4IT | Foundational AI Models per il Benessere e l'Inclusione Finanziaria",
  description: "Miglioriamo il benessere finanziario delle persone attraverso SoldoGPT, il coach AI conversazionale che educa, supporta e guida verso decisioni più consapevoli.",
  keywords: "benessere finanziario, educazione finanziaria, intelligenza artificiale, coach AI, SoldoGPT, inclusione finanziaria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased bg-black font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
