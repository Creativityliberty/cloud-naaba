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
    <section id="compatibility" className="py-48 relative overflow-hidden bg-bg-primary">
      {/* Scan line effect */}
      <motion.div 
        animate={{ y: ['-100%', '1000%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent pointer-events-none z-0"
      />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-8 tracking-tight">
            Vos équipes gardent <span className="text-accent-primary">leurs habitudes.</span>
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-[700px] mx-auto leading-relaxed">
            CloudNaaba s’adapte aux technologies courantes pour éviter d’imposer des changements inutiles à vos équipes.
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-8 premium-card text-center flex flex-col items-center gap-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-border-subtle group-hover:border-accent-primary/30 group-hover:bg-accent-primary/10 transition-all duration-300">
                <img 
                  src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                  alt={tech.name}
                  className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                
                {/* Pulse Effect on Hover */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl border border-accent-primary/50 opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="relative z-10 font-bold text-lg text-text-secondary group-hover:text-text-primary transition-colors tracking-tight">
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
            className="p-8 rounded-2xl border border-dashed border-border-subtle flex items-center justify-center"
          >
            <span className="text-text-secondary/20 text-sm uppercase tracking-[0.2em] font-bold">Et plus encore...</span>
          </motion.div>
        </div>

        {/* Docker Highlight Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="group relative p-10 premium-card overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute -inset-4 bg-accent-primary/5 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 rounded-2xl bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors">
                <img 
                  src="https://cdn.simpleicons.org/docker/2496ED"
                  alt="Docker"
                  className="w-12 h-12"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-text-primary mb-2 tracking-tight">Docker</h3>
                <p className="text-text-secondary text-lg">Déploiements standardisés et environnements sur mesure.</p>
              </div>
            </div>
            <div className="px-6 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-bold uppercase tracking-widest">
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
          className="mt-24 text-center"
        >
          <p className="text-text-secondary/60 text-lg font-medium">
            Votre technologie ne devrait pas être un obstacle à un déploiement propre.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
