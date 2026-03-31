import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Rocket, Shield } from 'lucide-react';

const decisionBlocks = [
  {
    label: "Démarrage",
    title: "Découverte",
    description: "Valider une idée, tester un projet ou lancer un service simple.",
    icon: <Sparkles className="w-5 h-5" />,
    highlight: false,
  },
  {
    label: "Recommandé",
    title: "Pro",
    description: "Applications actives, PME et services en croissance.",
    icon: <Rocket className="w-5 h-5" />,
    highlight: true,
  },
  {
    label: "Critique",
    title: "Business",
    description: "Projets sensibles qui nécessitent stabilité et continuité.",
    icon: <Shield className="w-5 h-5" />,
    highlight: false,
  }
];

export default function DecisionHelper({ onPlanSelect }: { onPlanSelect?: (plan: string) => void }) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-6"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-primary">Guide de choix</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold font-display tracking-tight leading-[1.1] text-gradient"
          >
            Besoin d'aide pour choisir ?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {decisionBlocks.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: i * 0.06 }}
              onClick={() => onPlanSelect?.(block.title)}
              className={`p-8 rounded-[14px] cursor-pointer transition-all duration-300 group relative overflow-hidden ${
                block.highlight 
                  ? 'bg-accent-primary/[0.03] border-2 border-accent-primary/40 shadow-[0_0_30px_-10px_rgba(124,58,237,0.2)] scale-[1.02]' 
                  : 'bg-white/[0.02] border border-white/[0.06] hover:border-white/20'
              }`}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-accent-primary/0 group-hover:bg-accent-primary/[0.02] transition-colors duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full ${
                    block.highlight ? 'bg-accent-primary text-white' : 'bg-white/10 text-text-secondary'
                  }`}>
                    {block.label}
                  </span>
                  <div className={`text-accent-primary transition-transform duration-500 group-hover:scale-110 ${
                    block.highlight ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'
                  }`}>
                    {block.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-text-primary mb-3 tracking-tight">
                  {block.title}
                </h3>
                <p className="text-text-secondary leading-relaxed font-medium text-[15px]">
                  {block.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary/60 text-lg font-medium">
            Vous pouvez commencer simplement et évoluer à tout moment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
