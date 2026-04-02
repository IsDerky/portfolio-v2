import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const redirectUri = `${baseUrl}/api/spotify/callback`;

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
    }),
  });

  const data = await response.json();

  if (!data.refresh_token) {
    return NextResponse.json({ error: 'Failed to get tokens', data }, { status: 500 });
  }

  return new NextResponse(`
    <html>
      <body style="background:#111;color:#fff;font-family:monospace;padding:40px;">
        <h2>✅ Spotify conectado</h2>
        <p>Copia este <strong>refresh_token</strong> y ponlo en tu .env.local y en Vercel:</p>
        <pre style="background:#222;padding:20px;border-radius:8px;word-break:break-all;color:#1db954;">
SPOTIFY_REFRESH_TOKEN=${data.refresh_token}
        </pre>
        <p style="color:#888;">Una vez añadido, reinicia el servidor y ya no necesitarás esta ruta.</p>
      </body>
    </html>
  `, {
    headers: { 'Content-Type': 'text/html' },
  });
}
