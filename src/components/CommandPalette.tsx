import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  ArrowRight,
  Mail,
  Phone,
  Linkedin,
  Calculator,
  Layers,
  BookOpen,
  GraduationCap,
  X,
  FileSpreadsheet,
  Building2,
  Sparkles,
  HeartHandshake,
  Award,
  Trophy
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/projects';
import { Project } from '../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  onCopyEmail: () => void;
  onCopyPhone: () => void;
  onShowToast: (msg: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject,
  onCopyEmail,
  onCopyPhone,
  onShowToast
}) => {
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : undefined;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'credentials',
      title: 'Academic Honours & Certifications',
      subtitle: '96.2% Class 10th Trophy, CBSE Marksheet & Ludhiana Stock & Capital Certificate',
      icon: Award,
      category: 'Honours',
      action: () => {
        window.location.hash = '#credentials';
        document.getElementById('credentials')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'bookmyemergency',
      title: 'BookMyEmergency (Social Welfare)',
      subtitle: 'Rapid emergency response coordination platform',
      icon: HeartHandshake,
      category: 'Startups',
      action: () => {
        const p = FEATURED_PROJECTS.find(x => x.id === 'bookmyemergency-welfare');
        if (p) onSelectProject(p);
        onClose();
      }
    },
    {
      id: 'guldasta',
      title: 'Guldasta (Co-Founder)',
      subtitle: 'Started Jan 2026 • Curated lifestyle commerce and creative products',
      icon: Sparkles,
      category: 'Startups',
      action: () => {
        const p = FEATURED_PROJECTS.find(x => x.id === 'guldasta-startup');
        if (p) onSelectProject(p);
        onClose();
      }
    },
    {
      id: 'new-era',
      title: 'New Era Electronics (Manager)',
      subtitle: 'Inventory operations, supplier reconciliations & sales management',
      icon: Building2,
      category: 'Business',
      action: () => {
        const p = FEATURED_PROJECTS.find(x => x.id === 'new-era-electronics');
        if (p) onSelectProject(p);
        onClose();
      }
    },
    {
      id: 'ycf',
      title: 'Youth Capital Foundation',
      subtitle: 'Core Literacy Member • Empowering underprivileged students & financial awareness for all',
      icon: Award,
      category: 'Community',
      action: () => {
        const p = FEATURED_PROJECTS.find(x => x.id === 'youth-capital-foundation');
        if (p) onSelectProject(p);
        onClose();
      }
    },
    {
      id: 'lse-cert',
      title: 'Ludhiana Stock and Capital Limited',
      subtitle: 'Capital markets training internship certificate (Rated "Excellent")',
      icon: Trophy,
      category: 'Credentials',
      action: () => {
        window.location.hash = '#credentials';
        document.getElementById('credentials')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'email',
      title: 'Copy Direct Email Address',
      subtitle: 'gursimran7058@gmail.com',
      icon: Mail,
      category: 'Contact',
      action: () => {
        onCopyEmail();
        onClose();
      }
    },
    {
      id: 'phone',
      title: 'Copy Phone Contact',
      subtitle: '+91 7508002768',
      icon: Phone,
      category: 'Contact',
      action: () => {
        onCopyPhone();
        onClose();
      }
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn Profile',
      subtitle: 'linkedin.com/in/gursimran-singh-jodhka-75a361321',
      icon: Linkedin,
      category: 'Social',
      action: () => {
        window.open('https://www.linkedin.com/in/gursimran-singh-jodhka-75a361321/', '_blank');
        onClose();
      }
    },
    {
      id: 'nav-now',
      title: 'View /now Focus',
      subtitle: 'Current focus: School, startups, campus visits, fitness',
      icon: Layers,
      category: 'Navigation',
      action: () => {
        window.location.hash = '#now';
        onClose();
      }
    },
    {
      id: 'nav-exp',
      title: 'View Roadmap & Experience',
      subtitle: 'B.C.M. Arya School, New Era Electronics & IIT hostel stays',
      icon: GraduationCap,
      category: 'Navigation',
      action: () => {
        window.location.hash = '#experience';
        onClose();
      }
    }
  ];

  const filtered = actions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-zinc-950/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.15 }}
        className="w-full max-w-xl rounded-3xl neo-card shadow-2xl overflow-hidden border-2 border-neo-border"
      >
        {/* Search Header */}
        <div className="p-4 border-b-2 border-neo-border flex items-center gap-3">
          <Search className="w-5 h-5 text-neo-muted shrink-0" />
          <input
            type="text"
            placeholder="Search ventures, startups, contact or jump to sections..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm sm:text-base font-mono font-bold text-neo-text placeholder-neo-muted outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-neo-bg text-neo-muted hover:text-neo-text border border-neo-border"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs font-mono text-neo-muted">
              No matching actions found. Try searching "BookMyEmergency", "Guldasta", "IIT", or "Email".
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={item.action}
                  className="p-3 rounded-2xl hover:bg-neo-green hover:text-black transition-colors cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-neo-bg border border-neo-border flex items-center justify-center text-neo-text group-hover:text-black group-hover:border-black shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-black text-neo-text group-hover:text-black font-display">
                        {item.title}
                      </div>
                      <div className="text-[11px] font-mono text-neo-muted group-hover:text-zinc-800">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-neo-bg text-neo-muted border border-neo-border group-hover:bg-black group-hover:text-white group-hover:border-black">
                      {item.category}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-neo-muted group-hover:text-black" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t-2 border-neo-border bg-neo-bg flex items-center justify-between text-[11px] font-mono text-neo-muted">
          <span>Gursimran S. Jodhka • B.C.M. Arya Model School</span>
          <span className="bg-black text-white px-2 py-0.5 rounded text-[10px]">ESC to close</span>
        </div>
      </motion.div>
    </div>
  );
};
