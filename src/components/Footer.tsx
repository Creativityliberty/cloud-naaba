import React from 'react';
import { motion } from 'motion/react';
import { Cloud, Twitter, Linkedin, Github } from 'lucide-react';

const footerLinks = [
  {
    title: "Produit",
    links: ["Accueil", "Marketplace", "Hybride", "Tarifs"]
  },
  {
    title: "Plateforme",
    links: ["Fonctionnement", "Sécurité", "Compatibilité", "FAQ"]
  },
  {
    title: "Support",
    links: ["Contact", "Aide", "Support"]
  },
  {
    title: "Légal",
    links: ["Conditions", "Confidentialité", "Mentions légales"]
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#07070A] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.3)] group-hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all duration-500">
                <Cloud className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-display tracking-tight text-white">
                CloudNaaba
              </span>
            </div>
            <p className="text-text-secondary leading-relaxed mb-8 max-w-[320px]">
              Déployez vos applications avec plus de simplicité, de sécurité et de maîtrise.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
                  {column.title}
                </h4>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-text-secondary/60 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-text-secondary/40 text-sm">
            CloudNaaba © 2026. Tous droits réservés.
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-text-secondary/40 hover:text-white transition-colors text-xs">
              Confidentialité
            </a>
            <a href="#" className="text-text-secondary/40 hover:text-white transition-colors text-xs">
              Conditions
            </a>
            <button className="px-6 py-2 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-400 text-xs font-bold hover:bg-violet-600 hover:text-white transition-all duration-300">
              Commencer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
