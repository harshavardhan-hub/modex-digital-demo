import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface DeviceConfig {
  particleCount: number;
  connectionDistance: number;
  speedMultiplier: number;
  maxRadius: number;
  minRadius: number;
  particleOpacity: number;
  connectionOpacity: number;
  lineWidth: number;
  canvasOpacity: number;
  skipConnections: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const animationFrameRef = useRef<number>();

  // Seeded random generator for consistent particle positions
  const seededRandom = (seed: number) => {
    let value = seed;
    return () => {
      value = (value * 9301 + 49297) % 233280;
      return value / 233280;
    };
  };

  // Device-specific configurations for optimal performance and appearance
  const getDeviceConfig = (): DeviceConfig => {
    const configs: Record<string, DeviceConfig> = {
      mobile: {
        particleCount: 25,
        connectionDistance: 120,
        speedMultiplier: 0.35,
        maxRadius: 2.5,
        minRadius: 1,
        particleOpacity: 0.7,
        connectionOpacity: 0.25,
        lineWidth: 0.6,
        canvasOpacity: 0.5,
        skipConnections: 2, // Every 2nd particle draws connections
      },
      tablet: {
        particleCount: 40,
        connectionDistance: 140,
        speedMultiplier: 0.42,
        maxRadius: 2.2,
        minRadius: 1,
        particleOpacity: 0.65,
        connectionOpacity: 0.28,
        lineWidth: 0.8,
        canvasOpacity: 0.45,
        skipConnections: 1, // All particles draw connections
      },
      desktop: {
        particleCount: 50,
        connectionDistance: 150,
        speedMultiplier: 0.5,
        maxRadius: 2,
        minRadius: 1,
        particleOpacity: 0.6,
        connectionOpacity: 0.3,
        lineWidth: 1,
        canvasOpacity: 0.4,
        skipConnections: 1, // All particles draw connections
      },
    };

    return configs[deviceType];
  };

  // Detect device type based on screen width
  useEffect(() => {
    const detectDevice = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType('mobile');
      } else if (width < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    detectDevice();
    window.addEventListener('resize', detectDevice);

    return () => {
      window.removeEventListener('resize', detectDevice);
    };
  }, []);

  // Main particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Set canvas size to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Get device-specific configuration
    const config = getDeviceConfig();
    const random = seededRandom(12345); // Fixed seed for consistency
    const particles: Particle[] = [];

    // Generate particles with consistent positions
    for (let i = 0; i < config.particleCount; i++) {
      particles.push({
        x: random() * canvas.width,
        y: random() * canvas.height,
        vx: (random() - 0.5) * config.speedMultiplier,
        vy: (random() - 0.5) * config.speedMultiplier,
        radius: random() * (config.maxRadius - config.minRadius) + config.minRadius,
      });
    }

    // Animation loop
    const animate = () => {
      // Create trailing effect with semi-transparent clear
      ctx.fillStyle = 'rgba(15, 23, 42, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and render each particle
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 194, 168, ${config.particleOpacity})`;
        ctx.fill();

        // Draw connections between nearby particles
        const shouldDrawConnections = i % config.skipConnections === 0;

        if (shouldDrawConnections) {
          particles.slice(i + 1).forEach((otherParticle) => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < config.connectionDistance) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              const opacity = (1 - distance / config.connectionDistance) * config.connectionOpacity;
              ctx.strokeStyle = `rgba(0, 194, 168, ${opacity})`;
              ctx.lineWidth = config.lineWidth;
              ctx.stroke();
            }
          });
        }
      });

      // Continue animation loop
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [deviceType]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: getDeviceConfig().canvasOpacity }}
    />
  );
};

export default ParticleBackground;
