import React from 'react';
import { motion } from 'motion/react';
import { Twitter, Linkedin, Github, ArrowRight } from 'lucide-react';

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

const FooterLink = ({ onClick, href, children }: { onClick?: () => void, href?: string, children: React.ReactNode }) => {
  const content = (
    <>
      <span className="flex items-center justify-center overflow-hidden w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300">
        <ArrowRight className="w-4 h-4 text-accent-primary shrink-0" />
      </span>
      <span className="group-hover:translate-x-0.5 transition-transform duration-300">
        {children}
      </span>
    </>
  );
  const className = "group flex items-center text-text-secondary hover:text-accent-primary transition-colors text-base font-medium cursor-pointer";

  return (
    <li>
      <a 
        href={href || "#"}
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick();
          }
        }}
        className={className}
      >
        {content}
      </a>
    </li>
  );
};

export default function Footer({ 
  onLogoClick, 
  onMarketplaceClick, 
  onHybridClick,
  onPricingClick,
  onSecurityClick,
  onContactClick,
  onConditionsClick,
  onPrivacyClick,
  onLegalNoticeClick,
  onFAQClick,
  onCompatibilityClick,
  onHelpClick,
  onSupportClick,
  onLoginClick,
  onSignupClick
}: { 
  onLogoClick?: () => void;
  onMarketplaceClick?: () => void;
  onHybridClick?: () => void;
  onPricingClick?: () => void;
  onSecurityClick?: () => void;
  onContactClick?: () => void;
  onConditionsClick?: () => void;
  onPrivacyClick?: () => void;
  onLegalNoticeClick?: () => void;
  onFAQClick?: () => void;
  onCompatibilityClick?: () => void;
  onHelpClick?: () => void;
  onSupportClick?: () => void;
  onLoginClick?: () => void;
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
              className="flex items-center mb-8 group cursor-pointer"
            >
              <img 
                src="https://cdn.phototourl.com/free/2026-04-02-88a2cc07-a1db-480e-8088-117af6ee5ca9.png" 
                alt="CloudNaaba" 
                className="h-14 md:h-24 w-auto object-contain"
              />
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
                <FooterLink onClick={onLogoClick} href="/">Accueil</FooterLink>
                <FooterLink onClick={onMarketplaceClick} href="/marketplace">Marketplace</FooterLink>
                <FooterLink onClick={onHybridClick} href="/infrastructure-hybride">Hybride</FooterLink>
                <FooterLink onClick={onPricingClick} href="/tarifs">Tarifs</FooterLink>
                <FooterLink onClick={onLoginClick} href="#">Se connecter</FooterLink>
                <FooterLink onClick={onSignupClick} href="#">S'inscrire</FooterLink>
              </ul>
            </div>
            <div>
              <h4 className="text-text-primary font-bold mb-8 uppercase tracking-[0.2em] text-xs">Plateforme</h4>
              <ul className="space-y-4">
                <FooterLink onClick={onHybridClick} href="/infrastructure-hybride">Fonctionnement</FooterLink>
                <FooterLink onClick={onSecurityClick} href="/securite">Sécurité</FooterLink>
                <FooterLink onClick={onCompatibilityClick} href="/compatibilite">Compatibilité</FooterLink>
                <FooterLink onClick={onFAQClick} href="/faq">FAQ</FooterLink>
              </ul>
            </div>
            <div>
              <h4 className="text-text-primary font-bold mb-8 uppercase tracking-[0.2em] text-xs">Support</h4>
              <ul className="space-y-4">
                <FooterLink onClick={onContactClick} href="/contact">Contact</FooterLink>
                <FooterLink onClick={onHelpClick} href="/aide">Aide</FooterLink>
                <FooterLink onClick={onSupportClick} href="/support">Support</FooterLink>
              </ul>
            </div>
            <div>
              <h4 className="text-text-primary font-bold mb-8 uppercase tracking-[0.2em] text-xs">Légal</h4>
              <ul className="space-y-4">
                <FooterLink onClick={onConditionsClick} href="/conditions">Conditions</FooterLink>
                <FooterLink onClick={onPrivacyClick} href="/confidentialite">Confidentialité</FooterLink>
                <FooterLink onClick={onLegalNoticeClick} href="/mentions-legales">Mentions légales</FooterLink>
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
            <button onClick={onPrivacyClick} className="text-text-secondary/40 hover:text-text-primary transition-colors text-sm font-medium">
              Confidentialité
            </button>
            <button onClick={onConditionsClick} className="text-text-secondary/40 hover:text-text-primary transition-colors text-sm font-medium">
              Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
