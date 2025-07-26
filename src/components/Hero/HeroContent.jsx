import React from 'react';
import { MapPin } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';

const HeroContent = () => {
  return (
    <>
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-4 border border-white/20">
          <MapPin className="w-4 h-4" />
          <span>India</span>
        </div>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 tracking-tight">
        <span className="inline-block transform hover:scale-105 transition-transform duration-300">
          Sahaj
        </span>
        <span className="inline-block transform hover:scale-105 transition-transform duration-300 delay-75 ml-2 sm:ml-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          Gaur
        </span>
      </h1>
      <div className="h-16 sm:h-20 flex items-center justify-center mb-4">
        <TypewriterEffect />
      </div>
      <p className="text-base sm:text-lg md:text-xl text-white/90 mt-6 mb-12 sm:mb-16 md:mb-20 max-w-2xl mx-auto leading-relaxed px-4">
        Crafting <span className="font-semibold text-blue-200">innovative digital solutions</span> with 
        passion for <span className="font-semibold text-purple-200">clean code</span> and 
        <span className="font-semibold text-pink-200"> exceptional user experiences</span>.
      </p>
    </>
  );
};

export default HeroContent;