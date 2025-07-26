import React, { useState, useEffect } from "react";
import FooterBackground from '../components/Footer/FooterBackground';
import FooterBrand from '../components/Footer/FooterBrand';
import FooterQuickLinks from '../components/Footer/FooterQuickLinks';
import FooterSocialLinks from '../components/Footer/FooterSocialLinks';
import FooterBottom from '../components/Footer/FooterBottom';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const quickLinks = [
    { name: "Home", href: "#home", icon: "🏠" },
    { name: "About", href: "#about", icon: "👨‍💻" },
    { name: "Projects", href: "#projects", icon: "🚀" },
    { name: "Skills", href: "#skills", icon: "⚡" },
    { name: "Contact", href: "#contact", icon: "📧" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: 'lucide:linkedin',
      url: "https://www.linkedin.com/in/sahaj-gaur-462477288",
      color: "hover:text-blue-400 hover:shadow-blue-400/20",
    },
    {
      name: "GitHub",
      icon: 'lucide:github',
      url: "https://github.com/sahaj645",
      color: "hover:text-purple-400 hover:shadow-purple-400/20",
    },
    {
      name: "Email",
      icon: 'lucide:mail',
      url: "mailto:sahajgaur2005@gmail.com",
      color: "hover:text-green-400 hover:shadow-green-400/20",
    },
  ];

  const skills = [
    "Full Stack Developer",
    "Web Developer",
    "ML Developer",
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-4 sm:py-6 relative overflow-hidden">
      <FooterBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 py-4">
            <FooterBrand skills={skills} />
            <FooterQuickLinks quickLinks={quickLinks} />
            <FooterSocialLinks socialLinks={socialLinks} />
          </div>
          <FooterBottom currentYear={currentYear} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
