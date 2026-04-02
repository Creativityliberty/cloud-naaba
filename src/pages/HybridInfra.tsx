import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Server, 
  Database, 
  Shield, 
  Zap, 
  ArrowRight, 
  Terminal, 
  CheckCircle2, 
  Activity, 
  Layout, 
  Globe, 
  Cpu,
  RefreshCw,
  Search,
  Lock,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  Plus,
  Eye,
  Layers,
  Filter,
  ArrowUp,
  Copy,
  Check,
  Cloud,
  Link,
  Brain,
  Wrench,
  TrendingUp,
  XCircle
} from 'lucide-react';

export default function HybridInfra({ 
  onAgentClick,
  onContactClick,
  onConnectClick,
  onDocClick,
}: { 
  onAgentClick?: () => void;
  onContactClick?: () => void;
  onConnectClick?: () => void;
  onDocClick?: () => void;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-bg-primary">
      <main>
        <Hero onPrimaryClick={onAgentClick} onSecondaryClick={onContactClick} />
        <ProblemHybrid />
        <SolutionControlLayer />
        <HowItWorksHybrid onActionClick={onContactClick} />
        <BenefitsHybrid />
        <ConnectExisting onActionClick={onAgentClick} />
        <MigrationEvolution onActionClick={onContactClick} />
        <CompatibilityHybrid />
        <WhyHybrid />
        <HybridFAQ />
        <FinalCTA 
          onConnectClick={onConnectClick} 
          onMigrationClick={onContactClick} 
          onDocClick={onDocClick} 
        />
      </main>
    </div>
  );
}

