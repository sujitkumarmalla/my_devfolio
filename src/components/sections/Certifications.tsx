import React from 'react';
import { Award, ShieldCheck, GraduationCap, Download } from 'lucide-react';
import { TiltCard } from '../TiltCard';
import { motion } from 'framer-motion';

interface Certification {
  title: string;
  issuer: string;
  type: 'official' | 'nptel' | 'training';
  credentialUrl?: string;
  fileName?: string;
  badgeColor: string;
}

export const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: 'MongoDB Certified – CRUD Operations',
      issuer: 'MongoDB (Official)',
      type: 'official',
      credentialUrl: '/MongoDB_CRUD_Certificate.pdf',
      fileName: 'MongoDB_CRUD_Operations_Certificate.pdf',
      badgeColor: 'from-emerald-500 to-green-600',
    },
    {
      title: 'Database foundations-English',
      issuer: 'Oracle Academy',
      type: 'official',
      badgeColor: 'from-red-600 to-orange-700',
    },
    {
      title: 'MERN Stack Developer Certification',
      issuer: 'UNSTOP',
      type: 'official',
      badgeColor: 'from-blue-500 to-indigo-600',
      credentialUrl: '/a5941c92-22ca-40e8-bf1e-4c1ca267eb55.pdf',
      fileName: 'a5941c92-22ca-40e8-bf1e-4c1ca267eb55.pdf',
    },
    {
      title: 'NPTEL Elite – Affective Computing',
      issuer: 'IIT Madras',
      type: 'nptel',
      credentialUrl: '/NPTEL_Affective_Computing.pdf',
      fileName: 'NPTEL_Affective_Computing_Certificate.pdf',
      badgeColor: 'from-amber-500 to-orange-600',
    },
    {
      title: 'NPTEL Elite – Industry 4.0 & IoT',
      issuer: 'IIT Kharagpur',
      type: 'nptel',
      credentialUrl: '/NPTEL_IoT_Certificate.pdf',
      fileName: 'NPTEL_Industry_4_0_IoT_Certificate.pdf',
      badgeColor: 'from-red-500 to-pink-600',
    },
    {
      title: 'NPTEL Elite – Cloud Computing',
      issuer: 'IIT Kharagpur',
      type: 'nptel',
      credentialUrl: '/NPTEL_Cloud_Computing.pdf',
      fileName: 'NPTEL_Cloud_Computing_Certificate.pdf',
      badgeColor: 'from-sky-500 to-blue-600',
    },
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="absolute top-[20%] right-[10%] w-[250px] h-[250px] bg-primary ambient-orb animate-pulse-glow" style={{ animationDuration: '11s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
          <p className="text-sm text-theme-sec mt-4">
            Professional qualifications and elite university course achievements.
          </p>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <TiltCard className="p-6 rounded-2xl glass-card border-glass h-full flex flex-col justify-between" maxTilt={6}>
                <div>
                  <div className="flex items-start justify-between">
                    <div className="space-y-4 w-full">
                      {/* Badge Icon based on Type */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.badgeColor} flex items-center justify-center text-white shadow-md`}>
                        {cert.type === 'official' ? (
                          <ShieldCheck className="w-6 h-6" />
                        ) : cert.type === 'nptel' ? (
                          <GraduationCap className="w-6 h-6" />
                        ) : (
                          <Award className="w-6 h-6" />
                        )}
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-theme-sec font-heading leading-snug">
                          {cert.title}
                        </h3>
                        <p className="text-xs text-theme-muted mt-1">{cert.issuer}</p>
                      </div>
                    </div>

                    {/* Tiny elite indicator */}
                    {cert.type === 'nptel' && (
                      <span className="text-[9px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-500 font-bold border border-amber-500/20 uppercase tracking-wide shrink-0">
                        Elite
                      </span>
                    )}
                    {cert.type === 'official' && (
                      <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-500 font-bold border border-emerald-500/20 uppercase tracking-wide shrink-0">
                        Verified
                      </span>
                    )}
                  </div>
                </div>

                {cert.credentialUrl ? (
                  <div className="mt-6 pt-3 border-t border-glass flex justify-start">
                    <a
                      href={cert.credentialUrl}
                      download={cert.fileName}
                      className="flex items-center space-x-2 text-[11px] text-primary font-bold hover:text-secondary transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Credential</span>
                    </a>
                  </div>
                ) : (
                  <div className="mt-6 pt-3 border-t border-glass flex justify-start">
                    <span className="text-[10px] text-theme-muted italic">
                      Course Credential Completed
                    </span>
                  </div>
                )}
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
