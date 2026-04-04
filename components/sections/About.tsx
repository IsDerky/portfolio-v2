import React from "react";
import { poppins } from "@/lib/fonts";
import Section from "@/components/layout/Section";
import { FadeInElement } from "@/components/animations/ContentAnimation";
import ParticlesBackground from "@/components/ParticlesBackground";

const About = () => {
  return (
    <Section className="py-6 md:py-8">
      <FadeInElement delay={0.5}>
        <div className="grid grid-cols-1">
          <div className="bg-surface-2 rounded-2xl p-6 md:p-16 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full pointer-events-none"
              style={{ height: 'clamp(300px, 50vw, 600px)' }}
            >
              <ParticlesBackground />
            </div>

            <p className={`
              ${poppins.className}
              text-sm md:text-base lg:text-lg
              text-fg-secondary leading-relaxed font-light
              relative z-10 max-w-none md:max-w-4xl
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
