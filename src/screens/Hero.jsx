import React, { useState, useEffect } from 'react';
import HeroBackground from '../components/Hero/HeroBackground';
import HeroContent from '../components/Hero/HeroContent';
import HeroActionButtons from '../components/Hero/HeroActionButtons';
import HeroSocialLinks from '../components/Hero/HeroSocialLinks';
import HeroScrollIndicator from '../components/Hero/HeroScrollIndicator';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
      <HeroBackground mousePosition={mousePosition} />
      <div className="text-center px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-6xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <HeroContent />
          <HeroActionButtons />
          <HeroSocialLinks />
        </div>
      </div>
      <HeroScrollIndicator />
    </section>
  );
};

export default Hero;