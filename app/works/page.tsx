import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import WorksIntro from "@/components/sections/works/WorksIntro";
import FeaturedProjects from "@/components/sections/works/FeaturedProjects";
// import AllProjects from "@/components/sections/works/AllProjects";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Works - Derkyu",
  description: "Explore my portfolio of web development projects, including Derkyu Hosting, Discord bots, and custom web applications built with modern technologies.",
};

export default function WorksPage() {
  return (
    <main>
      <Header />
      <Hero />
      <WorksIntro />
      <FeaturedProjects />
      {/* <AllProjects /> */}
      <Footer />
    </main>
  );
}