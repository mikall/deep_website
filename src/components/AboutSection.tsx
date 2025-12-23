"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  GitCompare,
  Settings,
  Database,
  Users
} from "lucide-react";

// Define the use case type
interface UseCase {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Use cases - Updated to reflect technology ecosystem
const useCases: UseCase[] = [
  {
    id: 1,
    title: "Multi-Agent Coordination",
    description: "Specialized AI agents team collaborating to provide comprehensive financial support: HR, education, budgeting, comparison. Each agent brings specific expertise working in perfect synergy.",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    id: 2,
    title: "Persistent Memory",
    description: "Conversational context that evolves and enriches over time. We remember preferences, financial history, and goals to provide increasingly personalized and relevant guidance.",
    icon: <Database className="w-8 h-8 text-primary" />,
  },
  {
    id: 3,
    title: "Behavioral Forecasting",
    description: "Behavioral predictions from transactional data. We anticipate needs, identify financial risks, and suggest proactive actions based on individual spending patterns.",
    icon: <GitCompare className="w-8 h-8 text-primary" />,
  },
  {
    id: 4,
    title: "Voice-Ready Architecture",
    description: "Native support for audio messages on WhatsApp today, ready for future voice interfaces. Channel-agnostic architecture designed for the voice-first evolution of the sector.",
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
  },
  {
    id: 5,
    title: "B2B2E Distribution",
    description: "Distribution via Labor Consulting Firms: zero friction, 24h activation, no IT integration required. Massive and immediate access to thousands of employees.",
    icon: <Settings className="w-8 h-8 text-primary" />,
  },
];

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle next slide
  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === useCases.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  // Handle previous slide
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? useCases.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Set up autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [activeIndex, nextSlide]);

  // Reset autoplay on user interaction
  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    resetAutoplay();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-white">
            <span className="text-primary">Our Technology</span>
          </h2>
          <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
            Deep4IT develops proprietary AI technologies for the financial sector, focusing on three fundamental pillars that transform how people interact with their finances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-h3 text-white mb-4">
              <span className="text-primary">1.</span> Multi-Agent AI Systems
            </h3>
            <p className="text-body text-gray-300 mb-6">
              Coordinated AI agent systems that collaborate to provide comprehensive and personalized financial support. Each agent specializes in a specific domain (HR, education, budgeting, comparison) and works together to offer coherent and contextualized guidance.
            </p>
            <ul className="space-y-3">
              {[
                "Coordinated multi-agent architecture",
                "Voice-ready architecture (native audio support + future voice interfaces)",
                "Hybrid AI Core: GenAI + Deterministic guardrails for finance",
                "Channel-agnostic: WhatsApp today, ready for future voice interfaces",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 bg-primary rounded-full animate-ping"></div>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/70 rounded-lg blur opacity-30 animate-pulse"></div>
              <div className="relative bg-black border border-gray-800 rounded-lg p-6 shadow-xl">
                {/* Bank Statement Header */}
                <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
                  <div className="text-sm font-semibold text-white">Account Statement</div>
                  <div className="text-xs text-gray-400">Ref: #ST-2025-03-19</div>
                </div>
                
                {/* Account Information - Placeholder Boxes */}
                <div className="mb-4 pb-3 border-b border-gray-800">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Account Holder</div>
                      <div className="h-3 bg-gray-800 rounded w-2/3 animate-pulse"></div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Current Balance</div>
                      <div className="h-3 bg-primary/30 rounded w-1/2 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                {/* Transaction List */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-white mb-2">Transaction History</div>
                  
                  {/* Transaction Header */}
                  <div className="flex justify-between text-[10px] text-gray-400 mb-2 pb-1 border-b border-gray-700">
                    <div className="w-1/4">Date</div>
                    <div className="w-2/5">Description</div>
                    <div className="w-1/5 text-right">Category</div>
                    <div className="w-1/5 text-right">Amount</div>
                  </div>
                  
                  {/* Transaction Rows - Placeholder Boxes */}
                  <div className="space-y-2 max-h-[180px] overflow-y-auto pr-1">
                    {/* Generate 3 placeholder rows */}
                    {[...Array(3)].map((_, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-gray-800">
                        {/* Date placeholder */}
                        <div className="w-1/4 pr-2">
                          <div className={`h-2 bg-gray-800 rounded w-4/5 animate-pulse`} 
                               style={{ animationDelay: `${index * 0.1}s` }}></div>
                        </div>
                        
                        {/* Description placeholder */}
                        <div className="w-2/5 pr-2">
                          <div className={`h-2 bg-gray-800 rounded w-full animate-pulse`}
                               style={{ animationDelay: `${index * 0.1 + 0.05}s` }}></div>
                        </div>
                        
                        {/* Category placeholder */}
                        <div className="w-1/5 pr-2 flex justify-end">
                          <div className={`h-2 bg-gray-800 rounded w-3/4 animate-pulse`}
                               style={{ animationDelay: `${index * 0.1 + 0.1}s` }}></div>
                        </div>
                        
                        {/* Amount placeholder - first one purple, others gray */}
                        <div className="w-1/5 flex justify-end">
                          <div className={`h-2 ${index === 0 ? 'bg-primary/30' : 'bg-gray-800'} rounded w-2/3 animate-pulse`}
                               style={{ animationDelay: `${index * 0.1 + 0.15}s` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Data Insights Section */}
                <div className="mt-4 h-24 bg-gray-900 rounded border border-gray-800 flex items-center justify-center">
                <div className="text-primary text-xs font-mono">
                  [<span className="text-gray-500">conversations</span>] <span className="text-white">to</span> <span className="text-green-500">actions</span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second pillar: Persistent Memory */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-1 md:order-1">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/70 rounded-lg blur opacity-30 animate-pulse"></div>
              <div className="relative bg-black border border-gray-800 rounded-lg p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-semibold text-white">Conversation Memory</div>
                  <div className="text-xs text-gray-400">Session History</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-3 bg-gray-900 rounded border border-gray-800">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-400">Context retained across sessions</span>
                  </div>
                  <div className="flex items-center space-x-2 p-3 bg-gray-900 rounded border border-gray-800">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-400">Long-term user preferences</span>
                  </div>
                  <div className="flex items-center space-x-2 p-3 bg-gray-900 rounded border border-gray-800">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-400">Financial history awareness</span>
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 border border-primary/30 rounded">
                    <div className="text-xs text-primary font-mono">Memory evolves with every interaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-2 md:order-2">
            <h3 className="text-h3 text-white mb-4">
              <span className="text-primary">2.</span> Persistent Long-term Memory
            </h3>
            <p className="text-body text-gray-300 mb-6">
              Persistent conversational memory that allows our AI agents to remember context, history, and user preferences over time, building increasingly personalized and relevant support with each interaction.
            </p>
            <ul className="space-y-3">
              {[
                "Conversational continuity across sessions",
                "Growing personalization over time",
                "Deep understanding of individual financial context",
                "Privacy by design, GDPR compliant",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 bg-primary rounded-full animate-ping"></div>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Third pillar: Behavioral Forecasting */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-h3 text-white mb-4">
              <span className="text-primary">3.</span> Behavioral Forecasting
            </h3>
            <p className="text-body text-gray-300 mb-6">
              Predictive models that analyze behavioral patterns from transactional data to anticipate needs, identify risks, and suggest proactive actions. Our technology transforms financial data into predictive insights to improve decision-making.
            </p>
            <ul className="space-y-3">
              {[
                "Prediction of spending patterns and financial behaviors",
                "Early identification of financial stress",
                "Personalized proactive suggestions (intelligent nudging)",
                "Anonymous aggregated insights for financial institutions and companies",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 bg-primary rounded-full animate-ping"></div>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/70 rounded-lg blur opacity-30 animate-pulse"></div>
              <div className="relative bg-black border border-gray-800 rounded-lg p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-semibold text-white">Behavioral Analytics</div>
                  <div className="text-xs text-gray-400">Forecasting Engine</div>
                </div>
                <div className="space-y-3">
                  <div className="h-32 bg-gray-900 rounded border border-gray-800 p-3">
                    <div className="text-xs text-gray-400 mb-2">Transaction Pattern Analysis</div>
                    <div className="space-y-2">
                      {[0, 1, 2].map((i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="h-2 bg-primary/30 rounded animate-pulse" style={{ width: `${70 - i * 15}%`, animationDelay: `${i * 0.2}s` }}></div>
                          <span className="text-xs text-gray-500">{`Pattern ${i + 1}`}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 bg-gray-900 rounded border border-gray-800 text-center">
                      <div className="text-xs text-gray-400">Prediction Accuracy</div>
                      <div className="text-lg text-primary font-bold">+15%</div>
                    </div>
                    <div className="p-2 bg-gray-900 rounded border border-gray-800 text-center">
                      <div className="text-xs text-gray-400">Education Effectiveness</div>
                      <div className="text-lg text-primary font-bold">x6</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Section: Juno */}
        <div className="mb-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl">
          <div className="text-center mb-6">
            <h3 className="text-h3 text-white mb-2">
              Our Product: <span className="text-primary">Juno</span>
            </h3>
            <p className="text-h4 text-gray-300 mb-4">The Financial Assistant for Every Worker</p>
            <p className="text-body text-gray-300 max-w-3xl mx-auto mb-6">
              The first AI assistant team dedicated to employee financial wellbeing. Accessible via WhatsApp, Juno reduces the financial stress of 32% of European workers and automates HR operational load.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-body font-semibold text-white mb-2">For Employees</h4>
              <p className="text-body-sm text-gray-300">Team of AI experts available 24/7 on WhatsApp for comprehensive and personalized financial support.</p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-body font-semibold text-white mb-2">For Companies</h4>
              <p className="text-body-sm text-gray-300">Reduces HR workload by automating recurring inquiries. Improves retention and performance by reducing financial stress.</p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="https://ojuno.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-3 rounded-md font-medium transition-colors duration-300 border border-primary/80 hover:border-primary/60 shadow-lg hover:shadow-primary/20"
            >
              Learn more about Juno →
            </a>
          </div>
        </div>

        <div className="mb-8 text-center">
          <h3 className="text-h3 text-white">
            Our <span className="text-primary">Technology Ecosystem</span>
          </h3>
          <p className="text-body text-gray-300 max-w-2xl mx-auto">
            The technologies that power Juno and transform financial decisions.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-4 py-8">
          {/* Carousel navigation */}
          <button
            onClick={() => {
              prevSlide();
              resetAutoplay();
            }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full border border-gray-700 transition-all duration-300 hover:border-primary"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => {
              nextSlide();
              resetAutoplay();
            }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full border border-gray-700 transition-all duration-300 hover:border-primary"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel container */}
          <div
            ref={carouselRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * (isMobile ? 100 : 100/3)}%)`,
              }}
            >
              {useCases.map((useCase) => (
                <div key={useCase.id} className="w-full md:w-1/3 flex-shrink-0 px-4 py-2">
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-full transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_rgba(193,43,231,0.4)]">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">{useCase.icon}</div>
                      <h4 className="text-h4 text-white">{useCase.title}</h4>
                      <p className="text-body-sm text-gray-300 flex-grow">{useCase.description}</p>
                      {/* Removed "Learn more" button as requested */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  resetAutoplay();
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-gray-700 hover:bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
