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
  CheckCircle2,
  Trophy,
  ExternalLink
} from 'lucide-react';

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
      id="hero"
      className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 px-3.5 sm:px-6 overflow-hidden"
    >
      {/* Crisp Background Circles */}
      <span className="bg-circle bg-circle-green w-10 h-10 top-24 left-4 sm:left-16" />
      <span className="bg-circle bg-circle-purple w-12 h-12 top-28 right-4 sm:right-24" />
      <span className="bg-circle bg-circle-yellow w-8 h-8 bottom-12 left-6" />
      <span className="bg-circle bg-circle-blue w-9 h-9 top-1/2 right-2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Pitch & Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 flex flex-col space-y-5 sm:space-y-6"
          >
            {/* Top Badge Strip */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="neo-badge bg-neo-green text-black text-[10px] sm:text-xs">
                <Zap className="w-3.5 h-3.5 fill-black" />
                <span>17 y/o Founder & Builder</span>
              </span>
              <span className="neo-badge bg-neo-purple text-black text-[10px] sm:text-xs">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>B.C.M. Arya Model Sr. Sec. School</span>
              </span>
              <span className="neo-badge bg-neo-yellow text-black text-[10px] sm:text-xs">
                <Trophy className="w-3.5 h-3.5" />
                <span>Class 10th: 96.2% Topper</span>
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-2.5xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-neo-text font-display">
              Building civic tech, managing operations, and excelling in{' '}
              <span className="bg-neo-purple text-black px-2 py-0.5 rounded-lg inline-block my-1 border-2 border-black">
                commercial leadership.
              </span>
            </h1>

            {/* Authentic Bio */}
            <p className="text-sm sm:text-base lg:text-lg text-neo-muted leading-relaxed max-w-[60ch]">
              I’m <strong className="text-neo-text font-bold">Gursimran Singh Jodhka</strong> from Ludhiana, Punjab. A 17-year-old high-school Commerce student at <strong className="text-neo-text font-semibold">B.C.M. Arya Model Sr. Sec. School</strong> (scored <strong className="text-emerald-500 font-bold">96.2%</strong> in Class 10th). Completed capital markets training internship at <strong className="text-neo-text font-semibold">Ludhiana Stock and Capital Limited</strong> (rated "Excellent"). Currently building <strong className="text-neo-text font-semibold">BookMyEmergency</strong> for social welfare, manager at <strong className="text-neo-text font-semibold">New Era Electronics</strong>, and core literacy member in <strong className="text-neo-text font-semibold">Youth Capital Foundation</strong>.
            </p>

            {/* Key Milestone Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold">
              <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-neo-card border-2 border-neo-border text-neo-text shadow-[2px_2px_0px_var(--border-color)] flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>96.2% CBSE (99 Fin Markets, 97 Maths)</span>
              </span>
              <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-neo-card border-2 border-neo-border text-neo-text shadow-[2px_2px_0px_var(--border-color)] flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-emerald-500" />
                <span>Ludhiana Stock & Capital Ltd Intern</span>
              </span>
              <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-neo-card border-2 border-neo-border text-neo-text shadow-[2px_2px_0px_var(--border-color)] flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-rose-500" />
                <span>BookMyEmergency</span>
              </span>
              <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-neo-card border-2 border-neo-border text-neo-text shadow-[2px_2px_0px_var(--border-color)] flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-blue-500" />
                <span>Manager @ New Era Electronics</span>
              </span>
              <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-neo-card border-2 border-neo-border text-neo-text shadow-[2px_2px_0px_var(--border-color)]">
                🏏 Cricket All-rounder
              </span>
              <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-neo-card border-2 border-neo-border text-neo-text shadow-[2px_2px_0px_var(--border-color)]">
                🏋️‍♂️ Gym 5x/week
              </span>
            </div>

            {/* Campus Highlights */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] font-mono text-neo-muted">
              <span className="font-extrabold text-neo-text">Campus Hostel Stays:</span>
              <span className="px-2 py-0.5 rounded-md bg-neo-bg border border-neo-border text-neo-text">IIT Ropar (1-Day Hostel Stay)</span>
              <span className="px-2 py-0.5 rounded-md bg-neo-bg border border-neo-border text-neo-text">IIT Delhi (Hostel Stay)</span>
              <span className="px-2 py-0.5 rounded-md bg-neo-bg border border-neo-border text-neo-text">IIT Mandi (Hostel Stay)</span>
              <span className="px-2 py-0.5 rounded-md bg-neo-bg border border-neo-border text-neo-text">IIIT Delhi (Hostel Stay)</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#credentials"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-neo-yellow text-black font-extrabold text-xs sm:text-sm neo-btn flex items-center justify-center gap-2"
              >
                <Trophy className="w-4 h-4" />
                <span>View Certificates & 96.2% Trophy</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#work"
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-neo-green text-black font-extrabold text-xs sm:text-sm neo-btn flex items-center justify-center gap-2"
              >
                <span>Explore Ventures</span>
              </a>
            </div>

            {/* Direct Connect Chips */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono font-bold text-neo-muted">
              <span className="hidden sm:inline">Direct:</span>
              <button
                onClick={onCopyEmail}
                className="flex items-center gap-1 hover:text-emerald-500 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="text-[11px] sm:text-xs">gursimran7058@gmail.com</span>
              </button>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/gursimran-singh-jodhka-75a361321/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-emerald-500 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span className="text-[11px] sm:text-xs">LinkedIn</span>
              </a>
              <span>•</span>
              <button
                onClick={onCopyPhone}
                className="flex items-center gap-1 hover:text-emerald-500 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="text-[11px] sm:text-xs">+91 7508002768</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Real Photo Card & Verified Academic Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Real Avatar Card */}
            <div className="neo-card p-4 sm:p-5 relative overflow-hidden group">
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src="./assets/gursimran-avatar.png"
                  alt="Gursimran Singh Jodhka"
                  className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-neo-border shadow-[3px_3px_0px_var(--border-color)] shrink-0"
                />
                <div className="space-y-1 min-w-0">
                  <div className="text-base sm:text-lg font-black font-display text-neo-text truncate">
                    Gursimran S. Jodhka
                  </div>
                  <div className="text-xs font-mono text-neo-muted font-bold">
                    Class 11 Commerce • 17 y/o
                  </div>
                  <div className="text-[11px] font-mono text-emerald-500 font-extrabold truncate">
                    B.C.M. Arya Model Sr. Sec. School
                  </div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-neo-purple text-black text-[10px] sm:text-[11px] font-extrabold border border-black">
                    Ludhiana, Punjab 📍
                  </div>
                </div>
              </div>
            </div>

            {/* Academic & Internship Verified Showcase Card */}
            <div className="neo-card p-4 sm:p-5 space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold font-mono uppercase tracking-wider text-neo-text flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-amber-500" />
                  <span>Verified Credentials</span>
                </span>
                <span className="text-[11px] font-mono font-bold text-neo-green bg-black px-2 py-0.5 rounded-md">
                  4 Documents
                </span>
              </div>

              {/* 2 Quick Mini Badges */}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-2xl bg-neo-bg border-2 border-neo-border text-center">
                  <div className="text-xl sm:text-2xl font-black font-mono text-emerald-500">
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
                  <div className="text-xl sm:text-2xl font-black font-mono text-blue-500">
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
                  <span className="text-emerald-500 font-black">99 / 100 (A1)</span>
                </div>
                <div className="flex justify-between items-center text-neo-text font-bold">
                  <span>Mathematics Standard:</span>
                  <span className="text-emerald-500 font-black">97 / 100 (A1)</span>
                </div>
                <div className="flex justify-between items-center text-neo-text font-bold">
                  <span>Punjabi & English:</span>
                  <span className="text-emerald-500 font-black">96 & 95 (A1)</span>
                </div>
              </div>

              <a
                href="#credentials"
                className="w-full py-2.5 rounded-xl bg-neo-card border-2 border-neo-border text-neo-text font-mono font-extrabold text-xs neo-btn flex items-center justify-center gap-1.5 hover:bg-neo-yellow hover:text-black transition-all"
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
