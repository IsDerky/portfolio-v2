import { NextResponse } from 'next/server';

const clientId = process.env.SPOTIFY_CLIENT_ID!;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN!;

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.value;
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
    cache: 'no-store',
  });

  const data = await response.json();

  if (!data.access_token) {
    throw new Error('Spotify token refresh failed');
  }

  cachedToken = {
    value: data.access_token,
    expiresAt: Date.now() + (data.expires_in ?? 3600) * 1000 - 120_000,
  };

  return data.access_token;
}

async function getNowPlaying(accessToken: string) {
  return fetch('https://api.spotify.com/v1/me/player/currently-playing?additional_types=track,episode', {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: 'no-store',
  });
}

async function getRecentlyPlayed(accessToken: string) {
  return fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: 'no-store',
  });
}

export async function GET() {
  if (!refreshToken) {
    return NextResponse.json({ isPlaying: false, error: 'No refresh token configured' });
  }

  try {
    const accessToken = await getAccessToken();
    const nowPlayingRes = await getNowPlaying(accessToken);

    // Currently playing
    if (nowPlayingRes.status === 200) {
      const data = await nowPlayingRes.json();

      if (data.item) {
        const isTrack = data.currently_playing_type === 'track';
        const item = data.item;

        return NextResponse.json({
          isPlaying: data.is_playing === true,
          type: data.currently_playing_type,
          title: item.name,
          artist: isTrack
            ? item.artists.map((a: { name: string }) => a.name).join(', ')
            : item.show?.publisher ?? '',
          album: isTrack ? item.album?.name : item.show?.name ?? '',
          albumArt: isTrack
            ? item.album?.images?.[1]?.url ?? item.album?.images?.[0]?.url
            : item.images?.[1]?.url ?? item.images?.[0]?.url,
          songUrl: item.external_urls?.spotify,
          progress: data.progress_ms,
          duration: item.duration_ms,
          fetchedAt: Date.now(),
        }, {
          headers: { 'Cache-Control': 'public, max-age=10, stale-while-revalidate=30' },
        });
      }
    }

    // Not playing — get recently played
    const recentRes = await getRecentlyPlayed(accessToken);
    if (recentRes.status === 200) {
      const recentData = await recentRes.json();
      const item = recentData.items?.[0]?.track;

      if (item) {
        return NextResponse.json({
          isPlaying: false,
          type: 'track',
          title: item.name,
          artist: item.artists.map((a: { name: string }) => a.name).join(', '),
          album: item.album?.name,
          albumArt: item.album?.images?.[1]?.url ?? item.album?.images?.[0]?.url,
          songUrl: item.external_urls?.spotify,
          progress: 0,
          duration: item.duration_ms,
          fetchedAt: Date.now(),
        }, {
          headers: { 'Cache-Control': 'public, max-age=10, stale-while-revalidate=30' },
        });
      }
    }

    return NextResponse.json({ isPlaying: false });
  } catch (error) {
    console.error('Spotify API error:', error);
    return NextResponse.json({ isPlaying: false, error: 'Failed to fetch' });
  }
}
