import React from 'react';
import { Zap } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="px-4 py-3 flex items-center justify-between max-w-7xl mx-auto">
      <div className="flex items-center space-x-8">
        <a href="#" className="flex items-center space-x-2">
          <Zap className="w-6 h-6" />
          <span className="font-semibold text-lg">StackBlitz</span>
        </a>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-gray-300">Docs</a>
          <a href="#" className="hover:text-gray-300">Pricing</a>
          <a href="#" className="hover:text-gray-300">Enterprise</a>
          <a href="#" className="hover:text-gray-300">WebContainers</a>
          <a href="#" className="hover:text-gray-300">Blog</a>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <a href="#" className="flex items-center space-x-1">
          <span className="bg-white text-black text-xs px-2 py-0.5 rounded-full">NEW</span>
          <span className="text-sm">Try Bolt<span className="text-[#00F2FE]">.new</span></span>
        </a>
        <a href="#" className="hidden md:block px-4 py-2 rounded-lg text-white hover:bg-gray-700">Sign in</a>
        <a href="#" className="px-4 py-2 rounded-lg bg-[#00F2FE] text-black hover:bg-[#00D8E2] transition-colors">
          Get started
        </a>
      </div>
    </nav>
  );
}