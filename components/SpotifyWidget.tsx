'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { poppins } from '@/lib/fonts';
import { cn } from '@/lib/utils';

interface SpotifyData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumArt?: string;
  songUrl?: string;
  progress?: number;
  duration?: number;
}

const NUM_BARS = 50;
const BAR_DURATIONS = Array.from({ length: NUM_BARS }, () => 350 + Math.floor(Math.random() * 150));

const SoundBars = ({ progressPercent }: { progressPercent: number }) => (
  <div className="relative w-full" style={{ height: 6 }}>
    <div className="flex items-end w-full" style={{ height: 6, gap: 1 }}>
      {Array.from({ length: NUM_BARS }).map((_, i) => {
        const barProgress = (i / (NUM_BARS - 1)) * 100;
        const isActive = barProgress <= progressPercent;
        return (
          <div
            key={i}
            style={{
              flex: 1,
              minWidth: 0,
              height: 3,
              backgroundColor: '#ffffff',
              opacity: isActive ? 1 : 0.18,
              animation: isActive
                ? `natemoo-sound ${BAR_DURATIONS[i]}ms -800ms linear infinite alternate`
                : 'none',
            }}
          />
        );
      })}
    </div>
  </div>
);

export default function SpotifyWidget() {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [progressPercent, setProgressPercent] = useState(0);

  // Un solo ref con todo lo necesario para calcular la posición exacta
  const songRef = useRef<{
    progressMs: number;
    durationMs: number;
    fetchedAt: number;
    isPlaying: boolean;
  } | null>(null);

  const calcPercent = () => {
    const s = songRef.current;
    if (!s || !s.isPlaying || s.durationMs <= 0) return 0;
    const elapsed = Date.now() - s.fetchedAt;
    const current = Math.min(s.progressMs + elapsed, s.durationMs);
    return (current / s.durationMs) * 100;
  };

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch('/api/spotify', { cache: 'no-store' });
      const json: SpotifyData = await res.json();

      if (json.isPlaying && json.progress != null && json.duration != null) {
        songRef.current = {
          progressMs: json.progress,
          durationMs: json.duration,
          fetchedAt: Date.now(),
          isPlaying: true,
        };
        setProgressPercent(calcPercent());
      } else {
        songRef.current = null;
        setProgressPercent(0);
      }

      setData(json);
    } catch {
      songRef.current = null;
      setData({ isPlaying: false });
      setProgressPercent(0);
    } finally {
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fetch inicial y cada 5s — pausar cuando la tab está en segundo plano
  useEffect(() => {
    fetchData();
    const fetchInterval = setInterval(() => {
      if (document.visibilityState === 'visible') fetchData();
    }, 5000);
    return () => clearInterval(fetchInterval);
  }, [fetchData]);

  // Ticker: recalcula desde fetchedAt cada segundo + re-fetch si la canción terminó
  useEffect(() => {
    if (!data?.isPlaying) return;
    const ticker = setInterval(() => {
      const percent = calcPercent();
      setProgressPercent(percent);
      if (percent >= 100) fetchData();
    }, 1000);
    return () => clearInterval(ticker);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.isPlaying, fetchData]);

  return (
    <div className="flex flex-col gap-1 h-full">
      <motion.a
        href={data?.songUrl ?? 'https://open.spotify.com'}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.01 }}
        style={{ flex: 1 }}
        className="bg-surface-2 rounded-xl border border-fg-primary/10 hover:border-fg-primary/20 transition-all duration-300 cursor-pointer h-full overflow-hidden flex flex-col no-underline"
      >
        <div className={`${poppins.className} text-xs text-fg-muted px-4 pt-4 pb-3`}>
          <AnimatePresence mode="wait">
            {!loading && (
              <motion.span
                key={data?.isPlaying ? 'listening' : 'offline'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {data?.isPlaying ? 'Currently Listening' : 'Currently Offline'}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className="flex-1 flex flex-col px-4 pb-4">
          {loading ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="flex gap-1 items-end h-5">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-white/20 rounded-sm"
                    animate={{ height: [8, 16, 8] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${data?.isPlaying ? 'playing' : 'offline'}-${data?.title ?? 'empty'}`}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.3 }}
                className="flex gap-3 items-center"
              >
                {data?.albumArt ? (
                  <motion.img
                    src={data.albumArt}
                    alt={data.album ?? ''}
                    className="w-16 h-16 object-cover flex-shrink-0"
                    style={{ borderRadius: '6px 1px 1px 6px' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <div
                    className="w-16 h-16 bg-fg-primary/10 flex-shrink-0 flex items-center justify-center"
                    style={{ borderRadius: '6px 1px 1px 6px' }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#1db954">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  {!data?.isPlaying && data?.title && (
                    <p className={`${poppins.className} text-[10px] text-fg-subtle mb-1`}>
                      Recently listened
                    </p>
                  )}
                  <p className={`${poppins.className} text-sm font-semibold text-fg-primary truncate leading-snug mb-0.5`}>
                    {data?.title ?? 'Not playing'}
                  </p>
                  <p className={cn(poppins.className, 'text-sm text-fg-secondary truncate', data?.isPlaying && 'mb-4')}>
                    {data?.artist ?? '—'}
                  </p>

                  {data?.isPlaying && (
                    <SoundBars progressPercent={progressPercent} />
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </motion.a>
    </div>
  );
}
