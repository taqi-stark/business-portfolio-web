import { Navbar } from "@/components/business/Navbar";
import { Hero } from "@/components/business/Hero";
import { ProjectsShowcase } from "@/components/business/ProjectsShowcase";
import { ServicesPricing } from "@/components/business/ServicesPricing";
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
        <ProjectsShowcase />
        <ServicesPricing />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloating />
      <MobileStickyBar />
    </div>
  );
};

export default Home;
