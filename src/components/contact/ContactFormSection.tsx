import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, Building, MapPin, AlertCircle, Shield } from 'lucide-react';

export default function ContactFormSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact-form" className="py-32 relative overflow-hidden bg-bg-primary z-20">
      {/* Background glow behind form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-accent-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        
        {/* Urgency Block (Section 6) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="p-8 rounded-[2rem] bg-amber-500/5 border border-amber-500/20 flex flex-col md:flex-row gap-6 items-start shadow-xl shadow-amber-500/5">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
              <AlertCircle className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Besoin urgent ?</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Incident bloquant, migration critique ou sécurité ? Indiquez clairement l’urgence dans l'objet de votre message pour un traitement prioritaire.
              </p>
              <div className="bg-black/40 border border-white/5 p-4 rounded-xl flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">Objet recommandé :</span>
                <span className="text-sm text-amber-400 font-mono">Urgent — migration / incident / sécurité</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          {/* Main Form (Section 7) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="mb-10">
              <h2 className="text-3xl md:text-5xl font-bold font-display leading-[1.1] mb-4">
                Dites-nous ce dont vous avez besoin.
              </h2>
              <p className="text-lg text-text-secondary font-medium">
                Plus vous donnez de contexte, plus la réponse peut être utile dès le premier échange.
              </p>
            </div>

            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {formStatus === 'success' ? (
                <div className="relative z-10 flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                    <Shield className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message envoyé avec succès</h3>
                  <p className="text-text-secondary text-lg mb-8 max-w-md">
                    Notre équipe a bien reçu votre demande détaillée. Nous analysons le contexte et vous recontactons au plus vite.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-secondary ml-1">Prénom & Nom</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Jean Dupont"
                        className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-white hover:border-white/20 focus:outline-none focus:border-accent-primary/80 focus:bg-accent-primary/[0.02] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-secondary ml-1">Email professionnel</label>
                      <input 
                        type="email" 
                        required
                        placeholder="jean@entreprise.com"
                        className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-white hover:border-white/20 focus:outline-none focus:border-accent-primary/80 focus:bg-accent-primary/[0.02] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-secondary ml-1">Organisation</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Nom de l'entreprise ou projet"
                      className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-white hover:border-white/20 focus:outline-none focus:border-accent-primary/80 focus:bg-accent-primary/[0.02] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-secondary ml-1">Type de besoin</label>
                      <select required className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-white focus:outline-none hover:border-white/20 focus:border-accent-primary/80 focus:bg-accent-primary/[0.02] transition-colors appearance-none cursor-pointer">
                        <option value="" disabled selected>Sélectionnez un type</option>
                        <option value="demo">Démonstration</option>
                        <option value="support">Support technique</option>
                        <option value="migration">Migration</option>
                        <option value="security">Sécurité</option>
                        <option value="hybrid">Infrastructure hybride</option>
                        <option value="partnership">Partenariat</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-secondary ml-1">Sujet principal</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Urgent — Migration..."
                        className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-white hover:border-white/20 focus:outline-none focus:border-accent-primary/80 focus:bg-accent-primary/[0.02] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-secondary ml-1">Message</label>
                    <textarea 
                      required
                      placeholder="Décrivez votre contexte, votre besoin, votre urgence éventuelle, et ce que vous attendez..."
                      rows={6}
                      className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-white hover:border-white/20 focus:outline-none focus:border-accent-primary/80 focus:bg-accent-primary/[0.02] transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full py-5 mt-2 rounded-2xl bg-accent-primary hover:bg-accent-primary/90 text-white font-bold text-lg flex items-center justify-center gap-3 transition-all disabled:opacity-70 hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)]"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmission...
                      </>
                    ) : (
                      <>
                        Envoyer le message à l'équipe
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-xs text-text-secondary/70 mt-4 leading-relaxed max-w-sm mx-auto">
                    Communication chiffrée de bout en bout. Vos données ne seront jamais partagées.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info (Section 8) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col pt-12 lg:pt-32"
          >
            <h3 className="text-xl font-bold font-display text-text-primary mb-8 px-2">Coordonnées directes</h3>
            
            <div className="space-y-4">
              {/* Main Email */}
              <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:border-white/10 hover:bg-white/[0.04] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Email principal</h4>
                <a href="mailto:hello@cloudnaaba.com" className="text-accent-primary font-bold hover:text-white transition-colors">
                  hello@cloudnaaba.com
                </a>
              </div>

              {/* Sales Email */}
              <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:border-white/10 hover:bg-white/[0.04] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building className="w-6 h-6 text-emerald-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Commercial & Partenariats</h4>
                <p className="text-text-secondary text-sm mb-3">Pour les besoins d'avant-vente, de démo ou de collaboration.</p>
                <a href="mailto:sales@cloudnaaba.com" className="text-emerald-400 font-bold hover:text-white transition-colors">
                  sales@cloudnaaba.com
                </a>
              </div>

              {/* HQ */}
              <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:border-white/10 hover:bg-white/[0.04] transition-all group mt-8 relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">CloudNaaba HQ</h4>
                <p className="text-text-secondary leading-relaxed">
                  Station F<br />
                  5 Parvis Alan Turing<br />
                  75013 Paris, France
                </p>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rotate-45 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
