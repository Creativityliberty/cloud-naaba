import React from 'react';
import { motion } from 'motion/react';
import { Eye, ShieldOff, AlertCircle, Share2, Layers, UserX } from 'lucide-react';

const riskCards = [
  {
    icon: <Eye className="w-6 h-6 text-amber-400" />,
    title: "Exposition inutile",
    description: "Des services restent accessibles plus longtemps qu’ils ne devraient, augmentant la surface d’attaque."
  },
  {
    icon: <ShieldOff className="w-6 h-6 text-amber-400" />,
    title: "Protection inégale",
    description: "Certaines briques sont sécurisées, d’autres non, créant des points faibles dans l’ensemble."
  },
  {
    icon: <AlertCircle className="w-6 h-6 text-amber-400" />,
    title: "Erreurs humaines",
    description: "Certificats oubliés, mises à jour retardées, configurations incomplètes."
  },
  {
    icon: <Share2 className="w-6 h-6 text-amber-400" />,
    title: "Propagation des incidents",
    description: "Un problème local peut impacter plusieurs services si les environnements sont mal isolés."
  },
  {
    icon: <Layers className="w-6 h-6 text-amber-400" />,
    title: "Exploitation fragile",
    description: "Des pratiques différentes selon les projets rendent la gestion instable et difficile à maintenir."
  },
  {
    icon: <UserX className="w-6 h-6 text-amber-400" />,
    title: "Confiance affaiblie",
    description: "Un service instable ou mal protégé impacte directement la crédibilité de votre entreprise."
  }
];

export default function SecurityRisks() {
  return (
    <section className="py-32 relative overflow-hidden bg-bg-primary/50">
      {/* Structural background separators */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

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
            Quand la sécurité est traitée trop tard, le risque ne disparaît pas. <br />
            <span className="text-white/40 italic">Il se déplace.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium max-w-2xl"
          >
            Les failles ne viennent pas seulement des attaques. Elles viennent aussi de la fragilité de l’exploitation.
          </motion.p>
        </div>

        {/* Risks Grid - 2 columns for impact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {riskCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-amber-500/20 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle accent glow on hover */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-8">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex items-center justify-center shrink-0 group-hover:bg-amber-500/10 transition-all duration-500">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-amber-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Line - Credibility Anchor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />
          <p className="text-2xl md:text-3xl font-display font-medium text-text-primary leading-tight max-w-3xl mb-12">
            Le but n’est pas d’éliminer tout risque. <br />
            <span className="text-accent-primary">Le but est de réduire l’exposition et d’améliorer la résilience.</span>
          </p>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-16 bg-gradient-to-b from-accent-primary to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
