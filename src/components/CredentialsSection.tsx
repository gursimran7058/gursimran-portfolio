import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, CheckCircle2, Maximize2, X } from 'lucide-react';
import IMAGES from '../assets/images';
import { sound } from '../utils/audio';

interface CredentialItem {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  date: string;
  category: 'Academic Honor' | 'Internship' | 'Board Examination';
  grade?: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
  highlights: string[];
}

export const CREDENTIALS_DATA: CredentialItem[] = [
  {
    id: 'lse-training-cert',
    title: 'Training Internship Certificate',
    subtitle: 'Ludhiana Stock and Capital Limited',
    organization: 'Ludhiana Stock and Capital Limited (Feroze Gandhi Market, Ludhiana)',
    date: 'June 2026',
    category: 'Internship',
    grade: 'Rated "Excellent"',
    description: 'Underwent professional training in capital market operations, clearing mechanisms, institutional trading, and regulatory compliances. Evaluated with the top "Excellent" grade by the Incharge (Training) and Director.',
    image: IMAGES.lseCert,
    alt: 'Ludhiana Stock and Capital Limited Training Certificate',
    badge: 'Capital Markets Internship',
    highlights: [
      'Issued by Ludhiana Stock and Capital Limited (Reg. No. ST28/2026)',
      'Training completed from 8th June 2026 to 13th June 2026',
      'Performance, conduct, and behaviour formally awarded "Excellent" status'
    ]
  },
  {
    id: 'bcm-award-honour-trophy',
    title: 'Award of Honour — Class 10th (96.2%)',
    subtitle: 'BCM Arya Model Sr. Sec. School Trophy',
    organization: 'BCM Arya Model Sr. Sec. School, Shastri Nagar, Ludhiana',
    date: 'Session 2025-26',
    category: 'Academic Honor',
    grade: '96.2% Aggregate',
    description: 'Prestigious golden star trophy presented to Gursimran Singh Jodhka for stellar performance in Class 10 Board examinations, securing an aggregate of 96.2% in Session 2025-26.',
    image: IMAGES.trophy,
    alt: 'Award of Honour Trophy 96.2% Class 10 BCM Arya Model School',
    badge: '96.2% Academic Topper',
    highlights: [
      'Official Award of Honour by BCM Arya Model Sr. Sec. School',
      'Awarded for academic brilliance and scoring 96.2%',
      'Presented by school management and principal'
    ]
  },
  {
    id: 'cbse-class10-marksheet',
    title: 'CBSE Class 10 Board Marksheet (96.2%)',
    subtitle: 'Central Board of Secondary Education Certificate',
    organization: 'Central Board of Secondary Education (CBSE, Delhi)',
    date: 'July 2026',
    category: 'Board Examination',
    grade: '96.2% Aggregate (All A1s)',
    description: 'Official Marks Statement cum Certificate for Secondary School Examination 2026 (Roll No. 13188082). Outstanding subject scores including 99 in Financial Markets and 97 in Mathematics.',
    image: IMAGES.marksheet,
    alt: 'CBSE Marks Statement cum Certificate 96.2% Gursimran Singh Jodhka',
    badge: '99/100 Fin Markets',
    highlights: [
      'Introduction to Financial Markets (405): 99 / 100 (A1)',
      'Mathematics Standard (041): 97 / 100 (A1)',
      'Punjabi (004): 96 / 100 (A1) • English (184): 95 / 100 (A1)',
      'Science: 92 / 100 (A1) • Social Science: 94 / 100 (A1)'
    ]
  },
  {
    id: 'bcm-appreciation-certificate',
    title: 'Award of Academic Excellence Certificate',
    subtitle: 'BCM Arya Model Sr. Sec. School',
    organization: 'BCM Arya Model Sr. Sec. School, Shastri Nagar, Ludhiana',
    date: '25 July 2026',
    category: 'Academic Honor',
    grade: '96.2% Excellence',
    description: 'Certificate of Appreciation presented to Gursimar Singh Jodhka for securing 96.2% in Class X in recognition of outstanding achievement and exemplary commitment in multifaceted learning.',
    image: IMAGES.bcmCert,
    alt: 'BCM Arya Certificate of Appreciation Award of Academic Excellence',
    badge: 'Academic Excellence Award',
    highlights: [
      'Signed by Principal, BCM Arya Model Sr. Sec. School',
      'Honoured with Award of Academic Excellence for 96.2%',
      'Recognized for multifaceted learning and academic leadership'
    ]
  }
];

