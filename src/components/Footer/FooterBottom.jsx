import React from 'react';
import { Heart, Coffee } from 'lucide-react';

const FooterBottom = ({ currentYear }) => {
  return (
    <div className="pt-6 sm:pt-8 border-t border-gray-700">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
        <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm text-center md:text-left">
          <span>© {currentYear} Sahaj Gaur. All rights reserved.</span>
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-1 sm:gap-2 text-gray-400 text-xs sm:text-sm">
          <span>Made with</span>
          <Heart className="w-3 sm:w-4 h-3 sm:h-4 text-red-400 animate-pulse" />
          <span>and lots of</span>
          <Coffee className="w-3 sm:w-4 h-3 sm:h-4 text-amber-400" />
          <span>by Aabhas</span>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;