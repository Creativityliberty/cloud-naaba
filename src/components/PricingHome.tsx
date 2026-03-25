import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';

interface PricingHomeProps {
  onPricingClick?: () => void;
}

export default function PricingHome({ onPricingClick }: PricingHomeProps) {
  const plans = [
    {
      name: "Découverte",
      price: "4 000",
      description: "Pour tester ou lancer un premier projet",
      highlight: false
    },
    {
      name: "Pro",
      price: "7 500",
      description: "Pour applications actives et PME",
      highlight: true,
      badge: "Recommandé"
    },
    {
      name: "Business",
      price: "25 000",
      description: "Pour projets critiques",
      highlight: false
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42 }}
            className="text-3xl md:text-4xl font-bold text-text-primary mb-4 tracking-tight"
          >
            Une tarification simple, pensée pour évoluer avec vous
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, delay: 0.1 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto font-medium"
          >
            Commencez avec une formule adaptée à votre besoin, puis ajustez à mesure que votre activité grandit.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`relative p-8 rounded-[24px] border transition-all duration-300 group hover:-translate-y-1 ${
                plan.highlight 
                  ? 'bg-accent-primary/[0.03] border-accent-primary/30 shadow-lg shadow-accent-primary/5' 
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent-primary text-[10px] font-black text-white uppercase tracking-widest">
                  {plan.badge}
                </div>
              )}
              
              <h3 className="text-xl font-bold text-text-primary mb-2">{plan.name}</h3>
              
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-black text-text-primary tracking-tighter">{plan.price}</span>
                <span className="text-text-secondary text-xs font-bold uppercase tracking-widest">F CFA / mois</span>
              </div>

              <p className="text-text-secondary text-sm font-medium leading-relaxed">
                {plan.description}
              </p>

              {plan.highlight && (
                <div className="absolute inset-0 bg-accent-primary/5 blur-[40px] rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={onPricingClick}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-bg-primary font-bold text-lg hover:bg-white/90 transition-all duration-300 group"
          >
            Voir les tarifs
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs font-bold text-text-secondary/60 uppercase tracking-[0.2em]">
            <span>Sans engagement</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Sans frais cachés</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Évolutif</span>
          </div>
        </div>
      </div>
    </section>
  );
}
