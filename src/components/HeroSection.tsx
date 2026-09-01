import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  GraduationCap,
  Sparkles,
  Mail,
  Linkedin,
  Phone,
  Award,
  Zap,
  Building2,
  HeartHandshake,
  Trophy
} from 'lucide-react';
import IMAGES from '../assets/images';
import { sound } from '../utils/audio';

interface HeroSectionProps {
  onCopyEmail: () => void;
  onCopyPhone: () => void;
  onShowToast: (msg: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onCopyEmail,
  onCopyPhone,
  onShowToast
}) => {
  return (
    <section
      id="hero-section"
      className="hero-section-container relative pt-28 sm:pt-24 pb-6 sm:pb-10 px-3.5 sm:px-6 overflow-hidden"
    >
      {/* Crisp Floating Circles */}
      <span className="bg-circle bg-circle-purple w-8 h-8 top-16 left-4 sm:left-12" />
      <span className="bg-circle bg-circle-blue w-10 h-10 top-20 right-4 sm:right-16" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Pitch & Identity (order-2 on mobile, order-1 on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="hero-pitch-column lg:col-span-7 order-2 lg:order-1 flex flex-col space-y-4"
          >
            {/* Structured Diagonal Sticker Badge Flow */}
            <div className="hero-sticker-badge-group flex flex-wrap items-center gap-2 font-mono">
              <span
                onClick={() => sound.playClick(600, 'triangle')}
                className="hero-sticker-tag neo-sticker cursor-pointer -rotate-2 hover:rotate-0 transition-transform"
              >
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>17 y/o Founder & Builder</span>
              </span>
              <span
                onClick={() => sound.playClick(650, 'triangle')}
                className="hero-sticker-tag neo-sticker cursor-pointer rotate-1 hover:rotate-0 transition-transform"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>B.C.M. Arya (96.2%)</span>
              </span>
              <span
                onClick={() => sound.playClick(700, 'triangle')}
                className="hero-sticker-tag neo-sticker cursor-pointer -rotate-1 hover:rotate-0 transition-transform"
              >
                <Trophy className="w-3.5 h-3.5" />
                <span>Capital Markets Intern</span>
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="hero-headline-title text-2.5xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-neo-text font-display">
              Building civic tech, managing operations & leading{' '}
              <span className="hero-headline-highlight bg-purple-600 dark:bg-sky-500 text-white px-3 py-1 rounded-xl inline-block my-0.5 border-2 border-black dark:border-white shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#fff] -rotate-1 hover:rotate-0 transition-transform font-black">
                commercial ventures.
              </span>
            </h1>

            {/* Decluttered, Crisp Bio */}
            <p className="hero-bio-text text-xs sm:text-sm text-neo-muted leading-relaxed declutter-text max-w-[55ch]">
              High-school Commerce scholar at <strong className="text-neo-text font-bold">B.C.M. Arya</strong> (<strong className="text-neo-text font-bold">96.2%</strong>). Trained at <strong className="text-neo-text font-semibold">Ludhiana Stock & Capital Ltd</strong> (rated "Excellent"). Founder of <strong className="text-neo-text font-semibold">BookMyEmergency</strong>, Manager at <strong className="text-neo-text font-semibold">New Era Electronics</strong>, and core literacy member at <strong className="text-neo-text font-semibold">Youth Capital Foundation</strong>.
            </p>

            {/* Key Credentials Row */}
            <div className="hero-credentials-track-record space-y-1.5 pt-0.5">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-neo-muted">
                Key Credentials & Track Record
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono font-bold">
                <div
                  onClick={() => sound.playClick(500, 'sine')}
                  className="px-3 py-1.5 rounded-xl bg-neo-card border-2 border-neo-border text-neo-text flex items-center gap-2 shadow-[2px_2px_0px_var(--border-color)] hover:border-neo-accent cursor-pointer transition-all"
                >
                  <Award className="w-4 h-4 text-neo-text shrink-0" />
                  <span className="truncate">96.2% CBSE (99 Fin Markets, 97 Maths)</span>
                </div>
                <div
                  onClick={() => sound.playClick(550, 'sine')}
                  className="px-3 py-1.5 rounded-xl bg-neo-card border-2 border-neo-border text-neo-text flex items-center gap-2 shadow-[2px_2px_0px_var(--border-color)] hover:border-neo-accent cursor-pointer transition-all"
                >
                  <Trophy className="w-4 h-4 text-neo-text shrink-0" />
                  <span className="truncate">Ludhiana Stock Exchange Training</span>
                </div>
                <div
                  onClick={() => sound.playClick(600, 'sine')}
                  className="px-3 py-1.5 rounded-xl bg-neo-card border-2 border-neo-border text-neo-text flex items-center gap-2 shadow-[2px_2px_0px_var(--border-color)] hover:border-neo-accent cursor-pointer transition-all"
                >
                  <HeartHandshake className="w-4 h-4 text-neo-text shrink-0" />
                  <span className="truncate">BookMyEmergency Social Welfare Tech</span>
                </div>
                <div
                  onClick={() => sound.playClick(650, 'sine')}
                  className="px-3 py-1.5 rounded-xl bg-neo-card border-2 border-neo-border text-neo-text flex items-center gap-2 shadow-[2px_2px_0px_var(--border-color)] hover:border-neo-accent cursor-pointer transition-all"
                >
                  <Building2 className="w-4 h-4 text-neo-text shrink-0" />
                  <span className="truncate">Manager @ New Era Electronics</span>
                </div>
              </div>
            </div>

            {/* Campus Stays Row */}
            <div className="hero-campus-hostel-row p-2.5 rounded-2xl bg-neo-bg border border-neo-border flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-neo-muted">
              <span className="font-extrabold text-neo-text">Campus Hostel Stays:</span>
              <span className="px-2 py-0.5 rounded-md bg-neo-card border border-neo-border text-neo-text">IIT Ropar</span>
              <span className="px-2 py-0.5 rounded-md bg-neo-card border border-neo-border text-neo-text">IIT Delhi</span>
              <span className="px-2 py-0.5 rounded-md bg-neo-card border border-neo-border text-neo-text">IIT Mandi</span>
              <span className="px-2 py-0.5 rounded-md bg-neo-card border border-neo-border text-neo-text">IIIT Delhi</span>
            </div>

            {/* Action Buttons */}
            <div className="hero-action-buttons flex flex-wrap items-center gap-3 pt-0.5">
              <a
                href="#credentials"
                onClick={() => sound.playSuccess()}
                className="hero-btn-certificates w-full sm:w-auto px-5 py-3 rounded-2xl btn-accent font-extrabold text-xs sm:text-sm neo-btn flex items-center justify-center gap-2"
              >
                <Trophy className="w-4 h-4 text-current" />
                <span>View Certificates & 96.2% Trophy</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#work"
                onClick={() => sound.playClick(500, 'sine')}
                className="hero-btn-ventures w-full sm:w-auto px-5 py-3 rounded-2xl btn-accent font-extrabold text-xs sm:text-sm neo-btn flex items-center justify-center gap-2"
              >
                <span>Explore Ventures</span>
              </a>
            </div>

            {/* Direct Connect Chips */}
            <div className="hero-direct-connect-chips flex flex-wrap items-center gap-3 text-xs font-mono font-bold text-neo-muted">
              <span className="hidden sm:inline">Direct:</span>
              <button
                onClick={() => {
                  onCopyEmail();
                  sound.playSuccess();
                }}
                className="flex items-center gap-1 hover:text-neo-text transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-neo-text" />
                <span className="text-[11px] sm:text-xs text-neo-text">gursimran7058@gmail.com</span>
              </button>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/gursimran-singh-jodhka-75a361321/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick(600, 'sine')}
                className="flex items-center gap-1 hover:text-neo-text transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-neo-text" />
                <span className="text-[11px] sm:text-xs text-neo-text">LinkedIn</span>
              </a>
              <span>•</span>
              <button
                onClick={() => {
                  onCopyPhone();
                  sound.playSuccess();
                }}
                className="flex items-center gap-1 hover:text-neo-text transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-neo-text" />
                <span className="text-[11px] sm:text-xs text-neo-text">+91 7508002768</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Real Photo Card & Verified Academic Showcase Card (order-1 on mobile, order-2 on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="hero-avatar-credentials-column lg:col-span-5 order-1 lg:order-2 space-y-3"
          >
            {/* Real Avatar Card */}
            <div className="hero-avatar-profile-card neo-card p-3.5 sm:p-4 relative overflow-hidden group">
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src={IMAGES.avatar}
                  alt="Gursimran Singh Jodhka"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-neo-border shadow-[2px_2px_0px_var(--border-color)] shrink-0 group-hover:scale-105 transition-transform"
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
                <div className="space-y-0.5 min-w-0">
                  <div className="text-base sm:text-lg font-black font-display text-neo-text truncate">
                    Gursimran S. Jodhka
                  </div>
                  <div className="text-xs font-mono text-neo-muted font-bold">
                    Class 11 Commerce • 17 y/o
                  </div>
                  <div className="text-[11px] font-mono text-neo-text font-extrabold truncate">
                    B.C.M. Arya Model Sr. Sec. School
                  </div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-neo-accent text-neo-accentText text-[10px] sm:text-[11px] font-extrabold border border-black">
                    Ludhiana, Punjab 📍
                  </div>
                </div>
              </div>
            </div>

            {/* Academic & Internship Verified Showcase Card */}
            <div className="hero-credentials-showcase-card neo-card p-4 sm:p-5 space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold font-mono uppercase tracking-wider text-neo-text flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-neo-text" />
                  <span>Verified Credentials</span>
                </span>
                <span className="text-[11px] font-mono font-bold text-neo-accentText bg-neo-accent px-2 py-0.5 rounded-md">
                  4 Documents
                </span>
              </div>

              {/* 2 Quick Mini Badges */}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-2xl bg-neo-bg border-2 border-neo-border text-center">
                  <div className="text-xl sm:text-2xl font-black font-mono text-neo-text">
                    96.2%
                  </div>
                  <div className="text-[10px] font-mono text-neo-muted font-bold">
                    CBSE Class 10th
                  </div>
                  <div className="text-[9px] font-mono text-neo-muted">
                    Award of Honour
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-neo-bg border-2 border-neo-border text-center">
                  <div className="text-xl sm:text-2xl font-black font-mono text-neo-text">
                    Excellent
                  </div>
                  <div className="text-[10px] font-mono text-neo-muted font-bold">
                    Ludhiana Stock & Capital
                  </div>
                  <div className="text-[9px] font-mono text-neo-muted">
                    Training Certificate
                  </div>
                </div>
              </div>

              {/* Subject Breakdown Quick List */}
              <div className="p-3 rounded-2xl bg-neo-bg border border-neo-border space-y-1.5 text-xs font-mono">
                <div className="flex justify-between items-center text-neo-text font-bold">
                  <span>Intro to Financial Markets:</span>
                  <span className="text-neo-text font-black">99 / 100 (A1)</span>
                </div>
                <div className="flex justify-between items-center text-neo-text font-bold">
                  <span>Mathematics Standard:</span>
                  <span className="text-neo-text font-black">97 / 100 (A1)</span>
                </div>
                <div className="flex justify-between items-center text-neo-text font-bold">
                  <span>Punjabi & English:</span>
                  <span className="text-neo-text font-black">96 & 95 (A1)</span>
                </div>
              </div>

              <a
                href="#credentials"
                onClick={() => sound.playSuccess()}
                className="w-full py-2.5 rounded-xl bg-neo-card border-2 border-neo-border text-neo-text font-mono font-extrabold text-xs neo-btn flex items-center justify-center gap-1.5 hover:bg-neo-accent hover:text-neo-accentText transition-all"
              >
                <span>View Trophy & Certificates</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
