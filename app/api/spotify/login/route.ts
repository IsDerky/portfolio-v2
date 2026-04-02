import { redirect } from 'next/navigation';

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const redirectUri = `${baseUrl}/api/spotify/callback`;
  const scope = 'user-read-currently-playing user-read-recently-played';

  const params = new URLSearchParams({
    client_id: clientId,
    response_type: 'code',
    redirect_uri: redirectUri,
    scope,
  });

  redirect(`https://accounts.spotify.com/authorize?${params.toString()}`);
}
