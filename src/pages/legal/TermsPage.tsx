import React from 'react';
import LegalShell from '../../components/legal/LegalShell';
import { FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <LegalShell 
      title="Conditions Générales d'Utilisation" 
      lastUpdated="1 Avril 2026"
      icon={FileText}
    >
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-text-primary">1. Objet des CGU</h2>
        <p>
          Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») ont pour objet de définir les modalités de mise à disposition des services de la plateforme CloudNaaba et les conditions d'utilisation par l'utilisateur.
        </p>

        <h2 className="text-2xl font-bold text-text-primary">2. Accès au service</h2>
        <p>
          Le service est accessible gratuitement à tout utilisateur disposant d'un accès à internet. Tous les frais supportés par l'utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
        </p>

        <h2 className="text-2xl font-bold text-text-primary">3. Propriété Intellectuelle</h2>
        <p>
          Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son...) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.
        </p>
        <p>
          L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite.
        </p>

        <h2 className="text-2xl font-bold text-text-primary">4. Responsabilité</h2>
        <p>
          Les sources des informations diffusées sur le site CloudNaaba sont réputées fiables mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions.
        </p>
        <p>
          Le site CloudNaaba ne peut être tenu pour responsable d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès, ou au téléchargement provenant de ce site.
        </p>

        <h2 className="text-2xl font-bold text-text-primary">5. Liens hypertextes</h2>
        <p>
          Des liens hypertextes peuvent être présents sur le site. L’Utilisateur est informé qu’en cliquant sur ces liens, il sortira du site CloudNaaba. Ce dernier n’a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
        </p>

        <h2 className="text-2xl font-bold text-text-primary">6. Droit applicable</h2>
        <p>
          La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître.
        </p>
      </section>
    </LegalShell>
  );
}
