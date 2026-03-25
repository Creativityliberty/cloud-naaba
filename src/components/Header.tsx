import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const updateScroll = (latest: number) => setIsScrolled(latest > 20);
    return scrollY.onChange(updateScroll);
  }, [scrollY]);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Hybride', href: '#', badge: 'NEW' },
    { name: 'Tarifs', href: '#' },
    { name: 'Sécurité', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 h-[76px] flex items-center ${
        isScrolled ? 'glass-header' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto max-w-[1240px] px-6 flex items-center justify-between">
        {/* Logo Block */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative w-11 h-11 bg-accent-primary rounded-full flex items-center justify-center border-2 border-accent-primary/20 overflow-hidden shadow-[0_0_15px_rgba(124,58,237,0.3)]">
            <img 
              src="https://cdn.phototourl.com/free/2026-03-25-7e6959d3-1a44-44f9-a676-6e8e2acf2388.png" 
              alt="CloudNaaba" 
              className="w-full h-full object-contain p-1 relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary to-black/40 opacity-40" />
          </div>
          <span className="text-xl font-black tracking-tighter font-display text-text-primary">
            Cloud<span className="text-accent-primary">Naaba</span>
          </span>
        </div>

        {/* Navigation Center */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="flex items-center gap-2 group relative">
              <a 
                href={link.href} 
                className="text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors duration-150"
              >
                {link.name}
              </a>
              {link.badge && (
                <span className="px-1.5 py-0.5 rounded-full bg-violet-main/12 border border-violet-main/20 text-violet-alt text-[10px] font-bold">
                  {link.badge}
                </span>
              )}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-main transition-all duration-200 group-hover:w-full opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </nav>

        {/* Actions Right */}
        <div className="flex items-center gap-6">
          <button className="hidden sm:block text-[15px] font-medium text-text-secondary hover:text-text-primary transition-all relative group">
            Se connecter
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-text-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
          </button>
          <button className="bg-violet-main hover:bg-violet-alt text-white px-5 py-2.5 rounded-[10px] text-[15px] font-bold transition-all violet-glow-btn">
            Commencer
          </button>
          
          {/* Burger Menu */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-text-primary p-1"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[76px] bg-bg z-40 lg:hidden p-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-2xl font-bold flex items-center justify-between border-b border-border-subtle pb-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex items-center gap-3">
                  {link.name}
                  {link.badge && (
                    <span className="text-xs bg-violet-main/20 text-violet-alt px-2 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </span>
                <ChevronRight className="text-violet-main" />
              </a>
            ))}
            <div className="mt-auto flex flex-col gap-4">
              <button className="w-full py-4 rounded-xl border border-border-subtle font-bold">
                Se connecter
              </button>
              <button className="w-full py-4 rounded-xl bg-violet-main font-bold">
                Commencer maintenant
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
