import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Layers, Grid, Wrench, CheckCircle2 } from 'lucide-react';

const differences = [
  {
    title: "Du test à la mise en production",
    description: "CloudNaaba réduit l’écart entre expérimenter une IA et l’utiliser réellement dans votre organisation.",
    icon: <Rocket className="w-6 h-6" />
  },
  {
    title: "Un cadre d’exécution clair",
    description: "Votre IA fonctionne dans un environnement structuré, compréhensible et maîtrisé par vos équipes.",
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: "Plus qu’un modèle : un système",
    description: "Vous pouvez construire autour de votre IA une stack complète : données, automatisation, interfaces, workflows.",
    icon: <Grid className="w-6 h-6" />
  },
  {
    title: "Moins de complexité technique",
    description: "Vous évitez de devoir assembler manuellement tous les composants nécessaires pour faire fonctionner votre IA.",
    icon: <Wrench className="w-6 h-6" />
  },
  {
    title: "Un usage réellement exploitable",
    description: "Les équipes peuvent utiliser l’IA dans un cadre cohérent, sans rester bloquées en phase de test.",
    icon: <CheckCircle2 className="w-6 h-6" />
  }
];

export default function AiDifference() {
  return (
    <section className="py-48 relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        
        <div className="max-w-[900px] mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] tracking-tight mb-8"
          >
            Une IA privée n’a de valeur que si elle est <br />
            <span className="text-accent-primary">réellement déployable.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary leading-relaxed max-w-[800px]"
          >
            CloudNaaba ne se limite pas à vous donner accès à une IA. <br className="hidden md:block" />
            La plateforme vous permet de la déployer, de l’exploiter et de la faire évoluer dans un cadre clair.
          </motion.p>
        </div>

        <div className="space-y-6">
          {differences.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 rounded-3xl bg-bg-elevated/30 border border-white/5 hover:border-accent-primary/20 hover:bg-bg-elevated/50 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
                <div className="w-16 h-16 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-accent-primary border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors shrink-0">
                  {diff.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
                    {diff.title}
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed max-w-[700px]">
                    {diff.description}
                  </p>
                </div>

                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full border border-accent-primary/20 flex items-center justify-center text-accent-primary">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
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
          className="mt-32 pt-24 border-t border-white/5 text-center"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-text-secondary leading-tight max-w-[1000px] mx-auto">
            Ici, l’objectif n’est pas de rendre l’IA impressionnante. <br />
            <span className="text-text-primary">L’objectif est de la rendre réellement utilisable.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
