import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  HeartHandshake,
  Building2,
  Users
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/projects';
import { Project } from '../types';

interface ProjectBentoProps {
  onSelectProject: (project: Project) => void;
  onShowToast: (msg: string) => void;
}

export const ProjectBento: React.FC<ProjectBentoProps> = ({
  onSelectProject,
  onShowToast
}) => {
  return (
    <section id="work" className="py-20 px-3.5 sm:px-6 max-w-6xl mx-auto border-t border-neo-border">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neo-green text-black text-xs font-mono font-extrabold border-1.5 border-black mb-2 shadow-[2px_2px_0px_#111115]">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>VENTURES, IMPACT & OPERATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-neo-text font-display">
            Featured Startups & Work
          </h2>
        </div>
        <p className="text-sm text-neo-muted max-w-md font-medium">
          Real grassroots execution: social welfare tech, co-founded startups, retail enterprise management, and youth financial literacy.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* CARD 1: BookMyEmergency (Span: 8 Cols) */}
        {FEATURED_PROJECTS[0] && (
          <div className="lg:col-span-8 neo-card p-5 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="neo-badge bg-rose-400 text-black">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  {FEATURED_PROJECTS[0].category}
                </span>
                <span className="text-xs font-mono font-bold text-emerald-500 bg-black px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                  ● Building Now
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-neo-text font-display">
                {FEATURED_PROJECTS[0].title}
              </h3>
              <p className="text-sm text-neo-muted leading-relaxed max-w-2xl font-medium">
                {FEATURED_PROJECTS[0].description}
              </p>

              {/* Mission Pillars Box */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-neo-bg border-2 border-neo-border text-center">
                <div className="space-y-0.5">
                  <div className="text-base sm:text-lg font-black font-mono text-rose-500">&lt; 60s Triage</div>
                  <div className="text-[11px] font-mono text-neo-muted font-bold">Rapid SOS Routing</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-base sm:text-lg font-black font-mono text-neo-text">Verified Providers</div>
                  <div className="text-[11px] font-mono text-neo-muted font-bold">Ambulance & Hospitals</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-base sm:text-lg font-black font-mono text-emerald-500">Public Good</div>
                  <div className="text-[11px] font-mono text-neo-muted font-bold">Zero-Fee Welfare</div>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neo-border">
              <div className="flex flex-wrap items-center gap-2">
                {FEATURED_PROJECTS[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-neo-bg border border-neo-border text-[11px] font-mono font-bold text-neo-text"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onSelectProject(FEATURED_PROJECTS[0])}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-neo-card text-neo-text font-extrabold text-xs neo-btn flex items-center justify-center gap-1.5"
              >
                <span>Read Mission Overview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* CARD 2: Guldasta (Span: 4 Cols) */}
        {FEATURED_PROJECTS[1] && (
          <div className="lg:col-span-4 neo-card p-5 sm:p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="neo-badge bg-neo-yellow text-black">
                  <Sparkles className="w-3.5 h-3.5" />
                  {FEATURED_PROJECTS[1].category}
                </span>
                <span className="text-xs font-mono font-bold text-neo-muted">
                  {FEATURED_PROJECTS[1].timeline}
                </span>
              </div>

              <h3 className="text-xl font-black text-neo-text font-display">
                {FEATURED_PROJECTS[1].title}
              </h3>
              <p className="text-xs sm:text-sm text-neo-muted leading-relaxed font-medium">
                {FEATURED_PROJECTS[1].subtitle}
              </p>

              {/* Startup Highlights Note */}
              <div className="p-3.5 rounded-xl bg-neo-bg border border-neo-border space-y-1">
                <div className="text-[11px] font-mono font-bold text-amber-500 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Grassroots Commerce Initiative</span>
                </div>
                <p className="text-[11px] text-neo-muted leading-tight font-medium">
                  Direct customer testing, resilient unit economics, and local supplier management.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t-2 border-neo-border flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-neo-muted">Co-Founder (Jan 2026)</span>
              <button
                onClick={() => onSelectProject(FEATURED_PROJECTS[1])}
                className="w-9 h-9 rounded-full bg-neo-bg border-2 border-neo-border flex items-center justify-center hover:bg-neo-yellow hover:text-black transition-all"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* CARD 3: New Era Electronics (Span: 4 Cols) */}
        {FEATURED_PROJECTS[2] && (
          <div className="lg:col-span-4 neo-card p-5 sm:p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="neo-badge bg-neo-blue text-black">
                  <Building2 className="w-3.5 h-3.5" />
                  {FEATURED_PROJECTS[2].category}
                </span>
                <span className="text-xs font-mono font-bold text-neo-muted">
                  Family Enterprise
                </span>
              </div>

              <h3 className="text-xl font-black text-neo-text font-display">
                {FEATURED_PROJECTS[2].title}
              </h3>
              <p className="text-xs sm:text-sm text-neo-muted leading-relaxed font-medium">
                {FEATURED_PROJECTS[2].subtitle}
              </p>

              <div className="p-3.5 rounded-xl bg-neo-bg border border-neo-border space-y-2">
                <div className="text-[11px] font-mono font-bold text-blue-500 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Operations & Retail Store Management</span>
                </div>
                <p className="text-[11px] text-neo-muted leading-tight font-medium">
                  Auditing inventory, managing vendor ledger balances, and optimizing day-to-day working capital flow.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t-2 border-neo-border flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-neo-muted">Managerial Role</span>
              <button
                onClick={() => onSelectProject(FEATURED_PROJECTS[2])}
                className="w-9 h-9 rounded-full bg-neo-bg border-2 border-neo-border flex items-center justify-center hover:bg-neo-blue hover:text-black transition-all"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* CARD 4: Youth Capital Foundation (Span: 8 Cols) */}
        {FEATURED_PROJECTS[3] && (
          <div className="lg:col-span-8 neo-card p-5 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="neo-badge bg-neo-purple text-black">
                  <Users className="w-3.5 h-3.5" />
                  {FEATURED_PROJECTS[3].category}
                </span>
                <span className="text-xs font-mono font-bold text-neo-muted">
                  {FEATURED_PROJECTS[3].timeline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-neo-text font-display">
                {FEATURED_PROJECTS[3].title}
              </h3>
              <p className="text-sm text-neo-muted leading-relaxed max-w-2xl font-medium">
                Serving as a core pillar of Youth Capital Foundation dedicated to reaching underprivileged students and making everyone financially aware through accessible money management and savings guidance.
              </p>

              {/* Outreach Metrics Box */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-neo-bg border-2 border-neo-border text-center">
                <div className="space-y-0.5">
                  <div className="text-base sm:text-lg font-black font-mono text-emerald-500">Underprivileged Students</div>
                  <div className="text-[11px] font-mono text-neo-muted font-bold">Primary Target Audience</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-base sm:text-lg font-black font-mono text-neo-text">Universal Access</div>
                  <div className="text-[11px] font-mono text-neo-muted font-bold">Financial Awareness for All</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-base sm:text-lg font-black font-mono text-purple-500">Core Literacy Member</div>
                  <div className="text-[11px] font-mono text-neo-muted font-bold">Community Education</div>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neo-border">
              <div className="flex flex-wrap items-center gap-2">
                {FEATURED_PROJECTS[3].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-neo-bg border border-neo-border text-[11px] font-mono font-bold text-neo-text"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onSelectProject(FEATURED_PROJECTS[3])}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-neo-card text-neo-text font-extrabold text-xs neo-btn flex items-center justify-center gap-1.5"
              >
                <span>Read Initiative Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
