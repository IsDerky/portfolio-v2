import React from "react";
import { poppins } from "@/lib/fonts";
import Section from "@/components/layout/Section";
import { FadeInElement } from "@/components/animations/ContentAnimation";

const WorksIntro = () => {
  return (
    <Section className="py-6 md:py-8">
      <FadeInElement delay={0.5}>
        <div className="grid grid-cols-1">
          <div className="bg-surface-2 rounded-2xl p-6 md:p-16 relative overflow-hidden border border-fg-primary/10">
            <div>
              <h2 className={`${poppins.className} text-2xl md:text-3xl lg:text-4xl font-semibold text-fg-primary mb-4 md:mb-6`}>
                My Works
              </h2>

              <p className={`${poppins.className} text-sm md:text-base lg:text-lg text-fg-secondary leading-relaxed font-light max-w-none md:max-w-4xl`}>
                A collection of projects I&apos;ve worked on.
                Each project represents a unique challenge and learning opportunity in my development journey.
              </p>
            </div>
          </div>
        </div>
      </FadeInElement>
    </Section>
  );
};

export default WorksIntro;