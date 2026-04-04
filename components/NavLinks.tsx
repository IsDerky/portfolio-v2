'use client';

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Home, User, Briefcase, Sun, Moon } from 'lucide-react';
import { CircleFlag } from 'react-circle-flags';
import { poppins } from "@/lib/fonts";
import SimpleDock from "@/components/SimpleDock";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Locale } from "@/lib/i18n/translations";

const languages: { code: Locale; label: string; flagCode: string }[] = [
  { code: 'en', label: 'English', flagCode: 'gb' },
  { code: 'es', label: 'Español', flagCode: 'es' },
  { code: 'fr', label: 'Français', flagCode: 'fr' },
];

function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = React.useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selected = languages.find(l => l.code === locale)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="flex items-center gap-1 p-1.5 rounded-full text-fg-muted hover:text-fg-primary transition-colors duration-300"
        aria-label="Switch language"
      >
        <CircleFlag countryCode={selected.flagCode} height={15} className="w-[15px] h-[15px] shrink-0" />
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-2 bg-surface-1 border border-fg-primary/20 rounded-xl shadow-xl overflow-hidden min-w-[120px] z-50">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => { setLocale(lang.code); setOpen(false); }}
              className={`${poppins.className} w-full flex items-center gap-2.5 px-3 py-2 text-xs transition-colors duration-150 hover:bg-fg-primary/10
                ${locale === lang.code ? 'text-fg-primary font-medium' : 'text-fg-muted'}`}
            >
              <CircleFlag countryCode={lang.flagCode} height={15} className="w-[15px] h-[15px] shrink-0" />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

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

export function DesktopNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const menuItems = [
    { name: t.nav.home, href: '/', icon: Home },
    { name: t.nav.works, href: '/works', icon: Briefcase },
    { name: t.nav.about, href: '/about', icon: User },
  ];

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
          <LanguageSwitcher />
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}

export function MobileDock() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const menuItems = [
    { name: t.nav.home, href: '/', icon: Home },
    { name: t.nav.works, href: '/works', icon: Briefcase },
    { name: t.nav.about, href: '/about', icon: User },
  ];

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
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </div>
  );
}
