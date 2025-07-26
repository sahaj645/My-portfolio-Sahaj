import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroScrollIndicator = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
      <button
        onClick={scrollToNext}
        className="flex flex-col items-center text-white/70 hover:text-white transition-all duration-300 group"
      >
        <span className="text-xs sm:text-sm mb-2 group-hover:animate-pulse">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
      </button>
    </div>
  );
};

export default HeroScrollIndicator;