import React from 'react';
import { motion } from 'motion/react';
import { Server, Lock, Search, UserCheck, ArrowRight, ShieldAlert } from 'lucide-react';

interface AdvancedSecurityProps {
  onExpertClick: () => void;
}

const premiumFeatures = [
  { icon: Server, text: "Isolation physique dédiée" },
  { icon: Lock, text: "Connexion VPN sécurisée" },
  { icon: Search, text: "Audit de sécurité" },
  { icon: UserCheck, text: "Accompagnement expert" }
];

export default function AdvancedSecurity({ onExpertClick }: AdvancedSecurityProps) {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Very subtle enterprise background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-accent-primary/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-5xl font-bold font-display leading-[1.1] tracking-tight mb-8 text-white"
          >
            Certaines exigences dépassent le socle standard.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-text-secondary leading-relaxed font-medium mx-auto"
          >
            Si votre organisation a des besoins plus élevés en sécurité, gouvernance ou isolation, CloudNaaba propose des solutions adaptées à des environnements plus critiques.
          </motion.p>
        </div>

        {/* Premium Card - The Masterpiece */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="max-w-4xl mx-auto relative group"
        >
          {/* Subtle outer glow on hover */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary/0 via-accent-primary/10 pos to-accent-primary/0 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-500" />
          
          <div className="relative p-12 md:p-16 rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 hover:border-accent-primary/30 transition-all duration-700 overflow-hidden shadow-2xl">
            
            {/* Inner background noise/texture for premium feel */}
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            
            <div className="flex flex-col md:flex-row gap-16 relative z-10">
              
              {/* Left Side: Pitch */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                  <ShieldAlert className="w-4 h-4 text-white" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">Cloud privé & sécurité avancée</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug">
                  Infrastructure dédiée, isolée des environnements mutualisés, conçue pour les contextes sensibles et les exigences élevées.
                </h3>
                
                <p className="text-lg text-text-secondary leading-relaxed mb-10">
                  Pour les organisations qui ont besoin d’un niveau de maîtrise, de gouvernance et de continuité supérieur au standard.
                </p>
                
                <button 
                  onClick={onExpertClick}
                  className="group/btn relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium transition-all hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10 font-bold">Parler à un expert sécurité</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </button>
              </div>
              
              {/* Right Side: Features */}
              <div className="flex-1 md:border-l border-white/10 md:pl-16 flex flex-col justify-center">
                <ul className="space-y-8">
                  {premiumFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0">
                        <feature.icon className="w-5 h-5 text-accent-primary" />
                      </div>
                      <span className="text-lg font-medium text-white/90">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          </div>
        </motion.div>

        {/* Bonus Line / Signature Block */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="flex items-center justify-center gap-6 text-sm font-medium text-text-secondary/60 mb-8 uppercase tracking-widest">
            <span>Approche sur mesure</span>
            <span className="w-1 h-1 rounded-full bg-accent-primary/50" />
            <span>Environnement dédié</span>
            <span className="w-1 h-1 rounded-full bg-accent-primary/50" />
            <span>Sécurité renforcée</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-display font-medium text-text-primary">
            Quand les enjeux sont critiques, <br className="hidden md:block" />
            <span className="text-white/40 italic">l’infrastructure doit l’être aussi.</span>
          </h3>
        </motion.div>

      </div>
    </section>
  );
}
