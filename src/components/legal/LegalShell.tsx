import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowLeft, Clock } from 'lucide-react';

interface LegalShellProps {
  title: string;
  lastUpdated: string;
  icon?: React.ElementType;
  children: React.ReactNode;
}

export default function LegalShell({ title, lastUpdated, icon: Icon = ShieldCheck, children }: LegalShellProps) {
  return (
    <div className="min-h-screen pt-40 pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto max-w-[900px] px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center">
               <Icon className="w-6 h-6 text-accent-primary" />
            </div>
            <div>
               <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-text-primary">
                 {title}
               </h1>
            </div>
          </div>
          <div className="flex items-center gap-4 text-text-secondary/60 text-xs font-bold uppercase tracking-widest">
             <div className="flex items-center gap-2">
                <Clock className="w-3 h-3" />
                <span>Dernière mise à jour : {lastUpdated}</span>
             </div>
             <div className="w-1 h-1 rounded-full bg-white/20" />
             <span>CloudNaaba Legal Compliance</span>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="prose prose-invert prose-purple max-w-none 
            prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight
            prose-p:text-text-secondary prose-p:leading-relaxed prose-p:text-lg
            prose-li:text-text-secondary prose-li:text-lg
            prose-strong:text-text-primary prose-strong:font-bold
            bg-white/[0.02] border border-white/5 rounded-[40px] p-8 md:p-16 shadow-2xl backdrop-blur-sm"
        >
          {children}
        </motion.div>

        {/* Bottom Navigation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <button 
             onClick={() => window.history.back()}
             className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-bold text-text-secondary hover:text-text-primary"
          >
             <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
             Retour
          </button>
        </motion.div>
      </div>
    </div>
  );
}
