import type { Metadata } from "next";
import Aboutme from "@/components/sections/about/Aboutme";
import GitContributions from "@/components/sections/about/GitContributions";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "About - Derkyu",
  description: "Learn more about Derkyu - Full-stack developer and network technician from Barcelona, Spain. View work experience, GitHub contributions, and technical skills.",
};

export default function AboutPage() {
  return (
    <>
      <Aboutme />
      <GitContributions />
      <Footer />
    </>
  );
}