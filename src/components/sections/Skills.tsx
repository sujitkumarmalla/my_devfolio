import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Brain, Settings } from 'lucide-react';
import { TiltCard } from '../TiltCard';

interface Skill {
  name: string;
  level: number; // 0-100 percentage for visual fill
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-400',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript (ES6+)', level: 88 },
        { name: 'Python', level: 80 },
      ],
    },
    {
      title: 'Frontend Development',
      icon: <Layout className="w-5 h-5" />,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'React.js', level: 92 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Redux & Context API', level: 85 },
      ],
    },
    {
      title: 'Backend & APIs',
      icon: <Server className="w-5 h-5" />,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Node.js & Express.js', level: 87 },
        { name: 'REST APIs', level: 90 },
        { name: 'Socket.io', level: 83 },
        { name: 'JWT Authentication', level: 88 },
      ],
    },
    {
      title: 'Databases',
      icon: <Database className="w-5 h-5" />,
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'MongoDB', level: 89 },
        { name: 'MySQL / SQL', level: 82 },
      ],
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-violet-500 to-fuchsia-500',
      skills: [
        { name: 'TensorFlow & Keras', level: 78 },
        { name: 'Scikit-learn', level: 82 },
        { name: 'OpenCV & Image Processing', level: 75 },
        { name: 'NLP & CNNs', level: 80 },
        { name: 'Pandas & NumPy', level: 85 },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: <Settings className="w-5 h-5" />,
      color: 'from-rose-500 to-orange-500',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Postman', level: 88 },
        { name: 'Vercel & Render', level: 85 },
        { name: 'Cloudinary & ImageKit', level: 80 },
        { name: 'Stripe Integration', level: 75 },
      ],
    },
  ];

  const appIcons = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React", top: "10%", left: "5%", delay: 0 },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", alt: "Node.js", top: "45%", right: "8%", delay: 1.5 },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", alt: "Python", bottom: "15%", left: "10%", delay: 3 },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", alt: "MongoDB", top: "70%", right: "15%", delay: 2 },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind", top: "20%", right: "20%", delay: 0.5 },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", alt: "Java", bottom: "25%", left: "25%", delay: 2.5 },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", alt: "JS", top: "50%", left: "15%", delay: 1 },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[30%] right-[5%] w-[300px] h-[300px] bg-secondary ambient-orb animate-pulse-glow" style={{ animationDuration: '12s' }} />
      <div className="absolute bottom-[20%] left-[5%] w-[250px] h-[250px] bg-primary ambient-orb animate-pulse-glow" style={{ animationDuration: '15s' }} />
      
      {/* Floating App Icons Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {appIcons.map((icon, idx) => (
          <motion.div
            key={idx}
            className="absolute p-1.5 md:p-3 rounded-xl md:rounded-2xl glass-card border-glass shadow-[0_0_15px_rgba(255,255,255,0.1)] flex"
            style={{
              top: icon.top,
              bottom: icon.bottom,
              left: icon.left,
              right: icon.right,
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -15, 0],
              x: [0, 8, -8, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: icon.delay,
              ease: "easeInOut"
            }}
          >
            <img src={icon.src} alt={icon.alt} className="w-5 h-5 md:w-8 md:h-8 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
          <p className="text-sm text-theme-sec mt-4">
            A comprehensive layout of languages, tools, and technical frameworks I specialize in.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <TiltCard className="p-6 rounded-2xl glass-card border-glass h-full flex flex-col justify-between backdrop-blur-3xl" maxTilt={8}>
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.color} text-white`}>
                      {cat.icon}
                    </div>
                    <h3 className="text-base font-bold font-heading text-theme-sec">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills Progress List */}
                  <div className="space-y-4">
                    {cat.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-xs font-medium mb-1.5">
                          <span className="text-theme-sec">{skill.name}</span>
                          <span className="text-theme-muted">{skill.level}%</span>
                        </div>
                        {/* Progress Bar Container */}
                        <div className="h-1.5 w-full bg-theme-bg-sec/35 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                            className={`h-full bg-gradient-to-r ${cat.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating glow tag at the bottom of cards */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span 
                      key={skill.name} 
                      className="text-[9px] px-2 py-0.5 rounded-full bg-theme-bg-sec border border-glass text-theme-sec font-semibold"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
