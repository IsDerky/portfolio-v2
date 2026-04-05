import React from "react";
import { poppins } from '@/lib/fonts';
import { getFeaturedProjects } from '@/lib/projects';
import Section from "@/components/layout/Section";
import { FadeInElement } from "@/components/animations/ContentAnimation";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <Section className="py-6 md:py-8">
      <FadeInElement delay={0.7} className="mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-fg-primary/20 to-transparent"></div>
          <h3 className={`${poppins.className} text-xl md:text-2xl font-semibold text-fg-primary`}>
            Featured Projects
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-fg-primary/20 to-transparent"></div>
        </div>
      </FadeInElement>

      <div className="space-y-6">
        {featuredProjects.map((project, index) => (
          <FadeInElement key={project.id} delay={0.8 + (index * 0.1)}>
            <ProjectCard project={project} index={index} priority={true} />
          </FadeInElement>
        ))}
      </div>
    </Section>
  );
};

export default FeaturedProjects;
