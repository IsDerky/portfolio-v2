'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from 'lucide-react';
import { poppins } from '@/lib/fonts';
import { getFeaturedProjects, type Project } from '@/lib/projects';
import Section from "@/components/layout/Section";
import { FadeInElement } from "@/components/animations/ContentAnimation";

interface FeaturedProjectsProps {
  onProjectClick: (project: Project) => void;
}

const FeaturedProjects = ({ onProjectClick }: FeaturedProjectsProps) => {
  const featuredProjects = getFeaturedProjects();

  return (
    <Section className="py-6 md:py-8">
      <FadeInElement delay={0.7} className="mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <h3 className={`${poppins.className} text-xl md:text-2xl font-semibold text-white`}>
            Featured Projects
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      </FadeInElement>

      <div className="space-y-6">
        {featuredProjects.map((project, index) => (
          <FadeInElement key={project.id} delay={0.8 + (index * 0.1)}>
            <motion.div
              whileHover={{ scale: 1.01, y: -4 }}
              onClick={() => onProjectClick(project)}
              className="bg-[#212121] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group relative cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 md:h-auto bg-[#212121] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#212121] via-transparent to-transparent opacity-60 z-10"></div>

                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
                      <div className={`${poppins.className} text-6xl md:text-7xl font-bold text-white/10 select-none`} aria-hidden="true">
                        {project.title.split(' ')[0]}
                      </div>
                    </>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col justify-between relative">
                  <div>
                    <h4 className={`${poppins.className} text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors`}>
                      {project.title}
                    </h4>

                    <p className={`${poppins.className} text-sm md:text-base text-gray-300 mb-3 font-light leading-relaxed`}>
                      {project.description}
                    </p>

                    <p className={`${poppins.className} text-xs md:text-sm text-gray-400 leading-relaxed mb-6 font-light`}>
                      {project.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`${poppins.className} text-xs px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:bg-white/10 hover:text-gray-300 transition-all`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`${poppins.className} flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all text-sm text-gray-200 font-medium group/link shadow-lg shadow-white/5`}
                        aria-label={`Visit ${project.title}`}
                      >
                        <ExternalLink size={16} className="group-hover/link:rotate-12 transition-transform" aria-hidden="true" />
                        Visit
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`${poppins.className} flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all text-sm text-gray-400 hover:text-gray-300 font-medium`}
                        aria-label={`View source code for ${project.title} on GitHub`}
                      >
                        <Github size={16} aria-hidden="true" />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeInElement>
        ))}
      </div>
    </Section>
  );
};

export default FeaturedProjects;
