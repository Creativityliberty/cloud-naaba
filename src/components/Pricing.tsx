import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Cpu, Database, HardDrive, Zap, Globe, Brain, ShieldCheck, Coins, Euro } from 'lucide-react';

const categories = [
  { id: 'web', label: 'Web & Apps', icon: Globe },
  { id: 'ai', label: 'IA & Big Data', icon: Brain },
  { id: 'enterprise', label: 'Entreprise', icon: ShieldCheck },
];

const plansByCat = {
  web: [
    {
      name: "Starter",
      description: "Idéal pour petits projets, portfolio ou tests API.",
      priceCFA: 1000,
      specs: { cpu: "0.5 vCPU", ram: "0.5 Go", storage: "10 Go" },
      features: ["Certificat SSL offert", "Mise à jour Git", "Backups hebdo"],
      cta: "Lancer Starter",
      highlight: false,
    },
    {
      name: "Standard",
      description: "Pour startups et PME en croissance.",
      priceCFA: 7500,
      specs: { cpu: "1 vCPU", ram: "2 Go", storage: "50 Go" },
      features: ["Performance garantie", "Support 24/7", "Auto-scaling basic", "SLA 99.9%"],
      cta: "Choisir Standard",
      highlight: true,
      badge: "Populaire",
    },
    {
      name: "Premium",
      description: "Applications critiques à fort trafic.",
      priceCFA: 25000,
      specs: { cpu: "4 vCPU", ram: "8 Go", storage: "150 Go" },
      features: ["Ressources isolées", "Account Manager dédié", "SLA 99.99%", "WAF inclus"],
      cta: "Passer Premium",
      highlight: false,
    }
  ],
  ai: [
    {
      name: "Model Host",
      description: "Hébergez vos modèles LLM (Ollama, etc.).",
      priceCFA: 45000,
      specs: { cpu: "8 vCPU", ram: "16 Go", storage: "200 Go" },
      features: ["Optimisé Inférence", "VPU Acceleration", "Multi-modèles", "API Privée"],
      cta: "Déployer IA",
      highlight: true,
    },
    {
      name: "Big Data Lab",
      description: "Analyse massive et traitement parallele.",
      priceCFA: 95000,
      specs: { cpu: "16 vCPU", ram: "64 Go", storage: "1 To" },
      features: ["Cluster Spark prêt", "Espace Disque Massive", "Bande passante 1Gbps", "Backup Temps Réel"],
      cta: "Lancer Lab",
      highlight: false,
    }
  ],
  enterprise: [
    {
      name: "Infrastructure Privée",
      description: "Contrôle total sur votre propre hardware.",
      priceCFA: 0,
      isCustom: true,
      specs: { cpu: "Sur mesure", ram: "Sur mesure", storage: "Sur mesure" },
      features: ["Gouvernance totale", "Conformité Règlementaire", "Audit sécurité annuel", "Hybridation Multi-Cloud"],
      cta: "Contacter Sales",
      highlight: false,
    }
  ]
};

export default function Pricing({ onPlanSelect }: { onPlanSelect?: (plan: string) => void }) {
  const [activeCat, setActiveCat] = useState('web');
  const [currency, setCurrency] = useState<'CFA' | 'EUR'>('CFA');
  const EUR_TO_CFA = 655.957;

  const currentPlans = plansByCat[activeCat as keyof typeof plansByCat];

  const formatPrice = (price: number) => {
    if (price === 0) return "Sur devis";
    if (currency === 'EUR') {
      return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price / EUR_TO_CFA);
    }
    return new Intl.NumberFormat('fr-FR').format(price) + ' F';
  };

  return (
    <section id="pricing" className="py-32 relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20">
          <div className="text-center md:text-left max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-6"
            >
              <Zap className="w-3 h-3 text-accent-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-primary">Offres Souveraines</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold font-display tracking-tight leading-[1.1] text-gradient"
            >
              Des tarifs simples, <br />sans surprises.
            </motion.h2>
          </div>

          {/* Global Currency Toggle */}
          <div className="flex p-1 bg-white/[0.03] border border-white/10 rounded-xl">
            <button 
              onClick={() => setCurrency('CFA')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-xs font-bold uppercase tracking-widest ${
                currency === 'CFA' ? 'bg-accent-primary text-white' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Coins className="w-4 h-4" /> CFA
            </button>
            <button 
              onClick={() => setCurrency('EUR')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-xs font-bold uppercase tracking-widest ${
                currency === 'EUR' ? 'bg-accent-primary text-white' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Euro className="w-4 h-4" /> EUR
            </button>
          </div>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center mb-16 px-4">
          <div className="inline-flex flex-wrap justify-center gap-3 p-2 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeCat === cat.id 
                    ? 'bg-accent-primary text-white shadow-xl shadow-accent-primary/20' 
                    : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
                }`}
              >
                <cat.icon className="w-5 h-5" />
                <span className="font-bold text-sm uppercase tracking-widest">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 content-stretch">
          <AnimatePresence mode="wait">
            {currentPlans.map((plan, index) => (
              <motion.div
                key={plan.name + activeCat}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative flex flex-col p-1 bg-gradient-to-br transition-all duration-500 rounded-[32px] ${
                  plan.highlight 
                    ? 'from-accent-primary/40 via-accent-primary/10 to-transparent p-[2px]' 
                    : 'from-white/10 to-transparent p-[1px]'
                }`}
              >
                <div className="flex flex-col h-full bg-bg-elevated/90 backdrop-blur-xl p-10 rounded-[30px] group transition-all duration-500">
                  
                  {plan.badge && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-accent-primary text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                      {plan.badge}
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-text-primary mb-3">{plan.name}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed min-h-[48px]">{plan.description}</p>
                  </div>

                  <div className="mb-8 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] space-y-4">
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-text-secondary">
                           <Cpu className="w-4 h-4 opacity-40" />
                           <span className="text-xs uppercase font-bold tracking-widest">CPU</span>
                        </div>
                        <span className="font-black text-text-primary">{plan.specs.cpu}</span>
                     </div>
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-text-secondary">
                           <Database className="w-4 h-4 opacity-40" />
                           <span className="text-xs uppercase font-bold tracking-widest">RAM</span>
                        </div>
                        <span className="font-black text-text-primary">{plan.specs.ram}</span>
                     </div>
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-text-secondary">
                           <HardDrive className="w-4 h-4 opacity-40" />
                           <span className="text-xs uppercase font-bold tracking-widest">Disque</span>
                        </div>
                        <span className="font-black text-text-primary">{plan.specs.storage}</span>
                     </div>
                  </div>

                  <div className="mb-10">
                    <div className="flex items-end gap-2">
                       <span className="text-4xl font-black text-text-primary tracking-tight">{formatPrice(plan.priceCFA)}</span>
                       {!plan.isCustom && <span className="text-text-secondary text-xs uppercase font-bold tracking-widest mb-1.5">/ mois</span>}
                    </div>
                  </div>

                  <div className="flex-1 space-y-4 mb-10">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-text-secondary font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => onPlanSelect?.(plan.name)}
                    className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-300 ${
                      plan.highlight 
                        ? 'bg-accent-primary text-white shadow-xl shadow-accent-primary/20 hover:scale-[1.03]' 
                        : 'bg-white/5 text-text-primary hover:bg-white/10'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
