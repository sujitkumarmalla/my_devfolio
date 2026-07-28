import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, Terminal } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Highlight active nav link on scroll
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center space-x-2 text-xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary transition-all hover:scale-105"
          >
            <Terminal className="w-6 h-6 text-primary" />
            <span>Sujit.dev</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1.5 px-3.5 text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-primary' : 'text-theme-sec hover:text-primary'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-primary/10 rounded-full z-0 border border-primary/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full glass-card hover:border-primary transition-all duration-300 text-secondary hover:text-primary"
              aria-label="Toggle Theme Mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>
          </div>

          {/* Mobile menu button / Theme Toggle */}
          <div className="flex items-center md:hidden space-x-3">
            {/* Theme toggle for mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full glass-card text-secondary"
              aria-label="Toggle Theme Mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md glass-card text-secondary hover:text-primary"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-glass absolute top-full left-0 w-full animate-fade-in py-4 px-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-2 text-base font-medium transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'text-primary font-bold border-l-2 border-primary pl-2'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
