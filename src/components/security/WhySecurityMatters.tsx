import React from 'react';
import { motion } from 'motion/react';
import { Activity, Settings, Lock, Layers, AlertCircle, LayoutGrid, ArrowRight } from 'lucide-react';

const problemCards = [
  {
    icon: <Activity className="w-6 h-6 text-red-400" />,
    title: "Trafic malveillant",
    description: "Des requêtes artificielles peuvent perturber ou bloquer vos services."
  },
  {
    icon: <Settings className="w-6 h-6 text-red-400" />,
    title: "Erreurs de configuration",
    description: "Une mauvaise configuration peut exposer inutilement vos applications."
  },
  {
    icon: <Lock className="w-6 h-6 text-red-400" />,
    title: "Échanges non sécurisés",
    description: "Des données peuvent circuler sans protection si HTTPS n’est pas correctement mis en place."
  },
  {
    icon: <Layers className="w-6 h-6 text-red-400" />,
    title: "Environnements mal cloisonnés",
    description: "Un problème peut se propager plus facilement d’un service à un autre."
  },
  {
    icon: <AlertCircle className="w-6 h-6 text-red-400" />,
    title: "Sécurité ajoutée trop tard",
    description: "Les protections arrivent après coup, souvent de manière incomplète."
  },
  {
    icon: <LayoutGrid className="w-6 h-6 text-red-400" />,
    title: "Gestion dispersée",
    description: "La sécurité dépend de multiples réglages manuels difficiles à maintenir."
  }
];

export default function WhySecurityMatters() {
  return (
    <section className="py-32 relative overflow-hidden bg-bg-primary">
      {/* Subtle background glow for stress/tension */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        {/* Header Block */}
        <div className="max-w-4xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] tracking-tight mb-8 text-gradient"
          >
            Une application utile n’a de valeur que si elle reste digne de confiance.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium">
              La sécurité n’est pas seulement une question technique. <br />
              <span className="text-text-primary">C’est une question de continuité, de réputation, de confiance utilisateur et de maîtrise du risque.</span>
            </p>
          </motion.div>
        </div>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {problemCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-red-500/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/5 border border-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-500/10 transition-all duration-500">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-red-400 transition-colors">
                {card.title}
              </h3>
              <p className="text-text-secondary leading-relaxed font-medium">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Line & Transition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block p-1 rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent">
            <div className="px-10 py-12 rounded-[22px] bg-[#0A0A0A] border border-white/[0.05]">
              <p className="text-2xl md:text-3xl font-medium text-text-primary leading-tight mb-8">
                CloudNaaba a été conçu pour éviter que la sécurité ne repose uniquement sur des réglages manuels, dispersés ou incomplets.
              </p>
              
              <div className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-accent-primary">
                <span>Vers une protection intégrée</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
