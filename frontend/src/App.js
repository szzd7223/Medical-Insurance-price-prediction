// src/App.js
import React from 'react';
import { Header } from './components/Header';
import { PredictionForm } from './components/PredictionForm';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Medical Insurance Price Prediction
          </h1>
          <PredictionForm />
        </div>
      </main>
    </div>
  );
};

export default App;
