'use server';

import { cookies } from 'next/headers';

const locales = ['en', 'es', 'fr'];

export async function setLocale(locale: string) {
  if (!locales.includes(locale)) return;
  const cookieStore = await cookies();
  cookieStore.set('locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  });
}
