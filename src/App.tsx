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

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-violet-500/30">
      <Header />
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
      
      {/* Subtle noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
