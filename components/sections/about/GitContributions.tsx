'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Poppins } from 'next/font/google';
import { Github } from 'lucide-react';
import { ActivityCalendar } from 'react-activity-calendar';
import Section from "@/components/layout/Section";
import { FadeInElement } from "@/components/animations/ContentAnimation";

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

interface GitHubActivity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const GitHubContributions = () => {
  const githubUsername = 'isderky';
  const [data, setData] = useState<GitHubActivity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch GitHub contributions data for last year
    fetch(`https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=2025`)
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

  const explicitTheme = {
    light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

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
              <div className="w-full" style={{ fontSize: '12px' }}>
                <ActivityCalendar
                  data={data}
                  theme={explicitTheme}
                  colorScheme="dark"
                  blockSize={11}
                  blockMargin={3.5}
                  fontSize={12}
                  hideColorLegend={false}
                  hideTotalCount={false}
                  maxLevel={4}
                  labels={{
                    totalCount: '{{count}} contributions in {{year}}',
                  }}
                  style={{
                    color: '#9ca3af',
                    width: '100%',
                  }}
                />
              </div>
            ) : (
              <div className={`${poppins.className} text-gray-400 text-center py-8`}>
                No contributions data available
              </div>
            )}
          </div>
        </motion.div>
      </FadeInElement>
    </Section>
  );
};

export default GitHubContributions;