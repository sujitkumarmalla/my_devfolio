import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Heart, HelpCircle, Code } from 'lucide-react';
import { TiltCard } from '../TiltCard';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  };

  const educations = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'GIFT Autonomous, Bhubaneswar',
      duration: 'Ongoing',
      grade: 'CGPA: 8.49 / 10',
    },
    {
      degree: 'Intermediate (CHSE Odisha)',
      institution: 'Swadhin Residential Higher Secondary School, Nimapada',
      duration: 'Completed 2023',
      grade: 'Percentage: 84.67%',
    },
    {
      degree: 'Matriculation (BSE Odisha)',
      institution: 'Nayahat High School, Nayahat, Puri',
      duration: 'Completed 2021',
      grade: 'Percentage: 81%',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
          <p className="text-sm text-secondary mt-4">
            Get to know my academic background, core strengths, and what drives me as a software developer.
          </p>
        </div>

        {/* Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Left Column: Personal Summary and Strengths */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <motion.div variants={cardVariants} className="p-6 rounded-2xl glass-panel border-glass">
              <h3 className="text-xl font-bold font-heading text-primary flex items-center space-x-2">
                <Code className="w-5 h-5" />
                <span>Professional Summary</span>
              </h3>
              <p className="text-secondary mt-4 leading-relaxed text-sm">
                I am a passionate Full Stack MERN Developer and AI/ML enthusiast who enjoys building scalable web applications, integrating AI features, and solving real-world problems. I have hands-on experience in React, Node.js, Express.js, MongoDB, machine learning, cloud deployment, and modern web technologies.
              </p>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-xs text-secondary">
                  <MapPin className="w-4 h-4 text-primary mr-2" />
                  <span>Bhubaneswar, Odisha, India</span>
                </div>
                
              </div>
            </motion.div>

            {/* Strengths & Hobbies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div variants={cardVariants} className="p-5 rounded-xl glass-panel border-glass">
                <h4 className="text-sm font-bold font-heading text-primary uppercase tracking-wider">Strengths</h4>
                <ul className="mt-3 space-y-2 text-xs text-secondary">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    Problem-Solving Ability
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    Quick Learning & Adaptability
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    Hardworking
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={cardVariants} className="p-5 rounded-xl glass-panel border-glass">
                <h4 className="text-sm font-bold font-heading text-accent uppercase tracking-wider">Hobbies</h4>
                <ul className="mt-3 space-y-2 text-xs text-secondary">
                  <li className="flex items-center">
                    <Heart className="w-3 h-3 text-accent mr-2" />
                    Coding & Problem Solving
                  </li>
                  <li className="flex items-center">
                    <Heart className="w-3 h-3 text-accent mr-2" />
                    Playing Cricket
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Quick Personal Info Info Box */}
            <motion.div variants={cardVariants} className="p-5 rounded-xl glass-panel border-glass text-xs space-y-2 text-secondary">
              <h4 className="text-sm font-bold font-heading text-secondary mb-3 flex items-center space-x-1.5">
                <HelpCircle className="w-4 h-4" />
                <span>Personal Bio</span>
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <div><span className="text-muted">Born:</span> 23 Aug 2005</div>
                <div><span className="text-muted">Nationality:</span> Indian</div>
                <div className="col-span-2"><span className="text-muted">Languages:</span> English, Hindi, Odia</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Educational Qualifications */}
          <div className="lg:col-span-6">
            <motion.div 
              variants={cardVariants}
              className="p-6 rounded-2xl glass-panel border-glass h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold font-heading text-secondary flex items-center space-x-2">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <span>Educational Qualifications</span>
                </h3>
                
                <div className="mt-6 space-y-6">
                  {educations.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      <TiltCard maxTilt={6} className="p-4 rounded-xl bg-secondary/50 border border-glass">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-sm font-bold text-primary">{edu.degree}</h4>
                            <p className="text-xs text-secondary mt-1">{edu.institution}</p>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold whitespace-nowrap">
                            {edu.duration}
                          </span>
                        </div>
                        <div className="mt-3 text-xs font-semibold text-accent">
                          {edu.grade}
                        </div>
                      </TiltCard>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
