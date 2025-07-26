import React, { useState, useEffect } from 'react';
import SkillsBackground from '../components/Skills/SkillsBackground';
import SkillsHeader from '../components/Skills/SkillsHeader';
import SkillsTabs from '../components/Skills/SkillsTabs';
import SkillsStats from '../components/Skills/SkillsStats';
import SkillsCTA from '../components/Skills/SkillsCTA';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Frontend');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative"
    >
      <SkillsBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SkillsHeader />
          <SkillsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <SkillsStats />
          <SkillsCTA />
        </div>
      </div>
    </section>
  );
};

export default Skills;