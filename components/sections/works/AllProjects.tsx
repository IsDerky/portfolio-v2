'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, Network, Wrench, Sparkles } from 'lucide-react';
import { poppins } from "@/lib/fonts";
import { projects, type Project } from '@/lib/projects';
import Section from "@/components/layout/Section";
import { FadeInElement } from "@/components/animations/ContentAnimation";

const categoryIcons = {
  web: Code2,
  network: Network,
  tools: Wrench,
  other: Sparkles,
};

interface AllProjectsProps {
  onProjectClick: (project: Project) => void;
}

const AllProjects = ({ onProjectClick }: AllProjectsProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'web', 'network', 'tools', 'other'];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <Section className="py-6 md:py-8">
      <FadeInElement delay={0.5} className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/20"></div>
            <h3 className={`${poppins.className} text-xl md:text-2xl font-semibold text-white`}>
              All Projects
            </h3>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide" role="tablist" aria-label="Filter projects by category">
            {categories.map((category) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons] || Sparkles;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  role="tab"
                  aria-selected={selectedCategory === category}
                  aria-controls="projects-grid"
                  aria-label={`Filter by ${category} projects`}
                  className={`
                    ${poppins.className}
                    flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap
                    ${selectedCategory === category
                      ? 'bg-white/20 text-white border border-white/30 shadow-lg shadow-white/10'
                      : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:border-white/20'
                    }
                  `}
                >
                  <Icon size={14} aria-hidden="true" />
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              );
            })}
          </div>
        </div>
      </FadeInElement>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr" id="projects-grid" role="tabpanel" aria-label="Project list">
        <AnimatePresence mode="sync">
          {filteredProjects.map((project) => {
            const CategoryIcon = categoryIcons[project.category as keyof typeof categoryIcons] || Sparkles;
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  onClick={() => onProjectClick(project)}
                  className="bg-[#212121] rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col group relative overflow-hidden cursor-pointer"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="flex items-start justify-between mb-3 relative z-10">
                    <div className="flex-1">
                      <h4 className={`${poppins.className} text-lg font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors`}>
                        {project.title}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className={`${poppins.className} text-xs text-gray-500 uppercase tracking-wide`}>
                          {project.year}
                        </span>

                        <div className="flex items-center gap-1.5">
                          <CategoryIcon size={12} className="text-gray-500" />
                          <span className={`${poppins.className} text-xs text-gray-500 capitalize`}>
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className={`${poppins.className} text-sm text-gray-400 leading-relaxed mb-4 flex-grow font-light relative z-10`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`${poppins.className} text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-gray-500 hover:bg-white/10 hover:text-gray-400 transition-all`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-auto relative z-10">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`${poppins.className} flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all text-xs text-gray-300 hover:text-white font-medium shadow-lg shadow-white/5`}
                        aria-label={`Visit ${project.title}`}
                      >
                        <ExternalLink size={14} aria-hidden="true" />
                        View
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <FadeInElement delay={0.6}>
          <div className="text-center py-12 bg-[#212121] rounded-xl border border-white/10">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <Sparkles size={20} className="text-gray-500" />
              </div>
            </div>
            <p className={`${poppins.className} text-gray-400 font-light`}>
              No projects found in this category.
            </p>
          </div>
        </FadeInElement>
      )}
    </Section>
  );
};

export default AllProjects;
