import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Cpu, CheckCircle2 } from 'lucide-react';

export default function AiFinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative p-12 md:p-24 glass-card border-accent-primary/40 bg-accent-primary/5 text-center overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-accent-primary/10 blur-[120px] rounded-full -z-10" />
          
          <div className="relative z-10 max-w-[800px] mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-8">
              <Cpu className="w-4 h-4 text-accent-primary" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent-primary">Prêt à commencer ?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold font-display leading-[1.1] mb-8 text-text-primary tracking-tight">
              Reprenez le contrôle de <span className="text-accent-primary text-glow">votre IA.</span>
            </h2>
            
            <p className="text-xl text-text-secondary leading-relaxed mb-12 max-w-[640px] mx-auto">
              Déployez Ollama en un clic sur CloudNaaba et commencez à construire vos usages d'IA privée dès aujourd'hui.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <button className="btn-primary px-10 py-5 text-white font-bold flex items-center gap-2 group text-lg w-full sm:w-auto justify-center">
                Installer Ollama
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold flex items-center gap-2 transition-all w-full sm:w-auto justify-center">
                <MessageSquare className="w-5 h-5 text-accent-primary" />
                Contacter un expert
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-primary" />
                <span className="text-sm font-bold text-text-secondary uppercase tracking-widest">Souveraineté Totale</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-primary" />
                <span className="text-sm font-bold text-text-secondary uppercase tracking-widest">Déploiement en 1 clic</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-primary" />
                <span className="text-sm font-bold text-text-secondary uppercase tracking-widest">Support Expert</span>
              </div>
            </div>
          </div>

          {/* Abstract Visual Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent-primary/5 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-primary/5 blur-[80px] rounded-full translate-x-1/2 translate-y-1/2" />
        </motion.div>

      </div>
    </section>
  );
}
