import React from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowRight, MessageSquare, Lock, Network, Share2 } from 'lucide-react';

export default function SecurityHero({ 
  onProtectionsClick, 
  onExpertClick 
}: { 
  onProtectionsClick?: () => void;
  onExpertClick?: () => void;
}) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Visual System */}
      <div className="absolute inset-0 z-0">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
        
        {/* Abstract Network/Architecture Visual (Option A/B Blend) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none scale-150 md:scale-100">
           {/* Animated Network Nodes */}
           <svg width="100%" height="100%" viewBox="0 0 1000 1000" className="max-w-[1200px]">
             <defs>
               <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                 <stop offset="0%" stopColor="var(--color-accent-primary)" stopOpacity="0.4" />
                 <stop offset="100%" stopColor="var(--color-accent-primary)" stopOpacity="0" />
               </radialGradient>
             </defs>
             
             {/* Lines */}
             <motion.path
               d="M 200 300 L 500 500 L 800 300 M 500 500 L 500 800"
               stroke="currentColor"
               strokeWidth="1"
               strokeDasharray="4 4"
               className="text-white/10"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             />
             
             {/* Pulsing Nodes at junctions */}
             {[
               { cx: 200, cy: 300 },
               { cx: 500, cy: 500 },
               { cx: 800, cy: 300 },
               { cx: 500, cy: 800 }
             ].map((node, i) => (
               <motion.circle
                 key={i}
                 cx={node.cx}
                 cy={node.cy}
                 r="40"
                 fill="url(#nodeGradient)"
                 animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
                 transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
               />
             ))}
           </svg>
        </div>
      </div>

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Content Block */}
          <div className="lg:col-span-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-8"
            >
              <Shield className="w-3.5 h-3.5 text-accent-primary" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-accent-primary">
                Sécurité intégrée
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.05] tracking-tight mb-8 text-gradient"
            >
              La sécurité fait partie du socle, pas d’une option ajoutée plus tard.
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-text-secondary max-w-3xl mb-10 leading-relaxed font-medium"
            >
              CloudNaaba intègre les protections essentielles pour réduire l’exposition de vos applications, protéger les échanges et renforcer la continuité de vos services.
            </motion.p>

            {/* Value Line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-start gap-4 mb-12 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] max-w-2xl group hover:border-accent-primary/30 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Lock className="w-5 h-5 text-accent-primary" />
              </div>
              <p className="text-lg text-text-secondary font-medium leading-relaxed">
                Moins de configuration dispersée. Plus de maîtrise. <br />
                <span className="text-text-primary">Un cadre plus sérieux pour vos applications et vos données.</span>
              </p>
            </motion.div>

            {/* CTA Group */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <button 
                onClick={onProtectionsClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent-primary text-white font-bold text-lg hover:bg-accent-primary/90 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Voir les protections
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onExpertClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white font-bold text-lg hover:bg-white/[0.08] hover:border-accent-primary/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Parler à un expert
              </button>
            </motion.div>

            {/* Trust Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 flex flex-col md:flex-row md:items-center gap-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-neutral-900 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-black" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-text-secondary max-w-[440px] leading-relaxed">
                Pensé pour les <span className="text-text-primary">PME sérieuses</span>, les services en production et les organisations qui ne peuvent pas se permettre une sécurité improvisée.
              </p>
            </motion.div>
          </div>

          {/* Right Visual Column (Architecture Closes/Segmentation) */}
          <div className="hidden lg:col-span-4 lg:flex flex-col gap-6 relative">
            {/* Segmentation Architecture Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative p-6 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.08] backdrop-blur-sm overflow-hidden group"
            >
              <div className="absolute inset-0 bg-accent-primary/[0.02] group-hover:bg-accent-primary/[0.05] transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center border border-violet-500/30">
                  <Network className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-1">Architecture</div>
                  <div className="text-lg font-bold text-white">Segmentation native</div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Public Layer', status: 'Protected', icon: <Share2 className="w-3.5 h-3.5" /> },
                  { label: 'Application Tier', status: 'Isolated', icon: <Lock className="w-3.5 h-3.5" /> },
                  { label: 'Data Storage', status: 'Encrypted', icon: <Shield className="w-3.5 h-3.5" /> }
                ].map((layer, j) => (
                  <div key={j} className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="text-text-secondary">{layer.icon}</div>
                      <span className="text-sm font-medium text-text-primary">{layer.label}</span>
                    </div>
                    <span className="text-[10px] font-bold text-violet-400/80 uppercase tracking-tighter">{layer.status}</span>
                  </div>
                ))}
              </div>

              {/* Status Indicator */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-text-secondary">Audit System Active</span>
                </div>
                <div className="text-[10px] font-mono text-text-secondary/40">v2.4.0</div>
              </div>
            </motion.div>
            
            {/* Floating Assurance Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-8 p-4 rounded-2xl bg-black border border-accent-primary/30 shadow-[0_0_30px_rgba(124,58,237,0.1)] z-20 hidden xl:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-primary flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white">Trust Framework</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
