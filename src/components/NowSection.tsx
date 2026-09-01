import React from 'react';
import { motion } from 'framer-motion';
import { Target, Hammer, Dumbbell, Clock, GraduationCap } from 'lucide-react';
import { NOW_DATA } from '../data/now';

export const NowSection: React.FC = () => {
  return (
    <section id="now-section" className="now-section-container py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="now-section-header flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="now-header-badge inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neo-purple text-white text-xs font-mono font-extrabold border-1.5 border-neo-border mb-2 shadow-[2px_2px_0px_var(--border-color)]">
            <Clock className="w-3.5 h-3.5 text-white" />
            <span>WHAT I'M DOING NOW (UPDATED {NOW_DATA.lastUpdated.toUpperCase()})</span>
          </div>
          <h2 className="now-headline-title text-3xl sm:text-4xl font-black text-neo-text font-display">
            Now & Current Focus
          </h2>
        </div>
        <p className="now-header-subtitle text-sm text-neo-muted max-w-md font-medium">
          Inspired by Derek Sivers' <em>/now</em> movement. A live log of my school, startups, business management, delegations, and fitness.
        </p>
      </div>

      {/* Grid of 4 Focus Blocks in a Row */}
      <div className="now-focus-blocks-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Card 1: Studying & School */}
        <div className="now-academics-card neo-card p-4 sm:p-5 flex flex-col justify-between space-y-3">
          <div className="space-y-2.5">
            <div className="now-card-icon-badge w-9 h-9 rounded-2xl bg-neo-purple text-white border-2 border-neo-border flex items-center justify-center shadow-[2px_2px_0px_var(--border-color)]">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-base font-black text-neo-text font-display">
                📚 Academics & Study
              </h3>
              <span className="text-[11px] font-mono font-bold text-neo-text">
                {NOW_DATA.school}
              </span>
            </div>
            <ul className="space-y-1.5 text-xs text-neo-muted leading-relaxed font-medium">
              {NOW_DATA.studying.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-neo-text font-bold">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card 2: Aiming & Goals */}
        <div className="now-goals-card neo-card p-4 sm:p-5 flex flex-col justify-between space-y-3">
          <div className="space-y-2.5">
            <div className="now-card-icon-badge w-9 h-9 rounded-2xl bg-neo-orange text-white border-2 border-neo-border flex items-center justify-center shadow-[2px_2px_0px_var(--border-color)]">
              <Target className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-base font-black text-neo-text font-display">
              🎯 What I'm Aiming For
            </h3>
            <ul className="space-y-1.5 text-xs text-neo-muted leading-relaxed font-medium">
              {NOW_DATA.aiming.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-neo-text font-bold">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card 3: Building (Ventures & Business) */}
        <div className="now-building-card neo-card p-4 sm:p-5 flex flex-col justify-between space-y-3">
          <div className="space-y-2.5">
            <div className="now-card-icon-badge w-9 h-9 rounded-2xl bg-neo-purple text-white border-2 border-neo-border flex items-center justify-center shadow-[2px_2px_0px_var(--border-color)]">
              <Hammer className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-base font-black text-neo-text font-display">
              🛠️ What I'm Building
            </h3>
            <ul className="space-y-1.5 text-xs text-neo-muted leading-relaxed font-medium">
              {NOW_DATA.building.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-neo-text font-bold">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card 4: Sports & Fitness (Cricket & Gym) */}
        <div className="now-fitness-card neo-card p-4 sm:p-5 flex flex-col justify-between space-y-3">
          <div className="space-y-2.5">
            <div className="now-card-icon-badge w-9 h-9 rounded-2xl bg-neo-orange text-white border-2 border-neo-border flex items-center justify-center shadow-[2px_2px_0px_var(--border-color)]">
              <Dumbbell className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-base font-black text-neo-text font-display">
              🏏 Cricket & Gym
            </h3>
            <div className="space-y-1.5">
              {NOW_DATA.fitnessAndSports.map((act, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-neo-bg border border-neo-border text-[11px] font-semibold text-neo-text flex items-center gap-1.5"
                >
                  <span>{act}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
