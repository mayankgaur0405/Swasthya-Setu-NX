import HeroSection from "@/components/hero-section";
import FeatureSection from "@/components/feature-section";
import CTASection from "@/components/cta-section";
import PricingSection from "@/components/pricing-section";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
     <div className="bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Feature Section */} 
      <FeatureSection />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action Section */}
      <CTASection />
      
    
    </div>
  );
}
