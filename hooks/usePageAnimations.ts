// hooks/usePageAnimations.ts
'use client';

import { useAnimation } from "@/components/providers/AnimationProvider";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface AnimationSequence {
  [key: string]: {
    header?: number;
    hero?: number;
    content?: number[];
    footer?: number;
  };
}

export const usePageAnimations = () => {
  const { getDelay, pageLoaded, triggerPageLoad } = useAnimation();
  const pathname = usePathname();
  const [currentSequence, setCurrentSequence] = useState<string>('default');

  // Secuencias de animación por página
  const sequences: AnimationSequence = {
    '/': {
      header: 0,
      hero: 0.2,
      content: [0.4, 0.6, 0.8],
      footer: 1.0
    },
    '/works': {
      header: 0,
      hero: 0,
      content: [0.1, 0.3, 0.5, 0.7], // WorksHeader, Featured, Filter, Grid
      footer: 0.9
    },
    '/about': {
      header: 0,
      hero: 0,
      content: [0.2, 0.4],
      footer: 0.6
    },
    default: {
      header: 0,
      hero: 0.1,
      content: [0.3, 0.5],
      footer: 0.7
    }
  };

  useEffect(() => {
    const sequence = sequences[pathname] || sequences.default;
    setCurrentSequence(pathname);
    
    // Re-trigger animations al cambiar de página
    if (pageLoaded) {
      triggerPageLoad();
    }
  }, [pathname]);

  const getSequenceDelay = (section: keyof AnimationSequence[string], index?: number) => {
    const sequence = sequences[pathname] || sequences.default;
    
    switch (section) {
      case 'header':
        return getDelay(sequence.header || 0);
      case 'hero':
        return getDelay(sequence.hero || 0);
      case 'content':
        const contentDelays = sequence.content || [0.3];
        const delayIndex = index !== undefined ? index : 0;
        return getDelay(contentDelays[delayIndex] || contentDelays[0]);
      case 'footer':
        return getDelay(sequence.footer || 0.7);
      default:
        return getDelay(0.3);
    }
  };

  const getStaggerDelay = (baseDelay: number, index: number, stagger: number = 0.1) => {
    return getDelay(baseDelay + (index * stagger));
  };

  // Variantes de animación predefinidas
  const variants = {
    fadeUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -30 }
    },
    fadeLeft: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 30 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 }
    },
    staggerContainer: {
      animate: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.1
        }
      }
    }
  };

  return {
    getSequenceDelay,
    getStaggerDelay,
    variants,
    pageLoaded,
    currentSequence,
    pathname
  };
};