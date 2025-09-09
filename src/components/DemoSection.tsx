"use client";

import { useState } from "react";
import BankStatementHistogram from "./BankStatementHistogram";
import { Card, CardContent } from "./ui/card";
import InfoBox from "./InfoBox";

// Import Suggestion interface
interface Suggestion {
  id: number;
  start_day: number;
  end_day: number;
  probability: number;
  prediction: string;
  banking_action: string;
}

const DemoSection = () => {
  // State for animation
  const [animating, setAnimating] = useState(false);
  // State for visible suggestions
  const [visibleSuggestions, setVisibleSuggestions] = useState<Suggestion[]>([]);

  // Handle suggestions update from histogram component
  const handleSuggestionsUpdate = (newSuggestions: Suggestion[]) => {
    console.log("Received suggestions update:", newSuggestions);
    
    // Reset visible suggestions
    setVisibleSuggestions([]);
    
    // Start animation
    if (newSuggestions.length > 0) {
      console.log("Starting suggestions animation");
      setAnimating(true);
      
      // Animate suggestions one by one
      let currentIndex = 0;
      const animateNextSuggestion = () => {
        if (currentIndex < newSuggestions.length) {
          console.log("Animating suggestion:", newSuggestions[currentIndex]);
          setVisibleSuggestions(prev => [...prev, newSuggestions[currentIndex]]);
          currentIndex++;
          setTimeout(animateNextSuggestion, 500); // 500ms delay between suggestions
        } else {
          console.log("Animation complete");
          setAnimating(false);
        }
      };
      
      // Start animation after a short delay
      setTimeout(animateNextSuggestion, 300);
    } else {
      console.log("No suggestions to animate");
    }
  };

  return (
    <section id="demo" className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-white">
            Come Funziona il Nostro <span className="text-primary">Motore di Previsione Comportamentale</span>
          </h2>
          <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
            Il nostro motore di behavioral forecasting analizza i pattern delle transazioni finanziarie per prevedere comportamenti futuri. Questa simulazione mostra come trasformiamo i dati transazionali in previsioni comportamentali precise, identificando tendenze di spesa, probabilità di churn e opportunità di next best action.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/70 rounded-lg blur opacity-30 animate-pulse"></div>
          <div className="relative bg-black border border-gray-800 rounded-lg pl-6 shadow-xl">
            {/* Main content grid */}
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Info box */}
              <div className="md:col-span-12 lg:col-span-3">
                <InfoBox />
              </div>
              
              {/* Main histogram component */}
              <div className="md:col-span-8 lg:col-span-6 mt-6 mr-6 mb-6">
                <BankStatementHistogram onSuggestionsUpdate={handleSuggestionsUpdate} />
              </div>
              
              {/* Suggestions box - fixed height container */}
              <div className="md:col-span-4 lg:col-span-3 mt-6 mb-6 mr-6" style={{ height: "400px" }}>
                <Card className="bg-black text-gray-200 border-gray-800 h-full">
                  <CardContent className="h-full overflow-hidden flex flex-col p-0">
                    <h4 className="text-body-sm font-semibold pl-4 pb-2 m-0 border-b border-gray-800">Previsioni Comportamentali</h4>
                    {animating || visibleSuggestions.length > 0 ? (
                      <div className="flex-grow overflow-hidden h-full">
                        <ul className="space-y-2 pr-2 custom-scrollbar px-4 py-3 h-full overflow-y-auto max-h-full">
                          {visibleSuggestions.filter(suggestion => suggestion).map((suggestion, index) => (
                            <li 
                              key={index} 
                              className="text-caption bg-gray-900 p-3 rounded border border-gray-800 animate-fadeIn"
                              style={{ 
                                animation: `fadeIn 0.5s ease-in-out ${index * 0.3}s both`,
                                opacity: 0 
                              }}
                            >
                              <div className="mb-1">{suggestion.prediction}</div>
                              <div className="mb-2"><strong>{suggestion.banking_action}</strong></div>
                              <div className="flex justify-between text-caption text-gray-500">
                                <span>In {suggestion.start_day}-{suggestion.end_day} days</span>
                                <span>{suggestion.probability}% probability</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="text-center text-gray-500 py-4 px-4 flex-grow">
                        Esempi di previsioni comportamentali
                      </div>
                    )}
                    {!animating && visibleSuggestions.length > 0 && (
                      <div className="text-xs text-gray-500 italic px-4 py-2 mt-auto">
                        Previsioni comportamentali basate su pattern transazionali
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
