import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, Brain, Filter } from 'lucide-react';
import { TiltCard } from '../TiltCard';

interface Project {
  title: string;
  category: 'mern' | 'ai-ml';
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  highlights: string[];
}

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'mern' | 'ai-ml'>('all');

  const projects: Project[] = [
    {
      title: 'QuickGPT - AI Chat & Image Platform',
      category: 'mern',
      description: 'A full-stack, subscription-based AI platform integrating advanced chat interfaces and image generation capabilities.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini AI', 'Stripe', 'ImageKit'],
      github: 'https://github.com/sujitkumarmalla/QuickGpt-using-mern',
      demo: 'https://quick-gpt-using-mern-6lje.vercel.app/',
      highlights: [
        'Integrated Gemini AI API for conversational logic and creative generation.',
        'Implemented Stripe payment gateway with webhook verification for handling subscription purchases.',
        'Added ImageKit for media asset caching, storage, and optimization.'
      ],
    },
    {
      title: 'Real Estate Management Platform',
      category: 'mern',
      description: 'A complete real estate portal supporting multi-tier roles (Buyer, Seller, Admin) and interactive communication.',
      tags: ['MERN Stack', 'Socket.io', 'JWT Auth', 'OTP Verification', 'REST API'],
      github: 'https://github.com/sujitkumarmalla/Real-Estate-Platform-using-mern_stack',
      highlights: [
        'Built real-time agent-to-buyer messaging using Socket.io web sockets.',
        'Designed property image content analysis modules for automated labeling.',
        'Secured with dual-factor OTP SMS verification and JWT tokens.'
      ],
    },
    {
      title: 'Real-Time Chat Application',
      category: 'mern',
      description: 'A responsive direct messaging interface supporting group threads and user availability states.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
      github: 'https://github.com/sujitkumarmalla/ChatApp-using-MERN',
      demo:"https://chatappbysujitusingmernstack.onrender.com",
      highlights: [
        'Pushed immediate notifications for message updates and new connections.',
        'Implemented tracking states displaying green indicators for online users.',
        'Ensured highly responsive fluid UI layout across mobile screens.'
      ],
    },
    {
      title: 'Smart Attendance System',
      category: 'ai-ml',
      description: 'A Machine Learning KNN multi-class image classification model that recognize face and take attadance.',
      tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'KNN'],
      github: 'https://github.com/sujitkumarmalla/SMART-ATTENDACE-SYSTEM-USING-MACHINE-LEARNING',
      highlights: [
        'Constructed custom Convolutional Neural Networks (CNN) using TensorFlow.',
        'Preprocessed image arrays using OpenCV filter operations.',
        'Achieved around 85% validation classification accuracy.'
      ],
    },
    {
      title: 'IPL Match Win Predictor',
      category: 'ai-ml',
      description: 'A Machine Learning predictor calculating second-innings victory likelihood based on historical records.',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning'],
      github: 'https://github.com/sujitkumarmalla/IPL-WIN-PROBABILITY-PREDICTOR',
      highlights: [
        'Trained models on historical ball-by-ball matches with feature scaling.',
        'Handled live predictor metrics updating calculations on run rates.',
        'Achieved around 83% prediction accuracy.'
      ],
    },
    {
      title: 'Movie Recommendation Engine',
      category: 'ai-ml',
      description: 'An NLP recommendation tool suggesting cinema matches based on genre metadata and synopsis plots.',
      tags: ['Python', 'NLP', 'Scikit-learn', 'Cosine Similarity'],
      github: 'https://github.com/sujitkumarmalla/Movie-Recommendation-System',
      highlights: [
        'Parsed plot elements utilizing Natural Language Processing tokenization.',
        'Calculated distance metrics using custom Cosine Similarity matrices.',
        'Built during AI & ML internship at CTTC Bhubaneswar.'
      ],
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-primary ambient-orb animate-pulse-glow" style={{ animationDuration: '9s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Projects Portfolio
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
          <p className="text-sm text-theme-sec mt-4">
            Explore my selected engineering work ranging from dynamic web products to analytical AI models.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          <span className="text-xs text-theme-muted flex items-center mr-2">
            <Filter className="w-4.5 h-4.5 mr-1" /> Filter by:
          </span>
          {[
            { label: 'All Projects', value: 'all', icon: null },
            { label: 'MERN Stack Apps', value: 'mern', icon: <Code className="w-4 h-4 mr-1.5" /> },
            { label: 'AI & Machine Learning', value: 'ai-ml', icon: <Brain className="w-4 h-4 mr-1.5" /> }
          ].map((btn) => (
            <motion.button
              key={btn.value}
              onClick={() => setFilter(btn.value as any)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center text-xs font-semibold px-4.5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                filter === btn.value
                  ? 'bg-primary border-primary text-white shadow-md'
                  : 'glass-card border-glass text-theme-sec hover:border-primary/50'
              }`}
            >
              {btn.icon}
              {btn.label}
            </motion.button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <TiltCard className="p-6 rounded-2xl glass-card border-glass h-full flex flex-col justify-between" maxTilt={6}>
                  <div>
                    {/* Category Icon Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider ${
                        proj.category === 'mern' 
                          ? 'bg-primary/10 text-primary border border-primary/20' 
                          : 'bg-accent/10 text-accent border border-accent/20'
                      }`}>
                        {proj.category === 'mern' ? 'MERN App' : 'AI / ML'}
                      </span>

                      {/* Code repositories / Demo */}
                      <div className="flex items-center space-x-2">
                        <a 
                          href={proj.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-theme-bg-sec/50 border border-glass text-theme-sec hover:text-primary hover:border-primary transition-colors"
                          aria-label="View Github Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        {proj.demo && (
                          <a 
                            href={proj.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-theme-bg-sec/50 border border-glass text-theme-sec hover:text-primary hover:border-primary transition-colors"
                            aria-label="View Live Project"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-base font-bold font-heading text-theme-sec mb-3">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-theme-sec leading-relaxed mb-6">
                      {proj.description}
                    </p>

                    {/* Highlights bullets list */}
                    <ul className="space-y-2 mb-6 border-t border-glass pt-4">
                      {proj.highlights.map((hl, hlIdx) => (
                        <li key={hlIdx} className="text-[11px] text-theme-muted flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 mr-2 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills/Tags */}
                  <div className="flex flex-wrap gap-1.5 border-t border-glass pt-4">
                    {proj.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[9px] px-2 py-0.5 rounded-md bg-theme-bg-sec border border-glass text-theme-sec font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
