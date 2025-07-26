import React from 'react';

const ProjectsHeader = () => {
  return (
    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
        Featured Projects
      </h2>
      <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
        Showcasing innovative solutions and creative implementations across various technologies
      </p>
    </div>
  );
};

export default ProjectsHeader;