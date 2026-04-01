import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, MessageSquare, Zap, Shield, Globe } from 'lucide-react';

interface PricingHeroProps {
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const trustChips = [
  { text: "Sans engagement", icon: Zap },
  { text: "Souveraineté Totale", icon: Shield },
  { text: "Support 24/7", icon: Globe }
];

const miniPreviews = [
  { name: "Starter", price: "1 000 F CFA", period: "/ mois", description: "Pour débuter" },
  { name: "Standard", price: "7 500 F CFA", period: "/ mois", highlighted: true, description: "Plus populaire" },
  { name: "Premium", price: "25 000 F CFA", period: "/ mois", description: "Apps critiques" }
];

export default function PricingHero({ onPrimaryClick, onSecondaryClick }: PricingHeroProps) {
  return (
    <section className="relative pt-[180px] pb-32 overflow-hidden bg-bg-primary">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent-primary/5 rounded-full blur-[140px] opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Headline Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-8"
          >
            <Zap className="w-4 h-4 text-accent-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-primary">
              Tarification Transparente • Cloud Souverain
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black font-display leading-[0.95] tracking-tight mb-10 text-gradient"
          >
            L'excellence cloud, <br />au prix juste.
          </motion.h1>

          {/* Narrative Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Déployez vos infrastructures sur une plateforme stable, performante et sans surcoût caché. Une offre qui s'adapte à votre croissance, du prototype à l'entreprise.
          </motion.p>

          {/* CTA Grouping */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20"
          >
            <button
              onClick={onPrimaryClick}
              className="group relative px-10 py-5 rounded-2xl bg-accent-primary text-white font-black text-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(124,58,237,0.4)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700" />
              <span className="relative flex items-center gap-3">
                Commencez maintenant
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={onSecondaryClick}
              className="px-10 py-5 rounded-2xl bg-white/[0.03] border border-white/10 text-text-primary font-black text-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-3 group"
            >
              <MessageSquare className="w-6 h-6 text-accent-primary" />
              Contactez-nous
            </button>
          </motion.div>

          {/* Value Strip Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {miniPreviews.map((preview, i) => (
              <div
                key={i}
                className={`group relative p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 ${
                  preview.highlighted 
                    ? 'bg-accent-primary/5 border-accent-primary/30 shadow-2xl shadow-accent-primary/10' 
                    : 'bg-white/[0.02] border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="relative z-10">
                   <div className="text-text-secondary text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                     {preview.name}
                   </div>
                   <div className="flex items-baseline justify-center gap-1 mb-2">
                     <span className="text-3xl font-black text-text-primary">{preview.price}</span>
                     <span className="text-text-secondary text-xs uppercase font-bold">{preview.period}</span>
                   </div>
                   <div className="text-text-secondary/50 text-xs font-bold uppercase tracking-widest">{preview.description}</div>
                </div>
                {preview.highlighted && (
                   <div className="absolute inset-0 bg-accent-primary/5 blur-3xl rounded-full opacity-50 pointer-events-none" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
