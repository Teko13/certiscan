import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-950 text-text-primary font-sans">
      <Header currentPage="home" />

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-dark-900 pointer-events-none -z-10">
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23facc15' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Hero Content */}
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">CertiScan</span>
          </h1>
              <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
                Faites parler les{' '}
                <a href="#what-is-2d-doc" className="text-[#facc15] underline underline-offset-2">
                  QR code 2D-Doc
                </a>{' '}
                sur vos documents numériques
              </p>
              <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto">
                Un simple scan suffit pour révéler, comprendre et vérifier les informations authentiques d'un document.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a href="/scanner" className="btn-secondary">
                  Commencer le scan
                </a>
                <a href="#how-it-works" className="btn-primary">
                  Comment ça marche
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* What is 2D-Doc Section */}
        <section id="what-is-2d-doc" className="py-20 bg-dark-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8 text-center">
                Qu'est-ce qu'un QR Code 2D-Doc ?
              </h2>
              
              <div className="prose prose-lg max-w-none text-text-secondary">
                <p className="text-xl leading-relaxed mb-6">
                  Le <strong className="text-[#facc15]">2D-Doc</strong> (ou <em>Document 2D sécurisé</em>) est un type particulier de <strong>QR Code officiel</strong> utilisé par les administrations françaises pour <strong className="text-[#facc15]">certifier l'authenticité d'un document</strong>.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Contrairement à un QR code classique, il ne renvoie pas vers un lien web : il <strong className="text-[#facc15]">contient directement les données du document</strong> (nom, date, référence, etc.) ainsi qu'une <strong className="text-[#facc15]">signature cryptographique</strong> qui garantit qu'elles n'ont pas été modifiées.
                </p>
                
                <p className="text-lg leading-relaxed mb-8">
                  Ce format est utilisé sur de nombreux documents administratifs et justificatifs officiels, comme :
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-4 mt-2 flex-shrink-0"></span>
                    <span>les <strong>avis d'imposition</strong> ;</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-4 mt-2 flex-shrink-0"></span>
                    <span>les <strong>justificatifs de domicile</strong> ;</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-4 mt-2 flex-shrink-0"></span>
                    <span>les <strong>bulletins de salaire dématérialisés</strong> ;</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-4 mt-2 flex-shrink-0"></span>
                    <span>les <strong>attestations d'assurance ou de droits</strong>.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What is our app for Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8 text-center">
                À quoi sert notre application ?
              </h2>
              
              <div className="prose prose-lg max-w-none text-text-secondary">
                <p className="text-xl leading-relaxed mb-6">
                  Notre outil permet à <strong className="text-[#facc15]">tout utilisateur</strong>, particulier comme professionnel, de <strong className="text-[#facc15]">vérifier facilement l'authenticité d'un document contenant un QR Code 2D-Doc</strong>.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  En scannant simplement le code QR, l'application :
                </p>
                
                <ol className="space-y-4 mb-12 list-none">
                  <li className="text-lg leading-relaxed flex items-start">
                    <span className="text-[#facc15] font-bold mr-3 flex-shrink-0">1.</span>
                    <span><strong>Décode automatiquement les données</strong> contenues dans le QR code.</span>
                  </li>
                  <li className="text-lg leading-relaxed flex items-start">
                    <span className="text-[#facc15] font-bold mr-3 flex-shrink-0">2.</span>
                    <span><strong>Affiche les informations lisibles</strong> (nom, date, référence, adresse, etc.).</span>
                  </li>
                  <li className="text-lg leading-relaxed flex items-start">
                    <span className="text-[#facc15] font-bold mr-3 flex-shrink-0">3.</span>
                    <span><strong>Vérifie la signature numérique</strong> pour confirmer si le document est authentique ou falsifié.</span>
                  </li>
                </ol>
                
                <h3 className="text-2xl font-bold text-text-primary mb-6">Cas d'usage concrets</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-4 mt-2 flex-shrink-0"></span>
                    <span><strong>Un recruteur</strong> peut vérifier l'authenticité d'un justificatif de domicile ou d'un avis d'imposition fourni par un candidat.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-4 mt-2 flex-shrink-0"></span>
                    <span><strong>Une banque</strong> peut contrôler la validité d'un document administratif avant l'ouverture d'un compte.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-4 mt-2 flex-shrink-0"></span>
                    <span><strong>Un particulier</strong> peut s'assurer que son document téléchargé depuis un site tiers n'a pas été modifié.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-4 mt-2 flex-shrink-0"></span>
                    <span><strong>Une entreprise ou un organisme public</strong> peut intégrer cet outil pour automatiser la vérification documentaire.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How it works Section */}
        <section id="how-it-works" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Comment ça marche</h2>
              <p className="text-base md:text-xl text-text-secondary max-w-2xl mx-auto">
                Un processus simple en 3 étapes
              </p>
            </div>

            {/* QR Code Example */}
            <div className="flex justify-center mb-16">
              <div className="glass-effect rounded-2xl p-8 border border-[#facc15]/20">
            <Image
                  src="/illustration.png"
                  alt="Exemple de QR code"
                  width={400}
                  height={400}
                  className="mx-auto"
                />
              </div>
            </div>

            {/* Desktop version - large screens only */}
            <div className="hidden lg:block relative">
              {/* Horizontal line for desktop - from center of step 1 to center of step 3 */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-[#facc15] z-0"></div>
              
              <div className="grid grid-cols-3 gap-8 relative">
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#facc15] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-2xl font-bold text-[#0a0a0a]">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Téléchargez</h3>
                  <p className="text-text-muted">Sélectionnez l'image de votre QR code</p>
                </div>

                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#facc15] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-2xl font-bold text-[#0a0a0a]">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Analysez</h3>
                  <p className="text-text-muted">Notre système extrait et décode les données</p>
                </div>

                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#facc15] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-2xl font-bold text-[#0a0a0a]">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Consultez</h3>
                  <p className="text-text-muted">Visualisez les informations de manière claire</p>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet version - small and medium screens only */}
            <div className="block lg:hidden relative">
              {/* Vertical line for mobile/tablet - positioned on the left, connecting all 3 steps */}
              <div className="absolute left-8 top-8 w-0.5 h-64 bg-[#facc15] z-0"></div>
              
              <div className="flex flex-col gap-8 relative">
                <div className="flex items-start gap-4 relative">
                  <div className="w-16 h-16 bg-[#facc15] rounded-full flex items-center justify-center mb-4 relative z-10 flex-shrink-0">
                    <span className="text-2xl font-bold text-[#0a0a0a]">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2 text-left">Téléchargez</h3>
                    <p className="text-sm text-text-muted text-left">Sélectionnez l'image de votre QR code</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 relative">
                  <div className="w-16 h-16 bg-[#facc15] rounded-full flex items-center justify-center mb-4 relative z-10 flex-shrink-0">
                    <span className="text-2xl font-bold text-[#0a0a0a]">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2 text-left">Analysez</h3>
                    <p className="text-sm text-text-muted text-left">Notre système extrait et décode les données</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 relative">
                  <div className="w-16 h-16 bg-[#facc15] rounded-full flex items-center justify-center mb-4 relative z-10 flex-shrink-0">
                    <span className="text-2xl font-bold text-[#0a0a0a]">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2 text-left">Consultez</h3>
                    <p className="text-sm text-text-muted text-left">Visualisez les informations de manière claire</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-dark-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Fonctionnalités</h2>
              <p className="text-base md:text-xl text-text-secondary max-w-2xl mx-auto">
                Une solution complète pour l'analyse de certificats numériques
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-effect rounded-xl p-6 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-transparent border-2 border-[#facc15] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#facc15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Scan d'image</h3>
                <p className="text-text-muted">
                  Téléchargez simplement une image de QR code et laissez notre technologie faire le reste.
                </p>
              </div>

              <div className="glass-effect rounded-xl p-6 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-transparent border-2 border-[#facc15] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#facc15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Analyse automatique</h3>
                <p className="text-text-muted">
                  Extraction et décodage automatique des informations du certificat avec validation.
                </p>
              </div>

              <div className="glass-effect rounded-xl p-6 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-transparent border-2 border-[#facc15] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#facc15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Résultats clairs</h3>
                <p className="text-text-muted">
                  Présentation intuitive et lisible des informations extraites du certificat.
                </p>
              </div>
            </div>
        </div>
        </section>


        <Footer />
      </main>
    </div>
  );
}
