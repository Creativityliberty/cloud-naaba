import React from 'react';
import { motion } from 'motion/react';
import { Server, Unlink, Shield, Network, Boxes } from 'lucide-react';

const trustPoints = [
  {
    title: "Environnement maîtrisé",
    description: "Votre IA s’exécute dans un cadre que vous contrôlez, sans dépendre d’un service externe pour chaque requête.",
    icon: <Server className="w-5 h-5" />
  },
  {
    title: "Moins de dépendance externe",
    description: "Vous réduisez l’exposition de vos données à des plateformes tierces.",
    icon: <Unlink className="w-5 h-5" />
  },
  {
    title: "Réduction des manipulations risquées",
    description: "Moins d’opérations manuelles dispersées, moins de risques d’erreur.",
    icon: <Shield className="w-5 h-5" />
  },
  {
    title: "Intégration maîtrisée",
    description: "Vous pouvez connecter l’IA à vos outils internes sans multiplier les points de friction.",
    icon: <Network className="w-5 h-5" />
  },
  {
    title: "Gouvernance plus claire",
    description: "Vos usages IA peuvent s’inscrire dans une logique plus structurée et défendable.",
    icon: <Boxes className="w-5 h-5" />
  }
];

export default function AiSecurity() {
  return (
    <section className="py-48 relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        
        {/* Title Header */}
        <div className="max-w-[900px] mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] tracking-tight"
          >
            Quand l’IA touche à vos données, <br />
            <span className="text-accent-primary">le cadre d’exécution devient critique.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left - Editorial Content */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <p className="text-2xl text-text-primary font-medium leading-relaxed">
                  Utiliser l’IA ne pose pas seulement une question de performance. 
                  <span className="text-text-secondary"> Cela pose une question de cadre.</span>
                </p>
                
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <p className="text-lg text-text-secondary leading-relaxed">
                    Où s’exécute votre IA ? <br />
                    Qui traite les requêtes ? <br />
                    Dans quel environnement vos données circulent-elles ?
                  </p>
                </div>

                <p className="text-xl text-accent-primary font-bold pt-4">
                  CloudNaaba vous permet de répondre à ces questions avec plus de clarté.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right - Trust Blocks */}
          <div className="lg:col-span-7 relative">
            {/* Subtle Glow behind the block */}
            <div className="absolute inset-0 bg-accent-primary/5 blur-[100px] rounded-full -z-10" />
            
            <div className="space-y-4">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group p-8 rounded-2xl bg-bg-elevated/30 border border-white/5 hover:border-accent-primary/20 hover:bg-bg-elevated/50 transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors shrink-0">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
                        {point.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-48 pt-24 border-t border-white/5 text-center"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-text-secondary leading-tight max-w-[1000px] mx-auto">
            Pour certaines organisations, le sujet n’est pas d’utiliser l’IA comme tout le monde. <br />
            <span className="text-text-primary">Le sujet est de l’utiliser sans perdre la maîtrise.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
