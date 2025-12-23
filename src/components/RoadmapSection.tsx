"use client";

import { useEffect, useState, useRef } from "react";

// Define roadmap step type
interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  date: string;
}

// Roadmap data - Updated with pivot story
const roadmapSteps: RoadmapStep[] = [
  {
    id: 1,
    title: "Research on Behavioral Forecasting",
    description: "Research on behavioral forecasting from transactional data. Collaboration with university research teams to develop behavioral predictive models and validate technical feasibility. Participation in deeptech accelerators.",
    date: "Q4 2024"
  },
  {
    id: 2,
    title: "B2B Banking: MVP & Market Fit",
    description: "First B2B selling phase to banks with 'best next action' MVP product. Long sales cycles, complex integrations. Strategic pivot: from banking technology to improving consumer/employee decisions through technological micro-adjustments.",
    date: "Q1-Q2 2025"
  },
  {
    id: 3,
    title: "B2B2E: MVP & GTM Validation",
    description: "Launch of Business-to-Business-to-Employee model with Juno. Go-to-market validation through Labor Consulting Firms. 24h activation, zero IT integration. Traction: 5 committed partners, 15,000+ immediate employee reach. x6 more effective than traditional financial education.",
    date: "Q3-Q4 2025"
  },
  {
    id: 4,
    title: "Strategic Partnerships & Product V1",
    description: "Strategic partnerships with medium-large Labor Consulting Firms. POC (Proof of Concept) implementations with enterprise clients. Development of Juno V1 with enhanced features based on user feedback and behavioral data.",
    date: "Q1-Q2 2026"
  },
  {
    id: 5,
    title: "Scaling & Evolution",
    description: "Distribution expansion through Labor Consulting Firms: Italy first, then EU expansion (2027: UK). Evolution from voice-ready to voice-first architecture. Enhancement of behavioral forecasting models on anonymized aggregated data for institutional insights.",
    date: "Q3 2026+"
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
            Our journey: from behavioral forecasting research to the launch of Juno, the AI assistant team for workers&apos; financial wellbeing.
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
