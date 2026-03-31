import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Shield } from 'lucide-react';

interface ContactHeroProps {
  onScrollToForm: () => void;
  onScrollToLive: () => void;
}

export default function ContactHero({ onScrollToForm, onScrollToLive }: ContactHeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent-primary/10 rounded-full blur-[140px] pointer-events-none opacity-50" />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-8"
        >
          <Shield className="w-4 h-4 text-accent-primary" />
          <span className="text-xs font-bold uppercase tracking-widest text-accent-primary">Expertise Technique Directe</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black font-display leading-[1.05] tracking-tighter mb-8 text-gradient max-w-5xl"
        >
          Parlons architecture.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-text-secondary max-w-3xl mb-6 leading-relaxed font-medium"
        >
          Échangez directement avec l'équipe CloudNaaba pour vos questions techniques, vos projets de migration, vos besoins d'infrastructure ou vos enjeux de sécurité.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] mb-12 max-w-2xl"
        >
          <p className="text-lg text-white font-medium italic">
            "Pas de robots. Pas de réponses génériques. Un contact clair avec des personnes qui connaissent réellement la plateforme."
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-xl mx-auto"
        >
          <button 
            onClick={onScrollToForm}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent-primary text-white font-bold text-lg hover:bg-accent-primary/90 hover:scale-[1.03] active:scale-95 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Écrire à l'équipe
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={onScrollToLive}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white font-bold text-lg hover:bg-white/[0.08] hover:border-accent-primary/30 hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5" />
            Demander une discussion technique
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm font-bold uppercase tracking-widest text-text-secondary/60 mt-12"
        >
          Cloud • Migration • Hybride • Sécurité • IA privée
        </motion.p>
      </div>
    </section>
  );
}
