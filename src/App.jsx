import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './screens/Navbar';
import Hero from './screens/Hero';
import About from './screens/About';
import Skills from './screens/Skills';
import Projects from './screens/Projects';
import Experience from './screens/Experience';
import Achievements from './screens/Achievements';
import Contact from './screens/Contact';
import Footer from './screens/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out',
      offset: 100,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        {/* <Achievements /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;