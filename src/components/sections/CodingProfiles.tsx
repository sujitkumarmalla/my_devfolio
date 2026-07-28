import { motion } from 'framer-motion';
import { Code2, ExternalLink, Flame, CheckCircle2 } from 'lucide-react';
import { TiltCard } from '../TiltCard';

export const CodingProfiles: React.FC = () => {
  const difficultyStats = [
    { label: 'Easy', count: '45+', solvedColor: 'bg-emerald-500', textColor: 'text-emerald-500', pct: '45%' },
    { label: 'Medium', count: '50+', solvedColor: 'bg-amber-500', textColor: 'text-amber-500', pct: '50%' },
    { label: 'Hard', count: '5+', solvedColor: 'bg-rose-500', textColor: 'text-rose-500', pct: '5%' }
  ];

  const topics = [
    'Array',
    'Linked List',
    'String',
    'Stack & Queue',
    'Trees',
    'Graphs',
    'Recursion & Backtracking',
    'Algorithms'
  ];

  return (
    <section id="coding-profiles" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-accent ambient-orb animate-pulse-glow" style={{ animationDuration: '13s' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Coding Profiles & DSA
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
          <p className="text-sm text-theme-sec mt-4">
            My algorithmic problem-solving indicators and achievements on DSA platforms.
          </p>
        </div>

        {/* Central Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TiltCard className="p-6 sm:p-8 rounded-3xl glass-panel border-glass" maxTilt={3}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Side: LeetCode Brand Visual */}
              <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shadow-inner">
                  <Code2 className="w-9 h-9" />
                </div>

                <div>
                  <h3 className="text-2xl font-black font-heading text-theme-text">LeetCode</h3>
                  <p className="text-xs text-theme-muted mt-1">Algorithmic Problem Solving</p>
                </div>

                <a
                  href="https://leetcode.com/u/sujitmalla18/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-30 pointer-events-auto inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-amber-500 text-white font-semibold text-xs transition-transform hover:scale-105 active:scale-95 shadow-md shadow-amber-500/20"
                >
                  <span>View LeetCode Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Right Side: DSA stats breakdown */}
              <div className="md:col-span-7 space-y-6">
                
                {/* Total Solved Indicator */}
                <div className="flex items-center justify-between border-b border-glass pb-3">
                  <div className="flex items-center space-x-2">
                    <Flame className="w-5 h-5 text-amber-500 animate-pulse" />
                    <span className="text-sm font-bold text-theme-sec">Total DSA Problems Solved</span>
                  </div>
                  <span className="text-2xl font-black font-heading text-primary">100+</span>
                </div>

                {/* Difficulty Bars (Easy, Medium, Hard counters) - Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {difficultyStats.map((stat) => (
                    <div key={stat.label} className="p-3.5 rounded-xl bg-theme-bg-sec/50 border border-glass flex flex-col justify-between">
                      <div className="flex justify-between items-center text-xs font-semibold">
                        <span className="text-theme-muted">{stat.label}</span>
                        <span className={stat.textColor}>{stat.count}</span>
                      </div>
                      
                      {/* Sub-bar indicator */}
                      <div className="h-1.5 w-full bg-theme-bg-sec/85 rounded-full mt-2.5 overflow-hidden">
                        <div 
                          className={`h-full ${stat.solvedColor} rounded-full`} 
                          style={{ width: stat.pct }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Flexible Tags / Topics Mastered */}
                <div className="p-5 rounded-2xl bg-theme-bg-sec/35 border border-glass/60 space-y-3">
                  <h4 className="text-xs font-bold text-theme-sec uppercase tracking-wider">
                    Topics Mastered:
                  </h4>
                  
                  <div className="flex flex-wrap gap-2 pt-1">
                    {topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-3 py-1.5 rounded-lg bg-theme-bg-sec border border-glass text-theme-sec font-semibold transition-all hover:border-primary/40 hover:text-primary"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status features list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {[
                    'Time & Space complexity optimized',
                    'Familiar with recursion strategies'
                  ].map((feat) => (
                    <div key={feat} className="flex items-center text-xs text-theme-sec">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};
