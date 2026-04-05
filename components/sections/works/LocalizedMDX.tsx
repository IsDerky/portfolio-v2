'use client';

import { poppins } from '@/lib/fonts';
import { useLanguage } from '@/components/providers/LanguageProvider';

interface ProjectContentProps {
  projectId: string;
}

export default function ProjectContent({ projectId }: ProjectContentProps) {
  const { t } = useLanguage();
  const tp = t.projects[projectId];
  if (!tp) return null;

  if (tp.sections && tp.sections.length > 0) {
    return (
      <div className="max-w-2xl">
        {tp.sections.map((section) => (
          <div key={section.heading}>
            <h2 className={`${poppins.className} text-2xl font-semibold text-fg-primary mb-3 mt-8 first:mt-0`}>
              {section.heading}
            </h2>
            {section.body && (
              <p className={`${poppins.className} text-fg-secondary leading-relaxed mb-4`}>
                {section.body}
              </p>
            )}
            {section.items && (
              <ul className={`${poppins.className} text-fg-secondary list-disc list-inside mb-4 space-y-1`}>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  }

  // Fallback: longDescription + details
  return (
    <div className="max-w-2xl">
      <p className={`${poppins.className} text-fg-secondary leading-relaxed mb-4`}>
        {tp.longDescription}
      </p>
      {tp.details?.map((detail) => (
        <div key={detail.title}>
          <h3 className={`${poppins.className} text-xl font-medium text-fg-primary mb-2 mt-6`}>
            {detail.title}
          </h3>
          <p className={`${poppins.className} text-fg-secondary leading-relaxed mb-4`}>
            {detail.text}
          </p>
        </div>
      ))}
    </div>
  );
}
