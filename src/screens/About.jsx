import React, { useState, useEffect } from 'react';
import AboutBackground from '../components/About/AboutBackground';
import AboutHeader from '../components/About/AboutHeader';
import AboutAchievements from '../components/About/AboutAchievements';
import AboutTabs from '../components/About/AboutTabs';
import AboutMainContent from '../components/About/AboutMainContent';
import AboutSidebar from '../components/About/AboutSidebar';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="about"
      className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative"
    >
      <AboutBackground />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <AboutHeader />
          <AboutAchievements />
          <AboutTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <AboutMainContent activeTab={activeTab} />
            <AboutSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;