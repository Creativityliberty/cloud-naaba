import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Qu'est-ce qu'Ollama ?",
    answer: "Ollama est un outil open source qui permet de faire tourner des modèles de langage (LLM) comme Llama 3, Mistral, ou Gemma localement sur votre propre infrastructure. Il simplifie le déploiement et l'exécution de ces modèles sans dépendre de services cloud externes."
  },
  {
    question: "Mes données sont-elles vraiment privées ?",
    answer: "Oui, absolument. Lorsque vous déployez Ollama sur CloudNaaba, tout le traitement de l'IA se fait sur vos propres serveurs. Vos documents, vos questions et les réponses de l'IA ne quittent jamais votre infrastructure sécurisée."
  },
  {
    question: "Quels modèles puis-je utiliser ?",
    answer: "Vous pouvez utiliser n'importe quel modèle compatible avec Ollama, ce qui inclut la grande majorité des modèles open source populaires : Llama 3, Mistral, Gemma, Phi-3, Llava, et bien d'autres. Nous mettons régulièrement à jour notre catalogue."
  },
  {
    question: "Ai-je besoin d'une expertise technique ?",
    answer: "Non, CloudNaaba simplifie tout le processus. Le déploiement d'Ollama se fait en un clic, et nous fournissons des interfaces prêtes à l'emploi pour discuter avec vos modèles ou connecter vos documents."
  },
  {
    question: "Quels sont les coûts associés ?",
    answer: "Les coûts sont basés sur les ressources de calcul (CPU/GPU) que vous allouez à votre instance Ollama sur CloudNaaba. Contrairement aux services d'IA publics facturés au jeton (token), vous payez un coût fixe pour votre infrastructure, ce qui rend l'usage illimité beaucoup plus économique."
  },
  {
    question: "Puis-je connecter mes propres applications ?",
    answer: "Oui, Ollama expose une API REST locale sécurisée. Vous pouvez facilement connecter vos propres applications, sites web ou outils d'automatisation (comme n8n ou Flowise) à votre instance d'IA privée."
  }
];

export default function AiFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display leading-tight tracking-tight mb-8"
          >
            Questions <span className="text-accent-primary">fréquentes.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary leading-relaxed max-w-[700px] mx-auto"
          >
            Tout ce que vous devez savoir sur CloudNaaba IA et Ollama.
          </motion.p>
        </div>

        <div className="max-w-[800px] mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`glass-card overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'border-accent-primary/40 bg-accent-primary/5' : 'border-white/5 hover:border-white/10'
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-bold transition-colors ${
                  activeIndex === index ? 'text-accent-primary' : 'text-text-primary group-hover:text-accent-primary'
                }`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeIndex === index ? 'bg-accent-primary text-white rotate-180' : 'bg-white/5 text-gray-400'
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-text-secondary leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
