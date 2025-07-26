import React from 'react';
import { Sparkles, Download } from 'lucide-react';

const AboutSidebar = () => {
  return (
    <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-blue-100">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-6 sm:w-5 sm:h-5 text-purple-600" />
          Quick Stats
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm sm:text-base">Current Year</span>
            <span className="font-semibold text-gray-800 text-sm sm:text-base">3rd Year</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm sm:text-base">Specialization</span>
            <span className="font-semibold text-gray-800 text-sm sm:text-base">Full Stack </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm sm:text-base">Location</span>
            <span className="font-semibold text-gray-800 text-sm sm:text-base">Rajasthan, IN</span>
          </div>
        </div>
      </div>
      {/* <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-blue-100">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Get My Resume</h3>
        <p className="text-gray-600 text-sm mb-4">
          Download my complete resume with detailed information about my experience and projects.
        </p>
        <a
          href="https://drive.google.com/file/d/1q_nFN8xnTSDoNMbOfsLhXW-XnIY4LRyE/view?usp=sharing"
          download
          className="w-full px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center justify-center gap-2 font-medium text-sm sm:text-base"
        >
          <Download className="w-4 h-4 sm:w-5 sm:h-5" />
          Download Resume
        </a>
      </div> */}
    </div>
  );
};

export default AboutSidebar;