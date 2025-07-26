// import React from 'react';
// import { Icon } from '@iconify/react';

// const Achievements = () => {
//   const achievements = [
//     {
//       title: 'Hackathon Winner',
//       description: 'I won First Prize in Code Cortex for developing an RFID-based smart retail system that enabled queue-free shopping through virtual cart management and QR code-based checkout. The solution streamlined the in-store experience, significantly reducing customer wait times and improving overall shopping efficiency.',
//       icon: 'material-symbols:trophy',
//       link: 'https://example.com',
//       color: 'from-yellow-400 to-amber-500'
//     },
//     // {
//     //   title: 'AWS Certified Developer',
//     //   description: 'Earned the AWS Certified Developer - Associate certification, demonstrating proficiency in cloud development with AWS services.',
//     //   icon: 'logos:aws',
//     //   link: 'https://aws.amazon.com/certification/certified-developer-associate/',
//     //   color: 'from-orange-400 to-red-500'
//     // },
//     {
//       title: 'Introduction to Statistics (Stanford)',
//       description: 'I learned how to analyze and interpret data using statistical thinking, perform exploratory data analysis, apply sampling techniques, and choose appropriate tests of significance. I also gained a solid foundation in probability, regression, the Central Limit Theorem, and methods that support deeper study in data science and machine learning.',
//       icon: 'logos:coursera',
//       link: 'https://aws.amazon.com/certification/certified-developer-associate/',
//       color: 'from-blue-400 to-indigo-500'
//     },
//     {
//       title: 'Introduction to Data Science in Python (University of Michigan)',
//       description: 'I learned the fundamentals of Python for data science, including working with lambdas, CSV files, NumPy, and pandas for data manipulation and cleaning. I gained hands-on experience with Series and DataFrames, using functions like groupby, merge, and pivot tables to analyze tabular data and perform basic inferential statistics.',
//       icon: 'logos:coursera',
//       link: 'https://www.coursera.org/specializations/machine-learning',
//       color: 'from-blue-400 to-indigo-500'
//     },
//     {
//       title: 'Flutter & Dart - The Complete Guide',
//       description: 'I learned to build native mobile apps for Android and iOS using Flutter and Dart from scratch, gaining hands-on experience with core features like Google Maps integration, camera access, and authentication. I also learned to upload images, send push notifications, and advanced concepts to develop fully functional and engaging mobile applications.',
//       icon: 'logos:udemy',
//       link: 'https://codingcompetitions.withgoogle.com/codejam',
//       color: 'from-white-400 to-white-500'
//     },
//     {
//       title: 'The Web Developer BootCamp 2025',
//       description: 'I learned full-stack web development using HTML5, CSS3, and modern JavaScript, gaining skills in creating responsive layouts, handling form validations, and building real-world applications with Node, Express, and MongoDB. I also mastered front-end and back-end concepts like DOM manipulation, authentication, RESTful APIs, deployment, security best practices, and creating full-stack applications with modern tools and frameworks like Bootstrap, Postman, and AJAX.',
//       icon: 'logos:udemy',
//       link: 'https://codingcompetitions.withgoogle.com/codejam',
//       color: 'from-white-400 to-white-500'
//     },
//   ];

//   return (
//     <section id="achievements" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-purple-50 to-pink-50 relative">
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
//         <div className="absolute top-10 sm:top-20 left-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <h2
//           className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 sm:mb-12"
//           data-aos="fade-down"
//           data-aos-duration="600"
//         >
//           Achievements & Certifications
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
//           {achievements.map((achievement, index) => (
//             <div
//               key={achievement.title}
//               className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/50 flex flex-col h-full"
//               data-aos="fade-up"
//               data-aos-duration="600"
//               data-aos-delay={index * 100}
//             >
//               <div className="flex items-start sm:items-center mb-3 sm:mb-4">
//                 <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${achievement.color} shadow-lg mr-3 sm:mr-4 flex-shrink-0`}>
//                   <Icon icon={achievement.icon} width="24" height="24" className="sm:w-8 sm:h-8 text-white" />
//                 </div>
//                 <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
//                   {achievement.title}
//                 </h3>
//               </div>
//               <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed flex-grow">
//                 {achievement.description}
//               </p>
//               {achievement.link && (
//                 <a
//                   href={achievement.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 text-blue-600 hover:text-purple-600 transition-colors duration-300 text-xs sm:text-sm font-medium mt-auto"
//                 >
//                   <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                   View Details
//                 </a>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Achievements;

import React from 'react';
import AchievementsBackground from '../components/Achievements/AchievementsBackground.jsx';
import AchievementsHeader from '../components/Achievements/AchievementsHeader';
import AchievementsGrid from '../components/Achievements/AchievementsGrid';
import achievements from "../data/achievementData"

const Achievements = () => {


  return (
    <section id="achievements" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-purple-50 to-pink-50 relative">
      <AchievementsBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AchievementsHeader />
        <AchievementsGrid achievements={achievements} />
      </div>
    </section>
  );
};

export default Achievements;