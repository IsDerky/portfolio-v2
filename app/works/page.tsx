import type { Metadata } from "next";
import WorksIntro from "@/components/sections/works/WorksIntro";
import FeaturedProjects from "@/components/sections/works/FeaturedProjects";
import AllProjects from "@/components/sections/works/AllProjects";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Works - Derkyu",
  description: "Projects built by Derkyu — web apps, hosting platforms, developer tools, and more.",
  openGraph: {
    title: "Works - Derkyu",
    description: "Projects built by Derkyu — web apps, hosting platforms, developer tools, and more.",
    url: "https://derkyu.lol/works",
    siteName: "Derkyu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Works - Derkyu",
    description: "Projects built by Derkyu — web apps, hosting platforms, developer tools, and more.",
  },
};

export default function WorksPage() {
  return (
    <>
      <WorksIntro />
      <FeaturedProjects />
      <AllProjects />
      <Footer />
    </>
  );
}
