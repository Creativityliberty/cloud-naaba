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
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import AiMarketplace from './pages/AiMarketplace';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'ai'>('home');

  return (
    <div className="min-h-screen text-text-primary selection:bg-accent-primary/30">
      {/* Global Background System */}
      <div className="bg-layered">
        <div className="bg-radial-glow" />
        <div className="bg-noise" />
      </div>

      {currentPage === 'home' ? (
        <>
          <Header onMarketplaceClick={() => setCurrentPage('ai')} onLogoClick={() => setCurrentPage('home')} />
          <main>
            <Hero />
            <LogoWall />
            <ProductPreview />
            <ProblemSection />
            <HiddenCosts />
            <SolutionSection />
            <HowItWorks />
            <TargetAudience />
            <Features />
            <SecuritySection />
            <WhyNotContinue />
            <Compatibility />
            <ProofSection />
            <FAQ />
            <Pricing />
            <FinalCTA />
          </main>
          <Footer />
        </>
      ) : (
        <AiMarketplace onLogoClick={() => setCurrentPage('home')} />
      )}
    </div>
  );
}
