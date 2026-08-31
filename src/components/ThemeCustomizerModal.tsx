import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Sun, Moon, Volume2, VolumeX, X, Check, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export type PaletteTheme = 'gold' | 'emerald' | 'amethyst' | 'sapphire';

interface ThemeCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onToggleTheme: () => void;
  currentPalette: PaletteTheme;
  onSelectPalette: (palette: PaletteTheme) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const ThemeCustomizerModal: React.FC<ThemeCustomizerProps> = ({
  isOpen,
  onClose,
  darkMode,
  onToggleTheme,
  currentPalette,
  onSelectPalette,
  soundEnabled,
  onToggleSound,
}) => {
  const PALETTES: { id: PaletteTheme; name: string; tag: string; colors: string[] }[] = [
    {
      id: 'gold',
      name: 'Imperial Gold & Obsidian',
      tag: 'Classic Luxury',
      colors: ['#F59E0B', '#10B981', '#D97706'],
    },
    {
      id: 'emerald',
      name: 'Emerald Capital Markets',
      tag: 'Finance & Venture',
      colors: ['#059669', '#10B981', '#0D9488'],
    },
    {
      id: 'amethyst',
      name: 'Royal Amethyst Founder',
      tag: 'Innovative Tech',
      colors: ['#7C3AED', '#EC4899', '#A855F7'],
    },
    {
      id: 'sapphire',
      name: 'Cyber Sapphire Wave',
      tag: 'Futuristic Azure',
      colors: ['#0284C7', '#06B6D4', '#38BDF8'],
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.25, cubicBezier: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="neo-card p-6 sm:p-8 max-w-lg w-full space-y-6 shadow-2xl relative bg-neo-card border-2 border-neo-border"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-neo-border">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-neo-yellow text-black border border-black shadow-[2px_2px_0px_#000]">
                  <Palette className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg font-black text-neo-text font-display">
                    Luxury Aesthetic Studio
                  </h3>
                  <p className="text-xs font-mono text-neo-muted font-bold">
                    Customize Color Schemes & Interactive Audio
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl border-2 border-neo-border text-neo-text hover:bg-neo-yellow hover:text-black transition-colors"
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
                  darkMode ? 'bg-zinc-900 text-amber-300' : 'bg-amber-100 text-amber-900'
                }`}
              >
                {darkMode ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6 text-amber-600" />}
                <span className="text-xs font-mono font-extrabold uppercase">
                  {darkMode ? 'Dark Mode' : 'Light Studio'}
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

            {/* Palette Theme Options */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-extrabold uppercase tracking-wider text-neo-muted flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-neo-yellow" />
                <span>Select Luxury Color Palette</span>
              </div>

              <div className="space-y-2.5">
                {PALETTES.map((pal) => {
                  const isSelected = currentPalette === pal.id;
                  return (
                    <div
                      key={pal.id}
                      onClick={() => {
                        onSelectPalette(pal.id);
                        sound.playSuccess();
                      }}
                      className={`p-3.5 rounded-2xl border-2 border-neo-border cursor-pointer flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-neo-bg border-neo-yellow shadow-[4px_4px_0px_var(--border-color)] scale-[1.01]'
                          : 'bg-neo-card hover:bg-neo-bg'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          {pal.colors.map((c, i) => (
                            <span
                              key={i}
                              className="w-4 h-4 rounded-full border border-black/30 shadow-sm"
                              style={{ backgroundColor: c }}
                            />
                          ))}
                        </div>
                        <div>
                          <div className="text-xs font-extrabold font-display text-neo-text">
                            {pal.name}
                          </div>
                          <div className="text-[10px] font-mono font-bold text-neo-muted">
                            {pal.tag}
                          </div>
                        </div>
                      </div>

                      {isSelected && (
                        <span className="p-1 rounded-full bg-neo-yellow text-black border border-black">
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
              ✨ Smooth real-time CSS variable interpolation across all sections.
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
