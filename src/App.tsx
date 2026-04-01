import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoWall from './components/LogoWall';
import ProductPreview from './components/ProductPreview';
import ProblemSection from './components/ProblemSection';
import HiddenCosts from './components/HiddenCosts';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import TargetAudience from './components/TargetAudience';
import Features from './components/Features';
import SecuritySection from './components/SecuritySection';
import WhyNotContinue from './components/WhyNotContinue';
import Compatibility from './components/Compatibility';
import ProofSection from './components/ProofSection';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import AiMarketplace from './pages/AiMarketplace';
import HybridInfra from './pages/HybridInfra';
import PricingPage from './pages/PricingPage';
import SecurityPage from './pages/SecurityPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/legal/TermsPage';
import PrivacyPage from './pages/legal/PrivacyPage';
import LegalNoticePage from './pages/legal/LegalNoticePage';
import CompatibilityPage from './pages/CompatibilityPage';
import FAQPage from './pages/FAQPage';
import HelpPage from './pages/HelpPage';
import SupportPage from './pages/SupportPage';
import GlobalModal, { ModalType } from './components/GlobalModal';
import { Chatbot, ChatbotTrigger } from './components/Chatbot';

import { KEYCLOAK_AUTH_URL } from './config/auth';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = (type: ModalType) => setActiveModal(type);
  const closeModal = () => setActiveModal(null);

  const navigateTo = (path: string) => {
    navigate(path);
  };

  const handleAuth = () => {
    window.open(KEYCLOAK_AUTH_URL, '_blank');
  };

  return (
    <div className="min-h-screen text-text-primary selection:bg-accent-primary/30">
      {/* Global Background System */}
      <div className="bg-layered">
        <div className="bg-radial-glow" />
        <div className="bg-noise" />
      </div>

      <ScrollToTop />
      <GlobalModal type={activeModal} onClose={closeModal} />
      <Chatbot isOpen={chatbotOpen} onClose={() => setChatbotOpen(false)} />
      <ChatbotTrigger onClick={() => setChatbotOpen(o => !o)} isOpen={chatbotOpen} />

      <Header 
        onMarketplaceClick={() => navigateTo('/marketplace')} 
        onLogoClick={() => navigateTo('/')} 
        onHybridClick={() => navigateTo('/infrastructure-hybride')}
        onPricingClick={() => navigateTo('/tarifs')}
        onSecurityClick={() => navigateTo('/securite')}
        onContactClick={() => navigateTo('/contact')}
        onLoginClick={handleAuth}
        onSignupClick={handleAuth}
      />

      <Routes>
        <Route path="/" element={
          <main>
            <Hero 
              onPrimaryClick={handleAuth} 
              onSecondaryClick={() => openModal('demo')} 
              onPricingClick={() => navigateTo('/tarifs')}
            />
            <LogoWall />
            <ProductPreview />
            <ProblemSection />
            <HiddenCosts />
            <SolutionSection onActionClick={handleAuth} />
            <HowItWorks onActionClick={handleAuth} />
            <TargetAudience />
            <Features onActionClick={handleAuth} />
            <SecuritySection onLearnMoreClick={() => navigateTo('/securite')} />
            <WhyNotContinue />
            <Compatibility />
            <ProofSection />
            <FAQ />
            <FinalCTA onPrimaryClick={handleAuth} onSecondaryClick={() => openModal('demo')} />
          </main>
        } />
        <Route path="/marketplace" element={
          <AiMarketplace 
            onDeployClick={() => openModal('deploy')}
            onPublishClick={() => openModal('publish')}
            onContactClick={() => navigateTo('/contact')}
          />
        } />
        <Route path="/infrastructure-hybride" element={
          <HybridInfra 
            onAgentClick={() => openModal('agent')}
            onContactClick={() => openModal('migration')}
            onConnectClick={() => openModal('agent')}
            onDocClick={() => openModal('demo')}
          />
        } />
        <Route path="/tarifs" element={
          <PricingPage 
            onContactClick={() => openModal('contact')}
            onDemoClick={() => openModal('demo')}
            onSignupClick={handleAuth}
          />
        } />
        <Route path="/securite" element={
          <SecurityPage 
            onExpertClick={() => openModal('contact')}
            onProtectionsClick={() => {}}
          />
        } />
        <Route path="/contact" element={
          <ContactPage />
        } />
        <Route path="/conditions" element={<TermsPage />} />
        <Route path="/confidentialite" element={<PrivacyPage />} />
        <Route path="/mentions-legales" element={<LegalNoticePage />} />
        <Route path="/compatibilite" element={<CompatibilityPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/aide" element={<HelpPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>

      <Footer 
        onLogoClick={() => navigateTo('/')} 
        onMarketplaceClick={() => navigateTo('/marketplace')} 
        onHybridClick={() => navigateTo('/infrastructure-hybride')} 
        onPricingClick={() => navigateTo('/tarifs')}
        onSecurityClick={() => navigateTo('/securite')}
        onContactClick={() => navigateTo('/contact')}
        onConditionsClick={() => navigateTo('/conditions')}
        onPrivacyClick={() => navigateTo('/confidentialite')}
        onLegalNoticeClick={() => navigateTo('/mentions-legales')}
        onFAQClick={() => navigateTo('/faq')}
        onCompatibilityClick={() => navigateTo('/compatibilite')}
        onHelpClick={() => navigateTo('/aide')}
        onSupportClick={() => navigateTo('/support')}
        onLoginClick={handleAuth}
        onSignupClick={handleAuth}
      />
    </div>
  );
}
