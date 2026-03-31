import React from 'react';
import { motion } from 'motion/react';
import { Lock, CheckCircle2, Shield } from 'lucide-react';

export default function SecureCommunication() {
  return (
    <section className="py-32 relative overflow-hidden bg-bg-elevated/30">
      <div className="container mx-auto max-w-[1240px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Left Visual (Flow) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <EncryptionVisual />
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent-primary/5 border border-accent-primary/10 mb-8">
              <Lock className="w-4 h-4 text-accent-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-primary">Sécurité par défaut</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-display leading-[1.1] mb-8 text-gradient">
              HTTPS et chiffrement des échanges
            </h2>
            
            <p className="text-xl text-text-primary/80 font-bold mb-6">
              Les données échangées doivent être protégées par défaut, sans configuration manuelle.
            </p>

            <div className="space-y-6 text-lg text-text-secondary leading-relaxed mb-10">
              <p>
                CloudNaaba active HTTPS automatiquement afin que les échanges entre vos utilisateurs et vos applications soient chiffrés.
              </p>
              <p>
                Les certificats TLS sont intégrés et renouvelés sans intervention, pour éviter les erreurs, les oublis et les interruptions liées à des expirations.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mb-12">
              {[
                "Protection des données en transit",
                "Navigation sécurisée pour vos utilisateurs",
                "Aucun certificat à gérer manuellement"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center shrink-0 group-hover:bg-accent-primary/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-accent-primary" />
                  </div>
                  <span className="text-text-primary font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Mini Block (Signature) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex items-center gap-6 max-w-sm group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.1)] group-hover:bg-accent-primary/20 transition-all duration-500">
                <Shield className="w-7 h-7 text-accent-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-primary mb-1">HTTPS activé</h4>
                <p className="text-sm text-text-secondary leading-tight">
                  Certificats TLS inclus avec renouvellement automatisé.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function EncryptionVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[500px] mx-auto bg-black/40 rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl">
      {/* Background Dots */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />

      {/* Connection Nodes */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center z-20">
        <div className="w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.6)]" />
      </div>

      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center z-20">
        <div className="w-4 h-4 rounded-full bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.6)]" />
      </div>

      {/* Central Lock */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="w-24 h-24 rounded-2xl bg-accent-primary/10 border border-accent-primary/30 backdrop-blur-xl flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.4)]">
            <Lock className="w-10 h-10 text-accent-primary" />
          </div>
          
          {/* Animated Glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-accent-primary/20 blur-xl"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Encrypted Data Flow */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        
        {/* Main Connection Lines */}
        <line x1="100" y1="250" x2="200" y2="250" stroke="#7c3aed" strokeWidth="2" strokeOpacity="0.4" strokeDasharray="4,4" />
        <line x1="300" y1="250" x2="400" y2="250" stroke="#7c3aed" strokeWidth="2" strokeOpacity="0.4" strokeDasharray="4,4" />

        {/* Data Packets Input (Raw) */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={`in-${i}`}
            r="3"
            fill="#60a5fa"
            initial={{ cx: 60, cy: 230 + i * 10 }}
            animate={{ 
              cx: [60, 200, 200, 60],
              opacity: [0, 1, 0, 0] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              delay: i * 0.6,
              ease: "easeInOut" 
            }}
            className="blur-[1px]"
          />
        ))}

        {/* Data Packets Output (Encrypted) */}
        {[...Array(5)].map((_, i) => (
          <motion.rect
            key={`out-${i}`}
            width="6"
            height="6"
            fill="#4ade80"
            rx="1"
            initial={{ x: 300, y: 227 + i * 10 }}
            animate={{ 
              x: [300, 440, 440, 300],
              opacity: [0, 1, 0, 0] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              delay: i * 0.6 + 2, // Offset by half the total duration
              ease: "easeInOut" 
            }}
            className="blur-[0.5px]"
          />
        ))}

        {/* Wave background */}
        <motion.path
          d="M 100 250 Q 150 200 200 250 T 300 250 T 400 250"
          stroke="rgba(124,58,237,0.2)"
          strokeWidth="60"
          fill="none"
          strokeLinecap="round"
          animate={{ strokeDashoffset: [0, 100] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Encryption Bits overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 flex flex-wrap gap-2 justify-center content-center z-10 opacity-30 pointer-events-none overflow-hidden">
        {[...Array(24)].map((_, i) => (
          <motion.span
            key={i}
            className="text-[8px] font-mono text-accent-primary"
            animate={{ opacity: [0.1, 0.8, 0.1] }}
            transition={{ duration: 1 + Math.random() * 2, repeat: Infinity, delay: Math.random() }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.span>
        ))}
      </div>

      {/* Labels */}
      <div className="absolute top-6 left-6 text-[9px] font-mono font-black uppercase tracking-widest text-blue-400/60">User_Client</div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold uppercase tracking-widest text-accent-primary/60">TLS_Handshake</div>
      <div className="absolute top-6 right-6 text-[9px] font-mono font-black uppercase tracking-widest text-green-400/60">App_Server</div>
    </div>
  );
}
