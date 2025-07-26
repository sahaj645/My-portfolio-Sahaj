import React from 'react';
import { Icon } from '@iconify/react';

const ContactInfo = ({ socialLinks }) => {
  return (
    <div
      className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/50"
      data-aos="fade-left"
      data-aos-duration="600"
      data-aos-delay="200"
    >
      <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 sm:mb-6">
        Get in Touch
      </h3>
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg sm:rounded-xl">
          <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs sm:text-sm text-gray-500 font-medium">Email</p>
            <a
              href="mailto:aabhasgaur14@gmail.com"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-sm sm:text-base break-all"
            >
              aabhasgaur14@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg sm:rounded-xl">
          <div className="p-2 sm:p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs sm:text-sm text-gray-500 font-medium">Phone</p>
            <a
              href="tel:+919829146140"
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium text-sm sm:text-base"
            >
              +91 9829146140
            </a>
          </div>
        </div>
        <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          {socialLinks.map(link => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
            >
              <Icon icon={link.icon} width="20" height="20" className="sm:w-6 sm:h-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;