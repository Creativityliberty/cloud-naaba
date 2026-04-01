import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { Menu, X, ChevronRight, Cloud } from 'lucide-react';
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
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateScroll = (latest: number) => {
      setIsScrolled(latest > 20);
    };
    const unsubscribe = scrollY.on("change", updateScroll);
    return () => unsubscribe();
  }, [scrollY]);

  const navLinks = [
    { label: 'Accueil', onClick: onLogoClick, path: '/' },
    { label: 'Marketplace AI', onClick: onMarketplaceClick, path: '/marketplace' },
    { label: 'Infrastructure Hybride', onClick: onHybridClick, path: '/infrastructure-hybride', badge: 'NEW' },
    { label: 'Sécurité', onClick: onSecurityClick, path: '/securite' },
    { label: 'Tarifs', onClick: onPricingClick, path: '/tarifs' },
    { label: 'Contact', onClick: onContactClick, path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed z-50 transition-all duration-700 left-0 right-0 flex justify-center ${
        isScrolled 
          ? 'top-6 px-4 md:px-0 h-[68px]' 
          : 'top-0 w-full h-[100px]'
      }`}
    >
      <div 
        className={`relative flex items-center justify-between transition-all duration-700 w-full ${
          isScrolled 
            ? 'max-w-[1200px] px-8 bg-black/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
            : 'max-w-[1240px] px-6 bg-transparent border-transparent'
        }`}
      >
        {/* Brand/Logo */}
        <button 
          onClick={onLogoClick}
          className="flex items-center gap-3 group relative shrink-0"
        >
          <div className={`rounded-2xl transition-all duration-500 bg-accent-primary flex items-center justify-center border-2 border-accent-primary/20 shadow-[0_0_20px_rgba(124,58,237,0.3)] ${
            isScrolled ? 'w-9 h-9' : 'w-11 h-11'
          }`}>
            <Cloud className="text-white w-6 h-6" />
          </div>
          <span className={`font-black tracking-tighter text-text-primary transition-all duration-500 hover:text-accent-primary ${
            isScrolled ? 'text-lg' : 'text-2xl'
          }`}>
            Cloud<span className="text-accent-primary group-hover:text-text-primary transition-colors">Naaba</span>
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-6 ml-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <button
                key={link.label}
                onClick={link.onClick}
                className={`relative px-4 py-2 group text-[11px] xl:text-[13px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {link.label}
                  {link.badge && (
                    <span className="px-1.5 py-0.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-[8px] font-bold">
                      {link.badge}
                    </span>
                  )}
                </span>
                {isActive && (
                   <motion.div 
                     layoutId="nav-bg"
                     className="absolute inset-0 bg-white/[0.03] border border-white/5 rounded-full"
                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                   />
                )}
                {!isActive && (
                   <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] rounded-full transition-colors" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Auth Actions */}
        <div className="hidden lg:flex items-center gap-4 ml-auto">
          <button 
            onClick={onLoginClick}
            className="px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-text-secondary hover:text-accent-primary transition-all"
          >
            Se connecter
          </button>
          <button 
            onClick={onSignupClick}
            className="relative h-11 px-7 rounded-full bg-accent-primary text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-xl shadow-accent-primary/20 hover:scale-105 active:scale-95 transition-all overflow-hidden group/btn"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">Commencer</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-3 rounded-2xl bg-white/[0.05] text-text-primary border border-white/10 hover:bg-white/10 transition-all"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Sidebar/Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[300px] bg-bg-elevated/95 backdrop-blur-2xl z-50 lg:hidden p-8 border-l border-white/10 shadow-2xl"
            >
               <div className="flex justify-end mb-12">
                 <button onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-2xl bg-white/5 text-text-secondary hover:text-white">
                   <X className="w-6 h-6" />
                 </button>
               </div>

               <div className="flex flex-col gap-8">
                 {navLinks.map((link) => {
                   const isActive = location.pathname === link.path;
                   return (
                     <button
                       key={link.label}
                       onClick={() => {
                         link.onClick?.();
                         setMobileMenuOpen(false);
                       }}
                       className={`text-left text-xl font-bold flex items-center justify-between group ${
                         isActive ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
                       }`}
                     >
                       {link.label}
                       <ChevronRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isActive ? 'text-accent-primary' : 'text-white/20'}`} />
                     </button>
                   );
                 })}

                 <div className="h-px bg-white/5 my-4" />

                 <button 
                   onClick={() => {
                     onLoginClick?.();
                     setMobileMenuOpen(false);
                   }}
                   className="text-left text-xl font-bold text-text-secondary hover:text-accent-primary transition-colors"
                 >
                   Se connecter
                 </button>
                 <button 
                    onClick={() => {
                      onSignupClick?.();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full py-5 rounded-3xl bg-accent-primary text-white font-black text-lg uppercase tracking-widest shadow-xl shadow-accent-primary/20"
                  >
                    Commencer
                  </button>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
