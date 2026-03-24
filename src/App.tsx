import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import HiddenCosts from './components/HiddenCosts';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import TargetAudience from './components/TargetAudience';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-violet-500/30">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <HiddenCosts />
        <SolutionSection />
        <HowItWorks />
        <TargetAudience />
      </main>
      
      {/* Subtle noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
