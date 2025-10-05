'use client';

import React, { Suspense } from "react";
import { Reenie_Beanie, Poppins, Permanent_Marker } from 'next/font/google';
import TextType from "@/components/TextType";
import RotatingText from "@/components/RotatingText";
import ModelViewer from "@/components/ModelViewer";
import Section from "@/components/layout/Section";
import { FadeInElement } from "@/components/animations/ContentAnimation";

const reenieBeanie = Reenie_Beanie({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: ['300'],
  subsets: ['latin'],
  display: 'swap',
});

const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

// Responsive shape component that adapts the L-shape for mobile
const ResponsiveShape = ({ className = "" }) => {
  return (
    <div className={className}>
      {/* Mobile: Taller SVG */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 720 280" 
        className="block md:hidden w-full h-auto drop-shadow-2xl"
        style={{ imageRendering: 'pixelated' }}
      >
        <path 
          d="M 0 24 C 0 10.745 10.745 0 24 0 L 696 0 C 709.255 0 720 10.745 720 24 L 720 120 C 720 133.255 709.255 144 696 144 L 392 144 C 378.745 144 368 154.745 368 168 L 368 256 C 368 269.255 357.255 280 344 280 L 24 280 C 10.745 280 0 269.255 0 256 Z" 
          fill="#212121"
        />
        <rect
          x="392"
          y="168"
          width="328"
          height="112"
          rx="24"
          ry="24"
          fill="#212121"
        />
      </svg>
      
      {/* Desktop: Original SVG */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 720 215" 
        className="hidden md:block w-full h-auto drop-shadow-2xl"
        style={{ imageRendering: 'pixelated' }}
      >
        <path 
          d="M 0 24 C 0 10.745 10.745 0 24 0 L 696 0 C 709.255 0 720 10.745 720 24 L 720 83.5 C 720 96.755 709.255 107.5 696 107.5 L 392 107.5 C 378.745 107.5 368 118.245 368 131.5 L 368 191 C 368 204.255 357.255 215 344 215 L 24 215 C 10.745 215 0 204.255 0 191 Z" 
          fill="#212121"
        />
        <rect
          x="392"
          y="131.5"
          width="328"
          height="83.5"
          rx="24"
          ry="24"
          fill="#212121"
        />
      </svg>
    </div>
  );
};

const ModelFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="animate-spin rounded-full h-6 w-6 md:h-8 md:w-8 border-b-2 border-gray-400"></div>
  </div>
);

const Hero = () => {
  return (
    <Section className="pt-20 pb-8 md:pt-24">
      <FadeInElement delay={0.3}>
        <div className="relative">
          <ResponsiveShape />
          
          {/* "Hey! I'm" - Responsive positioning */}
          <div className="absolute top-[18%] md:top-[15%] left-[8%] md:left-[7%] transform -translate-y-1/2">
            <div className="text-xs md:text-base lg:text-lg text-gray-400">
              Hey! I&apos;m
            </div>
          </div>

          {/* "Derkyu" - Responsive positioning and sizing - MÁS GRANDE EN MÓVIL */}
          <div className="absolute top-[35%] md:top-[32%] left-[8%] md:left-[7%] transform -translate-y-1/2 rotate-[-2deg] md:rotate-[-3deg] origin-left">
            <TextType
              text="Derkyu"
              typingSpeed={800}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
              loop={false}
              className={`text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-300 ${reenieBeanie.className}`}
            />
          </div>
          
          {/* 3D Model - Responsive positioning and sizing */}
          <div className="absolute top-[-8%] md:top-[-5%] right-[5%] md:right-[3%] w-[30%] md:w-[35%] h-[45%] md:h-[50%] min-w-[80px] md:min-w-[120px] min-h-[80px] md:min-h-[120px]">
            <Suspense fallback={<ModelFallback />}>
              <ModelViewer
                url="/models/shinchan.glb"
                width="100%"
                height="100%"
                defaultZoom={2.3}
                minZoomDistance={1}
                maxZoomDistance={6}
                autoRotate={true}
                autoRotateSpeed={0.8}
                onModelLoaded={() => console.log('Modelo 3D cargado correctamente')}
              />
            </Suspense>
          </div>
          
          {/* "Digital Enjoyer" info - Responsive positioning */}
          <div className="absolute bottom-[18%] md:bottom-[15%] left-[5%] md:left-[3%] transform translate-y-1/2">
            <div className={`${poppins.className} text-xs md:text-sm font-light text-gray-300`}>
              Digital Enjoyer
            </div>
            <div className={`${poppins.className} text-xs font-light text-gray-400 mt-1`}>
              Spain, Barcelona.
            </div>
          </div>
          
          {/* RotatingText - Responsive positioning and sizing */}
          <div className="absolute bottom-[22%] md:bottom-[20%] left-[77%] md:left-auto md:right-[23%] transform -translate-x-1/2 md:translate-x-1/2 translate-y-1/2">
            <RotatingText
              texts={['Developer', 'Gamer', 'Chatter']}
              mainClassName={`${permanentMarker.className} text-gray-300 text-center`}
              staggerFrom="first"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.05}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              rotationInterval={3000}
              style={{
                fontSize: 'clamp(1.2rem, 3.5vw, 2.5rem)',
                fontWeight: '400'
              }}
            />
          </div>
        </div>
      </FadeInElement>
    </Section>
  );
};

export default Hero;