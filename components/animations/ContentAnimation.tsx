'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Componente para elementos que aparecen con fade in
interface FadeInElementProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export const FadeInElement: React.FC<FadeInElementProps> = ({ 
  children, 
  delay = 0, 
  className = "",
  direction = 'up',
  duration = 0.6 
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 30 };
      case 'down': return { y: -30 };
      case 'left': return { x: -30 };
      case 'right': return { x: 30 };
      default: return { y: 30 };
    }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...getInitialPosition()
      }}
      animate={{ 
        opacity: 1, 
        y: 0,
        x: 0
      }}
      transition={{ 
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Componente para contenedores con staggered children
interface StaggeredContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}

export const StaggeredContainer: React.FC<StaggeredContainerProps> = ({
  children,
  className = "",
  staggerDelay = 0.1,
  initialDelay = 0
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: initialDelay,
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Componente para elementos hijos del StaggeredContainer
interface StaggeredItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const StaggeredItem: React.FC<StaggeredItemProps> = ({
  children,
  className = "",
  direction = 'up'
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 30 };
      case 'down': return { y: -30 };
      case 'left': return { x: -30 };
      case 'right': return { x: 30 };
      default: return { y: 30 };
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { 
          opacity: 0, 
          ...getInitialPosition()
        },
        visible: { 
          opacity: 1, 
          y: 0,
          x: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut"
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Hook para controlar animaciones manuales
export const useStaggeredReveal = (itemCount: number, delay: number = 150) => {
  const [visibleItems, setVisibleItems] = React.useState<number[]>([]);

  React.useEffect(() => {
    setVisibleItems([]);
    
    const timeouts: NodeJS.Timeout[] = [];
    
    for (let i = 0; i < itemCount; i++) {
      const timeout = setTimeout(() => {
        setVisibleItems(prev => [...prev, i]);
      }, i * delay);
      
      timeouts.push(timeout);
    }

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [itemCount, delay]);

  return visibleItems;
};