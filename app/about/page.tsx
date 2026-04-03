import type { Metadata } from "next";
import Aboutme from "@/components/sections/about/Aboutme";
import GitContributions from "@/components/sections/about/GitContributions";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "About - Derkyu",
  description: "Full-stack developer and network technician from Barcelona, Spain. Self-taught since 2019, with experience in web development and network systems.",
  openGraph: {
    title: "About - Derkyu",
    description: "Full-stack developer and network technician from Barcelona, Spain. Self-taught since 2019, with experience in web development and network systems.",
    url: "https://derkyu.lol/about",
    siteName: "Derkyu",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Derkyu",
    description: "Full-stack developer and network technician from Barcelona, Spain. Self-taught since 2019.",
  },
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