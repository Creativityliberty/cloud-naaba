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
    <section id="how-it-works" className="py-32 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-8 tracking-tight">
            Une mise en route <span className="text-accent-primary">maîtrisée.</span>
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-[700px] mx-auto leading-relaxed">
            Passez du code à l’exploitation en trois étapes claires, sans friction technique.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Stepper */}
          <div className="lg:col-span-5 space-y-6 relative">
            {/* Timeline Line Pro */}
            <div className="absolute left-[39px] top-10 bottom-10 w-px bg-white/5 overflow-hidden">
              <motion.div 
                className="w-full h-full bg-gradient-to-b from-accent-primary via-accent-primary to-transparent"
                initial={{ y: '-100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            {steps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20, rotate: 0.5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.id * 0.1, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActiveStep(step.id)}
                className={`group relative p-8 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  activeStep === step.id 
                    ? 'bg-bg-elevated border-accent-primary/30 shadow-2xl' 
                    : 'bg-transparent border-transparent hover:bg-white/5'
                }`}
              >
                <div className="flex items-start gap-6 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 border ${
                    activeStep === step.id 
                      ? 'bg-accent-primary text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]' 
                      : 'bg-bg-elevated text-text-secondary border-border-subtle group-hover:border-accent-primary/30'
                  }`}>
                    <step.icon className="w-6 h-6" />
                    {/* Glowing Dot Node */}
                    {activeStep === step.id && (
                      <motion.div 
                        layoutId="activeDot"
                        className="absolute -left-[31px] w-3 h-3 rounded-full bg-accent-primary shadow-[0_0_10px_rgba(124,58,237,0.8)]"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />
                    )}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold mb-3 transition-colors tracking-tight ${
                      activeStep === step.id ? 'text-text-primary' : 'text-text-secondary'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-lg leading-relaxed transition-colors ${
                      activeStep === step.id ? 'text-text-secondary' : 'text-text-secondary/60'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Visual Preview */}
          <div className="lg:col-span-7 sticky top-32">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[16/10] rounded-3xl bg-bg-elevated border border-border-subtle shadow-2xl overflow-hidden group"
            >
              {/* Micro Grid Background */}
              <div className="absolute inset-0 opacity-[0.03]" 
                   style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
              />
              
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-transparent" />
              
              <div className="relative h-full p-10 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.1, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    {activeStep === 1 && (
                      <div className="relative w-full max-w-[300px] aspect-square flex items-center justify-center">
                        <div className="absolute inset-0 bg-accent-primary/20 rounded-full blur-[60px]" />
                        <div className="relative z-10 p-8 rounded-3xl bg-black border border-accent-primary/30 shadow-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                              <GitBranch className="text-accent-primary w-6 h-6" />
                            </div>
                            <div className="h-2 w-24 bg-white/10 rounded" />
                          </div>
                          <div className="space-y-3">
                            <div className="h-1.5 w-full bg-white/5 rounded" />
                            <div className="h-1.5 w-4/5 bg-white/5 rounded" />
                            <div className="h-1.5 w-2/3 bg-white/5 rounded" />
                          </div>
                          <div className="mt-8 flex justify-end">
                            <div className="px-4 py-2 rounded-lg bg-accent-primary text-[10px] font-bold text-white">Connecté</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeStep === 2 && (
                      <div className="relative w-full max-w-[300px] aspect-square flex items-center justify-center">
                        <div className="absolute inset-0 bg-accent-primary/20 rounded-full blur-[60px]" />
                        <div className="relative z-10 p-8 rounded-3xl bg-black border border-accent-primary/30 shadow-2xl w-full">
                          <div className="flex items-center justify-between mb-8">
                            <Shield className="text-accent-primary w-8 h-8" />
                            <div className="text-[10px] font-mono text-accent-primary/60 tracking-widest">SÉCURITÉ_ACTIVE</div>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="h-1.5 w-20 bg-white/10 rounded" />
                              <div className="w-8 h-4 bg-accent-primary/40 rounded-full" />
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="h-1.5 w-24 bg-white/10 rounded" />
                              <div className="w-8 h-4 bg-accent-primary rounded-full" />
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="h-1.5 w-16 bg-white/10 rounded" />
                              <div className="w-8 h-4 bg-accent-primary rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeStep === 3 && (
                      <div className="relative w-full max-w-[300px] aspect-square flex items-center justify-center">
                        <div className="absolute inset-0 bg-accent-primary/20 rounded-full blur-[60px]" />
                        <div className="relative z-10 p-8 rounded-3xl bg-black border border-accent-primary/30 shadow-2xl text-center">
                          <div className="w-16 h-16 rounded-full bg-accent-primary/20 flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="text-accent-primary w-8 h-8" />
                          </div>
                          <h4 className="text-white font-bold mb-2">Service en ligne</h4>
                          <p className="text-accent-primary/60 text-[10px] font-mono mb-6">https://app.cloudnaaba.io</p>
                          <div className="flex justify-center gap-2">
                            {[1,2,3,4,5].map(i => (
                              <motion.div 
                                key={i}
                                animate={{ height: [4, 12, 4] }}
                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                className="w-1 bg-accent-primary/40 rounded-full"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Final CTA hint */}
              {activeStep === 3 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                  <button className="btn-primary px-6 py-2 text-sm font-bold text-white flex items-center gap-2">
                    Voir comment démarrer
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
