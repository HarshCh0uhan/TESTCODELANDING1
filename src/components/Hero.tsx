import React from 'react';

export function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-20 pb-32">
      <h1 className="text-7xl font-light leading-tight max-w-4xl">
        How <span className="bg-[#3B5B81] px-6 py-2 rounded-lg inline-block">design systems</span>
        <br />&amp; <span className="bg-[#3B5B81] px-6 py-2 rounded-lg inline-block">frontend</span> teams
        <br />work together
      </h1>
      
      <p className="mt-8 text-xl text-gray-300 max-w-3xl leading-relaxed">
        Collaborate on web development without the hassle of setting up local 
        environments. StackBlitz lets you <span className="text-white">write</span>, <span className="text-white">run</span>, and <span className="text-white">debug</span> frontend code 
      </p>
    </div>
  );
}