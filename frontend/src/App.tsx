import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';

function App() {
  const [isFluid, setIsFluid] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('');

  useEffect(() => {
    const updateIsFluid = () => {
      setIsFluid(window.innerWidth > 1450);
    };

    updateIsFluid();

    window.addEventListener('resize', updateIsFluid);

    return () => {
      window.removeEventListener('resize', updateIsFluid);
    };
  }, []);

  useEffect(() => {
    // Update document title based on activeNavItem
    document.title = `${activeNavItem || 'Intro'} | @AnkitMatth`;
  }, [activeNavItem]);

  return (
    <div className="App">
      <Header setActiveNavItem={setActiveNavItem} />
      <Intro isFluid={isFluid} />
      <Experience isFluid={isFluid} />
      <Achievements isFluid={isFluid} />
      <Skills isFluid={isFluid} />
      <Projects isFluid={isFluid} />
      <Education isFluid={isFluid} />
      <Contact isFluid={isFluid} />
      <Footer />
    </div>
  );
}

export default App;
