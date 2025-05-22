"use client";

import { useEffect, useState, useRef } from "react";

// Define roadmap step type
interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  date: string;
}

// Roadmap data
const roadmapSteps: RoadmapStep[] = [
  {
    id: 1,
    title: "Research & Development",
    description: "Collaborated with university research teams to develop our predictive conversational AI technology. Established our dedicated research team and gathered diverse financial data to train our models. Successfully joined a deeptech accelerator to enhance our development of predictive AI agents that understand and anticipate financial patterns.",
    date: "H2 2024"
  },
  {
    id: 2,
    title: "Market Fit Research & POC",
    description: "Engaging with financial institutions while also developing direct-to-consumer applications. Our dual approach focuses on both B2B and B2B2C markets, refining our AI agent to deliver value across these channels, securing partnerships and gathering user feedback to continuously improve our conversational capabilities.",
    date: "H1 2025"
  },
  {
    id: 3,
    title: "Predictive Conversational Finance Platform",
    description: "Launch of our comprehensive predictive financial AI agent platform that serves both institutions and individuals. Our agent will provide personalized financial coaching, actionable insights, and seamless integration with existing financial systems, creating a new paradigm in financial guidance.",
    date: "H1 2026"
  }
];

const RoadmapSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-blue-900/20 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-white">
            <span className="text-primary">Roadmap</span>
          </h2>
          <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
            Our journey to transform financial decision-making through conversational AI for both institutions and individuals.
          </p>
        </div>

        {/* Timeline visualization */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/30 via-primary to-primary/30 rounded-full"></div>
          
          {/* Timeline steps */}
          <div className="space-y-24 relative">
            {roadmapSteps.map((step, index) => (
              <div 
                key={step.id}
                className={`relative flex items-center transition-all duration-1000 ${
                  isInView 
                    ? "opacity-100" 
                    : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                {/* Left side (odd steps) */}
                {index % 2 === 0 && (
                  <div className="w-1/2 pr-12 text-right">
                    <div className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-2 bg-primary/20 text-primary/90 border border-primary/40">
                      {step.date}
                    </div>
                    <h3 className="text-h3 text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                )}
                
                {/* Center point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-primary/20 border-2 border-primary">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>
                
                {/* Right side (even steps) */}
                {index % 2 === 1 && (
                  <div className="w-1/2 pl-12">
                    <div className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-2 bg-primary/20 text-primary/90 border border-primary/40">
                      {step.date}
                    </div>
                    <h3 className="text-h3 text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                )}
                
                {/* Right side (odd steps) */}
                {index % 2 === 0 && <div className="w-1/2"></div>}
                
                {/* Left side (even steps) */}
                {index % 2 === 1 && <div className="w-1/2"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
