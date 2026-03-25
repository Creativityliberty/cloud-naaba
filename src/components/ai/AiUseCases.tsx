import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Search, FileText, Users, Zap, TestTube, ArrowRight } from 'lucide-react';

const useCases = [
  {
    title: "Assistant interne",
    description: "Aidez vos équipes à retrouver rapidement des informations ou produire des réponses plus vite.",
    icon: <MessageSquare className="w-6 h-6 text-accent-primary" />,
    preview: (
      <div className="w-full h-full bg-black/40 rounded-xl border border-white/5 p-4 flex flex-col gap-3">
        <div className="flex justify-end">
          <div className="bg-accent-primary/20 px-3 py-2 rounded-lg text-[9px] text-white">Comment poser un congé ?</div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white/5 px-3 py-2 rounded-lg text-[9px] text-gray-400 border border-white/5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5 }}
              className="h-2 bg-gray-600 rounded-full mb-1.5"
            />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="h-2 bg-gray-600 rounded-full"
            />
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Base de connaissances",
    description: "Interrogez vos documents, procédures et contenus métier en langage naturel.",
    icon: <Search className="w-6 h-6 text-accent-primary" />,
    preview: (
      <div className="w-full h-full bg-black/40 rounded-xl border border-white/5 p-4">
        <div className="relative mb-4">
          <div className="w-full h-8 bg-white/5 rounded-lg border border-white/10 flex items-center px-3 gap-2">
            <Search className="w-3 h-3 text-gray-500" />
            <span className="text-[9px] text-gray-500">Rechercher un contrat...</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="p-2 rounded bg-accent-primary/5 border border-accent-primary/20">
            <div className="flex items-center gap-2 mb-1">
              <FileText className="w-3 h-3 text-accent-primary" />
              <span className="text-[8px] font-bold text-white uppercase tracking-widest">Contrat_V2.pdf</span>
            </div>
            <div className="h-1 bg-accent-primary/20 rounded-full w-full" />
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Aide à la rédaction",
    description: "Générez, résumez et structurez vos contenus plus rapidement.",
    icon: <FileText className="w-6 h-6 text-accent-primary" />,
    preview: (
      <div className="w-full h-full bg-black/40 rounded-xl border border-white/5 p-4">
        <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="space-y-2">
          <div className="h-2 bg-white/10 rounded-full w-full" />
          <div className="h-2 bg-white/10 rounded-full w-5/6" />
          <div className="h-2 bg-accent-primary/40 rounded-full w-4/6 animate-pulse" />
        </div>
      </div>
    )
  },
  {
    title: "Copilote métier",
    description: "Créez un assistant adapté à vos fonctions internes (support, ops, RH…).",
    icon: <Users className="w-6 h-6 text-accent-primary" />,
    preview: (
      <div className="w-full h-full bg-black/40 rounded-xl border border-white/5 p-4 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-2 w-full">
          <div className="h-12 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center">
            <div className="w-6 h-1 bg-accent-primary/40 rounded-full" />
          </div>
          <div className="h-12 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center">
            <div className="w-6 h-1 bg-accent-primary rounded-full" />
          </div>
          <div className="h-12 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center">
            <div className="w-6 h-1 bg-accent-primary/40 rounded-full" />
          </div>
          <div className="h-12 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center">
            <div className="w-6 h-1 bg-accent-primary/40 rounded-full" />
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Automatisation intelligente",
    description: "Déclenchez des actions et connectez vos outils avec n8n ou Flowise.",
    icon: <Zap className="w-6 h-6 text-accent-primary" />,
    preview: (
      <div className="w-full h-full bg-black/40 rounded-xl border border-white/5 p-4 flex items-center justify-center relative">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-accent-primary/20 border border-accent-primary/40 flex items-center justify-center">
            <Zap className="w-4 h-4 text-accent-primary" />
          </div>
          <div className="w-8 h-px bg-accent-primary/40 relative">
            <motion.div 
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-primary shadow-[0_0_8px_#7c3aed]"
            />
          </div>
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10" />
        </div>
      </div>
    )
  },
  {
    title: "Expérimentation encadrée",
    description: "Testez des usages IA dans un cadre propre avant de les déployer à grande échelle.",
    icon: <TestTube className="w-6 h-6 text-accent-primary" />,
    preview: (
      <div className="w-full h-full bg-black/40 rounded-xl border border-white/5 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Sandbox Env</div>
          <div className="px-1.5 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-[6px] font-bold text-green-500 uppercase">Isolated</div>
        </div>
        <div className="space-y-2">
          <div className="h-1 bg-white/10 rounded-full w-full" />
          <div className="h-1 bg-white/10 rounded-full w-full" />
          <div className="h-1 bg-white/10 rounded-full w-3/4" />
        </div>
      </div>
    )
  }
];

export default function AiUseCases() {
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
            Une IA utile, <br />
            <span className="text-accent-primary">pas juste une démonstration technique.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary leading-relaxed max-w-[800px] mx-auto"
          >
            Votre IA devient réellement intéressante lorsqu’elle s’intègre dans vos usages quotidiens.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col premium-card overflow-hidden p-0 bg-bg-elevated/30"
            >
              {/* Preview Area */}
              <div className="aspect-video p-8 bg-black/20 border-b border-white/5 overflow-hidden">
                {useCase.preview}
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-6 border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors">
                  {useCase.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
                  {useCase.title}
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 text-center"
        >
          <p className="text-2xl md:text-3xl font-medium text-text-secondary leading-tight tracking-tight">
            Une IA devient vraiment utile lorsqu’elle <span className="text-text-primary">s’intègre dans vos workflows réels.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
