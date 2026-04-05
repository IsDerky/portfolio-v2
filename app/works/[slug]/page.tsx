import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projects, getProjectById } from '@/lib/projects';
import Footer from '@/components/sections/Footer';
import Section from '@/components/layout/Section';
import { poppins } from '@/lib/fonts';
import ProjectImage from '@/components/ProjectImage';
import { Code2, Server, Network, Wrench, type LucideIcon } from 'lucide-react';
import ProjectContent from '@/components/sections/works/LocalizedMDX';
import WorksNav from '@/components/sections/works/WorksNav';

const categoryIcons: Record<string, LucideIcon> = {
  web: Code2,
  service: Server,
  network: Network,
  tools: Wrench,
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) return {};
  return {
    title: `${project.title} - Derkyu`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) notFound();

  const CategoryIcon = categoryIcons[project.category];

  return (
    <>
      <Section className="py-6 md:py-8">
        <div className="bg-surface-2 rounded-2xl p-6 md:p-10 border border-fg-primary/10 flex flex-col gap-8">
          <WorksNav liveUrl={project.liveUrl} githubUrl={project.githubUrl} />

          {/* Title + meta */}
          <div className="flex items-center gap-4">
            {project.image && (
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-[#2c2c2c] flex items-center justify-center shrink-0">
                <ProjectImage
                  project={project}
                  width={56}
                  height={56}
                  className="object-contain p-1"
                  disableCircle
                />
              </div>
            )}
            <div>
              <h1 className={`${poppins.className} text-3xl md:text-4xl font-semibold text-fg-primary`}>
                {project.title}
              </h1>
              <span className={`${poppins.className} text-sm text-fg-muted flex items-center gap-1.5`}>
                {project.year}
                <span className="text-fg-faint">·</span>
                {CategoryIcon && <CategoryIcon size={13} />}
                <span className="capitalize">{project.category}</span>
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`${poppins.className} text-xs px-3 py-1 rounded-full bg-fg-primary/10 text-fg-secondary`}
              >
                {tag}
              </span>
            ))}
          </div>

          <ProjectContent projectId={slug} />
        </div>
      </Section>
      <Footer />
    </>
  );
}
