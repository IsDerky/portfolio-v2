'use client';

import React from "react";
import { motion } from "framer-motion";
import { Poppins } from 'next/font/google';
import Section from "@/components/layout/Section";
import { FadeInElement } from "@/components/animations/ContentAnimation";

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  logo: string;
}

const WorkExperience = () => {
  const experiences: Experience[] = [];

  return (
    <Section className="py-6 md:py-8">
      <FadeInElement delay={0.1} className="mb-8">
        <h3 className={`${poppins.className} text-xl md:text-2xl font-semibold text-white mb-2`}>
          Work Experience
        </h3>
      </FadeInElement>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <FadeInElement key={exp.id} delay={0.2 + (index * 0.1)}>
            <div className="flex gap-4">
              {/* Logo con línea vertical - igual que el timeline */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                {index < experiences.length - 1 && (
                  <div className="w-0.5 bg-white/10 flex-1 mt-2"></div>
                )}
              </div>

              {/* Contenido */}
              <div className="flex-1 pb-2">
                <h4 className={`${poppins.className} text-base md:text-lg font-medium text-white mb-1`}>
                  {exp.company}
                </h4>
                <p className={`${poppins.className} text-sm md:text-base text-gray-300 mb-2`}>
                  {exp.position}
                </p>
                <p className={`${poppins.className} text-xs md:text-sm text-gray-500 mb-3 md:mb-4 uppercase tracking-wide`}>
                  {exp.startDate} - <span className={exp.current ? 'text-green-500' : ''}>{exp.endDate}</span>
                </p>
                <p className={`${poppins.className} text-xs md:text-sm text-gray-400 leading-relaxed`}>
                  {exp.description}
                </p>
              </div>
            </div>
          </FadeInElement>
        ))}
      </div>
    </Section>
  );
};

export default WorkExperience;