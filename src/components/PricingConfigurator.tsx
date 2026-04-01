import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, MemoryStick as Memory, HardDrive, Zap, Info, Globe, CreditCard, Calendar } from 'lucide-react';

type Currency = 'CFA' | 'EUR' | 'USD';
type Period = 'hourly' | 'monthly' | 'yearly';

const CONVERSION_RATES = {
  EUR: 1,
  CFA: 655.957,
  USD: 1.08
};

const PERIOD_MULTIPLIERS = {
  hourly: 1 / 720,
  monthly: 1,
  yearly: 12 * 0.9 // 10% discount for yearly
};

export default function PricingConfigurator() {
  const [cpu, setCpu] = useState(2);
  const [ram, setRam] = useState(4);
  const [storage, setStorage] = useState(50);
  const [currency, setCurrency] = useState<Currency>('CFA');
  const [period, setPeriod] = useState<Period>('monthly');

  // Base monthly cost in EUR
  const cpuPriceEUR = 4.5; // per vCPU
  const ramPriceEUR = 2.0; // per GB
  const storagePriceEUR = 0.12; // per GB NVMe

  const totalMonthlyEUR = useMemo(() => {
    return (cpu * cpuPriceEUR) + (ram * ramPriceEUR) + (storage * storagePriceEUR);
  }, [cpu, ram, storage]);

  const formatPrice = (priceEUR: number) => {
    const converted = priceEUR * CONVERSION_RATES[currency] * PERIOD_MULTIPLIERS[period];
    
    if (currency === 'CFA') {
      return new Intl.NumberFormat('fr-FR').format(Math.round(converted)) + ' F CFA';
    }
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: currency,
    }).format(converted);
  };

  const getPeriodLabel = () => {
    switch(period) {
      case 'hourly': return '/ heure';
      case 'monthly': return '/ mois';
      case 'yearly': return '/ an';
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gradient font-display">Configurateur Freestyle</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto font-medium">
              Ajustez vos ressources au millimètre près. Payez uniquement ce que vous consommez, sans engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls */}
            <div className="lg:col-span-7 premium-card p-8 md:p-10 space-y-12">
              
              {/* Currency & Period Pickers */}
              <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-white/5">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary flex items-center gap-2">
                    <Globe className="w-3 h-3" /> Devise d'affichage
                  </label>
                  <div className="flex p-1 rounded-xl bg-white/5 border border-white/10">
                    {(['CFA', 'EUR', 'USD'] as Currency[]).map((cur) => (
                      <button
                        key={cur}
                        onClick={() => setCurrency(cur)}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                          currency === cur ? 'bg-accent-primary text-white shadow-lg shadow-accent-primary/20' : 'text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        {cur}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> Cycle de facturation
                  </label>
                  <div className="flex p-1 rounded-xl bg-white/5 border border-white/10">
                    {(['hourly', 'monthly', 'yearly'] as Period[]).map((p) => (
                      <button
                        key={p}
                        onClick={() => setPeriod(p)}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                          period === p ? 'bg-accent-primary text-white shadow-lg shadow-accent-primary/20' : 'text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        {p === 'hourly' ? 'Heure' : p === 'monthly' ? 'Mois' : 'An'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Resource Sliders */}
              <div className="space-y-10">
                {/* CPU */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500 border border-orange-500/20">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-text-primary">Processeurs (vCPU)</span>
                    </div>
                    <span className="text-2xl font-black text-accent-primary">{cpu}</span>
                  </div>
                  <input
                    type="range" min="0.5" max="64" step="0.5"
                    value={cpu} onChange={(e) => setCpu(Number(e.target.value))}
                    className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-accent-primary"
                  />
                </div>

                {/* RAM */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/20">
                        <Memory className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-text-primary">Mémoire vive (RAM GB)</span>
                    </div>
                    <span className="text-2xl font-black text-accent-primary">{ram} GB</span>
                  </div>
                  <input
                    type="range" min="0.5" max="128" step="0.5"
                    value={ram} onChange={(e) => setRam(Number(e.target.value))}
                    className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-accent-primary"
                  />
                </div>

                {/* Storage */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        <HardDrive className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-text-primary">Stockage NVMe (GB)</span>
                    </div>
                    <span className="text-2xl font-black text-accent-primary">{storage} GB</span>
                  </div>
                  <input
                    type="range" min="10" max="2000" step="10"
                    value={storage} onChange={(e) => setStorage(Number(e.target.value))}
                    className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-accent-primary"
                  />
                </div>
              </div>
            </div>

            {/* Price Preview */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="premium-card p-10 bg-accent-primary/[0.03] border-accent-primary/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <Zap className="w-32 h-32 text-accent-primary" />
                </div>
                
                <div className="relative z-10 text-center space-y-6">
                  <h3 className="text-text-secondary text-sm font-black uppercase tracking-[0.2em]">Total Estimé</h3>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${currency}-${period}-${totalMonthlyEUR}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-5xl font-black text-text-primary"
                    >
                      {formatPrice(totalMonthlyEUR)} <span className="text-lg text-text-secondary font-bold opacity-60">{getPeriodLabel()}</span>
                    </motion.div>
                  </AnimatePresence>
                  
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 inline-flex items-center gap-3 text-xs text-text-secondary font-medium">
                    <Zap className="w-4 h-4 text-accent-primary" />
                    Facturation à l'usage réel
                  </div>
                </div>

                <div className="mt-12 space-y-4">
                  <button className="w-full py-5 rounded-2xl bg-accent-primary text-white font-black text-lg shadow-xl shadow-accent-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                    <CreditCard className="w-6 h-6" />
                    Déployer cette config
                  </button>
                  <p className="text-[10px] text-center text-text-secondary font-bold uppercase tracking-widest opacity-50">
                    Activation instantanée • Annulation à tout moment
                  </p>
                </div>
              </div>

              <div className="premium-card p-6 bg-white/[0.02] border-white/5 flex items-start gap-4">
                <div className="pt-1">
                  <Info className="w-5 h-5 text-accent-primary" />
                </div>
                <p className="text-sm text-text-secondary leading-relaxed font-medium">
                  Les ressources peuvent être ajustées <span className="text-text-primary font-bold">à chaud</span> sans redémarrage. Vos données sont persistées sur du stockage NVMe haute performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