function Hero({ onPrimaryClick, onSecondaryClick }: { onPrimaryClick?: () => void; onSecondaryClick?: () => void }) {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-accent-primary/5 border border-accent-primary/20 mb-8"
              >
                <span className="text-[11px] font-bold uppercase tracking-widest text-accent-primary">
                  Gestion hybride de l'infrastructure
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold font-display leading-[1.05] tracking-tight mb-8 text-gradient"
              >
                Une interface unique pour piloter toute votre infrastructure.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-text-secondary leading-relaxed mb-6 max-w-[540px]"
              >
                Connectez vos serveurs existants à CloudNaaba, centralisez leur gestion et modernisez progressivement, sans migration forcée.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg font-medium text-text-primary/80 mb-10 italic"
              >
                Connectez l'existant. Gagnez en visibilité. Modernisez ensuite à votre rythme.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap items-center gap-5 mb-12"
              >
                <button 
                  onClick={onPrimaryClick}
                  className="group relative px-8 py-4 bg-accent-primary text-white font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative flex items-center gap-2">
                    Connecter l'existant
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button 
                  onClick={onSecondaryClick}
                  className="px-8 py-4 text-text-primary font-bold rounded-xl border border-white/10 hover:bg-white/5 transition-all"
                >
                  Voir comment ça marche
                </button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="flex flex-col gap-4"
              >
                {[
                  "Compatible avec les environnements courants",
                  "Déploiement progressif",
                  "Accompagnement possible en cas de migration"
                ].map((chip, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-text-secondary/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                    {chip}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 relative">
            <InfraMapVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfraMapVisual() {
  const nodes = [
    { id: 'aws', label: 'AWS', icon: 'https://icongr.am/simple/amazonaws.svg?color=FFFFFF', pos: { top: '10%', left: '15%' } },
    { id: 'ovh', label: 'OVH', icon: 'https://cdn.simpleicons.org/ovh/FFFFFF', pos: { top: '5%', left: '50%' } },
    { id: 'gcp', label: 'GCP', icon: 'https://cdn.simpleicons.org/googlecloud/FFFFFF', pos: { top: '10%', right: '15%' } },
    { id: 'local', label: 'Local Server', icon: 'https://cdn.simpleicons.org/linux/FFFFFF', pos: { bottom: '15%', left: '10%' } },
    { id: 'onprem', label: 'On-Prem', icon: 'https://cdn.simpleicons.org/serverfault/FFFFFF', pos: { bottom: '5%', left: '50%' } },
    { id: 'legacy', label: 'Legacy', icon: 'https://cdn.simpleicons.org/windows/FFFFFF', pos: { bottom: '15%', right: '10%' } },
  ];

  return (
    <div className="relative aspect-square w-full max-w-[600px] mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Central Hub */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <div className="relative group">
          <div className="flex flex-col items-center justify-center relative z-10">
            <img 
              src="https://cdn.phototourl.com/free/2026-04-02-e8505ddc-bb80-4865-b48f-44c00e47e19c.png" 
              alt="CloudNaaba Core" 
              className="h-16 md:h-24 w-auto object-contain mb-3"
            />
          </div>
          
          {/* Animated Glow Rings */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-[2.5rem] border border-accent-primary/30"
              animate={{ 
                scale: [1, 1.4 + i * 0.2], 
                opacity: [0.6, 0],
                rotate: i * 45
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                delay: i * 1.2,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 500 500">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(124,58,237,0)" />
            <stop offset="50%" stopColor="rgba(124,58,237,0.4)" />
            <stop offset="100%" stopColor="rgba(124,58,237,0)" />
          </linearGradient>
        </defs>
        {nodes.map((node, i) => (
          <motion.path
            key={node.id}
            d={`M 250 250 L ${i < 3 ? (i === 0 ? 75 : (i === 1 ? 250 : 425)) : (i === 3 ? 50 : (i === 4 ? 250 : 450))} ${i < 3 ? (i === 1 ? 25 : 50) : (i === 4 ? 475 : 425)}`}
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 + i * 0.15, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
          className="absolute z-10 group"
          style={node.pos}
        >
          <div className="relative flex flex-col items-center">
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-bg-elevated/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl group-hover:border-accent-primary/50 transition-all duration-500"
            >
              <img src={node.icon} alt={node.label} className="w-8 h-8 md:w-10 md:h-10 opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" referrerPolicy="no-referrer" />
              
              {/* Status Indicator */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-bg-primary shadow-[0_0_10px_rgba(34,197,94,0.6)]" 
              />
            </motion.div>
            <span className="mt-3 text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] group-hover:text-accent-primary transition-colors">
              {node.label}
            </span>
          </div>
        </motion.div>
      ))}

      {/* Floating UI Panels */}
      {/* Panel 1: Connected Servers */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute top-[20%] -left-[10%] z-30 hidden xl:block"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl min-w-[180px]"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-accent-primary/20 flex items-center justify-center">
              <Server className="w-4 h-4 text-accent-primary" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Connected Servers</span>
          </div>
          <div className="space-y-1">
            <div className="text-xl font-bold text-text-primary">18 Servers</div>
            <div className="text-[10px] text-text-secondary/60 font-medium">5 Environments • 1 Interface</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Panel 2: Health Status */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute top-[40%] -right-[15%] z-30 hidden xl:block"
      >
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl min-w-[180px]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
              <Activity className="w-4 h-4 text-green-400" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Health Status</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center">
              <div className="text-sm font-bold text-green-400">14</div>
              <div className="text-[8px] text-text-secondary/40 uppercase font-bold">OK</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold text-amber-400">3</div>
              <div className="text-[8px] text-text-secondary/40 uppercase font-bold">WARN</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold text-red-400">1</div>
              <div className="text-[8px] text-text-secondary/40 uppercase font-bold">CRIT</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Panel 3: Operations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="absolute -bottom-[5%] left-[20%] z-30 hidden xl:block"
      >
        <motion.div 
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl min-w-[200px]"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Zap className="w-4 h-4 text-blue-400" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Operations</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-text-secondary font-medium">Updates pending</span>
              <span className="text-[9px] font-bold text-accent-primary">2</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-text-secondary font-medium">Monitoring active</span>
              <span className="text-[9px] font-bold text-green-400">LIVE</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-text-secondary font-medium">Agent status</span>
              <span className="text-[9px] font-bold text-text-primary">ONLINE</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function ProblemHybrid() {
  const infraLayers = [
    { icon: Globe, label: "Cloud Public (AWS, GCP, Azure)", status: "Siloed" },
    { icon: Cpu, label: "Serveurs Locaux & Edge", status: "Isolated" },
    { icon: Server, label: "Environnements Legacy", status: "Legacy" },
    { icon: Database, label: "Bases de données externes", status: "External" },
    { icon: Layout, label: "Outils tiers & SaaS", status: "Fragmented" },
  ];

  const problems = [
    { 
      id: "01",
      title: "Cécité Opérationnelle", 
      desc: "Aucune vue d'ensemble. Vous pilotez votre infrastructure à l'aveugle, console par console." 
    },
    { 
      id: "02",
      title: "Maintenance Hétérogène", 
      desc: "Chaque environnement a ses propres règles, ses propres scripts et ses propres failles." 
    },
    { 
      id: "03",
      title: "Rétention de Savoir", 
      desc: "La compréhension du système est verrouillée chez quelques experts. Un risque majeur de continuité." 
    },
    { 
      id: "04",
      title: "Inertie Technique", 
      desc: "La complexité accumulée freine chaque nouveau déploiement. L'innovation devient impossible." 
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-bg-primary">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto max-w-[1240px] px-6">
        {/* Diagnostic Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-red-500/80">Diagnostic de l'existant</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold font-display tracking-tight leading-[1.1] text-gradient"
            >
              Le problème n'est pas votre infra. <br />
              C'est sa fragmentation.
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block text-right"
          >
            <div className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest mb-2 text-right">System_Entropy_Level</div>
            <div className="flex gap-1 justify-end">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className={`w-4 h-1.5 rounded-full ${i > 5 ? 'bg-red-500/40' : 'bg-accent-primary/20'}`} />
              ))}
            </div>
            <div className="mt-2 text-[10px] font-mono text-red-500/60 font-bold uppercase tracking-widest">Critical_Fragmentation</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32">
          {/* Left: Editorial & Layers */}
          <div className="lg:col-span-5 space-y-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-text-secondary leading-relaxed"
            >
              Votre infrastructure s'est construite par sédimentation. Chaque couche était une solution, leur ensemble est devenu un fardeau.
            </motion.p>
            
            <div className="space-y-3">
              {infraLayers.map((layer, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent-primary/10 transition-colors">
                      <layer.icon className="w-5 h-5 text-text-secondary group-hover:text-accent-primary transition-colors" />
                    </div>
                    <span className="text-sm font-bold text-text-primary/80">{layer.label}</span>
                  </div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-text-secondary/40 group-hover:text-red-500/60 transition-colors">
                    [{layer.status}]
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-dashed border-white/10 bg-white/[0.01]"
            >
              <p className="text-sm text-text-secondary italic leading-relaxed">
                "On finit par passer 80% de notre temps à maintenir l'existant au lieu de construire le futur."
              </p>
            </motion.div>
          </div>

          {/* Right: Advanced Visual */}
          <div className="lg:col-span-7">
            <FragmentedInfraVisual />
          </div>
        </div>

        {/* Problem Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-accent-primary/30 transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 text-4xl font-black text-white/[0.02] group-hover:text-accent-primary/5 transition-colors">
                {p.id}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors">{p.title}</h3>
                <p className="text-text-secondary leading-relaxed max-w-[400px]">{p.desc}</p>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-br from-transparent to-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Final Statement - Ultra Premium */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-accent-primary/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative p-12 md:p-20 rounded-[3rem] bg-black/40 backdrop-blur-xl border border-white/10 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
            
            <h3 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-8 leading-tight">
              Vous n’avez pas besoin de tout remplacer. <br />
              <span className="text-accent-primary">Vous avez besoin de reprendre le contrôle.</span>
            </h3>
            
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary">Zéro Migration Forcée</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary">Centralisation Immédiate</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary">Modernisation à la carte</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FragmentedInfraVisual() {
  const nodes = [
    { id: 1, label: "AWS_PROD", pos: { top: '15%', left: '15%' }, status: 'warning', data: "82% LOAD" },
    { id: 2, label: "LOCAL_DB", pos: { top: '25%', left: '60%' }, status: 'ok', data: "SYNC_LATENCY" },
    { id: 3, label: "LEGACY_APP", pos: { top: '55%', left: '10%' }, status: 'critical', data: "ERROR_404" },
    { id: 4, label: "GCP_WORKER", pos: { top: '70%', left: '75%' }, status: 'ok', data: "IDLE" },
    { id: 5, label: "EDGE_NODE", pos: { top: '85%', left: '35%' }, status: 'warning', data: "RETRYING..." },
    { id: 6, label: "SAAS_API", pos: { top: '45%', left: '85%' }, status: 'ok', data: "CONNECTED" },
  ];

  return (
    <div className="relative aspect-[16/10] w-full bg-black/40 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl group/visual">
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      
      {/* Scanning Line */}
      <motion.div 
        animate={{ top: ['-10%', '110%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-accent-primary/10 to-transparent z-10 pointer-events-none"
      />

      {/* Disconnected Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="absolute z-20"
          style={node.pos}
        >
          <div className="relative group/node">
            {/* Glitch effect on hover or warning */}
            <div className={`p-4 rounded-xl bg-bg-elevated/80 backdrop-blur-md border transition-all duration-500 shadow-2xl min-w-[140px] ${
              node.status === 'ok' ? 'border-white/10 group-hover/node:border-green-500/50' : 
              node.status === 'warning' ? 'border-amber-500/30 animate-pulse' : 'border-red-500/40'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[9px] font-mono font-bold text-text-secondary/60 uppercase tracking-widest">{node.label}</span>
                <div className={`w-1.5 h-1.5 rounded-full ${
                  node.status === 'ok' ? 'bg-green-500' : 
                  node.status === 'warning' ? 'bg-amber-500' : 'bg-red-500'
                }`} />
              </div>
              
              <div className="space-y-1.5">
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: node.status === 'ok' ? '40%' : '85%' }}
                    className={`h-full ${node.status === 'ok' ? 'bg-green-500/40' : 'bg-red-500/40'}`}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[8px] font-mono text-text-secondary/40 uppercase">{node.data}</span>
                  <span className="text-[8px] font-mono text-text-secondary/20">ID: {node.id}0X</span>
                </div>
              </div>
            </div>

            {/* Warning Icon Overlay */}
            {node.status !== 'ok' && (
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center backdrop-blur-sm"
              >
                <Activity className="w-3 h-3 text-red-500" />
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}

      {/* Broken Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" viewBox="0 0 500 300">
        <motion.path 
          d="M 100 60 Q 180 100 250 80" 
          stroke="white" 
          strokeWidth="1" 
          strokeDasharray="4,4" 
          fill="none"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M 350 200 Q 400 150 450 220" 
          stroke="white" 
          strokeWidth="1" 
          strokeDasharray="4,4" 
          fill="none"
          animate={{ strokeDashoffset: [0, 20] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </svg>
      
      {/* Center Warning */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          <div className="absolute inset-0 bg-red-500/5 blur-[60px] rounded-full" />
          <div className="text-[12px] font-mono text-red-500/20 font-black uppercase tracking-[1em] rotate-[-15deg] select-none">
            FRAGMENTATION_ALERT
          </div>
        </div>
      </div>

      {/* Bottom Bar Info */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 backdrop-blur-md border-t border-white/5 flex justify-between items-center z-30">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="text-[8px] font-mono text-text-secondary uppercase tracking-widest">3 Critical Silos</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-[8px] font-mono text-text-secondary uppercase tracking-widest">2 Sync Warnings</span>
          </div>
        </div>
        <div className="text-[8px] font-mono text-text-secondary/40 uppercase tracking-widest">Diagnostic_Mode: Active</div>
      </div>
    </div>
  );
}

function SolutionControlLayer() {
  const blocks = [
    { 
      title: "Centralisez la supervision", 
      desc: "Tous vos environnements remontent dans une interface unique.",
      icon: Layout
    },
    { 
      title: "Simplifiez les opérations", 
      desc: "Vous réduisez la dispersion des outils et des pratiques.",
      icon: Zap
    },
    { 
      title: "Suivez vos environnements", 
      desc: "Vous savez ce qui tourne, où, et dans quel état.",
      icon: Search
    },
    { 
      title: "Réduisez la complexité", 
      desc: "Vous apportez de la cohérence sans tout reconstruire.",
      icon: Shield
    },
    { 
      title: "Évolution progressive", 
      desc: "Améliorez votre infrastructure sans repartir de zéro.",
      icon: RefreshCw
    },
  ];

  return (
    <section className="py-32 bg-bg-elevated/30 relative overflow-hidden">
      <div className="container mx-auto max-w-[1240px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          {/* Left: Content */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent-primary">
                  Couche de pilotage unifiée
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight text-gradient">
                CloudNaaba devient votre couche de pilotage unifiée.
              </h2>
              
              <p className="text-xl text-text-secondary leading-relaxed">
                Au lieu d’imposer une rupture, CloudNaaba vous permet de partir de ce que vous avez déjà.
              </p>

              <div className="p-8 rounded-3xl bg-accent-primary/5 border border-accent-primary/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Plus className="w-12 h-12 text-accent-primary" />
                </div>
                <p className="relative z-10 text-lg font-medium text-text-primary leading-relaxed">
                  Vous connectez vos serveurs existants à une interface centrale. 
                  <span className="block mt-4 text-accent-primary">
                    Vous obtenez une vue plus claire, une gestion plus homogène et une base plus saine pour évoluer.
                  </span>
                </p>
              </div>

              <div className="space-y-4 pt-8">
                {blocks.map((block, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent-primary/50 transition-colors">
                      <block.icon className="w-5 h-5 text-text-secondary group-hover:text-accent-primary transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary mb-1 group-hover:text-accent-primary transition-colors">{block.title}</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">{block.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Dashboard Transformation Visual */}
          <div className="lg:col-span-7 sticky top-32">
            <UnifiedDashboardVisual />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12 p-8 rounded-2xl border border-white/5 bg-white/[0.02] text-center"
            >
              <p className="text-xl font-bold text-text-primary/80 italic">
                "Le sujet n’est pas seulement de gérer des serveurs. <br />
                Le sujet est de rendre votre infrastructure <span className="text-accent-primary">lisible, maîtrisée et exploitable.</span>"
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UnifiedDashboardVisual() {
  const [isCentralized, setIsCentralized] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsCentralized(prev => !prev);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const servers = [
    { name: "prod-aws-01", env: "AWS", status: "Online", health: 98, cpu: "12%" },
    { name: "local-db-main", env: "Local", status: "Online", health: 94, cpu: "45%" },
    { name: "legacy-vps-old", env: "On-Prem", status: "Warning", health: 72, cpu: "82%" },
    { name: "worker-gcp-04", env: "GCP", status: "Online", health: 99, cpu: "08%" },
    { name: "backup-node", env: "Local", status: "Online", health: 100, cpu: "02%" },
  ];

  return (
    <div className="relative p-2 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent shadow-2xl">
      <div className="bg-bg-primary rounded-[2rem] overflow-hidden border border-white/10">
        {/* Dashboard Header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent-primary flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.4)]">
              <Layout className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-text-primary">CloudNaaba Core</div>
              <div className="text-[10px] text-text-secondary/60 font-mono">v2.4.0-stable</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-[9px] font-bold text-text-secondary/40 uppercase tracking-widest">Global Health</span>
              <span className="text-sm font-black text-green-400">92.4%</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-white/10" />
              <div className="w-2 h-2 rounded-full bg-white/10" />
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: "Connected Servers", val: "24", icon: Server },
              { label: "Environments", val: "6", icon: Globe },
              { label: "Active Alerts", val: "2", icon: Activity, color: "text-amber-400" },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <stat.icon className="w-3 h-3 text-text-secondary/40" />
                  <span className="text-[9px] font-bold text-text-secondary/40 uppercase tracking-widest">{stat.label}</span>
                </div>
                <div className={`text-xl font-black ${stat.color || 'text-text-primary'}`}>{stat.val}</div>
              </div>
            ))}
          </div>

          {/* Server List */}
          <div className="space-y-2 relative">
            <AnimatePresence mode="wait">
              {!isCentralized ? (
                <motion.div 
                  key="fragmented"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-bg-primary/80 backdrop-blur-sm z-20 rounded-xl border border-dashed border-white/10"
                >
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="mb-4"
                  >
                    <RefreshCw className="w-8 h-8 text-accent-primary/40" />
                  </motion.div>
                  <span className="text-xs font-mono text-text-secondary/60 uppercase tracking-[0.3em]">Discovering_Infrastructure...</span>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <div className="text-[10px] font-black text-text-secondary/40 uppercase tracking-widest mb-4 px-2">Active Nodes</div>
            
            {servers.map((server, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-accent-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${server.status === 'Online' ? 'bg-green-500' : 'bg-amber-500'}`} />
                  <div>
                    <div className="text-xs font-bold text-text-primary group-hover:text-accent-primary transition-colors">{server.name}</div>
                    <div className="text-[9px] text-text-secondary/40 font-medium">{server.env} • Node_ID: {i}04-AF</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-8">
                  <div className="hidden sm:flex flex-col items-end">
                    <span className="text-[8px] font-bold text-text-secondary/30 uppercase">CPU Load</span>
                    <span className="text-[10px] font-mono text-text-secondary/80">{server.cpu}</span>
                  </div>
                  <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${server.health}%` }}
                      className={`h-full ${server.health > 90 ? 'bg-green-500/40' : 'bg-amber-500/40'}`}
                    />
                  </div>
                  <div className="text-[10px] font-mono font-bold text-text-secondary/60 w-8 text-right">
                    {server.health}%
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="p-3 bg-accent-primary/5 border-t border-white/5 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="text-[8px] font-mono text-accent-primary font-bold uppercase tracking-widest">System_Status: Optimal</span>
            <span className="text-[8px] font-mono text-text-secondary/40 uppercase tracking-widest">Last_Sync: Just Now</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-accent-primary" />
            <span className="text-[8px] font-mono text-text-secondary/40 uppercase tracking-widest">Secure_Tunnel: Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HowItWorksHybrid({ onActionClick }: { onActionClick?: () => void }) {
  const steps = [
    {
      id: "connect",
      icon: <Globe className="w-6 h-6 text-accent-primary" />,
      title: "Connectez vos serveurs actuels",
      description: "Instances cloud, machines locales, serveurs physiques ou environnements existants.",
      visual: "nodes"
    },
    {
      id: "agent",
      icon: <Terminal className="w-6 h-6 text-accent-primary" />,
      title: "Installez l’agent CloudNaaba",
      description: "Un agent léger remonte les informations dans votre tableau de bord central.",
      visual: "terminal"
    },
    {
      id: "centralize",
      icon: <Layout className="w-6 h-6 text-accent-primary" />,
      title: "Centralisez la visibilité",
      description: "Tous vos environnements apparaissent dans une interface unique.",
      visual: "dashboard"
    },
    {
      id: "manage",
      icon: <Zap className="w-6 h-6 text-accent-primary" />,
      title: "Simplifiez la gestion",
      description: "Vous appliquez une logique plus homogène à vos opérations.",
      visual: "actions"
    },
    {
      id: "evolve",
      icon: <RefreshCw className="w-6 h-6 text-accent-primary" />,
      title: "Évoluez progressivement",
      description: "Vous conservez, améliorez ou migrez selon vos besoins.",
      visual: "transition"
    }
  ];

  return (
    <section className="py-48 relative overflow-hidden bg-bg-primary">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-accent-primary/5 border border-accent-primary/20 mb-8"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent-primary">
              Mise en place progressive
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8 text-gradient max-w-4xl mx-auto"
          >
            Commencez avec l’existant. Transformez ensuite ce qui mérite de l’être.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            CloudNaaba vous permet de connecter vos serveurs actuels et de centraliser leur gestion en quelques étapes simples.
          </motion.p>
        </div>

        {/* Pipeline Visual */}
        <div className="relative">
          {/* Animated Flow Line */}
          <div className="absolute top-[40px] left-0 w-full h-px hidden lg:block overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-full h-full bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-30"
            />
            <div className="absolute inset-0 bg-white/5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex flex-col items-center text-center"
              >
                {/* Step Icon Node */}
                <div className="relative mb-10">
                  <div className="w-20 h-20 rounded-3xl bg-bg-elevated border border-white/10 flex items-center justify-center shadow-2xl group-hover:border-accent-primary/50 transition-all duration-500 relative z-10">
                    {step.icon}
                  </div>
                  {/* Pulse Effect */}
                  <motion.div 
                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    className="absolute inset-0 rounded-3xl bg-accent-primary/20 -z-0"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4 mb-10">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed px-4">
                    {step.description}
                  </p>
                </div>

                {/* Mini Visual */}
                <div className="w-full aspect-video rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden p-4 flex items-center justify-center group-hover:bg-white/[0.04] group-hover:border-white/10 transition-all duration-500">
                  <StepVisual type={step.visual} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mini CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-32 text-center"
        >
          <button 
            onClick={onActionClick}
            className="group inline-flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors font-bold"
          >
            Voir comment connecter vos serveurs
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function StepVisual({ type }: { type: string }) {
  if (type === 'nodes') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              className="w-8 h-8 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center"
            >
              <Server className="w-4 h-4 text-accent-primary/40" />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'terminal') {
    return (
      <div className="w-full h-full bg-black/40 rounded-lg p-3 font-mono text-[10px] overflow-hidden text-left">
        <div className="flex gap-1.5 mb-2">
          <div className="w-2 h-2 rounded-full bg-red-500/40" />
          <div className="w-2 h-2 rounded-full bg-amber-500/40" />
          <div className="w-2 h-2 rounded-full bg-green-500/40" />
        </div>
        <div className="text-green-400/80">
          <span className="text-white/40">$</span> curl -sL get.cloudnaaba.io/agent | sh
          <motion.span 
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-1.5 h-3 bg-green-400 ml-1 translate-y-0.5"
          />
        </div>
        <div className="text-white/20 mt-1">
          &gt; Initializing agent...<br />
          &gt; Connecting to core...<br />
          &gt; Success.
        </div>
      </div>
    );
  }

  if (type === 'dashboard') {
    return (
      <div className="w-full h-full flex flex-col gap-2">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            className="h-6 rounded bg-white/5 border border-white/5 flex items-center px-2 gap-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/40" />
            <div className="h-1.5 w-16 bg-white/10 rounded-full" />
          </motion.div>
        ))}
      </div>
    );
  }

  if (type === 'actions') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-3 rounded-xl bg-accent-primary/10 border border-accent-primary/20"
        >
          <Zap className="w-8 h-8 text-accent-primary" />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                x: i % 2 === 0 ? [0, 40] : [0, -40],
                y: i < 3 ? [0, 40] : [0, -40],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              className="absolute w-1 h-1 bg-accent-primary rounded-full"
            />
          ))}
        </div>
      </div>
    );
  }

  if (type === 'transition') {
    return (
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
          <Server className="w-5 h-5 text-text-secondary/40" />
        </div>
        <motion.div 
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowRight className="w-4 h-4 text-accent-primary/40" />
        </motion.div>
        <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center">
          <RefreshCw className="w-6 h-6 text-accent-primary" />
        </div>
      </div>
    );
  }

  return null;
}

function BenefitsHybrid() {
  const benefits = [
    {
      icon: <Layout className="w-6 h-6 text-accent-primary" />,
      title: "Une seule interface de pilotage",
      description: "Vous évitez de gérer chaque environnement comme un système isolé. Simplification mentale immédiate."
    },
    {
      icon: <Eye className="w-6 h-6 text-accent-primary" />,
      title: "Une vision claire de l’existant",
      description: "Vous savez ce qui tourne, où, et dans quel état. Réduction drastique du flou technique."
    },
    {
      icon: <Layers className="w-6 h-6 text-accent-primary" />,
      title: "Des opérations plus cohérentes",
      description: "Vous appliquez une logique homogène à vos interventions et à vos mises à jour sur tout votre parc."
    },
    {
      icon: <Activity className="w-6 h-6 text-accent-primary" />,
      title: "Une surveillance unifiée",
      description: "Votre monitoring ne dépend plus d’outils dispersés ou d’habitudes individuelles par serveur."
    },
    {
      icon: <Filter className="w-6 h-6 text-accent-primary" />,
      title: "Réduction du chaos",
      description: "Vous réduisez les frictions liées à une infrastructure fragmentée et aux accès disparates."
    },
    {
      icon: <ArrowUp className="w-6 h-6 text-accent-primary" />,
      title: "Une trajectoire de modernisation",
      description: "Vous pouvez améliorer votre infrastructure sans tout reconstruire, de façon réaliste et progressive."
    }
  ];

  return (
    <section className="py-48 relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto max-w-[1240px] px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display mb-8 text-gradient"
          >
            Une meilleure maîtrise, sans transformation brutale.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            CloudNaaba vous apporte des bénéfices immédiats, sans vous imposer de refonte complète de votre infrastructure.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative p-8 rounded-[14px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-accent-primary/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle Gradient Sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Glow Effect */}
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-accent-primary/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Final Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-bold font-display text-text-primary/80 italic">
            "Vous n’avez pas besoin de tout refaire pour reprendre le contrôle."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ConnectExisting({ onActionClick }: { onActionClick?: () => void }) {
  const [typed, setTyped] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [terminalStep, setTerminalStep] = useState(0);
  const fullText = "curl -sL get.cloudnaaba.io/agent | sh";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        // Start terminal simulation after typing
        startTerminalSimulation();
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const startTerminalSimulation = async () => {
    const steps = [1, 2, 3, 4, 5, 6];
    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 600 + Math.random() * 400));
      setTerminalStep(step);
    }
  };

  const terminalLogs = [
    { id: 1, text: "> Installing CloudNaaba agent...", color: "text-white/60" },
    { id: 2, text: "> Connecting to infrastructure...", color: "text-white/60" },
    { id: 3, text: "> Server detected (AWS)", color: "text-accent-primary" },
    { id: 4, text: "> Server detected (Local)", color: "text-accent-primary" },
    { id: 5, text: "> Server detected (On-Prem)", color: "text-accent-primary" },
    { id: 6, text: "Sync complete ✓", color: "text-green-400 font-bold" },
  ];

  return (
    <section className="py-48 relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto max-w-[1240px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold font-display leading-tight text-gradient">
                Commencez par connecter ce que vous avez déjà.
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed">
                Pas besoin de tout reconstruire pour entrer dans un cadre plus propre. Avec l’agent CloudNaaba, vous pouvez connecter vos environnements existants et les faire remonter dans une interface centralisée.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Visibilité consolidée",
                "Suivi plus homogène",
                "Gestion plus structurée",
                "Trajectoire d’évolution claire"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent-primary" />
                  </div>
                  <span className="text-text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Code Block */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary/60">
                  Installation rapide
                </span>
              </div>
              <div className="relative group">
                <div className="absolute -inset-px bg-gradient-to-r from-accent-primary/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-black rounded-xl p-6 border border-white/10 flex items-center justify-between gap-4 overflow-hidden">
                  <code className="font-mono text-sm md:text-base text-white/90">
                    <span className="text-accent-primary mr-2">$</span>
                    {fullText}
                  </code>
                  <button 
                    onClick={copyToClipboard}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors relative z-10"
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-text-secondary" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <button 
                onClick={onActionClick}
                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-accent-primary text-white font-black text-lg shadow-2xl hover:scale-105 transition-transform"
              >
                Connecter l’existant
              </button>
              <button className="group flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors font-bold">
                Voir la documentation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex flex-wrap gap-8 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs text-text-secondary/60 uppercase tracking-widest font-bold">
                <Zap className="w-3 h-3 text-accent-primary" />
                Agent léger
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary/60 uppercase tracking-widest font-bold">
                <Zap className="w-3 h-3 text-accent-primary" />
                Installation rapide
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary/60 uppercase tracking-widest font-bold">
                <Zap className="w-3 h-3 text-accent-primary" />
                Multi-environnements
              </div>
            </div>

            <p className="text-sm text-text-secondary italic">
              Cette étape n’est pas une migration. C’est le début d’une reprise en main.
            </p>
          </motion.div>

          {/* Right Content - Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Glow */}
            <div className="absolute -inset-20 bg-accent-primary/10 blur-[100px] rounded-full" />
            
            <div className="relative bg-[#0D0D0D] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/30" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/30" />
                  <div className="w-3 h-3 rounded-full bg-green-500/30" />
                </div>
                <div className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-[0.2em]">
                  CloudNaaba v2.4 — Deployment
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-8 font-mono text-sm md:text-base min-h-[320px] space-y-3">
                <div className="flex gap-3 mb-6">
                  <span className="text-accent-primary">$</span>
                  <span className="text-white">{typed}</span>
                  <motion.span 
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-2 h-5 bg-accent-primary"
                  />
                </div>

                <div className="space-y-2">
                  {terminalLogs.map((log) => (
                    <AnimatePresence key={log.id}>
                      {terminalStep >= log.id && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className={log.color}
                        >
                          {log.text}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  ))}
                </div>

                {terminalStep === 6 && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mt-8 p-4 rounded-xl bg-green-500/5 border border-green-500/20 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-green-400 font-bold">Connexion établie</div>
                      <div className="text-[10px] text-green-400/60 uppercase tracking-widest">
                        3 serveurs synchronisés
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-bg-elevated border border-white/10 shadow-2xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center">
                  <Server className="w-6 h-6 text-accent-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text-primary">Infrastructure Ready</div>
                  <div className="text-[10px] text-text-secondary uppercase tracking-widest">Active Monitoring</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MigrationEvolution({ onActionClick }: { onActionClick?: () => void }) {
  const options = [
    { 
      title: "Conserver l’existant", 
      desc: "Vous gardez vos serveurs actuels et améliorez simplement leur pilotage. Une approche sécurisante sans changement immédiat.", 
      icon: Lock,
      badge: "Safe"
    },
    { 
      title: "Réorganiser progressivement", 
      desc: "Vous structurez votre infrastructure au fur et à mesure, sans rupture. Idéal pour une évolution douce et maîtrisée.", 
      icon: RefreshCw,
      badge: "Évolution"
    },
    { 
      title: "Migrer certaines briques", 
      desc: "Vous déplacez uniquement ce qui devient critique ou difficile à maintenir. Un choix stratégique, jamais imposé.", 
      icon: ArrowRight,
      badge: "Stratégique"
    },
  ];

  return (
    <section className="py-48 relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto max-w-[1240px] px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-display mb-8 text-gradient max-w-4xl mx-auto leading-tight"
          >
            Quand l’existant devient un frein, vous pouvez évoluer.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium"
          >
            CloudNaaba ne vous impose pas une migration. Mais vous donne un cadre pour la rendre possible, propre et progressive.
          </motion.p>
        </div>

        {/* Visual Schema */}
        <div className="flex justify-center mb-24">
          <div className="flex items-center gap-4 md:gap-12">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary text-xs font-bold">Keep</div>
              <span className="text-[10px] uppercase tracking-widest text-text-secondary/40 font-black">Existant</span>
            </div>
            <motion.div 
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-accent-primary/40"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary text-xs font-bold">Improve</div>
              <span className="text-[10px] uppercase tracking-widest text-accent-primary/60 font-black">Contrôle</span>
            </div>
            <motion.div 
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="text-accent-primary/40"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-accent-primary/20 border border-accent-primary/40 flex items-center justify-center text-accent-primary text-xs font-bold shadow-[0_0_20px_rgba(168,85,247,0.2)]">Transform</div>
              <span className="text-[10px] uppercase tracking-widest text-accent-primary font-black">Optimisé</span>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {options.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 rounded-3xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-accent-primary/30 transition-all duration-500 text-center flex flex-col"
            >
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary/60">{o.badge}</span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-accent-primary/5 flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover:border-accent-primary/20 group-hover:scale-110 transition-all duration-500">
                <o.icon className="w-8 h-8 text-accent-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors">{o.title}</h3>
              <p className="text-text-secondary leading-relaxed font-medium">{o.desc}</p>
              
              {/* Subtle Glow */}
              <div className="absolute inset-0 bg-accent-primary/5 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Context Explanation & Logos */}
        <div className="max-w-5xl mx-auto text-center space-y-16 py-16 border-y border-white/5 relative">
          {/* Subtle background glow for logos */}
          <div className="absolute inset-0 bg-accent-primary/5 blur-[100px] pointer-events-none" />
          
          <div className="space-y-10 relative z-10">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-accent-primary/80">Infrastructures concernées par l'évolution</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-90 transition-all duration-700">
              <img src="https://cdn.simpleicons.org/ibm/white" alt="IBM" className="h-8 md:h-11 hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
              <img src="https://cdn.simpleicons.org/intel/white" alt="Intel" className="h-8 md:h-11 hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
              <img src="https://cdn.simpleicons.org/oracle/white" alt="Oracle" className="h-8 md:h-11 hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
              <img src="https://cdn.simpleicons.org/cisco/white" alt="Cisco" className="h-8 md:h-11 hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
              <img src="https://cdn.simpleicons.org/dell/white" alt="Dell" className="h-8 md:h-11 hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
            </div>
          </div>
          
          <p className="text-xl md:text-3xl text-text-secondary leading-relaxed max-w-4xl mx-auto font-bold relative z-10">
            Certaines entreprises veulent conserver leur infrastructure actuelle. D’autres savent qu’une partie doit évoluer. 
            <span className="block mt-4 text-text-primary">CloudNaaba s’adapte à votre réalité, pas l’inverse.</span>
          </p>
        </div>


        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24">
          <button 
            onClick={onActionClick}
            className="px-10 py-5 rounded-2xl bg-accent-primary text-white font-black text-lg shadow-2xl hover:scale-105 transition-transform"
          >
            Demander de l’aide pour migrer
          </button>
          <button className="group flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors font-bold">
            Continuer avec l’existant
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Final Punchline */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl text-text-secondary italic max-w-2xl mx-auto">
            L’objectif n’est pas de vous imposer un changement brutal. L’objectif est de rendre la transition possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CompatibilityHybrid() {
  const blocks = [
    {
      title: "Systèmes supportés",
      icon: Server,
      items: [
        { name: "Ubuntu", logo: "https://cdn.simpleicons.org/ubuntu/E9430F" },
        { name: "Debian", logo: "https://cdn.simpleicons.org/debian/A81D33" },
        { name: "CentOS", logo: "https://cdn.simpleicons.org/centos/262577" },
        { name: "Windows", logo: "https://cdn.simpleicons.org/windows/0078D4" }
      ]
    },
    {
      title: "Types d’infrastructure",
      icon: Layers,
      items: [
        { name: "Serveurs physiques", logo: null },
        { name: "Machines locales", logo: null },
        { name: "Environnements dédiés", logo: null },
        { name: "On-premise", logo: null }
      ]
    },
    {
      title: "Cloud & fournisseurs",
      icon: Cloud,
      items: [
        { name: "AWS", logo: "https://icongr.am/simple/amazonaws.svg?color=ffffff" },
        { name: "OVH", logo: "https://cdn.simpleicons.org/ovh/white" },
        { name: "Google Cloud", logo: "https://cdn.simpleicons.org/googlecloud/white" },
        { name: "Infrastructure locale", logo: null }
      ]
    }
  ];

  return (
    <section className="py-48 relative overflow-hidden bg-bg-secondary/30">
      <div className="container mx-auto max-w-[1240px] px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-display mb-8 text-gradient max-w-4xl mx-auto leading-tight"
          >
            Compatible avec les environnements les plus courants.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            CloudNaaba s’adapte à des infrastructures diverses, qu’elles soient modernes ou historiques.
          </motion.p>
        </div>

        {/* Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center">
                  <block.icon className="w-6 h-6 text-accent-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">{block.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {block.items.map((item, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="px-6 py-3 rounded-xl bg-white/[0.02] border border-white/5 text-text-secondary text-sm font-medium hover:bg-white/[0.04] hover:border-accent-primary/30 transition-all cursor-default group relative overflow-hidden flex items-center gap-3"
                  >
                    {item.logo && (
                      <img 
                        src={item.logo} 
                        alt={item.name} 
                        className="w-4 h-4 grayscale group-hover:grayscale-0 transition-all" 
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonus UX Line */}
        <div className="text-center mb-16">
          <p className="text-lg text-text-secondary font-medium">
            Vous partez de ce que vous avez, <span className="text-text-primary">pas de ce que vous devriez avoir.</span>
          </p>
        </div>

        {/* Final Line */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-white/5 text-center"
        >
          <p className="text-text-secondary/60 text-sm uppercase tracking-widest font-bold">
            Cette compatibilité permet une adoption progressive, sans rupture.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function WhyHybrid() {
  const steps = [
    { label: "Connecter", desc: "Vous connectez votre existant", icon: Link },
    { label: "Observer", desc: "Vous voyez réellement ce qui se passe", icon: Eye },
    { label: "Comprendre", desc: "Vous comprenez votre système", icon: Brain },
    { label: "Améliorer", desc: "Vous corrigez ce qui pose problème", icon: Wrench },
    { label: "Évoluer", desc: "Vous modernisez progressivement", icon: ArrowUp },
  ];

  return (
    <section className="py-48 relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto max-w-[1240px] px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-display mb-8 text-gradient max-w-4xl mx-auto leading-tight"
          >
            Moderniser une infrastructure ne commence pas toujours par une migration.
          </motion.h2>
        </div>

        {/* Contrast Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {/* Fausse Croyance */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-white/[0.01] border border-white/5 opacity-60 hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center gap-3 mb-8 text-text-secondary/60">
              <XCircle className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Ce que beaucoup pensent</span>
            </div>
            <ul className="space-y-6">
              {["Tout reconstruire", "Tout migrer", "Tout repenser", "Tout arrêter"].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-text-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Réalité */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-12 rounded-3xl bg-accent-primary/5 border border-accent-primary/20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-accent-primary/5 blur-3xl -z-10" />
            <div className="flex items-center gap-3 mb-8 text-accent-primary">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Ce qui fonctionne réellement</span>
            </div>
            <ul className="space-y-6">
              {["Connecter", "Centraliser", "Observer", "Comprendre", "Améliorer progressivement"].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-text-primary">
                  <div className="w-2 h-2 rounded-full bg-accent-primary shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                  <span className="text-xl font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Timeline Flow */}
        <div className="relative mb-32">
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-primary/20 group-hover:border-accent-primary/40 transition-all duration-500">
                  <step.icon className="w-8 h-8 text-text-secondary group-hover:text-accent-primary transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-text-primary">{step.label}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Editorial Block */}
        <div className="max-w-3xl mx-auto text-center space-y-8 mb-32">
          <p className="text-xl text-text-secondary leading-relaxed">
            Beaucoup d’entreprises ne modernisent pas leur infrastructure parce qu’elles pensent devoir tout reconstruire. 
            <span className="block mt-6 text-text-primary font-medium">En réalité, la première étape utile est souvent plus simple : reprendre de la visibilité et du contrôle.</span>
          </p>
        </div>

        {/* Final Statement */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-3xl bg-gradient-to-br from-accent-primary/10 to-transparent border border-accent-primary/20 text-center"
        >
          <p className="text-2xl md:text-3xl font-display font-bold text-text-primary leading-tight">
            CloudNaaba rend cette trajectoire plus réaliste.<br />
            <span className="text-accent-primary">Et donc réellement actionnable.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function HybridFAQ() {
  const [openId, setOpenId] = useState<string | null>("migration");

  const faqs = [
    {
      id: "migration",
      question: "Faut-il migrer immédiatement pour utiliser CloudNaaba ?",
      answer: "Non. Vous pouvez commencer par connecter vos serveurs existants et centraliser leur gestion, sans migration. C'est le principe même de notre approche hybride."
    },
    {
      id: "keep",
      question: "Puis-je garder mes serveurs actuels ?",
      answer: "Oui. L’approche CloudNaaba est justement conçue pour fonctionner avec votre infrastructure actuelle. Vous gardez votre matériel et vos contrats, nous ajoutons le pilotage."
    },
    {
      id: "local",
      question: "Est-ce compatible avec des serveurs locaux ou sur site ?",
      answer: "Oui. Tant que l’environnement est supporté, vous pouvez connecter des machines locales, des serveurs physiques ou des environnements on-premise."
    },
    {
      id: "control",
      question: "Est-ce que je garde la main sur mon infrastructure ?",
      answer: "Oui. CloudNaaba ajoute une couche de pilotage et de visibilité, mais ne vous retire pas le contrôle de vos systèmes. Vous restez maître de vos machines."
    },
    {
      id: "later",
      question: "Puis-je migrer plus tard si nécessaire ?",
      answer: "Oui. Vous pouvez évoluer progressivement, en fonction de vos besoins et de vos priorités. CloudNaaba est le cadre qui rend cette évolution possible."
    },
    {
      id: "complex",
      question: "Est-ce compliqué à mettre en place ?",
      answer: "Non. L’installation de l’agent est simple et permet de connecter rapidement vos environnements existants. Quelques minutes suffisent pour obtenir vos premiers indicateurs."
    },
    {
      id: "target",
      question: "À qui cette solution s’adresse-t-elle le mieux ?",
      answer: "Aux entreprises qui ont déjà une infrastructure en place et qui veulent retrouver de la visibilité, de la cohérence et une trajectoire d’évolution sans tout casser."
    }
  ];

  const highlights = [
    { id: "migration", label: "Faut-il migrer ?" },
    { id: "keep", label: "Garder mes serveurs ?" },
    { id: "control", label: "Garder la main ?" },
    { id: "complex", label: "Est-ce compliqué ?" }
  ];

  const toggleId = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-hybrid" className="py-48 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto max-w-[900px] px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-bold uppercase tracking-[0.2em] mb-8">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ Hybride</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-8 tracking-tight text-gradient">
            Questions fréquentes.
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-[600px] mx-auto leading-relaxed">
            Les points les plus importants avant de connecter votre infrastructure.
          </p>
        </motion.div>

        {/* Highlight Chips */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {highlights.map((chip) => (
            <button
              key={chip.id}
              onClick={() => setOpenId(chip.id)}
              className={`px-6 py-2.5 rounded-full border text-sm font-bold transition-all duration-300 tracking-tight ${
                openId === chip.id 
                  ? 'bg-accent-primary/10 border-accent-primary/30 text-accent-primary' 
                  : 'bg-white/[0.03] border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-primary/30 hover:bg-accent-primary/5'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="mb-24">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`premium-card overflow-hidden transition-all duration-500 mb-4 ${
                openId === faq.id ? 'border-accent-primary/30 bg-accent-primary/[0.02]' : 'hover:border-white/10'
              }`}
            >
              <button
                onClick={() => toggleId(faq.id)}
                className="w-full p-8 text-left flex items-center justify-between group"
              >
                <span className={`text-xl font-bold transition-colors duration-300 ${
                  openId === faq.id ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'
                }`}>
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                  openId === faq.id ? 'bg-accent-primary text-white rotate-180' : 'bg-white/5 text-text-secondary group-hover:bg-white/10'
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-8 pb-8 text-lg text-text-secondary leading-relaxed border-t border-white/5 pt-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Final Reassurance */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center p-12 rounded-[2rem] bg-gradient-to-b from-white/[0.02] to-transparent border border-border-subtle"
        >
          <p className="text-text-secondary text-xl md:text-2xl leading-relaxed italic font-medium">
            Vous pouvez commencer simplement, sans transformation brutale, <br className="hidden md:block" />
            <span className="text-text-primary">et structurer votre infrastructure progressivement.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}

function FinalCTA({ onConnectClick, onMigrationClick, onDocClick }: { onConnectClick?: () => void; onMigrationClick?: () => void; onDocClick?: () => void }) {
  return (
    <section className="py-48 relative overflow-hidden bg-bg-primary">
      {/* Background Halo */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/5 blur-[120px] rounded-full -z-10"
      />

      <div className="container mx-auto max-w-[1240px] px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Title */}
          <h2 className="text-4xl md:text-7xl font-bold font-display text-text-primary mb-8 tracking-tight leading-tight">
            Gardez votre infrastructure. <br className="hidden md:block" />
            <span className="text-gradient">Reprenez la main sur sa gestion.</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            CloudNaaba vous permet de centraliser votre infrastructure existante, d’améliorer sa lisibilité, puis d’évoluer progressivement selon vos besoins.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 mb-16">
            <motion.button 
              onClick={onConnectClick}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 rounded-2xl bg-accent-primary text-white font-black text-lg shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all"
            >
              Connecter l’existant
            </motion.button>
            <motion.button 
              onClick={onMigrationClick}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              className="px-10 py-5 rounded-2xl bg-white/5 text-text-primary border border-white/10 font-bold text-lg transition-all"
            >
              Demander un accompagnement migration
            </motion.button>
            <button 
              onClick={onDocClick}
              className="text-text-secondary hover:text-text-primary font-bold text-lg transition-colors relative group"
            >
              Voir la documentation
              <span className="absolute bottom-0 left-0 w-0 h-px bg-text-primary transition-all group-hover:w-full" />
            </button>
          </div>

          {/* Trust Line */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-bold text-text-secondary/60 uppercase tracking-widest mb-12">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-primary" />
              <span>Compatible cloud, local et on-prem</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-primary" />
              <span>Installation rapide via agent</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-primary" />
              <span>Aucune migration obligatoire</span>
            </div>
          </div>

          {/* Infra Line (Signature) */}
          <div className="pt-12 border-t border-white/5">
            <p className="text-xs font-bold text-text-secondary/40 uppercase tracking-[0.3em]">
              AWS • OVH • Google Cloud • Serveurs locaux • On-prem • Environnements existants
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
