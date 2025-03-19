"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DemoSection from "@/components/DemoSection";
import TeamSection from "@/components/TeamSection";
import SelectionsSection from "@/components/SelectionsSection";
import RoadmapSection from "@/components/RoadmapSection";
import Footer from "@/components/Footer";
import SquaresAnimation from "@/components/SquaresAnimation";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-gray-300 relative">
        {/* Global background animation - will be visible throughout the page */}
        <div className="fixed inset-0 z-1">
          <SquaresAnimation />
        </div>
        
        {/* Page sections */}
        <HeroSection />
        <AboutSection />
        <DemoSection />
        <SelectionsSection />
        <TeamSection />
        <RoadmapSection />
      </main>
      <Footer />
    </>
  );
}
