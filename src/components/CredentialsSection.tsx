import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, CheckCircle2, Maximize2, X, ExternalLink, ShieldCheck, Award } from 'lucide-react';
import IMAGES from '../assets/images';
import { sound } from '../utils/audio';

interface AcademicDoc {
  id: string;
  title: string;
  badge: string;
  organization: string;
  grade: string;
  date: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
}

export const CredentialsSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<AcademicDoc | null>(null);

  const academicItems: AcademicDoc[] = [
    {
      id: 'cbse-10th-marksheet',
      title: 'CBSE Class 10th Board Marksheet',
      badge: '96.2% Aggregate (A1)',
      organization: 'CBSE Board • B.C.M. Arya',
      grade: '96.2% overall',
      date: 'Passout Year 2024',
      description:
        'Official Central Board of Secondary Education marksheet certifying 99/100 in Financial Markets, 97/100 in Mathematics, and 96/100 in Punjabi.',
      highlights: [
        '99 / 100 — Intro to Financial Markets',
        '97 / 100 — Mathematics Standard',
        '96 / 100 — Punjabi & 95 / 100 — English',
      ],
      image: IMAGES.marksheet,
      alt: 'Gursimran Singh Jodhka CBSE 10th Marksheet 96.2%',
    },
    {
      id: 'bcm-trophy-excellence',
      title: 'Award of Honour & Academic Trophy',
      badge: '96% Academic Excellence',
      organization: 'B.C.M. Arya Sr. Sec. School',
      grade: 'Top Scholar Award',
      date: 'Annual Award Ceremony',
      description:
        'Personal trophy awarded by B.C.M. Arya Model Sr. Sec. School management for exemplary academic performance exceeding 96%.',
      highlights: [
        'Recognized at school annual convocation',
        'Commendation for Financial Markets excellence',
        'Highest tier academic honour',
      ],
      image: IMAGES.trophy,
      alt: 'Gursimran Singh Jodhka BCM Arya 96% Trophy',
    },
    {
      id: 'ludhiana-stock-exchange-internship',
      title: 'Capital Markets Internship Certificate',
      badge: 'Rating: EXCELLENT',
      organization: 'Ludhiana Stock & Capital Ltd',
      grade: 'Grade A+ Certificate',
      date: 'Summer Internship',
      description:
        'Professional internship certificate from Ludhiana Stock & Capital Limited detailing practical training in equity trading and depository services.',
      highlights: [
        'Hands-on equity & derivative market operations',
        'Depository participant clearing & settlement workflow',
        'Commended by senior stock exchange officers',
      ],
      image: IMAGES.lseCert,
      alt: 'Gursimran Singh Jodhka Ludhiana Stock Exchange Internship Certificate',
    },
    {
      id: 'bcm-academic-excellence-certificate',
      title: 'Certificate of Academic Excellence',
      badge: 'High Distinction',
      organization: 'B.C.M. Arya Sr. Sec. School',
      grade: 'Certificate of Merit',
      date: 'School Academic Honors',
      description:
        'Formal certificate issued for outstanding academic results in Secondary School Examination, demonstrating high diligence across Commerce subjects.',
      highlights: [
        'Certified distinction across all major subjects',
        'Leadership in school commerce society',
        'Peer mentorship program contribution',
      ],
      image: IMAGES.bcmCert,
      alt: 'Gursimran Singh Jodhka Certificate of Academic Excellence BCM Arya',
    },
  ];

  const openDocument = (item: AcademicDoc) => {
    setActiveImage(item);
    sound.playSuccess();
  };

  return (
    <section
      id="credentials-section"
      className="credentials-section-container py-20 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      {/* Section Header */}
      <div className="credentials-header-container flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="credentials-header-badge neo-badge mb-2">
            <Trophy className="w-3.5 h-3.5 text-current" />
            <span>VERIFIED ACADEMIC & PROFESSIONAL MERIT</span>
          </div>
          <h2 className="credentials-headline-title text-3xl sm:text-4xl font-black text-neo-text font-display">
            Honours & Certifications
          </h2>
        </div>
        <p className="credentials-header-subtitle text-sm text-neo-muted max-w-md font-medium">
          Verified evidence of academic rank (96.2%), capital markets training, and school honors. Click any card to view the official document.
        </p>
      </div>

      {/* 4 Cards in a Row Grid */}
      <div className="credentials-story-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {academicItems.map((item) => (
          <div
            key={item.id}
            onClick={() => openDocument(item)}
            className="credentials-story-card neo-card p-0 flex flex-col justify-between overflow-hidden group cursor-pointer border-2 border-neo-border"
          >
            {/* Document Preview Image */}
            <div className="credentials-image-preview relative h-48 bg-zinc-900 overflow-hidden border-b-2 border-neo-border">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-mono text-[11px] font-bold backdrop-blur-[1px]">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Expand Story</span>
              </div>
              <span className="absolute top-2.5 left-2.5 neo-badge font-extrabold text-[10px] shadow-sm">
                {item.badge}
              </span>
            </div>

            {/* Content Details */}
            <div className="p-3.5 sm:p-4 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-neo-muted">
                  <span className="truncate max-w-[130px]">{item.organization}</span>
                  <span className="text-neo-text font-extrabold shrink-0 ml-1 text-[10px]">{item.grade}</span>
                </div>

                <h3 className="text-sm font-black text-neo-text font-display group-hover:text-neo-text transition-colors leading-snug line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs text-neo-muted leading-relaxed font-medium line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="space-y-1 pt-2 border-t border-neo-border">
                {item.highlights.slice(0, 2).map((point, idx) => (
                  <div key={idx} className="text-[11px] font-mono text-neo-text flex items-start gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-neo-text shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{point}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={() => openDocument(item)}
                className="credentials-inspect-btn mt-2 w-full py-2 rounded-xl bg-neo-bg border-2 border-neo-border text-neo-text font-mono font-extrabold text-xs neo-btn flex items-center justify-center gap-1.5 hover:bg-neo-accent hover:text-neo-accentText transition-all"
              >
                <Maximize2 className="w-3 h-3" />
                <span>Inspect Document</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox Viewer */}
      {activeImage && (
        <div className="credentials-lightbox-modal fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="neo-card max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col bg-neo-card border-2 border-neo-border shadow-2xl"
          >
            {/* Modal Top Bar */}
            <div className="p-3 sm:p-4 border-b-2 border-neo-border flex items-center justify-between bg-neo-bg">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className="neo-badge text-[11px] font-mono font-black shrink-0">
                  {activeImage.badge}
                </span>
                <div className="truncate">
                  <h4 className="text-xs sm:text-base font-black text-neo-text font-display truncate">
                    {activeImage.title}
                  </h4>
                  <span className="text-[11px] font-mono text-neo-muted hidden sm:inline">
                    {activeImage.organization} • {activeImage.date}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="p-1.5 sm:p-2 rounded-xl border-2 border-neo-border bg-neo-card text-neo-text hover:bg-neo-accent hover:text-neo-accentText transition-colors shrink-0 ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="p-3 sm:p-6 overflow-auto flex-1 flex items-center justify-center bg-zinc-950/20">
              <img
                src={activeImage.image}
                alt={activeImage.alt}
                className="max-h-[62vh] sm:max-h-[70vh] w-auto object-contain rounded-xl border border-neo-border shadow-lg"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-3 sm:p-4 border-t-2 border-neo-border bg-neo-bg text-xs font-mono text-neo-muted flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
              <span className="truncate">{activeImage.description}</span>
              <span className="text-neo-text font-bold shrink-0">{activeImage.grade}</span>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
