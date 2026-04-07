import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

const locales = ['en', 'es', 'fr'] as const;
type Locale = (typeof locales)[number];

function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('locale')?.value;

  let locale: Locale = 'en';

  if (cookieLocale && isValidLocale(cookieLocale)) {
    locale = cookieLocale;
  } else {
    const headersList = await headers();
    const acceptLang = headersList.get('accept-language') ?? '';
    const detected = acceptLang.split(',')[0].split('-')[0].toLowerCase();
    if (isValidLocale(detected)) {
      locale = detected;
    }
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
