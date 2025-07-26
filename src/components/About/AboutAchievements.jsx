import React from 'react';
import { Trophy, Star, Award, Code } from 'lucide-react';

const AboutAchievements = () => {
  const achievements = [
    { icon: Trophy, label: 'CGPA', value: '8.64/10', color: 'text-yellow-600' },
    { icon: Star, label: 'Interships', value: '3', color: 'text-blue-600' },

    { icon: Code, label: 'Projects', value: '10+', color: 'text-green-600' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-4 mb-8 sm:mb-12">
      {achievements.map((achievement, index) => {
        const IconComponent = achievement.icon;
        return (
          <div
            key={achievement.label}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/50"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <IconComponent
              className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 ${achievement.color}`}
            />
            <div className="text-lg sm:text-2xl font-bold text-gray-800">
              {achievement.value}
            </div>
            <div className="text-xs sm:text-sm text-gray-600">{achievement.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutAchievements;