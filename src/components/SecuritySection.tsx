import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Activity, CheckCircle2 } from 'lucide-react';

const trustItems = [
  {
    title: "Sécurité intégrée dès le départ",
    description: "Pas ajoutée après coup, mais incluse dans la base d’exploitation.",
    icon: <Shield className="w-5 h-5 text-violet-400" />
  },
  {
    title: "Exploitation maîtrisée",
    description: "Moins de manipulations manuelles, moins de risques humains.",
    icon: <Lock className="w-5 h-5 text-violet-400" />
  },
  {
    title: "Continuité mieux cadrée",
    description: "Surveillance, stabilité et cadre opérationnel plus clair.",
    icon: <Activity className="w-5 h-5 text-violet-400" />
  },
  {
    title: "Gouvernance plus défendable",
    description: "Moins d’outils dispersés, plus de cohérence.",
    icon: <CheckCircle2 className="w-5 h-5 text-violet-400" />
  }
];

export default function SecuritySection() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#050505]">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display max-w-[800px] leading-tight">
            Ce qui est critique pour votre activité <span className="text-violet-400">mérite un cadre sérieux.</span>
          </h2>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left - Editorial Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-medium text-white/90 leading-snug">
                Quand une entreprise gère des données importantes, la question n’est pas seulement : <span className="text-white">où héberger ?</span>
              </p>
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                La vraie question est : comment garantir un niveau de maîtrise, de continuité et de sécurité compatible avec les enjeux métier ?
              </p>
            </div>
            
            <div className="pt-8 border-t border-white/10">
              <p className="text-lg text-violet-400 font-medium">
                CloudNaaba a été conçu pour répondre à cette exigence.
              </p>
            </div>

            <div className="hidden lg:block pt-12">
              <p className="text-text-secondary/60 text-sm max-w-[400px] leading-relaxed italic">
                "Pour une PME sérieuse comme pour une organisation sensible, la stabilité n’est pas un luxe. C’est une condition de confiance."
              </p>
            </div>
          </motion.div>

          {/* Right - Trust Block */}
          <div className="lg:col-span-6 space-y-6">
            {trustItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/20 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex gap-5">
                  <div className="mt-1 w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 group-hover:bg-violet-500/20 transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-1 group-hover:text-violet-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Mobile only final block */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="lg:hidden pt-8 text-center"
            >
              <p className="text-text-secondary/60 text-sm italic leading-relaxed">
                "Pour une PME sérieuse comme pour une organisation sensible, la stabilité n’est pas un luxe. C’est une condition de confiance."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
