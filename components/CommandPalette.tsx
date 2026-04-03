'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Search, Home, Briefcase, User, ExternalLink, Mail, X } from 'lucide-react';
import { poppins } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { projects } from '@/lib/projects';

interface CommandItem {
  id: string;
  label: string;
  sublabel?: string;
  icon: React.ReactNode;
  action: () => void;
  group: string;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setSelectedIndex(0);
  }, []);

  const navigate = useCallback(
    (href: string) => {
      router.push(href, { scroll: false });
      close();
    },
    [router, close]
  );

  const allItems: CommandItem[] = [
    {
      id: 'home',
      label: 'Home',
      sublabel: 'Go to homepage',
      icon: <Home size={15} />,
      action: () => navigate('/'),
      group: 'Navigation',
    },
    {
      id: 'works',
      label: 'Works',
      sublabel: 'View all projects',
      icon: <Briefcase size={15} />,
      action: () => navigate('/works'),
      group: 'Navigation',
    },
    {
      id: 'about',
      label: 'About',
      sublabel: 'About Derkyu',
      icon: <User size={15} />,
      action: () => navigate('/about'),
      group: 'Navigation',
    },
    ...projects.map((p) => ({
      id: `project-${p.id}`,
      label: p.title,
      sublabel: p.description,
      icon: <ExternalLink size={15} />,
      action: () => navigate(`/works/${p.id}`),
      group: 'Projects',
    })),
    {
      id: 'email',
      label: 'Send Email',
      sublabel: 'contact@derkyu.lol',
      icon: <Mail size={15} />,
      action: () => {
        window.location.href = 'mailto:contact@derkyu.lol';
        close();
      },
      group: 'Contact',
    },
  ];

  const filtered = query
    ? allItems.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.sublabel?.toLowerCase().includes(query.toLowerCase())
      )
    : allItems;

  const groups = filtered.reduce<Record<string, CommandItem[]>>((acc, item) => {
    if (!acc[item.group]) acc[item.group] = [];
    acc[item.group].push(item);
    return acc;
  }, {});

  const flatFiltered = Object.values(groups).flat();

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Cmd+K / Ctrl+K global shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
        if (!open) {
          setQuery('');
          setSelectedIndex(0);
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  // Focus input when palette opens
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 40);
      return () => clearTimeout(t);
    }
  }, [open]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((i) => (i + 1) % flatFiltered.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((i) => (i - 1 + flatFiltered.length) % flatFiltered.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        flatFiltered[selectedIndex]?.action();
      } else if (e.key === 'Escape') {
        close();
      }
    },
    [flatFiltered, selectedIndex, close]
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-start justify-center pt-[14vh] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={close}
          />

          {/* Palette panel */}
          <motion.div
            className="relative w-full max-w-lg bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
            initial={{ scale: 0.97, opacity: 0, y: -10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.97, opacity: 0, y: -10 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            onKeyDown={handleKeyDown}
          >
            {/* Search bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10">
              <Search size={15} className="text-gray-500 shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, projects..."
                className={cn(
                  poppins.className,
                  'flex-1 bg-transparent text-sm text-white placeholder:text-gray-500 outline-none'
                )}
              />
              <button
                onClick={close}
                className="text-gray-600 hover:text-gray-400 transition-colors p-0.5"
                aria-label="Close"
              >
                <X size={13} />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[55vh] overflow-y-auto py-1.5">
              {flatFiltered.length === 0 ? (
                <p className={cn(poppins.className, 'text-center text-sm text-gray-500 py-8')}>
                  No results for &ldquo;{query}&rdquo;
                </p>
              ) : (
                Object.entries(groups).map(([group, items]) => {
                  const groupOffset = flatFiltered.indexOf(items[0]);
                  return (
                    <div key={group}>
                      <p className={cn(poppins.className, 'text-[10px] uppercase tracking-widest text-gray-600 px-4 pt-3 pb-1.5 font-medium')}>
                        {group}
                      </p>
                      {items.map((item, localIdx) => {
                        const globalIdx = groupOffset + localIdx;
                        const isSelected = selectedIndex === globalIdx;
                        return (
                          <button
                            key={item.id}
                            onClick={item.action}
                            onMouseEnter={() => setSelectedIndex(globalIdx)}
                            className={cn(
                              'w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors duration-100',
                              isSelected ? 'bg-white/[0.07]' : 'hover:bg-white/[0.04]'
                            )}
                          >
                            <span className={cn('shrink-0 transition-colors', isSelected ? 'text-white' : 'text-gray-500')}>
                              {item.icon}
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className={cn(poppins.className, 'text-sm font-medium truncate transition-colors', isSelected ? 'text-white' : 'text-gray-300')}>
                                {item.label}
                              </p>
                              {item.sublabel && (
                                <p className={cn(poppins.className, 'text-xs truncate text-gray-500 mt-0.5')}>
                                  {item.sublabel}
                                </p>
                              )}
                            </div>
                            {isSelected && (
                              <span className="text-gray-600 text-xs shrink-0">↵</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className={cn(poppins.className, 'flex items-center gap-4 px-4 py-2.5 border-t border-white/[0.06] text-[10px] text-gray-600')}>
              <span>↑↓ navigate</span>
              <span>↵ select</span>
              <span>esc close</span>
              <span className="ml-auto opacity-60">⌘K</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