export const CredentialsSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<CredentialItem | null>(null);

  const openDocument = (item: CredentialItem) => {
    setActiveImage(item);
    sound.playSuccess();
  };

  return (
    <section id="credentials" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-neo-border">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neo-orange text-white text-xs font-mono font-extrabold border-1.5 border-black mb-2 shadow-[2px_2px_0px_#111115]">
            <Trophy className="w-3.5 h-3.5" />
            <span>VERIFIED ACADEMIC & PROFESSIONAL MERIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neo-text font-display">
            Honours & Certifications
          </h2>
        </div>
        <p className="text-sm text-neo-muted max-w-md font-medium">
          Verified certificates, board marksheet, and institutional honors documenting my 96.2% Class 10th academic performance and capital markets training.
        </p>
      </div>

      {/* Grid of Credentials - 4 in a row (Pudding.cool style visual story grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {CREDENTIALS_DATA.map((item) => (
          <div
            key={item.id}
            className="neo-card overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
          >
            {/* Image Preview Box - Pudding.cool Visual Thumbnail */}
            <div
              onClick={() => openDocument(item)}
              className="relative h-44 sm:h-48 bg-zinc-100 dark:bg-zinc-900 border-b-2 border-neo-border cursor-pointer overflow-hidden flex items-center justify-center p-2.5"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="max-h-full max-w-full object-contain rounded-md group-hover:scale-105 transition-transform duration-300 shadow-sm"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  const filenameMap: Record<string, string> = {
                    'lse-training-cert': 'ludhiana-stock-exchange-certificate.png',
                    'bcm-award-honour-trophy': 'trophy-10th-96.jpg',
                    'cbse-class10-marksheet': 'cbse-marksheet-10th.jpg',
                    'bcm-appreciation-certificate': 'bcm-certificate-academic-excellence.png'
                  };
                  const fname = filenameMap[item.id];
                  if (fname) {
                    if (!target.dataset.triedFallback1) {
                      target.dataset.triedFallback1 = 'true';
                      target.src = `./assets/${fname}`;
                    } else if (!target.dataset.triedFallback2) {
                      target.dataset.triedFallback2 = 'true';
                      target.src = `assets/${fname}`;
                    } else if (!target.dataset.triedFallback3) {
                      target.dataset.triedFallback3 = 'true';
                      target.src = `https://gursimran7058.github.io/gursimran-portfolio/assets/${fname}`;
                    }
                  }
                }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-mono text-[11px] font-bold backdrop-blur-[1px]">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Expand Story</span>
              </div>
              <span className="absolute top-2.5 left-2.5 neo-badge bg-neo-purple text-white font-extrabold text-[10px] shadow-sm">
                {item.badge}
              </span>
            </div>

            {/* Content Details */}
            <div className="p-3.5 sm:p-4 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-neo-muted">
                  <span className="truncate max-w-[130px]">{item.organization}</span>
                  <span className="text-purple-500 font-extrabold shrink-0 ml-1 text-[10px]">{item.grade}</span>
                </div>

                <h3 className="text-sm font-black text-neo-text font-display group-hover:text-purple-500 transition-colors leading-snug line-clamp-2">
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
                    <CheckCircle2 className="w-3 h-3 text-purple-500 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{point}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={() => openDocument(item)}
                className="mt-2 w-full py-2 rounded-xl bg-neo-bg border-2 border-neo-border text-neo-text font-mono font-extrabold text-xs neo-btn flex items-center justify-center gap-1.5 hover:bg-neo-purple hover:text-white transition-all"
              >
                <Maximize2 className="w-3 h-3" />
                <span>Inspect Document</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* High-Resolution Document Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neo-card border-2 border-black max-w-4xl w-full max-h-[92vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Top Bar */}
              <div className="p-3 sm:p-4 border-b-2 border-neo-border flex items-center justify-between bg-neo-bg">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <span className="neo-badge bg-neo-purple text-white text-[11px] font-mono font-black shrink-0">
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
                  className="p-1.5 sm:p-2 rounded-xl border-2 border-neo-border bg-neo-card text-neo-text hover:bg-rose-500 hover:text-white transition-colors shrink-0 ml-2"
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
                <span className="text-blue-500 font-bold shrink-0">{activeImage.grade}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
