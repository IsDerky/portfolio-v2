'use client';

import React, { useEffect, useState, useCallback } from "react";
import { useMotionValue, useTransform, animate } from "framer-motion";
import { poppins } from "@/lib/fonts";
import { Github } from 'lucide-react';
import { ActivityCalendar } from 'react-activity-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { useLanguage } from "@/components/providers/LanguageProvider";

import 'react-tooltip/dist/react-tooltip.css';

interface GitHubActivity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface Props {
  data: GitHubActivity[];
  totalContributions: number;
  githubUsername: string;
}

const localeMap: Record<string, string> = {
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
};

const AnimatedCounter = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(0);
  const hasAnimated = React.useRef(false);
  const ref = React.useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current || hasAnimated.current) return;

    let animationControls: ReturnType<typeof animate> | null = null;
    let unsubscribe: (() => void) | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasAnimated.current = true;
          animationControls = animate(count, value, {
            duration: 2,
            ease: "easeOut",
          });
          unsubscribe = rounded.on("change", (v) => setDisplay(v));
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      animationControls?.stop();
      unsubscribe?.();
    };
  }, [value, count, rounded]);

  return <span ref={ref}>{display}</span>;
};

const useResponsiveBlockSize = () => {
  const [sizes, setSizes] = useState({ blockSize: 11, blockMargin: 3.5, fontSize: 12 });

  useEffect(() => {
    const updateSizes = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSizes({ blockSize: 8, blockMargin: 2, fontSize: 9 });
      } else if (width < 768) {
        setSizes({ blockSize: 9, blockMargin: 2.5, fontSize: 10 });
      } else if (width < 1024) {
        setSizes({ blockSize: 10, blockMargin: 3, fontSize: 11 });
      } else {
        setSizes({ blockSize: 11, blockMargin: 3.5, fontSize: 12 });
      }
    };

    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  return sizes;
};

const explicitTheme = {
  light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

export default function GitContributionsClient({ data, totalContributions, githubUsername }: Props) {
  const { locale, t } = useLanguage();
  const { blockSize, blockMargin, fontSize } = useResponsiveBlockSize();
  const gc = t.gitContributions;
  const dateLocale = localeMap[locale] ?? 'en-US';

  const renderBlock = useCallback((block: React.ReactElement, activity: { date: string; count: number; level: number }) => {
    const date = new Date(activity.date + 'T00:00:00');
    const formatted = date.toLocaleDateString(dateLocale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const label = activity.count === 0
      ? `${gc.noContributionsOn} ${formatted}`
      : `${activity.count} ${activity.count !== 1 ? gc.contributions : gc.contribution} ${gc.on} ${formatted}`;

    return React.cloneElement(block, {
      'data-tooltip-id': 'contributions-tooltip',
      'data-tooltip-content': label,
    } as Record<string, string>);
  }, [dateLocale, gc]);

  const contributionsParts = gc.contributionsLastYear.split('{n}');

  return (
    <div className="bg-surface-2 rounded-2xl p-6 border border-fg-primary/10 hover:border-fg-primary/20 transition-all duration-300">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <h3 className={`${poppins.className} text-xl md:text-2xl font-semibold text-fg-primary flex items-center gap-2`}>
          <Github size={24} className="text-fg-primary" />
          {gc.title}
        </h3>

        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${poppins.className} flex items-center gap-2 px-4 py-2 bg-fg-primary/10 hover:bg-fg-primary/20 rounded-lg transition-colors text-sm text-fg-secondary font-medium`}
        >
          <Github size={16} />
          {gc.viewProfile}
        </a>
      </div>

      <div className="w-full pb-4">
        {data.length > 0 ? (
          <div className="w-full overflow-x-auto" style={{ fontSize: `${fontSize}px` }}>
            <ActivityCalendar
              data={data}
              theme={explicitTheme}
              colorScheme="dark"
              blockSize={blockSize}
              blockMargin={blockMargin}
              fontSize={fontSize}
              hideColorLegend={false}
              hideTotalCount={true}
              maxLevel={4}
              renderBlock={renderBlock}
              labels={{
                months: gc.months,
                legend: { less: gc.less, more: gc.more },
              }}
              style={{
                color: '#9ca3af',
                minWidth: 'fit-content',
              }}
            />
            <ReactTooltip
              id="contributions-tooltip"
              border="1px solid rgba(255,255,255,0.1)"
              style={{
                backgroundColor: '#1a1a1a',
                color: '#e5e7eb',
                fontSize: '12px',
                borderRadius: '8px',
                padding: '8px 12px',
                zIndex: 100,
              }}
            />
          </div>
        ) : (
          <div className={`${poppins.className} text-fg-muted text-center py-8`}>
            {gc.noData}
          </div>
        )}
      </div>

      {data.length > 0 && (
        <p className={`${poppins.className} text-sm text-fg-muted`}>
          {contributionsParts[0]}
          <span className="text-fg-primary font-semibold">
            <AnimatedCounter value={totalContributions} />
          </span>
          {contributionsParts[1]}
        </p>
      )}
    </div>
  );
}
