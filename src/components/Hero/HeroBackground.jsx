import React, { useMemo } from 'react';

const HeroBackground = ({ mousePosition }) => {
  const bubbles = useMemo(() => [...Array(25)].map((_, i) => ({
    id: i,
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${i * 0.5}s`,
      animationDuration: `${3 + Math.random() * 2}s`
    }
  })), []);

  return (
    <>
      <style jsx>{`
        @keyframes floatMove {
          0% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-15px); }
          75% { transform: translateY(-25px) translateX(5px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        
        .bubble-float {
          animation: floatMove 4s ease-in-out infinite;
        }
      `}</style>
      
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: `${mousePosition.x * 0.5}%`,
            top: `${mousePosition.y * 0.5}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-72 h-72 bg-blue-300/10 rounded-full blur-2xl transition-all duration-1500"
          style={{
            right: `${mousePosition.x * 0.3}%`,
            bottom: `${mousePosition.y * 0.3}%`,
            transform: 'translate(50%, 50%)'
          }}
        />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map(bubble => (
          <div
            key={bubble.id}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse bubble-float"
            style={{
              ...bubble.style,
              animationDelay: bubble.style.animationDelay
            }}
          />
        ))}
      </div>
    </>
  );
};

export default HeroBackground;