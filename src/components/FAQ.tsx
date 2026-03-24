import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  key?: string | number;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className={`border-b border-white/5 transition-colors duration-300 ${isOpen ? 'bg-white/[0.02]' : ''}`}>
      <button
        onClick={onClick}
        className="w-full py-6 px-4 flex items-center justify-between text-left group"
      >
        <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-violet-400' : 'text-white/80 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-violet-500/20 text-violet-400 rotate-180' : 'bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-8 text-text-secondary leading-relaxed max-w-[800px]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqs = [
  {
    id: "hosting",
    question: "Est-ce que CloudNaaba est juste un hébergement ?",
    answer: "Non. CloudNaaba ajoute une couche d’exploitation : déploiement, sécurité, supervision et continuité. L’hébergement seul ne couvre pas ces éléments essentiels à la stabilité de votre activité."
  },
  {
    id: "expertise",
    question: "Faut-il une équipe technique avancée pour l’utiliser ?",
    answer: "Non. La plateforme est conçue pour des structures qui veulent déployer sérieusement sans dépendre d’une expertise infra lourde. Nous automatisons la complexité pour vous laisser vous concentrer sur votre produit."
  },
  {
    id: "data",
    question: "Est-ce que je garde la maîtrise de mes données ?",
    answer: "Oui. La maîtrise et la réversibilité sont des principes clés de CloudNaaba. Vous gardez le contrôle total sur vos données, vos services et votre configuration. Pas de verrouillage propriétaire."
  },
  {
    id: "pme",
    question: "Est-ce adapté à une PME ?",
    answer: "Oui. CloudNaaba est pensé pour les entreprises qui ont des projets numériques importants sans équipe d’exploitation complète. C'est le partenaire idéal pour stabiliser votre croissance technique."
  },
  {
    id: "sensitive",
    question: "Est-ce adapté à des projets sensibles ?",
    answer: "Oui. Dès qu’il y a des enjeux de sécurité, de continuité ou de gouvernance, un cadre d’exploitation plus structuré devient essentiel. CloudNaaba fournit ce cadre par défaut."
  },
  {
    id: "price",
    question: "Pourquoi ne pas simplement prendre un serveur moins cher ?",
    answer: "Parce que le coût réel ne se limite pas au serveur. Il inclut la gestion, les risques d'interruption, les erreurs de configuration et la dépendance humaine — des coûts cachés que CloudNaaba réduit drastiquement."
  }
];

const highlights = [
  { id: "data", label: "Maîtrise des données" },
  { id: "expertise", label: "Besoin d'experts ?" },
  { id: "sensitive", label: "Projets critiques" }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleId = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const scrollToAndOpen = (id: string) => {
    setOpenId(id);
    const element = document.getElementById('faq-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="faq-section" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto max-w-[900px] px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold uppercase tracking-widest mb-6">
            <HelpCircle className="w-3 h-3" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Questions <span className="text-violet-400">fréquentes</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-[600px] mx-auto">
            Les points qui reviennent le plus souvent avant de démarrer avec CloudNaaba.
          </p>
        </motion.div>

        {/* Highlight Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {highlights.map((chip) => (
            <button
              key={chip.id}
              onClick={() => scrollToAndOpen(chip.id)}
              className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-sm text-white/60 hover:text-white hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300"
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="border-t border-white/5 mb-20"
        >
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onClick={() => toggleId(faq.id)}
            />
          ))}
        </motion.div>

        {/* Final Reassurance */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center p-10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5"
        >
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed italic">
            "Vous n’avez pas besoin de tout anticiper dès le départ. <br className="hidden md:block" />
            <span className="text-white">CloudNaaba est conçu pour vous accompagner dans la durée.</span>"
          </p>
        </motion.div>

      </div>
    </section>
  );
}
