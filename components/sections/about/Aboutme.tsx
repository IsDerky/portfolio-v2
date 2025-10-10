'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Poppins } from 'next/font/google';
import { 
  Github, 
  ExternalLink, 
  Calendar,
  Code2,
  Coffee,
  Infinity
} from 'lucide-react';
import Section from "@/components/layout/Section";
import { FadeInElement } from "@/components/animations/ContentAnimation";

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const WorksHeader = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Frameworks favoritos
  const frameworks = [
    { 
      name: "Next.js", 
      logo: "/logos/nextjs.svg", 
      color: "bg-white/90"
    },
    { 
      name: "React", 
      logo: "/logos/react.svg", 
      color: "bg-gray-100/90"
    },
    { 
      name: "Astro", 
      logo: "/logos/astro.svg", 
      color: "bg-gray-200/90"
    },
    { 
      name: "Express.js", 
      logo: "/logos/expressjs.svg", 
      color: "bg-white/80"
    }
  ];

  // Tecnologías que dominas
  const masterTechnologies = [
    { name: "TypeScript", level: 95, color: "bg-gray-400" },
    { name: "Node.js", level: 90, color: "bg-gray-400" },
    { name: "MongoDB", level: 75, color: "bg-gray-400" },
    { name: "PHP", level: 50, color: "bg-gray-400" }
  ];

  // Proyectos pequeños
  const smallProjects = [
    { 
      title: "Developer Stats",
      stats: [
        { label: "Lines of Code", value: "10K+", icon: "code" },
        { label: "Coffee Cups", value: "∞", icon: "coffee" }
      ],
      type: "dual-stat"
    },
    { 
      title: "Now Playing",
      spotifyUser: "darkqwew",
      type: "spotify"
    }
  ];

  return (
    <Section className="py-6 md:py-8">
      <FadeInElement delay={0.5} className="mb-6 md:mb-8">
        <h2 className={`${poppins.className} text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3 md:mb-4`}>
          About Me
        </h2>
      </FadeInElement>

      {/* Mobile Layout (< md) - Single Column */}
      <div className="md:hidden space-y-3">
        {/* Specialization */}
        <FadeInElement delay={0.6}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-[#212121] rounded-xl p-4 border border-white/10 transition-all duration-300"
          >
            <div className={`${poppins.className} text-xs text-gray-400 mb-1.5`}>Specialization</div>
            <h3 className={`${poppins.className} text-base font-semibold text-white`}>
              Web developer & Networker
            </h3>
          </motion.div>
        </FadeInElement>

        {/* Total Experience */}
        <FadeInElement delay={0.65}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-[#212121] rounded-xl p-4 border border-white/10 transition-all duration-300"
          >
            <div className={`${poppins.className} text-xs text-gray-400 mb-2`}>Total Experience</div>
            <div className="flex items-baseline gap-2">
              <div className={`${poppins.className} text-3xl font-bold text-white`}>4+</div>
              <div className={`${poppins.className} text-sm text-gray-300`}>Years</div>
            </div>
          </motion.div>
        </FadeInElement>

        {/* Core Technologies */}
        <FadeInElement delay={0.7}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-[#212121] rounded-xl p-4 border border-white/10 transition-all duration-300"
          >
            <div className={`${poppins.className} text-xs text-gray-400 mb-3`}>Core Technologies</div>
            <div className="space-y-3">
              {masterTechnologies.map((tech, index) => (
                <div key={tech.name} className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className={`${poppins.className} text-xs font-medium text-white`}>{tech.name}</span>
                    <span className={`${poppins.className} text-xs text-gray-400`}>{tech.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1.5">
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
            className="bg-[#212121] rounded-xl p-4 border border-white/10 transition-all duration-300"
          >
            <div className={`${poppins.className} text-xs text-gray-400 mb-3`}>Developer Stats</div>
            <div className="space-y-3">
              {smallProjects[0]?.stats?.map((stat, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0">
                      {stat.icon === 'code' ? (
                        <Code2 size={16} className="text-gray-300" />
                      ) : (
                        <Coffee size={16} className="text-gray-300" />
                      )}
                    </div>
                    <div className={`${poppins.className} text-sm text-gray-400`}>
                      {stat.label}
                    </div>
                  </div>
                  <div className={`${poppins.className} text-lg font-bold text-white flex items-center`}>
                    {stat.value === '∞' ? (
                      <Infinity size={22} className="text-white" strokeWidth={2.5} />
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
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-[#212121] rounded-xl border border-white/10 transition-all duration-300 cursor-pointer group overflow-hidden"
            onClick={() => window.open('https://open.spotify.com', '_blank')}
          >
            <div className={`${poppins.className} text-xs text-gray-400 mb-2 px-4 pt-4`}>Currently Listening</div>
            <div className="px-3 pb-3">
              <img 
                src={`https://spotify-github-profile.kittinanx.com/api/view.svg?uid=darkqwew&cover_image=true&theme=natemoo-re&show_offline=false&background_color=121212&interchange=true&bar_color=ffffff&bar_color_cover=false`}
                alt="Spotify Now Playing"
                className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        </FadeInElement>

        {/* Featured Project - Derkyu Hosting */}
        <FadeInElement delay={0.85}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-[#212121] rounded-xl border border-white/10 transition-all duration-300 cursor-pointer group"
            onClick={() => window.open('https://hosting.derkyu.lol', '_blank')}
          >
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className={`${poppins.className} text-xs text-gray-400 mb-0.5`}>Featured Project</div>
                  <h4 className={`${poppins.className} text-base font-semibold text-white transition-colors`}>
                    Derkyu Hosting
                  </h4>
                </div>
                <ExternalLink size={18} className="text-white opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={2.5} />
              </div>

              <p className={`${poppins.className} text-gray-300 text-xs leading-relaxed mb-3`}>
                Specialized hosting platform offering optimized solutions for game servers, Discord bots, websites, VoIP servers, and custom software with intuitive management tools.
              </p>

              <div className="space-y-2">
                <div>
                  <h5 className={`${poppins.className} text-xs font-semibold text-white mb-1`}>Performance & Flexibility</h5>
                  <p className={`${poppins.className} text-xs text-gray-400 leading-snug`}>
                    Scalable plans with 99% SLA, strategic server locations across Europe and South America, and 24/7 technical support for seamless operations
                  </p>
                </div>
                <div>
                  <h5 className={`${poppins.className} text-xs font-semibold text-white mb-1`}>Advanced Features</h5>
                  <p className={`${poppins.className} text-xs text-gray-400 leading-snug`}>
                    Integrated code editor, SFTP file manager, automatic updates, real-time monitoring, and DDoS protection included in all plans
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </FadeInElement>
      </div>

      {/* Desktop Layout (>= md) - 3x3 Grid */}
      <div className="hidden md:block relative overflow-visible">
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[400px]">
          
          {/* Row 1: Specialization (col-span-2) + Total Experience (col-span-1) */}
          <FadeInElement delay={0.6} className="col-span-2">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-[#212121] rounded-xl p-5 border border-white/10 transition-all duration-300 h-full flex flex-col justify-start"
            >
              <div className={`${poppins.className} text-xs text-gray-400 mb-1.5`}>Specialization</div>
              <h3 className={`${poppins.className} text-lg font-semibold text-white`}>
                Web developer & Networker
              </h3>
            </motion.div>
          </FadeInElement>

          <FadeInElement delay={0.65} className="col-span-1">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-[#212121] rounded-xl p-5 h-full border border-white/10 transition-all duration-300 flex flex-col justify-start items-start text-left"
            >
              <div className={`${poppins.className} text-xs text-gray-400 mb-2`}>Total Experience</div>
              <div className={`${poppins.className} text-2xl font-bold text-white mb-1`}>4+</div>
              <div className={`${poppins.className} text-xs text-gray-300`}>Years</div>
            </motion.div>
          </FadeInElement>

          {/* Row 2: Core Technologies (row-span-2) + Two small projects */}
          <FadeInElement
            delay={0.7}
            className={`col-span-1 row-span-2 transition-opacity duration-300 ${expandedSection && expandedSection !== 'technologies' ? 'opacity-30' : 'opacity-100'}`}
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-[#212121] rounded-xl p-5 h-full border border-white/10 transition-all duration-300 flex flex-col"
            >
              <div className={`${poppins.className} text-xs text-gray-400 mb-3`}>Core Technologies</div>
              
              <div className="space-y-3.5 flex-1 flex flex-col justify-center">
                {masterTechnologies.map((tech, index) => (
                  <div key={tech.name} className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className={`${poppins.className} text-xs font-medium text-white`}>{tech.name}</span>
                      <span className={`${poppins.className} text-xs text-gray-400`}>{tech.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
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
              key={project.title}
              delay={0.75 + (index * 0.1)}
              className={`col-span-1 transition-opacity duration-300 ${expandedSection && expandedSection !== 'projects' ? 'opacity-30' : 'opacity-100'}`}
            >
              {project.type === 'dual-stat' ? (
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="bg-[#212121] rounded-xl p-4 h-full border border-white/10 transition-all duration-300 flex flex-col"
                >
                  <div className={`${poppins.className} text-xs text-gray-400 mb-3`}>Developer Stats</div>

                  <div className="space-y-3 flex-1 flex flex-col justify-center">
                    {project.stats?.map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex-shrink-0">
                            {stat.icon === 'code' ? (
                              <Code2 size={14} className="text-gray-300" />
                            ) : (
                              <Coffee size={14} className="text-gray-300" />
                            )}
                          </div>
                          <div className={`${poppins.className} text-xs text-gray-400`}>
                            {stat.label}
                          </div>
                        </div>
                        <div className={`${poppins.className} text-base font-bold text-white flex items-center`}>
                          {stat.value === '∞' ? (
                            <Infinity size={20} className="text-white" strokeWidth={2.5} />
                          ) : (
                            stat.value
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : project.type === 'spotify' ? (
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="bg-[#212121] rounded-xl border border-white/10 transition-all duration-300 cursor-pointer group h-full overflow-hidden flex flex-col"
                  onClick={() => window.open('https://open.spotify.com', '_blank')}
                >
                  <div className={`${poppins.className} text-xs text-gray-400 mb-2 px-4 pt-4`}>Currently Listening</div>
                  <div className="flex-1 flex items-center justify-center px-3 pb-3">
                    <img 
                      src={`https://spotify-github-profile.kittinanx.com/api/view.svg?uid=${project.spotifyUser}&cover_image=true&theme=natemoo-re&show_offline=false&background_color=121212&interchange=true&bar_color=ffffff&bar_color_cover=false`}
                      alt="Spotify Now Playing"
                      className="w-full h-auto max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </motion.div>
              ) : null}
            </FadeInElement>
          ))}

          {/* Row 3: Featured Project (col-span-2) - Derkyu Hosting */}
          <FadeInElement delay={0.95} className="col-span-2 relative">
            <motion.div
              className={`absolute bottom-0 left-0 right-0 ${expandedSection === 'featured' ? 'z-50' : 'z-10'}`}
              onHoverStart={() => setExpandedSection('featured')}
              onHoverEnd={() => setExpandedSection(null)}
              layout
            >
              <motion.div
                className="bg-[#212121] rounded-xl border border-white/10 transition-all duration-300 cursor-pointer group overflow-hidden"
                whileHover={{ scale: 1.01 }}
                animate={{
                  height: expandedSection === 'featured' ? '262px' : '125px',
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="p-4 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className={`${poppins.className} text-xs text-gray-400 mb-0.5`}>Featured Project</div>
                      <h4 className={`${poppins.className} text-base font-semibold text-white transition-colors`}>
                        Derkyu Hosting
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
                      href="https://hosting.derkyu.lol"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2"
                    >
                      <ExternalLink size={18} className="text-white" strokeWidth={2.5} />
                    </motion.a>
                  </div>

                  <p className={`${poppins.className} text-gray-300 text-xs leading-relaxed mb-auto`}>
                    Specialized hosting platform offering optimized solutions for game servers, Discord bots, websites, VoIP servers, and custom software with intuitive management tools.
                  </p>

                  <AnimatePresence>
                    {expandedSection === 'featured' && (
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
                        <div className="space-y-2.5 pt-2.5">
                          <div>
                            <h5 className={`${poppins.className} text-xs font-semibold text-white mb-1`}>Performance & Flexibility</h5>
                            <p className={`${poppins.className} text-xs text-gray-400 leading-snug`}>
                              Scalable plans with 99% SLA, strategic server locations across Europe and South America, and 24/7 technical support for seamless operations
                            </p>
                          </div>
                          <div>
                            <h5 className={`${poppins.className} text-xs font-semibold text-white mb-1`}>Advanced Features</h5>
                            <p className={`${poppins.className} text-xs text-gray-400 leading-snug`}>
                              Integrated code editor, SFTP file manager, automatic updates, real-time monitoring, and DDoS protection included in all plans
                            </p>
                          </div>
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

export default WorksHeader;