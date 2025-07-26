import React from 'react';
import { LayoutDashboard, GraduationCap } from 'lucide-react';

const AboutTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'overview', name: 'Overview', icon: LayoutDashboard, color: 'text-blue-500' },
    { id: 'education', name: 'Education', icon: GraduationCap, color: 'text-purple-500' },
  ];

  return (
    <div className="flex justify-center mb-6 sm:mb-8 px-4">
      <div className="bg-white/70 backdrop-blur-sm rounded-full p-1 shadow-lg border border-white/50 w-full sm:w-auto">
        <div className="flex w-full sm:w-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 flex items-center gap-2.5 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <tab.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${activeTab === tab.id ? 'text-white' : tab.color}`} />
              {tab.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTabs;