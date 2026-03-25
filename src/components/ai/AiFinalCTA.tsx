import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Search, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function AiFinalCTA({ onPrimaryClick, onSecondaryClick }: { onPrimaryClick?: () => void; onSecondaryClick?: () => void }) {
  return (
    <section className="py-48 bg-bg-primary relative overflow-hidden">
      {/* Premium Background System */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div className="max-w-[900px] mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] mb-10 tracking-tight text-gradient">
              Déployez votre première IA privée <br className="hidden md:block" />
              sans construire l’infrastructure.
            </h2>
            
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-16 max-w-[720px] mx-auto font-medium">
              Avec CloudNaaba, vous pouvez lancer Ollama rapidement, garder le contrôle sur vos usages, puis enrichir progressivement votre environnement selon vos besoins.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col items-center gap-8 mb-20">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                <motion.button 
                  onClick={onPrimaryClick}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-12 py-6 rounded-2xl bg-white text-black font-black text-xl hover:bg-accent-primary hover:text-white transition-all duration-300 shadow-2xl shadow-white/10 hover:shadow-accent-primary/20 tracking-tight flex items-center justify-center gap-3 group"
                >
                  Installer Ollama
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button 
                  onClick={onSecondaryClick}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-12 py-6 rounded-2xl bg-white/5 text-text-primary font-bold text-xl hover:bg-white/10 border border-white/10 transition-all duration-300 tracking-tight flex items-center justify-center gap-3"
                >
                  <Search className="w-6 h-6 opacity-60" />
                  Explorer le catalogue
                </motion.button>
              </div>

              <button 
                onClick={onSecondaryClick}
                className="text-text-secondary hover:text-accent-primary font-bold transition-colors flex items-center gap-2 group"
              >
                <MessageSquare className="w-5 h-5 opacity-60 group-hover:opacity-100" />
                Demander une démonstration
                <div className="w-0 h-px bg-accent-primary group-hover:w-full transition-all duration-300" />
              </button>
            </div>

            {/* Trust Line */}
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mb-24">
              {[
                "Déploiement simple",
                "Environnement maîtrisé",
                "Compatible open source"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-primary" />
                  <span className="text-sm font-bold text-text-secondary uppercase tracking-[0.2em]">{item}</span>
                </div>
              ))}
            </div>

            {/* Bonus Tech Stack */}
            <div className="pt-12 border-t border-white/5">
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] mb-8">Stack compatible</p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                <img src="https://cdn.simpleicons.org/postgresql" alt="PostgreSQL" className="h-6 w-auto filter brightness-0 invert" referrerPolicy="no-referrer" />
                <img src="https://cdn.simpleicons.org/redis" alt="Redis" className="h-6 w-auto filter brightness-0 invert" referrerPolicy="no-referrer" />
                <img src="https://cdn.simpleicons.org/mongodb" alt="MongoDB" className="h-6 w-auto filter brightness-0 invert" referrerPolicy="no-referrer" />
                <img src="https://cdn.simpleicons.org/gitlab" alt="GitLab" className="h-6 w-auto filter brightness-0 invert" referrerPolicy="no-referrer" />
                <img src="https://cdn.simpleicons.org/nextdotjs" alt="Next.js" className="h-6 w-auto filter brightness-0 invert" referrerPolicy="no-referrer" />
                <img src="https://cdn.simpleicons.org/apachekafka" alt="Kafka" className="h-6 w-auto filter brightness-0 invert" referrerPolicy="no-referrer" />
                <img src="https://cdn.simpleicons.org/rabbitmq" alt="RabbitMQ" className="h-6 w-auto filter brightness-0 invert" referrerPolicy="no-referrer" />
                <img src="https://ollama.com/public/ollama.png" alt="Ollama" className="h-6 w-auto filter brightness-0 invert" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
