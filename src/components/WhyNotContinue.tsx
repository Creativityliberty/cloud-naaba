import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const problems = [
  "Le déploiement dépend de personnes",
  "Les incidents coûtent plus cher qu’ils ne devraient",
  "La sécurité arrive trop tard",
  "Les évolutions deviennent risquées",
  "La croissance se fait dans la contrainte"
];

const benefits = [
  "Déploiement structuré et reproductible",
  "Exploitation plus lisible",
  "Sécurité intégrée dès le départ",
  "Évolutions plus maîtrisées",
  "Base technique prête à grandir"
];

export default function WhyNotContinue() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#050505]">
      <div className="container mx-auto max-w-[1140px] px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display max-w-[900px] mx-auto leading-tight">
            Ce qui <span className="text-white/40 italic">“fonctionne à peu près”</span> devient un problème dès que votre projet compte vraiment.
          </h2>
        </motion.div>

        {/* Comparison Block */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-stretch">
          
          {/* Vertical Divider (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent z-10">
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/40 to-transparent origin-top"
            />
          </div>

          {/* Left - Sans cadre clair */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pr-16 space-y-10"
          >
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-white/30 font-bold">Sans cadre clair</span>
              <h3 className="text-2xl font-bold text-white/60">L’inertie technique</h3>
            </div>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (index * 0.08) }}
                  className="flex items-start gap-4 group"
                >
                  <AlertCircle className="w-5 h-5 text-white/20 mt-0.5 shrink-0 group-hover:text-white/40 transition-colors" />
                  <p className="text-white/40 group-hover:text-white/60 transition-colors leading-relaxed">
                    {problem}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Avec CloudNaaba */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:pl-16 space-y-10"
          >
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-violet-400 font-bold">Avec CloudNaaba</span>
              <h3 className="text-2xl font-bold text-white">La structure d’exploitation</h3>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + (index * 0.08) }}
                  className="flex items-start gap-4 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-violet-500 mt-0.5 shrink-0 group-hover:text-violet-400 transition-colors" />
                  <p className="text-white/90 group-hover:text-white transition-colors leading-relaxed">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Final Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-32 pt-12 border-t border-white/5 text-center"
        >
          <p className="text-xl md:text-2xl font-medium text-white/80 max-w-[800px] mx-auto leading-relaxed">
            Le sujet n’est pas d’avoir <span className="text-white italic">“du cloud”</span>. <br className="hidden md:block" />
            Le sujet est d’avoir un service qui <span className="text-violet-400">tient, évolue et protège</span> votre activité.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
