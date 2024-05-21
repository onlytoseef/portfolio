import './App.css';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Hero from './components/Hero/hero';
import Services from './components/Services/services';
import Career from './components/Career/career';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <Hero />

      <About />

      <Services />

      <Skills />

      <Career />

      <Projects />

      <Contact />
    </div>
  );
}
