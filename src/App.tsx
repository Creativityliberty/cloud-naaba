import React, { useState } from 'react';
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
import PricingHome from './components/PricingHome';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import AiMarketplace from './pages/AiMarketplace';
import HybridInfra from './pages/HybridInfra';
import PricingPage from './pages/PricingPage';
import GlobalModal, { ModalType } from './components/GlobalModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'ai' | 'hybrid' | 'pricing'>('home');
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (type: ModalType) => setActiveModal(type);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen text-text-primary selection:bg-accent-primary/30">
      {/* Global Background System */}
      <div className="bg-layered">
        <div className="bg-radial-glow" />
        <div className="bg-noise" />
      </div>

      <GlobalModal type={activeModal} onClose={closeModal} />

      {currentPage === 'home' ? (
        <>
          <Header 
            onMarketplaceClick={() => setCurrentPage('ai')} 
            onLogoClick={() => setCurrentPage('home')} 
            onHybridClick={() => setCurrentPage('hybrid')}
            onPricingClick={() => setCurrentPage('pricing')}
            onLoginClick={() => openModal('login')}
            onSignupClick={() => openModal('signup')}
          />
          <main>
            <Hero onPrimaryClick={() => openModal('signup')} onSecondaryClick={() => openModal('demo')} />
            <LogoWall />
            <ProductPreview />
            <ProblemSection />
            <HiddenCosts />
            <SolutionSection onActionClick={() => setCurrentPage('hybrid')} />
            <HowItWorks onActionClick={() => openModal('signup')} />
            <TargetAudience />
            <Features onActionClick={() => openModal('signup')} />
            <SecuritySection />
            <WhyNotContinue />
            <Compatibility />
            <ProofSection />
            <FAQ />
            <PricingHome 
              onPricingClick={() => setCurrentPage('pricing')}
            />
            <FinalCTA onPrimaryClick={() => openModal('signup')} onSecondaryClick={() => openModal('demo')} />
          </main>
          <Footer 
            onLogoClick={() => setCurrentPage('home')} 
            onMarketplaceClick={() => setCurrentPage('ai')} 
            onHybridClick={() => setCurrentPage('hybrid')} 
            onPricingClick={() => setCurrentPage('pricing')}
            onSignupClick={() => openModal('signup')}
          />
        </>
      ) : currentPage === 'ai' ? (
        <AiMarketplace 
          onLogoClick={() => setCurrentPage('home')} 
          onMarketplaceClick={() => setCurrentPage('ai')}
          onHybridClick={() => setCurrentPage('hybrid')}
          onPricingClick={() => setCurrentPage('pricing')}
          onDeployClick={() => openModal('deploy')}
          onPublishClick={() => openModal('publish')}
          onSignupClick={() => openModal('signup')}
          onLoginClick={() => openModal('login')}
        />
      ) : currentPage === 'hybrid' ? (
        <HybridInfra 
          onLogoClick={() => setCurrentPage('home')} 
          onMarketplaceClick={() => setCurrentPage('ai')}
          onHybridClick={() => setCurrentPage('hybrid')}
          onPricingClick={() => setCurrentPage('pricing')}
          onAgentClick={() => openModal('agent')}
          onContactClick={() => openModal('migration')}
          onSignupClick={() => openModal('signup')}
          onLoginClick={() => openModal('login')}
          onConnectClick={() => openModal('agent')}
          onDocClick={() => openModal('demo')}
        />
      ) : (
        <PricingPage 
          onLogoClick={() => setCurrentPage('home')} 
          onMarketplaceClick={() => setCurrentPage('ai')}
          onHybridClick={() => setCurrentPage('hybrid')}
          onSignupClick={() => openModal('signup')}
          onLoginClick={() => openModal('login')}
          onContactClick={() => openModal('contact')}
          onDemoClick={() => openModal('demo')}
        />
      )}
    </div>
  );
}
