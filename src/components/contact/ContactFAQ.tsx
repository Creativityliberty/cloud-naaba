import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Puis-je parler à quelqu'un avant de choisir une offre ?",
      a: "Oui. C'est même recommandé si vous hésitez entre plusieurs approches ou si votre contexte n'est pas standard."
    },
    {
      q: "Est-ce que vous accompagnez les migrations ?",
      a: "Oui. CloudNaaba peut vous aider à cadrer, préparer et exécuter une transition selon votre existant."
    },
    {
      q: "Puis-je vous contacter pour un projet IA privé ?",
      a: "Oui. Si vous envisagez Ollama, Flowise, une stack IA privée ou une architecture autour de cas d'usage sensibles, l'équipe peut vous orienter."
    },
    {
      q: "Le Discord suffit-il pour tous les sujets ?",
      a: "Non. Le Discord est utile pour certains échanges rapides, mais les besoins commerciaux, sensibles ou structurants passent mieux par un canal direct."
    },
    {
      q: "Puis-je vous écrire même si mon besoin n'est pas encore défini ?",
      a: "Oui. Il vaut mieux ouvrir la discussion tôt plutôt que rester bloqué dans l'incertitude."
    },
    {
      q: "Est-ce que vous traitez aussi les besoins entreprise et sécurité ?",
      a: "Oui. Les sujets d'infrastructure dédiée, d'hybride, de sécurité renforcée et d'architecture complexe font partie des cas pris en charge."
    }
  ];

  return (
    <section className="py-24 border-t border-border-subtle bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto max-w-[800px] px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display leading-[1.1] mb-6">
            Questions fréquentes
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-white/10 bg-white/[0.02] rounded-[1.5rem] overflow-hidden hover:border-white/20 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 lg:px-8 py-5 flex items-center justify-between gap-6"
              >
                <span className="font-bold text-lg text-white font-display">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full rounded bg-white/5 flex items-center justify-center transition-transform duration-300 shrink-0 ${
                  openIndex === index ? 'rotate-180 bg-accent-primary text-white' : 'text-text-secondary'
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 lg:px-8 pb-6 text-text-secondary leading-relaxed font-medium border-t border-white/5 pt-4">
                      {faq.a}
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
