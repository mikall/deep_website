"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SelectionsSection from "@/components/SelectionsSection";
import Footer from "@/components/Footer";
import AuroraBackground from "@/components/AuroraBackground";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-gray-300 relative">
        <div className="fixed inset-0 z-1">
          <AuroraBackground />
        </div>

        <HeroSection />
        <AboutSection />
        <SelectionsSection />
      </main>
      <Footer />
    </>
  );
}
