import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function FinalCTA({ onPrimaryClick, onSecondaryClick }: { onPrimaryClick?: () => void; onSecondaryClick?: () => void }) {
  return (
    <section className="py-48 bg-bg-primary relative overflow-hidden">
      {/* Large radial glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-accent-primary/10 rounded-full blur-[180px] pointer-events-none" />
      
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="premium-card p-16 md:p-24 relative overflow-hidden group"
          >
            {/* Animated background sweep */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] mb-10 tracking-tight text-gradient">
                Donnez à votre projet une base sérieuse.
              </h2>
              <p className="text-text-secondary text-xl md:text-2xl max-w-[750px] mx-auto mb-16 leading-relaxed font-medium">
                Vous n’avez pas besoin de complexifier votre exploitation pour la rendre professionnelle. CloudNaaba s'occupe de la structure, vous vous occupez du produit.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                <motion.button 
                  onClick={onPrimaryClick}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-white text-black font-black text-xl hover:bg-accent-primary hover:text-white transition-all duration-300 shadow-2xl shadow-white/10 hover:shadow-accent-primary/20 tracking-tight flex items-center justify-center gap-3"
                >
                  Démarrer maintenant
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
                <motion.button 
                  onClick={onSecondaryClick}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-white/5 text-text-primary font-bold text-xl hover:bg-white/10 border border-white/10 transition-all duration-300 tracking-tight flex items-center justify-center gap-3"
                >
                  Voir la démo
                  <PlayCircle className="w-6 h-6 opacity-60" />
                </motion.button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500 mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-primary" />
                  <span className="text-xs font-bold uppercase tracking-[0.3em]">Souveraineté</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-primary" />
                  <span className="text-xs font-bold uppercase tracking-[0.3em]">Sécurité</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-primary" />
                  <span className="text-xs font-bold uppercase tracking-[0.3em]">Simplicité</span>
                </div>
              </div>

              {/* Tech Stack Logos */}
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-20 grayscale group-hover:opacity-60 transition-all duration-700">
                <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" className="h-6" referrerPolicy="no-referrer" />
                <img src="https://cdn.simpleicons.org/github/FFFFFF" alt="GitHub" className="h-6" referrerPolicy="no-referrer" />
                <img src="https://cdn.simpleicons.org/gitlab/FC6D26" alt="GitLab" className="h-6" referrerPolicy="no-referrer" />
                <img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="PostgreSQL" className="h-6" referrerPolicy="no-referrer" />
                <img src="https://cdn.simpleicons.org/redis/DC382D" alt="Redis" className="h-6" referrerPolicy="no-referrer" />
                <img src="https://cdn.simpleicons.org/next-dot-js/FFFFFF" alt="Next.js" className="h-6" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
