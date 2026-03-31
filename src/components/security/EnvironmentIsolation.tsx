import React from 'react';
import { motion } from 'motion/react';
import { Layers, CheckCircle2, Shield, AlertTriangle } from 'lucide-react';

export default function EnvironmentIsolation() {
  return (
    <section className="py-32 relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto max-w-[1240px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent-primary/5 border border-accent-primary/10 mb-8">
              <Layers className="w-4 h-4 text-accent-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-primary">Stabilité et confinement</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-display leading-[1.1] mb-8 text-gradient">
              Isolation des environnements
            </h2>
            
            <p className="text-xl text-text-primary/80 font-bold mb-6">
              Une application ne doit pas dépendre du comportement des autres services.
            </p>

            <div className="space-y-6 text-lg text-text-secondary leading-relaxed mb-10">
              <p>
                CloudNaaba applique une logique de cloisonnement des environnements afin de limiter la propagation des incidents et réduire les risques liés aux contextes partagés.
              </p>
              <p>
                Chaque application fonctionne dans un cadre plus maîtrisé, avec moins de dépendance aux autres services présents sur l’infrastructure.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mb-12">
              {[
                "Séparation claire entre les applications",
                "Limitation des effets en cascade",
                "Base plus saine pour les services sensibles"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center shrink-0 group-hover:bg-accent-primary/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-accent-primary" />
                  </div>
                  <span className="text-text-primary font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Mini Block (Signature) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex items-center gap-6 max-w-sm group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.1)] group-hover:bg-accent-primary/20 transition-all duration-500">
                <Shield className="w-7 h-7 text-accent-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-primary mb-1">Isolation</h4>
                <p className="text-sm text-text-secondary leading-tight">
                  Cloisonnement renforcé pour limiter la propagation des incidents.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual (Grid of Modules) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <IsolationVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function IsolationVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[500px] mx-auto bg-black/40 rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl p-8 flex flex-col gap-4">
      
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      {/* Grid of 4 main containers */}
      <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full relative z-10 w-full">
        
        {/* Container 1 (Stable) */}
        <div className="relative p-5 rounded-3xl bg-white/[0.03] border border-white/[0.08] overflow-hidden flex flex-col justify-between">
          <div className="w-full flex justify-between items-center mb-4">
            <span className="text-[10px] font-mono font-bold text-text-secondary/60">APP_A</span>
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          </div>
          <div className="space-y-2 mt-auto">
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
               <motion.div className="h-full bg-green-500/50" animate={{ width: ['40%', '45%', '40%'] }} transition={{ duration: 4, repeat: Infinity }} />
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
               <motion.div className="h-full bg-blue-500/50" animate={{ width: ['60%', '55%', '60%'] }} transition={{ duration: 5, repeat: Infinity }} />
            </div>
          </div>
        </div>

        {/* Container 2 (Failing / Incident) */}
        <div className="relative p-5 rounded-3xl bg-red-500/5 border border-red-500/20 overflow-hidden flex flex-col justify-between">
          <motion.div 
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-red-500/10"
          />
          <div className="w-full flex justify-between items-start mb-4 relative z-10">
            <span className="text-[10px] font-mono font-bold text-red-400">APP_B (CRITICAL)</span>
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="mt-1"
            >
              <AlertTriangle className="w-4 h-4 text-red-500" />
            </motion.div>
          </div>
          <div className="space-y-3 mt-auto relative z-10">
            {/* Erratic lines for container 2 */}
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
               <motion.div className="h-full bg-red-500" animate={{ x: ['-100%', '100%'] }} transition={{ duration: 0.5, repeat: Infinity }} />
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
               <motion.div className="h-full bg-red-500" animate={{ x: ['-100%', '100%'] }} transition={{ duration: 0.7, repeat: Infinity, delay: 0.2 }} />
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
               <motion.div className="h-full bg-red-500" animate={{ x: ['-100%', '100%'] }} transition={{ duration: 0.4, repeat: Infinity, delay: 0.1 }} />
            </div>
          </div>
        </div>

        {/* Container 3 (Stable) */}
        <div className="relative p-5 rounded-3xl bg-white/[0.03] border border-white/[0.08] overflow-hidden flex flex-col justify-between">
          <div className="w-full flex justify-between items-center mb-4">
            <span className="text-[10px] font-mono font-bold text-text-secondary/60">APP_C</span>
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          </div>
          <div className="space-y-2 mt-auto">
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
               <motion.div className="h-full bg-green-500/50" animate={{ width: ['70%', '75%', '70%'] }} transition={{ duration: 6, repeat: Infinity }} />
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
               <motion.div className="h-full bg-blue-500/50" animate={{ width: ['30%', '35%', '30%'] }} transition={{ duration: 4, repeat: Infinity }} />
            </div>
          </div>
        </div>

        {/* Container 4 (Stable) */}
        <div className="relative p-5 rounded-3xl bg-white/[0.03] border border-white/[0.08] overflow-hidden flex flex-col justify-between">
          <div className="w-full flex justify-between items-center mb-4">
            <span className="text-[10px] font-mono font-bold text-text-secondary/60">APP_D</span>
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          </div>
          <div className="space-y-2 mt-auto">
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
               <motion.div className="h-full bg-green-500/50" animate={{ width: ['20%', '25%', '20%'] }} transition={{ duration: 5, repeat: Infinity }} />
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
               <motion.div className="h-full bg-blue-500/50" animate={{ width: ['80%', '85%', '80%'] }} transition={{ duration: 7, repeat: Infinity }} />
            </div>
          </div>
        </div>

      </div>

      {/* Floating Labels / Overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="px-4 py-2 bg-bg-elevated/90 backdrop-blur-md border border-red-500/30 rounded-full shadow-2xl"
        >
          <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">
            Containment Active
          </span>
        </motion.div>
      </div>

    </div>
  );
}
