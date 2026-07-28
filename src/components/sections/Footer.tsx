import React from 'react';
import { ArrowUp, Github, Linkedin, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-glass bg-secondary/50 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and credits */}
        <div className="text-center md:text-left">
          <p className="text-sm font-bold font-heading text-secondary">Sujit Kumar Malla</p>
          <p className="text-xs text-muted mt-1.5">
            © {new Date().getFullYear()} Sujit Malla. All rights reserved.
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-secondary font-medium">
          <a href="#hero" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        </div>

        {/* Back to top & Socials */}
        <div className="flex items-center space-x-4">
          {/* Socials */}
          <div className="flex space-x-3">
            {[
              { icon: <Github className="w-4 h-4" />, href: 'https://github.com/sujitkumarmalla', label: 'GitHub' },
              { icon: <Linkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/in/sujit-kumar-malla-b83248294', label: 'LinkedIn' },
              { icon: <Code2 className="w-4 h-4" />, href: 'https://leetcode.com/u/sujitmalla18/', label: 'LeetCode' },
              
            ].map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-card border-glass text-secondary hover:text-primary hover:border-primary transition-all hover:scale-105"
                aria-label={soc.label}
              >
                {soc.icon}
              </a>
            ))}
          </div>

          {/* Scroll top */}
          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded-lg bg-primary text-white hover:scale-105 active:scale-95 transition-all shadow-md shadow-primary/20"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
