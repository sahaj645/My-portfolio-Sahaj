import React from 'react';
import ExperienceBackground from '../components/Experience/ExperienceBackground';
import ExperienceHeader from '../components/Experience/ExperienceHeader';
import ExperienceTimeline from '../components/Experience/ExperienceTimeline';
import experiences from "../data/experienceData"

const Experience = () => {

  return (
    <section id="experience" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-50 to-gray-100 relative">
      <ExperienceBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ExperienceHeader />
        <ExperienceTimeline experiences={experiences} />
      </div>
    </section>
  );
};

export default Experience;