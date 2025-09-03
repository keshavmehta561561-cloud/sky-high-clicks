import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import PortfolioSection from "@/components/sections/PortfolioSection"
import ServicesSection from "@/components/sections/ServicesSection"
import PricingSection from "@/components/sections/PricingSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/sections/Footer"
import CookieConsent from "@/components/CookieConsent"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
