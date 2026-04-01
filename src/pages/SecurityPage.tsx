import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SecurityHero from '../components/security/SecurityHero';
import WhySecurityMatters from '../components/security/WhySecurityMatters';
import SecurityRisks from '../components/security/SecurityRisks';
import BuiltInSecurity from '../components/security/BuiltInSecurity';
import NetworkProtection from '../components/security/NetworkProtection';
import SecureCommunication from '../components/security/SecureCommunication';
import EnvironmentIsolation from '../components/security/EnvironmentIsolation';
import OperationalSecurity from '../components/security/OperationalSecurity';
import BusinessImpact from '../components/security/BusinessImpact';
import TargetAudience from '../components/security/TargetAudience';
import AdvancedSecurity from '../components/security/AdvancedSecurity';
import SecurityFinalCTA from '../components/security/SecurityFinalCTA';

export default function SecurityPage({ 
  onLogoClick, 
  onMarketplaceClick, 
  onHybridClick,
  onPricingClick,
  onExpertClick,
  onProtectionsClick
}: { 
  onLogoClick: () => void; 
  onMarketplaceClick: () => void;
  onHybridClick: () => void;
  onPricingClick: () => void;
  onExpertClick: () => void;
  onProtectionsClick: () => void;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-text-primary">
      <Header 
        onLogoClick={onLogoClick}
        onMarketplaceClick={onMarketplaceClick}
        onHybridClick={onHybridClick}
        onPricingClick={onPricingClick}
      />
      
      <main>
        <SecurityHero 
          onProtectionsClick={onProtectionsClick}
          onExpertClick={onExpertClick}
        />
        
        <WhySecurityMatters />
        <SecurityRisks />
        <BuiltInSecurity />
        <NetworkProtection />
        <SecureCommunication />
        <EnvironmentIsolation />
        <OperationalSecurity />
        <BusinessImpact />
        <TargetAudience />
        <AdvancedSecurity onExpertClick={onExpertClick} />
        <SecurityFinalCTA onPricingClick={onPricingClick} onExpertClick={onExpertClick} />
      </main>

      <Footer 
        onLogoClick={onLogoClick}
        onMarketplaceClick={onMarketplaceClick}
        onHybridClick={onHybridClick}
        onPricingClick={onPricingClick}
      />
    </div>
  );
}
