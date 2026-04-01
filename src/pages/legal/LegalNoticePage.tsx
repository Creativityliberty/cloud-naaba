import React from 'react';
import LegalShell from '../../components/legal/LegalShell';
import { ShieldCheck } from 'lucide-react';

export default function LegalNoticePage() {
  return (
    <LegalShell 
      title="Mentions Légales" 
      lastUpdated="1 Avril 2026"
      icon={ShieldCheck}
    >
      <section className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-6">1. Éditeur de la Plateforme</h2>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2 text-lg">
             <p className="font-black text-accent-primary">CLOUD-NAABA</p>
             <p className="font-medium">Adresse du siège social : [VOTRE ADRESSE ICI]</p>
             <p className="font-medium text-text-secondary">Immatriculation : [VOTRE SIRET/N° RCS ICI]</p>
             <p className="font-medium text-text-secondary">Téléphone : [VOTRE TÉLÉPHONE ICI]</p>
             <p className="font-medium text-text-secondary italic">Email : [VOTRE EMAIL ICI]</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-6">2. Hébergement de la Plateforme</h2>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2 text-lg">
             <p className="font-black text-accent-primary">Cloud-Naaba Infra (Souveraine)</p>
             <p className="font-medium">Hébergé sur les infrastructures CloudNaaba.</p>
             <p className="font-medium text-text-secondary">Localisation des données : Union Européenne / Afrique (Souveraineté des données garantie).</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-6">3. Directeur de la Publication</h2>
          <p>
            Le directeur de la publication est [VOTRE NOM ICI].
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-6">4. Contact Commercial & Technique</h2>
          <p>
            Pour toute demande d'assistance technique ou de renseignement commercial, veuillez utiliser notre <a href="/contact" className="text-accent-primary underline hover:text-white transition-all">Formulaire de Contact</a>.
          </p>
        </div>

        <div>
           <p className="text-sm text-center text-text-secondary/40 font-medium mt-12 bg-white/5 py-4 rounded-xl border border-dashed border-white/10">
              © 2026 CloudNaaba. Tous droits réservés. L'utilisation de cette plateforme implique l'acceptation intégrale de nos CGU.
           </p>
        </div>
      </section>
    </LegalShell>
  );
}
