import type { Metadata } from "next";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import MoreInfo from "@/components/sections/MoreInfo";

export const metadata: Metadata = {
  title: "Derkyu - Portfolio",
  description: "Portfolio of Derkyu, a full-stack developer and network technician from Barcelona. Building web apps, hosting platforms, and tools.",
};

export default function Home() {
  return (
    <>
      <About />
      <MoreInfo />
      <Footer />
    </>
  );
}