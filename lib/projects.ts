
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  tags: string[];
  category: 'web' | 'service' | 'network' | 'tools';
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  featured: boolean;
  details?: {
    title: string;
    text: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 'derkyu-hosting',
    title: 'Derkyu Hosting',
    description: 'Specialized hosting platform for game servers, Discord bots, and custom software.',
    longDescription: 'A comprehensive hosting solution offering optimized performance, intuitive management tools, and 24/7 support with strategic server locations across Europe and South America.',
    image: '/logos/derkyu-hosting.png',
    tags: ['Shadcn', 'Next.js', 'TypeScript', 'PNPM'],
    category: 'service',
    liveUrl: 'https://hosting.derkyu.lol',
    year: '2025',
    featured: true,
    details: [
      {
        title: 'Performance & Flexibility',
        text: 'Scalable plans with 99% SLA, strategic server locations across Europe and South America, and 24/7 technical support for seamless operations.',
      },
      {
        title: 'Advanced Features',
        text: 'Integrated code editor, SFTP file manager, automatic updates, real-time monitoring, and DDoS protection included in all plans.',
      },
    ],
  },
  {
    id: 'ronin-fc',
    title: 'Ronin FC',
    description: 'Community-built website for Ronin FC, the football club founded by Ibai Llanos.',
    longDescription: 'Community-built website for Ronin FC football club. This is a fan-made project and is not officially affiliated with or endorsed by Ibai Llanos or Ronin FC organization.',
    image: '/logos/ronin-logo.png',
    tags: ['Next.js', 'TypeScript', 'PNPM', 'API'],
    category: 'web',
    liveUrl: 'https://roninfc.digital',
    year: '2025',
    featured: true,
  },
  {
    id: 'bodycamrp',
    title: 'Bodycam RP',
    description: 'Free browser-based body camera overlay tool for FiveM and GTA Roleplay streamers.',
    longDescription: 'Configure professional bodycam overlays for OBS — no installation required. Built for the FiveM and GTA Roleplay streaming community.',
    tags: ['Next.js', 'React', 'OBS'],
    category: 'tools',
    liveUrl: 'https://bodycamrp.org',
    year: '2026',
    featured: false,
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectById = (id: string) => projects.find((p) => p.id === id);
