import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, ArrowRight, Menu, X, Clock, Sparkles } from 'lucide-react';
import IMAGES from '../assets/images';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenCommand: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleTheme, onOpenCommand }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

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

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 py-3 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        {/* 3-Column Split Navigation Bar (Inspired by varneet.in) */}
        <nav className="neo-card py-2.5 px-3.5 sm:px-6 flex items-center justify-between backdrop-blur-md">
          {/* Left Links */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="#hero"
              className={`text-xs font-extrabold uppercase tracking-wider transition-colors ${
                activeSection === 'hero' ? 'text-neo-green font-black' : 'hover:text-emerald-500'
              }`}
            >
              About
            </a>
            <a
              href="#credentials"
              className={`text-xs font-extrabold uppercase tracking-wider transition-colors ${
                activeSection === 'credentials' ? 'text-neo-green font-black' : 'hover:text-emerald-500'
              }`}
            >
              Credentials (96.2%)
            </a>
            <a
              href="#now"
              className={`text-xs font-extrabold uppercase tracking-wider transition-colors ${
                activeSection === 'now' ? 'text-neo-green font-black' : 'hover:text-emerald-500'
              }`}
            >
              Now
            </a>
          </div>

          {/* Center Emblem Avatar with Pop */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group select-none"
            title="Gursimran Singh Jodhka — Home"
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
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-neo-green rounded-full border-1.5 border-neo-border" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-extrabold tracking-tight font-display text-neo-text">
                Gursimran
              </span>
              <span className="text-[10px] font-mono text-neo-muted font-bold">
                17 y/o • BCM Arya
              </span>
            </div>
          </a>

          {/* Right Links & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#work"
              className={`text-xs font-extrabold uppercase tracking-wider transition-colors ${
                activeSection === 'work' ? 'text-neo-green font-black' : 'hover:text-emerald-500'
              }`}
            >
              Ventures
            </a>
            <a
              href="#experience"
              className={`text-xs font-extrabold uppercase tracking-wider transition-colors ${
                activeSection === 'experience' ? 'text-neo-green font-black' : 'hover:text-emerald-500'
              }`}
            >
              Roadmap
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
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
              className="px-4 py-2 rounded-xl bg-neo-green text-black font-extrabold text-xs neo-btn flex items-center gap-1.5"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-xl border-2 border-neo-border bg-neo-card text-neo-text"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                onClick={() => setMobileMenuOpen(false)}
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
