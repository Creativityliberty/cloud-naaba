import React from 'react';
import { motion } from 'motion/react';
import { Box, Rocket, Layers, MessageSquare, Share2, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

const steps = [
  {
    title: "Choisissez Ollama",
    description: "Depuis le catalogue CloudNaaba, sélectionnez Ollama pour créer votre environnement IA.",
    icon: <Box className="w-6 h-6" />,
    visual: (
      <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-black/40 rounded-xl border border-white/5">
        <div className="w-12 h-12 rounded-xl bg-accent-primary/20 flex items-center justify-center mb-4 border border-accent-primary/40">
          <Box className="w-6 h-6 text-accent-primary" />
        </div>
        <div className="px-4 py-2 rounded-lg bg-accent-primary text-[10px] font-bold text-white uppercase tracking-widest shadow-[0_0_15px_rgba(124,58,237,0.4)]">
          Deploy
        </div>
      </div>
    )
  },
  {
    title: "Déployez en 1 clic",
    description: "CloudNaaba prépare automatiquement l’environnement sans manipulation serveur.",
    icon: <Rocket className="w-6 h-6" />,
    visual: (
      <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-black/40 rounded-xl border border-white/5">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="w-6 h-6 text-accent-primary" />
          </motion.div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Provisioning...</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
          <CheckCircle2 className="w-3 h-3 text-green-500" />
          <span className="text-[8px] font-bold text-green-500 uppercase tracking-widest">Environment ready</span>
        </div>
      </div>
    )
  },
  {
    title: "Chargez vos modèles",
    description: "Utilisez Llama, Mistral ou d’autres modèles open source selon vos besoins.",
    icon: <Layers className="w-6 h-6" />,
    visual: (
      <div className="w-full h-full flex flex-col p-4 bg-black/40 rounded-xl border border-white/5">
        <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
          <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Model Library</span>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
            <span className="text-[9px] font-medium text-white">Llama 3.1</span>
            <span className="text-[7px] font-bold text-accent-primary uppercase">Running</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5 opacity-50">
            <span className="text-[9px] font-medium text-white">Mistral</span>
            <span className="text-[7px] font-bold text-gray-500 uppercase">Idle</span>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Commencez à interagir",
    description: "Discutez avec votre IA et testez vos cas d’usage directement.",
    icon: <MessageSquare className="w-6 h-6" />,
    visual: (
      <div className="w-full h-full flex flex-col p-4 bg-black/40 rounded-xl border border-white/5">
        <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
          <div className="w-2 h-2 rounded-full bg-accent-primary" />
          <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Ollama Chat</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-end">
            <div className="bg-accent-primary/20 px-2 py-1.5 rounded-lg text-[8px] text-white max-w-[80%]">
              Explique-moi le RAG...
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-white/5 px-2 py-1.5 rounded-lg text-[8px] text-gray-400 max-w-[80%]">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              >
                Le RAG permet d'enrichir...
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Ajoutez des briques",
    description: "Connectez Flowise, n8n, bases de données et interfaces pour enrichir votre système.",
    icon: <Share2 className="w-6 h-6" />,
    visual: (
      <div className="w-full h-full flex items-center justify-center p-4 bg-black/40 rounded-xl border border-white/5 relative overflow-hidden">
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-accent-primary/20 border border-accent-primary/40 flex items-center justify-center">
            <Box className="w-4 h-4 text-accent-primary" />
          </div>
          <div className="w-4 h-px bg-accent-primary/40 relative">
            <motion.div 
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-accent-primary shadow-[0_0_8px_#7c3aed]"
            />
          </div>
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
            <Share2 className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        {/* Background grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#7c3aed 0.5px, transparent 0.5px)', backgroundSize: '10px 10px' }} />
      </div>
    )
  }
];

export default function AiHowItWorks() {
  return (
    <section className="py-48 relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        
        <div className="text-center mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] tracking-tight mb-8"
          >
            De l’idée à une IA exploitable, <br />
            <span className="text-accent-primary">en quelques étapes simples.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary leading-relaxed max-w-[800px] mx-auto"
          >
            CloudNaaba structure le déploiement pour transformer une intention en environnement IA fonctionnel, sans complexité serveur.
          </motion.p>
        </div>

        {/* Pipeline Flow Container */}
        <div className="relative">
          {/* Animated Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-[140px] left-0 w-full h-px bg-white/5 overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-accent-primary to-transparent"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col"
              >
                {/* Step Visual Preview */}
                <div className="aspect-video lg:aspect-square mb-8 relative">
                  <div className="absolute inset-0 glass-card border-white/5 group-hover:border-accent-primary/40 transition-all duration-500 overflow-hidden">
                    {step.visual}
                  </div>
                  
                  {/* Node on the line */}
                  <div className="hidden lg:block absolute -bottom-[24px] left-1/2 -translate-x-1/2 z-20">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        boxShadow: ["0 0 0px rgba(124,58,237,0)", "0 0 10px rgba(124,58,237,0.4)", "0 0 0px rgba(124,58,237,0)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 rounded-full bg-accent-primary border-2 border-bg-primary"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 lg:pt-8">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors">
                      {step.icon}
                    </div>
                    <span className="text-xs font-black text-accent-primary/40 uppercase tracking-widest">0{index + 1}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mini CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 text-center"
        >
          <button className="inline-flex items-center gap-2 text-sm font-bold text-accent-primary hover:text-white transition-colors group">
            Voir comment démarrer
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
