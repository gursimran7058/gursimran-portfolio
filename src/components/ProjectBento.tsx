import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  HeartHandshake,
  Building2,
  Users,
  Filter
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/projects';
import { Project } from '../types';
import { sound } from '../utils/audio';

interface ProjectBentoProps {
  onSelectProject: (project: Project) => void;
  onShowToast: (msg: string) => void;
}

export const ProjectBento: React.FC<ProjectBentoProps> = ({
  onSelectProject,
  onShowToast
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'civic' && p.category.toLowerCase().includes('social')) return true;
    if (filterCategory === 'commercial' && (p.category.toLowerCase().includes('startup') || p.category.toLowerCase().includes('enterprise'))) return true;
    if (filterCategory === 'education' && p.category.toLowerCase().includes('literacy')) return true;
    return true;
  });

  return (
    <section id="work" className="projects-section-container py-20 px-3.5 sm:px-6 max-w-6xl mx-auto border-t border-neo-border">
      {/* Section Header */}
      <div className="projects-header-container flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="projects-header-badge neo-badge mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-current" />
            <span>VENTURES, IMPACT & OPERATIONS</span>
          </div>
          <h2 className="projects-headline-title text-3xl sm:text-5xl font-black text-neo-text font-display">
            Featured Startups & Work
          </h2>
        </div>
        <p className="projects-header-subtitle text-sm text-neo-muted max-w-md font-medium">
          Real grassroots execution: social welfare tech, co-founded startups, retail enterprise management, and youth financial literacy.
        </p>
      </div>

      {/* Interactive Category Filter Pills */}
      <div className="projects-filter-bar flex flex-wrap items-center gap-2 mb-8 font-mono">
        <span className="text-xs font-bold text-neo-muted flex items-center gap-1 mr-1">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter:</span>
        </span>
        {[
          { id: 'all', label: 'All Ventures' },
          { id: 'civic', label: '🚑 CivicSOS Tech' },
          { id: 'commercial', label: '🛍️ Commercial & Retail' },
          { id: 'education', label: '📚 Financial Literacy' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setFilterCategory(tab.id);
              sound.playClick(500, 'sine');
            }}
            className={`projects-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold neo-btn transition-all ${
              filterCategory === tab.id
                ? 'bg-neo-accent text-neo-accentText border-2 border-black'
                : 'bg-neo-card text-neo-text hover:bg-neo-bg'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid of Projects */}
      <div className="projects-bento-grid grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* CARD 1: BookMyEmergency (Span: 8 Cols) */}
        {(() => {
          const p = filteredProjects.find((item) => item.id === 'bookmyemergency-welfare');
          if (!p) return null;
          return (
            <div className="project-card-bookmyemergency lg:col-span-8 neo-card p-5 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="neo-badge">
                    <HeartHandshake className="w-3.5 h-3.5 text-current" />
                    Social Welfare & SOS Tech
                  </span>
                  <span className="text-xs font-mono font-bold text-neo-text bg-black px-2.5 py-0.5 rounded-full border border-neo-border">
                    ● Building Now
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-neo-text font-display">
                  {p.title}
                </h3>
                <p className="text-sm text-neo-muted leading-relaxed max-w-2xl font-medium">
                  {p.description}
                </p>

                {/* Mission Pillars Box */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-neo-bg border-2 border-neo-border text-center">
                  <div className="space-y-0.5">
                    <div className="text-base sm:text-lg font-black font-mono text-neo-text">&lt; 60s Triage</div>
                    <div className="text-[11px] font-mono text-neo-muted font-bold">Rapid SOS Routing</div>
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-base sm:text-lg font-black font-mono text-neo-text">Verified Providers</div>
                    <div className="text-[11px] font-mono text-neo-muted font-bold">Ambulance & Hospitals</div>
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-base sm:text-lg font-black font-mono text-neo-text">Public Good</div>
                    <div className="text-[11px] font-mono text-neo-muted font-bold">Zero-Fee Welfare</div>
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neo-border">
                <div className="flex flex-wrap items-center gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-neo-bg border border-neo-border text-[11px] font-mono font-bold text-neo-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    onSelectProject(p);
                    sound.playSuccess();
                  }}
                  className="project-mission-overview-btn w-full sm:w-auto px-4 py-2 rounded-xl bg-neo-card text-neo-text font-extrabold text-xs neo-btn flex items-center justify-center gap-1.5 hover:bg-neo-accent hover:text-neo-accentText transition-colors"
                >
                  <span>Read Mission Overview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })()}

        {/* CARD 2: Guldasta (Span: 4 Cols) */}
        {(() => {
          const p = filteredProjects.find((item) => item.id === 'guldasta-startup');
          if (!p) return null;
          return (
            <div className="project-card-guldasta lg:col-span-4 neo-card p-5 sm:p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="neo-badge">
                    <Sparkles className="w-3.5 h-3.5 text-current" />
                    {p.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-neo-muted">
                    {p.timeline}
                  </span>
                </div>

                <h3 className="text-xl font-black text-neo-text font-display">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-neo-muted leading-relaxed font-medium">
                  {p.subtitle}
                </p>

                {/* Startup Highlights Note */}
                <div className="p-3.5 rounded-xl bg-neo-bg border border-neo-border space-y-1">
                  <div className="text-[11px] font-mono font-bold text-neo-text flex items-center gap-1">
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
                  onClick={() => {
                    onSelectProject(p);
                    sound.playSuccess();
                  }}
                  className="w-9 h-9 rounded-full bg-neo-bg border-2 border-neo-border flex items-center justify-center hover:bg-neo-accent hover:text-neo-accentText transition-all"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })()}

        {/* CARD 3: New Era Electronics (Span: 4 Cols) */}
        {(() => {
          const p = filteredProjects.find((item) => item.id === 'new-era-electronics');
          if (!p) return null;
          return (
            <div className="project-card-newera lg:col-span-4 neo-card p-5 sm:p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="neo-badge">
                    <Building2 className="w-3.5 h-3.5 text-current" />
                    {p.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-neo-muted">
                    Family Enterprise
                  </span>
                </div>

                <h3 className="text-xl font-black text-neo-text font-display">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-neo-muted leading-relaxed font-medium">
                  {p.subtitle}
                </p>

                <div className="p-3.5 rounded-xl bg-neo-bg border border-neo-border space-y-2">
                  <div className="text-[11px] font-mono font-bold text-neo-text flex items-center gap-1.5">
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
                  onClick={() => {
                    onSelectProject(p);
                    sound.playSuccess();
                  }}
                  className="w-9 h-9 rounded-full bg-neo-bg border-2 border-neo-border flex items-center justify-center hover:bg-neo-accent hover:text-neo-accentText transition-all"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })()}

        {/* CARD 4: Youth Capital Foundation (Span: 8 Cols) */}
        {(() => {
          const p = filteredProjects.find((item) => item.id === 'youth-capital-foundation');
          if (!p) return null;
          return (
            <div className="project-card-youthcapital lg:col-span-8 neo-card p-5 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="neo-badge">
                    <Users className="w-3.5 h-3.5 text-current" />
                    {p.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-neo-muted">
                    {p.timeline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-neo-text font-display">
                  {p.title}
                </h3>
                <p className="text-sm text-neo-muted leading-relaxed max-w-2xl font-medium">
                  Serving as a core pillar of Youth Capital Foundation dedicated to reaching underprivileged students and making everyone financially aware through accessible money management and savings guidance.
                </p>

                {/* Outreach Metrics Box */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-neo-bg border-2 border-neo-border text-center">
                  <div className="space-y-0.5">
                    <div className="text-base sm:text-lg font-black font-mono text-neo-text">Underprivileged Students</div>
                    <div className="text-[11px] font-mono text-neo-muted font-bold">Primary Target Audience</div>
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-base sm:text-lg font-black font-mono text-neo-text">Universal Access</div>
                    <div className="text-[11px] font-mono text-neo-muted font-bold font-display">Financial Awareness for All</div>
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-base sm:text-lg font-black font-mono text-neo-text">Core Literacy Member</div>
                    <div className="text-[11px] font-mono text-neo-muted font-bold">Community Education</div>
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neo-border">
                <div className="flex flex-wrap items-center gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-neo-bg border border-neo-border text-[11px] font-mono font-bold text-neo-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    onSelectProject(p);
                    sound.playSuccess();
                  }}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-neo-card text-neo-text font-extrabold text-xs neo-btn flex items-center justify-center gap-1.5 hover:bg-neo-accent hover:text-neo-accentText transition-colors"
                >
                  <span>Read Initiative Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
