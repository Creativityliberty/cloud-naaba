import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, ShieldCheck, Zap, Target } from 'lucide-react';

interface SecurityFinalCTAProps {
  onPricingClick: () => void;
  onExpertClick: () => void;
}

export default function SecurityFinalCTA({ onPricingClick, onExpertClick }: SecurityFinalCTAProps) {
  return (
    <section className="py-40 relative overflow-hidden bg-black">
      {/* Background Glow - Slow pulsate */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[680px] mx-auto text-center">
          
          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold font-display leading-[1.1] tracking-tight mb-8 text-white"
          >
            Donnez à vos applications un socle de sécurité plus sérieux.
          </motion.h2>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-xl text-text-secondary leading-relaxed mb-12"
          >
            <p>
              Vous n’avez pas besoin d’assembler vous-même chaque brique de protection pour mieux sécuriser vos services.
            </p>
            <p>
              CloudNaaba vous apporte une base plus propre pour protéger les échanges, réduire l’exposition et renforcer la continuité.
            </p>
          </motion.div>

          {/* CTA Group */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button 
              onClick={onPricingClick}
              className="group relative w-full sm:w-auto px-10 py-5 bg-accent-primary text-white rounded-full font-bold text-lg transition-all hover:scale-[1.02] hover:-translate-y-0.5 active:scale-95 shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:shadow-[0_0_60px_rgba(124,58,237,0.5)]"
            >
              <span className="flex items-center justify-center gap-2">
                Voir les offres
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button 
              onClick={onExpertClick}
              className="group w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-primary/50 text-white rounded-full font-bold text-lg transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <span className="flex items-center justify-center gap-2">
                Parler à un expert
                <MessageSquare className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
              </span>
            </button>
          </motion.div>

          {/* Trust Line */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/5"
          >
            <div className="flex flex-col items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-accent-primary opacity-60" />
              <span className="text-sm font-medium text-text-secondary/80">Sécurité intégrée dès le départ</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Zap className="w-6 h-6 text-accent-primary opacity-60" />
              <span className="text-sm font-medium text-text-secondary/80">Approche cohérente</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Target className="w-6 h-6 text-accent-primary opacity-60" />
              <span className="text-sm font-medium text-text-secondary/80">Adapté aux services sérieux</span>
            </div>
          </motion.div>

          {/* Context Line - Signature */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 text-lg font-display font-medium text-text-primary tracking-widest uppercase opacity-40"
          >
            Moins d’improvisation. Plus de maîtrise.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
