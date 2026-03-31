import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, Clock, Shuffle, LayoutDashboard, RefreshCw, Sliders, ArrowRight, X, Check } from 'lucide-react';

const chaosItems = [
  { icon: Clock, text: "Mises à jour irrégulières" },
  { icon: Shuffle, text: "Interventions manuelles répétées" },
  { icon: AlertCircle, text: "Oublis de configuration" },
  { icon: X, text: "Manque de visibilité" },
  { icon: X, text: "Pratiques hétérogènes" }
];

const structuredItems = [
  { icon: Sliders, text: "Déploiement structuré" },
  { icon: RefreshCw, text: "Mises à jour simplifiées" },
  { icon: LayoutDashboard, text: "Tableau de bord centralisé" },
  { icon: Check, text: "Environnements lisibles" },
  { icon: Check, text: "Cadre homogène" }
];

export default function OperationalSecurity() {
  return (
    <section className="py-32 relative overflow-hidden bg-bg-elevated/20">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-5xl font-bold font-display leading-[1.1] tracking-tight mb-8 text-gradient"
          >
            La sécurité dépend aussi de la manière dont un service est exploité au quotidien.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-text-secondary leading-relaxed font-medium mx-auto max-w-3xl"
          >
            Une grande partie du risque vient de tâches répétitives mal gérées, de configurations oubliées et d’une visibilité insuffisante sur les environnements.
          </motion.p>
        </div>

        {/* Split Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          
          {/* Left: Chaos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-10 rounded-[2.5rem] bg-black/40 border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-red-500/20" />
            
            <h3 className="text-2xl font-bold text-text-primary/70 mb-8 flex items-center gap-3">
              <span className="text-red-400">×</span> Exploitation fragile
            </h3>
            
            <ul className="space-y-6 relative z-10">
              {chaosItems.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-text-secondary/50" />
                  </div>
                  <span className="text-text-secondary/80 font-medium text-lg">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Chaotic Visual Background */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none p-10">
              <svg width="200" height="200" viewBox="0 0 200 200">
                <path d="M 20 180 L 50 120 L 80 150 L 120 80 L 150 100 L 180 20" stroke="white" strokeWidth="2" fill="none" className="animate-pulse" />
                <rect x="30" y="40" width="40" height="40" stroke="white" strokeWidth="2" fill="none" transform="rotate(15 50 60)" />
                <circle cx="140" cy="150" r="20" stroke="white" strokeWidth="2" fill="none" />
                <line x1="80" y1="40" x2="160" y2="180" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </motion.div>

          {/* Right: Structured */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-accent-primary/20 relative overflow-hidden group shadow-[0_0_40px_rgba(124,58,237,0.05)] hover:shadow-[0_0_60px_rgba(124,58,237,0.1)] hover:border-accent-primary/40 transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent-primary/80 to-blue-500/80" />
            <div className="absolute right-0 top-0 w-64 h-64 bg-accent-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-3">
              <span className="text-accent-primary">✓</span> Cadre maîtrisé
            </h3>
            
            <ul className="space-y-6 relative z-10">
              {structuredItems.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center shrink-0 group-hover:bg-accent-primary/20 transition-colors">
                    <item.icon className="w-4 h-4 text-accent-primary" />
                  </div>
                  <span className="text-text-primary font-bold text-lg">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Structured Visual Background */}
            <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none p-10">
              <svg width="200" height="200" viewBox="0 0 200 200">
                {/* Clean Grid */}
                <rect x="20" y="20" width="70" height="70" rx="8" stroke="#7c3aed" strokeWidth="2" fill="none" />
                <rect x="110" y="20" width="70" height="70" rx="8" stroke="#7c3aed" strokeWidth="2" fill="none" />
                <rect x="20" y="110" width="70" height="70" rx="8" stroke="#7c3aed" strokeWidth="2" fill="none" />
                <rect x="110" y="110" width="70" height="70" rx="8" stroke="#7c3aed" strokeWidth="2" fill="none" />
                
                {/* Connecting Lines */}
                <line x1="90" y1="55" x2="110" y2="55" stroke="#7c3aed" strokeWidth="2" opacity="0.5" />
                <line x1="55" y1="90" x2="55" y2="110" stroke="#7c3aed" strokeWidth="2" opacity="0.5" />
                
                {/* Animated Flow Dot */}
                <motion.circle 
                  cx="55" 
                  cy="70" 
                  r="3" 
                  fill="#7c3aed" 
                  animate={{ cx: [55, 90, 110, 145], cy: [70, 70, 55, 55] }} 
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            </div>
          </motion.div>

        </div>

        {/* Closing Strict Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block p-px rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8 w-64" />
          <h3 className="text-2xl md:text-3xl font-display font-medium text-text-primary leading-tight">
            La sécurité n’est pas seulement une couche de protection. <br />
            <span className="text-accent-primary">C’est une discipline d’exploitation.</span>
          </h3>
        </motion.div>

      </div>
    </section>
  );
}
