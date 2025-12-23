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
  title: "Deep4IT | Advanced AI Technologies for Financial Decision Intelligence",
  description: "We develop proprietary AI technologies for the financial sector: Multi-Agent AI Systems, Persistent Long-term Memory, and Behavioral Forecasting. Juno is our AI assistant team for workers' financial wellbeing.",
  keywords: "financial AI, multi-agent AI, behavioral forecasting, persistent memory, Juno, AI financial assistant, B2B2E, financial wellbeing, employee benefits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased bg-black font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
