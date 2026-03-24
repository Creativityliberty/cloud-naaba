import React from 'react';
import { motion } from 'motion/react';
import { Building2, ShieldCheck, Terminal, ChevronRight } from 'lucide-react';

const targets = [
  {
    title: "PME en digitalisation",
    description: "Vous avez un site important, une plateforme métier ou un portail client. Vous voulez un déploiement propre et fiable, sans devoir construire une équipe d’exploitation.",
    benefit: "Un service plus stable, plus propre, plus facile à faire évoluer",
    icon: <Building2 className="w-8 h-8 text-violet-400" />
  },
  {
    title: "Organisations à données sensibles",
    description: "Santé, finance, éducation, ONG ou services critiques : quand la continuité et la sécurité comptent, l’improvisation n’est pas une option.",
    benefit: "Un cadre d’exploitation plus maîtrisé, orienté sécurité et gouvernance",
    icon: <ShieldCheck className="w-8 h-8 text-violet-400" />
  },
  {
    title: "Équipes techniques légères",
    description: "Vous avez des développeurs, mais pas d’ingénieur infra dédié. Vous ne voulez pas transformer votre équipe produit en équipe de maintenance.",
    benefit: "Une stack exploitable sans complexifier votre organisation",
    icon: <Terminal className="w-8 h-8 text-violet-400" />
  }
];

export default function TargetAudience() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#050505]">
      <div className="container mx-auto max-w-[1240px] px-6">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 max-w-[900px] mx-auto leading-tight">
            Pensé pour les entreprises qui ont des projets sérieux, <span className="text-violet-400">sans vouloir gérer une usine technique.</span>
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-[750px] mx-auto leading-relaxed">
            CloudNaaba s’adresse aux structures qui veulent exploiter leurs applications correctement, sans complexifier leur organisation.
          </p>
        </motion.div>

        {/* Target Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {targets.map((target, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-8 md:p-10 rounded-[20px] bg-[#0D0D11] border border-white/5 hover:border-violet-main/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Soft Halo Effect */}
              <div className="absolute -inset-1 rounded-[20px] bg-violet-600/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none" />

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-violet-main/10 flex items-center justify-center mb-8 border border-violet-main/20 group-hover:bg-violet-main/20 transition-colors relative z-10">
                {target.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 flex-grow">
                <h3 className="text-2xl font-bold mb-6 text-text-primary group-hover:text-violet-alt transition-colors">
                  {target.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-8 text-lg">
                  {target.description}
                </p>
              </div>

              {/* Micro Benefit */}
              <div className="relative z-10 pt-8 border-t border-white/5 mt-auto">
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                  <p className="text-sm font-medium text-violet-300/90 italic leading-snug">
                    {target.benefit}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional Micro CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <button className="group flex items-center gap-2 mx-auto text-text-secondary hover:text-violet-400 transition-colors text-sm font-medium">
            <span>Voir comment CloudNaaba s’intègre à votre cas</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
