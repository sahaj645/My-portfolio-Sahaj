// import React from 'react';

// const ExperienceTimeline = ({ experiences }) => {
//   return (
//     <div className="relative">
//       <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full"></div>
//       <div className="md:hidden absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full"></div>
//       {experiences.map((exp, index) => (
//         <div
//           key={index}
//           className={`flex flex-col md:flex-row items-start md:items-center mb-8 sm:mb-12 relative ${
//             index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//           }`}
//           data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
//           data-aos-duration="600"
//           data-aos-delay={index * 100}
//         >
//           <div className="md:hidden absolute left-2.5 top-6 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-2 border-white shadow-lg"></div>
//           <div className="w-full md:w-5/12 ml-8 md:ml-0 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-white/50 hover:shadow-2xl transition-all duration-300">
//             <div className={`inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r ${exp.color} text-white rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4`}>
//               {exp.duration}
//             </div>
//             <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
//               {exp.role}
//             </h3>
//             <p className="text-base sm:text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">{exp.company}</p>
//             <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
//               {exp.description}
//             </p>
//             <div className="flex flex-wrap gap-1.5 sm:gap-2">
//               {exp.techStack.map(tech => (
//                 <span
//                   key={tech}
//                   className="px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full font-medium border border-blue-200"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//           <div className="hidden md:flex w-0 md:w-2/12 justify-center">
//             <div className={`w-6 h-6 bg-gradient-to-r ${exp.color} rounded-full shadow-lg border-4 border-white`}></div>
//           </div>
//           <div className="hidden md:block w-0 md:w-5/12"></div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ExperienceTimeline;

import React from 'react';

const ExperienceTimeline = ({ experiences }) => {
  return (
    <div className="relative px-2 sm:px-4">
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full"></div>
      <div className="md:hidden absolute left-3 sm:left-4 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full"></div>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-start md:items-center mb-6 sm:mb-8 lg:mb-12 relative ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
          data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          data-aos-duration="600"
          data-aos-delay={index * 100}
        >
          <div className="md:hidden absolute left-2 sm:left-2.5 top-4 sm:top-6 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-2 border-white shadow-lg"></div>
          <div className="w-full md:w-5/12 ml-6 sm:ml-8 md:ml-0 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 lg:p-6 border border-white/50 hover:shadow-2xl transition-all duration-300">
            <div className={`inline-block px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 bg-gradient-to-r ${exp.color} text-white rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3 lg:mb-4`}>
              {exp.duration}
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 leading-tight">
              {exp.role}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-3">{exp.company}</p>
            <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-1.5 lg:gap-2">
              {exp.techStack.map(tech => (
                <span
                  key={tech}
                  className="px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-3 lg:py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full font-medium border border-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden md:flex w-0 md:w-2/12 justify-center">
            <div className={`w-6 h-6 bg-gradient-to-r ${exp.color} rounded-full shadow-lg border-4 border-white`}></div>
          </div>
          <div className="hidden md:block w-0 md:w-5/12"></div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;