import React from 'react';
import { User, GraduationCap, MapPin, Trophy, Star, Award, Code, Brain, Sparkles } from 'lucide-react';

const AboutMainContent = ({ activeTab }) => {
  const interests = [
    { icon: Code, name: 'Clean Code', description: 'Writing maintainable and efficient code' },
    { icon: Brain, name: 'AI/ML', description: 'Exploring intelligent solutions' },
    { icon: Sparkles, name: 'Innovation', description: 'Creating impactful digital products' },
    { icon: User, name: 'User Experience', description: 'Designing intuitive interfaces' },
  ];

  return (
    <div className="lg:col-span-2 order-2 lg:order-1">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-blue-100 h-full">
        {activeTab === 'overview' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Who I Am
              </h3>
            </div>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              I'm a passionate web and AI/ML developer currently pursuing my studies in Computer Science. I enjoy
              building responsive applications with{' '}
              <span className="font-semibold text-blue-600">web development</span>,
              
              <span className="font-semibold text-green-600"> database management</span>, along with
              <span className="font-semibold text-orange-600"> problem solving</span> and exploring intelligent solutions with
              <span className="font-semibold text-indigo-600"> machine learning</span>.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Focused on clean design and exceptional user experience, I'm constantly learning and striving to craft impactful
              digital products that make a difference.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              {interests.map((interest, index) => {
                const IconComponent = interest.icon;
                return (
                  <div
                    key={interest.name}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="min-w-0">
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{interest.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{interest.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {activeTab === 'education' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Education Journey
              </h3>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 leading-tight">
                        Bachelor of Technology in Computer Science and Engineering
                      </h4>
                      <div className="flex items-start sm:items-center gap-2 text-gray-600 mb-2 flex-wrap">
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 sm:mt-0" />
                        <span className="text-sm sm:text-base">VIT University, Vellore</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                        <div className="flex items-center gap-1">
                          <Trophy className="w-4 h-4 text-yellow-600" />
                          <span className="text-blue-600 font-medium text-sm sm:text-base">CGPA: 8.64/10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 leading-tight">
                  Higher Secondary Education (12th Grade)
                </h4>
                <div className="flex items-start sm:items-center gap-2 text-gray-600 mb-2 flex-wrap">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span className="text-sm sm:text-base">Maa Bharti Senior Secondary School</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-600 font-medium text-sm sm:text-base">Percentage: 85.2%</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 leading-tight">
                  Secondary Education (10th Grade)
                </h4>
                <div className="flex items-start sm:items-center gap-2 text-gray-600 mb-2 flex-wrap">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span className="text-sm sm:text-base">Nalanda Acadmey</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-purple-600" />
                  <span className="text-blue-600 font-medium text-sm sm:text-base">Percentage: 91.8%</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMainContent;