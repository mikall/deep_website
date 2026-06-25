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
  title: "Deep4IT | Agent-ready knowledge for complex products and processes",
  description: "Deep4IT è un AI Lab specializzato in agent-ready knowledge: trasformiamo contenuti complessi in conoscenza strutturata, tracciabile e interrogabile dagli agenti AI.",
  keywords: "Deep4IT, agent-ready knowledge, AI Lab, rappresentazione della conoscenza, knowledge base, agenti AI, Indexable, Juno AI, knowledge retention, software italia",
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
