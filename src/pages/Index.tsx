import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { StackBento } from "@/components/portfolio/StackBento";
import { WorkBento } from "@/components/portfolio/WorkBento";
import { AboutBento } from "@/components/portfolio/AboutBento";
import { ContactBento } from "@/components/portfolio/ContactBento";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollScene } from "@/components/portfolio/ScrollScene";

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <ScrollScene>
      <Nav />
      <main id="main-content">
        <Hero />
        <StackBento />
        <WorkBento />
        <AboutBento />
        <ContactBento />
      </main>
      <Footer />
    </ScrollScene>
  </div>
);

export default Index;
