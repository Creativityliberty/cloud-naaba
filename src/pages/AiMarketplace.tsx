import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AiHero from '../components/ai/AiHero';
import AiProblem from '../components/ai/AiProblem';
import AiCosts from '../components/ai/AiCosts';
import AiSolution from '../components/ai/AiSolution';
import AiHowItWorks from '../components/ai/AiHowItWorks';
import AiUseCases from '../components/ai/AiUseCases';
import AiComparison from '../components/ai/AiComparison';
import AiStackBuilder from '../components/ai/AiStackBuilder';
import AiEcosystem from '../components/ai/AiEcosystem';
import AiSecurity from '../components/ai/AiSecurity';
import AiTarget from '../components/ai/AiTarget';
import AiDifference from '../components/ai/AiDifference';
import AiFAQ from '../components/ai/AiFAQ';
import AiFinalCTA from '../components/ai/AiFinalCTA';

export default function AiMarketplace({ 
  onLogoClick, 
  onMarketplaceClick, 
  onHybridClick,
  onPricingClick,
  onDeployClick,
  onPublishClick,
  onSecurityClick
}: { 
  onLogoClick?: () => void;
  onMarketplaceClick?: () => void;
  onHybridClick?: () => void;
  onPricingClick?: () => void;
  onDeployClick?: () => void;
  onPublishClick?: () => void;
  onSecurityClick?: () => void;
}) {
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
      />
      <main>
        <AiHero onPrimaryClick={onDeployClick} onSecondaryClick={onPublishClick} />
        <AiProblem />
        <AiCosts />
        <AiSolution onActionClick={() => window.location.href = '/contact'} />
        <AiHowItWorks onActionClick={() => window.location.href = '/contact'} />
        <AiUseCases />
        <AiComparison />
        <AiStackBuilder onActionClick={() => window.location.href = '/contact'} />
        <AiEcosystem />
        <AiSecurity />
        <AiTarget />
        <AiDifference />
        <AiFAQ />
        <AiFinalCTA onPrimaryClick={() => window.location.href = '/contact'} onSecondaryClick={onPublishClick} />
      </main>
      <Footer 
        onLogoClick={onLogoClick} 
        onMarketplaceClick={onMarketplaceClick}
        onHybridClick={onHybridClick}
        onPricingClick={onPricingClick}
        onSecurityClick={onSecurityClick}
      />
    </div>
  );
}
