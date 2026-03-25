import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Play, 
  Shield, 
  Zap, 
  Cpu, 
  Database, 
  MessageSquare, 
  Activity, 
  Lock,
  Terminal,
  Layers,
  Share2
} from 'lucide-react';

export default function AiHero() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Voici un résumé structuré de vos documents internes...";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) i = 0;
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-[140px] pb-[120px] overflow-hidden bg-bg-primary">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft border border-accent-primary/20 mb-8">
                <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-accent-primary">
                  IA privée • Déploiement en 1 clic
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.05] tracking-tight mb-8">
                Votre IA privée, <br />
                <span className="text-accent-primary">prête en quelques minutes.</span>
              </h1>

              <p className="text-xl text-text-secondary leading-relaxed mb-8 max-w-[540px]">
                Déployez Ollama sur CloudNaaba et exécutez vos modèles dans un environnement maîtrisé, sans dépendre de services externes.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-5 mb-12">
                <button className="w-full sm:w-auto btn-primary px-8 py-4 text-white font-bold flex items-center justify-center gap-2 group">
                  Installer Ollama
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 rounded-xl border border-border-subtle font-bold text-text-primary hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                  <Play className="w-4 h-4 fill-current" />
                  Voir comment ça marche
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <TrustChip icon={<Lock className="w-4 h-4" />} text="Environnement privé" />
                <TrustChip icon={<Zap className="w-4 h-4" />} text="Déploiement simplifié" />
                <TrustChip icon={<Share2 className="w-4 h-4" />} text="Compatible open source" />
              </div>
            </motion.div>
          </div>

          {/* Right Visual - AI Control Core */}
          <div className="lg:col-span-6 relative h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              
              {/* Central Core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 20px rgba(124, 58, 237, 0.2)",
                      "0 0 40px rgba(124, 58, 237, 0.4)",
                      "0 0 20px rgba(124, 58, 237, 0.2)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-32 h-32 rounded-[32px] bg-bg-elevated border-2 border-accent-primary/40 flex flex-col items-center justify-center relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-transparent" />
                  <Cpu className="w-10 h-10 text-accent-primary mb-2 relative z-10" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white relative z-10">Ollama</span>
                  <span className="text-[8px] font-bold text-accent-primary/60 relative z-10">RUNTIME</span>
                </motion.div>
              </div>

              {/* Orbiting Nodes */}
              <OrbitingNode 
                icon={<Layers className="w-5 h-5" />} 
                label="Model" 
                sub="Llama 3" 
                angle={-60} 
                distance={180} 
                delay={0}
              />
              <OrbitingNode 
                icon={<Database className="w-5 h-5" />} 
                label="Data" 
                sub="Private" 
                angle={60} 
                distance={180} 
                delay={0.5}
              />
              <OrbitingNode 
                icon={<Terminal className="w-5 h-5" />} 
                label="API" 
                sub="Secure" 
                angle={180} 
                distance={180} 
                delay={1}
              />

              {/* Connection Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(124, 58, 237, 0)" />
                    <stop offset="50%" stopColor="rgba(124, 58, 237, 0.5)" />
                    <stop offset="100%" stopColor="rgba(124, 58, 237, 0)" />
                  </linearGradient>
                </defs>
                <ConnectionLine start={{x: '50%', y: '50%'}} end={{x: '35%', y: '35%'}} />
                <ConnectionLine start={{x: '50%', y: '50%'}} end={{x: '65%', y: '35%'}} />
                <ConnectionLine start={{x: '50%', y: '50%'}} end={{x: '35%', y: '65%'}} />
              </svg>

              {/* Floating UI Panels */}
              
              {/* Panel 1: Chat */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute top-10 right-0 w-64 glass-card p-4 z-30"
              >
                <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
                  <MessageSquare className="w-3 h-3 text-accent-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Assistant IA</span>
                </div>
                <div className="space-y-3">
                  <div className="text-[11px] text-gray-500 bg-white/5 p-2 rounded-lg italic">
                    "Résume ce document technique..."
                  </div>
                  <div className="text-[11px] text-white leading-relaxed">
                    {typedText}
                    <span className="inline-block w-1 h-3 bg-accent-primary ml-1 animate-pulse" />
                  </div>
                </div>
              </motion.div>

              {/* Panel 2: Model Status */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-20 left-0 w-56 glass-card p-4 z-30"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[10px] font-bold uppercase text-white">Llama 3.1</span>
                  </div>
                  <span className="text-[9px] font-bold text-accent-primary">ACTIF</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-[8px] text-gray-500 uppercase mb-1">Latence</div>
                    <div className="text-xs font-bold text-white">12ms</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-[8px] text-gray-500 uppercase mb-1">Mode</div>
                    <div className="text-xs font-bold text-white">Privé</div>
                  </div>
                </div>
              </motion.div>

              {/* Panel 3: System Health */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute bottom-0 right-10 w-48 glass-card p-4 z-30"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="w-3 h-3 text-accent-primary" />
                  <span className="text-[10px] font-bold uppercase text-gray-400">Système</span>
                </div>
                <div className="space-y-2">
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ width: ['20%', '60%', '40%'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="h-full bg-accent-primary" 
                    />
                  </div>
                  <div className="flex justify-between text-[9px] font-medium">
                    <span className="text-gray-500">CPU Usage</span>
                    <span className="text-white">42%</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function TrustChip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-text-secondary">
      <div className="text-accent-primary/60">{icon}</div>
      {text}
    </div>
  );
}

function OrbitingNode({ icon, label, sub, angle, distance, delay }: any) {
  const x = Math.cos(angle * Math.PI / 180) * distance;
  const y = Math.sin(angle * Math.PI / 180) * distance;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        x: [x, x + 5, x],
        y: [y, y - 5, y]
      }}
      transition={{ 
        delay, 
        duration: 0.8,
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        x: { duration: 5, repeat: Infinity, ease: "easeInOut" }
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
    >
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-2xl bg-bg-elevated border border-white/10 flex items-center justify-center shadow-xl group hover:border-accent-primary/40 transition-colors">
          <div className="text-accent-primary group-hover:scale-110 transition-transform">{icon}</div>
        </div>
        <div className="mt-2 text-center">
          <div className="text-[10px] font-bold text-white uppercase tracking-tighter">{label}</div>
          <div className="text-[8px] font-medium text-accent-primary/60">{sub}</div>
        </div>
      </div>
    </motion.div>
  );
}

function ConnectionLine({ start, end }: any) {
  return (
    <motion.line
      x1={start.x} y1={start.y}
      x2={end.x} y2={end.y}
      stroke="url(#lineGrad)"
      strokeWidth="1"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />
  );
}
