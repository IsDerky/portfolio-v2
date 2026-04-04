import type { Metadata } from "next";
import "./globals.css";
import { AnimationProvider } from "@/components/providers/AnimationProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CommandPalette } from "@/components/CommandPalette";
import { Analytics } from "@vercel/analytics/next";
import { geistSans, geistMono } from "@/lib/fonts";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Derkyu - Portfolio",
  description: "Full-stack developer specializing in web applications, network solutions, and developer tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-surface-deep min-h-screen`}
      >
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
      </body>
    </html>
  );
}