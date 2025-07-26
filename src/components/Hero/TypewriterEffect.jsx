import React, { useState, useEffect, useMemo } from 'react';
import heroData from "../../data/heroData"
const TypewriterEffect = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const roles = useMemo(() => heroData, []);

  useEffect(() => {
    const currentText = roles[currentRole].text;
    let timeout;

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole, roles]);

  const currentRoleData = roles[currentRole];
  const IconComponent = currentRoleData.icon;

  return (
    <div className={`flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium transition-all duration-500 ${currentRoleData.color}`}>
      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 animate-pulse" />
      <span className="transform transition-all duration-500 min-w-0">
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  );
};

export default TypewriterEffect;