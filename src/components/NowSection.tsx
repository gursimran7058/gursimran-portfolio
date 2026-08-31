import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Hammer, Dumbbell, Sparkles, Clock, MapPin, Trophy, Building2, GraduationCap, HeartHandshake } from 'lucide-react';
import { NOW_DATA } from '../data/now';

export const NowSection: React.FC = () => {
  return (
    <section id="now" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neo-purple text-black text-xs font-mono font-extrabold border-1.5 border-neo-border mb-2 shadow-[2px_2px_0px_var(--border-color)]">
            <Clock className="w-3.5 h-3.5" />
            <span>WHAT I'M DOING NOW (UPDATED {NOW_DATA.lastUpdated.toUpperCase()})</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-neo-text font-display">
            Now & Current Focus
          </h2>
        </div>
        <p className="text-sm text-neo-muted max-w-md font-medium">
          Inspired by Derek Sivers' <em>/now</em> movement. A live log of my school, startups, business management, delegations, and fitness.
        </p>
      </div>

      {/* Grid of Focus Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Studying & School */}
        <div className="neo-card p-5 sm:p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-neo-purple border-2 border-neo-border flex items-center justify-center text-black shadow-[2px_2px_0px_var(--border-color)]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-neo-text font-display">
                📚 Academics & Study
              </h3>
              <span className="text-xs font-mono font-bold text-emerald-500">
                {NOW_DATA.school}
              </span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-neo-muted leading-relaxed font-medium">
              {NOW_DATA.studying.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-neo-purple font-bold">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card 2: Aiming & Goals */}
        <div className="neo-card p-5 sm:p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-neo-green border-2 border-neo-border flex items-center justify-center text-black shadow-[2px_2px_0px_var(--border-color)]">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-neo-text font-display">
              🎯 What I'm Aiming For
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-neo-muted leading-relaxed font-medium">
              {NOW_DATA.aiming.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-neo-green font-bold">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card 3: Building (Ventures & Business) */}
        <div className="neo-card p-5 sm:p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-neo-yellow border-2 border-neo-border flex items-center justify-center text-black shadow-[2px_2px_0px_var(--border-color)]">
              <Hammer className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-neo-text font-display">
              🛠️ What I'm Building
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-neo-muted leading-relaxed font-medium">
              {NOW_DATA.building.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-neo-yellow font-bold">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card 4: Sports & Fitness (Cricket & Gym) */}
        <div className="neo-card p-5 sm:p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-neo-pink border-2 border-neo-border flex items-center justify-center text-black shadow-[2px_2px_0px_var(--border-color)]">
              <Dumbbell className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-neo-text font-display">
              🏏 Cricket & Gym Training
            </h3>
            <div className="space-y-2">
              {NOW_DATA.fitnessAndSports.map((act, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-neo-bg border border-neo-border text-xs font-semibold text-neo-text flex items-center gap-2"
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
