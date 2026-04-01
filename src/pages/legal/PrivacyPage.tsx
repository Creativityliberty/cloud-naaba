import React from 'react';
import LegalShell from '../../components/legal/LegalShell';
import { Lock } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <LegalShell 
      title="Politique de Confidentialité" 
      lastUpdated="1 Avril 2026"
      icon={Lock}
    >
      <section className="space-y-6 text-text-secondary">
        <h2 className="text-2xl font-bold text-text-primary">1. Collecte des données personnelles</h2>
        <p>
          CloudNaaba accorde une importance capitale à la protection de vos données personnelles. Dans le cadre de l'utilisation de la plateforme, nous collectons des données relatives à votre identité (nom, email) lors de votre inscription via notre système d'authentification sécurisé.
        </p>

        <h2 className="text-2xl font-bold text-text-primary">2. Finalités du traitement</h2>
        <p>
          Les données que nous collectons sont utilisées exclusivement pour :
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>La gestion de votre compte utilisateur et de vos accès.</li>
          <li>La fourniture de nos services d'infrastructure et de support technique.</li>
          <li>L'envoi de notifications administratives importantes liées à la plateforme.</li>
        </ul>

        <h2 className="text-2xl font-bold text-text-primary">3. Conservation des données</h2>
        <p>
          CloudNaaba conserve vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles sont traitées, sauf obligation légale contraire (comptabilité, archivage fiscal, etc.).
        </p>

        <h2 className="text-2xl font-bold text-text-primary">4. Sécurité des données</h2>
        <p>
          Toutes les données sont stockées sur des serveurs sécurisés et font l'objet d'un chiffrement. Notre infrastructure garantit une authentification robuste et sécurisée répondant aux plus hauts standards.
        </p>

        <h2 className="text-2xl font-bold text-text-primary">5. Vos droits (RGPD)</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
        </p>
        <ul className="list-disc pl-6 space-y-2 font-medium">
          <li>Droit d'accès et d'information.</li>
          <li>Droit de rectification.</li>
          <li>Droit à l'effacement (« droit à l'oubli »).</li>
          <li>Droit à la limitation du traitement.</li>
          <li>Droit à la portabilité de vos données.</li>
        </ul>

        <h2 className="text-2xl font-bold text-text-primary">6. Contact</h2>
        <p>
          Pour toute question relative à cette politique de confidentialité ou pour exercer vos droits, vous pouvez contacter notre délégué à la protection des données (DPO) via notre formulaire de contact.
        </p>
      </section>
    </LegalShell>
  );
}
