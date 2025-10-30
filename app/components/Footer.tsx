import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-[#facc15]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section principale */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Logo et description */}
            <div className="md:col-span-1">
              {/* Logo responsive: plus petit sur mobile */}
              <div className="md:hidden mb-4">
                <Logo size="sm" />
              </div>
              <div className="hidden md:block mb-4">
                <Logo size="lg" />
              </div>
              <p className="text-text-muted text-sm max-w-xs">
                Scanner et décoder les QR codes 2D-Doc en toute simplicité.
              </p>
            </div>
            
            {/* Navigation */}
            <div className="md:col-span-1">
              <h3 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">
                Navigation
              </h3>
              <nav className="grid grid-cols-2 gap-3">
                <a href="/" className="text-text-secondary hover:text-[#facc15] transition-colors text-sm">
                  Accueil
                </a>
                <a href="/scanner" className="text-text-secondary hover:text-[#facc15] transition-colors text-sm">
                  Scanner
                </a>
                <a href="#features" className="text-text-secondary hover:text-[#facc15] transition-colors text-sm">
                  Fonctionnalités
                </a>
                <a href="#how-it-works" className="text-text-secondary hover:text-[#facc15] transition-colors text-sm">
                  Comment ça marche
                </a>
                <a href="/privacy" className="text-text-secondary hover:text-[#facc15] transition-colors text-sm col-span-2">
                  Politique de confidentialité
                </a>
              </nav>
            </div>
            
            {/* Mention personnelle */}
            <div className="md:col-span-1">
              <h3 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">
                Développement
              </h3>
              <div className="bg-dark-800/50 rounded-lg p-4 border border-[#facc15]/10">
                <p className="text-text-muted text-sm mb-2">
                  Développé par
                </p>
                <a 
                  href="https://teko-fabrice.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#facc15] underline hover:text-[#facc15]/80 transition-colors font-medium"
                >
                  @teko-fabrice
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Ligne de séparation */}
        <div className="border-t border-dark-700"></div>
      </div>
    </footer>
  );
};

export default Footer;
