import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Terminal, ExternalLink } from 'lucide-react';

export default function ContactCommunity() {
  return (
    <section className="py-24 relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto max-w-[1240px] px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 mb-6 text-accent-primary font-bold uppercase tracking-widest text-[11px]">
              <MessageCircle className="w-4 h-4" />
              <span>Support Live & Communauté</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold font-display leading-[1.1] mb-6">
              Échanger plus vite quand le contexte s'y prête.
            </h2>
            
            <p className="text-xl text-text-secondary leading-relaxed font-medium mb-10">
              Pour certaines questions, la communauté et le support live permettent d'avancer rapidement, surtout pour :
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Questions d'usage & exploration",
                "Échanges techniques légers",
                "Suivi de sujets non sensibles",
                "Entraide autour de l'agent CLI"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20 shrink-0">
                    <Terminal className="w-3 h-3 text-accent-primary" />
                  </div>
                  <span className="text-text-primary font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <button className="self-start px-8 py-4 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] hover:shadow-[0_0_20px_rgba(88,101,242,0.3)] text-white font-bold text-lg flex items-center gap-3 transition-all duration-300 hover:-translate-y-1">
              Rejoindre le Discord
              <ExternalLink className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] relative shadow-2xl overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5865F2]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#5865F2]/10 transition-colors duration-1000" />
            
            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-8">
                <span className="font-bold text-2xl uppercase tracking-widest font-display">NB.</span>
              </div>
              
              <h3 className="text-2xl font-bold font-display text-white mb-4 leading-tight">
                Le Discord complète le support.
              </h3>
              
              <p className="text-text-secondary leading-relaxed font-medium">
                Il ne remplace pas les échanges structurés pour les sujets commerciaux, de migration, de sécurité ou d'architecture sensible.
              </p>
              
              <div className="w-full h-[1px] bg-gradient-to-r from-orange-500/30 to-transparent my-8" />
              
              <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
                Utilisez le formulaire pour les sujets confidentiels.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
