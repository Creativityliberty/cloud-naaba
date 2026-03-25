import React from 'react';
import { motion } from 'motion/react';
import { Shield, Network, Settings } from 'lucide-react';

const problemCards = [
  {
    title: "Vos données quittent votre environnement",
    description: "Quand l’IA fonctionne ailleurs, certains contenus sensibles sortent de votre cadre de confiance sans vraie maîtrise opérationnelle.",
    icon: <Shield className="w-6 h-6 text-accent-primary" />
  },
  {
    title: "Le traitement réel devient flou",
    description: "Il devient plus difficile de savoir précisément où passent les requêtes, comment elles sont traitées et dans quel environnement elles s’exécutent.",
    icon: <Network className="w-6 h-6 text-accent-primary" />
  },
  {
    title: "L’usage progresse plus vite que le cadre",
    description: "Les équipes adoptent l’IA rapidement, mais souvent sans règles claires, sans gouvernance et sans logique durable d’intégration.",
    icon: <Settings className="w-6 h-6 text-accent-primary" />
  }
];

export default function AiProblem() {
  return (
    <section className="py-48 relative overflow-hidden bg-bg-primary">
      {/* Subtle Ambient Glow */}
      <motion.div 
        animate={{ 
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-[900px] mx-auto mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] tracking-tight mb-12 text-text-primary"
          >
            L’IA est utile. Mais dès qu’elle touche à vos vraies données, <span className="text-accent-primary">la question change.</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium">
              Beaucoup d’équipes testent l’IA avec des services externes. C’est rapide au départ.
            </p>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium">
              Mais dès qu’il s’agit de documents internes, d’échanges clients, de procédures ou de données métier, une autre question apparaît : <br className="hidden md:block" />
              <span className="text-text-primary">où vont les données, qui traite les requêtes, et dans quel cadre l’IA fonctionne-t-elle réellement ?</span>
            </p>
          </motion.div>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {problemCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-10 premium-card overflow-hidden bg-bg-elevated/30"
            >
              {/* Internal Reflection / Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-accent-primary/10 flex items-center justify-center mb-8 border border-accent-primary/20 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
                  {card.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Statement Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center max-w-[850px] mx-auto pt-16 border-t border-border-subtle"
        >
          <p className="text-2xl md:text-3xl font-medium text-text-secondary leading-tight tracking-tight">
            Pour une PME sérieuse ou une organisation qui manipule des données importantes, <span className="text-text-primary">l’enjeu n’est pas seulement d’avoir accès à l’IA.</span> <br className="hidden md:block" />
            L’enjeu est de pouvoir l’utiliser dans un cadre plus maîtrisé.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
