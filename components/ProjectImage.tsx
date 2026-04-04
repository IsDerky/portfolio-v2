'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import type { Project } from '@/lib/projects';

interface ProjectImageProps {
  project: Project;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function ProjectImage({ project, fill, width, height, className, sizes, priority }: ProjectImageProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const src = mounted && theme === 'light' && project.lightImage ? project.lightImage : project.image!;
  const showDarkCircle = mounted && theme === 'light' && project.darkBackground;

  if (fill) {
    return (
      <>
        {showDarkCircle && (
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
            <div className="h-[90%] aspect-square rounded-full bg-black/80" />
          </div>
        )}
        <Image
          src={src}
          alt={project.title}
          fill
          className={`${className} relative z-10`}
          sizes={sizes}
          priority={priority}
        />
      </>
    );
  }

  if (showDarkCircle) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-black rounded-full p-2">
        <Image
          src={src}
          alt={project.title}
          width={width}
          height={height}
          className={className}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={project.title}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
