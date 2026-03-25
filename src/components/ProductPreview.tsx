import React from 'react';
import { motion } from 'motion/react';
import { Cloud, Database, Shield, Zap, GitBranch, Terminal } from 'lucide-react';

export default function ProductPreview() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            L'exploitation <span className="text-violet-400">visuelle & maîtrisée.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-[700px] mx-auto">
            Une interface qui transforme la complexité de l'infrastructure en un flux logique et sécurisé.
          </p>
        </div>

        {/* Flow Diagram (Inspired by User Image) */}
        <div className="relative min-h-[500px] flex items-center justify-center">
          
          {/* Central Node - CloudNaaba Engine */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative z-20 w-48 h-48 md:w-64 md:h-64 rounded-full bg-violet-600/10 border border-violet-500/30 flex flex-col items-center justify-center shadow-[0_0_60px_-10px_rgba(139,92,246,0.3)]"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-violet-600 flex items-center justify-center mb-4">
              <Cloud className="text-white w-8 h-8 md:w-10 md:h-10" />
            </div>
            <span className="text-white font-bold text-lg md:text-xl">CloudNaaba Engine</span>
            <span className="text-violet-400/60 text-xs font-mono mt-2">v2.4.0 Actif</span>
          </motion.div>

          {/* Surrounding Nodes */}
          <div className="absolute inset-0 flex items-center justify-center">
            
            {/* Left: Source */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute -translate-x-[200px] md:-translate-x-[350px] flex flex-col items-center gap-4"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <GitBranch className="text-white/60 w-8 h-8" />
              </div>
              <div className="text-center">
                <p className="text-white font-medium">Code Source</p>
                <p className="text-text-secondary/60 text-xs">GitHub / GitLab</p>
              </div>
            </motion.div>

            {/* Right: Infrastructure */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute translate-x-[200px] md:translate-x-[350px] flex flex-col items-center gap-4"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <Database className="text-white/60 w-8 h-8" />
              </div>
              <div className="text-center">
                <p className="text-white font-medium">Infrastructure</p>
                <p className="text-text-secondary/60 text-xs">AWS / GCP / Bare Metal</p>
              </div>
            </motion.div>

            {/* Top: Security */}
            <motion.div 
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -translate-y-[180px] md:-translate-y-[220px] flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-violet-500/5 border border-violet-500/20 flex items-center justify-center">
                <Shield className="text-violet-400 w-6 h-6" />
              </div>
              <p className="text-violet-400/80 text-xs font-bold uppercase tracking-widest">Couche de Sécurité</p>
            </motion.div>

            {/* Bottom: Terminal/Logs */}
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute translate-y-[180px] md:translate-y-[220px] flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center">
                <Terminal className="text-white/40 w-6 h-6" />
              </div>
              <p className="text-text-secondary/40 text-xs font-mono">Logs en temps réel</p>
            </motion.div>
          </div>

          {/* Connecting Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgba(139,92,246,0.2)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            {/* Left to Center */}
            <motion.path 
              d="M 200 500 Q 350 500 500 500" 
              stroke="url(#lineGradient)" 
              strokeWidth="2" 
              fill="none" 
              strokeDasharray="10,10"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            {/* Center to Right */}
            <motion.path 
              d="M 500 500 Q 650 500 800 500" 
              stroke="url(#lineGradient)" 
              strokeWidth="2" 
              fill="none" 
              strokeDasharray="10,10"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </svg>
        </div>

        {/* Feature Grid Below Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <Zap className="text-violet-400 w-6 h-6 mb-4" />
            <h4 className="text-white font-bold mb-2">Déploiement Instantané</h4>
            <p className="text-text-secondary text-sm">Poussez votre code, CloudNaaba s'occupe du reste en quelques secondes.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <Shield className="text-violet-400 w-6 h-6 mb-4" />
            <h4 className="text-white font-bold mb-2">Sécurité Native</h4>
            <p className="text-text-secondary text-sm">Certificats SSL, pare-feu et isolation des conteneurs configurés par défaut.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <Database className="text-violet-400 w-6 h-6 mb-4" />
            <h4 className="text-white font-bold mb-2">Multi-Cloud</h4>
            <p className="text-text-secondary text-sm">Déployez sur n'importe quel fournisseur sans changer une ligne de code.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
