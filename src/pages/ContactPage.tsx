import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import ContactHero from '../components/contact/ContactHero';
import ContactRouting from '../components/contact/ContactRouting';
import ContactHumanProof from '../components/contact/ContactHumanProof';
import ContactUseCases from '../components/contact/ContactUseCases';
import ContactCommunity from '../components/contact/ContactCommunity';
import ContactFormSection from '../components/contact/ContactFormSection';
import ContactFAQ from '../components/contact/ContactFAQ';
import ContactFinalCTA from '../components/contact/ContactFinalCTA';

interface ContactPageProps {
  onLogoClick: () => void;
  onMarketplaceClick: () => void;
  onHybridClick: () => void;
  onPricingClick: () => void;
  onSecurityClick: () => void;
  onSignupClick: () => void;
  onLoginClick: () => void;
}

export default function ContactPage({
  onLogoClick,
  onMarketplaceClick,
  onHybridClick,
  onPricingClick,
  onSecurityClick,
  onSignupClick,
  onLoginClick
}: ContactPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToLive = () => {
    // Scroll a bit above for community context or redirect.
    // Assuming we want to scroll to community (Section 5)
    // For now we can open the discord URL or scroll to form.
    window.open('https://discord.com', '_blank');
  };

  const handleRouteSelect = (type: string) => {
    // Here we can set the select element value by reference or state,
    // but for simplicity, we just scroll to form.
    handleScrollToForm();
    
    // Quick timeout to try to pre-select the dropdown if it is rendered
    setTimeout(() => {
      const selectEl = document.querySelector('select') as HTMLSelectElement;
      if (selectEl) {
        if (type === 'commercial') selectEl.value = 'partnership';
        if (type === 'support') selectEl.value = 'support';
        if (type === 'migration') selectEl.value = 'migration';
        if (type === 'securite') selectEl.value = 'security';
      }
    }, 800);
  };

  return (
    <div className="min-h-screen text-text-primary bg-bg-primary font-body selection:bg-accent-primary/30">
      
      {/* Global Background Particles Concept from Neuralyn */}
      <div className="bg-layered fixed inset-0 z-0 pointer-events-none opacity-50">
        <div className="bg-radial-glow opacity-30" />
        <div className="bg-noise opacity-50" />
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
      
      <main className="relative z-10 w-full">
        {/* Section 1: Hero */}
        <ContactHero 
          onScrollToForm={handleScrollToForm} 
          onScrollToLive={handleScrollToLive} 
        />
        
        {/* Section 2: Routing / Comment pouvons-nous vous aider ? */}
        <ContactRouting onRouteSelect={handleRouteSelect} />

        {/* Section 3: Human Proof / The Team */}
        <ContactHumanProof />

        {/* Section 4: Use Cases */}
        <ContactUseCases />

        {/* Section 5: Community & Live Support */}
        <ContactCommunity />

        {/* Sections 6, 7 & 8: Form & Urgency & Coordonnées */}
        <ContactFormSection />

        {/* Section 10: FAQ */}
        <ContactFAQ />

        {/* Section 11: Final CTA */}
        <ContactFinalCTA 
          onScrollToForm={handleScrollToForm}
          onScrollToLive={handleScrollToLive}
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
