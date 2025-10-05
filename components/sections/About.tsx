'use client';

import React from "react";
import { Poppins } from 'next/font/google';
import Particles from '@/components/Particles';
import Section from "@/components/layout/Section";
import { FadeInElement } from "@/components/animations/ContentAnimation";

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const About = () => {
  return (
    <Section className="py-6 md:py-8">
      <FadeInElement delay={0.6}>
        <div className="grid grid-cols-1">
          <div className="bg-[#212121] rounded-2xl p-6 md:p-16 relative overflow-hidden">
            {/* Particles - Responsive sizing */}
            <div 
              className="absolute top-0 left-0 w-full pointer-events-none"
              style={{ 
                height: 'clamp(300px, 50vw, 600px)'
              }}
            >
              <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={300} // Fewer particles on mobile
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={false}
                alphaParticles={true}
                disableRotation={true}
              />
            </div>
            
            {/* Text content */}
            <p className={`
              ${poppins.className} 
              text-sm md:text-base lg:text-lg 
              text-gray-300 
              leading-relaxed 
              font-light 
              relative 
              z-10
              max-w-none
              md:max-w-4xl
            `}>
              Developer and network technician from Barcelona, Spain. I started my programming journey in 2019 as a self-taught developer, and later expanded my knowledge by studying network systems and infrastructure.
            </p>
          </div>
        </div>
      </FadeInElement>
    </Section>
  );
};

export default About;