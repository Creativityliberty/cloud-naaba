import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Database, Zap, ArrowRight, Euro, Coins, HardDrive } from 'lucide-react';

export default function PricingConfigurator({ onActionClick }: { onActionClick?: (config: any) => void }) {
  const [currency, setCurrency] = useState<'CFA' | 'EUR'>('CFA');
  const [cpu, setCpu] = useState(1);
  const [ram, setRam] = useState(2);
  const [storage, setStorage] = useState(20);
  const [displayPrice, setDisplayPrice] = useState(0);

  // Conversion rate (1 EUR = 655.957 CFA)
  const EUR_TO_CFA = 655.957;

  // Pricing Logic (Monthly Base)
  const basePriceCFA = 2500;
  const cpuPricePerUnitCFA = 3000;
  const ramPricePerUnitCFA = 1500;
  const storagePricePerUnitCFA = 50;

  const totalMonthlyCFA = useMemo(() => {
    return basePriceCFA + (cpu * cpuPricePerUnitCFA) + (ram * ramPricePerUnitCFA) + (storage * storagePricePerUnitCFA);
  }, [cpu, ram, storage]);

  const priceToDisplay = useMemo(() => {
    if (currency === 'EUR') return totalMonthlyCFA / EUR_TO_CFA;
    return totalMonthlyCFA;
  }, [totalMonthlyCFA, currency]);

  // Smooth price animation
  useEffect(() => {
    const start = displayPrice;
    const end = priceToDisplay;
    const duration = 500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const current = start + (end - start) * easeOutQuart;
      setDisplayPrice(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [priceToDisplay]);

  const formatPrice = (price: number) => {
    if (currency === 'EUR') {
      return new Intl.NumberFormat('fr-FR', { 
        style: 'currency', 
        currency: 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2 
      }).format(price);
    }
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price).replace('XOF', 'F CFA');
  };

  return (
    <section className="py-32 relative overflow-hidden bg-bg-primary/50">
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-6"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-primary">Calculateur Automatique</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-display tracking-tight leading-[1.1] text-gradient"
            >
              Configurez votre offre <span className="text-accent-primary">Freestyle.</span>
            </motion.h2>
          </div>

          {/* Currency Switcher */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex p-1 bg-white/[0.03] border border-white/10 rounded-xl"
          >
            <button 
              onClick={() => setCurrency('CFA')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-xs font-bold uppercase tracking-widest ${
                currency === 'CFA' ? 'bg-accent-primary text-white shadow-lg shadow-accent-primary/20' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Coins className="w-4 h-4" />
              CFA
            </button>
            <button 
              onClick={() => setCurrency('EUR')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-xs font-bold uppercase tracking-widest ${
                currency === 'EUR' ? 'bg-accent-primary text-white shadow-lg shadow-accent-primary/20' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Euro className="w-4 h-4" />
              EUR
            </button>
          </motion.div>
        </div>

        {/* Calculator UI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Controls Side */}
          <div className="lg:col-span-8 p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm space-y-12">
            
            {/* CPU Control */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-accent-primary border border-accent-primary/20">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-primary">Processeurs</h4>
                    <p className="text-xs text-text-secondary/60 uppercase tracking-widest font-bold">Puissance de calcul</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-accent-primary">{cpu}</span>
                  <span className="text-xs font-bold text-text-secondary ml-2 uppercase">vCPU</span>
                </div>
              </div>
              <input
                type="range" min="0.5" max="32" step="0.5" value={cpu}
                onChange={(e) => setCpu(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent-primary"
              />
            </div>

            {/* RAM Control */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-accent-primary border border-accent-primary/20">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-primary">Mémoire Vive</h4>
                    <p className="text-xs text-text-secondary/60 uppercase tracking-widest font-bold">RAM Dédiée</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-accent-primary">{ram}</span>
                  <span className="text-xs font-bold text-text-secondary ml-2 uppercase">Go</span>
                </div>
              </div>
              <input
                type="range" min="0.5" max="128" step="0.5" value={ram}
                onChange={(e) => setRam(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent-primary"
              />
            </div>

            {/* Storage Control */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-accent-primary border border-accent-primary/20">
                    <HardDrive className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-primary">Stockage NVMe</h4>
                    <p className="text-xs text-text-secondary/60 uppercase tracking-widest font-bold">SSD Haute Performance</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-accent-primary">{storage}</span>
                  <span className="text-xs font-bold text-text-secondary ml-2 uppercase">Go</span>
                </div>
              </div>
              <input
                type="range" min="10" max="1000" step="10" value={storage}
                onChange={(e) => setStorage(parseInt(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent-primary"
              />
            </div>
          </div>

          {/* Result Side */}
          <div className="lg:col-span-4 flex flex-col p-10 rounded-3xl bg-accent-primary text-white shadow-2xl shadow-accent-primary/20 relative overflow-hidden group">
            {/* Animated background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/20 blur-[50px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-auto">
                <Zap className="w-10 h-10 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-2">Votre Estimation</h3>
                <p className="text-white/70 text-sm font-medium">Facturation mensuelle basée sur vos ressources exactes.</p>
              </div>

              <div className="my-12">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 mb-3">Estimation mensuelle</div>
                <motion.div 
                  key={displayPrice}
                  className="text-5xl font-black tracking-tighter"
                >
                  {formatPrice(displayPrice)}
                </motion.div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/40 mt-3 italic">
                  Approximativement {currency === 'CFA' ? (totalMonthlyCFA / (30 * 24)).toFixed(2) + ' F / heure' : (totalMonthlyCFA / (EUR_TO_CFA * 30 * 24)).toFixed(2) + ' € / heure'}
                </div>
              </div>

              <button 
                onClick={() => onActionClick?.({ cpu, ram, storage, currency, totalMonthlyCFA })}
                className="w-full py-5 rounded-2xl bg-white text-accent-primary font-black text-xl shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                Commander
                <ArrowRight className="w-6 h-6" />
              </button>
              
              <p className="mt-8 text-[10px] font-bold text-white/40 uppercase tracking-widest text-center">
                Zéro frais cachés • Sans engagement
              </p>
            </div>
          </div>
        </motion.div>

        {/* Summary Chips */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary/60">Disponibilité immédiate</span>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-accent-primary" />
             <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary/60">Infrastructure Souveraine</span>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-blue-500" />
             <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary/60">Support Expert 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
}
