"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Tags, 
  ShoppingCart, 
  UserCheck, 
  Search, 
  Wallet, 
  TrendingUp, 
  Shield, 
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
    title: "Transaction Categorisation",
    description: "Automatically classifying spending into precise categories to provide customers with meaningful insights into their financial behaviour and enable more sophisticated analysis.",
    icon: <Tags className="w-8 h-8 text-purple-400" />,
  },
  {
    id: 2,
    title: "Cross-Selling & Upselling",
    description: "Analysing spending patterns to recommend relevant financial products precisely when customers need them, enhancing conversion rates through timely, personalised offers.",
    icon: <ShoppingCart className="w-8 h-8 text-purple-400" />,
  },
  {
    id: 3,
    title: "Churn Prediction & Retention",
    description: "Identifying early warning signals of account dormancy or customer dissatisfaction to trigger proactive retention measures before customers consider switching banks.",
    icon: <UserCheck className="w-8 h-8 text-purple-400" />,
  },
  {
    id: 4,
    title: "Life Event Detection",
    description: "Recognising spending pattern changes that indicate significant life events (home purchase, marriage, childbirth, retirement) to offer relevant financial solutions at crucial decision points.",
    icon: <Search className="w-8 h-8 text-purple-400" />,
  },
  {
    id: 5,
    title: "Personal Financial Management",
    description: "Providing customers with intelligent budgeting assistance, spending categorisation, and personalised savings goals based on their projected financial situation.",
    icon: <Wallet className="w-8 h-8 text-purple-400" />,
  },
  {
    id: 6,
    title: "Enhanced Credit Scoring",
    description: "Supplementing traditional credit assessment with behavioural spending metrics for more accurate lending decisions while detecting early signs of financial distress before formal delinquency occurs.",
    icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
  },
  {
    id: 7,
    title: "Fraudster Identification",
    description: "Detecting patterns consistent with fraudulent actors rather than just fraudulent transactions, enabling the bank to proactively identify potentially suspicious customers before multiple fraud attempts occur.",
    icon: <Shield className="w-8 h-8 text-purple-400" />,
  },
  {
    id: 8,
    title: "Investment Intention Forecasting",
    description: "Predicting when customers are likely to have surplus funds available for investment based on spending and saving behaviours.",
    icon: <PiggyBank className="w-8 h-8 text-purple-400" />,
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
            <span className="text-purple-500">Proposition</span>
          </h2>
          <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
            At Deep4IT, we amplify your business capabilities to make smarter decisions and create innovative services by transforming complex transaction data into actionable insights through the power of AI and our pioneering Large Transaction Models (LTMs).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-h3 text-white">
              Banking-Specific <span className="text-purple-500">AI Platform</span>
            </h3>
            <p className="text-body text-gray-300 mb-6">
              Join the ranks of forward-thinking financial institutions leveraging our banking-specific AI platform to stay ahead in today&apos;s competitive market and unlock the full potential of your customer data.
            </p>
            <ul className="space-y-3">
              {[
                "Foundational model for forecasting customers behaviours",
                "Where generative and forecast capabilities intersect",
                "Generative Pretrained Transformer (GPT) with billions of bank transactional data",
                "Bank-level data security",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 bg-purple-500 rounded-full animate-ping"></div>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg blur opacity-30 animate-pulse"></div>
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
                      <div className="h-3 bg-purple-900 rounded w-1/2 animate-pulse"></div>
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
                          <div className={`h-2 ${index === 0 ? 'bg-purple-900' : 'bg-gray-800'} rounded w-2/3 animate-pulse`}
                               style={{ animationDelay: `${index * 0.1 + 0.15}s` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Data Insights Section */}
                <div className="mt-4 h-24 bg-gray-900 rounded border border-gray-800 flex items-center justify-center">
                  <div className="text-purple-500 text-xs font-mono">
                    [<span className="text-gray-500">data</span>] <span className="text-white">to</span> <span className="text-green-500">insights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 text-center">
          <h3 className="text-h3 text-white">
            Use <span className="text-purple-500">Cases</span>
          </h3>
          <p className="text-body text-gray-300 max-w-2xl mx-auto">
            Discover how Deep4IT can revolutionize your decision-making process with our Large Transaction Models.
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
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full border border-gray-700 transition-all duration-300 hover:border-purple-500"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => {
              nextSlide();
              resetAutoplay();
            }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full border border-gray-700 transition-all duration-300 hover:border-purple-500"
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
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-full transition-all duration-300 hover:border-purple-700 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">{useCase.icon}</div>
                      <h4 className="text-h4 text-white">{useCase.title}</h4>
                      <p className="text-body-sm text-gray-300 flex-grow">{useCase.description}</p>
                      <div className="mt-6 pt-4 border-t border-gray-800">
                        <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center transition-colors duration-300">
                          Learn more
                          <svg
                            className="ml-2 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </button>
                      </div>
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
                    ? "w-8 bg-purple-500"
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
