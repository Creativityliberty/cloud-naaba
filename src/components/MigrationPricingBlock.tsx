import React from 'react';
import { motion } from 'motion/react';
import { Search, ArrowRight, Server, User, CheckCircle2 } from 'lucide-react';

export default function MigrationPricingBlock({ onContactClick }: { onContactClick?: () => void }) {
  const benefits = [
    "Audit technique initial",
    "Recommandations claires",
    "Plan de migration progressif",
    "Accompagnement selon votre contexte"
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
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-primary">Accompagnement</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold font-display tracking-tight leading-[1.1] text-gradient"
          >
            Confiez-nous votre transition.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, delay: 0.1 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto font-medium"
          >
            Nous vous accompagnons dans la reprise et la migration de votre infrastructure vers un environnement plus simple et plus maîtrisé.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.42, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-[24px] bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-all duration-500 relative overflow-hidden group">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center relative z-10">
              {/* Left Side: Content (Takes up 3 columns) */}
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-text-secondary tracking-widest uppercase mb-6">
                  <User className="w-3.5 h-3.5" />
                  Migration accompagnée
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-4 text-gradient">
                  Audit gratuit, <br />
                  sans engagement.
                </h3>

                <p className="text-text-secondary leading-relaxed font-medium mb-8">
                  Confiez-nous la reprise de votre infrastructure existante. Nous analysons votre environnement, identifions les points critiques et vous accompagnons dans une transition progressive.
                </p>

                <button 
                  onClick={onContactClick}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-bg-primary font-bold text-lg hover:bg-white/90 transition-all duration-300 group/btn"
                >
                  Démarrer la migration
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right Side: Benefits (Takes up 2 columns) */}
              <div className="lg:col-span-2">
                <div className="bg-white/[0.02] rounded-2xl p-6 border border-white/[0.04]">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                    <Search className="w-5 h-5 text-text-secondary" />
                    <span className="font-bold text-text-primary">Ce qui est inclus</span>
                  </div>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 text-text-secondary group-hover:text-text-primary transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-text-secondary/50 flex-shrink-0 mt-0.5" />
                        <span className="text-[15px] font-medium leading-tight">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-text-secondary/60 text-sm font-medium flex items-center justify-center gap-2">
              <Server className="w-4 h-4" />
              Commencez par comprendre votre infrastructure avant de la transformer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
