import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt angle in degrees
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 10,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transformStyle, setTransformStyle] = useState<string>('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalized coordinate relative to center (range -0.5 to 0.5)
    const normX = mouseX / width - 0.5;
    const normY = mouseY / height - 0.5;

    // Rotation angles
    const rotateX = -normY * maxTilt;
    const rotateY = normX * maxTilt;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);

    // Glare position
    const glareX = (mouseX / width) * 100;
    const glareY = (mouseY / height) * 100;
    setGlareStyle({
      opacity: 0.15,
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 60%)`,
    });
  };

  const handleMouseLeave = () => {
    // Reset transforms smoothly
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlareStyle({
      opacity: 0,
      transition: 'all 0.5s ease',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
        transformStyle: 'preserve-3d',
      }}
      className={`relative overflow-hidden cursor-pointer ${className}`}
    >
      {/* Glare Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={glareStyle}
      />
      {/* Inner Content wrapper */}
      <div className="w-full h-full relative z-20">
        {children}
      </div>
    </div>
  );
};
