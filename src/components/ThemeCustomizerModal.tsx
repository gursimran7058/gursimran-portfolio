import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Sun, Moon, Volume2, VolumeX, X, Check, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export type TypographyMode = 'bold-asymmetric' | 'minimalist' | 'cyber-mono';

interface ThemeCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onToggleTheme: () => void;
  currentTypography: TypographyMode;
  onSelectTypography: (mode: TypographyMode) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const ThemeCustomizerModal: React.FC<ThemeCustomizerProps> = ({
  isOpen,
  onClose,
  darkMode,
  onToggleTheme,
  currentTypography,
  onSelectTypography,
  soundEnabled,
  onToggleSound,
}) => {
  const TYPOGRAPHY_MODES: { id: TypographyMode; name: string; desc: string; icon: string }[] = [
    {
      id: 'bold-asymmetric',
      name: '⚡ Bold Asymmetric',
      desc: 'Syne & Outfit display, high visual attention neobrutalist vibe',
      icon: '⚡',
    },
    {
      id: 'minimalist',
      name: '✨ Minimalist Clean',
      desc: 'Plus Jakarta Sans, sleek balanced modern aesthetic',
      icon: '✨',
    },
    {
      id: 'cyber-mono',
      name: '💻 Cyber Mono / Tech',
      desc: 'Space Grotesk & JetBrains Mono terminal vibe',
      icon: '💻',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.25, cubicBezier: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="neo-card p-6 sm:p-8 max-w-lg w-full space-y-6 shadow-2xl relative bg-neo-card border-2 border-neo-border my-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-neo-border">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-neo-green text-black border border-black shadow-[2px_2px_0px_#000]">
                  <Sparkles className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg font-black text-neo-text font-display">
                    Typography & Audio Studio
                  </h3>
                  <p className="text-xs font-mono text-neo-muted font-bold">
                    Switch Typography Vibe & Sound Effects
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl border-2 border-neo-border text-neo-text hover:bg-neo-green hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mode Controls Grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* Dark/Light Switch */}
              <button
                onClick={() => {
                  onToggleTheme();
                  sound.playThemeSwitch();
                }}
                className={`p-4 rounded-2xl border-2 border-neo-border neo-btn flex flex-col items-center justify-center gap-2 transition-all ${
                  darkMode ? 'bg-zinc-900 text-emerald-400' : 'bg-emerald-100 text-emerald-950'
                }`}
              >
                {darkMode ? <Moon className="w-6 h-6 text-emerald-400" /> : <Sun className="w-6 h-6 text-emerald-600" />}
                <span className="text-xs font-mono font-extrabold uppercase">
                  {darkMode ? 'Dark Mode' : 'Light Mode'}
                </span>
              </button>

              {/* Sound Haptics Switch */}
              <button
                onClick={() => {
                  onToggleSound();
                  sound.playClick(600, 'sine');
                }}
                className={`p-4 rounded-2xl border-2 border-neo-border neo-btn flex flex-col items-center justify-center gap-2 transition-all ${
                  soundEnabled ? 'bg-emerald-500/20 text-emerald-500' : 'bg-neo-bg text-neo-muted'
                }`}
              >
                {soundEnabled ? <Volume2 className="w-6 h-6 text-emerald-500" /> : <VolumeX className="w-6 h-6" />}
                <span className="text-xs font-mono font-extrabold uppercase">
                  {soundEnabled ? 'Sound: ON 🔊' : 'Sound: Muted 🔇'}
                </span>
              </button>
            </div>

            {/* Typography Mode Options */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-extrabold uppercase tracking-wider text-neo-muted flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-neo-green" />
                <span>Select Typography Vibe</span>
              </div>

              <div className="space-y-2">
                {TYPOGRAPHY_MODES.map((mode) => {
                  const isSelected = currentTypography === mode.id;
                  return (
                    <div
                      key={mode.id}
                      onClick={() => {
                        onSelectTypography(mode.id);
                        sound.playSuccess();
                      }}
                      className={`p-3.5 rounded-2xl border-2 border-neo-border cursor-pointer flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-neo-bg border-neo-green shadow-[3px_3px_0px_var(--border-color)] scale-[1.01]'
                          : 'bg-neo-card hover:bg-neo-bg'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-extrabold font-display text-neo-text">
                          {mode.name}
                        </div>
                        <div className="text-[10px] font-mono text-neo-muted">
                          {mode.desc}
                        </div>
                      </div>
                      {isSelected && (
                        <span className="p-1 rounded-full bg-neo-green text-black border border-black">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer Note */}
            <div className="p-3 rounded-2xl bg-neo-bg border border-neo-border text-[11px] font-mono text-neo-muted text-center">
              ✨ Green, Red & Purple Neobrutalist Design System.
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
