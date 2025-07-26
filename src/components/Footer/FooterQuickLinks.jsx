import React from 'react';
import { ArrowRight } from 'lucide-react';

const FooterQuickLinks = ({ quickLinks }) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <h3 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2">
        <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400" />
        Quick Links
      </h3>
      <ul className="space-y-2 sm:space-y-3">
        {quickLinks.map((link, index) => (
          <li
            key={link.name}
            className="transform transition-all duration-300 hover:translate-x-2"
          >
            <a
              href={link.href}
              className="group flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-white/5"
            >
              <span className="text-base sm:text-lg">{link.icon}</span>
              <span className="font-medium text-sm sm:text-base">{link.name}</span>
              <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterQuickLinks;