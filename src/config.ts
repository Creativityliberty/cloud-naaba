export const CONFIG = {
  brand: {
    name: "CloudNaaba",
    tagline: "L'infrastructure souveraine des organisations ambitieuses",
    description: "CloudNaaba est une plateforme d'infrastructure hybride pour déployer des environnements IA privés (Ollama, LLM locaux), des bases de données, des applications et des outils DevOps — sans gestion serveur complexe et avec une sécurité souveraine.",
    contact: {
      email: "contact@cloudnaaba.com",
      whatsapp: "33600000000", // Replace with actual number
    }
  },
  pricing: [
    {
      name: "Découverte",
      price: "4 000 F CFA / mois",
      description: "Pour tester ou lancer un premier projet sur l'infrastructure CloudNaaba.",
      features: [
        "1 environnement de déploiement",
        "Accès Marketplace CloudNaaba",
        "Support par email",
        "Jusqu'à 2 applications déployées",
      ]
    },
    {
      name: "Pro",
      price: "7 500 F CFA / mois",
      description: "Pour applications actives et PME souhaitant déployer sereinement.",
      recommended: true,
      features: [
        "Tout le plan Découverte",
        "Déploiement multi-conteneurs",
        "IA locale avec Ollama incluse",
        "Zéro frais de sortie réseau (Egress)",
        "Support prioritaire 5j/7",
      ]
    },
    {
      name: "Business",
      price: "25 000 F CFA / mois",
      description: "Pour projets critiques nécessitant disponibilité, isolation et conformité maximales.",
      features: [
        "Tout le plan Pro",
        "Infrastructure dédiée",
        "Conformité RGPD et souveraineté des données",
        "SLA garanti 99.9%",
        "Support 24/7 et account manager dédié",
      ]
    }
  ],
  solutions: [
    { name: "Ollama", category: "IA locale", description: "Déployez des LLM (Llama, Mistral, Phi) sur votre infrastructure privée, sans envoyer vos données dans le cloud public." },
    { name: "FlowiseAI", category: "IA locale", description: "Interface drag & drop pour construire des apps LLM et des workflows RAG connectés à vos données." },
    { name: "PostgreSQL", category: "Base de données", description: "Base de données relationnelle avancée, performance éprouvée." },
    { name: "Redis", category: "Base de données", description: "Stockage de données en mémoire ultra-rapide pour le cache et les sessions." },
    { name: "MongoDB", category: "Base de données", description: "Base de données NoSQL orientée documents." },
    { name: "GitLab", category: "DevOps", description: "Plateforme DevOps complète pour le cycle de vie du logiciel." },
    { name: "WordPress", category: "CMS", description: "Le CMS le plus populaire au monde." },
    { name: "Next.js", category: "Framework", description: "Le framework React pour le web." },
  ],
  pages: {
    home: "/",
    marketplace: "/marketplace",
    hybrid: "/infrastructure-hybride",
    pricing: "/tarifs",
    security: "/securite",
    contact: "/contact",
  },
  security: {
    pillars: [
      { name: "Chiffrement souverain", description: "Données chiffrées au repos (AES-256) et en transit (TLS 1.3). Clés de chiffrement contrôlées par le client." },
      { name: "Isolation réseau", description: "Chaque environnement est isolé dans son propre namespace privé, avec des pare-feux internes automatisés." },
      { name: "Conformité RGPD", description: "Hébergement en Europe, traçabilité des données, droit à l'effacement garanti." },
      { name: "Continuité de service", description: "Sauvegardes automatiques quotidiennes, infrastructure redondée sur plusieurs zones de disponibilité." },
    ]
  }
};
