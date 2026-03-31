import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Globe, Server, Cloud, Shield, Bot, Layout, Terminal } from 'lucide-react';

export default function ContactUseCases() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cases = [
    { title: "Déployer une application ou un site", icon: <Globe className="w-5 h-5 text-emerald-400" />, desc: "Mise en ligne rapide, configuration SSL, domaine persistant." },
    { title: "Préparer une migration", icon: <Server className="w-5 h-5 text-amber-400" />, desc: "Transition douce depuis AWS, Heroku ou on-premise." },
    { title: "Connecter vos serveurs existants", icon: <Terminal className="w-5 h-5 text-accent-primary" />, desc: "Injection de l'agent CloudNaaba pour la gestion hybride." },
    { title: "Lancer un projet IA privé avec Ollama", icon: <Bot className="w-5 h-5 text-violet-400" />, desc: "Déploiement GPU, isolation de la donnée locale." },
    { title: "Sécuriser une architecture", icon: <Shield className="w-5 h-5 text-rose-400" />, desc: "Audit réseau, pare-feu interne, bonnes pratiques." },
    { title: "Choisir entre Cloud, Hybride ou Sur-Mesure", icon: <Cloud className="w-5 h-5 text-blue-400" />, desc: "Analyse des coûts et de la souveraineté." },
    { title: "Installer une app depuis le marketplace", icon: <Layout className="w-5 h-5 text-orange-400" />, desc: "Assistance sur le déploiement d'un service managé." }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background System */}
      <div className="absolute inset-0 z-0 opacity-[0.02]">
        <svg width="100%" height="100%" preserveAspectRatio="none">
           <defs>
             <pattern id="gridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
               <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
             </pattern>
           </defs>
           <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-[1000px] px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold font-display leading-[1.1] mb-6"
          >
            Vous pouvez nous écrire pour…
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium mx-auto max-w-2xl"
          >
            Les sujets les plus fréquents que nous traitons.
          </motion.p>
        </div>

        <div className="flex flex-col border border-white/5 rounded-3xl bg-black overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative flex items-center gap-6 p-6 md:p-8 cursor-default transition-all duration-300 ${
                index !== cases.length - 1 ? 'border-b border-white/[0.03]' : ''
              } ${hoveredIndex === index ? 'bg-white/[0.04]' : 'bg-transparent'}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center shrink-0 border border-white/5 relative overflow-hidden group">
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="iconGlow"
                      className="absolute inset-0 bg-white/10 opacity-50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
                <span className="relative z-10">{item.icon}</span>
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                  hoveredIndex === index ? 'text-white' : 'text-text-primary'
                } truncate mb-1`}>
                  {item.title}
                </h4>
                <p className="text-sm font-medium text-text-secondary/80 truncate">
                  {item.desc}
                </p>
              </div>

              <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
                hoveredIndex === index ? 'bg-white/10 scale-110 border-white/20' : 'bg-transparent'
              }`}>
                <ChevronRight className={`w-4 h-4 transition-colors ${
                  hoveredIndex === index ? 'text-white' : 'text-text-secondary/50'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <span className="text-text-secondary italic text-sm font-medium">
              Si votre besoin n'entre pas exactement dans une case, écrivez quand même. L'important est d'ouvrir la bonne discussion rapidement.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
