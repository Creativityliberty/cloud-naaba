import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const externalPoints = [
  "Vous démarrez rapidement",
  "Mais vous dépendez d’une plateforme tierce",
  "Les usages sensibles deviennent difficiles à cadrer",
  "La gouvernance reste floue",
  "L’intégration profonde est limitée"
];

const cloudnaabaPoints = [
  "Vous gardez un environnement dédié",
  "Vous structurez vos usages IA",
  "Vous réduisez la dépendance externe",
  "Vous maîtrisez mieux vos données sensibles",
  "Vous construisez un système évolutif"
];

export default function AiComparison() {
  return (
    <section className="py-48 relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] tracking-tight mb-8"
          >
            Tester l’IA est facile. <br />
            <span className="text-accent-primary">La maîtriser vraiment est autre chose.</span>
          </motion.h2>
        </div>

        {/* Comparison Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">
          
          {/* Left - External Service */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="p-12 md:p-16 bg-bg-primary/50 backdrop-blur-sm relative group"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Avec un service externe</span>
              </div>
              
              <div className="space-y-6">
                {externalPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="flex items-start gap-4 opacity-60 group-hover:opacity-100 transition-opacity"
                  >
                    <AlertCircle className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                    <span className="text-lg text-text-secondary font-medium">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - CloudNaaba */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="p-12 md:p-16 bg-bg-elevated/30 backdrop-blur-sm relative group overflow-hidden"
          >
            {/* Subtle Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-8">
                <span className="text-[10px] font-bold text-accent-primary uppercase tracking-widest">Avec CloudNaaba IA Privée</span>
              </div>
              
              <div className="space-y-6">
                {cloudnaabaPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                    <span className="text-lg text-text-primary font-medium">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center max-w-[900px] mx-auto"
        >
          <p className="text-2xl md:text-3xl font-medium text-text-secondary leading-tight tracking-tight">
            Le sujet n’est pas seulement la performance d’un modèle. <br className="hidden md:block" />
            <span className="text-text-primary">Le sujet est la maîtrise de l’environnement dans lequel il opère.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
