import { useEffect, useState } from 'react';
import { Canvas3D } from './components/Canvas3D';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import { CodingProfiles } from './components/sections/CodingProfiles';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { Terminal } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);
  const [loaderText, setLoaderText] = useState('Initializing core protocols...');

  useEffect(() => {
    const steps = [
      { text: 'Loading 3D mesh vectors...', delay: 400 },
      { text: 'Establishing secure MERN link...', delay: 800 },
      { text: 'Running AI recommendation weights...', delay: 1200 },
      { text: 'Connection established. Welcome!', delay: 1500 },
    ];

    steps.forEach((step) => {
      setTimeout(() => {
        setLoaderText(step.text);
      }, step.delay);
    });

    const finishTimeout = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => {
      clearTimeout(finishTimeout);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 bg-[#030712] flex flex-col items-center justify-center text-white px-4">
        <div className="flex flex-col items-center space-y-6 max-w-sm w-full text-center">
          {/* Animated Spinner Icon */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
            <Terminal className="w-6 h-6 text-primary absolute inset-0 m-auto animate-pulse" />
          </div>

          {/* Terminal Console Style Loader Text */}
          <div className="font-mono text-xs text-primary/80 border border-primary/20 bg-primary/5 p-4 rounded-xl w-full min-h-[55px] flex items-center justify-center shadow-inner">
            <span className="animate-pulse mr-1">&gt;</span> {loaderText}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen transition-colors duration-400">
      {/* 3D Particle Canvas Background */}
      <Canvas3D />

      {/* Main Glassmorphic Navigation */}
      <Navbar />

      {/* Pages Container */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <CodingProfiles />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
