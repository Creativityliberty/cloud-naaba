import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PricingHero from '../components/PricingHero';
import Pricing from '../components/Pricing';
import IncludedPricing from '../components/IncludedPricing';
import FAQ from '../components/FAQ';

interface PricingPageProps {
  onLogoClick?: () => void;
  onMarketplaceClick?: () => void;
  onHybridClick?: () => void;
  onSignupClick?: () => void;
  onLoginClick?: () => void;
  onContactClick?: () => void;
  onDemoClick?: () => void;
}

export default function PricingPage({
  onLogoClick,
  onMarketplaceClick,
  onHybridClick,
  onSignupClick,
  onLoginClick,
  onContactClick,
  onDemoClick
}: PricingPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-text-primary selection:bg-accent-primary/30">
      {/* Global Background System */}
      <div className="bg-layered">
        <div className="bg-radial-glow" />
        <div className="bg-noise" />
      </div>

      <Header 
        onLogoClick={onLogoClick} 
        onMarketplaceClick={onMarketplaceClick}
        onHybridClick={onHybridClick}
        onLoginClick={onLoginClick}
        onSignupClick={onSignupClick}
      />
      
      <main>
        <PricingHero 
          onPrimaryClick={onSignupClick} 
          onSecondaryClick={onContactClick} 
        />
        
        <IncludedPricing />

        <Pricing 
          onPlanSelect={(plan) => {
            if (plan === 'Business') onContactClick?.();
            else onSignupClick?.();
          }} 
        />
        
        <FAQ />
      </main>

      <Footer 
        onLogoClick={onLogoClick} 
        onMarketplaceClick={onMarketplaceClick}
        onHybridClick={onHybridClick}
        onSignupClick={onSignupClick}
      />
    </div>
  );
}
