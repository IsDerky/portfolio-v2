import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Aboutme from "@/components/sections/about/Aboutme";
import GitContributions from "@/components/sections/about/GitContributions";
import WorkExperience from "@/components/sections/about/WorkExperience";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "About - Derkyu",
  description: "Learn more about Derkyu - Full-stack developer and network technician from Barcelona, Spain. View work experience, GitHub contributions, and technical skills.",
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      <Hero />
      <Aboutme />
      <GitContributions />
      <WorkExperience />
      <Footer />
    </main>
  );
}