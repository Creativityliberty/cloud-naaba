import React from 'react';
import { motion } from 'motion/react';
import { Cpu, MessageSquare, Image, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const models = [
  {
    name: "Llama 3.1",
    provider: "Meta",
    size: "8B / 70B / 405B",
    type: "Text / Vision",
    description: "Le modèle le plus performant de Meta, idéal pour une large gamme d'applications.",
    icon: <MessageSquare className="w-5 h-5" />,
    badge: "POPULAR"
  },
  {
    name: "Mistral Nemo",
    provider: "Mistral AI",
    size: "12B",
    type: "Text",
    description: "Un modèle compact et puissant, optimisé pour l'efficacité et la précision.",
    icon: <Zap className="w-5 h-5" />,
    badge: "EFFICIENT"
  },
  {
    name: "Gemma 2",
    provider: "Google",
    size: "9B / 27B",
    type: "Text",
    description: "Modèle léger et performant de Google, conçu pour la rapidité et la polyvalence.",
    icon: <Cpu className="w-5 h-5" />,
    badge: "FAST"
  },
  {
    name: "Phi-3",
    provider: "Microsoft",
    size: "3.8B / 14B",
    type: "Text",
    description: "Modèle compact de Microsoft, idéal pour les environnements à ressources limitées.",
    icon: <MessageSquare className="w-5 h-5" />,
    badge: "LIGHTWEIGHT"
  },
  {
    name: "Llava",
    provider: "Open Source",
    size: "7B / 13B",
    type: "Vision",
    description: "Modèle multimodal capable de comprendre et de décrire des images.",
    icon: <Image className="w-5 h-5" />,
    badge: "MULTIMODAL"
  },
  {
    name: "CodeLlama",
    provider: "Meta",
    size: "7B / 13B / 34B",
    type: "Code",
    description: "Modèle spécialisé dans la génération et l'explication de code informatique.",
    icon: <Cpu className="w-5 h-5" />,
    badge: "DEV"
  }
];

export default function AiCatalogue() {
  return (
    <section className="py-32 relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display leading-tight tracking-tight mb-8"
          >
            Un catalogue de <span className="text-accent-primary">modèles.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary leading-relaxed max-w-[700px] mx-auto"
          >
            Déployez les meilleurs modèles open source en un clic sur votre infrastructure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 glass-card overflow-hidden border-white/5 hover:border-accent-primary/40 transition-colors"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors">
                    <div className="text-accent-primary">{model.icon}</div>
                  </div>
                  <div className="px-2 py-1 rounded bg-accent-primary/10 border border-accent-primary/20 text-[8px] font-bold text-accent-primary tracking-widest uppercase">
                    {model.badge}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
                    {model.name}
                  </h3>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">by {model.provider}</span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Size:</span>
                    <span className="text-[10px] font-bold text-accent-primary/80 uppercase tracking-widest">{model.size}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Type:</span>
                    <span className="text-[10px] font-bold text-accent-primary/80 uppercase tracking-widest">{model.type}</span>
                  </div>
                </div>

                <p className="text-text-secondary leading-relaxed mb-8">
                  {model.description}
                </p>

                <button className="flex items-center gap-2 text-sm font-bold text-accent-primary hover:text-white transition-colors group/btn">
                  Déployer ce modèle
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
