import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { BackgroundGrid } from './components/BackgroundGrid';

function App() {
  return (
    <div className="min-h-screen bg-[#2B2E3B] text-white">
      <Navigation />
      <Hero />
      <BackgroundGrid />
    </div>
  );
}

export default App;