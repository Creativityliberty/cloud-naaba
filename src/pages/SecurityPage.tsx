import React, { useEffect } from 'react';
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
import { useNavigate } from 'react-router-dom';

export default function SecurityPage({ 
  onExpertClick,
  onProtectionsClick,
}: { 
  onExpertClick: () => void;
  onProtectionsClick: () => void;
}) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
        <SecurityFinalCTA onPricingClick={() => navigate('/tarifs')} onExpertClick={onExpertClick} />
      </main>
    </>
  );
}
