import { Geist, Geist_Mono, Reenie_Beanie, Poppins, Permanent_Marker } from 'next/font/google';

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const reenieBeanie = Reenie_Beanie({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});