import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  Layout, 
  GitBranch, 
  MessageSquare, 
  Code2, 
  Brain, 
  ArrowRight,
  Search,
  CheckCircle2
} from 'lucide-react';

const categories = [
  { id: 'all', name: 'Tous', icon: null },
  { id: 'database', name: 'Database', icon: <Database className="w-4 h-4" /> },
  { id: 'cms', name: 'CMS', icon: <Layout className="w-4 h-4" /> },
  { id: 'devops', name: 'DevOps', icon: <GitBranch className="w-4 h-4" /> },
  { id: 'messaging', name: 'Messaging', icon: <MessageSquare className="w-4 h-4" /> },
  { id: 'framework', name: 'Framework', icon: <Code2 className="w-4 h-4" /> },
  { id: 'ai', name: 'AI', icon: <Brain className="w-4 h-4" /> },
];

const apps = [
  { name: 'PostgreSQL', category: 'database', description: 'Base de données relationnelle avancée.' },
  { name: 'Redis', category: 'database', description: 'Stockage de données en mémoire ultra-rapide.' },
  { name: 'MongoDB', category: 'database', description: 'Base de données NoSQL orientée documents.' },
  { name: 'WordPress', category: 'cms', description: 'Le CMS le plus populaire au monde.' },
  { name: 'Strapi', category: 'cms', description: 'CMS Headless open source et personnalisable.' },
  { name: 'GitLab', category: 'devops', description: 'Plateforme DevOps complète pour le cycle de vie du logiciel.' },
  { name: 'Jenkins', category: 'devops', description: 'Serveur d\'automatisation open source leader.' },
  { name: 'RabbitMQ', category: 'messaging', description: 'Agent de messages open source le plus déployé.' },
  { name: 'Kafka', category: 'messaging', description: 'Plateforme de streaming d\'événements distribuée.' },
  { name: 'Next.js', category: 'framework', description: 'Le framework React pour le web.' },
  { name: 'Ollama', category: 'ai', description: 'Faites tourner des LLM localement en toute simplicité.' },
  { name: 'FlowiseAI', category: 'ai', description: 'Interface drag & drop pour construire des apps LLM.' },
];

export default function AiEcosystem() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredApps = activeCategory === 'all' 
    ? apps 
    : apps.filter(app => app.category === activeCategory);

  return (
    <section className="py-48 relative overflow-hidden bg-bg-primary">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] tracking-tight mb-8"
          >
            Une IA utile s’inscrit dans <br />
            <span className="text-accent-primary">un système plus large.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary leading-relaxed max-w-[800px] mx-auto"
          >
            CloudNaaba vous permet de déployer les briques nécessaires autour de votre IA, dans un environnement unique et maîtrisé.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 border ${
                activeCategory === cat.id 
                ? 'bg-accent-primary border-accent-primary text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]' 
                : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:bg-white/10'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredApps.map((app, index) => (
              <motion.div
                key={app.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="h-full premium-card p-8 border-white/5 group-hover:border-accent-primary/40 transition-all duration-500 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white font-bold text-xl group-hover:bg-accent-primary/20 group-hover:text-accent-primary transition-colors">
                      {app.name.charAt(0)}
                    </div>
                    <div className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[8px] font-bold text-gray-500 uppercase tracking-widest">
                      {app.category}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
                    {app.name}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {app.description}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-[10px] font-bold text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>DÉPLOYER</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 text-center"
        >
          <button className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-3 mx-auto group">
            Explorer le catalogue complet
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
