import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, Server, Brain, Code } from 'lucide-react';
import { Typewriter } from '../Typewriter';

export const Hero: React.FC = () => {
  const roles = [
    'Full Stack MERN Developer',
    'AI/ML Enthusiast',
    'Problem Solver',
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-primary ambient-orb animate-pulse-glow" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-accent ambient-orb animate-pulse-glow" style={{ animationDuration: '14s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-4 rounded-full glass-panel border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              🚀 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Hi, I am <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent glow-text-cyan">
              Sujit Kumar Malla
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl sm:text-2xl font-semibold text-theme-sec min-h-[40px] flex justify-center lg:justify-start items-center"
          >
            <span className="mr-2 text-theme-muted">I am a</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              <Typewriter words={roles} typingSpeed={80} deletingSpeed={40} delayBetweenWords={2000} />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-theme-sec max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            A passionate final-year Computer Science Engineering student at GIFT Autonomous, Bhubaneswar. Specialized in crafting high-performance MERN Stack applications and designing smart AI/ML solutions.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="flex items-center space-x-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:shadow-primary/20 transition-all hover:scale-105 active:scale-95 group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/Sujit_Kumar_Malla_CV.pdf"
              download="Sujit_Kumar_Malla_CV.pdf"
              className="flex items-center space-x-2 px-6 py-3.5 rounded-full glass-card border-glass text-theme-sec font-semibold hover:border-primary hover:text-primary transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.5
                }
              }
            }}
            className="mt-8 flex justify-center lg:justify-start space-x-5"
          >
            {[
              { icon: <Github className="w-5 h-5" />, href: 'https://github.com/sujitkumarmalla', label: 'GitHub' },
              { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/sujit-kumar-malla-b83248294', label: 'LinkedIn' },
              { icon: <Mail className="w-5 h-5" />, href: 'mailto:sujitmalla000@gmail.com', label: 'Email' },
            ].map((soc, idx) => (
              <motion.a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } }
                }}
                whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full glass-card border-glass text-theme-sec hover:text-primary hover:border-primary transition-all duration-300"
                aria-label={soc.label}
              >
                {soc.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right Side Visual Component (Floating 3D Tech Cards & Portrait) */}
        <div className="lg:col-span-5 flex justify-center items-center relative min-h-[400px] lg:min-h-[500px]">
          
          {/* Central Portrait Image with Glow and Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.04, rotate: 1, transition: { duration: 0.3 } }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full overflow-hidden border-4 border-primary/40 shadow-[0_0_50px_rgba(14,165,233,0.3)] bg-gradient-to-tr from-primary/20 to-secondary/20 p-1.5 cursor-pointer"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-bg-secondary">
              <img 
                src="/sujit.jpg" 
                alt="Sujit Kumar Malla - MERN & AI/ML Developer" 
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.div>

          {/* Floating tech widgets around the central image */}
          {/* MERN Developer tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -12, 0],
              x: [0, -6, 0]
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.2 },
              scale: { duration: 0.8, delay: 0.2 },
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
              x: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }
            }}
            whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
            className="absolute -top-4 -left-4 sm:left-0 z-20 w-[160px] p-3.5 rounded-xl glass-panel border-primary/20 flex items-center space-x-2.5 shadow-lg cursor-pointer"
          >
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold font-heading text-primary">MERN Developer</h4>
              <p className="text-[9px] text-theme-muted">React & Node.js</p>
            </div>
          </motion.div>

          {/* AI/ML tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, 12, 0],
              x: [0, 6, 0]
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.4 },
              scale: { duration: 0.8, delay: 0.4 },
              y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
              x: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }
            }}
            whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
            className="absolute top-12 -right-4 sm:right-0 z-20 w-[160px] p-3.5 rounded-xl glass-panel border-accent/20 flex items-center space-x-2.5 shadow-lg cursor-pointer"
          >
            <div className="p-2 rounded-lg bg-accent/10 text-accent">
              <Brain className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold font-heading text-accent">AI & ML Intern</h4>
              <p className="text-[9px] text-theme-muted">TensorFlow & CV</p>
            </div>
          </motion.div>

          {/* Status/Relocate tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
              x: [0, 8, 0]
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.6 },
              scale: { duration: 0.8, delay: 0.6 },
              y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
              x: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }
            }}
            whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
            className="absolute -bottom-4 left-4 z-20 w-[170px] p-3.5 rounded-xl glass-panel border-secondary/20 flex items-center space-x-2.5 shadow-lg cursor-pointer"
          >
            <div className="p-2 rounded-lg bg-secondary/20 text-secondary">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold font-heading text-theme-sec">Ready to Code</h4>
              <p className="text-[9px] text-theme-muted">MERN & Smart AI models</p>
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* Down arrow link indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-theme-muted hidden sm:block">
        <a href="#about" className="flex flex-col items-center space-y-2 hover:text-primary transition-colors">
          <span className="text-xs uppercase tracking-widest font-heading">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-6 rounded-full bg-muted/40 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1/2 bg-primary rounded-full" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};
