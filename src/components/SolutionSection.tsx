import React from 'react';
import { motion } from 'motion/react';
import { Rocket, ShieldCheck, BarChart3, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: "Déployez plus facilement",
    description: "Mettez vos applications en ligne dans un cadre clair, sans manipulation serveur complexe.",
    icon: <Rocket className="w-5 h-5 text-violet-400" />
  },
  {
    title: "Sécurisez par défaut",
    description: "Certificats, bonnes pratiques et base d’exploitation sont intégrés dès le départ.",
    icon: <ShieldCheck className="w-5 h-5 text-violet-400" />
  },
  {
    title: "Gardez le contrôle",
    description: "Supervision, visibilité et cadre stable pour faire évoluer vos services sereinement.",
    icon: <BarChart3 className="w-5 h-5 text-violet-400" />
  }
];

export default function SolutionSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-soft border border-accent-primary/20 mb-8">
                <span className="text-[11px] font-bold uppercase tracking-widest text-accent-primary">
                  La solution CloudNaaba
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-8 text-text-primary tracking-tight">
                CloudNaaba professionnalise l’exploitation de vos applications, <span className="text-accent-primary">sans vous imposer la complexité d’un cloud lourd.</span>
              </h2>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-10 max-w-[640px]">
                CloudNaaba n’est pas un simple hébergement. C’est une plateforme conçue pour structurer, sécuriser et simplifier l’exploitation de vos applications.
              </p>
              
              <div className="bg-bg-elevated/50 border-l-4 border-accent-primary p-8 mb-12 rounded-r-2xl backdrop-blur-sm">
                <p className="text-2xl font-medium text-text-primary italic leading-tight tracking-tight">
                  "Vous vous concentrez sur votre produit. CloudNaaba prend en charge ce qui ralentit votre exploitation."
                </p>
              </div>
            </motion.div>

            {/* Benefits Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-8 premium-card overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 flex items-center justify-center mb-6 border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Visual - Floating System Diagram */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square max-w-[500px] mx-auto"
            >
              {/* Abstract Infra System */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Central Node */}
                <motion.div 
                  animate={{ 
                    y: [0, -15, 0],
                    rotateZ: [0, 2, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="w-40 h-40 rounded-[32px] bg-bg-elevated border border-accent-primary/30 flex items-center justify-center relative z-10 shadow-2xl"
                >
                  <div className="w-20 h-20 rounded-2xl bg-accent-primary/20 border border-accent-primary/40 flex items-center justify-center">
                    <Rocket className="w-10 h-10 text-accent-primary" />
                  </div>
                  
                  {/* Pulse effect */}
                  <motion.div 
                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 rounded-[32px] border border-accent-primary/50"
                  />
                </motion.div>

                {/* Connected Modules */}
                {[0, 90, 180, 270].map((angle, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="absolute w-28 h-28"
                    style={{ 
                      transform: `rotate(${angle}deg) translateY(-160px) rotate(-${angle}deg)` 
                    }}
                  >
                    <motion.div 
                      animate={{ 
                        y: [0, i % 2 === 0 ? 10 : -10, 0],
                        rotate: [0, i % 2 === 0 ? 5 : -5, 0]
                      }}
                      transition={{ 
                        duration: 5 + i, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="w-full h-full rounded-2xl bg-bg-elevated border border-border-subtle flex items-center justify-center relative group overflow-hidden shadow-xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-transparent" />
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                         <div className="w-4 h-4 rounded-full bg-accent-primary/20 border border-accent-primary/40" />
                      </div>
                      
                      {/* Connection Line */}
                      <div 
                        className="absolute w-px h-20 bg-gradient-to-b from-accent-primary/50 to-transparent"
                        style={{ 
                          top: '100%', 
                          left: '50%', 
                          transform: `translateX(-50%)`
                        }} 
                      />
                    </motion.div>
                  </motion.div>
                ))}

                {/* Floating Indicators */}
                <FloatingIndicator label="Déploiement" value="Automatisé" className="top-0 -right-4" delay={0} />
                <FloatingIndicator label="Sécurité" value="Actif" className="bottom-12 -left-8" delay={1} />
                <FloatingIndicator label="Supervision" value="En direct" className="top-24 -left-12" delay={2} />
                <FloatingIndicator label="Stack" value="Détectée" className="bottom-0 -right-8" delay={1.5} />
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-accent-primary/10 blur-[120px] rounded-full -z-10" />
            </motion.div>
          </div>
        </div>

        {/* Bottom Punchline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-32 text-center border-t border-border-subtle pt-16"
        >
          <p className="text-2xl md:text-3xl font-medium text-text-primary max-w-[900px] mx-auto leading-tight tracking-tight">
            CloudNaaba ne remplace pas votre projet. <br className="hidden md:block" />
            <span className="text-accent-primary">Il rend son exploitation plus fiable, plus lisible et plus durable.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingIndicator({ label, value, className, delay }: { label: string; value: string; className: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + delay, duration: 0.5 }}
      className={`absolute z-20 px-3 py-1.5 rounded-lg bg-surface/80 backdrop-blur-md border border-white/10 shadow-xl flex flex-col ${className}`}
    >
      <span className="text-[9px] uppercase tracking-wider text-gray-500 font-bold">{label}</span>
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs font-bold text-white">{value}</span>
      </div>
    </motion.div>
  );
}
