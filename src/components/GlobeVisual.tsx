import React from 'react';
import { motion } from 'motion/react';
import { Globe, ShieldCheck, Zap, Users, Database, Cpu } from 'lucide-react';

export default function GlobeVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center perspective-1000">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-accent-primary/20 via-transparent to-transparent blur-3xl" />
      
      {/* The Globe Abstraction */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          rotateY: 0,
          rotateZ: [0, 5, 0]
        }}
        transition={{ 
          opacity: { duration: 1.5, ease: "easeOut" },
          scale: { duration: 1.5, ease: "easeOut" },
          rotateY: { duration: 1.5, ease: "easeOut" },
          rotateZ: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
        className="relative w-[85%] h-[85%] rounded-full border border-white/10 bg-black/40 flex items-center justify-center overflow-hidden preserve-3d"
      >
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle, #7c3aed 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
        />
        
        {/* West Africa Focus (Simplified SVG) */}
        <svg viewBox="0 0 200 200" className="w-full h-full text-accent-primary/40 fill-current">
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            d="M80,100 Q90,90 110,100 T140,110 T160,130 T140,160 T100,170 T70,150 T60,120 Z" 
            className="fill-accent-primary/10 stroke-accent-primary/50 stroke-[0.5]"
          />
          
          {/* Nodes */}
          {[
            { x: 90, y: 110 }, { x: 110, y: 120 }, { x: 130, y: 130 }, 
            { x: 100, y: 145 }, { x: 120, y: 155 }
          ].map((node, i) => (
            <motion.circle
              key={i}
              cx={node.x}
              cy={node.y}
              r="1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
              className="fill-accent-primary"
            />
          ))}

          {/* Arcs */}
          <motion.path
            d="M90,110 Q110,90 130,130"
            fill="none"
            stroke="url(#arcGradient)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        {/* Inner glow */}
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(124,58,237,0.1)] rounded-full" />
      </motion.div>

      {/* Floating UI Cards - Advanced */}
      <FloatingCard 
        icon={<Zap className="w-3 h-3 text-green-400" />} 
        label="Statut déploiement" 
        value="En ligne" 
        className="top-[10%] left-[5%]" 
        delay={0}
      />
      <FloatingCard 
        icon={<ShieldCheck className="w-3 h-3 text-blue-400" />} 
        label="HTTPS" 
        value="Actif" 
        className="top-[40%] -right-[5%]" 
        delay={1}
      />
      <FloatingCard 
        icon={<Cpu className="w-3 h-3 text-accent-primary" />} 
        label="Utilisation CPU" 
        value="12%" 
        className="bottom-[15%] left-[10%]" 
        delay={2}
      />
      <FloatingCard 
        icon={<Database className="w-3 h-3 text-orange-400" />} 
        label="Base de données" 
        value="Saine" 
        className="bottom-[30%] -right-[10%]" 
        delay={1.5}
      />
    </div>
  );
}

function FloatingCard({ icon, label, value, className, delay }: { icon: React.ReactNode; label: string; value: string; className: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        y: [0, -10, 0],
        scale: 1
      }}
      transition={{ 
        opacity: { delay: delay + 0.5, duration: 0.8 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay },
        scale: { delay: delay + 0.5, duration: 0.8 }
      }}
      className={`absolute z-10 premium-card px-4 py-3 flex items-center gap-3 ${className}`}
    >
      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] text-text-secondary uppercase tracking-wider font-bold">{label}</span>
        <span className="text-xs font-bold text-text-primary">{value}</span>
      </div>
    </motion.div>
  );
}
