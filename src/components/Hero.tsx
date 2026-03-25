import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import GlobeVisual from './GlobeVisual';

export default function Hero({ onPrimaryClick, onSecondaryClick }: { onPrimaryClick?: () => void; onSecondaryClick?: () => void }) {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative pt-[140px] pb-[110px] overflow-hidden"
    >
      {/* Glow follow cursor (hero only) */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-30 opacity-20"
        animate={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124, 58, 237, 0.1), transparent 80%)`
        }}
      />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center px-3 py-1 rounded-full bg-accent-soft border border-accent-primary/20 mb-6"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-accent-primary">
                Plateforme d’exploitation applicative
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] tracking-tight mb-8 text-gradient"
            >
              Déployez vos applications <br className="hidden md:block" />
              sans gérer l’infrastructure.
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-text-secondary max-w-[620px] leading-relaxed mb-6"
            >
              CloudNaaba permet aux PME et aux organisations exigeantes de déployer sites, plateformes et applications de façon simple, sécurisée et maîtrisée — sans dépendre d’une équipe DevOps complexe.
            </motion.p>

            {/* Reinforcement */}
            <motion.p 
              variants={itemVariants}
              className="text-sm font-medium text-text-secondary/60 mb-10"
            >
              Lancez plus vite. Réduisez le risque technique. Gardez le contrôle sur vos données et vos services.
            </motion.p>

            {/* CTA Stack */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-5 mb-10"
            >
              <div className="relative group">
                {/* Subtle & Controlled Glow Effect */}
                <div className="absolute -inset-1 bg-accent-primary/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute -inset-4 bg-accent-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                <button 
                  onClick={onPrimaryClick}
                  className="relative btn-primary px-8 py-4 text-white font-bold flex items-center gap-2"
                >
                  Commencer maintenant
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <button 
                onClick={() => {
                  const pricing = document.getElementById('pricing');
                  if (pricing) pricing.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary px-8 py-4 text-text-primary font-bold"
              >
                Voir les offres
              </button>

              <button 
                onClick={onSecondaryClick}
                className="hidden xl:flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors ml-2"
              >
                <Play className="w-4 h-4 fill-current" />
                Demander une démo
              </button>
            </motion.div>

            {/* Trust Chips */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6"
            >
              <TrustChip text="Aucune carte bancaire requise" />
              <TrustChip text="Mise en route simple" />
              <TrustChip text="Accompagnement possible" />
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <GlobeVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function TrustChip({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
      <CheckCircle2 className="w-4 h-4 text-violet-500/60" />
      {text}
    </div>
  );
}
