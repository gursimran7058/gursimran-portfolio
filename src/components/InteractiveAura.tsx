import React, { useEffect, useState } from 'react';

export const InteractiveAura: React.FC = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 overflow-hidden"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div
        className="absolute w-[450px] h-[450px] rounded-full blur-[100px] transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${pos.x - 225}px, ${pos.y - 225}px)`,
          background: 'radial-gradient(circle, var(--aura-color) 0%, rgba(0,0,0,0) 70%)',
        }}
      />
    </div>
  );
};
