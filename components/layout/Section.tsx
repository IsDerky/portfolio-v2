import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  as?: 'section' | 'footer' | 'header';
  includeContainer?: boolean;
}

const Section = ({ 
  children, 
  className = '', 
  backgroundColor = '#121212',
  as: Component = 'section',
  includeContainer = true
}: SectionProps) => {
  return (
    <Component 
      className={cn('w-full py-8 px-8', className)}
      style={{ backgroundColor }}
    >
      {includeContainer ? (
        <div className="w-full max-w-4xl mx-auto">
          {children}
        </div>
      ) : (
        children
      )}
    </Component>
  );
};

export default Section;