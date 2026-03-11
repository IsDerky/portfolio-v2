import type { Metadata } from "next";
import "./globals.css";
import { AnimationProvider } from "@/components/providers/AnimationProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black min-h-screen`}
      >
        <AnimationProvider>
          <Header />
          <main>
            <Hero />
            {children}
          </main>
        </AnimationProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}