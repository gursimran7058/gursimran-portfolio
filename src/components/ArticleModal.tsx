import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, CheckCircle2, BookOpen, Share2 } from 'lucide-react';
import { Article } from '../data/writing';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
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

  if (!article) return null;

  const badgeBg =
    article.tagColor === 'green'
      ? 'bg-neo-green'
      : article.tagColor === 'purple'
      ? 'bg-neo-purple'
      : article.tagColor === 'blue'
      ? 'bg-neo-blue'
      : 'bg-neo-yellow';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="w-full max-w-2xl neo-card p-6 sm:p-8 my-auto relative space-y-6"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b-2 border-neo-border pb-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className={`neo-badge ${badgeBg} text-black font-extrabold text-[10px]`}>
                {article.tag}
              </span>
              <span className="text-xs font-mono text-neo-muted">
                {article.readTime} • {article.date}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-neo-text font-display">
              {article.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl border-2 border-neo-border bg-neo-bg text-neo-text neo-btn shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 text-sm sm:text-base text-neo-text leading-relaxed">
          <p className="font-medium text-neo-muted">
            {article.summary}
          </p>

          <div className="p-4 rounded-2xl bg-neo-bg border-2 border-neo-border space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-neo-text">
              Key Takeaways & Mental Models:
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-neo-muted">
              {article.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t-2 border-neo-border text-xs font-mono text-neo-muted">
          <span>Authored by Gursimran Singh Jodhka (17 y/o)</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-neo-green text-black font-extrabold text-xs neo-btn"
          >
            Close Article
          </button>
        </div>
      </motion.div>
    </div>
  );
};
