'use client';

import React, { useState } from "react";
import Link from "next/link";

export interface SimpleDockItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const SimpleDock: React.FC<{ items: SimpleDockItem[]; unstyled?: boolean }> = ({ items, unstyled = false }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const inner = (
    <>
      {items.map((item, index) => {
        const isHovered = hoveredIndex === index;
        const size = isHovered ? 36 : 34;

        return (
          <Link
            key={index}
            href={item.href}
            className="relative flex items-center justify-center transition-all duration-300 ease-out cursor-pointer active:scale-95"
            onTouchStart={() => setHoveredIndex(index)}
            onTouchEnd={() => setHoveredIndex(null)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ width: size, height: size }}
            aria-label={item.label}
          >
            <div
              className="flex items-center justify-center text-fg-secondary transition-colors duration-200"
              style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
            >
              {item.icon}
            </div>

            {isHovered && (
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-surface-1 backdrop-blur-sm text-fg-primary text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg border border-fg-primary/20">
                {item.label}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-surface-1"></div>
              </div>
            )}
          </Link>
        );
      })}
    </>
  );

  if (unstyled) return <div className="flex items-center space-x-2">{inner}</div>;

  return (
    <div className="flex items-center justify-center">
      <div
        className="flex items-center justify-center space-x-2 bg-fg-primary/10 backdrop-blur-xl border border-fg-primary/20 rounded-full px-4 py-2 shadow-2xl"
        style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      >
        {inner}
      </div>
    </div>
  );
};

export default SimpleDock;
