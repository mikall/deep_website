"use client";

import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  generateTransactionsData,
  calculateDailyBalances,
  groupTransactionsByDate,
  Transaction,
  Category
} from "@/data/transactions";
// Define interface for suggestion items
interface Suggestion {
  id: number;
  start_day: number;
  end_day: number;
  probability: number;
  prediction: string;
  banking_action: string;
}

// Import suggestions data
// The file contains a direct array, so we need to access it directly
import suggestionsData from "@/data/suggestions.js";
const suggestions: Suggestion[] = Array.isArray(suggestionsData) ? suggestionsData : [];

// Define color mapping for categories - using shades of gray for expenses and purple for income
const categoryColors: Record<Category, string> = {
  food: "bg-gray-400",
  transport: "bg-gray-500",
  entertainment: "bg-gray-600",
  utilities: "bg-gray-700",
  shopping: "bg-gray-800",
  health: "bg-gray-900",
  income: "bg-primary", // Primary theme color for income
};

// Define color mapping for income amounts (different shades of primary color)
const incomeAmountColors = [
  "bg-primary/30",
  "bg-primary/40", 
  "bg-primary/50",
  "bg-primary/70",
  "bg-primary/80",
  "bg-primary/90",
];

// Define period options
const periodOptions = [
  { value: "1", label: "30 Giorni", forecast: "Previsione 1 mese" },
  { value: "3", label: "90 Giorni", forecast: "Previsione 3 mesi" },
  { value: "6", label: "180 Giorni", forecast: "Previsione 6 mesi" },
];

// Square size in pixels
const SQUARE_SIZE = 7; // Further reduced to make columns narrower
// Gap between squares
const SQUARE_GAP = 1; // Reduced from 2 to make columns narrower
// Gap between columns
const COLUMN_GAP = 1; // Reduced column spacing
// Amount represented by each square (in euros)
const AMOUNT_PER_SQUARE = 25;
// Maximum number of squares to display in a column
const MAX_SQUARES_PER_COLUMN = 20;
// Animation delay between adding days (in ms)
const DAY_ANIMATION_DELAY = 100;
// Maximum visible days to show at once (for performance)
const MAX_VISIBLE_DAYS = 180;

interface BankStatementHistogramProps {
  onSuggestionsUpdate?: (suggestions: Suggestion[]) => void;
}

