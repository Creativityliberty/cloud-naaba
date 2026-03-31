import React from 'react';
import { motion } from 'motion/react';
import { User, Infinity, Clock } from 'lucide-react';

export default function ContactHumanProof() {
  const avatars = [
    { initial: 'S', color: 'bg-emerald-500' },
    { initial: 'M', color: 'bg-violet-500' },
    { initial: 'L', color: 'bg-rose-500' },
    { initial: 'J', color: 'bg-amber-500' },
  ];

  return (
    <section className="py-24 border-t border-border-subtle bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/[0.02] to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold font-display leading-[1.1] mb-6"
            >
              Une équipe réellement joignable.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-text-secondary leading-relaxed font-medium mb-10"
            >
              Un support humain, orienté résolution. CloudNaaba privilégie les échanges utiles.
            </motion.p>
            
            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 mb-8"
            >
              <li className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-red-500/50" />
                <span className="text-text-secondary line-through opacity-60">Pas de parcours inutilement compliqué.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-red-500/50" />
                <span className="text-text-secondary line-through opacity-60">Pas de filtrage automatique qui fait perdre du temps.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-red-500/50" />
                <span className="text-text-secondary line-through opacity-60">Pas de scripts génériques qui ignorent le contexte.</span>
              </li>
              <li className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
                <span className="text-white font-bold tracking-tight">Objectif : vous orienter vers une réponse exploitable.</span>
              </li>
            </motion.ul>
          </div>

          {/* Right Metrics Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="p-10 md:p-14 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] shadow-2xl relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-10 relative z-10">
              
              {/* Metric 1 */}
              <div className="flex flex-col items-center sm:items-start">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Clock className="w-5 h-5 text-accent-primary" />
                </div>
                <div className="text-4xl font-black text-white font-display tracking-tighter mb-2">~12 min</div>
                <div className="text-xs font-bold uppercase tracking-widest text-text-secondary/60">Temps de réponse</div>
              </div>

              {/* Metric 2 / Team */}
              <div className="flex flex-col items-center sm:items-start text-right sm:text-left">
                <div className="flex -space-x-4 mb-6 mt-3 sm:mt-0">
                  {avatars.map((av, idx) => (
                    <div 
                      key={idx} 
                      className={`w-12 h-12 rounded-full border-4 border-[#070707] flex items-center justify-center text-white font-bold relative z-[${40 - idx * 10}] shadow-xl overflow-hidden`}
                    >
                      <div className={`absolute inset-0 opacity-80 ${av.color}`} />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                      <span className="relative z-10 text-lg drop-shadow">{av.initial}</span>
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-[#070707] bg-white/5 flex items-center justify-center text-white/50 backdrop-blur-sm shadow-xl z-0">
                    <Infinity className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-sm font-bold text-white max-w-[220px] mb-2 leading-relaxed text-center sm:text-left">
                  L'équipe CloudNaaba est disponible pour vous.
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-text-secondary/60">
                  100% basée en France
                </div>
              </div>
              
            </div>
            
            {/* Context Badge */}
            <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-center gap-3">
              <User className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-medium text-text-secondary">
                Vous parlez à nous. Pas à un bot IA.
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
