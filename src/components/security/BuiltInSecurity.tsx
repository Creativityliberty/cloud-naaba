import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, Layers, Settings, ArrowRight } from 'lucide-react';

const securityPillars = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent-primary" />,
    title: "Protection réseau intégrée",
    description: "Atténuation des attaques courantes pour limiter l’impact sur vos services exposés."
  },
  {
    icon: <Lock className="w-8 h-8 text-accent-primary" />,
    title: "Chiffrement des échanges",
    description: "HTTPS activé par défaut pour sécuriser les communications entre vos utilisateurs et vos applications."
  },
  {
    icon: <Layers className="w-8 h-8 text-accent-primary" />,
    title: "Cloisonnement des environnements",
    description: "Isolation des services pour limiter la propagation des incidents et renforcer la stabilité."
  },
  {
    icon: <Settings className="w-8 h-8 text-accent-primary" />,
    title: "Exploitation plus homogène",
    description: "Un cadre structuré qui réduit les erreurs manuelles et améliore la cohérence globale."
  }
];

export default function BuiltInSecurity() {
  return (
    <section className="py-32 relative overflow-hidden bg-bg-primary">
      {/* Premium subtle glow for solution focus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        {/* Header Block */}
        <div className="max-w-4xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] tracking-tight mb-8 text-gradient"
          >
            Des protections intégrées dès le départ, pas ajoutées après coup.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium max-w-2xl"
          >
            CloudNaaba intègre un ensemble de protections conçues pour renforcer la base de vos services et réduire les risques les plus courants.
          </motion.p>
        </div>

        {/* Security Pillars - 4 large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {securityPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] hover:border-accent-primary/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-2xl"
            >
              {/* Subtle accent glow on hover */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-5 group-hover:text-accent-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed font-medium">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Line - Product Orientation anchor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto text-center border-t border-white/5 pt-24"
        >
          <div className="bg-layered p-12 rounded-[3rem] border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <p className="relative z-10 text-2xl md:text-3xl font-medium text-text-primary leading-tight mb-10 max-w-3xl mx-auto">
              La sécurité ne s'improvise pas à la dernière minute. <br />
              <span className="text-accent-primary italic">C'est le fondement invisible et natif de toute notre architecture.</span>
            </p>
            <div className="flex items-center justify-center gap-3 text-[11px] font-black uppercase tracking-[0.4em] text-text-secondary/40">
              <span>Expertise Technique Intégrée</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
