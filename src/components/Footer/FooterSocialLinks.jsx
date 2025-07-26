import React from 'react';
import { Icon } from '@iconify/react';

const FooterSocialLinks = ({ socialLinks }) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <h3 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2">
        <Icon icon="lucide:heart" className="w-4 sm:w-5 h-4 sm:h-5 text-pink-400" />
        Connect
      </h3>
      <div className="space-y-3 sm:space-y-4">
        {socialLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg ${link.color}`}
          >
            <div className="p-1.5 sm:p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300">
              <Icon icon={link.icon} className="w-4 sm:w-5 h-4 sm:h-5" />
            </div>
            <span className="font-medium text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSocialLinks;