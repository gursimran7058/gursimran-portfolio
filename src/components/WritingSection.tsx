import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ArrowUpRight, Clock, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { FINANCIAL_ESSAYS, Article } from '../data/writing';

interface WritingSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const WritingSection: React.FC<WritingSectionProps> = ({ onSelectArticle }) => {
  return (
    <section id="writing" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-neo-border">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neo-yellow text-black text-xs font-mono font-extrabold border-1.5 border-black mb-2 shadow-[2px_2px_0px_#111115]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>ESSAYS, MODELS & PERSPECTIVES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-neo-text font-display">
            Financial Writing & Notes
          </h2>
        </div>
        <p className="text-sm text-neo-muted max-w-md font-medium">
          Short, dense breakdowns of corporate valuation, compound interest mathematics, and discipline in financial markets.
        </p>
      </div>

      {/* Sam Dickie / Varneet.in Style List */}
      <div className="space-y-4">
        {FINANCIAL_ESSAYS.map((essay) => {
          const badgeBg =
            essay.tagColor === 'green'
              ? 'bg-neo-green'
              : essay.tagColor === 'purple'
              ? 'bg-neo-purple'
              : essay.tagColor === 'blue'
              ? 'bg-neo-blue'
              : 'bg-neo-yellow';

          return (
            <div
              key={essay.id}
              onClick={() => onSelectArticle(essay)}
              className="neo-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer group"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className={`neo-badge ${badgeBg} text-black font-extrabold text-[10px]`}>
                    {essay.tag}
                  </span>
                  <span className="text-xs font-mono text-neo-muted flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {essay.readTime}
                  </span>
                  <span className="text-xs font-mono text-neo-muted hidden sm:inline">• {essay.date}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-neo-text font-display group-hover:text-emerald-500 transition-colors">
                  {essay.title}
                </h3>

                <p className="text-xs sm:text-sm text-neo-muted max-w-2xl leading-relaxed">
                  {essay.summary}
                </p>
              </div>

              {/* Circular Arrow Button (Inspired by varneet.in .sam-featured-arrow) */}
              <div className="w-11 h-11 rounded-full bg-neo-bg border-2 border-neo-border flex items-center justify-center text-neo-text group-hover:bg-neo-green group-hover:text-black group-hover:border-black group-hover:scale-105 transition-all shrink-0 self-end sm:self-center shadow-[2px_2px_0px_var(--border-color)]">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
