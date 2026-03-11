'use client';

import React from "react";
import Link from "next/link";
import { poppins } from "@/lib/fonts";
import { Home, User, Briefcase } from 'lucide-react';
import { FadeInElement } from "@/components/animations/ContentAnimation";
import SimpleDock from "@/components/SimpleDock";

const Header: React.FC = () => {
  const menuItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Works', href: '/works', icon: Briefcase },
    { name: 'About', href: '/about', icon: User },
  ];

  const dockItems = menuItems.map(item => ({
    icon: <item.icon size={16} className="text-gray-300" />,
    label: item.name,
    href: item.href,
  }));

  return (
    <>
      {/* Desktop: Dynamic Island */}
      <FadeInElement delay={0}>
        <header className="hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto">
          <nav
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-3 shadow-2xl"
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
            role="navigation"
            aria-label="Main navigation"
          >
            <ul className="flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`
                      ${poppins.className}
                      relative text-gray-300 hover:text-white
                      font-medium text-sm transition-colors duration-300
                      py-2 px-3 group
                    `}
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                    <span className="
                      absolute bottom-0 left-1/2 w-0 h-0.5 bg-white
                      transition-all duration-300 ease-out transform -translate-x-1/2
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