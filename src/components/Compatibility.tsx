import React from 'react';
import { motion } from 'motion/react';

const technologies = [
  { name: "Node.js", slug: "node-dot-js", color: "339933" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "PHP", slug: "php", color: "777BB4" },
  { name: "Go", slug: "go", color: "00ADD8" },
  { name: "Ruby", slug: "ruby", color: "CC342D" },
  { name: "Java", slug: "openjdk", color: "007396" },
  { name: "Rust", slug: "rust", color: "FFFFFF" }
];

export default function Compatibility() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#050505]">
      {/* Scan line effect */}
      <motion.div 
        animate={{ y: ['-100%', '1000%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/10 to-transparent pointer-events-none z-0"
      />

      <div className="container mx-auto max-w-[1000px] px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Vos équipes gardent <span className="text-violet-400">leurs habitudes.</span>
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-[700px] mx-auto leading-relaxed">
            CloudNaaba s’adapte aux technologies courantes pour éviter d’imposer des changements inutiles à vos équipes.
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-200 text-center flex flex-col items-center gap-4"
            >
              <img 
                src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                alt={tech.name}
                className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <span className="font-mono text-sm text-white/40 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
          
          {/* Empty slot for balance or extra tech if needed */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="p-6 rounded-xl border border-dashed border-white/5 flex items-center justify-center"
          >
            <span className="text-white/10 text-xs uppercase tracking-widest font-bold">And more...</span>
          </motion.div>
        </div>

        {/* Docker Highlight Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="group relative p-8 rounded-2xl bg-violet-500/[0.02] border border-violet-500/10 hover:border-violet-500/30 transition-all duration-500 overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute -inset-4 bg-violet-500/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 group-hover:bg-violet-500/20 transition-colors">
                <img 
                  src="https://cdn.simpleicons.org/docker/2496ED"
                  alt="Docker"
                  className="w-10 h-10"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-white mb-1">Docker</h3>
                <p className="text-text-secondary">Déploiements standardisés et environnements sur mesure.</p>
              </div>
            </div>
            <div className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold uppercase tracking-widest">
              Standard natif
            </div>
          </div>
        </motion.div>

        {/* Final Statement */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-text-secondary/60 text-sm md:text-base font-medium">
            Votre technologie ne devrait pas être un obstacle à un déploiement propre.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
