import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Database, Layout, ArrowRight, CheckCircle2, Share2, Zap, MessageSquare } from 'lucide-react';

const stackNodes = [
  { id: 'n8n', label: 'n8n', logo: 'https://cdn.simpleicons.org/n8n', angle: 0 },
  { id: 'flowise', label: 'Flowise', logo: 'https://avatars.githubusercontent.com/u/124056254?s=200&v=4', angle: 90 },
  { id: 'db', label: 'Database', logo: 'https://cdn.simpleicons.org/postgresql', angle: 180 },
  { id: 'next', label: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs', angle: 270 }
];

export default function AiStackBuilder({ onActionClick }: { onActionClick?: () => void }) {
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
            Un écosystème <span className="text-accent-primary">connecté.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary leading-relaxed max-w-[700px] mx-auto"
          >
            Ollama est le cœur de votre IA, mais il s'intègre parfaitement à vos outils favoris.
          </motion.p>
        </div>

        <div className="relative h-[600px] flex items-center justify-center mb-24">
          {/* ... existing content ... */}
          {/* Central Core (Ollama) */}
          <div className="relative z-20">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 20px rgba(124, 58, 237, 0.2)",
                  "0 0 40px rgba(124, 58, 237, 0.4)",
                  "0 0 20px rgba(124, 58, 237, 0.2)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-40 h-40 rounded-[40px] bg-bg-elevated border-2 border-accent-primary/40 flex flex-col items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-transparent" />
              <img 
                src="https://ollama.com/public/ollama.png" 
                alt="Ollama" 
                className="w-16 h-16 object-contain mb-2 relative z-10 filter brightness-0 invert" 
                referrerPolicy="no-referrer"
              />
              <span className="text-sm font-black uppercase tracking-widest text-white relative z-10">Ollama</span>
            </motion.div>
          </div>

          {/* Orbiting Stack Nodes */}
          {stackNodes.map((node, index) => {
            const angle = node.angle;
            const distance = 220;
            const x = Math.cos(angle * Math.PI / 180) * distance;
            const y = Math.sin(angle * Math.PI / 180) * distance;

            return (
              <React.Fragment key={node.id}>
                {/* Connection Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                  <motion.line
                    x1="50%" y1="50%"
                    x2={`calc(50% + ${x}px)`} y2={`calc(50% + ${y}px)`}
                    stroke="rgba(124, 58, 237, 0.2)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                  />
                </svg>

                {/* Node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                  style={{ x, y }}
                >
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-2xl bg-bg-elevated border border-white/10 flex items-center justify-center shadow-xl group-hover:border-accent-primary/40 transition-colors p-3">
                      <img 
                        src={node.logo} 
                        alt={node.label} 
                        className="w-full h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <div className="text-xs font-bold text-white uppercase tracking-widest">{node.label}</div>
                    </div>
                  </div>
                </motion.div>
              </React.Fragment>
            );
          })}

          {/* Background Glow */}
          <div className="absolute inset-0 bg-accent-primary/5 blur-[160px] rounded-full -z-10" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button 
            onClick={onActionClick}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent-primary text-white font-bold hover:scale-105 transition-all shadow-lg shadow-accent-primary/20"
          >
            Commencer à construire
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
