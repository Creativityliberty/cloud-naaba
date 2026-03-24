import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GitBranch, Shield, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Connectez votre source",
    description: "Liez votre dépôt GitHub ou GitLab en un clic. CloudNaaba détecte automatiquement votre stack.",
    icon: GitBranch,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    preview: "git-connect"
  },
  {
    id: 2,
    title: "Configurez votre cadre",
    description: "Définissez vos variables d'environnement et vos besoins en ressources. Pas de fichiers YAML complexes.",
    icon: Shield,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    preview: "config-env"
  },
  {
    id: 3,
    title: "Déployez & Exploitez",
    description: "CloudNaaba construit, sécurise et met en ligne votre application. La supervision commence immédiatement.",
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    preview: "deploy-live"
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="how-it-works" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto max-w-[1100px] px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            De l'idée à la <span className="text-violet-400">production.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-[600px] mx-auto">
            Trois étapes simples pour transformer votre code en un service stable et sécurisé.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Interactive Steps */}
          <div className="space-y-6">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-full text-left p-8 rounded-2xl border transition-all duration-500 flex gap-6 ${
                  activeStep === step.id 
                    ? 'bg-white/[0.04] border-violet-500/30 shadow-[0_0_30px_rgba(139,92,246,0.1)]' 
                    : 'bg-transparent border-white/5 hover:border-white/10'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-500 ${
                  activeStep === step.id ? step.bg : 'bg-white/5'
                }`}>
                  <step.icon className={`w-6 h-6 transition-colors duration-500 ${
                    activeStep === step.id ? step.color : 'text-white/20'
                  }`} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 transition-colors duration-500 ${
                    activeStep === step.id ? 'text-white' : 'text-white/40'
                  }`}>
                    {step.id}. {step.title}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-500 ${
                    activeStep === step.id ? 'text-text-secondary' : 'text-text-secondary/30'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Visual Preview */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full h-full flex items-center justify-center p-12"
              >
                {activeStep === 1 && (
                  <div className="relative w-full max-w-[300px] aspect-square flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[60px]" />
                    <div className="relative z-10 p-8 rounded-3xl bg-black border border-blue-500/30 shadow-2xl">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                          <GitBranch className="text-blue-400 w-6 h-6" />
                        </div>
                        <div className="h-2 w-24 bg-white/10 rounded" />
                      </div>
                      <div className="space-y-3">
                        <div className="h-1.5 w-full bg-white/5 rounded" />
                        <div className="h-1.5 w-4/5 bg-white/5 rounded" />
                        <div className="h-1.5 w-2/3 bg-white/5 rounded" />
                      </div>
                      <div className="mt-8 flex justify-end">
                        <div className="px-4 py-2 rounded-lg bg-blue-500 text-[10px] font-bold text-white">Connecté</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="relative w-full max-w-[300px] aspect-square flex items-center justify-center">
                    <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-[60px]" />
                    <div className="relative z-10 p-8 rounded-3xl bg-black border border-violet-500/30 shadow-2xl w-full">
                      <div className="flex items-center justify-between mb-8">
                        <Shield className="text-violet-400 w-8 h-8" />
                        <div className="text-[10px] font-mono text-violet-400/60 tracking-widest">SECURITY_ON</div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="h-1.5 w-20 bg-white/10 rounded" />
                          <div className="w-8 h-4 bg-violet-500/40 rounded-full" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="h-1.5 w-24 bg-white/10 rounded" />
                          <div className="w-8 h-4 bg-violet-500 rounded-full" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="h-1.5 w-16 bg-white/10 rounded" />
                          <div className="w-8 h-4 bg-violet-500 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="relative w-full max-w-[300px] aspect-square flex items-center justify-center">
                    <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-[60px]" />
                    <div className="relative z-10 p-8 rounded-3xl bg-black border border-amber-500/30 shadow-2xl text-center">
                      <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="text-amber-400 w-8 h-8" />
                      </div>
                      <h4 className="text-white font-bold mb-2">Service Live</h4>
                      <p className="text-amber-400/60 text-[10px] font-mono mb-6">https://app.cloudnaaba.io</p>
                      <div className="flex justify-center gap-2">
                        {[1,2,3,4,5].map(i => (
                          <motion.div 
                            key={i}
                            animate={{ height: [4, 12, 4] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                            className="w-1 bg-amber-400/40 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
