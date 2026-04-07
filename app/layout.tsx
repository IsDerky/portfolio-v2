import type { Metadata } from "next";
import "./globals.css";
import { AnimationProvider } from "@/components/providers/AnimationProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CommandPalette } from "@/components/CommandPalette";
import { Analytics } from "@vercel/analytics/next";
import { geistSans, geistMono } from "@/lib/fonts";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: "Derkyu - Portfolio",
  description: "Full-stack developer specializing in web applications, network solutions, and developer tools.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-surface-deep min-h-screen`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <AnimationProvider>
              <CommandPalette />
              <Header />
              <main>
                <Hero />
                {children}
              </main>
            </AnimationProvider>
          </ThemeProvider>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
