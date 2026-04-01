import React, { useEffect } from 'react';
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
  onContactClick?: () => void;
  onDemoClick?: () => void;
  onSignupClick?: () => void;
  onHybridClick?: () => void;
}

export default function PricingPage({
  onContactClick,
  onDemoClick,
  onSignupClick,
  onHybridClick
}: PricingPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <PricingHero 
          onPrimaryClick={onSignupClick} 
          onSecondaryClick={onContactClick} 
        />
        
        <IncludedPricing />

        <Pricing 
          onPlanSelect={() => onContactClick?.()} 
        />
        
        <DecisionHelper 
          onPlanSelect={() => onContactClick?.()} 
        />

        <PricingConfigurator 
          onActionClick={() => onContactClick?.()} 
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
          onSignupClick={onContactClick}
          onContactClick={onContactClick}
        />
      </main>
    </>
  );
}
