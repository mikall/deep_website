"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  UserCheck, 
  Search, 
  Wallet, 
  TrendingUp, 
  PiggyBank 
} from "lucide-react";

// Define the use case type
interface UseCase {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Use cases
const useCases: UseCase[] = [
  {
    id: 1,
    title: "Advanced Educational Coaching",
    description: "Our conversational AI provides personalized financial education, adapting to each individual&apos;s knowledge level and learning style while helping institutions build financially educated customer bases.",
    icon: <Search className="w-8 h-8 text-primary" />,
  },
  {
    id: 2,
    title: "Advanced Alternative Credit Scoring",
    description: "Our AI analyzes transaction patterns to create more inclusive credit assessments, helping individuals access financial services while enabling institutions to make better-informed lending decisions.",
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
  },
  {
    id: 3,
    title: "Customer Insights",
    description: "Predict customer behaviors like churn probability and identify best next product opportunities, allowing financial institutions to proactively address customer needs with hyper-personalized approaches.",
    icon: <UserCheck className="w-8 h-8 text-primary" />,
  },
  {
    id: 4,
    title: "Smart Savings",
    description: "Simulate optimal saving strategies based on individual financial patterns, helping people achieve their goals faster while providing financial institutions with deeper engagement opportunities.",
    icon: <PiggyBank className="w-8 h-8 text-primary" />,
  },
  {
    id: 5,
    title: "Investment Advice",
    description: "Simulate investment scenarios tailored to each person&apos;s risk profile and financial situation, empowering individuals to make confident decisions and institutions to provide more personalized guidance.",
    icon: <Wallet className="w-8 h-8 text-primary" />,
  },
];

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

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
            <span className="text-primary">Our Vision</span>
          </h2>
          <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
            At Deep4IT, we envision a future where financial decisions are guided by predictive intelligence, conversational AI, and hyper-personalization. At the core of our technology is our proprietary foundational model—a GPT model trained from scratch specifically on transaction data for financial forecasting. Our predictive AI agent transforms complex financial data into clear, actionable insights tailored to each unique situation—creating a dual impact by empowering individuals with ultra-personalized financial coaching while providing institutions with unprecedented customer understanding and predictive capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-h3 text-white">
              Intelligent <span className="text-primary">Financial AI Agent</span>
            </h3>
            <p className="text-body text-gray-300 mb-6">
              Our predictive conversational AI agent acts as both a hyper-personalized financial coach and a strategic intelligence tool. It interprets individual financial patterns with remarkable precision to deliver predictive insights uniquely tailored to each person&apos;s situation, helping individuals make better decisions and enabling institutions to create deeply personalized customer relationships.
            </p>
            <ul className="space-y-3">
              {[
                "Natural conversation that simplifies complex financial concepts",
                "Hyper-personalized insights based on individual financial DNA",
                "Adaptive guidance that evolves with each person&apos;s unique financial journey",
                "Seamless integration with existing financial ecosystems",
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

        <div className="mb-8 text-center">
          <h3 className="text-h3 text-white">
            Product <span className="text-primary">Modules</span>
          </h3>
          <p className="text-body text-gray-300 max-w-2xl mx-auto">
            Our AI agent offers multiple forecasting capabilities from simple predictions to interactive simulations and conversational guidance, serving both institutions and individuals.
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
                transform: `translateX(-${activeIndex * (100/3)}%)`,
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
