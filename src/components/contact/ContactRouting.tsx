import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, LifeBuoy, ServerCrash, ShieldAlert, ArrowRight } from 'lucide-react';

interface ContactRoutingProps {
  onRouteSelect: (type: 'commercial' | 'support' | 'migration' | 'securite') => void;
}

export default function ContactRouting({ onRouteSelect }: ContactRoutingProps) {
  const routes = [
    {
      id: 'commercial',
      title: 'Commercial & Partenariats',
      description: 'Découvrez CloudNaaba, comparez des options ou discutez partenariat.',
      channel: 'hello@cloudnaaba.com',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'text-emerald-400'
    },
    {
      id: 'support',
      title: 'Support technique',
      description: 'Déploiement, configuration, application ou incident.',
      channel: 'Support direct / Discord / Formulaire',
      icon: <LifeBuoy className="w-6 h-6" />,
      color: 'text-accent-primary'
    },
    {
      id: 'migration',
      title: 'Migration & Architecture',
      description: 'Reprise d\'une infra existante, environnement hybride, modernisation.',
      channel: 'Formulaire ou prise de contact',
      icon: <ServerCrash className="w-6 h-6" />,
      color: 'text-amber-400'
    },
    {
      id: 'securite',
      title: 'Sécurité & besoins sensibles',
      description: 'Cloisonnement, gouvernance, ou architecture dédiée hyper-sécurisée.',
      channel: 'Discussion expert sécurité',
      icon: <ShieldAlert className="w-6 h-6" />,
      color: 'text-rose-400'
    }
  ] as const;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-[1240px] px-6">
        
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold font-display leading-[1.1] mb-6"
          >
            Comment pouvons-nous vous aider ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-text-secondary leading-relaxed font-medium"
          >
            Un point d'entrée clair selon votre besoin. Sécurisé, direct, efficace.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {routes.map((route, i) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => onRouteSelect(route.id)}
              className="group cursor-pointer p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:border-accent-primary/40 hover:bg-accent-primary/[0.02] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl transition-all duration-400 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent-primary/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.05] flex items-center justify-center group-hover:scale-110 group-hover:border-accent-primary/30 transition-all duration-500">
                  <div className={route.color}>{route.icon}</div>
                </div>

                <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent-primary transition-colors mb-4">{route.title}</h3>
                
                <p className="text-text-secondary font-medium leading-relaxed mb-8 flex-grow">
                  {route.description}
                </p>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-black text-text-secondary/50 mb-1">
                      Canal recommandé
                    </span>
                    <span className={`text-xs font-bold ${route.color} truncate max-w-[200px] md:max-w-none`}>
                      {route.channel}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent-primary group-hover:text-white transition-colors duration-300 shadow-xl">
                    <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
