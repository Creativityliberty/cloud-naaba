import React from 'react';
import { motion } from 'motion/react';
import { Rocket, RefreshCw, Lock, Layout, Server, Infinity as InfinityIcon, ArrowDown } from 'lucide-react';

const commonFeatures = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Déploiement simplifié",
    description: "Mettez en ligne vos applications sans manipulation serveur complexe."
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Mises à jour illimitées",
    description: "Déployez autant de versions que nécessaire sans contrainte."
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "HTTPS inclus",
    description: "La sécurité de base est intégrée dès le départ."
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Tableau de bord",
    description: "Suivez et gérez vos services depuis une interface centralisée."
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Environnement managé",
    description: "Vous exploitez vos applications sans gérer toute l’infrastructure."
  },
  {
    icon: <InfinityIcon className="w-6 h-6" />,
    title: "Sans engagement",
    description: "Vous gardez la liberté d’adapter votre usage à tout moment."
  }
];

export default function IncludedPricing() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42 }}
            className="text-3xl md:text-4xl font-bold text-text-primary mb-4 tracking-tight"
          >
            Tout ce dont vous avez besoin, <span className="text-accent-primary">inclus dès le départ</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, delay: 0.1 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto font-medium"
          >
            Chaque plan CloudNaaba repose sur un socle conçu pour simplifier l’exploitation de vos applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commonFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: i * 0.06 }}
              className="p-8 rounded-[14px] bg-white/[0.02] border border-white/[0.06] hover:border-accent-primary/30 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-accent-primary/0 group-hover:bg-accent-primary/[0.02] transition-colors duration-300" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-6 group-hover:scale-105 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual reinforcement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-text-secondary tracking-widest uppercase">
            Inclus dans tous les plans CloudNaaba
          </span>
        </motion.div>

        {/* Transition to pricing plans */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-text-primary font-bold text-xl tracking-tight">
              Choisissez maintenant la formule adaptée à votre niveau de besoin
            </p>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-accent-primary"
            >
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
