import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-dark-950 text-text-primary font-sans">
      <Header currentPage="privacy" />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Notre engagement envers la protection de vos données
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-text-secondary">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
            <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-3"></span>
            1. Introduction
          </h2>
          
          <p className="text-lg leading-relaxed mb-6">
            La présente politique de confidentialité décrit la manière dont nous traitons les informations transmises par les utilisateurs lors de l'utilisation de notre application de vérification de documents.
          </p>
          
          <p className="text-lg leading-relaxed mb-8">
            Notre engagement est simple : <strong className="text-[#facc15]">nous ne collectons, ne stockons, ni ne partageons aucune donnée personnelle ou fichier transmis par l'utilisateur</strong>.<br/>
            Les données sont uniquement utilisées le temps nécessaire pour effectuer le traitement demandé.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
            <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-3"></span>
            2. Données traitées
          </h2>
          
          <p className="text-lg leading-relaxed mb-6">
            Lorsque vous utilisez notre application, vous pouvez être amené à <strong>téléverser un fichier</strong> ou à <strong>fournir la chaîne brute issue d'un QR code</strong>.<br/>
            Ces éléments peuvent contenir des informations administratives ou personnelles (ex. : nom, numéro fiscal, adresse, etc.).
          </p>
          
          <p className="text-lg leading-relaxed mb-4">
            Ces données sont :
          </p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-4 mt-2 shrink-0"></span>
              <span><strong>transmises de manière sécurisée</strong> (via HTTPS) au serveur pour traitement temporaire ;</span>
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-4 mt-2 shrink-0"></span>
              <span><strong>utilisées uniquement</strong> pour décoder le contenu du QR code et afficher les informations correspondantes ;</span>
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-4 mt-2 shrink-0"></span>
              <span><strong>automatiquement supprimées</strong> dès la fin du traitement (aucune conservation en base de données, fichiers temporaires effacés immédiatement).</span>
            </li>
          </ul>
          
          <p className="text-lg leading-relaxed mb-8">
            Nous ne procédons à <strong className="text-[#facc15]">aucune collecte, analyse, profilage ou partage</strong> des données transmises.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
            <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-3"></span>
            3. Finalité du traitement
          </h2>
          
          <p className="text-lg leading-relaxed mb-8">
            Les fichiers et données fournis par l'utilisateur ne servent <strong className="text-[#facc15]">qu'à effectuer la vérification de l'authenticité</strong> des documents ou à en extraire les informations.<br/>
            Ils ne sont <strong className="text-[#facc15]">jamais utilisés à d'autres fins</strong>, ni communiqués à des tiers.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
            <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-3"></span>
            4. Sécurité des données
          </h2>
          
          <p className="text-lg leading-relaxed mb-4">
            Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour garantir la sécurité des données pendant leur traitement :
          </p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-4 mt-2 shrink-0"></span>
              <span>Connexion sécurisée (HTTPS)</span>
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-4 mt-2 shrink-0"></span>
              <span>Suppression automatique après exécution</span>
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-4 mt-2 shrink-0"></span>
              <span>Aucune journalisation du contenu transmis</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
            <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-3"></span>
            5. Conservation des données
          </h2>
          
          <p className="text-lg leading-relaxed mb-8">
            Aucune donnée transmise par les utilisateurs n'est conservée après traitement.<br/>
            Les informations sont <strong className="text-[#facc15]">effacées immédiatement</strong> du serveur dès la fin de l'analyse.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
            <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-3"></span>
            6. Vos droits
          </h2>
          
          <p className="text-lg leading-relaxed mb-8">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez de droits d'accès, de rectification, d'effacement et d'opposition concernant vos données personnelles.<br/>
            Cependant, puisque <strong className="text-[#facc15]">aucune donnée n'est conservée</strong>, ces droits ne nécessitent aucune démarche particulière.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
            <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-3"></span>
            7. Responsable du traitement
          </h2>
          
          <p className="text-lg leading-relaxed mb-8">
            Pour toute question concernant la confidentialité ou le traitement de vos données, vous pouvez contacter :
          </p>
          
          <div className="bg-dark-800 rounded-lg p-6 mb-8">
            <p className="text-lg leading-relaxed">
              <strong className="text-[#facc15]">Teko Folly</strong><br/>
              <strong>tekofabricefolly@gmail.com</strong>
            </p>
          </div>

          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
            <span className="w-3 h-3 bg-[#facc15] rounded-sm mr-3"></span>
            8. Mise à jour de la politique
          </h2>
          
          <p className="text-lg leading-relaxed mb-8">
            Cette politique de confidentialité peut être mise à jour pour refléter les évolutions techniques ou légales.<br/>
            La date de dernière mise à jour sera toujours indiquée en haut de la page.
          </p>

          <div className="border-t border-[#facc15]/20 pt-8 mt-12">
            <p className="text-lg text-text-muted text-center">
              <strong className="text-[#facc15]">Dernière mise à jour : 28 Octobre 2025</strong>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
