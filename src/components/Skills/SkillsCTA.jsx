import React from 'react';
import { Code } from 'lucide-react';

const SkillsCTA = () => {
  return (
    <div className="text-center">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100 max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to Collaborate?
        </h3>
        <p className="text-gray-600 mb-6">
          Let's work together to bring your ideas to life with these technologies
        </p>
        <a
          href="#contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Code className="w-5 h-5 mr-3" />
          Let's Build Something Amazing
        </a>
      </div>
    </div>
  );
};

export default SkillsCTA;