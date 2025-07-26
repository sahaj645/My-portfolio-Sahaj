import React from 'react';
import { Code, Coffee, MapPin } from 'lucide-react';

const FooterBrand = ({ skills }) => {
  return (
    <div className="sm:col-span-2 lg:col-span-2 space-y-4 sm:space-y-6">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Aabhas Gaur
          </span>
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs sm:text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            <span>Full Stack Developer</span>
          </div>
          <div className="flex items-center gap-2">
            <Coffee className="w-4 h-4" />
            <span>Coffee Enthusiast</span>
          </div>
        </div>
      </div>
      <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-full sm:max-w-md">
        Passionate about creating exceptional digital experiences through
        <span className="text-blue-400 font-medium"> clean code</span>,
        <span className="text-purple-400 font-medium"> innovative design</span>, and
        <span className="text-pink-400 font-medium"> cutting-edge technology</span>.
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={skill}
            className="px-2 sm:px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full text-gray-300 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="space-y-2 text-xs sm:text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Kota, Rajasthan, India</span>
        </div>
      </div>
    </div>
  );
};

export default FooterBrand;