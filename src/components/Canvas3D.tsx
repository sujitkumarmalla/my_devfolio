import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  px: number; // projected X
  py: number; // projected Y
  color: string;
}


export const Canvas3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();
  
  // Keep mouse coordinates in ref to prevent unnecessary redraw cycles
  const mouseRef = useRef({ x: 0, y: 0, rx: 0, ry: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Re-adjust on resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.rx = (e.clientX - width / 2) / (width / 2);
      mouseRef.current.ry = (e.clientY - height / 2) / (height / 2);
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Initialize particles on a 3D Sphere using Fibonacci lattice (original rotating globe)
    const particleCount = 120;
    const sphereRadius = Math.min(width, height) * 0.25;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(1 - (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const x = sphereRadius * Math.sin(phi) * Math.cos(theta);
      const y = sphereRadius * Math.sin(phi) * Math.sin(theta);
      const z = sphereRadius * Math.cos(phi);

      particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        px: 0,
        py: 0,
        color: '',
      });
    }

    // Rotation angles
    let angleX = 0.001;
    let angleY = 0.002;

    const fov = 350; // Field of View (depth projection)

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';

      // Dynamically adjust rotation speed based on mouse position
      const targetAngleX = mouseRef.current.active ? mouseRef.current.ry * 0.01 : 0.001;
      const targetAngleY = mouseRef.current.active ? mouseRef.current.rx * 0.01 : 0.002;
      
      // Interpolate angles for smooth speed change transitions
      angleX += (targetAngleX - angleX) * 0.05;
      angleY += (targetAngleY - angleY) * 0.05;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Theme-based colors for the 3D globe
      const particleColor = isDark ? 'rgba(194, 179, 163, 0.4)' : 'rgba(140, 122, 107, 0.4)';
      const highlightColor = isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(99, 83, 75, 0.6)';

      // 1. Rotate & project 3D sphere particles
      particles.forEach((p) => {
        // Rotate Y
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // Rotate X
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        p.x = x1;
        p.y = y2;
        p.z = z2;

        // Project to 2D
        const scale = fov / (fov + z2);
        p.px = x1 * scale + width / 2;
        p.py = y2 * scale + height / 2;
      });

      // 2. Draw 3D globe connections (lines)
      const maxDistance = sphereRadius * 0.8;
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pi = particles[i];
          const pj = particles[j];

          // Calculate 3D distance
          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const dz = pi.z - pj.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            // Fading opacity based on distance
            const alpha = (1 - dist / maxDistance) * (isDark ? 0.12 : 0.08);
            ctx.strokeStyle = isDark 
              ? `rgba(194, 179, 163, ${alpha})` 
              : `rgba(140, 122, 107, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(pi.px, pi.py);
            ctx.lineTo(pj.px, pj.py);
            ctx.stroke();
          }
        }
      }

      // 3. Draw 3D globe particles
      particles.forEach((p) => {
        // Size mapping based on depth (z coord)
        // Back particles are smaller, front are larger
        const size = Math.max(0.5, ((fov - p.z) / fov) * 2.5);
        
        // Front particles glow or get highlighted if mouse is near
        let isHighlighted = false;
        if (mouseRef.current.active) {
          const dx = p.px - mouseRef.current.x;
          const dy = p.py - mouseRef.current.y;
          const dist2D = Math.sqrt(dx * dx + dy * dy);
          if (dist2D < 120 && p.z < 0) {
            isHighlighted = true;
          }
        }

        ctx.fillStyle = isHighlighted ? highlightColor : particleColor;
        ctx.beginPath();
        ctx.arc(p.px, p.py, size, 0, Math.PI * 2);
        ctx.fill();

        if (isHighlighted) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = highlightColor;
          ctx.beginPath();
          ctx.arc(p.px, p.py, size * 1.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0; // Reset
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-1000"
      style={{ opacity: theme === 'dark' ? 0.8 : 0.6 }}
    />
  );
};
