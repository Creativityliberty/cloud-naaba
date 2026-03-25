import React from 'react';
import { motion } from 'motion/react';
import { Building2, Shield, Code, Network, ArrowRight } from 'lucide-react';

const targets = [
  {
    title: "PME",
    description: "Vous voulez utiliser l’IA pour vos équipes ou vos opérations, sans exposer vos données sensibles ni gérer une infrastructure complexe.",
    benefit: "Une IA utile, sans surcharge technique",
    icon: <Building2 className="w-6 h-6 text-accent-primary" />
  },
  {
    title: "Organisations avec données sensibles",
    description: "Santé, finance, éducation, juridique, ONG… Quand la confidentialité et la gouvernance comptent, l’environnement d’exécution devient critique.",
    benefit: "Une IA compatible avec vos exigences de sécurité",
    icon: <Shield className="w-6 h-6 text-accent-primary" />
  },
  {
    title: "Équipes techniques légères",
    description: "Vous avez des développeurs, mais pas d’équipe infra dédiée. Vous voulez avancer vite sans construire une architecture lourde.",
    benefit: "Une IA exploitable sans DevOps complexe",
    icon: <Code className="w-6 h-6 text-accent-primary" />
  },
  {
    title: "Structures qui construisent des workflows",
    description: "Vous ne cherchez pas un outil. Vous cherchez une brique IA intégrable dans vos processus internes.",
    benefit: "Une IA connectée à votre système réel",
    icon: <Network className="w-6 h-6 text-accent-primary" />
  }
];

export default function AiTarget() {
  return (
    <section className="py-48 relative overflow-hidden bg-bg-primary">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        
        <div className="text-center mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] tracking-tight mb-8"
          >
            Pensé pour les organisations qui veulent <br />
            <span className="text-accent-primary">utiliser l’IA sérieusement.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary leading-relaxed max-w-[800px] mx-auto"
          >
            CloudNaaba s’adresse aux structures qui veulent exploiter l’IA dans un cadre maîtrisé, sans complexifier leur infrastructure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {targets.map((target, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-12 premium-card overflow-hidden bg-bg-elevated/30 border border-white/5 hover:border-accent-primary/20 transition-all duration-500"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-accent-primary/10 flex items-center justify-center mb-10 border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors">
                  {target.icon}
                </div>
                
                <h3 className="text-3xl font-bold mb-6 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
                  {target.title}
                </h3>
                
                <p className="text-text-secondary text-lg leading-relaxed mb-10">
                  {target.description}
                </p>

                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                  <span className="text-sm font-bold text-accent-primary uppercase tracking-widest">
                    {target.benefit}
                  </span>
                  <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-accent-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-32 text-center"
        >
          <p className="text-2xl md:text-3xl font-medium text-text-secondary leading-tight tracking-tight">
            Une IA devient réellement intéressante lorsqu’elle <span className="text-text-primary">s’intègre à votre organisation.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
