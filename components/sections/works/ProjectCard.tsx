'use client';

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ExternalLink, Github } from 'lucide-react';
import { poppins } from '@/lib/fonts';
import type { Project } from '@/lib/projects';
import ProjectImage from '@/components/ProjectImage';
import { useLanguage } from '@/components/providers/LanguageProvider';

interface ProjectCardProps {
  project: Project;
  index: number;
  priority?: boolean;
}

const ProjectCard = ({ project, index, priority }: ProjectCardProps) => {
  const router = useRouter();
  const { t } = useLanguage();
  const tp = t.projects[project.id];
  const description = tp?.description ?? project.description;
  const longDescription = tp?.longDescription ?? project.longDescription;

  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -4 }}
      onClick={() => router.push(`/works/${project.id}`, { scroll: false })}
      className="bg-surface-2 rounded-2xl overflow-hidden border border-fg-primary/10 hover:border-fg-primary/20 transition-all duration-300 group relative cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-fg-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative h-64 md:h-auto bg-surface-2 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-surface-2 via-transparent to-transparent opacity-60 z-10"></div>

          {project.image ? (
            <ProjectImage
              project={project}
              fill
              priority={priority ?? index === 0}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-fg-primary/5 to-transparent opacity-50"></div>
              <div className={`${poppins.className} text-6xl md:text-7xl font-bold text-fg-primary/10 select-none`} aria-hidden="true">
                {project.title.split(' ')[0]}
              </div>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 flex flex-col justify-between relative">
          <div>
            <h4 className={`${poppins.className} text-xl md:text-2xl font-semibold text-fg-primary mb-3 transition-colors`}>
              {project.title}
            </h4>

            <p className={`${poppins.className} text-sm md:text-base text-fg-secondary mb-3 font-light leading-relaxed`}>
              {description}
            </p>

            <p className={`${poppins.className} text-xs md:text-sm text-fg-muted leading-relaxed mb-6 font-light`}>
              {longDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`${poppins.className} text-xs px-3 py-1.5 bg-fg-primary/5 border border-fg-primary/10 rounded-full text-fg-muted hover:bg-fg-primary/10 hover:text-fg-secondary transition-all`}
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
                className={`${poppins.className} flex items-center gap-2 px-5 py-2.5 bg-fg-primary/10 hover:bg-fg-primary/20 border border-fg-primary/20 rounded-lg transition-all text-sm text-fg-secondary font-medium group/link`}
                aria-label={`Visit ${project.title}`}
              >
                <ExternalLink size={16} className="group-hover/link:rotate-12 transition-transform" aria-hidden="true" />
                {t.works.visit}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`${poppins.className} flex items-center gap-2 px-5 py-2.5 bg-fg-primary/5 hover:bg-fg-primary/10 border border-fg-primary/10 rounded-lg transition-all text-sm text-fg-muted hover:text-fg-secondary font-medium`}
                aria-label={`View source code for ${project.title} on GitHub`}
              >
                <Github size={16} aria-hidden="true" />
                {t.works.source}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
