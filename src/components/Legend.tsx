"use client";

import React from "react";

const Legend: React.FC = () => {
  return (
    <div className="flex items-center space-x-4 text-xs text-gray-400">
      <div className="flex items-center">
        <div className="w-3 h-3 bg-gray-600 mr-1"></div>
        <span>Expenses</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 bg-purple-500 mr-1"></div>
        <span>Income</span>
      </div>
    </div>
  );
};

export default Legend;
