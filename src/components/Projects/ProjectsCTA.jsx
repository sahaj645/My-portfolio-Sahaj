import React from 'react';
import { Github } from 'lucide-react';

const ProjectsCTA = () => {
  return (
    <div className="text-center mt-12 sm:mt-16">
      <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Want to see more of my work?</p>
      <a
        href="https://github.com/SahajGaur19"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
      >
        <Github className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
        View All Projects on GitHub
      </a>
    </div>
  );
};

export default ProjectsCTA;