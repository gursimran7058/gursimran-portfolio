import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-zinc-900/90 border border-emerald-500/30 text-zinc-100 rounded-xl shadow-[0_15px_30px_-10px_rgba(16,185,129,0.3)] backdrop-blur-md"
        >
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
          </div>
          <div className="text-sm font-medium text-zinc-200">
            {message}
          </div>
          <button
            onClick={onClose}
            className="p-1 text-zinc-400 hover:text-zinc-200 rounded-md transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
