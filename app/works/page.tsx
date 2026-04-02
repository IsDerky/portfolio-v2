'use client';

import { useState } from "react";
import WorksIntro from "@/components/sections/works/WorksIntro";
import FeaturedProjects from "@/components/sections/works/FeaturedProjects";
import AllProjects from "@/components/sections/works/AllProjects";
import Footer from "@/components/sections/Footer";
import ProjectModal from "@/components/ProjectModal";
import type { Project } from "@/lib/projects";

export default function WorksPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <WorksIntro />
      <FeaturedProjects onProjectClick={setSelectedProject} />
      <AllProjects onProjectClick={setSelectedProject} />
      <Footer />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
