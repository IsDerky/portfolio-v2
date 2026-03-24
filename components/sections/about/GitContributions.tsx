'use client';

import React, { useEffect, useState, useCallback, useMemo } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { poppins } from "@/lib/fonts";
import { Github } from 'lucide-react';
import { ActivityCalendar } from 'react-activity-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Section from "@/components/layout/Section";
import { FadeInElement } from "@/components/animations/ContentAnimation";

import 'react-tooltip/dist/react-tooltip.css';

interface GitHubActivity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const AnimatedCounter = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = React.useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          const controls = animate(count, value, {
            duration: 2,
            ease: "easeOut",
          });
          const unsubscribe = rounded.on("change", (v) => setDisplay(v));
          observer.disconnect();
          return () => {
            controls.stop();
            unsubscribe();
          };
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, count, rounded, hasAnimated]);

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

const GitHubContributions = () => {
  const githubUsername = 'isderky';
  const [data, setData] = useState<GitHubActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const { blockSize, blockMargin, fontSize } = useResponsiveBlockSize();

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=last`)
      .then(res => res.json())
      .then(res => {
        setData(res.contributions);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching GitHub data:', err);
        setLoading(false);
      });
  }, []);

  const totalContributions = useMemo(() => {
    return data.reduce((sum, day) => sum + day.count, 0);
  }, [data]);

  const explicitTheme = {
    light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  const renderBlock = useCallback((block: React.ReactElement, activity: GitHubActivity) => {
    const date = new Date(activity.date + 'T00:00:00');
    const formatted = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const label = activity.count === 0
      ? `No contributions on ${formatted}`
      : `${activity.count} contribution${activity.count !== 1 ? 's' : ''} on ${formatted}`;

    return React.cloneElement(block, {
      'data-tooltip-id': 'contributions-tooltip',
      'data-tooltip-content': label,
    } as Record<string, string>);
  }, []);

  return (
    <Section className="py-6 md:py-8">
      <FadeInElement delay={1.1}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="bg-[#212121] rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <h3 className={`${poppins.className} text-xl md:text-2xl font-semibold text-white flex items-center gap-2`}>
              <Github size={24} className="text-white" />
              Contribution Graph
            </h3>

            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${poppins.className} flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm text-gray-300 font-medium`}
            >
              <Github size={16} />
              View Profile
            </a>
          </div>

          <div className="w-full pb-4">
            {loading ? (
              <div className={`${poppins.className} text-gray-400 text-center py-8`}>
                Loading contributions...
              </div>
            ) : data && data.length > 0 ? (
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
                  style={{
                    color: '#9ca3af',
                    minWidth: 'fit-content',
                  }}
                />
                <ReactTooltip
                  id="contributions-tooltip"
                  style={{
                    backgroundColor: '#1a1a1a',
                    color: '#e5e7eb',
                    fontSize: '12px',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    zIndex: 100,
                  }}
                />
              </div>
            ) : (
              <div className={`${poppins.className} text-gray-400 text-center py-8`}>
                No contributions data available
              </div>
            )}
          </div>

          {!loading && data.length > 0 && (
            <p className={`${poppins.className} text-sm text-gray-400`}>
              <span className="text-white font-semibold">
                <AnimatedCounter value={totalContributions} />
              </span>
              {' '}contributions in the last year
            </p>
          )}
        </motion.div>
      </FadeInElement>
    </Section>
  );
};

export default GitHubContributions;
