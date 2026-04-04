'use client';

import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

const Particles = dynamic(() => import('@/components/Particles'), {
  ssr: false,
});

export default function ParticlesBackground() {
  const { theme } = useTheme();
  const color = theme === 'light' ? '#6b6b6b' : '#ffffff';

  return (
    <Particles
      particleColors={[color, color]}
      particleCount={300}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={100}
      moveParticlesOnHover={false}
      alphaParticles={true}
      disableRotation={true}
    />
  );
}
