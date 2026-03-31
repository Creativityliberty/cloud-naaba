import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Check } from 'lucide-react';

export default function PricingFinalCTA({ 
  onSignupClick, 
  onContactClick 
}: { 
  onSignupClick?: () => void;
  onContactClick?: () => void;
}) {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[720px] mx-auto text-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-8"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-primary">Prêt à lancer ?</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight leading-[1.1] text-gradient mb-8">
            Démarrer proprement. <br /> Évoluer sans rupture.
          </h2>
          
          <p className="text-text-secondary text-lg md:text-xl mb-12 font-medium leading-relaxed">
            Projet simple, application en croissance ou infrastructure existante : CloudNaaba vous permet de démarrer proprement, puis d'évoluer sans rupture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={onSignupClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent-primary text-white font-bold text-lg hover:bg-accent-primary/90 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-primary/20 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Commencer
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onContactClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white font-bold text-lg hover:bg-white/[0.08] hover:border-accent-primary/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Parler à l'équipe
            </button>
          </div>

          {/* Trust Line */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm font-medium text-text-secondary mb-16">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent-primary" />
              Sans engagement longue durée
            </span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent-primary" />
              Tarification lisible
            </span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent-primary" />
              Évolution possible à tout moment
            </span>
          </div>

          {/* Context Line */}
          <div className="inline-block px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <p className="text-text-secondary/80 font-medium">
              Démarrez simplement. Ajustez ensuite selon votre besoin réel.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
