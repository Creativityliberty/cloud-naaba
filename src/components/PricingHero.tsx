import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, MessageSquare } from 'lucide-react';

interface PricingHeroProps {
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const trustChips = [
  "Sans engagement longue durée",
  "Tarification lisible",
  "Ajustable selon vos besoins"
];

const miniPreviews = [
  { name: "Découverte", price: "4 000 F CFA", period: "/ mois" },
  { name: "Pro", price: "7 500 F CFA", period: "/ mois", highlighted: true },
  { name: "Business", price: "25 000 F CFA", period: "/ mois" }
];

export default function PricingHero({ onPrimaryClick, onSecondaryClick }: PricingHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-primary/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/5 border border-accent-primary/10 mb-8"
          >
            <span className="text-accent-primary text-sm font-medium tracking-wide">
              Tarification simple et lisible
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-text-primary mb-8 tracking-tighter leading-[1.1]"
          >
            Des prix simples pour lancer, exploiter et faire évoluer vos applications <span className="text-accent-primary">sans surprise.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-text-secondary mb-6 max-w-2xl mx-auto font-medium"
          >
            Choisissez une formule adaptée à votre niveau de besoin, puis ajustez-la à mesure que votre activité grandit.
          </motion.p>

          {/* Value Line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-text-primary/80 mb-12 font-semibold"
          >
            Pas de frais cachés. Pas d’engagement longue durée. Une tarification lisible, pensée pour les projets sérieux.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button
              onClick={onPrimaryClick}
              className="group relative px-8 py-4 rounded-2xl bg-accent-primary text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(124,58,237,0.3)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative flex items-center gap-2">
                Commencer
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={onSecondaryClick}
              className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-text-primary font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Parler à l’équipe
            </button>
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-20"
          >
            {trustChips.map((chip, i) => (
              <div key={i} className="flex items-center gap-2 text-text-secondary/60 text-sm font-medium">
                <div className="w-5 h-5 rounded-full bg-accent-primary/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-accent-primary" />
                </div>
                {chip}
              </div>
            ))}
          </motion.div>

          {/* Mini Price Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {miniPreviews.map((preview, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  preview.highlighted 
                    ? 'bg-accent-primary/5 border-accent-primary/20 shadow-lg shadow-accent-primary/5' 
                    : 'bg-white/5 border-white/10'
                }`}
              >
                <div className="text-text-secondary text-xs font-bold uppercase tracking-widest mb-2">
                  {preview.name}
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-black text-text-primary">{preview.price}</span>
                  <span className="text-text-secondary text-sm font-medium">{preview.period}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
