'use client';

import dynamic from "next/dynamic";
import { reenieBeanie, poppins, permanentMarker } from "@/lib/fonts";
import TextType from "@/components/TextType";
import RotatingText from "@/components/RotatingText";
import Section from "@/components/layout/Section";

const ModelViewer = dynamic(() => import("@/components/ModelViewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-10 w-10 md:h-12 md:w-12 border-2 border-transparent border-t-fg-subtle border-r-fg-subtle" style={{ animationDuration: '0.6s' }}></div>
    </div>
  ),
});

const ResponsiveShape = ({ className = "" }) => (
  <div className={className}>
    {/* Mobile */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 720 280"
      className="block md:hidden w-full h-auto drop-shadow-2xl"
      style={{ imageRendering: 'pixelated' }}
    >
      <path
        d="M 0 24 C 0 10.745 10.745 0 24 0 L 696 0 C 709.255 0 720 10.745 720 24 L 720 120 C 720 133.255 709.255 144 696 144 L 392 144 C 378.745 144 368 154.745 368 168 L 368 256 C 368 269.255 357.255 280 344 280 L 24 280 C 10.745 280 0 269.255 0 256 Z"
        className="fill-surface-2"
      />
      <rect x="392" y="168" width="328" height="112" rx="24" ry="24" className="fill-surface-2" />
    </svg>

    {/* Desktop */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 720 215"
      className="hidden md:block w-full h-auto drop-shadow-2xl"
      style={{ imageRendering: 'pixelated' }}
    >
      <path
        d="M 0 24 C 0 10.745 10.745 0 24 0 L 696 0 C 709.255 0 720 10.745 720 24 L 720 83.5 C 720 96.755 709.255 107.5 696 107.5 L 392 107.5 C 378.745 107.5 368 118.245 368 131.5 L 368 191 C 368 204.255 357.255 215 344 215 L 24 215 C 10.745 215 0 204.255 0 191 Z"
        className="fill-surface-2"
      />
      <rect x="392" y="131.5" width="328" height="83.5" rx="24" ry="24" className="fill-surface-2" />
    </svg>
  </div>
);

const Hero = () => {
  return (
    <Section className="pt-20 pb-8 md:pt-24">
      <div className="relative">
          <ResponsiveShape />

          <div className="absolute top-[18%] md:top-[15%] left-[8%] md:left-[7%] transform -translate-y-1/2">
            <div className="text-xs md:text-base lg:text-lg text-fg-primary">
              Hey! I&apos;m
            </div>
          </div>

          <div className="absolute top-[35%] md:top-[32%] left-[8%] md:left-[7%] transform -translate-y-1/2 rotate-[-2deg] md:rotate-[-3deg] origin-left">
            <TextType
              text="Derkyu"
              typingSpeed={400}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
              loop={false}
              className={`text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-fg-primary ${reenieBeanie.className}`}
            />
          </div>

          <div className="absolute top-[-8%] md:top-[-5%] right-[5%] md:right-[3%] w-[30%] md:w-[35%] h-[45%] md:h-[50%] min-w-[80px] md:min-w-[120px] min-h-[80px] md:min-h-[120px]">
              <ModelViewer
                url="/models/shinchan.glb"
                width="100%"
                height="100%"
                defaultZoom={2.3}
                minZoomDistance={1}
                maxZoomDistance={6}
                autoRotate={true}
                autoRotateSpeed={0.8}
              />
          </div>

          <div className="absolute bottom-[18%] md:bottom-[15%] left-[5%] md:left-[3%] transform translate-y-1/2">
            <div className={`${poppins.className} text-xs md:text-sm font-light text-fg-secondary`}>
              Digital Enjoyer
            </div>
            <div className={`${poppins.className} text-xs font-light text-fg-muted mt-1`}>
              Spain, Barcelona.
            </div>
          </div>

          <div className="absolute bottom-[22%] md:bottom-[20%] left-[77%] md:left-auto md:right-[23%] transform -translate-x-1/2 md:translate-x-1/2 translate-y-1/2">
            <RotatingText
              texts={['Developer', 'Gamer', 'Chatter']}
              mainClassName={`${permanentMarker.className} text-fg-secondary text-center`}
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
    </Section>
  );
};

export default Hero;
