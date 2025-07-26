import React from 'react';
import AchievementsBackground from '../components/Achievements/AchievementsBackground';
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