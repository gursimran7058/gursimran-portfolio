import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FlaskConical, Download, FileSpreadsheet, ArrowUpRight, Github, BookOpen } from 'lucide-react';
import { LAB_EXPERIMENTS } from '../data/lab';
import { LabItem } from '../types';

interface LabArchiveProps {
  onShowToast: (msg: string) => void;
}

export const LabArchive: React.FC<LabArchiveProps> = ({ onShowToast }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Valuation Models', 'Accounting & Ratios', 'Startup Math', 'CFA Prep'];

  const filteredItems = LAB_EXPERIMENTS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleDownloadModel = (item: LabItem) => {
    onShowToast(`Downloaded model framework: "${item.title}"`);
  };

  return (
    <section id="lab" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <BookOpen className="w-4 h-4" />
            <span>02 // FINANCIAL RESEARCH & TEMPLATES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-display">
            Financial Modeling & Research Bench
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md">
          Curated models, ratio frameworks, DuPont analyzers, and CFA Level 1 study sheets created and maintained by Gursimran.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 p-3 rounded-2xl bg-zinc-900/60 border border-white/10 shadow-refraction backdrop-blur-md">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                selectedCategory === cat
                  ? 'bg-zinc-800 text-cyan-400 border border-cyan-500/30 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-950/80 border border-white/10 w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-zinc-400" />
          <input
            type="text"
            placeholder="Search financial models..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-xs text-zinc-200 placeholder-zinc-500 outline-none font-mono"
          />
        </div>
      </div>

      {/* Grid of Lab Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900/80 border border-white/5 hover:border-cyan-500/30 shadow-refraction flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider font-semibold ${
                      item.status === 'Completed'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                    }`}
                  >
                    {item.status}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-400">
                    <Download className="w-3 h-3 text-cyan-400" />
                    <span>{item.downloads} Uses</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white font-mono group-hover:text-cyan-400 transition-colors mb-1.5 flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item.title}</span>
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-1.5">
                  {item.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-zinc-800/80 text-[10px] font-mono text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleDownloadModel(item)}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-cyan-950 text-zinc-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 text-xs font-mono transition-colors"
                >
                  <Download className="w-3 h-3" />
                  <span>Model</span>
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
