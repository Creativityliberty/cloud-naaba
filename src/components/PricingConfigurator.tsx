import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Database, Zap, ArrowRight } from 'lucide-react';

export default function PricingConfigurator({ onActionClick }: { onActionClick?: (config: any) => void }) {
  const [cpu, setCpu] = useState(2);
  const [ram, setRam] = useState(4);
  const [displayPrice, setDisplayPrice] = useState(0);

  // Pricing Logic
  const basePrice = 2000;
  const cpuPricePerUnit = 2500;
  const ramPricePerUnit = 1000;

  const totalPrice = useMemo(() => {
    return basePrice + (cpu * cpuPricePerUnit) + (ram * ramPricePerUnit);
  }, [cpu, ram]);

  const cpuCost = cpu * cpuPricePerUnit;
  const ramCost = ram * ramPricePerUnit;

  // Smooth price animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayPrice(totalPrice);
    }, 50);
    return () => clearTimeout(timer);
  }, [totalPrice]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-6"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-primary">Configurateur</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold font-display tracking-tight leading-[1.1] text-gradient"
          >
            Adaptez les ressources selon votre besoin.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, delay: 0.1 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto font-medium mt-6"
          >
            Si votre projet nécessite un dimensionnement spécifique, ajustez les ressources et obtenez une estimation claire en temps réel.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-8 md:p-12 rounded-[24px] bg-white/[0.03] border border-white/[0.08] relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Sliders Side */}
            <div className="space-y-12">
              {/* CPU Slider */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-bold text-text-primary">Processeur</span>
                  </div>
                  <span className="text-2xl font-black text-accent-primary">{cpu} vCPU</span>
                </div>
                <div className="relative pt-2">
                  <input
                    type="range"
                    min="0.5"
                    max="16"
                    step="0.5"
                    value={cpu}
                    onChange={(e) => setCpu(parseFloat(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent-primary"
                  />
                  <div className="flex justify-between mt-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest opacity-40">
                    <span>0.5 vCPU</span>
                    <span>16 vCPU</span>
                  </div>
                </div>
              </div>

              {/* RAM Slider */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                      <Database className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-bold text-text-primary">Mémoire</span>
                  </div>
                  <span className="text-2xl font-black text-accent-primary">{ram} Go RAM</span>
                </div>
                <div className="relative pt-2">
                  <input
                    type="range"
                    min="1"
                    max="64"
                    step="1"
                    value={ram}
                    onChange={(e) => setRam(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent-primary"
                  />
                  <div className="flex justify-between mt-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest opacity-40">
                    <span>1 Go</span>
                    <span>64 Go</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Result Side */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] relative">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-[10px] font-black text-accent-primary uppercase tracking-widest">
                  <Zap className="w-3 h-3" />
                  Estimation en temps réel
                </span>
              </div>

              <div className="mt-8 mb-4">
                <motion.div 
                  key={displayPrice}
                  initial={{ opacity: 0.8, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-5xl md:text-6xl font-black text-text-primary tracking-tighter"
                >
                  {formatPrice(displayPrice)} F CFA
                </motion.div>
                <div className="text-text-secondary font-bold uppercase tracking-widest text-sm mt-2">
                  / mois
                </div>
              </div>

              <div className="space-y-2 mb-10">
                <p className="text-text-secondary/60 text-xs font-medium">
                  Coût processeur : {formatPrice(cpuCost)} F
                </p>
                <p className="text-text-secondary/60 text-xs font-medium">
                  Coût mémoire : {formatPrice(ramCost)} F
                </p>
              </div>

              <button 
                onClick={() => onActionClick?.({ cpu, ram, totalPrice })}
                className="w-full py-5 rounded-xl bg-accent-primary text-white font-bold text-lg hover:bg-accent-primary/90 hover:shadow-lg hover:shadow-accent-primary/20 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                Choisir cette configuration
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="mt-6 text-text-secondary/40 text-[10px] font-medium uppercase tracking-widest">
                Estimation indicative basée sur les ressources sélectionnées.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
