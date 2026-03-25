import React from 'react';
import { motion } from 'motion/react';
import { Twitter, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const footerLinks = [
  {
    title: "Produit",
    links: [
      { label: "Accueil", href: "#" },
      { label: "Marketplace", href: "#" },
      { label: "Hybride", href: "#hybrid" },
      { label: "Tarifs", href: "#pricing" }
    ]
  },
  {
    title: "Plateforme",
    links: [
      { label: "Fonctionnement", href: "#hybrid" },
      { label: "Sécurité", href: "#security" },
      { label: "Compatibilité", href: "#compatibility" },
      { label: "FAQ", href: "#faq-section" }
    ]
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "#" },
      { label: "Aide", href: "#" },
      { label: "Support", href: "#" }
    ]
  },
  {
    title: "Légal",
    links: [
      { label: "Conditions", href: "#" },
      { label: "Confidentialité", href: "#" },
      { label: "Mentions légales", href: "#" }
    ]
  }
];

export default function Footer({ 
  onLogoClick, 
  onMarketplaceClick, 
  onHybridClick,
  onPricingClick,
  onSignupClick 
}: { 
  onLogoClick?: () => void;
  onMarketplaceClick?: () => void;
  onHybridClick?: () => void;
  onPricingClick?: () => void;
  onSignupClick?: () => void;
}) {
  return (
    <footer id="contact" className="bg-bg-primary pt-32 pb-16 relative overflow-hidden border-t border-border-subtle scroll-mt-24">
      {/* Subtle top gradient fade */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-accent-primary/5 to-transparent pointer-events-none" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div 
              onClick={onLogoClick}
              className="flex items-center gap-3 mb-8 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-primary flex items-center justify-center shadow-lg shadow-accent-primary/20 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                <img 
                  src="https://cdn.simpleicons.org/cloudways/FFFFFF" 
                  alt="CloudNaaba" 
                  className="w-full h-full object-contain p-2"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-2xl font-black text-text-primary tracking-tighter">
                CloudNaaba
              </span>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-[350px] font-medium">
              Déployez vos applications avec plus de simplicité, de sécurité et de maîtrise. Le futur de l'infrastructure souveraine.
            </p>
            <div className="flex items-center gap-4">
              <motion.a 
                whileHover={{ y: -3, scale: 1.1 }}
                href="#" 
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:text-white transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, scale: 1.1 }}
                href="#" 
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, scale: 1.1 }}
                href="#" 
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:text-white transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <h4 className="text-text-primary font-bold mb-8 uppercase tracking-[0.2em] text-xs">Produit</h4>
              <ul className="space-y-4">
                <li><button onClick={onLogoClick} className="text-text-secondary hover:text-accent-primary transition-colors text-base font-medium">Accueil</button></li>
                <li><button onClick={onMarketplaceClick} className="text-text-secondary hover:text-accent-primary transition-colors text-base font-medium">Marketplace</button></li>
                <li><button onClick={onHybridClick} className="text-text-secondary hover:text-accent-primary transition-colors text-base font-medium">Hybride</button></li>
                <li><button onClick={onPricingClick} className="text-text-secondary hover:text-accent-primary transition-colors text-base font-medium">Tarifs</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-text-primary font-bold mb-8 uppercase tracking-[0.2em] text-xs">Plateforme</h4>
              <ul className="space-y-4">
                <li><a href="#hybrid" className="text-text-secondary hover:text-accent-primary transition-colors text-base font-medium">Fonctionnement</a></li>
                <li><a href="#security" className="text-text-secondary hover:text-accent-primary transition-colors text-base font-medium">Sécurité</a></li>
                <li><a href="#compatibility" className="text-text-secondary hover:text-accent-primary transition-colors text-base font-medium">Compatibilité</a></li>
                <li><a href="#faq-section" className="text-text-secondary hover:text-accent-primary transition-colors text-base font-medium">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-text-primary font-bold mb-8 uppercase tracking-[0.2em] text-xs">Support</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-text-secondary hover:text-accent-primary transition-colors text-base font-medium">Contact</a></li>
                <li><a href="#" className="text-text-secondary hover:text-accent-primary transition-colors text-base font-medium">Aide</a></li>
                <li><a href="#" className="text-text-secondary hover:text-accent-primary transition-colors text-base font-medium">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-text-primary font-bold mb-8 uppercase tracking-[0.2em] text-xs">Légal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-text-secondary hover:text-accent-primary transition-colors text-base font-medium">Conditions</a></li>
                <li><a href="#" className="text-text-secondary hover:text-accent-primary transition-colors text-base font-medium">Confidentialité</a></li>
                <li><a href="#" className="text-text-secondary hover:text-accent-primary transition-colors text-base font-medium">Mentions légales</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-text-secondary/40 text-sm font-medium">
            © {new Date().getFullYear()} CloudNaaba. Tous droits réservés.
          </div>
          <div className="flex items-center gap-10">
            <a href="#" className="text-text-secondary/40 hover:text-text-primary transition-colors text-sm font-medium">
              Confidentialité
            </a>
            <a href="#" className="text-text-secondary/40 hover:text-text-primary transition-colors text-sm font-medium">
              Conditions
            </a>
            <button 
              onClick={onSignupClick}
              className="px-8 py-2.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-bold hover:bg-accent-primary hover:text-white transition-all duration-300 tracking-widest uppercase"
            >
              Démarrer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
