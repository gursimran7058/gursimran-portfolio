import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, ArrowRight, Menu, X, Palette, Sparkles } from 'lucide-react';
import IMAGES from '../assets/images';
import { sound } from '../utils/audio';
import { PaletteTheme } from './ThemeCustomizerModal';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenCommand: () => void;
  onOpenCustomizer: () => void;
  onTriggerEasterEgg: () => void;
  currentPalette: PaletteTheme;
  onSelectPalette: (palette: PaletteTheme) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleTheme,
  onOpenCommand,
  onOpenCustomizer,
  onTriggerEasterEgg,
  currentPalette,
  onSelectPalette,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [avatarClicks, setAvatarClicks] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'credentials', 'now', 'work', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAvatarClick = (e: React.MouseEvent) => {
    e.preventDefault();
    sound.playClick(500 + avatarClicks * 100, 'sine');
    const newCount = avatarClicks + 1;
    setAvatarClicks(newCount);
    if (newCount >= 5) {
      sound.playSuccess();
      onTriggerEasterEgg();
      setAvatarClicks(0);
    }
  };

  const PALETTES: { id: PaletteTheme; color: string; label: string }[] = [
    { id: 'gold', color: '#F59E0B', label: 'Imperial Gold' },
    { id: 'emerald', color: '#10B981', label: 'Jade Emerald' },
    { id: 'amethyst', color: '#C084FC', label: 'Royal Violet' },
    { id: 'sapphire', color: '#38BDF8', label: 'Cyber Azure' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 py-3 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        {/* 3-Column Split Navigation Bar */}
        <nav className="neo-card py-2.5 px-3.5 sm:px-6 flex items-center justify-between backdrop-blur-md">
          {/* Left Links */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="#hero"
              onClick={() => sound.playClick(400, 'sine')}
              className={`text-xs font-extrabold uppercase tracking-wider transition-colors ${
                activeSection === 'hero' ? 'text-neo-green font-black' : 'hover:text-emerald-500'
              }`}
            >
              About
            </a>
            <a
              href="#credentials"
              onClick={() => sound.playClick(420, 'sine')}
              className={`text-xs font-extrabold uppercase tracking-wider transition-colors ${
                activeSection === 'credentials' ? 'text-neo-green font-black' : 'hover:text-emerald-500'
              }`}
            >
              Credentials (96.2%)
            </a>
            <a
              href="#now"
              onClick={() => sound.playClick(440, 'sine')}
              className={`text-xs font-extrabold uppercase tracking-wider transition-colors ${
                activeSection === 'now' ? 'text-neo-green font-black' : 'hover:text-emerald-500'
              }`}
            >
              Now
            </a>
          </div>

          {/* Center Emblem Avatar with Easter Egg Pop */}
          <div
            onClick={handleAvatarClick}
            className="flex items-center gap-2.5 group select-none cursor-pointer"
            title="Click 5x to Unlock Trophy Achievement!"
          >
            <div className="relative">
              <img
                src={IMAGES.avatar}
                alt="Gursimran Singh Jodhka"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-neo-border shadow-[2px_2px_0px_var(--border-color)] group-hover:scale-105 transition-transform"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.dataset.triedFallback1) {
                    target.dataset.triedFallback1 = 'true';
                    target.src = './assets/gursimran-avatar.png';
                  } else if (!target.dataset.triedFallback2) {
                    target.dataset.triedFallback2 = 'true';
                    target.src = 'assets/gursimran-avatar.png';
                  } else if (!target.dataset.triedFallback3) {
                    target.dataset.triedFallback3 = 'true';
                    target.src = 'https://gursimran7058.github.io/gursimran-portfolio/assets/gursimran-avatar.png';
                  }
                }}
              />
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-neo-green rounded-full border-1.5 border-neo-border animate-pulse" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-extrabold tracking-tight font-display text-neo-text flex items-center gap-1">
                <span>Gursimran</span>
                {avatarClicks > 0 && (
                  <span className="text-[10px] text-amber-500 font-mono">({avatarClicks}/5)</span>
                )}
              </span>
              <span className="text-[10px] font-mono text-neo-muted font-bold">
                17 y/o • BCM Arya
              </span>
            </div>
          </div>

          {/* Right Links & Interactive Theme Palette Dots */}
          <div className="hidden md:flex items-center gap-3">
            {/* Quick Live Palette Swatches */}
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-xl bg-neo-bg border border-neo-border">
              {PALETTES.map((pal) => (
                <button
                  key={pal.id}
                  onClick={() => {
                    onSelectPalette(pal.id);
                    sound.playSuccess();
                  }}
                  className={`w-3.5 h-3.5 rounded-full border transition-transform ${
                    currentPalette === pal.id ? 'scale-125 border-black shadow-sm ring-1 ring-amber-400' : 'border-transparent hover:scale-110 opacity-70'
                  }`}
                  style={{ backgroundColor: pal.color }}
                  title={`Apply ${pal.label} theme`}
                />
              ))}
            </div>

            <a
              href="#work"
              onClick={() => sound.playClick(460, 'sine')}
              className={`text-xs font-extrabold uppercase tracking-wider transition-colors ${
                activeSection === 'work' ? 'text-neo-green font-black' : 'hover:text-emerald-500'
              }`}
            >
              Ventures
            </a>
            <a
              href="#experience"
              onClick={() => sound.playClick(480, 'sine')}
              className={`text-xs font-extrabold uppercase tracking-wider transition-colors ${
                activeSection === 'experience' ? 'text-neo-green font-black' : 'hover:text-emerald-500'
              }`}
            >
              Roadmap
            </a>

            {/* Aesthetic Palette Studio Button */}
            <button
              onClick={() => {
                onOpenCustomizer();
                sound.playClick(600, 'sine');
              }}
              className="p-2 rounded-xl border-2 border-neo-border bg-neo-yellow text-black neo-btn flex items-center gap-1 text-xs"
              title="Customize Luxury Palette & Sound"
            >
              <Palette className="w-4 h-4" />
              <span className="text-[10px] font-extrabold uppercase hidden lg:inline">Studio</span>
            </button>

            {/* Quick Dark/Light Toggle */}
            <button
              onClick={() => {
                onToggleTheme();
                sound.playThemeSwitch();
              }}
              className="p-2 rounded-xl border-2 border-neo-border bg-neo-card text-neo-text neo-btn flex items-center justify-center"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-800" />
              )}
            </button>

            {/* Let's Talk CTA Button */}
            <a
              href="#contact"
              onClick={() => sound.playClick(700, 'sine')}
              className="px-4 py-2 rounded-xl bg-neo-green text-black font-extrabold text-xs neo-btn flex items-center gap-1.5"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => {
                onOpenCustomizer();
                sound.playClick(600, 'sine');
              }}
              className="p-2 rounded-xl border-2 border-neo-border bg-neo-yellow text-black"
              title="Theme Studio"
            >
              <Palette className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                onToggleTheme();
                sound.playThemeSwitch();
              }}
              aria-label="Toggle theme"
              className="p-2 rounded-xl border-2 border-neo-border bg-neo-card text-neo-text"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                sound.playClick(300, 'sine');
              }}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl border-2 border-neo-border bg-neo-card text-neo-text"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 neo-card p-4 flex flex-col gap-3 backdrop-blur-lg shadow-xl"
          >
            {[
              { href: '#hero', label: 'About' },
              { href: '#credentials', label: 'Honours & Certifications (96.2%)' },
              { href: '#now', label: 'Now & Focus' },
              { href: '#work', label: 'Ventures & Startups' },
              { href: '#experience', label: 'Roadmap & Experience' },
              { href: '#contact', label: 'Let’s Talk' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  sound.playClick(400, 'sine');
                }}
                className="text-sm font-extrabold uppercase py-1.5 px-2 rounded-lg text-neo-text hover:bg-neo-green hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
};
