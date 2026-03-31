import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Activity, CheckCircle2, ArrowRight } from 'lucide-react';

const trustItems = [
  {
    title: "Sécurité intégrée dès le départ",
    description: "Pas ajoutée après coup, mais incluse dans la base d’exploitation.",
    icon: <Shield className="w-6 h-6 text-violet-400" />,
    visual: "shield-pulse"
  },
  {
    title: "Exploitation maîtrisée",
    description: "Moins de manipulations manuelles, moins de risques humains.",
    icon: <Lock className="w-6 h-6 text-violet-400" />,
    visual: "lock-grid"
  },
  {
    title: "Continuité mieux cadrée",
    description: "Surveillance, stabilité et cadre opérationnel plus clair.",
    icon: <Activity className="w-6 h-6 text-violet-400" />,
    visual: "wave-pulse"
  },
  {
    title: "Gouvernance plus défendable",
    description: "Moins d’outils dispersés, plus de cohérence.",
    icon: <CheckCircle2 className="w-6 h-6 text-violet-400" />,
    visual: "check-orbit"
  }
];

export default function SecuritySection({ onLearnMoreClick }: { onLearnMoreClick?: () => void }) {
  return (
    <section id="security" className="py-48 relative overflow-hidden bg-bg-primary scroll-mt-24">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-32 text-center lg:text-left"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-soft border border-accent-primary/20 mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-accent-primary">
              Sécurité & Souveraineté
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display max-w-[1000px] leading-[1.1] tracking-tight mx-auto lg:mx-0 text-gradient">
            Ce qui est critique pour votre activité mérite un cadre sérieux.
          </h2>
        </motion.div>

        {/* Editorial Text Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[800px] mb-32 space-y-8"
        >
          <p className="text-3xl md:text-4xl font-medium text-text-primary leading-tight tracking-tight">
            Quand une entreprise gère des données importantes, la question n’est pas seulement : <span className="text-accent-primary">où héberger ?</span>
          </p>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            La vraie question est : comment garantir un niveau de maîtrise, de continuité et de sécurité compatible avec les enjeux métier ?
          </p>
        </motion.div>

        {/* Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <SecurityCard key={index} item={item} index={index} onClick={onLearnMoreClick} />
          ))}
        </div>

        {/* Security Partners */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-32 flex flex-col items-center"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary/40 mb-10">
            Intégrations de sécurité natives
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <img src="https://cdn.simpleicons.org/cloudflare/FFFFFF" alt="Cloudflare" className="h-6 md:h-8 w-auto" referrerPolicy="no-referrer" />
            <img src="https://cdn.simpleicons.org/snyk/FFFFFF" alt="Snyk" className="h-6 md:h-8 w-auto" referrerPolicy="no-referrer" />
            <img src="https://icongr.am/simple/datadog.svg?color=FFFFFF" alt="Datadog" className="h-6 md:h-8 w-auto" referrerPolicy="no-referrer" />
            <img src="https://cdn.simpleicons.org/paloaltonetworks/FFFFFF" alt="Palo Alto" className="h-6 md:h-8 w-auto" referrerPolicy="no-referrer" />
          </div>
        </motion.div>

        {/* Final Quote */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-32 pt-16 border-t border-border-subtle text-center"
        >
          <p className="text-text-secondary text-xl md:text-2xl leading-relaxed italic font-medium max-w-[800px] mx-auto">
            "Pour une PME sérieuse comme pour une organisation sensible, la stabilité n’est pas un luxe. C’est une condition de confiance."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const SecurityCard: React.FC<{ item: any; index: number; onClick?: () => void }> = ({ item, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className={`group relative flex flex-col p-10 premium-card h-full overflow-hidden bg-bg-elevated/30 ${onClick ? 'cursor-pointer' : ''}`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Icon Area */}
      <div className="relative z-10 mb-10">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-16 h-16 rounded-2xl bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-all duration-500"
        >
          {item.icon}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-accent-primary transition-colors tracking-tight">
          {item.title}
        </h3>
        <p className="text-text-secondary leading-relaxed text-lg mb-12">
          {item.description}
        </p>

        {/* Visual Animation Area */}
        <div className="mt-auto relative h-32 flex items-center justify-center overflow-hidden">
          <CardVisual type={item.visual} />
        </div>

        {/* Read More Style Link */}
        <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary/40 group-hover:text-accent-primary transition-colors">
          <span>En savoir plus</span>
          <ArrowRight className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

function CardVisual({ type }: { type: string }) {
  if (type === 'shield-pulse') {
    return (
      <div className="relative w-24 h-24">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border border-accent-primary/20 rounded-full"
            animate={{
              scale: [1, 1.5],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeOut"
            }}
          />
        ))}
        <div className="absolute inset-4 bg-accent-primary/5 rounded-full flex items-center justify-center">
          <Shield className="w-8 h-8 text-accent-primary/20" />
        </div>
      </div>
    );
  }

  if (type === 'lock-grid') {
    return (
      <div className="grid grid-cols-3 gap-2 opacity-20 group-hover:opacity-40 transition-opacity">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-accent-primary rounded-sm"
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    );
  }

  if (type === 'wave-pulse') {
    return (
      <div className="flex items-center gap-1 h-12">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 bg-accent-primary/30 rounded-full"
            animate={{
              height: [8, 32, 8],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>
    );
  }

  if (type === 'check-orbit') {
    return (
      <div className="relative w-24 h-24">
        <motion.div
          className="absolute inset-0 border-2 border-dashed border-accent-primary/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-0 left-1/2 -ml-2 w-4 h-4 bg-accent-primary rounded-full blur-[2px]"
          animate={{ rotate: 360 }}
          style={{ originX: "0px", originY: "48px" }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-accent-primary/10" />
        </div>
      </div>
    );
  }

  return null;
}
