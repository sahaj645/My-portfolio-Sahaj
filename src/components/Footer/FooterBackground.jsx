import React from 'react';

const FooterBackground = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
    </>
  );
};

export default FooterBackground;