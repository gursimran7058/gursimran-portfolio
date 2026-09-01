import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  angle: number;
  speed: number;
}

export const InteractiveAura: React.FC = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleClick = (e: MouseEvent) => {
      const colors = ['#7C3AED', '#C084FC', '#EA580C', '#FB923C'];
      const newParticles: Particle[] = Array.from({ length: 8 }).map((_, i) => ({
        id: Date.now() + i + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: (i * 45 * Math.PI) / 180,
        speed: Math.random() * 40 + 30,
      }));

      setParticles((prev) => [...prev.slice(-16), ...newParticles]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
    };
  }, [isVisible]);

  // Clean up particles
  useEffect(() => {
    if (particles.length === 0) return;
    const timer = setTimeout(() => {
      setParticles([]);
    }, 800);
    return () => clearTimeout(timer);
  }, [particles]);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {/* Dynamic Ambient Spotlight */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[110px] transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)`,
          background: 'radial-gradient(circle, var(--aura-color) 0%, rgba(0,0,0,0) 70%)',
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Click Interactive Spark Particles */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{
              x: p.x,
              y: p.y,
              scale: 1,
              opacity: 1,
            }}
            animate={{
              x: p.x + Math.cos(p.angle) * p.speed,
              y: p.y + Math.sin(p.angle) * p.speed - 15,
              scale: 0.1,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="absolute rounded-full pointer-events-none shadow-sm"
            style={{
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
