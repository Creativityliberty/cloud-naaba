import React from 'react';
import { motion } from 'motion/react';
import { 
  LifeBuoy, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  Terminal, 
  ArrowRight,
  Linkedin,
  Twitter,
  Mail,
  Calendar,
  Layers,
  Activity
} from 'lucide-react';

function CustomDiscord(props: any) { return <MessageSquare {...props} /> } // Helper

const supportChannels = [
  {
    title: "Communauté Discord",
    description: "Échangez avec plus de 2,000 développeurs et ingénieurs infrastructure en temps réel.",
    icon: CustomDiscord,
    action: "Rejoindre le chat",
    link: "https://discord.com",
    bg: "bg-[#5865F2]/10 border-[#5865F2]/20 text-[#5865F2]"
  },
  {
    title: "Support Prioritaire",
    description: "Experts CloudNaaba à votre service en moins de 15 minutes (pour clients Premium).",
    icon: Zap,
    action: "Ouvrir un ticket",
    link: "/contact",
    bg: "bg-accent-primary/10 border-accent-primary/20 text-accent-primary"
  },
  {
    title: "E-mail Officiel",
    description: "Des questions commerciales ou administratives ? Notre équipe vous répond sous 24h.",
    icon: Mail,
    action: "Envoyer un e-mail",
    link: "mailto:support@cloudnaaba.com",
    bg: "bg-white/5 border-white/10 text-white"
  },
  {
    title: "Expertise Consulting",
    description: "Besoin d'une migration complexe ou d'un déploiement hybride sur mesure ?",
    icon: Layers,
    action: "Programmer un audit",
    link: "/contact",
    bg: "bg-orange-500/10 border-orange-500/20 text-orange-500"
  }
];

export default function SupportPage() {
  return (
    <div className="min-h-screen pt-40 pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[1100px] h-[550px] bg-accent-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          {/* Left Column Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 mb-8"
            >
               <LifeBuoy className="w-4 h-4 text-accent-primary" />
               <span className="text-xs font-black uppercase tracking-widest text-accent-primary">Centre de Support CloudNaaba</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black font-display tracking-tight leading-[1.05] mb-8 text-gradient"
            >
              Plus qu'un support, une véritable expertise.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-secondary leading-relaxed font-medium mb-10"
            >
               Nos ingénieurs ne se contentent pas de répondre à vos tickets. Ils vous accompagnent dans l'optimisation de votre architecture hybride.
            </motion.p>
            
            <div className="flex flex-col md:flex-row items-center gap-6 justify-center lg:justify-start">
               <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                     <Activity className="w-5 h-5 text-green-500 anim-pulse" />
                  </div>
                  <div>
                     <div className="text-[10px] text-text-secondary/40 font-black uppercase tracking-widest">Système Status</div>
                     <div className="text-sm font-black text-white uppercase tracking-tight">100% Operational</div>
                  </div>
               </div>
               <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center font-black text-accent-primary text-xs">
                     12m
                  </div>
                  <div>
                     <div className="text-[10px] text-text-secondary/40 font-black uppercase tracking-widest">Réponse Moyenne</div>
                     <div className="text-sm font-black text-white uppercase tracking-tight">Support Prioritaire</div>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             {supportChannels.map((channel, i) => (
               <motion.div 
                 key={channel.title}
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.3 + i * 0.1 }}
                 whileHover={{ y: -6 }}
                 className="group p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-accent-primary/30 transition-all flex flex-col items-start"
               >
                  <div className={`w-12 h-12 rounded-2xl ${channel.bg} flex items-center justify-center mb-6`}>
                     <channel.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-text-primary mb-3">{channel.title}</h3>
                  <p className="text-xs font-medium text-text-secondary/60 leading-relaxed mb-8 flex-grow">{channel.description}</p>
                  
                  <button 
                    onClick={() => {
                        if (channel.link.startsWith('http')) window.open(channel.link, '_blank');
                        else window.location.href = channel.link;
                    }}
                    className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-accent-primary hover:translate-x-2 transition-all p-1"
                  >
                     {channel.action}
                     <ArrowRight className="w-4 h-4" />
                  </button>
               </motion.div>
             ))}
          </div>
        </div>

        {/* Global Support Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 opacity-70 mb-16">
          {[
            { label: "Tickets Résolus", val: "14,500+" },
            { label: "Ingénieurs Hub", val: "54" },
            { label: "Score Satisfaction", val: "4.9/5" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-10 border-r border-dashed border-white/10 last:border-0 md:last:border-0">
               <div className="text-4xl font-black text-text-primary mb-2 font-display">{stat.val}</div>
               <div className="text-[10px] font-black uppercase tracking-widest text-text-secondary/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
