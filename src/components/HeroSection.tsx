"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      
      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-display text-white">
              Advanced AI Technologies<br />
              for <span className="text-primary">Financial Decision Intelligence</span>
            </h1>
            <p className="text-body-lg text-gray-300 mb-8 max-w-lg">
              We develop proprietary AI technologies that transform how people make financial decisions.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="bg-primary/20 text-primary/90 px-3 py-1 rounded-full text-sm">#MultiAgentAI</span>
              <span className="bg-primary/20 text-primary/90 px-3 py-1 rounded-full text-sm">#PersistentMemory</span>
              <span className="bg-primary/20 text-primary/90 px-3 py-1 rounded-full text-sm">#BehavioralForecasting</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://ojuno.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors duration-300 border border-primary/80 hover:border-primary/60 shadow-lg hover:shadow-primary/20 inline-block"
              >
                Discover Juno
              </a>
              <button
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="bg-transparent text-primary hover:text-primary/80 px-6 py-3 rounded-md font-medium transition-colors duration-300 border border-primary/40 hover:border-primary/60"
              >
                Our Technology
              </button>
            </div>
          </div>
          
          {/* Visual element */}
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/70 rounded-lg blur opacity-30 animate-pulse"></div>
              <div className="relative bg-black border border-gray-800 rounded-lg p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-500">dashboard.ai</div>
                </div>
                <div className="space-y-3">
                  <div className="h-40 bg-gray-900 rounded border border-gray-800 overflow-hidden">
                    <div className="flex flex-col h-full">
                      {/* Terminal header */}
                      <div className="bg-gray-800 px-3 py-1 text-xs text-gray-400 font-mono">
                        $ AI.agent(financial_data)
                      </div>
                      
                      {/* Terminal content with bank image */}
                      <div className="flex-1 p-2 flex items-center justify-center">
                        <div className="flex items-center space-x-3">
                          <Image 
                            src="/images/bank.png" 
                            alt="Financial AI Agent Visualization" 
                            width={96}
                            height={96}
                            className="h-24 w-auto object-contain"
                          />
                          <div className="h-24 w-px bg-gray-700"></div>
                          <div className="text-primary text-sm font-mono">
                            <div className="mb-1">{'>'} Analyzing financial patterns...</div>
                            <div className="mb-1">{'>'} Generating personalized insights...</div>
                            <div className="flex items-center">
                              {'>'} <span className="ml-1 animate-pulse">_</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <div className="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <div className="h-2 w-2 bg-primary rounded-full animate-ping"></div>
                    </div>
                    <div className="h-4 bg-gray-800 rounded w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-gray-500 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
