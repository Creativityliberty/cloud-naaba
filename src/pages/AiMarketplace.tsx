import React, { useEffect } from 'react';
import AiHero from '../components/ai/AiHero';
import AiProblem from '../components/ai/AiProblem';
import AiCosts from '../components/ai/AiCosts';
import AiSolution from '../components/ai/AiSolution';
import AiHowItWorks from '../components/ai/AiHowItWorks';
import AiUseCases from '../components/ai/AiUseCases';
import AiComparison from '../components/ai/AiComparison';
import AiStackBuilder from '../components/ai/AiStackBuilder';
import AiEcosystem from '../components/ai/AiEcosystem';
import AiSecurity from '../components/ai/AiSecurity';
import AiTarget from '../components/ai/AiTarget';
import AiDifference from '../components/ai/AiDifference';
import AiFAQ from '../components/ai/AiFAQ';
import AiFinalCTA from '../components/ai/AiFinalCTA';

export default function AiMarketplace({ 
  onDeployClick, 
  onPublishClick,
  onContactClick
}: { 
  onDeployClick?: () => void;
  onPublishClick?: () => void;
  onContactClick?: () => void;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <AiHero onPrimaryClick={onDeployClick} onSecondaryClick={onPublishClick} />
        <AiProblem />
        <AiCosts />
        <AiSolution onActionClick={onContactClick} />
        <AiHowItWorks onActionClick={onContactClick} />
        <AiUseCases />
        <AiComparison />
        <AiStackBuilder onActionClick={onContactClick} />
        <AiEcosystem />
        <AiSecurity />
        <AiTarget />
        <AiDifference />
        <AiFAQ />
        <AiFinalCTA onPrimaryClick={onContactClick} onSecondaryClick={onPublishClick} />
      </main>
    </>
  );
}
