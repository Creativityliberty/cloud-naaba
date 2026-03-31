import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Database, Layout, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AiSolution({ onActionClick }: { onActionClick?: () => void }) {
  return (
    <section className="py-32 relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-soft border border-accent-primary/20 mb-8">
                <span className="text-[11px] font-bold uppercase tracking-widest text-accent-primary">
                  La solution CloudNaaba IA
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-8 text-gradient tracking-tight">
                Votre IA, vos données, <br />
                votre infrastructure.
              </h2>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-10 max-w-[640px]">
                Nous créons une couche d'IA privée au-dessus de votre infrastructure CloudNaaba. Déployez Ollama et connectez vos documents en toute sécurité.
              </p>
              
              <div className="space-y-6 mb-12">
                <SolutionItem text="Modèles open source (Llama, Mistral, etc.)" />
                <SolutionItem text="Traitement local sans fuite de données" />
                <SolutionItem text="Connecteurs pour vos documents internes" />
                <SolutionItem text="API sécurisée pour vos applications" />
              </div>

              <button 
                onClick={onActionClick}
                className="btn-primary px-8 py-4 text-white font-bold flex items-center gap-2 group"
              >
                Découvrir le fonctionnement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Visual - AI Infra Diagram */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square max-w-[500px] mx-auto"
            >
              {/* Abstract AI Pipeline */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-12">
                
                {/* Data Source */}
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-48 p-4 glass-card border-accent-primary/20 flex items-center gap-3"
                >
                  <Database className="w-5 h-5 text-accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Documents</span>
                    <span className="text-[8px] font-bold text-accent-primary/60">SOURCE PRIVÉE</span>
                  </div>
                </motion.div>

                {/* Connection Line */}
                <div className="w-px h-12 bg-gradient-to-b from-accent-primary/50 to-transparent" />

                {/* Processing Core */}
                <motion.div 
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-56 p-6 glass-card border-accent-primary/40 bg-accent-primary/5 relative"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-primary/20 flex items-center justify-center p-2">
                      <img 
                        src="https://ollama.com/public/ollama.png" 
                        alt="Ollama" 
                        className="w-full h-full object-contain filter brightness-0 invert" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-white uppercase tracking-widest">Ollama Core</span>
                      <span className="text-[9px] font-bold text-accent-primary/60">TRAITEMENT LOCAL</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: ['30%', '80%', '50%'] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="h-full bg-accent-primary" 
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Connection Line */}
                <div className="w-px h-12 bg-gradient-to-b from-accent-primary/50 to-transparent" />

                {/* Output/App */}
                <motion.div 
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-48 p-4 glass-card border-accent-primary/20 flex items-center gap-3"
                >
                  <Layout className="w-5 h-5 text-accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Interface</span>
                    <span className="text-[8px] font-bold text-accent-primary/60">USAGE RÉEL</span>
                  </div>
                </motion.div>

              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-accent-primary/10 blur-[120px] rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 className="w-5 h-5 text-accent-primary" />
      <span className="text-lg text-text-secondary font-medium">{text}</span>
    </div>
  );
}
