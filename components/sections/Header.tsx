'use client';

import React, { useState } from "react";
import Link from "next/link";
import { Poppins } from 'next/font/google';
import { Home, User, Briefcase } from 'lucide-react';
import { FadeInElement } from "@/components/animations/ContentAnimation";

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

// Simple Dock Component for Mobile
const SimpleDock: React.FC<{ items: Array<{ icon: React.ReactNode; label: string; href: string }> }> = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 shadow-2xl" style={{backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)'}}>
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
              style={{
                width: size,
                height: size,
              }}
              aria-label={item.label}
            >
              <div
                className="flex items-center justify-center text-gray-300 transition-colors duration-200"
                style={{
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                }}
              >
                {item.icon}
              </div>

              {isHovered && (
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-black/95 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg border border-white/20">
                  {item.label}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-black/95"></div>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const menuItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Works', href: '/works', icon: Briefcase },
    { name: 'About', href: '/about', icon: User },
  ];

  // Dock items for mobile navigation
  const dockItems = menuItems.map(item => ({
    icon: <item.icon size={16} className="text-gray-300" />,
    label: item.name,
    href: item.href
  }));

  return (
    <>
      {/* Desktop: Dynamic Island */}
      <FadeInElement delay={0}>
        <header className="hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto">
          <nav className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-3 shadow-2xl" style={{backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)'}} role="navigation" aria-label="Main navigation">
            <ul className="flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`
                      ${poppins.className}
                      relative
                      text-gray-300
                      hover:text-white
                      font-medium
                      text-sm
                      transition-colors
                      duration-300
                      py-2
                      px-3
                      group
                    `}
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                    <span className="
                      absolute
                      bottom-0
                      left-1/2
                      w-0
                      h-0.5
                      bg-white
                      transition-all
                      duration-300
                      ease-out
                      transform
                      -translate-x-1/2
                      group-hover:w-full
                    "></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </FadeInElement>

      {/* Mobile: Dock Navigation */}
      <FadeInElement delay={0}>
        <div className="md:hidden fixed top-3 left-1/2 transform -translate-x-1/2 z-50 px-4">
          <SimpleDock items={dockItems} />
        </div>
      </FadeInElement>
    </>
  );
};

export default Header;
