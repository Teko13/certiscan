"use client";
import React, { useState } from 'react';
import Logo from './Logo';

interface HeaderProps {
  currentPage?: 'home' | 'scanner';
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'home' }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="glass-effect border-b border-[#facc15]/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Version mobile/tablette (jusqu'à lg) */}
        <div className="flex items-center justify-between h-16 lg:hidden">
          {/* Logo */}
          <Logo size="sm" />

          {/* Actions */}
          <div className="flex items-center gap-3">
            {currentPage !== 'scanner' && (
              <a href="/scanner" className="hidden md:inline-flex btn-secondary px-4 py-2">
                Scan
              </a>
            )}
            <button
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#facc15]/30 hover:border-[#facc15] text-text-primary hover:text-[#facc15] transition-colors"
            >
              <span className="relative block w-5 h-5">
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transform transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}
                />
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-5 bg-current transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}
                />
                <span
                  className={`absolute left-0 bottom-1.5 h-0.5 w-5 bg-current transform transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Panneau déroulant mobile/tablette */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}`}
        >
          <div className="pb-4">
            <div className="rounded-xl border border-[#facc15]/20 bg-dark-900/60 backdrop-blur p-4 space-y-3 shadow-lg">
              <a 
                href="/" 
                className={`block px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 'home' ? 'text-[#facc15] bg-[#facc15]/10' : 'text-text-secondary hover:bg-dark-800'
                }`}
                onClick={() => setOpen(false)}
              >
                Accueil
              </a>
              <a 
                href="#how-it-works" 
                className="block px-3 py-2 rounded-lg text-text-secondary hover:bg-dark-800 transition-colors"
                onClick={() => setOpen(false)}
              >
                Comment ça marche
              </a>
              <a 
                href="#features" 
                className="block px-3 py-2 rounded-lg text-text-secondary hover:bg-dark-800 transition-colors"
                onClick={() => setOpen(false)}
              >
                Fonctionnalités
              </a>
              {currentPage !== 'scanner' && (
                <a href="/scanner" className="btn-secondary w-full inline-flex justify-center" onClick={() => setOpen(false)}>
                  Commencer le scan
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Version grand écran (lg et +) */}
        <div className="hidden lg:flex justify-between items-center h-16">
          <Logo size="md" />

          <div className="flex space-x-8 items-center">
            <a 
              href="/" 
              className={`transition-colors ${
                currentPage === 'home' 
                  ? 'text-[#facc15]' 
                  : 'text-text-secondary hover:text-[#facc15]'
              }`}
            >
              Accueil
            </a>
            <a 
              href="#how-it-works" 
              className="text-text-secondary hover:text-[#facc15] transition-colors"
            >
              Comment ça marche
            </a>
            <a 
              href="#features" 
              className="text-text-secondary hover:text-[#facc15] transition-colors"
            >
              Fonctionnalités
            </a>
          </div>

          {currentPage !== 'scanner' && (
            <a 
              href="/scanner" 
              className="btn-secondary"
            >
              Commencer le scan
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
