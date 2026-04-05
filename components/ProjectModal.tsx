'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectImage from '@/components/ProjectImage';
import { X, Maximize2, ExternalLink, Github, Code2, Server, Network, Wrench, type LucideIcon } from 'lucide-react';
import { poppins } from '@/lib/fonts';
import type { Project } from '@/lib/projects';
import { useLanguage } from '@/components/providers/LanguageProvider';

const categoryIcons: Record<string, LucideIcon> = {
  web: Code2,
  service: Server,
  network: Network,
  tools: Wrench,
};

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useLanguage();
  const CategoryIcon = project ? categoryIcons[project.category] : null;
  const tp = project ? t.projects[project.id] : undefined;
  const longDescription = tp?.longDescription ?? project?.longDescription;
  const details = tp?.details ?? project?.details;

  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-2xl max-h-[85vh] bg-surface-1 border border-fg-primary/10 rounded-2xl overflow-hidden flex flex-col"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header image */}
            {project.image && (
              <div className="relative h-48 md:h-56 bg-surface-2 flex-shrink-0 p-4">
                <div className="relative w-full h-full">
                  <ProjectImage
                    project={project}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-1 via-transparent to-transparent" />
              </div>
            )}

            {/* Top-right actions */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
              <a
                href={`/works/${project.id}`}
                className="p-2 rounded-full bg-black/50 border border-fg-primary/10 hover:bg-fg-primary/10 transition-colors"
                aria-label="View full page"
              >
                <Maximize2 size={16} className="text-fg-primary" />
              </a>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-black/50 border border-fg-primary/10 hover:bg-fg-primary/10 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} className="text-fg-primary" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              {/* Year + Category */}
              <div className="flex items-center gap-2 mb-3">
                <span className={`${poppins.className} text-xs text-fg-subtle uppercase tracking-wide`}>
                  {project.year}
                </span>
                <span className="text-fg-faint">·</span>
                {CategoryIcon && <CategoryIcon size={12} className="text-fg-subtle" />}
                <span className={`${poppins.className} text-xs text-fg-subtle capitalize`}>
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h2 className={`${poppins.className} text-2xl md:text-3xl font-semibold text-fg-primary mb-4`}>
                {project.title}
              </h2>

              {/* Description */}
              <p className={`${poppins.className} text-sm md:text-base text-fg-secondary leading-relaxed mb-6 font-light`}>
                {longDescription}
              </p>

              {/* Details sections */}
              {details && details.length > 0 && (
                <div className="space-y-4 mb-6">
                  {details.map((detail) => (
                    <div key={detail.title}>
                      <h4 className={`${poppins.className} text-sm font-semibold text-fg-primary mb-1.5`}>
                        {detail.title}
                      </h4>
                      <p className={`${poppins.className} text-sm text-fg-muted leading-relaxed font-light`}>
                        {detail.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`${poppins.className} text-xs px-3 py-1.5 bg-fg-primary/5 border border-fg-primary/10 rounded-full text-fg-muted`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${poppins.className} flex items-center gap-2 px-5 py-2.5 bg-fg-primary/10 hover:bg-fg-primary/20 border border-fg-primary/20 rounded-lg transition-all text-sm text-fg-secondary font-medium`}
                  >
                    <ExternalLink size={16} />
                    {t.works.visit}
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${poppins.className} flex items-center gap-2 px-5 py-2.5 bg-fg-primary/5 hover:bg-fg-primary/10 border border-fg-primary/10 rounded-lg transition-all text-sm text-fg-muted hover:text-fg-secondary font-medium`}
                  >
                    <Github size={16} />
                    {t.works.source}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
