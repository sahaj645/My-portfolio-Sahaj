import React from 'react';
import { Icon } from '@iconify/react';

const AchievementsGrid = ({ achievements }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {achievements.map((achievement, index) => (
        <div
          key={achievement.title}
          className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/50 flex flex-col h-full"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay={index * 100}
        >
          <div className="flex items-start sm:items-center mb-3 sm:mb-4">
            <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${achievement.color} shadow-lg mr-3 sm:mr-4 flex-shrink-0`}>
              <Icon icon={achievement.icon} width="24" height="24" className="sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
              {achievement.title}
            </h3>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed flex-grow">
            {achievement.description}
          </p>
          {achievement.link && (
            <a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-purple-600 transition-colors duration-300 text-xs sm:text-sm font-medium mt-auto"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              View Details
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default AchievementsGrid;