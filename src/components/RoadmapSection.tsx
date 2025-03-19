"use client";

import { useEffect, useState, useRef } from "react";
import { Milestone, CheckCircle } from "lucide-react";

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
    description: "Collaborated with university research teams and professors to develop our core technology. Established our dedicated research team and conducted extensive research and agreements to gather the necessary data for training our models. Successfully joined a deeptech accelerator programme to further enhance our growth trajectory.",
    date: "H2 2024"
  },
  {
    id: 2,
    title: "Market Exploration",
    description: "Engaging with banks, financial institutions, and various fintech companies to refine our offering. Focused on securing Letters of Intent (LOIs) and Proof of Concept (POC) agreements. During this period, we will raise capital and improve our product based on real market experience and feedback.",
    date: "2025"
  },
  {
    id: 3,
    title: "Bimodal AI & Market Expansion",
    description: "Launch of our advanced bimodal forecasting and LLM model capable of analysing bank statements and providing tailored financial suggestions in a single, unified system. Beginning strategic market expansion to reach a broader customer base.",
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
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-purple-900/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-blue-900/20 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-white">
            <span className="text-purple-500">Roadmap</span>
          </h2>
          <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
            Our journey to revolutionize financial data analysis through AI innovation.
          </p>
        </div>

        {/* Timeline visualization */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-900 via-purple-600 to-purple-900 rounded-full"></div>
          
          {/* Timeline steps */}
          <div className="space-y-24 relative">
            {roadmapSteps.map((step, index) => (
              <div 
                key={step.id}
                className={`flex items-center transition-all duration-1000 ${
                  isInView 
                    ? "opacity-100" 
                    : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                {/* Left side (odd steps) */}
                {index % 2 === 0 && (
                  <div className="w-1/2 pr-12 text-right">
                    <div className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-2 bg-purple-900/30 text-purple-400 border border-purple-700">
                      {step.date}
                    </div>
                    <h3 className="text-h3 text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                )}
                
                {/* Center point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-900/50 border-2 border-purple-500">
                    {index === 0 ? (
                      <CheckCircle className="w-6 h-6 text-purple-400" />
                    ) : index === 1 ? (
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                    ) : (
                      <Milestone className="w-6 h-6 text-purple-400" />
                    )}
                  </div>
                </div>
                
                {/* Right side (even steps) */}
                {index % 2 === 1 && (
                  <div className="w-1/2 pl-12">
                    <div className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-2 bg-purple-900/30 text-purple-400 border border-purple-700">
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
