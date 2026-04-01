import React, { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactRouting from '../components/contact/ContactRouting';
import ContactHumanProof from '../components/contact/ContactHumanProof';
import ContactUseCases from '../components/contact/ContactUseCases';
import ContactCommunity from '../components/contact/ContactCommunity';
import ContactFormSection from '../components/contact/ContactFormSection';
import ContactFAQ from '../components/contact/ContactFAQ';
import ContactFinalCTA from '../components/contact/ContactFinalCTA';

export default function ContactPage() {
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
    <>
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
    </>
  );
}
