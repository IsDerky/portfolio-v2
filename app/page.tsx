import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import MoreInfo from "@/components/sections/MoreInfo";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <MoreInfo />
      <Footer />
    </main>
  );
}