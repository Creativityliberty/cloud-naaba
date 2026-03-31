import React from 'react';
import { motion } from 'motion/react';
import { Mail, MessageCircle, ExternalLink } from 'lucide-react';

interface ContactFinalCTAProps {
  onScrollToForm: () => void;
  onScrollToLive: () => void;
}

export default function ContactFinalCTA({ onScrollToForm, onScrollToLive }: ContactFinalCTAProps) {
  return (
    <section className="py-32 relative overflow-hidden bg-bg-primary">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto max-w-[1000px] px-6 relative z-10 text-center flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-6 text-accent-primary font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full border border-accent-primary/20 bg-accent-primary/5">
            Prenez contact
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black font-display leading-[1.1] tracking-tighter mb-8 text-white">
            Ouvrez la bonne discussion, au bon niveau.
          </h2>
          
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium max-w-3xl mx-auto">
            Que vous ayez besoin de déployer, migrer, connecter votre existant, sécuriser un environnement ou simplement comprendre par où commencer, CloudNaaba vous permet d'échanger directement avec une équipe capable de vous répondre utilement.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full max-w-2xl"
        >
          <button 
            onClick={onScrollToForm}
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-accent-primary hover:bg-accent-primary/90 text-white font-bold text-lg hover:scale-[1.03] active:scale-95 transition-all shadow-[0_0_30px_rgba(124,58,237,0.4)] flex items-center justify-center gap-3"
          >
            Écrire à l'équipe
            <Mail className="w-5 h-5" />
          </button>
          
          <button 
            onClick={onScrollToLive}
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-[#5865F2]/10 border border-[#5865F2]/30 text-[#5865F2] hover:bg-[#5865F2] hover:text-white font-bold text-lg hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-3 group"
          >
            Rejoindre le Discord
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>
        
        <p className="text-sm font-bold uppercase tracking-widest text-text-secondary/60 mt-12">
          Réduction des filtres • Rapprochement de l'expertise • Traitement ciblé
        </p>

      </div>
    </section>
  );
}
