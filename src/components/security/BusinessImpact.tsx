import React from 'react';
import { motion } from 'motion/react';
import { Link, Clock, Grid, RefreshCw, CheckCircle2, ShieldCheck } from 'lucide-react';

const impactCards = [
  {
    icon: Link,
    title: "Moins de dépendance à des configurations artisanales",
    description: "Les protections essentielles ne reposent plus uniquement sur des manipulations manuelles."
  },
  {
    icon: Clock,
    title: "Moins d’exposition liée aux oublis",
    description: "Le cadre de déploiement réduit certaines erreurs courantes."
  },
  {
    icon: Grid,
    title: "Plus de cohérence dans vos environnements",
    description: "Vos services reposent sur une base plus homogène et plus lisible."
  },
  {
    icon: RefreshCw,
    title: "Plus de continuité",
    description: "Votre infrastructure est mieux préparée à absorber certains incidents."
  },
  {
    icon: ShieldCheck,
    title: "Plus de confiance",
    description: "Vous disposez d’un cadre plus crédible pour vos utilisateurs et partenaires."
  }
];

export default function BusinessImpact() {
  return (
    <section className="py-32 relative overflow-hidden bg-bg-primary/95">
      {/* Premium subtle glow background */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-accent-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
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
            Une meilleure sécurité commence souvent par une meilleure base d’exploitation.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-text-secondary leading-relaxed font-medium mx-auto max-w-2xl"
          >
            Avec CloudNaaba, vous réduisez plusieurs fragilités fréquentes liées à l’exploitation et à la gestion de vos services.
          </motion.p>
        </div>

        {/* Impact Grid - 2 columns or sophisticated masonry-like look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-6 max-w-5xl mx-auto mb-24">
          {impactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // Make the last card span 2 columns on medium/large screens if odd number
              className={`p-10 rounded-[2rem] bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-accent-primary/30 transition-all duration-500 group relative overflow-hidden ${index === 4 ? 'md:col-span-2 md:w-3/4 md:mx-auto' : ''}`}
            >
              {/* Subtle hover glow inside card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <card.icon className="w-6 h-6 text-accent-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center py-6 px-10 rounded-[2.5rem] bg-bg-elevated/40 border border-white/10 shadow-2xl backdrop-blur-sm">
            <CheckCircle2 className="w-6 h-6 text-accent-primary mr-4" />
            <h3 className="text-xl md:text-2xl font-display font-medium text-text-primary">
              <span className="text-text-primary">Une sécurité plus propre</span>, c’est une activité plus <span className="text-accent-primary font-bold">stable</span> et plus <span className="text-accent-primary font-bold">crédible</span>.
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
