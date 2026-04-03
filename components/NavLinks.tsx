'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase } from 'lucide-react';
import { poppins } from "@/lib/fonts";
import SimpleDock from "@/components/SimpleDock";

const menuItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Works', href: '/works', icon: Briefcase },
  { name: 'About', href: '/about', icon: User },
];

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-3 shadow-2xl"
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
                  ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}
                `}
                aria-label={`Navigate to ${item.name}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 ease-out transform -translate-x-1/2 group-hover:w-full"></span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function MobileDock() {
  const pathname = usePathname();

  const dockItems = menuItems.map(item => {
    const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
    return {
      icon: <item.icon size={16} className={isActive ? 'text-white' : 'text-gray-300/60'} />,
      label: item.name,
      href: item.href,
    };
  });

  return <SimpleDock items={dockItems} />;
}
