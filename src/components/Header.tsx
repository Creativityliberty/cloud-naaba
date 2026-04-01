import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cloud } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
  onLogoClick?: () => void;
  onMarketplaceClick?: () => void;
  onHybridClick?: () => void;
  onPricingClick?: () => void;
  onSecurityClick?: () => void;
  onContactClick?: () => void;
  onLoginClick?: () => void;
  onSignupClick?: () => void;
}

export default function Header({ 
  onLogoClick, 
  onMarketplaceClick, 
  onHybridClick, 
  onPricingClick,
  onSecurityClick,
  onContactClick,
  onLoginClick,
  onSignupClick
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Marketplace AI', onClick: onMarketplaceClick, path: '/marketplace' },
    { label: 'Infrastructure Hybride', onClick: onHybridClick, path: '/infrastructure-hybride' },
    { label: 'Sécurité', onClick: onSecurityClick, path: '/securite' },
    { label: 'Tarifs', onClick: onPricingClick, path: '/tarifs' },
    { label: 'Contact', onClick: onContactClick, path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-bg-primary/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto max-w-[1240px] px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={onLogoClick}
            className="flex items-center gap-3 group relative"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-primary flex items-center justify-center shadow-lg shadow-accent-primary/20 group-hover:scale-110 transition-transform duration-500">
              <Cloud className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-black tracking-tighter text-text-primary group-hover:text-accent-primary transition-colors">
              Cloud<span className="text-accent-primary group-hover:text-text-primary">Naaba</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.onClick}
                className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 relative group py-2 ${
                  location.pathname === link.path 
                    ? 'text-accent-primary' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-accent-primary transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={onLoginClick}
              className="px-5 py-2 text-sm font-bold text-text-secondary hover:text-text-primary transition-colors"
            >
              Se connecter
            </button>
            <button 
              onClick={onSignupClick}
              className="btn-primary px-6 py-2.5 text-sm font-bold text-white shadow-xl shadow-accent-primary/20 hover:scale-105 active:scale-95 transition-all"
            >
              Commencer
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-bg-elevated border-b border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    link.onClick?.();
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-lg font-bold ${
                    location.pathname === link.path ? 'text-accent-primary' : 'text-text-secondary'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="h-px bg-white/5 my-2" />
              <button 
                onClick={() => {
                  onLoginClick?.();
                  setMobileMenuOpen(false);
                }}
                className="text-left text-lg font-bold text-text-secondary"
              >
                Se connecter
              </button>
              <button 
                onClick={() => {
                  onSignupClick?.();
                  setMobileMenuOpen(false);
                }}
                className="btn-primary w-full py-4 font-bold text-white rounded-xl"
              >
                Commencer
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
