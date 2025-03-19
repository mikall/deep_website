// Define transaction categories
export type Category = 'food' | 'transport' | 'entertainment' | 'utilities' | 'shopping' | 'health' | 'income';

// Define transaction interface
export interface Transaction {
  id: string;
  date: string; // ISO format date
  amount: number; // Amount in euros (positive for income, negative for expenses)
  category: Category;
  description: string;
}

// Helper function to generate a random transaction
const generateRandomTransaction = (date: Date, isIncome: boolean = false): Transaction => {
  const categories: Category[] = ['food', 'transport', 'entertainment', 'utilities', 'shopping', 'health'];
  const incomeDescriptions = ['Salary', 'Freelance work', 'Refund', 'Gift', 'Investment return'];
  const expenseDescriptions: Record<Exclude<Category, 'income'>, string[]> = {
    food: ['Grocery shopping', 'Restaurant', 'Coffee shop', 'Food delivery'],
    transport: ['Fuel', 'Public transport', 'Taxi', 'Car maintenance'],
    entertainment: ['Cinema', 'Concert', 'Subscription', 'Games'],
    utilities: ['Electricity bill', 'Water bill', 'Internet bill', 'Phone bill'],
    shopping: ['Clothes', 'Electronics', 'Home goods', 'Books'],
    health: ['Pharmacy', 'Doctor visit', 'Gym membership', 'Health insurance'],
  };

  // Generate a random ID
  const id = Math.random().toString(36).substring(2, 11);
  
  // Format the date correctly to ensure it's in the local timezone
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  
  if (isIncome) {
    // For income, generate amounts between 500 and 2000 with more variance
    const baseAmount = 500 + Math.floor(Math.random() * 1500);
    // Round to integer (no decimal places)
    const amount = Math.round(baseAmount);
    
    return {
      id,
      date: formattedDate,
      amount,
      category: 'income',
      description: incomeDescriptions[Math.floor(Math.random() * incomeDescriptions.length)],
    };
  } else {
    // Select a random category
    const category = categories[Math.floor(Math.random() * categories.length)] as Exclude<Category, 'income'>;
    
    // Generate expense amount with an average around 30-40 euros per transaction
    // (with 1-3 transactions per day, this will average around 100 euros per day)
    
    // Use a distribution that favors smaller amounts but allows for occasional larger expenses
    let amount;
    
    // 70% chance of small expense (5-50 euros)
    if (Math.random() < 0.7) {
      amount = -(5 + Math.random() * 45);
    } 
    // 25% chance of medium expense (50-150 euros)
    else if (Math.random() < 0.95) {
      amount = -(50 + Math.random() * 100);
    }
    // 5% chance of large expense (150-300 euros)
    else {
      amount = -(150 + Math.random() * 150);
    }
    
    // Round to integer (no decimal places)
    amount = Math.round(amount);
    
    return {
      id,
      date: formattedDate,
      amount,
      category,
      description: expenseDescriptions[category][Math.floor(Math.random() * expenseDescriptions[category].length)],
    };
  }
};

