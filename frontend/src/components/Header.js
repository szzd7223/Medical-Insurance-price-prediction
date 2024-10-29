// src/components/Header.js
import React from 'react';
import { HeartPulse } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <HeartPulse className="h-8 w-8 text-red-500" />
            <span className="ml-2 text-xl font-semibold text-gray-800">
              HealthInsure Predictor
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
