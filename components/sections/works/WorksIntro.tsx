'use client';

import React from "react";
import { Poppins } from 'next/font/google';
import Section from "@/components/layout/Section";
import { FadeInElement } from "@/components/animations/ContentAnimation";

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const WorksIntro = () => {
  return (
    <Section className="py-6 md:py-8">
      <FadeInElement delay={0.2}>
        <div className="grid grid-cols-1">
          <div className="bg-[#212121] rounded-2xl p-6 md:p-16 relative overflow-hidden border border-white/10">
            {/* Decorative lines */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/3 to-transparent"></div>

            <div className="relative z-10">
              <h2 className={`${poppins.className} text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 md:mb-6`}>
                My Works
              </h2>

              <p className={`${poppins.className} text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed font-light max-w-none md:max-w-4xl`}>
                A collection of projects I&apos;ve worked on, ranging from web applications to network solutions.
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