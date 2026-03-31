import React from 'react';
import { motion } from 'motion/react';
import { Shield, Activity, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function NetworkProtection() {
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
              <Activity className="w-4 h-4 text-accent-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-primary">Disponibilité garantie</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-display leading-[1.1] mb-8 text-gradient">
              Protection contre les attaques réseau
            </h2>
            
            <p className="text-xl text-text-primary/80 font-bold mb-6">
              Réduire l’impact des attaques visant à saturer vos services.
            </p>

            <div className="space-y-6 text-lg text-text-secondary leading-relaxed mb-10">
              <p>
                Certaines attaques cherchent à rendre un site ou une application indisponible en envoyant un volume massif de requêtes artificielles.
              </p>
              <p>
                CloudNaaba intègre des mécanismes de filtrage et d’absorption de ce trafic afin de limiter l’impact sur vos utilisateurs légitimes.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mb-12">
              {[
                "Moins d’exposition aux attaques de saturation",
                "Continuité renforcée pour vos services",
                "Réduction du risque d’interruption brutale"
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
              <div className="w-14 h-14 rounded-xl bg-accent-primary flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.3)] group-hover:scale-110 transition-transform duration-500">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-primary mb-1">Anti-DDoS</h4>
                <p className="text-sm text-text-secondary leading-tight">
                  Protection active contre la saturation réseau pour préserver la disponibilité.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual (Flow) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <NetworkFlowVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function NetworkFlowVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[500px] mx-auto bg-black/40 rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />

      {/* Central Filtering Shield */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-accent-primary/5 border border-accent-primary/20 backdrop-blur-xl flex items-center justify-center">
            <Shield className="w-12 h-12 md:w-16 md:h-16 text-accent-primary opacity-40" />
            
            {/* Pulsing Outer Rings */}
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border border-accent-primary/20"
                animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 1.5 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Input Side (Chaos) */}
      <div className="absolute top-0 bottom-0 left-0 w-1/4 flex flex-col justify-around py-12 px-4 z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={i}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: [0, 400], opacity: [0, 1, 1, 0] }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              delay: i * 0.3, 
              ease: "linear" 
            }}
            className={`h-0.5 rounded-full ${i % 3 === 0 ? 'w-12 bg-red-500/40 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'w-8 bg-accent-primary/20'}`}
            style={{
              // Stop red lines at the shield (approx 50% across)
              filter: i % 3 === 0 ? 'url(#filter-out)' : 'none'
            }}
          />
        ))}
      </div>

      {/* Filtering Logic via SVG (Masking) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <mask id="shield-mask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            {/* We want to block red lines starting from the left-ish area of the shield */}
            <rect x="250" y="0" width="250" height="500" fill="black" />
          </mask>
        </defs>
        
        {/* Animated Packets */}
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={i}
            r={i % 4 === 0 ? "3" : "2"}
            fill={i % 4 === 0 ? "#ef4444" : "#7c3aed"}
            initial={{ cx: 0, cy: 50 + i * 35 }}
            animate={{ 
              cx: 500,
              opacity: [0, 1, 1, 0] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: i * 0.4, 
              ease: "linear" 
            }}
            // Only non-red circles pass through the middle
            mask={i % 4 === 0 ? "url(#shield-mask)" : "none"}
            className={i % 4 === 0 ? "blur-[1px]" : ""}
          />
        ))}

        {/* Clean Output Lines (Right side) */}
        {[...Array(4)].map((_, i) => (
          <motion.line
            key={i}
            x1="300"
            y1={150 + i * 80}
            x2="500"
            y2={150 + i * 80}
            stroke="#7c3aed"
            strokeWidth="1"
            strokeOpacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        ))}
      </svg>

      {/* Labels */}
      <div className="absolute top-6 left-6 text-[9px] font-mono font-black uppercase tracking-widest text-text-secondary/40">Inbound_Traffic</div>
      <div className="absolute bottom-6 left-6 text-[9px] font-mono font-bold uppercase tracking-widest text-red-500/40">Anomaly_Detected</div>
      <div className="absolute top-6 right-6 text-[9px] font-mono font-black uppercase tracking-widest text-accent-primary/60">Clean_Output</div>
      <div className="absolute bottom-6 right-6 text-[9px] font-mono font-bold uppercase tracking-widest text-green-500/40">Live_Mitigation</div>
    </div>
  );
}
