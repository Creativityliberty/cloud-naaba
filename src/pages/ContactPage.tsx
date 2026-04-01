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
  onLoginClick?: () => void;
  onSignupClick?: () => void;
}

export default function ContactPage({
  onLogoClick,
  onMarketplaceClick,
  onHybridClick,
  onPricingClick,
  onSecurityClick,
  onLoginClick,
  onSignupClick
}: ContactPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToLive = () => {
    window.open('https://discord.com', '_blank');
  };

  const handleRouteSelect = (type: string) => {
    handleScrollToForm();
    
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
        <ContactHero 
          onScrollToForm={handleScrollToForm} 
          onScrollToLive={handleScrollToLive} 
        />
        
        <ContactRouting onRouteSelect={handleRouteSelect} />

        <ContactHumanProof />

        <ContactUseCases />

        <ContactCommunity />

        <ContactFormSection />

        <ContactFAQ />

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
      />
    </div>
  );
}
