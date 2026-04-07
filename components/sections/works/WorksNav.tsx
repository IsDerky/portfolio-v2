'use client';

import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { poppins } from '@/lib/fonts';
import { useTranslations } from 'next-intl';

interface WorksNavProps {
  liveUrl?: string;
  githubUrl?: string;
}

export default function WorksNav({ liveUrl, githubUrl }: WorksNavProps) {
  const t = useTranslations('works');
  return (
    <div className="flex items-center justify-between gap-4">
      <Link
        href="/works"
        className={`${poppins.className} inline-flex items-center gap-2 text-sm text-fg-muted hover:text-fg-primary transition-colors`}
      >
        <ArrowLeft size={16} />
        {t('backToWorks')}
      </Link>

      <div className="flex gap-3">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${poppins.className} inline-flex items-center gap-2 px-5 py-2.5 bg-fg-primary/10 hover:bg-fg-primary/20 border border-fg-primary/20 rounded-lg transition-all text-sm text-fg-secondary font-medium`}
          >
            <ExternalLink size={14} />
            {t('visit')}
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${poppins.className} inline-flex items-center gap-2 px-5 py-2.5 bg-fg-primary/5 hover:bg-fg-primary/10 border border-fg-primary/10 rounded-lg transition-all text-sm text-fg-muted hover:text-fg-secondary font-medium`}
          >
            <Github size={14} />
            {t('source')}
          </a>
        )}
      </div>
    </div>
  );
}
