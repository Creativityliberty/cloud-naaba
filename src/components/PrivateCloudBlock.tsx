import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Network, Search, ArrowRight, Check } from 'lucide-react';

export default function PrivateCloudBlock({ onContactClick }: { onContactClick?: () => void }) {
  const features = [
    { icon: <Lock className="w-5 h-5" />, text: "Isolation physique dédiée" },
    { icon: <Network className="w-5 h-5" />, text: "Connexion VPN sécurisée" },
    { icon: <Search className="w-5 h-5" />, text: "Audit de sécurité complet" },
    { icon: <Shield className="w-5 h-5" />, text: "Accompagnement expert" }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-[#030303]">
      {/* Ultra-subtle enterprise background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/[0.015] blur-[120px] rounded-full pointer-events-none" />
      
      {/* Grid pattern overlay for technical feel */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50 pointer-events-none" />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-8"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-primary">Sur-mesure</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold font-display tracking-tight leading-[1.1] text-gradient"
          >
            Exigences élevées ? <br /> Pensez Cloud Privé.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed"
          >
            CloudNaaba vous permet de déployer une infrastructure dédiée, isolée et adaptée aux environnements les plus exigeants.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Premium Card */}
          <div className="p-1 rounded-[24px] bg-gradient-to-b from-white/[0.08] to-transparent relative group">
            <div className="absolute inset-0 bg-accent-primary/0 group-hover:bg-accent-primary/[0.02] transition-colors duration-700 rounded-[24px]" />
            
            <div className="bg-[#0A0A0A] rounded-[22px] p-8 md:p-16 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Content */}
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-bold text-white tracking-[0.2em] uppercase mb-8">
                    <Shield className="w-3.5 h-3.5 text-accent-primary" />
                    Cloud privé & sur-mesure
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-4 leading-snug">
                    Infrastructure dédiée et isolée.
                  </h3>

                  <p className="text-text-secondary/80 leading-relaxed font-medium mb-10 text-lg">
                    Conçu pour les organisations qui ont des exigences élevées en matière de sécurité, de gouvernance et de continuité de service.
                  </p>

                  <button 
                    onClick={onContactClick}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/[0.05] border border-white/10 text-white font-bold text-lg hover:bg-white hover:text-black transition-all duration-500 group/btn"
                  >
                    Parler à un expert
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Right Features */}
                <div className="relative">
                  {/* Stylized Datacenter/Network visual hint */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/5 to-transparent rounded-2xl border border-white/[0.02] -z-10 transform translate-x-4 translate-y-4" />
                  
                  <div className="bg-[#111111] border border-white/[0.05] rounded-2xl p-8 space-y-8">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-6 group/feature">
                        <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-text-secondary group-hover/feature:text-accent-primary group-hover/feature:border-accent-primary/30 transition-colors duration-500">
                          {feature.icon}
                        </div>
                        <span className="text-lg font-medium text-white/90 group-hover/feature:text-white transition-colors duration-500">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Micro Trust Line */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-medium text-text-secondary/60 uppercase tracking-widest">
            <span className="flex items-center gap-2"><Check className="w-4 h-4" /> Architecture dédiée</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4" /> Sécurité renforcée</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4" /> Approche sur mesure</span>
          </div>

          {/* Bonus UX Phrase */}
          <div className="mt-16 text-center">
            <p className="text-white/40 text-lg font-serif italic">
              "Quand les enjeux sont critiques, l'infrastructure doit l'être aussi."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
