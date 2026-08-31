import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, TrendingUp, Target, Sparkles, BookOpen } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onShowToast
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="w-full max-w-3xl rounded-3xl bg-zinc-900 border border-white/15 shadow-2xl overflow-hidden my-auto relative"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white border border-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-500">{project.timeline}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 font-display">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Key Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-zinc-950 border border-white/5">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400">
                  {m.value}
                </div>
                <div className="text-[11px] text-zinc-400">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Deep Dive Description */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider">
              Methodology & Foundation
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Model Breakdown */}
          {project.breakdown && (
            <div className="space-y-3">
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider">
                Venture Architecture & Strategic Framework
              </h3>
              <div className="space-y-3">
                {project.breakdown.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1"
                  >
                    <div className="text-xs font-bold text-emerald-300 font-mono flex items-center gap-2">
                      <Target className="w-3.5 h-3.5" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          {project.highlights && (
            <div className="space-y-2">
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider">
                Key Analytical Takeaways
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Skills Applied */}
          <div className="pt-2">
            <div className="text-xs font-mono text-zinc-500 mb-2">Core Skills Applied:</div>
            <div className="flex flex-wrap gap-2">
              {project.skillsApplied.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg bg-zinc-800 border border-white/10 text-xs font-mono text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-zinc-950/80 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-zinc-500">
            Authored by Gursimran Singh Jodhka (17 y/o)
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs transition-colors"
          >
            Close Overview
          </button>
        </div>
      </motion.div>
    </div>
  );
};
