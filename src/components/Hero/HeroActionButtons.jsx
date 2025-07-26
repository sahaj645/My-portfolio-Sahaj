import React from 'react';
import { Download, Mail } from 'lucide-react';

const HeroActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
      <a
        href="https://drive.google.com/file/d/1KOdnQqRC7gWvdQa2_uc5jrBkK76i3Zjh/view?usp=drive_link"
        className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 text-sm sm:text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto"
      >
        <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
        View Resume
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </a>
      <a
        href="#contact"
        className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 text-sm sm:text-base lg:text-lg font-semibold transform hover:-translate-y-1 flex items-center justify-center gap-2 backdrop-blur-sm w-full sm:w-auto"
      >
        <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
        Contact Me
      </a>
    </div>
  );
};

export default HeroActionButtons;