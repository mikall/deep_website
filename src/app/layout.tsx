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
  title: "Deep4IT | Software complesso. Delivery accelerato. Ingaggio iperpersonalizzato.",
  description: "Deep4IT combina senior engineering e intelligenza artificiale per aiutare le aziende a costruire software più velocemente e creare percorsi cliente iperpersonalizzati.",
  keywords: "Deep4IT, AI-native product factory, customer profiling, hyperpersonalized engagement, senior engineering, software italia",
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
