import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Freestyle",
    description: "Pour expérimenter, tester ou démarrer simplement.",
    monthlyPrice: "0€",
    yearlyPrice: "0€",
    features: ["Mise en ligne simple", "Cadre de base", "Idéal pour test"],
    cta: "Commencer",
    highlight: false,
  },
  {
    name: "Starter",
    description: "Pour les premiers projets qui ont besoin d’un déploiement propre.",
    monthlyPrice: "29€",
    yearlyPrice: "24€",
    features: ["Déploiement structuré", "Base de sécurité", "Mise en ligne fiable"],
    cta: "Commencer",
    highlight: false,
  },
  {
    name: "Standard",
    description: "Pour les PME et services en production.",
    monthlyPrice: "99€",
    yearlyPrice: "79€",
    features: ["Exploitation stable", "Supervision", "Sécurité renforcée", "Cadre évolutif"],
    cta: "Choisir Standard",
    highlight: true,
    badge: "Recommandé",
  },
  {
    name: "Entreprise",
    description: "Pour les structures avec exigences élevées.",
    monthlyPrice: "Sur devis",
    yearlyPrice: "Sur devis",
    features: ["Gouvernance", "Personnalisation", "Accompagnement", "Niveau avancé de contrôle"],
    cta: "Parler à un expert",
    highlight: false,
    badge: "Sur mesure",
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Une offre adaptée à votre <span className="text-violet-400">niveau de besoin.</span>
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-[700px] mx-auto">
            CloudNaaba s’adapte à la maturité de votre projet, du test à l’exploitation critique.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-white' : 'text-text-secondary'}`}>Mensuel</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className="w-14 h-7 rounded-full bg-white/5 border border-white/10 p-1 relative transition-colors hover:border-violet-500/50"
          >
            <motion.div 
              animate={{ x: isYearly ? 28 : 0 }}
              className="w-5 h-5 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]"
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-white' : 'text-text-secondary'}`}>
            Annuel <span className="text-violet-400 ml-1 text-xs font-bold">-20%</span>
          </span>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-2xl transition-all duration-500 group ${
                plan.highlight 
                  ? 'bg-white/[0.04] border-2 border-violet-500/50 scale-105 z-10 shadow-[0_0_40px_-10px_rgba(139,92,246,0.2)]' 
                  : 'bg-white/[0.02] border border-white/5 hover:border-white/10'
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                  plan.highlight ? 'bg-violet-500 text-white' : 'bg-white/10 text-white/60'
                }`}>
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-3 ${plan.highlight ? 'text-violet-400' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={isYearly ? 'yearly' : 'monthly'}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-3xl font-bold text-white"
                    >
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </motion.span>
                  </AnimatePresence>
                  {plan.name !== "Entreprise" && plan.name !== "Freestyle" && (
                    <span className="text-text-secondary text-xs">/ mois</span>
                  )}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed min-h-[48px]">
                  {plan.description}
                </p>
              </div>

              <div className="flex-1 mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-sm text-white/70">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-violet-400' : 'text-white/30'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-violet-500 text-white hover:bg-violet-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]' 
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Final Trust Line */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-text-secondary/60 text-sm md:text-base font-medium">
            Choisissez un cadre adapté aujourd’hui, sans bloquer votre évolution demain.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
