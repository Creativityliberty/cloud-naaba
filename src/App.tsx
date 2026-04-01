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
import GlobalModal, { ModalType } from './components/GlobalModal';
import { Chatbot, ChatbotTrigger } from './components/Chatbot';

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

      <Routes>
        <Route path="/" element={
          <>
            <Header 
              onMarketplaceClick={() => navigateTo('/marketplace')} 
              onLogoClick={() => navigateTo('/')} 
              onHybridClick={() => navigateTo('/infrastructure-hybride')}
              onPricingClick={() => navigateTo('/tarifs')}
              onSecurityClick={() => navigateTo('/securite')}
              onContactClick={() => navigateTo('/contact')}
              onLoginClick={() => openModal('login')}
              onSignupClick={() => openModal('signup')}
            />
            <main>
              <Hero 
                onPrimaryClick={() => openModal('signup')} 
                onSecondaryClick={() => openModal('demo')} 
                onPricingClick={() => navigateTo('/tarifs')}
              />
              <LogoWall />
              <ProductPreview />
              <ProblemSection />
              <HiddenCosts />
              <SolutionSection onActionClick={() => openModal('signup')} />
              <HowItWorks onActionClick={() => openModal('signup')} />
              <TargetAudience />
              <Features onActionClick={() => openModal('signup')} />
              <SecuritySection onLearnMoreClick={() => navigateTo('/securite')} />
              <WhyNotContinue />
              <Compatibility />
              <ProofSection />
              <FAQ />
              <FinalCTA onPrimaryClick={() => openModal('signup')} onSecondaryClick={() => openModal('demo')} />
            </main>
            <Footer 
              onLogoClick={() => navigateTo('/')} 
              onMarketplaceClick={() => navigateTo('/marketplace')} 
              onHybridClick={() => navigateTo('/infrastructure-hybride')} 
              onPricingClick={() => navigateTo('/tarifs')}
              onSecurityClick={() => navigateTo('/securite')}
              onContactClick={() => navigateTo('/contact')}
              onSignupClick={() => openModal('signup')}
            />
          </>
        } />
        <Route path="/marketplace" element={
          <AiMarketplace 
            onLogoClick={() => navigateTo('/')} 
            onMarketplaceClick={() => navigateTo('/marketplace')}
            onHybridClick={() => navigateTo('/infrastructure-hybride')}
            onPricingClick={() => navigateTo('/tarifs')}
            onDeployClick={() => openModal('deploy')}
            onPublishClick={() => openModal('publish')}
            onSignupClick={() => openModal('signup')}
            onLoginClick={() => openModal('login')}
            onSecurityClick={() => navigateTo('/securite')}
          />
        } />
        <Route path="/infrastructure-hybride" element={
          <HybridInfra 
            onLogoClick={() => navigateTo('/')} 
            onMarketplaceClick={() => navigateTo('/marketplace')}
            onHybridClick={() => navigateTo('/infrastructure-hybride')}
            onPricingClick={() => navigateTo('/tarifs')}
            onAgentClick={() => openModal('agent')}
            onContactClick={() => openModal('migration')}
            onSignupClick={() => openModal('signup')}
            onLoginClick={() => openModal('login')}
            onConnectClick={() => openModal('agent')}
            onDocClick={() => openModal('demo')}
            onSecurityClick={() => navigateTo('/securite')}
            // We use standard named prop here because it clashes. Assuming it doesn't clash.
          />
        } />
        <Route path="/tarifs" element={
          <PricingPage 
            onLogoClick={() => navigateTo('/')} 
            onMarketplaceClick={() => navigateTo('/marketplace')}
            onHybridClick={() => navigateTo('/infrastructure-hybride')}
            onSecurityClick={() => navigateTo('/securite')}
            onSignupClick={() => openModal('signup')}
            onLoginClick={() => openModal('login')}
            onContactClick={() => openModal('contact')}
            onDemoClick={() => openModal('demo')}
          />
        } />
        <Route path="/securite" element={
          <SecurityPage 
            onLogoClick={() => navigateTo('/')} 
            onMarketplaceClick={() => navigateTo('/marketplace')}
            onHybridClick={() => navigateTo('/infrastructure-hybride')}
            onPricingClick={() => navigateTo('/tarifs')}
            onSignupClick={() => openModal('signup')}
            onLoginClick={() => openModal('login')}
            onExpertClick={() => openModal('contact')}
            onProtectionsClick={() => {
              // Same as before
            }}
          />
        } />
        <Route path="/contact" element={
          <ContactPage 
            onLogoClick={() => navigateTo('/')} 
            onMarketplaceClick={() => navigateTo('/marketplace')}
            onHybridClick={() => navigateTo('/infrastructure-hybride')}
            onPricingClick={() => navigateTo('/tarifs')}
            onSecurityClick={() => navigateTo('/securite')}
            onSignupClick={() => openModal('signup')}
            onLoginClick={() => openModal('login')}
          />
        } />
      </Routes>
    </div>
  );
}
