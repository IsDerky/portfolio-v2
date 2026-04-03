'use client';

import dynamic from 'next/dynamic';

const Particles = dynamic(() => import('@/components/Particles'), {
  ssr: false,
});

export default function ParticlesBackground() {
  return (
    <Particles
      particleColors={['#ffffff', '#ffffff']}
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
