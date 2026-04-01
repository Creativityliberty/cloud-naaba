import React from 'react';
import { motion } from 'motion/react';
import { 
  Book, 
  PlayCircle, 
  Terminal, 
  Cpu, 
  ArrowRight, 
  Lightbulb, 
  Code, 
  Cloud,
  Zap,
  Globe,
  Database
} from 'lucide-react';

const guideCategories = [
  {
    title: "Démarrage Rapide",
    description: "Tout ce qu'il faut savoir pour lancer votre premier serveur en moins de 5 minutes.",
    icon: PlayCircle,
    color: "bg-green-500/10 text-green-500",
    articles: [
      "Création de votre premier compte",
      "Connexion d'un serveur Bare Metal",
      "Déployer un conteneur Docker",
      "Gérer vos noms de domaine"
    ]
  },
  {
    title: "Gestion d'Infrastructures",
    description: "Maîtrisez l'orchestration hybride et la mise à l'échelle automatique.",
    icon: Cloud,
    color: "bg-blue-500/10 text-blue-500",
    articles: [
      "Configuration du load balancer",
      "Automatiser les sauvegardes",
      "Mise à jour sans coupure (Zero Downtime)",
      "Pare-feu et Isolation réseau"
    ]
  },
  {
    title: "IA & Marketplace",
    description: "Apprenez à tirer profit de l'IA souveraine sans effort.",
    icon: Lightbulb,
    color: "bg-purple-500/10 text-purple-500",
    articles: [
      "Lancer un modèle Llama 3",
      "Entraînement avec vos données locales",
      "Sécurisation des endpoints IA",
      "Facturation par jeton (tokens)"
    ]
  },
  {
    title: "Advanced API & SDK",
    description: "Automatisez CloudNaaba via notre API REST et nos bibliothèques.",
    icon: Code,
    color: "bg-orange-500/10 text-orange-500",
    articles: [
      "Authentification API",
      "Webhooks et Événements",
      "Utilisation du CLI CloudNaaba",
      "Intégration CI/CD GitHub/GitLab"
    ]
  }
];

export default function HelpPage() {
  return (
    <div className="min-h-screen pt-40 pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[1200px] h-[600px] bg-accent-primary/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 rounded-[2rem] bg-accent-primary/10 flex items-center justify-center mb-10 mx-auto"
          >
             <Book className="w-10 h-10 text-accent-primary" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black font-display tracking-tight mb-8 text-gradient"
          >
            Centre d'Aide & Documentation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary leading-relaxed font-medium mx-auto max-w-2xl px-4"
          >
             Découvrez comment tirer le meilleur parti de CloudNaaba. Des guides pas à pas pour les développeurs et les entreprises.
          </motion.p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {guideCategories.map((cat, i) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 md:p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-accent-primary/30 transition-all shadow-2xl relative overflow-hidden flex flex-col items-start"
            >
               <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-all group-hover:scale-110">
                  <cat.icon className="w-48 h-48" />
               </div>
               
               <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mb-8`}>
                  <cat.icon className="w-7 h-7" />
               </div>
               
               <h3 className="text-2xl font-black text-text-primary mb-4">{cat.title}</h3>
               <p className="text-text-secondary/80 font-medium leading-relaxed mb-8 max-w-[80%]">{cat.description}</p>
               
               <ul className="space-y-3 w-full mb-10">
                 {cat.articles.map((art, artIdx) => (
                   <li key={artIdx} className="flex items-center gap-3 text-text-secondary/60 hover:text-text-primary transition-colors cursor-pointer font-bold text-sm tracking-tight group/link py-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                      {art}
                      <ArrowRight className="w-3.5 h-3.5 text-accent-primary opacity-0 group-hover/link:opacity-100 transition-all translate-x-1" />
                   </li>
                 ))}
               </ul>
               
               <button className="mt-auto px-6 py-3 rounded-xl bg-white/5 text-[10px] font-black uppercase tracking-widest text-text-primary hover:bg-accent-primary transition-all group-active:scale-95 shadow-lg border border-white/5">
                 Explorer la section
               </button>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
           {[
             { title: "Statut des services", val: "99.9%", icon: Zap },
             { title: "Régions disponibles", val: "34", icon: Globe },
             { title: "Bases de données", val: "Natives", icon: Database }
           ].map((item, i) => (
             <div key={i} className="flex items-center gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5 shadow-lg group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-accent-primary/10 group-hover:border-accent-primary/30 transition-all">
                   <item.icon className="w-6 h-6 text-accent-primary" />
                </div>
                <div>
                   <div className="text-text-secondary/40 text-[10px] font-black uppercase tracking-widest leading-none mb-1">{item.title}</div>
                   <div className="text-2xl font-black text-text-primary">{item.val}</div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
