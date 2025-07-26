import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const HeroSocialLinks = () => {
  return (
    <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
      <a
        href="https://github.com/AabhasGaur19"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
      >
        <Github className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/aabhas-gaur-13406123a/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
      >
        <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>
  );
};

export default HeroSocialLinks;