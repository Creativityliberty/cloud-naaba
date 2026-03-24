import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, UserMinus, Layout } from 'lucide-react';

const proofBlocks = [
  {
    title: "Moins de dépendance humaine",
    description: "CloudNaaba réduit la dépendance à une expertise infra rare et difficile à maintenir dans une PME.",
    icon: <UserMinus className="w-6 h-6" />
  },
  {
    title: "Mise en ligne plus rapide",
    description: "Les déploiements sont cadrés, automatisés et reproductibles pour une agilité réelle.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Réduction des risques",
    description: "Moins d'interventions manuelles signifie moins d'erreurs humaines et plus de stabilité.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Socle structuré",
    description: "Vos projets reposent sur une base claire, stable et évolutive dès le premier jour.",
    icon: <Layout className="w-6 h-6" />
  }
];

const metrics = [
  { label: "Temps de mise en ligne", value: "-80%", sub: "en moyenne" },
  { label: "Incidents critiques", value: "Minimal", sub: "par design" },
  { label: "Temps de maintenance", value: "-60%", sub: "réduction" },
  { label: "Déploiement", value: "Minutes", sub: "vs heures" }
];

const caseStudies = [
  {
    type: "Plateforme métier PME",
    outcome: "Déploiement simplifié et exploitation stabilisée sans équipe infra dédiée."
  },
  {
    type: "Application SaaS B2B",
    outcome: "Migration vers un socle sécurisé et automatisé en moins de 48h."
  }
];

export default function ProofSection() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-[1100px] px-6 relative z-10">
        {/* Header */}
        <div className="max-w-[850px] mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display mb-8 leading-tight"
          >
            Une plateforme utile se juge sur ce qu’elle <span className="text-violet-400">simplifie</span> et sur ce qu’elle <span className="text-violet-400">sécurise.</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border-l-2 border-violet-500/30 pl-8"
          >
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-[700px]">
              CloudNaaba est conçu pour répondre à des besoins concrets : réduire la complexité, sécuriser l’exploitation et offrir un cadre plus fiable aux entreprises.
            </p>
          </motion.div>
        </div>

        {/* Proof Blocks Grid - Balanced 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {proofBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/20 hover:bg-white/[0.04] transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                {block.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-violet-300 transition-colors">
                {block.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {block.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Metrics Row - Clean and data-focused */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-y border-white/5 mb-24 bg-white/[0.01]">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-400 mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-text-secondary/40">
                {metric.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies Placeholders - Balanced 2 columns */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-secondary/40 whitespace-nowrap">
              Contextes d'application
            </h4>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 via-white/10 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-10 rounded-2xl border border-dashed border-white/10 flex flex-col justify-center items-center text-center hover:border-violet-500/20 transition-colors duration-500"
              >
                <div className="text-white font-bold mb-3 text-lg">{item.type}</div>
                <p className="text-sm text-text-secondary italic leading-relaxed max-w-[300px]">
                  "{item.outcome}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final Statement */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center max-w-[600px] mx-auto"
        >
          <p className="text-text-secondary/60 text-lg md:text-xl font-medium">
            L’exploitation devient <span className="text-white">plus simple</span>, <span className="text-white">plus stable</span> et <span className="text-white">plus défendable</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
