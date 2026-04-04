'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Home, User, Briefcase, Sun, Moon } from 'lucide-react';
import { poppins } from "@/lib/fonts";
import SimpleDock from "@/components/SimpleDock";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-1.5 rounded-full text-fg-muted hover:text-fg-primary transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}

const menuItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Works', href: '/works', icon: Briefcase },
  { name: 'About', href: '/about', icon: User },
];

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav
      className="bg-fg-primary/10 backdrop-blur-xl border border-fg-primary/20 rounded-full px-8 py-3 shadow-2xl"
      style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      role="navigation"
      aria-label="Main navigation"
    >
      <ul className="flex items-center space-x-8">
        {menuItems.map((item, index) => {
          const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          return (
            <li key={index}>
              <Link
                href={item.href}
                className={`
                  ${poppins.className}
                  relative font-medium text-sm transition-colors duration-300
                  py-2 px-3 group
                  ${isActive ? 'text-fg-primary' : 'text-fg-secondary hover:text-fg-primary'}
                `}
                aria-label={`Navigate to ${item.name}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-fg-primary transition-all duration-300 ease-out transform -translate-x-1/2 group-hover:w-full"></span>
              </Link>
            </li>
          );
        })}
        <li className="flex items-center gap-3">
          <span className="w-px h-4 bg-fg-primary/20" />
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}

export function MobileDock() {
  const pathname = usePathname();

  const dockItems = menuItems.map(item => {
    const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
    return {
      icon: <item.icon size={16} className={isActive ? 'text-fg-primary' : 'text-fg-muted/60'} />,
      label: item.name,
      href: item.href,
    };
  });

  return (
    <div className="flex items-center justify-center">
      <div
        className="flex items-center space-x-2 bg-fg-primary/10 backdrop-blur-xl border border-fg-primary/20 rounded-full px-4 py-2 shadow-2xl"
        style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      >
        <SimpleDock items={dockItems} unstyled />
        <span className="w-px h-4 bg-fg-primary/20 mx-1" />
        <ThemeToggle />
      </div>
    </div>
  );
}
