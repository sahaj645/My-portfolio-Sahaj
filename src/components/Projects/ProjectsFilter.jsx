import React from 'react';
import { LayoutGrid, Globe, Smartphone, BrainCircuit } from 'lucide-react';

const ProjectsFilter = ({ categories, category, setCategory }) => {
  const categoryIcons = {
    'All': { icon: LayoutGrid, color: 'text-gray-500' },
    'Web': { icon: Globe, color: 'text-blue-500' },
    'Mobile': { icon: Smartphone, color: 'text-green-500' },
    'ML': { icon: BrainCircuit, color: 'text-purple-500' },
  };

  return (
    <div className="flex justify-center mb-6 sm:mb-8 px-2 sm:px-4">
      <div className="rounded-2xl sm:rounded-full p-1.5 sm:p-2 shadow-lg border border-white/50 w-full sm:w-auto max-w-md sm:max-w-none">
        <div className="grid grid-cols-2 sm:flex gap-1 sm:gap-2">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat]?.icon;
            const color = categoryIcons[cat]?.color || 'text-gray-500';
            return (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`flex-1 justify-center sm:flex-none px-2 sm:px-4 lg:px-6 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm lg:text-base font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2.5 min-w-0 ${
                  category === cat
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                }`}
              >
                {Icon && <Icon className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0 ${category === cat ? 'text-white' : color}`} />}
                <span className="truncate">{cat}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsFilter;