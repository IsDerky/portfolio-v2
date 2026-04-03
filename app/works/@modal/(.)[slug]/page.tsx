'use client';

import { useRouter } from 'next/navigation';
import { getProjectById } from '@/lib/projects';
import ProjectModal from '@/components/ProjectModal';
import { use, useEffect, useRef } from 'react';

export default function ProjectModalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const router = useRouter();
  const project = getProjectById(slug) ?? null;
  const hasHistory = useRef(false);

  useEffect(() => {
    hasHistory.current = window.history.length > 1;
  }, []);

  const handleClose = () => {
    if (hasHistory.current) {
      router.back();
    } else {
      router.push('/works', { scroll: false });
    }
  };

  return <ProjectModal project={project} onClose={handleClose} />;
}
