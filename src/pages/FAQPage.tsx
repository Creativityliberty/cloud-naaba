import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Search, Filter, ShieldCheck, Zap, Globe, Database, Cpu } from 'lucide-react';

const faqCategories = [
  { id: 'general', label: 'Général', icon: HelpCircle },
  { id: 'security', label: 'Sécurité', icon: ShieldCheck },
  { id: 'technical', label: 'Technique', icon: Terminal },
  { id: 'billing', label: 'Facturation', icon: Database },
];

function Terminal(props: any) { return <Cpu {...props} /> } // Helper for terminal icon replacement

const faqs = [
  {
    cat: 'general',
    q: "Qu'est-ce que CloudNaaba au juste ?",
    a: "CloudNaaba est une plateforme d'orchestration hybride et souveraine. Elle vous permet de centraliser la gestion de vos serveurs (clous publics, locaux, bare metal) et de déployer vos applications et modèles IA en toute simplicité."
  },
  {
    cat: 'general',
    q: "Proposez-vous de l'infrastructure physique ?",
    a: "Oui, mais pas seulement. Nous proposons nos propres instances cloud souveraines, mais notre force est de vous permettre de connecter votre propre infrastructure existante pour la piloter unifiée."
  },
  {
    cat: 'security',
    q: "Mes données sont-elles vraiment en sécurité ?",
    a: "Absolument. Nous utilisons un chiffrement de bout en bout pour toutes les communications. Vos données applicatives restent sur vos serveurs ou sur nos infrastructures chiffrées selon vos choix. Nous respectons scrupuleusement le RGPD et les standards de souveraineté."
  },
  {
    cat: 'security',
    q: "Où sont localisés vos serveurs ?",
    a: "Nos serveurs partenaires et nos propres infrastructures sont localisés dans des datacenters certifiés en Europe et en Afrique, garantissant une souveraineté locale des données."
  },
  {
    cat: 'technical',
    q: "Quels langages de programmation supportez-vous ?",
    a: "Grâce à notre moteur basé sur les conteneurs (Docker/OCI), vous pouvez déployer n'importe quel langage : Node.js, Python (parfait pour l'IA), Go, Java, Rust, etc."
  },
  {
    cat: 'technical',
    q: "Puis-je utiliser mes propres noms de domaine ?",
    a: "Oui. CloudNaaba intègre un gestionnaire de domaines et génère automatiquement vos certificats SSL gratuits via Let's Encrypt."
  },
  {
    cat: 'billing',
    q: "Comment fonctionne la facturation à l'heure ?",
    a: "Vos ressources sont calculées chaque heure. Si vous lancez une instance pour une démonstration de 3 heures, vous ne payez que pour ces 3 heures. C'est la transparence totale."
  },
  {
    cat: 'billing',
    q: "Y a-t-il des frais d'installation ?",
    a: "Aucun frais d'installation. Vous créez votre compte gratuitement, vous configurez votre infrastructure et vous payez uniquement ce que vous consommez."
  }
];

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState('');

  const filteredFaqs = faqs.filter(f => {
     const matchesTab = activeTab === 'all' || f.cat === activeTab;
     const matchesSearch = f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase());
     return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-40 pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[1100px] h-[550px] bg-accent-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-[1000px] px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20">
               <HelpCircle className="w-6 h-6 text-accent-primary" />
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black font-display tracking-tight mb-8 text-gradient"
          >
            Comment pouvons-nous vous aider ?
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group max-w-xl mx-auto"
          >
             <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary opacity-40 group-focus-within:text-accent-primary transition-all" />
             <input 
               type="text" 
               placeholder="Rechercher une question..."
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="w-full h-16 pl-16 pr-8 bg-white/[0.03] border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-primary/40 focus:border-accent-primary transition-all text-text-primary text-lg font-medium"
             />
          </motion.div>
        </div>

        {/* Categories / Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button 
             onClick={() => setActiveTab('all')}
             className={`px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all border ${
               activeTab === 'all' ? 'bg-accent-primary text-white border-accent-primary shadow-xl shadow-accent-primary/20' : 'bg-white/5 text-text-secondary border-white/5 hover:bg-white/10'
             }`}
          >
             Toutes les questions
          </button>
          {faqCategories.map(cat => (
            <button 
               key={cat.id}
               onClick={() => setActiveTab(cat.id)}
               className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all border ${
                 activeTab === cat.id ? 'bg-accent-primary text-white border-accent-primary shadow-xl shadow-accent-primary/20' : 'bg-white/5 text-text-secondary border-white/5 hover:bg-white/10'
               }`}
            >
               <cat.icon className="w-3.5 h-3.5" />
               {cat.label}
            </button>
          ))}
        </div>

        {/* FAQs List */}
        <div className="space-y-6">
           <AnimatePresence mode="popLayout">
           {filteredFaqs.map((faq, i) => (
             <motion.div 
               key={faq.q}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.95 }}
               transition={{ duration: 0.4 }}
               className={`group overflow-hidden rounded-[32px] border transition-all duration-500 ${
                 openIndex === i ? 'bg-white/[0.04] border-accent-primary/40' : 'bg-white/[0.02] border-white/5 hover:border-white/10'
               }`}
             >
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left group-hover:bg-white/5 transition-colors"
                >
                   <span className={`text-xl font-bold transition-all ${openIndex === i ? 'text-accent-primary' : 'text-text-primary'}`}>
                      {faq.q}
                   </span>
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      openIndex === i ? 'bg-accent-primary text-white rotate-180' : 'bg-white/5 text-text-secondary'
                   }`}>
                      <ChevronDown className="w-5 h-5" />
                   </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-lg leading-relaxed text-text-secondary/80 font-medium border-t border-white/5 pt-6">
                         {faq.a}
                         <div className="mt-8 flex items-center gap-3">
                            <span className="text-[10px] font-black uppercase text-text-secondary/40">Cette réponse vous a aidé ?</span>
                            <div className="flex gap-2">
                               <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-green-500/20 text-xs flex items-center justify-center transition-all">👍</button>
                               <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-red-500/20 text-xs flex items-center justify-center transition-all">👎</button>
                            </div>
                         </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
             </motion.div>
           ))}
           </AnimatePresence>
           
           {filteredFaqs.length === 0 && (
             <div className="text-center py-20 p-12 bg-white/[0.02] border border-dashed border-white/10 rounded-[32px]">
                <div className="text-text-secondary text-lg font-medium mb-4">Aucune question ne correspond à votre recherche.</div>
                <button 
                  onClick={() => {setSearch(''); setActiveTab('all')}}
                  className="text-accent-primary font-bold hover:underline"
                >
                  Afficher tout
                </button>
             </div>
           )}
        </div>

        {/* Final CTA Strip */}
        <div className="mt-24 text-center">
           <div className="text-text-secondary/40 text-[10px] font-black uppercase tracking-widest mb-4">Besoin de plus de détails ?</div>
           <button 
             onClick={() => window.location.href = '/contact'}
             className="px-8 py-3 rounded-full bg-white/5 text-text-primary text-sm font-black uppercase tracking-widest border border-white/10 hover:border-accent-primary/50 transition-all hover:-translate-y-1 active:scale-95"
           >
             Parler à un expert
           </button>
        </div>
      </div>
    </div>
  );
}