const BankStatementHistogram: React.FC<BankStatementHistogramProps> = ({ onSuggestionsUpdate }) => {
  // State for selected month range - initially no period is selected
  const [monthRange, setMonthRange] = useState<string | null>(null);
  // State for daily balances
  const [dailyBalances, setDailyBalances] = useState<Record<string, number>>({});
  // State for grouped transactions
  const [groupedTransactions, setGroupedTransactions] = useState<Record<string, Transaction[]>>({});
  // State for animation
  const [animating, setAnimating] = useState(false);
  // State for visible days
  const [visibleDays, setVisibleDays] = useState<string[]>([]);
  // State for loading
  const [loading, setLoading] = useState(false);
  // State for customer number
  const [customerNumber, setCustomerNumber] = useState<number>(0);
  // No need to store suggestions locally as they're passed to parent
  // Ref for animation timeout
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  // Ref for scroll container
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // Ref to track if initial load has happened
  const initialLoadRef = useRef<boolean>(false);

  // Effect to update data periodically (every 30 seconds)
  useEffect(() => {
    const updateData = () => {
      console.log("Checking for data updates...");
      // In a real app, this would fetch new data from an API
      // For this demo, we'll just use the existing data
    };

    // Initial update
    updateData();

    // Set up interval for periodic updates
    const intervalId = setInterval(updateData, 30000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to get random suggestions based on the selected time period
  const getRandomSuggestions = (daysRange: number) => {
    console.log("Getting suggestions for days range:", daysRange);
    console.log("Available suggestions:", suggestions.length);
    
    // Check if suggestions array is empty
    if (suggestions.length === 0) {
      console.log("No suggestions available, creating default suggestion");
      // Create a default suggestion if none are available
      return [{
        id: 1,
        start_day: 1,
        end_day: daysRange,
        probability: 75,
        prediction: "The customer will need banking services",
        banking_action: "Offer personalized banking consultation"
      }];
    }
    
    // Determine max suggestions count based on forecast period
    let maxSuggestions = 0;
    
    if (daysRange <= 30) {
      // 0-3 suggestions for 30-day forecast
      maxSuggestions = 3;
    } else if (daysRange <= 90) {
      // 0-6 suggestions for 90-day forecast
      maxSuggestions = 6;
    } else {
      // 0-10 suggestions for 180-day forecast
      maxSuggestions = 10;
    }
    
    // Generate a random number of suggestions between 1 and maxSuggestions
    // Ensuring we always have at least 1 suggestion
    const count = Math.max(1, Math.floor(Math.random() * (maxSuggestions + 1)));
    
    console.log(`Will generate ${count} suggestions for ${daysRange} days forecast`);
    
    // Filter suggestions based on the selected time period
    const filteredSuggestions = suggestions.filter(
      (suggestion: Suggestion) => suggestion.end_day <= daysRange
    );
    
    console.log("Filtered suggestions:", filteredSuggestions.length);
    
    // If no suggestions match the criteria, return empty array
    if (filteredSuggestions.length === 0) {
      console.log("No matching suggestions found");
      // If no suggestions match, use all suggestions with end_day <= 180
      const fallbackSuggestions = suggestions.filter(
        (suggestion: Suggestion) => suggestion.end_day <= 180
      );
      
      if (fallbackSuggestions.length === 0) {
        console.log("No fallback suggestions found either, using first suggestion as fallback");
        // In the extreme case where no suggestions match any criteria,
        // return the first suggestion to ensure we always have at least one
        return [suggestions[0]];
      }
      
      console.log("Using fallback suggestions:", fallbackSuggestions.length);
      
      // Sort by probability (higher probability first)
      const sortedSuggestions = [...fallbackSuggestions].sort(
        (a, b) => b.probability - a.probability
      );
      
      // Take top suggestions based on count
      const topSuggestions = sortedSuggestions.slice(0, Math.min(count * 2, sortedSuggestions.length));
      
      // Randomly select from top suggestions
      const shuffled = [...topSuggestions].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, Math.min(count, shuffled.length));
      
      // Return full suggestion objects
      return selected;
    }
    
    // Sort by probability (higher probability first)
    const sortedSuggestions = [...filteredSuggestions].sort(
      (a, b) => b.probability - a.probability
    );
    
    // Take top suggestions based on count
    const topSuggestions = sortedSuggestions.slice(0, Math.min(count * 2, sortedSuggestions.length));
    
    // Randomly select from top suggestions
    const shuffled = [...topSuggestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));
    
    console.log("Selected suggestions:", selected.length);
    
    // Return full suggestion objects
    return selected;
  };

  // Function to load data for a specific month range
  const loadData = (months: string) => {
    console.log("loadData called with months:", months);
    // Set loading state
    setLoading(true);
    setVisibleDays([]);
    
    // Generate a random customer number
    const newCustomerNumber = Math.floor(Math.random() * 900000) + 100000;
    setCustomerNumber(newCustomerNumber);
    
    // Update month range
    setMonthRange(months);
    initialLoadRef.current = true;
    
    // Clear previous animation if any
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }
    
    // Start animation
    setAnimating(true);
    
    // Use setTimeout to simulate loading
    setTimeout(() => {
      const forecastMonths = parseInt(months);
      
      console.log(`Loading data for ${forecastMonths} month(s) forecast`);
      
      // Generate transactions data for the selected forecast period
      const transactions = generateTransactionsData(forecastMonths);
      
      // Process the transactions data
      const balances = calculateDailyBalances(transactions);
      setDailyBalances(balances);
      
      const grouped = groupTransactionsByDate(transactions);
      setGroupedTransactions(grouped);
      
      // Get all days sorted
      const allDays = Object.keys(grouped).sort();
      
      // Debug log to check all days
      console.log("All days:", allDays);
      
      // Limit days to MAX_VISIBLE_DAYS for performance
      const limitedDays = allDays.length > MAX_VISIBLE_DAYS 
        ? allDays.slice(allDays.length - MAX_VISIBLE_DAYS) 
        : allDays;
      
      console.log(`Showing ${limitedDays.length} days for ${months} month(s) range`);
      
      // Reset visible days
      setVisibleDays([]);
      
      // End loading state
      setLoading(false);
      
      // For data, use animation with consistent speed regardless of dataset size
      const batchSize = 1; // Always add 1 day at a time for consistent animation
      const delay = DAY_ANIMATION_DELAY; // Use consistent delay for all animations
      
      // Animation function for days
      let currentIndex = 0;
      
      const animateNextBatch = () => {
        if (currentIndex < limitedDays.length) {
          // Calculate end index for this batch
          const endIndex = Math.min(currentIndex + batchSize, limitedDays.length);
          // Get days for this batch
          const daysToAdd = limitedDays.slice(currentIndex, endIndex);
          
          // Add these days to visible days
          setVisibleDays(prev => [...prev, ...daysToAdd]);
          
          // Update current index
          currentIndex = endIndex;
          
          // Schedule next batch
          animationTimeoutRef.current = setTimeout(animateNextBatch, delay);
          
          // Always scroll to the right to keep the animation in focus
          if (scrollContainerRef.current) {
            // Ensure smooth scrolling to the right edge
            setTimeout(() => {
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
              }
            }, 10);
          }
        } else {
      // Animation complete
      setAnimating(false);
      
      // After animation completes, generate and send suggestions to parent
      const daysRange = parseInt(months) * 30; // Convert months to days
      const newSuggestions = getRandomSuggestions(daysRange);
      
      // Notify parent component about new suggestions
      if (onSuggestionsUpdate) {
        console.log("Calling onSuggestionsUpdate with:", newSuggestions);
        onSuggestionsUpdate(newSuggestions);
      } else {
        console.log("onSuggestionsUpdate callback is not defined");
      }
        }
      };
      
      // Start animation after a short delay
      if (limitedDays.length > 0) {
        console.log("Starting animation for days");
        animationTimeoutRef.current = setTimeout(animateNextBatch, 300); // Initial delay
      } else {
        console.log("No days to animate");
        setAnimating(false);
      }
    }, 1000); // Simulate loading for 1 second
  };

  // Function to render squares for a specific date and transactions
  const renderSquares = (date: string, transactions: Transaction[]) => {
    const balance = dailyBalances[date] || 0;
    const absBalance = Math.abs(balance);
    const squareCount = Math.ceil(absBalance / AMOUNT_PER_SQUARE);
    
    // Separate income and expense transactions
    const incomeTransactions = transactions.filter(t => t.amount > 0);
    const expenseTransactions = transactions.filter(t => t.amount < 0);
    
    // Group expense transactions by category
    const expenseCategoryCounts: Record<Category, number> = expenseTransactions.reduce((acc, transaction) => {
      const category = transaction.category;
      const amount = Math.abs(transaction.amount);
      acc[category] = (acc[category] || 0) + amount;
      return acc;
    }, {} as Record<Category, number>);
    
    // Calculate squares per expense category
    const squaresPerExpenseCategory: Record<Category, number> = Object.entries(expenseCategoryCounts).reduce((acc, [category, amount]) => {
      acc[category as Category] = Math.ceil(amount / AMOUNT_PER_SQUARE);
      return acc;
    }, {} as Record<Category, number>);
    
    // Calculate total income amount and squares needed
    const totalIncome = incomeTransactions.reduce((sum, t) => sum + t.amount, 0);
    const incomeSquaresCount = Math.ceil(totalIncome / AMOUNT_PER_SQUARE);
    
    // Create array of squares with their categories
    const squares: { category: Category; isIncome: boolean; colorIndex?: number }[] = [];
    
    // Add expense squares
    Object.entries(squaresPerExpenseCategory).forEach(([category, count]) => {
      for (let i = 0; i < count; i++) {
        squares.push({ category: category as Category, isIncome: false });
      }
    });
    
    // Add income squares with varying purple shades
    for (let i = 0; i < incomeSquaresCount; i++) {
      // Assign different purple shades based on position
      const colorIndex = Math.min(Math.floor(i / 2), incomeAmountColors.length - 1);
      squares.push({ 
        category: 'income', 
        isIncome: true,
        colorIndex
      });
    }
    
    // Limit squares to MAX_SQUARES_PER_COLUMN
    const limitedSquares = squares.slice(0, MAX_SQUARES_PER_COLUMN);
    
    return (
      <div className="flex flex-col-reverse">
        {limitedSquares.map((square, index) => (
          <div
            key={`${date}-${index}`}
            className={`${square.isIncome ? incomeAmountColors[square.colorIndex || 0] : categoryColors[square.category]} transition-all duration-300 ease-in-out`}
            style={{
              width: SQUARE_SIZE,
              height: SQUARE_SIZE,
              margin: SQUARE_GAP,
            }}
            title={`${square.category}: €${AMOUNT_PER_SQUARE} ${square.isIncome ? '(income)' : '(expense)'}`}
          />
        ))}
        {squareCount > MAX_SQUARES_PER_COLUMN && (
          <div 
            className="text-xs text-center w-full mt-1"
            style={{ width: SQUARE_SIZE + 2 * SQUARE_GAP }}
          >
            +{squareCount - MAX_SQUARES_PER_COLUMN}
          </div>
        )}
      </div>
    );
  };

  // Format date for display as day number (1-30)
  const formatDate = (dateString: string, index: number) => {
    // Return the day number with a more descriptive format
    return `D${index + 1}`;
  };

  // No automatic data loading on initial render

  return (
    <Card className="w-full bg-black text-gray-200 border-gray-800">
      <CardHeader className="pb-2">
        <CardTitle className="flex flex-col md:flex-row gap-4">
          <span className="text-body-sm font-semibold">Previsione Comportamentale</span>
          <div className="flex flex-col items-center w-full md:w-auto">
            <div className="text-xs text-gray-400 mb-2">Seleziona periodo di previsione</div>
            <div className="flex flex-wrap justify-center gap-2">
              {periodOptions.map((option) => (
                <div key={option.value} className="flex flex-col items-center">
                  <Button
                    variant="default"
                    onClick={() => loadData(option.value)}
                    disabled={loading || animating}
                    className={`mb-1 w-24 ${monthRange === option.value ? 'bg-primary/80' : 'bg-primary'} hover:bg-primary/60 text-primary-foreground`}
                    size="sm"
                  >
                    {option.label}
                  </Button>
                  <Label className="text-xs text-gray-500">{option.forecast}</Label>
                </div>
              ))}
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="flex flex-col space-y-2">
          <div className="relative w-full overflow-hidden border border-gray-800 rounded-md h-auto">
            <div 
              ref={scrollContainerRef}
              className="pb-2 overflow-x-auto overflow-y-auto min-h-[180px] flex items-center justify-center"
              style={{ maxWidth: "100%", overflowX: "auto", scrollbarWidth: "thin", height: "auto" }}
            >
              {loading ? (
                <div className="text-center w-full">
                  <div className="text-xl font-bold mb-2 text-gray-300">Loading customer {customerNumber}</div>
                  <div className="text-sm text-gray-500">Please wait...</div>
                </div>
              ) : visibleDays.length > 0 ? (
                <div className="flex min-w-max h-auto" style={{ columnGap: `${COLUMN_GAP}px` }}>
                  {visibleDays.map((date, index) => (
                    <div 
                      key={date} 
                      className="flex flex-col items-center animate-fadeIn"
                    >
                      <div className="text-xs mb-1 text-gray-400">{formatDate(date, index)}</div>
                      {renderSquares(date, groupedTransactions[date])}
                      <div className="text-[8px] mt-1" style={{ width: SQUARE_SIZE * 2 }}>
                        <span className={dailyBalances[date] > 0 ? "text-primary" : "text-gray-500"}>
                          {Math.round(dailyBalances[date])}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  Nessun dato disponibile
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BankStatementHistogram;
