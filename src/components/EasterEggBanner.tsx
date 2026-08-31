import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Sparkles, X, Award, Zap } from 'lucide-react';
import { sound } from '../utils/audio';

interface EasterEggProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EasterEggBanner: React.FC<EasterEggProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 3 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="neo-card p-6 sm:p-8 max-w-md w-full text-center space-y-5 bg-neo-card border-4 border-neo-yellow shadow-[8px_8px_0px_#000] relative overflow-hidden"
          >
            {/* Background Sparkles */}
            <div className="absolute top-2 right-2 opacity-30 text-neo-yellow animate-bounce">
              <Sparkles className="w-12 h-12" />
            </div>

            <div className="mx-auto w-16 h-16 rounded-full bg-neo-yellow text-black border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_#000]">
              <Trophy className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="neo-badge bg-neo-purple text-black font-extrabold text-[10px]">
                🎉 EASTER EGG UNLOCKED!
              </span>
              <h3 className="text-2xl font-black text-neo-text font-display">
                Level 17 Commerce Prodigy
              </h3>
              <p className="text-xs font-mono text-neo-muted leading-relaxed">
                You discovered Gursimran's secret trophy room! Scoring <strong>96.2%</strong> in Class 10, rated <strong>"Excellent"</strong> by Ludhiana Stock & Capital Ltd, and founding <strong>BookMyEmergency</strong>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono font-bold">
              <div className="p-2.5 rounded-xl bg-neo-bg border border-neo-border text-emerald-500">
                ⚡ 99/100 Fin Markets
              </div>
              <div className="p-2.5 rounded-xl bg-neo-bg border border-neo-border text-blue-500">
                📈 LSE Certified
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                sound.playClick(800, 'sine');
              }}
              className="w-full py-3 rounded-xl bg-neo-yellow text-black font-extrabold text-xs neo-btn flex items-center justify-center gap-2"
            >
              <span>Keep Exploring Portfolio 🚀</span>
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
