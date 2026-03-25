import React from 'react';
import { motion } from 'motion/react';
import { Settings2, Link, Lock, GitBranch, Clock } from 'lucide-react';

const costs = [
  {
    title: "Moins de maîtrise sur les usages",
    description: "Les équipes utilisent l’IA, mais sans cadre clair, sans gouvernance et sans vision d’ensemble.",
    icon: <Settings2 className="w-6 h-6 text-accent-primary" />
  },
  {
    title: "Dépendance à des services externes",
    description: "Vos usages deviennent liés à une plateforme, à ses règles, à ses limites et à ses évolutions.",
    icon: <Link className="w-6 h-6 text-accent-primary" />
  },
  {
    title: "Difficulté à traiter des contenus sensibles",
    description: "Certains documents, échanges ou processus ne devraient pas sortir de votre environnement de confiance.",
    icon: <Lock className="w-6 h-6 text-accent-primary" />
  },
  {
    title: "Moins de cohérence dans vos workflows",
    description: "L’IA reste un outil isolé au lieu de devenir une vraie brique intégrée à votre organisation.",
    icon: <GitBranch className="w-6 h-6 text-accent-primary" />
  },
  {
    title: "Risque de rester en phase d’essai",
    description: "Beaucoup d’équipes testent l’IA. Peu arrivent à la structurer réellement.",
    icon: <Clock className="w-6 h-6 text-accent-primary" />
  }
];

export default function AiCosts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="py-48 relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-[900px] mx-auto mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] tracking-tight mb-12 text-text-primary"
          >
            Quand l’IA tourne ailleurs, <span className="text-accent-primary">vous cédez une partie du contrôle ici.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium"
          >
            Ce coût ne se voit pas toujours au premier essai. Pourtant, il existe — et il s’installe progressivement dans vos usages.
          </motion.p>
        </div>

        {/* Grid Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-32"
        >
          {/* Top Row: 3 cards */}
          {costs.slice(0, 3).map((cost, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="md:col-span-2 group relative p-10 premium-card overflow-hidden bg-bg-elevated/30"
            >
              {/* Drift Gradient Effect */}
              <motion.div 
                animate={{ 
                  background: [
                    "radial-gradient(circle at 0% 0%, rgba(124, 58, 237, 0.05) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 100%, rgba(124, 58, 237, 0.05) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 0%, rgba(124, 58, 237, 0.05) 0%, transparent 50%)",
                  ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              />
              
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-accent-primary/10 flex items-center justify-center mb-8 border border-accent-primary/20 group-hover:scale-110 transition-transform duration-300">
                  {cost.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
                  {cost.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {cost.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Bottom Row: 2 cards centered */}
          {costs.slice(3, 5).map((cost, index) => (
            <motion.div
              key={index + 3}
              variants={itemVariants}
              className={`md:col-span-2 ${index === 0 ? 'md:col-start-2' : ''} group relative p-10 premium-card overflow-hidden bg-bg-elevated/30`}
            >
              {/* Drift Gradient Effect */}
              <motion.div 
                animate={{ 
                  background: [
                    "radial-gradient(circle at 100% 0%, rgba(124, 58, 237, 0.05) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 100%, rgba(124, 58, 237, 0.05) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 0%, rgba(124, 58, 237, 0.05) 0%, transparent 50%)",
                  ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              />

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-accent-primary/10 flex items-center justify-center mb-8 border border-accent-primary/20 group-hover:scale-110 transition-transform duration-300">
                  {cost.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
                  {cost.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {cost.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Punch */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center max-w-[850px] mx-auto pt-16 border-t border-border-subtle"
        >
          <p className="text-2xl md:text-3xl font-medium text-text-secondary leading-tight tracking-tight">
            L’IA progresse dans vos équipes. <br className="hidden md:block" />
            <span className="text-text-primary">Mais sans cadre, elle reste difficile à maîtriser, à intégrer et à faire évoluer.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
