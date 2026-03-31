import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PricingHero from '../components/PricingHero';
import Pricing from '../components/Pricing';
import IncludedPricing from '../components/IncludedPricing';
import DecisionHelper from '../components/DecisionHelper';
import PricingConfigurator from '../components/PricingConfigurator';
import HybridPricingBlock from '../components/HybridPricingBlock';
import MigrationPricingBlock from '../components/MigrationPricingBlock';
import PrivateCloudBlock from '../components/PrivateCloudBlock';
import FAQ from '../components/FAQ';
import PricingFinalCTA from '../components/PricingFinalCTA';

interface PricingPageProps {
  onLogoClick?: () => void;
  onMarketplaceClick?: () => void;
  onHybridClick?: () => void;
  onPricingClick?: () => void;
  onSecurityClick?: () => void;
  onSignupClick?: () => void;
  onLoginClick?: () => void;
  onContactClick?: () => void;
  onDemoClick?: () => void;
}

export default function PricingPage({
  onLogoClick,
  onMarketplaceClick,
  onHybridClick,
  onPricingClick,
  onSecurityClick,
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
        onPricingClick={onPricingClick}
        onSecurityClick={onSecurityClick}
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
        
        <DecisionHelper 
          onPlanSelect={(plan) => {
            if (plan === 'Business') onContactClick?.();
            else onSignupClick?.();
          }} 
        />

        <PricingConfigurator 
          onActionClick={(config) => onSignupClick?.()} 
        />

        <HybridPricingBlock 
          onLearnMoreClick={onHybridClick}
        />

        <MigrationPricingBlock 
          onContactClick={onContactClick}
        />

        <PrivateCloudBlock 
          onContactClick={onContactClick}
        />
        
        <FAQ />

        <PricingFinalCTA 
          onSignupClick={onSignupClick}
          onContactClick={onContactClick}
        />
      </main>

      <Footer 
        onLogoClick={onLogoClick} 
        onMarketplaceClick={onMarketplaceClick}
        onHybridClick={onHybridClick}
        onPricingClick={onPricingClick}
        onSecurityClick={onSecurityClick}
        onSignupClick={onSignupClick}
      />
    </div>
  );
}
