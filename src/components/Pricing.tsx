import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Découverte",
    description: "Pour tester, prototyper ou lancer un premier service sans surinvestir.",
    price: "4 000 F CFA",
    features: [
      "Puissance standard — 0.5 vCPU",
      "Adapté aux petits projets",
      "Mises à jour illimitées"
    ],
    cta: "Choisir Découverte",
    highlight: false,
  },
  {
    name: "Pro",
    description: "Pour les startups, PME et services en production.",
    price: "7 500 F CFA",
    features: [
      "Haute performance — 1 vCPU",
      "2 Go RAM",
      "Gestion des pics de trafic",
      "Support prioritaire"
    ],
    cta: "Choisir Pro",
    highlight: true,
    badge: "Recommandé",
  },
  {
    name: "Business",
    description: "Pour les applications critiques et les services sensibles.",
    price: "25 000 F CFA",
    features: [
      "4 vCPU",
      "8 Go RAM",
      "SLA 99.99%",
      "Adapté aux projets critiques"
    ],
    cta: "Contacter l’équipe",
    highlight: false,
  }
];

export default function Pricing({ onPlanSelect }: { onPlanSelect?: (plan: string) => void }) {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42 }}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight"
          >
            Choisissez votre <span className="text-accent-primary">formule Cloud</span>
          </motion.h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: index * 0.08 }}
              className={`relative flex flex-col p-10 rounded-[24px] transition-all duration-500 group ${
                plan.highlight 
                  ? 'bg-white/[0.04] border-2 border-accent-primary scale-[1.02] z-10 shadow-[0_0_40px_-10px_rgba(124,58,237,0.3)]' 
                  : 'bg-white/[0.02] border border-white/[0.06] hover:border-white/20'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-accent-primary text-white text-[10px] font-black uppercase tracking-[0.2em] z-20 shadow-lg shadow-accent-primary/20">
                  {plan.badge}
                </div>
              )}

              {plan.highlight && (
                <motion.div 
                  className="absolute inset-0 rounded-[22px] bg-accent-primary/5 pointer-events-none z-0"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              )}

              <div className="mb-8 relative z-10">
                <h3 className="text-2xl font-bold text-text-primary mb-3 tracking-tight">
                  {plan.name}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-8 font-medium">
                  {plan.description}
                </p>
                <div className="flex flex-col mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-text-primary tracking-tighter">
                    {plan.price}
                  </span>
                  <span className="text-text-secondary text-sm font-bold mt-1 uppercase tracking-widest">
                    / mois / application
                  </span>
                </div>
              </div>

              <div className="flex-1 mb-10 relative z-10">
                <ul className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-text-secondary group-hover:text-text-primary transition-colors">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlight ? 'bg-accent-primary/10 text-accent-primary' : 'bg-white/5 text-text-secondary/40'}`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[15px] font-medium leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => onPlanSelect?.(plan.name)}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 tracking-tight relative z-10 hover:scale-[1.02] active:scale-[0.98] ${
                plan.highlight 
                  ? 'bg-accent-primary text-white hover:bg-accent-primary/90 shadow-lg shadow-accent-primary/20' 
                  : 'bg-white/5 text-text-primary hover:bg-white/10 border border-white/10'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary/60 text-sm font-medium">
            Vous pouvez changer de plan à tout moment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
