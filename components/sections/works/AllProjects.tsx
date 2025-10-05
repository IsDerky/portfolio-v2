'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Poppins } from 'next/font/google';
import { ExternalLink, Github, Code2, Network, Wrench, Sparkles } from 'lucide-react';
import Section from "@/components/layout/Section";
import { FadeInElement } from "@/components/animations/ContentAnimation";

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const categoryIcons = {
  web: Code2,
  network: Network,
  tools: Wrench,
  other: Sparkles,
};

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  year: string;
}

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'web', 'network', 'tools', 'other'];

  const projects: Project[] = [
    {
      id: 'derkyu-panel',
      title: 'Derkyu Panel',
      description: 'Advanced management panel with real-time monitoring and analytics',
      category: 'web',
      tags: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
      githubUrl: 'https://github.com/isderky',
      year: '2025'
    },
    {
      id: 'network-monitor',
      title: 'Network Monitor',
      description: 'Real-time network performance monitoring and alerting system',
      category: 'network',
      tags: ['Python', 'SNMP', 'Grafana', 'InfluxDB'],
      year: '2024'
    },
    {
      id: 'discord-bot',
      title: 'Discord Bot Framework',
      description: 'Modular Discord bot framework with command handler and database integration',
      category: 'tools',
      tags: ['Discord.js', 'Node.js', 'SQLite'],
      githubUrl: 'https://github.com/isderky',
      year: '2024'
    },
    {
      id: 'api-gateway',
      title: 'API Gateway',
      description: 'Custom API gateway with rate limiting, authentication, and logging',
      category: 'web',
      tags: ['Express.js', 'Redis', 'JWT', 'Docker'],
      githubUrl: 'https://github.com/isderky',
      year: '2023'
    },
    {
      id: 'config-manager',
      title: 'Network Config Manager',
      description: 'Automated network device configuration and backup tool',
      category: 'network',
      tags: ['Python', 'Ansible', 'SSH', 'Git'],
      year: '2023'
    },
    {
      id: 'cli-tool',
      title: 'DevOps CLI Tool',
      description: 'Command-line tool for automating deployment and server management tasks',
      category: 'tools',
      tags: ['Node.js', 'Commander.js', 'SSH2'],
      githubUrl: 'https://github.com/isderky',
      year: '2023'
    }
  ];

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

          {/* Category Filter */}
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

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr" id="projects-grid" role="tabpanel" aria-label="Project list">
        <AnimatePresence mode="sync">
          {filteredProjects.map((project, index) => {
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
                  className="bg-[#212121] rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col group relative overflow-hidden"
                >
                    {/* Decorative gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Header */}
                    <div className="flex items-start justify-between mb-3 relative z-10">
                      <div className="flex-1">
                        <h4 className={`${poppins.className} text-lg font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors`}>
                          {project.title}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className={`${poppins.className} text-xs text-gray-500 uppercase tracking-wide`}>
                            {project.year}
                          </span>
                          <span className="text-gray-600">•</span>
                          <div className="flex items-center gap-1.5">
                            <CategoryIcon size={12} className="text-gray-500" />
                            <span className={`${poppins.className} text-xs text-gray-500 capitalize`}>
                              {project.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`${poppins.className} text-sm text-gray-400 leading-relaxed mb-4 flex-grow font-light relative z-10`}>
                      {project.description}
                    </p>

                    {/* Tags */}
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

                    {/* Links */}
                    <div className="flex gap-2 mt-auto relative z-10">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${poppins.className} flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all text-xs text-gray-300 hover:text-white font-medium shadow-lg shadow-white/5`}
                          aria-label={`Visit ${project.title} live demo`}
                        >
                          <ExternalLink size={14} aria-hidden="true" />
                          View
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${poppins.className} flex items-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all text-xs text-gray-400 hover:text-gray-300 font-medium`}
                          aria-label={`View ${project.title} source code on GitHub`}
                        >
                          <Github size={14} aria-hidden="true" />
                          Code
                        </a>
                      )}
                    </div>
                  </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
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