import React from 'react';

const AchievementsBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-10 sm:top-20 left-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default AchievementsBackground;