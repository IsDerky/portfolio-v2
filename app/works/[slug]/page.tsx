import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projects, getProjectById } from '@/lib/projects';
import Footer from '@/components/sections/Footer';
import Section from '@/components/layout/Section';
import { poppins } from '@/lib/fonts';
import ProjectImage from '@/components/ProjectImage';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Code2, Server, Network, Wrench, type LucideIcon } from 'lucide-react';

const categoryIcons: Record<string, LucideIcon> = {
  web: Code2,
  service: Server,
  network: Network,
  tools: Wrench,
};
import { existsSync } from 'fs';
import path from 'path';

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

async function getProjectMDX(slug: string) {
  try {
    const mdxPath = path.join(process.cwd(), 'content', 'projects', `${slug}.mdx`);
    if (!existsSync(mdxPath)) return null;
    const { default: Content } = await import(`../../../content/projects/${slug}.mdx`);
    return Content;
  } catch {
    return null;
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) notFound();

  const MDXContent = await getProjectMDX(slug);
  const CategoryIcon = categoryIcons[project.category];

  return (
    <>
      <Section className="py-6 md:py-8">
        <div className="bg-surface-2 rounded-2xl p-6 md:p-10 border border-fg-primary/10 flex flex-col gap-8">
          {/* Top bar: back link + buttons */}
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/works"
              className={`${poppins.className} inline-flex items-center gap-2 text-sm text-fg-muted hover:text-fg-primary transition-colors`}
            >
              <ArrowLeft size={16} />
              Back to Works
            </Link>

            <div className="flex gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${poppins.className} inline-flex items-center gap-2 px-5 py-2.5 bg-fg-primary/10 hover:bg-fg-primary/20 border border-fg-primary/20 rounded-lg transition-all text-sm text-fg-secondary font-medium`}
                >
                  <ExternalLink size={14} />
                  Visit
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${poppins.className} inline-flex items-center gap-2 px-5 py-2.5 bg-fg-primary/5 hover:bg-fg-primary/10 border border-fg-primary/10 rounded-lg transition-all text-sm text-fg-muted hover:text-fg-secondary font-medium`}
                >
                  <Github size={14} />
                  Source
                </a>
              )}
            </div>
          </div>

          {/* Title + meta */}
          <div className="flex items-center gap-4">
            {project.image && (
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-fg-primary/5 flex items-center justify-center shrink-0">
                <ProjectImage
                  project={project}
                  width={56}
                  height={56}
                  className="object-contain p-1"
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

          {/* MDX content or fallback to longDescription */}
          {MDXContent ? (
            <div className="max-w-2xl">
              <MDXContent />
            </div>
          ) : (
            <p className={`${poppins.className} text-fg-secondary text-base leading-relaxed max-w-2xl`}>
              {project.longDescription}
            </p>
          )}

          {/* Details (shown only if no MDX) */}
          {!MDXContent && project.details && project.details.length > 0 && (
            <div className="grid md:grid-cols-2 gap-4">
              {project.details.map((detail) => (
                <div
                  key={detail.title}
                  className="bg-surface-1 rounded-2xl p-6 border border-fg-primary/5"
                >
                  <h3 className={`${poppins.className} text-fg-primary font-medium mb-2`}>
                    {detail.title}
                  </h3>
                  <p className={`${poppins.className} text-fg-muted text-sm leading-relaxed`}>
                    {detail.text}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>
      <Footer />
    </>
  );
}
