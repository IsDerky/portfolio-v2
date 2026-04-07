'use client';

import React, { memo, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ExternalLink, Code2, Network, Wrench, Server, LayoutGrid, type LucideIcon } from 'lucide-react';
import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { projects } from '@/lib/projects';
import { useTranslations } from 'next-intl';
import Section from "@/components/layout/Section";
import { FadeInElement } from "@/components/animations/ContentAnimation";

const categoryIcons: Record<string, LucideIcon> = {
  all: LayoutGrid,
  web: Code2,
  service: Server,
  network: Network,
  tools: Wrench,
};

interface ProjectCardProps {
  project: (typeof projects)[number];
  onCardClick: (id: string) => void;
}

const ProjectCard = memo(({ project, onCardClick }: ProjectCardProps) => {
  const tProjects = useTranslations('projects');
  const tWorks = useTranslations('works');
  const projectData = tProjects.raw(project.id) as { description?: string } | undefined;
  const description = projectData?.description ?? project.description;
  const CategoryIcon = categoryIcons[project.category] || LayoutGrid;
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
        transition={{ duration: 0.15, ease: "easeOut" }}
        onClick={() => onCardClick(project.id)}
        className="bg-surface-2 rounded-xl p-6 border border-fg-primary/10 hover:border-fg-primary/20 transition-all duration-150 h-full flex flex-col group relative overflow-hidden cursor-pointer"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-fg-primary/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="flex items-start justify-between mb-3 relative z-10">
          <div className="flex-1">
            <h4 className={`${poppins.className} text-lg font-semibold text-fg-primary mb-2 transition-colors`}>
              {project.title}
            </h4>
            <div className="flex items-center gap-2">
              <span className={`${poppins.className} text-xs text-fg-subtle uppercase tracking-wide`}>
                {project.year}
              </span>
              <div className="flex items-center gap-1.5">
                <CategoryIcon size={12} className="text-fg-subtle" />
                <span className={`${poppins.className} text-xs text-fg-subtle capitalize`}>
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className={`${poppins.className} text-sm text-fg-muted leading-relaxed mb-4 flex-grow font-light relative z-10`}>
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4 relative z-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`${poppins.className} text-xs px-2.5 py-1 bg-fg-primary/5 border border-fg-primary/10 rounded-full text-fg-subtle hover:bg-fg-primary/10 hover:text-fg-muted transition-all`}
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
              className={`${poppins.className} flex items-center gap-1.5 px-3 py-2 bg-fg-primary/10 hover:bg-fg-primary/20 border border-fg-primary/20 rounded-lg transition-all text-xs text-fg-secondary hover:text-fg-primary font-medium`}
              aria-label={`Visit ${project.title}`}
            >
              <ExternalLink size={14} aria-hidden="true" />
              {tWorks('visit')}
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

interface CategoryFilterProps {
  category: string;
  isSelected: boolean;
  onSelect: (category: string) => void;
}

const CategoryFilter = memo(({ category, isSelected, onSelect }: CategoryFilterProps) => {
  const Icon = categoryIcons[category] || LayoutGrid;
  return (
    <button
      onClick={() => onSelect(category)}
      role="tab"
      aria-selected={isSelected}
      aria-controls="projects-grid"
      aria-label={`Filter by ${category} projects`}
      className={cn(
        poppins.className,
        'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap',
        isSelected
          ? 'bg-fg-primary/20 text-fg-primary border border-fg-primary/30'
          : 'bg-fg-primary/5 text-fg-muted border border-fg-primary/10 hover:bg-fg-primary/10 hover:border-fg-primary/20'
      )}
    >
      <Icon size={14} aria-hidden="true" />
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </button>
  );
});

CategoryFilter.displayName = 'CategoryFilter';

const AllProjects = () => {
  const router = useRouter();
  const t = useTranslations('works');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'web', 'service', 'network', 'tools'];

  const filteredProjects = useMemo(
    () => selectedCategory === 'all'
      ? projects
      : projects.filter(p => p.category === selectedCategory),
    [selectedCategory]
  );

  const handleCardClick = useCallback((id: string) => {
    router.push(`/works/${id}`, { scroll: false });
  }, [router]);

  return (
    <Section className="py-6 md:py-8">
      <FadeInElement delay={0.5} className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-fg-primary/20"></div>
            <h3 className={`${poppins.className} text-xl md:text-2xl font-semibold text-fg-primary`}>
              {t('allProjects')}
            </h3>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide" role="tablist" aria-label="Filter projects by category">
            {categories.map((category) => (
              <CategoryFilter
                key={category}
                category={category}
                isSelected={selectedCategory === category}
                onSelect={setSelectedCategory}
              />
            ))}
          </div>
        </div>
      </FadeInElement>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr" id="projects-grid" role="tabpanel" aria-label="Project list">
        <AnimatePresence mode="sync">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onCardClick={handleCardClick}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <FadeInElement delay={0.6}>
          <div className="text-center py-12 bg-surface-2 rounded-xl border border-fg-primary/10">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 rounded-full bg-fg-primary/5 flex items-center justify-center">
                <LayoutGrid size={20} className="text-fg-subtle" />
              </div>
            </div>
            <p className={`${poppins.className} text-fg-muted font-light`}>
              {t('noProjectsFound')}
            </p>
          </div>
        </FadeInElement>
      )}
    </Section>
  );
};

export default AllProjects;
