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
    <section id="pricing" className="py-48 bg-bg-primary relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-8 tracking-tight">
            Une offre adaptée à votre <span className="text-accent-primary">niveau de besoin.</span>
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-[700px] mx-auto leading-relaxed">
            CloudNaaba s’adapte à la maturité de votre projet, du test à l’exploitation critique.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-6 mb-24">
          <span className={`text-sm font-bold uppercase tracking-widest transition-colors ${!isYearly ? 'text-text-primary' : 'text-text-secondary'}`}>Mensuel</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className="w-16 h-8 rounded-full bg-white/5 border border-border-subtle p-1 relative transition-all hover:border-accent-primary/50 group"
          >
            <motion.div 
              animate={{ x: isYearly ? 32 : 0 }}
              className="w-6 h-6 rounded-full bg-accent-primary shadow-[0_0_15px_rgba(124,58,237,0.5)] group-hover:scale-110 transition-transform"
            />
          </button>
          <span className={`text-sm font-bold uppercase tracking-widest transition-colors ${isYearly ? 'text-text-primary' : 'text-text-secondary'}`}>
            Annuel <span className="text-accent-primary ml-2 text-xs font-black">ÉCONOMISEZ 20%</span>
          </span>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-10 premium-card transition-all duration-500 group ${
                plan.highlight 
                  ? 'border-accent-primary/50 lg:scale-105 z-10 shadow-[0_0_60px_-15px_rgba(124,58,237,0.2)]' 
                  : 'hover:border-white/10'
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] z-20 ${
                  plan.highlight ? 'bg-accent-primary text-white' : 'bg-white/10 text-white/60'
                }`}>
                  {plan.badge}
                </div>
              )}

              {plan.highlight && (
                <motion.div 
                  className="absolute inset-0 rounded-[18px] border-2 border-accent-primary/30 pointer-events-none z-10"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              )}

              <div className="mb-10 relative z-10">
                <h3 className={`text-2xl font-bold mb-4 tracking-tight ${plan.highlight ? 'text-accent-primary' : 'text-text-primary'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={isYearly ? 'yearly' : 'monthly'}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-4xl md:text-5xl font-bold text-text-primary tracking-tighter"
                    >
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </motion.span>
                  </AnimatePresence>
                  {plan.name !== "Entreprise" && plan.name !== "Freestyle" && (
                    <span className="text-text-secondary text-sm font-medium">/ mois</span>
                  )}
                </div>
                <p className="text-lg text-text-secondary leading-relaxed min-h-[60px] font-medium">
                  {plan.description}
                </p>
              </div>

              <div className="flex-1 mb-12 relative z-10">
                <ul className="space-y-5">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-base text-text-secondary group-hover:text-text-primary transition-colors">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlight ? 'bg-accent-primary/10 text-accent-primary' : 'bg-white/5 text-text-secondary/40'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 tracking-tight relative z-10 ${
                plan.highlight 
                  ? 'bg-accent-primary text-white hover:bg-accent-primary/90 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]' 
                  : 'bg-white/5 text-text-primary hover:bg-white/10 border border-white/10'
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
          className="mt-32 text-center"
        >
          <p className="text-text-secondary/60 text-xl font-medium leading-relaxed">
            Choisissez un cadre adapté aujourd’hui, sans bloquer votre évolution demain.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
