import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`premium-card overflow-hidden transition-all duration-500 mb-4 ${
        isOpen ? 'border-accent-primary/30 bg-accent-primary/[0.02]' : 'hover:border-white/10'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full p-8 text-left flex items-center justify-between group"
      >
        <span className={`text-xl font-bold transition-colors duration-300 ${
          isOpen ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'
        }`}>
          {question}
        </span>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
          isOpen ? 'bg-accent-primary text-white rotate-180' : 'bg-white/5 text-text-secondary group-hover:bg-white/10'
        }`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-8 pb-8 text-lg text-text-secondary leading-relaxed border-t border-white/5 pt-6">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const faqs = [
  {
    id: "ollama",
    question: "Qu'est-ce qu'Ollama ?",
    answer: "Ollama est un outil open source qui permet de faire tourner des modèles de langage (LLM) comme Llama 3, Mistral, ou Gemma localement sur votre propre infrastructure. Il simplifie le déploiement et l'exécution de ces modèles sans dépendre de services cloud externes."
  },
  {
    id: "privacy",
    question: "Mes données sont-elles vraiment privées ?",
    answer: "Oui, absolument. Lorsque vous déployez Ollama sur CloudNaaba, tout le traitement de l'IA se fait sur vos propres serveurs. Vos documents, vos questions et les réponses de l'IA ne quittent jamais votre infrastructure sécurisée."
  },
  {
    id: "models",
    question: "Quels modèles puis-je utiliser ?",
    answer: "Vous pouvez utiliser n'importe quel modèle compatible avec Ollama, ce qui inclut la grande majorité des modèles open source populaires : Llama 3, Mistral, Gemma, Phi-3, Llava, et bien d'autres. Nous mettons régulièrement à jour notre catalogue."
  },
  {
    id: "expertise",
    question: "Ai-je besoin d'une expertise technique ?",
    answer: "Non, CloudNaaba simplifie tout le processus. Le déploiement d'Ollama se fait en un clic, et nous fournissons des interfaces prêtes à l'emploi pour discuter avec vos modèles ou connecter vos documents."
  },
  {
    id: "costs",
    question: "Quels sont les coûts associés ?",
    answer: "Les coûts sont basés sur les ressources de calcul (CPU/GPU) que vous allouez à votre instance Ollama sur CloudNaaba. Contrairement aux services d'IA publics facturés au jeton (token), vous payez un coût fixe pour votre infrastructure, ce qui rend l'usage illimité beaucoup plus économique."
  },
  {
    id: "apps",
    question: "Puis-je connecter mes propres applications ?",
    answer: "Oui, Ollama expose une API REST locale sécurisée. Vous pouvez facilement connecter vos propres applications, sites web ou outils d'automatisation (comme n8n ou Flowise) à votre instance d'IA privée."
  }
];

const highlights = [
  { id: "privacy", label: "Confidentialité" },
  { id: "models", label: "Modèles disponibles" },
  { id: "costs", label: "Coûts & Facturation" }
];

export default function AiFAQ() {
  const [openId, setOpenId] = useState<string | null>("ollama");

  const toggleId = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const scrollToAndOpen = (id: string) => {
    setOpenId(id);
    const element = document.getElementById('ai-faq-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="ai-faq-section" className="py-48 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto max-w-[900px] px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-bold uppercase tracking-[0.2em] mb-8">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ IA</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-8 tracking-tight">
            Questions <span className="text-accent-primary">fréquentes.</span>
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-[600px] mx-auto leading-relaxed">
            Tout ce que vous devez savoir sur CloudNaaba IA et Ollama.
          </p>
        </motion.div>

        {/* Highlight Chips */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {highlights.map((chip) => (
            <button
              key={chip.id}
              onClick={() => scrollToAndOpen(chip.id)}
              className="px-6 py-2.5 rounded-full bg-white/[0.03] border border-border-subtle text-sm font-bold text-text-secondary hover:text-text-primary hover:border-accent-primary/30 hover:bg-accent-primary/5 transition-all duration-300 tracking-tight"
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="mb-24">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onClick={() => toggleId(faq.id)}
              />
            </div>
          ))}
        </div>

        {/* Final Reassurance */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center p-12 rounded-[2rem] bg-gradient-to-b from-white/[0.02] to-transparent border border-border-subtle"
        >
          <p className="text-text-secondary text-xl md:text-2xl leading-relaxed italic font-medium">
            "L'IA privée n'est pas une complexité supplémentaire. <br className="hidden md:block" />
            <span className="text-text-primary">C'est le socle de votre future souveraineté numérique.</span>"
          </p>
        </motion.div>

      </div>
    </section>
  );
}
