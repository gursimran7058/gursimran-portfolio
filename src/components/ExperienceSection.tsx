import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, ChevronDown, CheckCircle2, Award, Calendar, MapPin, Target, Sparkles, Building2, HeartHandshake, BookOpen } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/experience';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('exp-bookmyemergency');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Professional Training':
        return <Award className="w-4 h-4 text-emerald-500" />;
      case 'Social Impact':
        return <HeartHandshake className="w-4 h-4 text-rose-500" />;
      case 'Startup & Ventures':
        return <Sparkles className="w-4 h-4 text-amber-500" />;
      case 'Business Management':
        return <Building2 className="w-4 h-4 text-blue-500" />;
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-purple-500" />;
      case 'Academic Delegations':
        return <Award className="w-4 h-4 text-emerald-500" />;
      default:
        return <BookOpen className="w-4 h-4 text-emerald-500" />;
    }
  };

  return (
    <section id="experience" className="py-20 px-3.5 sm:px-6 max-w-6xl mx-auto border-t border-neo-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neo-purple text-black text-xs font-mono font-extrabold border-1.5 border-neo-border mb-2 shadow-[2px_2px_0px_var(--border-color)]">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>TRAINING, BUSINESS & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-neo-text font-display">
            Experience & Milestones
          </h2>
        </div>
        <p className="text-sm text-neo-muted max-w-md font-medium">
          A verified roadmap of my capital markets internship, school achievements (96.2% Class 10th), New Era Electronics management, and campus hostel visits.
        </p>
      </div>

      <div className="space-y-4">
        {WORK_EXPERIENCE.map((exp, index) => {
          const isExpanded = expandedId === exp.id;

          return (
            <div
              key={exp.id}
              className="neo-card overflow-hidden"
            >
              {/* Header / Summary Row */}
              <div
                onClick={() => toggleExpand(exp.id)}
                className="p-5 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
              >
                <div className="flex items-start md:items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-neo-bg border-2 border-neo-border flex items-center justify-center text-neo-text font-mono font-black text-sm shrink-0 shadow-[2px_2px_0px_var(--border-color)]">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-neo-text flex flex-wrap items-center gap-2 font-display">
                      <span>{exp.title}</span>
                      <span className="text-neo-muted font-normal">|</span>
                      <span className="text-emerald-500 font-bold">{exp.organization}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-neo-muted font-mono mt-1 font-bold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                      <span>•</span>
                      <span className="text-neo-text font-extrabold flex items-center gap-1">
                        {getCategoryIcon(exp.category)}
                        <span>{exp.category}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4">
                  {exp.metrics && (
                    <div className="px-3 py-1 rounded-full bg-neo-green text-black border border-black text-xs font-mono font-extrabold shadow-[2px_2px_0px_#111115]">
                      {exp.metrics.value}
                    </div>
                  )}

                  <div
                    className={`p-2 rounded-xl bg-neo-bg border-2 border-neo-border text-neo-text transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 bg-neo-purple text-black' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Expandable Body */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t-2 border-neo-border space-y-4">
                      <p className="text-sm text-neo-muted leading-relaxed font-medium">
                        {exp.summary}
                      </p>

                      <div className="space-y-2">
                        <div className="text-xs font-mono font-bold uppercase tracking-wider text-neo-text">
                          Key Deliverables & Responsibilities:
                        </div>
                        <ul className="space-y-2">
                          {exp.achievements.map((ach, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neo-text font-medium">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills Applied */}
                      <div className="pt-2 flex flex-wrap items-center gap-1.5">
                        <span className="text-xs font-mono text-neo-muted font-bold mr-1">Domains:</span>
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-lg bg-neo-bg border border-neo-border text-[11px] font-mono font-bold text-neo-text"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
