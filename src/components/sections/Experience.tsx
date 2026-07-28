import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, Download } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  certificateUrl: string;
  fileName: string;
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 'cttc',
      role: 'AI & ML Intern',
      company: 'CTTC, Bhubaneswar',
      duration: 'May 2025 – July 2025',
      location: 'Bhubaneswar, Odisha',
      description: [
        'Developed a Movie Recommendation System using Machine Learning and Natural Language Processing (NLP).',
        'Worked on training and integrating models with TensorFlow, OpenCV, and Scikit-learn for computer vision and recommendation algorithms.',
        'Conducted data preprocessing, feature engineering, and constructed personalized engines matching user interest profiles.',
        'Gained hands-on experience applying neural network configurations and data analysis pipelines to real-world AI applications.',
      ],
      certificateUrl: '/CTTC_AI_ML_Certificate.pdf',
      fileName: 'CTTC_AI_ML_Internship_Certificate.pdf'
    },
    {
      id: 'ocac',
      role: 'Core Java Intern',
      company: 'Odisha Computer Application Centre (OCAC)',
      duration: '1st July 2024 – 14th August 2024',
      location: 'Bhubaneswar, Odisha',
      description: [
        'Worked on Java programming fundamentals, algorithmic puzzles, and object-oriented application design.',
        'Refined debugging and problem-solving techniques through active codebase refactoring.',
        'Implemented features utilizing core Java paradigms including OOP principles, Collections Framework, and custom Exception Handling structures.',
        'Created optimized console/backend application prototypes showcasing scalable flow architectures.',
      ],
      certificateUrl: '/OCAC_Java_Certificate.pdf',
      fileName: 'OCAC_Java_Internship_Certificate.pdf'
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] bg-accent ambient-orb animate-pulse-glow" style={{ animationDuration: '15s' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Internship Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
          <p className="text-sm text-theme-sec mt-4">
            A review of my industry internship engagements, practical works, and verified credentials.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline Marker Bullet */}
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-bg-primary border-2 border-primary group-hover:bg-primary transition-colors duration-300 flex items-center justify-center shadow-md">
                <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-white" />
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl glass-panel border-glass transition-all duration-300 group-hover:border-primary/30">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold font-heading text-primary group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-theme-sec mt-1 flex items-center">
                      <Briefcase className="w-4 h-4 text-theme-sec mr-2" />
                      <span>{exp.company}</span>
                    </h4>
                  </div>

                  {/* Duration Tag */}
                  <div className="flex flex-col items-end text-xs text-theme-sec space-y-1.5">
                    <span className="flex items-center px-2.5 py-1 rounded bg-theme-bg-sec/80 border border-glass font-medium">
                      <Calendar className="w-3.5 h-3.5 mr-1.5 text-primary" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center text-[10px] text-theme-muted">
                      <MapPin className="w-3 h-3 mr-1" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Job Duties List */}
                <ul className="mt-6 space-y-3 text-xs md:text-sm text-theme-sec leading-relaxed">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start">
                      <span className="inline-block p-1 mr-2.5 rounded bg-primary/10 text-primary mt-0.5">
                        <Award className="w-3.5 h-3.5" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Download Certificate Button Link */}
                <div className="mt-6 pt-4 border-t border-glass flex justify-start">
                  <a
                    href={exp.certificateUrl}
                    download={exp.fileName}
                    className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-xs font-semibold hover:bg-primary hover:text-white transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Digital Certificate</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