// Generate transactions for the requested number of days
export const generateTransactionsData = (monthsValue: number = 1): Transaction[] => {
  const transactions: Transaction[] = [];
  
  // Convert months value to exact number of days
  // 1 month = 30 days, 3 months = 90 days, 6 months = 180 days
  const daysToGenerate = monthsValue * 30;
  
  console.log(`Generating data for ${daysToGenerate} days`);
  
  // Generate a random starting balance between -500 and 2000
  let runningBalance = Math.floor(Math.random() * 2500) - 500;
  console.log(`Starting balance: ${runningBalance}`);
  
  // Start date (today - daysToGenerate)
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - daysToGenerate + 1); // +1 to include today
  startDate.setHours(0, 0, 0, 0);
  
  // End date (today)
  const endDate = new Date();
  endDate.setHours(23, 59, 59, 999);
  
  console.log(`Generating data from ${startDate.toISOString()} to ${endDate.toISOString()}`);
  
  // Pre-select income days (max 3 per 30-day period)
  const incomeDaysPerPeriod = Math.floor(Math.random() * 3) + 1; // 1-3 income days per period
  const incomeDays: Date[] = [];
  
  // Select income days across the entire period
  for (let i = 0; i < monthsValue; i++) {
    for (let j = 0; j < incomeDaysPerPeriod; j++) {
      // Random day within this 30-day period
      const randomDayOffset = Math.floor(Math.random() * 30);
      const incomeDate = new Date(startDate);
      incomeDate.setDate(startDate.getDate() + i * 30 + randomDayOffset);
      incomeDays.push(incomeDate);
    }
  }
  
  console.log(`Selected ${incomeDays.length} income days`);
  
  // Generate transactions for each day
  let totalBalance = 0;
  const currentDate = new Date(startDate);
  
  // Generate exactly daysToGenerate days
  for (let day = 0; day < daysToGenerate; day++) {
    const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Check if this is a designated income day
    const isIncomeDay = incomeDays.some(date => 
      date.getFullYear() === currentDate.getFullYear() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getDate() === currentDate.getDate()
    );
    
    // Check if this is a Sunday (day with no expenses)
    const isSunday = dayOfWeek === 0;
    
    // If it's a Sunday, we'll only generate income transactions (if it's an income day)
    // Otherwise, we'll generate both income and expense transactions
    if (isSunday) {
      console.log(`Day ${currentDate.getDate()} is a Sunday - no expenses`);
      
      // If it's also an income day, generate just the income transaction
      if (isIncomeDay) {
        const transaction = generateRandomTransaction(new Date(currentDate), true);
        transactions.push(transaction);
        
        // Update the balance
        totalBalance += transaction.amount;
      }
    } else {
      // For non-Sundays, generate 1-3 transactions per day
      const transactionsCount = Math.floor(Math.random() * 3) + 1;
      
      for (let i = 0; i < transactionsCount; i++) {
        // If it's an income day, 1 transaction will be income
        // Otherwise, all transactions are expenses
        const isIncome = isIncomeDay && i === 0;
        const transaction = generateRandomTransaction(new Date(currentDate), isIncome);
        transactions.push(transaction);
        
        // Update the balance
        totalBalance += transaction.amount;
      }
    }
    
    // Move to the next day
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  // Update running balance
  runningBalance += totalBalance;
  console.log(`End balance: ${runningBalance}`);
  
  return transactions;
};

// Note: We no longer export a default set of transactions
// Instead, we generate them on demand with the specified month range

// Helper function to get transactions from X months ago until today
export const getTransactionsForMonthRange = (
  data: Transaction[],
  startMonthsAgo: number
): Transaction[] => {
  const today = new Date();
  
  // Calculate start date (X months ago from today)
  const startDate = new Date(today);
  startDate.setMonth(today.getMonth() - startMonthsAgo);
  startDate.setHours(0, 0, 0, 0);
  
  // Calculate end date (today)
  const endDate = new Date(today);
  endDate.setHours(23, 59, 59, 999);
  
  // Filter transactions within the date range
  return data.filter(transaction => {
    const transactionDate = new Date(transaction.date);
    return transactionDate >= startDate && transactionDate <= endDate;
  });
};

// Helper function to group transactions by date
export const groupTransactionsByDate = (transactions: Transaction[]): Record<string, Transaction[]> => {
  // First, create a map of all dates in the range
  const dateMap: Record<string, Transaction[]> = {};
  
  // If no transactions, return empty object
  if (transactions.length === 0) {
    return dateMap;
  }
  
  // Find min and max dates in transactions
  const dates = transactions.map(t => new Date(t.date));
  const minDate = new Date(Math.min(...dates.map(d => d.getTime())));
  const maxDate = new Date(Math.max(...dates.map(d => d.getTime())));
  
  // Create a date range from min to max date
  const currentDate = new Date(minDate);
  currentDate.setHours(0, 0, 0, 0);
  
  // Loop through all dates in the range and initialize empty arrays
  while (currentDate <= maxDate) {
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;
    
    dateMap[dateString] = [];
    
    // Move to next day
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 1);
    currentDate.setTime(nextDate.getTime());
  }
  
  // Now add all transactions to their respective dates
  transactions.forEach(transaction => {
    dateMap[transaction.date].push(transaction);
  });
  
  return dateMap;
};

// Helper function to calculate daily balances
export const calculateDailyBalances = (transactions: Transaction[]): Record<string, number> => {
  const groupedTransactions = groupTransactionsByDate(transactions);
  const result: Record<string, number> = {};
  
  Object.keys(groupedTransactions).sort().forEach(date => {
    const dailyTransactions = groupedTransactions[date];
    const dailyBalance = dailyTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);
    result[date] = dailyBalance;
  });
  
  return result;
};
