import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Mail, Lock, User, Terminal, Globe, Brain } from 'lucide-react';

export type ModalType = 'login' | 'signup' | 'contact' | 'demo' | 'agent' | 'migration' | 'publish' | 'deploy' | null;

interface GlobalModalProps {
  type: ModalType;
  onClose: () => void;
}

export default function GlobalModal({ type, onClose }: GlobalModalProps) {
  if (!type) return null;

  const getContent = () => {
    switch (type) {
      case 'login':
        return {
          title: "Connexion.",
          subtitle: "Accédez à votre console CloudNaaba.",
          icon: Lock,
          fields: [
            { label: "Email", type: "email", placeholder: "votre@email.com", icon: Mail },
            { label: "Mot de passe", type: "password", placeholder: "••••••••", icon: Lock }
          ],
          button: "Se connecter"
        };
      case 'signup':
        return {
          title: "Créer un compte.",
          subtitle: "Commencez à piloter votre infrastructure dès maintenant.",
          icon: User,
          fields: [
            { label: "Nom complet", type: "text", placeholder: "Jean Dupont", icon: User },
            { label: "Email professionnel", type: "email", placeholder: "votre@entreprise.com", icon: Mail },
            { label: "Mot de passe", type: "password", placeholder: "••••••••", icon: Lock }
          ],
          button: "Démarrer gratuitement"
        };
      case 'contact':
      case 'migration':
        return {
          title: type === 'migration' ? "Accompagnement Migration." : "Contacter un expert.",
          subtitle: "Nos ingénieurs vous rappellent sous 24h.",
          icon: Mail,
          fields: [
            { label: "Nom complet", type: "text", placeholder: "Jean Dupont", icon: User },
            { label: "Email professionnel", type: "email", placeholder: "votre@entreprise.com", icon: Mail },
            { label: "Message", type: "textarea", placeholder: "Comment pouvons-nous vous aider ?", icon: Terminal }
          ],
          button: "Envoyer ma demande"
        };
      case 'agent':
        return {
          title: "Connecter un serveur.",
          subtitle: "Installez l'agent CloudNaaba en une ligne de commande.",
          icon: Terminal,
          fields: [],
          custom: (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-black border border-white/10 font-mono text-sm text-accent-primary relative group">
                <code>curl -sSL https://get.cloudnaaba.com | bash -s -- --token=CN_8293_XJ2</code>
                <button className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <Terminal className="w-4 h-4 text-text-secondary" />
                </button>
              </div>
              <p className="text-sm text-text-secondary text-center italic">
                L'agent détectera automatiquement votre OS (Ubuntu, CentOS, Windows, etc.)
              </p>
            </div>
          ),
          button: "J'ai terminé l'installation"
        };
      case 'demo':
        return {
          title: "Voir la démo.",
          subtitle: "Découvrez la puissance de CloudNaaba en 2 minutes.",
          icon: Globe,
          custom: (
            <div className="aspect-video rounded-2xl bg-black border border-white/10 flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-transparent opacity-50" />
              <div className="w-20 h-20 rounded-full bg-accent-primary flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
              </div>
            </div>
          ),
          button: "Démarrer mon essai gratuit"
        };
      case 'deploy':
        return {
          title: "Déployer le modèle.",
          subtitle: "Sélectionnez l'infrastructure de destination.",
          icon: Brain,
          fields: [
            { label: "Nom du déploiement", type: "text", placeholder: "Mon-IA-Production", icon: Terminal }
          ],
          custom: (
            <div className="grid grid-cols-2 gap-4">
              {['AWS Cluster', 'OVH Dedicated', 'Local Server', 'Google Cloud'].map((infra) => (
                <button key={infra} className="p-4 rounded-xl bg-white/5 border border-white/10 text-left hover:border-accent-primary/30 hover:bg-accent-primary/5 transition-all">
                  <p className="text-sm font-bold text-text-primary">{infra}</p>
                  <p className="text-[10px] text-text-secondary">Prêt pour déploiement</p>
                </button>
              ))}
            </div>
          ),
          button: "Lancer le déploiement"
        };
      case 'publish':
        return {
          title: "Publier un modèle.",
          subtitle: "Partagez votre expertise avec la communauté.",
          icon: Brain,
          fields: [
            { label: "Nom du modèle", type: "text", placeholder: "Llama-3-Optimized", icon: Brain },
            { label: "Description courte", type: "text", placeholder: "Modèle optimisé pour...", icon: Terminal }
          ],
          button: "Soumettre pour revue"
        };
      default:
        return null;
    }
  };

  const content = getContent();
  if (!content) return null;

  const Icon = content.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-[500px] bg-bg-primary border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10"
          >
            <X className="w-5 h-5 text-text-secondary" />
          </button>

          <div className="p-12">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="w-16 h-16 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center mx-auto mb-6">
                <Icon className="w-8 h-8 text-accent-primary" />
              </div>
              <h2 className="text-3xl font-bold font-display text-text-primary mb-2">{content.title}</h2>
              <p className="text-text-secondary">{content.subtitle}</p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4 mb-8">
              {content.fields?.map((field, i) => (
                <div key={i} className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-secondary/60 ml-1">
                    {field.label}
                  </label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/40 group-focus-within:text-accent-primary transition-colors">
                      <field.icon className="w-5 h-5" />
                    </div>
                    {field.type === 'textarea' ? (
                      <textarea
                        placeholder={field.placeholder}
                        className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-accent-primary/30 focus:bg-accent-primary/[0.02] transition-all min-h-[120px] resize-none"
                      />
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-accent-primary/30 focus:bg-accent-primary/[0.02] transition-all"
                      />
                    )}
                  </div>
                </div>
              ))}
              {content.custom}
            </div>

            {/* Action Button */}
            <button
              onClick={onClose}
              className="w-full py-5 rounded-2xl bg-accent-primary text-white font-black text-lg shadow-xl hover:shadow-accent-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {content.button}
            </button>

            {/* Footer Reassurance */}
            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-text-secondary/40 font-bold uppercase tracking-widest">
              <CheckCircle2 className="w-4 h-4 text-accent-primary/40" />
              <span>Sécurisé par CloudNaaba Guard</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
