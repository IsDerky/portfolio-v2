'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code2,
  Coffee,
  Infinity
} from 'lucide-react';
import { poppins } from "@/lib/fonts";
import { getProjectById } from "@/lib/projects";
import Section from "@/components/layout/Section";
import { FadeInElement } from "@/components/animations/ContentAnimation";
import SpotifyWidget from "@/components/SpotifyWidget";
import { useLanguage } from "@/components/providers/LanguageProvider";

const featuredProjectBase = getProjectById('derkyu-hosting')!;

const Aboutme = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { t } = useLanguage();

  const featuredProject = {
    ...featuredProjectBase,
    ...(t.projects['derkyu-hosting'] ?? {}),
  };

  const masterTechnologies = [
    { name: "TypeScript", level: 95, color: "bg-fg-secondary" },
    { name: "Node.js", level: 90, color: "bg-fg-secondary" },
    { name: "MongoDB", level: 75, color: "bg-fg-secondary" },
    { name: "PHP", level: 50, color: "bg-fg-secondary" }
  ];

  const smallProjects = [
    {
      stats: [
        { label: t.aboutMe.linesOfCode, value: "60K+", icon: "code" },
        { label: t.aboutMe.coffeeCups, value: "∞", icon: "coffee" }
      ],
      type: "dual-stat"
    },
    {
      type: "spotify"
    }
  ];

  return (
    <Section className="py-6 md:py-8">
      <FadeInElement delay={0.5} className="mb-6 md:mb-8">
        <h2 className={`${poppins.className} text-2xl md:text-3xl lg:text-4xl font-semibold text-fg-primary mb-3 md:mb-4`}>
          {t.aboutMe.title}
        </h2>
      </FadeInElement>

      {/* Mobile Layout (< md) - Single Column */}
      <div className="md:hidden space-y-3">
        {/* {t.aboutMe.specialization} */}
        <FadeInElement delay={0.6}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-surface-2 rounded-xl p-4 border border-fg-primary/10 transition-all duration-300"
          >
            <div className={`${poppins.className} text-xs text-fg-muted mb-1.5`}>{t.aboutMe.specialization}</div>
            <h3 className={`${poppins.className} text-base font-semibold text-fg-primary`}>
              {t.aboutMe.specializationValue}
            </h3>
          </motion.div>
        </FadeInElement>

        {/* {t.aboutMe.totalExperience} */}
        <FadeInElement delay={0.65}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-surface-2 rounded-xl p-4 border border-fg-primary/10 transition-all duration-300"
          >
            <div className={`${poppins.className} text-xs text-fg-muted mb-2`}>{t.aboutMe.totalExperience}</div>
            <div className={`${poppins.className} text-3xl font-bold text-fg-primary`}>4+</div>
            <div className={`${poppins.className} text-sm text-fg-secondary`}>{t.aboutMe.years}</div>
          </motion.div>
        </FadeInElement>

        {/* {t.aboutMe.coreTechnologies} */}
        <FadeInElement delay={0.7}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-surface-2 rounded-xl p-4 border border-fg-primary/10 transition-all duration-300"
          >
            <div className={`${poppins.className} text-xs text-fg-muted mb-3`}>{t.aboutMe.coreTechnologies}</div>
            <div className="space-y-3">
              {masterTechnologies.map((tech, index) => (
                <div key={tech.name} className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className={`${poppins.className} text-xs font-medium text-fg-primary`}>{tech.name}</span>
                    <span className={`${poppins.className} text-xs text-fg-muted`}>{tech.level}%</span>
                  </div>
                  <div className="w-full bg-fg-primary/10 rounded-full h-1.5">
                    <motion.div
                      className={`${tech.color} h-1.5 rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.level}%` }}
                      transition={{ delay: 0.5 + (index * 0.15), duration: 1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </FadeInElement>

        {/* Developer Stats */}
        <FadeInElement delay={0.75}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-surface-2 rounded-xl p-4 border border-fg-primary/10 transition-all duration-300"
          >
            <div className={`${poppins.className} text-xs text-fg-muted mb-3`}>{t.aboutMe.devStats}</div>
            <div className="space-y-3">
              {smallProjects[0]?.stats?.map((stat, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0">
                      {stat.icon === 'code' ? (
                        <Code2 size={16} className="text-fg-secondary" />
                      ) : (
                        <Coffee size={16} className="text-fg-secondary" />
                      )}
                    </div>
                    <div className={`${poppins.className} text-sm text-fg-muted`}>
                      {stat.label}
                    </div>
                  </div>
                  <div className={`${poppins.className} text-lg font-bold text-fg-primary flex items-center`}>
                    {stat.value === '∞' ? (
                      <Infinity size={22} className="text-fg-primary" strokeWidth={2.5} />
                    ) : (
                      stat.value
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </FadeInElement>

        {/* Spotify */}
        <FadeInElement delay={0.8}>
          <SpotifyWidget />
        </FadeInElement>

        {/* {t.aboutMe.featuredProject} */}
        <FadeInElement delay={0.85}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-surface-2 rounded-xl border border-fg-primary/10 transition-all duration-300 cursor-pointer group"
            onClick={() => window.open(featuredProject.liveUrl, '_blank')}
          >
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className={`${poppins.className} text-xs text-fg-muted mb-0.5`}>{t.aboutMe.featuredProject}</div>
                  <h4 className={`${poppins.className} text-base font-semibold text-fg-primary transition-colors`}>
                    {featuredProject.title}
                  </h4>
                </div>
                <ExternalLink size={18} className="text-fg-primary opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={2.5} />
              </div>

              <p className={`${poppins.className} text-fg-secondary text-xs leading-relaxed mb-3`}>
                {featuredProject.longDescription}
              </p>

              {featuredProject.details && (
                <div className="space-y-2">
                  {featuredProject.details.map((detail) => (
                    <div key={detail.title}>
                      <h5 className={`${poppins.className} text-xs font-semibold text-fg-primary mb-1`}>{detail.title}</h5>
                      <p className={`${poppins.className} text-xs text-fg-muted leading-snug`}>
                        {detail.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </FadeInElement>
      </div>

      {/* Desktop Layout (>= md) - 3x3 Grid */}
      <div className="hidden md:block relative overflow-visible">
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[400px]">

          {/* Row 1: {t.aboutMe.specialization} (col-span-2) + {t.aboutMe.totalExperience} (col-span-1) */}
          <FadeInElement delay={0.6} className="col-span-2">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-surface-2 rounded-xl p-5 border border-fg-primary/10 transition-all duration-300 h-full flex flex-col justify-start"
            >
              <div className={`${poppins.className} text-xs text-fg-muted mb-1.5`}>{t.aboutMe.specialization}</div>
              <h3 className={`${poppins.className} text-lg font-semibold text-fg-primary`}>
                {t.aboutMe.specializationValue}
              </h3>
            </motion.div>
          </FadeInElement>

          <FadeInElement delay={0.65} className="col-span-1">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-surface-2 rounded-xl p-5 h-full border border-fg-primary/10 transition-all duration-300 flex flex-col justify-start items-start text-left"
            >
              <div className={`${poppins.className} text-xs text-fg-muted mb-2`}>{t.aboutMe.totalExperience}</div>
              <div className={`${poppins.className} text-2xl font-bold text-fg-primary mb-1`}>4+</div>
              <div className={`${poppins.className} text-xs text-fg-secondary`}>{t.aboutMe.years}</div>
            </motion.div>
          </FadeInElement>

          {/* Row 2: {t.aboutMe.coreTechnologies} (row-span-2) + Two small projects */}
          <FadeInElement
            delay={0.7}
            className={`col-span-1 row-span-2 transition-opacity duration-300 ${expandedSection && expandedSection !== 'technologies' ? 'opacity-30' : 'opacity-100'}`}
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-surface-2 rounded-xl p-5 h-full border border-fg-primary/10 transition-all duration-300 flex flex-col"
            >
              <div className={`${poppins.className} text-xs text-fg-muted mb-3`}>{t.aboutMe.coreTechnologies}</div>

              <div className="space-y-3.5 flex-1 flex flex-col justify-center">
                {masterTechnologies.map((tech, index) => (
                  <div key={tech.name} className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className={`${poppins.className} text-xs font-medium text-fg-primary`}>{tech.name}</span>
                      <span className={`${poppins.className} text-xs text-fg-muted`}>{tech.level}%</span>
                    </div>
                    <div className="w-full bg-fg-primary/10 rounded-full h-1.5">
                      <motion.div
                        className={`${tech.color} h-1.5 rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.level}%` }}
                        transition={{ delay: 1 + (index * 0.15), duration: 1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </FadeInElement>

          {smallProjects.map((project, index) => (
            <FadeInElement
              key={index}
              delay={0.75 + (index * 0.1)}
              className={`col-span-1 transition-opacity duration-300 ${expandedSection && expandedSection !== 'projects' ? 'opacity-30' : 'opacity-100'}`}
            >
              {project.type === 'dual-stat' ? (
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="bg-surface-2 rounded-xl p-4 h-full border border-fg-primary/10 transition-all duration-300 flex flex-col"
                >
                  <div className={`${poppins.className} text-xs text-fg-muted mb-3`}>{t.aboutMe.devStats}</div>

                  <div className="space-y-3 flex-1 flex flex-col justify-center">
                    {project.stats?.map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex-shrink-0">
                            {stat.icon === 'code' ? (
                              <Code2 size={14} className="text-fg-secondary" />
                            ) : (
                              <Coffee size={14} className="text-fg-secondary" />
                            )}
                          </div>
                          <div className={`${poppins.className} text-xs text-fg-muted`}>
                            {stat.label}
                          </div>
                        </div>
                        <div className={`${poppins.className} text-base font-bold text-fg-primary flex items-center`}>
                          {stat.value === '∞' ? (
                            <Infinity size={20} className="text-fg-primary" strokeWidth={2.5} />
                          ) : (
                            stat.value
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : project.type === 'spotify' ? (
                <SpotifyWidget />
              ) : null}
            </FadeInElement>
          ))}

          {/* Row 3: {t.aboutMe.featuredProject} (col-span-2) */}
          <FadeInElement delay={0.95} className="col-span-2 relative">
            <motion.div
              className={`absolute bottom-0 left-0 right-0 ${expandedSection === 'featured' ? 'z-50' : 'z-10'}`}
              onHoverStart={() => setExpandedSection('featured')}
              onHoverEnd={() => setExpandedSection(null)}
              layout
            >
              <motion.div
                className="bg-surface-2 rounded-xl border border-fg-primary/10 transition-all duration-300 cursor-pointer group overflow-hidden"
                whileHover={{ scale: 1.01 }}
                animate={{
                  height: expandedSection === 'featured' ? '262px' : '125px',
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="p-4 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <div className={`${poppins.className} text-xs text-fg-muted mb-0.5`}>{t.aboutMe.featuredProject}</div>
                      <h4 className={`${poppins.className} text-base font-semibold text-fg-primary transition-colors`}>
                        {featuredProject.title}
                      </h4>
                    </div>
                    <motion.a
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, rotate: 0 }}
                      animate={{
                        opacity: expandedSection === 'featured' ? 1 : 0,
                        rotate: expandedSection === 'featured' ? -15 : 0
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2"
                    >
                      <ExternalLink size={18} className="text-fg-primary" strokeWidth={2.5} />
                    </motion.a>
                  </div>

                  <p className={`${poppins.className} text-fg-secondary text-xs leading-relaxed mb-auto`}>
                    {featuredProject.longDescription}
                  </p>

                  <AnimatePresence>
                    {expandedSection === 'featured' && featuredProject.details && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut",
                          opacity: { duration: 0.3 }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2.5 pt-2">
                          {featuredProject.details.map((detail) => (
                            <div key={detail.title}>
                              <h5 className={`${poppins.className} text-xs font-semibold text-fg-primary mb-1`}>{detail.title}</h5>
                              <p className={`${poppins.className} text-xs text-fg-muted leading-snug`}>
                                {detail.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          </FadeInElement>

        </div>
      </div>
    </Section>
  );
};

export default Aboutme;
