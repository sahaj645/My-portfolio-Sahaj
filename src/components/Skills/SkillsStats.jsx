import React from 'react';
import { Trophy, Star, Code, Sparkles } from 'lucide-react';

const SkillsStats = () => {
  const stats = [
    { icon: Trophy, number: '25+', label: 'Technologies', color: 'text-yellow-600' },
    
    { icon: Code, number: '3', label: 'Internships', color: 'text-purple-600' },
    { icon: Sparkles, number: '10+', label: 'Projects Built', color: 'text-green-600' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={stat.label}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/50"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <IconComponent className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              {stat.number}
            </div>
            <div className="text-sm text-gray-600 font-medium">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsStats;