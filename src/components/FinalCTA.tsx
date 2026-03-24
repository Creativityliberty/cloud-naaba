import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-40 bg-[#050505] relative overflow-hidden">
      {/* Animated Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto max-w-[800px] px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-8 leading-tight">
            Donnez à votre projet une <br className="hidden md:block" />
            <span className="text-violet-400">base plus sérieuse.</span>
          </h2>

          {/* Subtext */}
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-12 max-w-[650px] mx-auto">
            Vous n’avez pas besoin de complexifier votre infrastructure pour exploiter vos applications correctement. 
            Vous avez besoin d’un cadre fiable, simple et maîtrisé.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-violet-600 text-white font-bold text-lg shadow-[0_0_30px_-5px_rgba(124,58,237,0.4)] hover:bg-violet-500 hover:shadow-[0_0_40px_-5px_rgba(124,58,237,0.6)] transition-all duration-300 flex items-center justify-center gap-3"
            >
              Commencer maintenant
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-3"
            >
              Demander une démonstration
              <PlayCircle className="w-5 h-5 opacity-60" />
            </motion.button>
          </div>

          {/* Trust Line */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-text-secondary/40">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-violet-500/40" />
              Aucune carte bancaire requise
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-violet-500/40" />
              Mise en route simple
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-violet-500/40" />
              Accompagnement possible
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
