import React from 'react';
import { motion } from 'motion/react';
import { Building2, Globe2, Shield, Code2 } from 'lucide-react';

const segmentCards = [
  {
    icon: Building2,
    title: "PME en digitalisation",
    description: "Quand votre site, votre plateforme ou votre outil métier devient central, la sécurité ne peut plus être traitée comme un détail."
  },
  {
    icon: Globe2,
    title: "Services exposés au public",
    description: "Sites web, e-commerce, plateformes clients : la disponibilité et la sécurité deviennent critiques dès qu’il y a des utilisateurs."
  },
  {
    icon: Shield,
    title: "Organisations avec données sensibles",
    description: "Santé, finance, assurance, éducation, ONG : quand la confidentialité et la gouvernance comptent, le cadre technique devient stratégique."
  },
  {
    icon: Code2,
    title: "Équipes techniques légères",
    description: "Vous avez des développeurs, mais pas d’équipe sécurité dédiée. Vous avez besoin d’un socle plus robuste dès le départ."
  }
];

export default function TargetAudience() {
  return (
    <section className="py-32 relative overflow-hidden bg-bg-primary">
      {/* Background separators */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-5xl font-bold font-display leading-[1.1] tracking-tight mb-8 text-gradient"
          >
            Une sécurité sérieuse devient essentielle dès que votre service compte vraiment.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-text-secondary leading-relaxed font-medium mx-auto max-w-3xl"
          >
            Certaines organisations ne peuvent pas se permettre une sécurité improvisée. CloudNaaba s’adresse à celles qui ont besoin d’un cadre plus fiable, plus lisible et plus maîtrisé.
          </motion.p>
        </div>

        {/* Segment Cards - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          {segmentCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-accent-primary/20 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-6 group-hover:bg-accent-primary/10 group-hover:border-accent-primary/20 transition-colors duration-500">
                  <card.icon className="w-6 h-6 text-text-secondary group-hover:text-accent-primary transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-accent-primary transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-lg text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-auto mb-8" />
          <p className="text-2xl md:text-3xl font-display font-medium text-text-primary leading-tight">
            Dès que votre service devient important, <br />
            <span className="text-accent-primary font-bold">votre niveau d’exigence doit évoluer avec lui.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
