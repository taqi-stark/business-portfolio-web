import { Navbar } from "@/components/business/Navbar";
import { Hero } from "@/components/business/Hero";
import { Services } from "@/components/business/Services";
import { ProblemSolution } from "@/components/business/ProblemSolution";
import { PortfolioSection } from "@/components/business/PortfolioSection";
import { IndustrySolutions } from "@/components/business/IndustrySolutions";
import { WhyWorkWithMe } from "@/components/business/WhyWorkWithMe";
import { Process } from "@/components/business/Process";
import { Packages } from "@/components/business/Packages";
import { AboutAli } from "@/components/business/AboutAli";
import { FAQSection } from "@/components/business/FAQSection";
import { FinalCTA } from "@/components/business/FinalCTA";
import { ContactSection } from "@/components/business/ContactSection";
import { Footer } from "@/components/business/Footer";
import { WhatsAppFloating } from "@/components/business/WhatsAppFloating";
import { MobileStickyBar } from "@/components/business/MobileStickyBar";

export const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-slate-900 pb-16 sm:pb-0">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <ProblemSolution />
        <PortfolioSection />
        <IndustrySolutions />
        <WhyWorkWithMe />
        <Process />
        <Packages />
        <AboutAli />
        <FAQSection />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloating />
      <MobileStickyBar />
    </div>
  );
};

export default Home;
