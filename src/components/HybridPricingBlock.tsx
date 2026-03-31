import React from 'react';
import { motion } from 'motion/react';
import { Server, Network, Layout, ArrowRight, Check } from 'lucide-react';

export default function HybridPricingBlock({ onLearnMoreClick }: { onLearnMoreClick?: () => void }) {
  const benefits = [
    "Connexion de serveurs cloud ou locaux",
    "Vue centralisée",
    "Gestion simplifiée",
    "Pas de migration obligatoire"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-6"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-primary">Compatibilité</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold font-display tracking-tight leading-[1.1] text-gradient"
          >
            Conservez votre infrastructure actuelle.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, delay: 0.1 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto font-medium mt-6"
          >
            Gardez vos serveurs actuels et centralisez leur gestion avec CloudNaaba, sans migration forcée.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.42, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-[24px] bg-white/[0.02] border border-white/[0.08] hover:border-accent-primary/30 transition-all duration-500 group relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-accent-primary/10 transition-colors duration-500" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              {/* Left Side: Pricing & Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-text-secondary tracking-widest uppercase mb-6">
                  <Server className="w-3.5 h-3.5" />
                  Mode hybride
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-col">
                    <span className="text-4xl md:text-5xl font-black text-text-primary tracking-tighter">
                      10 000 F CFA
                    </span>
                    <span className="text-text-secondary text-sm font-bold mt-2 uppercase tracking-widest">
                      / serveur / mois
                    </span>
                  </div>
                </div>

                <p className="text-text-secondary leading-relaxed font-medium mb-8">
                  Centralisez la gestion de vos serveurs existants dans une interface unique.
                </p>

                <button 
                  onClick={onLearnMoreClick}
                  className="inline-flex items-center gap-2 text-accent-primary font-bold hover:text-white transition-colors group/btn"
                >
                  En savoir plus sur l'hybride
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right Side: Benefits */}
              <div className="bg-white/[0.02] rounded-2xl p-6 border border-white/[0.04]">
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-text-secondary group-hover:text-text-primary transition-colors">
                      <div className="w-5 h-5 rounded-full bg-accent-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-accent-primary">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-[15px] font-medium leading-tight">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-text-secondary/60 text-sm font-medium">
              Commencez avec votre existant, puis évoluez à votre rythme.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
