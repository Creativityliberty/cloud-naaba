import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Layers, Shield, Eye, RefreshCw, TrendingUp, Unlock } from 'lucide-react';

const features = [
  {
    title: "Déploiement automatique",
    description: "Chaque mise en ligne est structurée et reproductible, sans manipulation serveur répétitive.",
    icon: <Rocket className="w-6 h-6 text-violet-400" />
  },
  {
    title: "Détection intelligente de la stack",
    description: "CloudNaaba identifie votre technologie et prépare l’environnement adapté automatiquement.",
    icon: <Layers className="w-6 h-6 text-violet-400" />
  },
  {
    title: "HTTPS et sécurité intégrée",
    description: "La sécurité de base est incluse dès le départ, sans configuration manuelle.",
    icon: <Shield className="w-6 h-6 text-violet-400" />
  },
  {
    title: "Supervision et visibilité",
    description: "Vous gardez une vue claire sur l’état de vos services et de vos applications.",
    icon: <Eye className="w-6 h-6 text-violet-400" />
  },
  {
    title: "Mises à jour simplifiées",
    description: "Faites évoluer votre projet sans risquer de casser votre production.",
    icon: <RefreshCw className="w-6 h-6 text-violet-400" />
  },
  {
    title: "Scalabilité maîtrisée",
    description: "Votre projet peut grandir dans un cadre stable, sans refonte d’infrastructure.",
    icon: <TrendingUp className="w-6 h-6 text-violet-400" />
  }
];

export default function Features() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#050505]">
      <div className="container mx-auto max-w-[1240px] px-6">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            L’essentiel pour exploiter vos applications <span className="text-violet-400">proprement, dès le départ.</span>
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-[800px] mx-auto leading-relaxed">
            CloudNaaba intègre les éléments critiques d’exploitation pour éviter les oublis, les manipulations risquées et les configurations fragiles.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index}>
              <FeatureCard 
                title={feature.title} 
                description={feature.description} 
                icon={feature.icon} 
                index={index} 
              />
            </div>
          ))}
          
          {/* Highlighted 7th Feature: Réversibilité */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-3 group relative p-8 rounded-2xl bg-[#111118] border border-white/5 hover:border-violet-main/40 transition-all duration-500 flex flex-col md:flex-row items-center gap-8 overflow-hidden"
          >
            {/* Soft Halo Effect */}
            <div className="absolute -inset-4 rounded-2xl bg-violet-600/5 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 pointer-events-none" />
            
            <div className="w-16 h-16 rounded-2xl bg-violet-main/10 flex items-center justify-center border border-violet-main/20 group-hover:bg-violet-main/20 transition-colors relative z-10 shrink-0">
              <Unlock className="w-8 h-8 text-violet-400" />
            </div>
            
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-xl font-bold mb-2 text-text-primary group-hover:text-violet-alt transition-colors">
                Réversibilité totale
              </h3>
              <p className="text-text-secondary leading-relaxed max-w-[700px]">
                Vous gardez la maîtrise. Vos données et vos services ne sont jamais enfermés. CloudNaaba est un cadre, pas une prison technique.
              </p>
            </div>

            {/* Subtle sweep animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "linear" }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-12"
              />
            </div>
          </motion.div>
        </div>

        {/* Optional Trust Line */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-white/20 font-bold">
            Un socle d’exploitation propre, pensé pour durer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-7 rounded-2xl bg-[#111118] border border-white/5 hover:border-violet-main/40 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
    >
      {/* Soft Halo Effect */}
      <div className="absolute -inset-2 rounded-2xl bg-violet-600/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none" />
      
      {/* Subtle sweep animation on hover */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <motion.div 
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
          className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-transparent via-white/[0.02] to-transparent skew-x-12"
        />
      </div>

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-violet-main/10 flex items-center justify-center mb-6 border border-violet-main/20 group-hover:bg-violet-main/20 transition-colors">
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-3 text-text-primary group-hover:text-violet-alt transition-colors">
          {title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
