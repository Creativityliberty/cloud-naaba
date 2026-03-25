import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Header({ 
  onMarketplaceClick, 
  onLogoClick, 
  onHybridClick,
  onPricingClick,
  onLoginClick,
  onSignupClick
}: { 
  onMarketplaceClick?: () => void; 
  onLogoClick?: () => void; 
  onHybridClick?: () => void;
  onPricingClick?: () => void;
  onLoginClick?: () => void;
  onSignupClick?: () => void;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const updateScroll = (latest: number) => setIsScrolled(latest > 20);
    return scrollY.onChange(updateScroll);
  }, [scrollY]);

  const navLinks = [
    { name: 'Accueil', href: '#', onClick: onLogoClick },
    { name: 'Marketplace', href: '#', onClick: onMarketplaceClick },
    { name: 'Hybride', href: '#hybrid', onClick: onHybridClick, badge: 'NEW' },
    { name: 'Tarifs', href: '#pricing', onClick: onPricingClick },
    { name: 'Sécurité', href: '#security' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed z-50 transition-all duration-500 flex items-center left-0 right-0 ${
        isScrolled 
          ? 'top-4 mx-4 md:mx-auto max-w-[1200px] h-[64px] rounded-full border border-white/10 bg-black/40 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
          : 'top-0 w-full h-[80px] bg-transparent border-transparent'
      }`}
    >
      <div className={`container mx-auto flex items-center justify-between transition-all duration-500 ${
        isScrolled ? 'px-8' : 'px-6'
      }`}>
        {/* Logo Block */}
        <div 
          className="flex items-center gap-3 shrink-0 cursor-pointer group"
          onClick={() => {
            if (onLogoClick) onLogoClick();
            else window.location.href = '/';
          }}
        >
          <div className={`relative transition-all duration-500 bg-accent-primary rounded-xl flex items-center justify-center border-2 border-accent-primary/20 overflow-hidden shadow-[0_0_15px_rgba(124,58,237,0.3)] ${
            isScrolled ? 'w-9 h-9' : 'w-11 h-11'
          }`}>
            <img 
              src="https://cdn.simpleicons.org/cloudways/FFFFFF" 
              alt="CloudNaaba" 
              className="w-full h-full object-contain p-2 relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary to-black/40 opacity-40" />
          </div>
          <span className={`font-black tracking-tighter font-display text-text-primary transition-all duration-500 ${
            isScrolled ? 'text-lg' : 'text-xl'
          }`}>
            Cloud<span className="text-accent-primary">Naaba</span>
          </span>
        </div>

        {/* Navigation Center */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="flex items-center gap-2 group relative">
              <a 
                href={link.href} 
                onClick={(e) => {
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick();
                  }
                }}
                className={`font-medium text-text-secondary hover:text-text-primary transition-all duration-300 ${
                  isScrolled ? 'text-[13px]' : 'text-[15px]'
                }`}
              >
                {link.name}
              </a>
              {link.badge && (
                <span className="px-1.5 py-0.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-[9px] font-bold">
                  {link.badge}
                </span>
              )}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </nav>

        {/* Actions Right */}
        <div className="flex items-center gap-4 md:gap-6">
          <button 
            onClick={onLoginClick}
            className={`hidden sm:block font-medium text-text-secondary hover:text-text-primary transition-all relative group ${
            isScrolled ? 'text-[13px]' : 'text-[15px]'
          }`}>
            Se connecter
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-text-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
          </button>
          <button 
            onClick={onSignupClick}
            className={`bg-accent-primary hover:bg-accent-primary/80 text-white font-bold transition-all shadow-[0_0_20px_rgba(124,58,237,0.2)] hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] ${
            isScrolled ? 'px-4 py-2 rounded-full text-[13px]' : 'px-5 py-2.5 rounded-[10px] text-[15px]'
          }`}>
            Commencer
          </button>
          
          {/* Burger Menu */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-text-primary p-1 hover:text-accent-primary transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed left-4 right-4 z-40 lg:hidden p-6 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-black/90 backdrop-blur-xl shadow-2xl ${
              isScrolled ? 'top-24' : 'top-24'
            }`}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-xl font-bold flex items-center justify-between border-b border-white/5 pb-4 text-text-primary hover:text-accent-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex items-center gap-3">
                  {link.name}
                  {link.badge && (
                    <span className="text-[10px] bg-accent-primary/20 text-accent-primary px-2 py-0.5 rounded-full uppercase tracking-widest">
                      {link.badge}
                    </span>
                  )}
                </span>
                <ChevronRight className="w-5 h-5 text-accent-primary" />
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onLoginClick) onLoginClick();
                }}
                className="w-full py-4 rounded-xl border border-white/10 font-bold text-text-primary hover:bg-white/5 transition-colors"
              >
                Se connecter
              </button>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onSignupClick) onSignupClick();
                }}
                className="w-full py-4 rounded-xl bg-accent-primary font-bold text-white shadow-[0_0_20px_rgba(124,58,237,0.3)]"
              >
                Commencer maintenant
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
