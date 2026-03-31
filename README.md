# CloudNaaba — Plateforme d'exploitation applicative

> Infrastructure souveraine pour le déploiement d'applications, d'IA locales et d'environnements sécurisés — pensée pour les PME et les organisations exigeantes.

---

## ✨ Présentation

CloudNaaba est une plateforme moderne qui simplifie le déploiement et l'exploitation d'applications techniques (bases de données, IA locale, outils DevOps) sans gestion complexe de serveur. Le projet combine une interface marketing premium avec un système de routage multi-pages et un assistant IA intégré : **Naaba Assist.**

---

## 🚀 Fonctionnalités

- **Marketplace CloudNaaba** — déploiement Ollama, PostgreSQL, Redis, GitLab et bien plus
- **Infrastructure Hybride** — présentation de l'offre d'hébergement souverain
- **Page Sécurité** — conformité RGPD, chiffrement AES-256, isolation réseau
- **Page Tarifs** — 3 plans (Découverte, Pro, Business) avec grille détaillée
- **Page Contact** — routing intelligent par catégorie de besoin
- **Naaba Assist.** — assistant IA intégré alimenté par Google Gemini, connaissant toute la plateforme
- **SEO avancé** — routage avec URLs propres, `robots.txt` et `llms.txt` (standard IA)

---

## ⚙️ Technologies utilisées

| Technologie | Version | Rôle |
|---|---|---|
| **React** | 19 | Framework UI |
| **Vite** | 6 | Bundler & serveur de développement |
| **TypeScript** | 5.8 | Typage statique |
| **Tailwind CSS** | 4 | Styles utilitaires |
| **Motion (Framer)** | 12 | Animations et transitions |
| **React Router DOM** | 6 | Routage multi-pages avec URLs propres |
| **Lucide React** | — | Bibliothèque d'icônes |
| **@google/genai** | — | SDK Google Gemini pour Naaba Assist. |

---

## 🛠️ Installation & Développement

### Prérequis
- Node.js 20+
- npm 10+

### Lancer en local

```bash
# 1. Cloner le dépôt
git clone https://github.com/Creativityliberty/cloud-naaba.git
cd cloud-naaba

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env.example .env
# Renseigner votre clé Gemini dans .env :
# VITE_GEMINI_API_KEY="votre_cle_ici"

# 4. Démarrer le serveur de développement
npm run dev
```

L'application sera disponible sur [http://localhost:3000](http://localhost:3000).

---

## 🌐 Déploiement sur Vercel

Ce projet est configuré pour être déployé sur **Vercel** en un clic.

### Étapes

1. **Importer** le dépôt sur votre [tableau de bord Vercel](https://vercel.com/new).
2. Vercel détectera automatiquement la configuration **Vite**.
3. **Ajouter les variables d'environnement** dans les paramètres du projet :
   - `VITE_GEMINI_API_KEY` — Clé API Google Gemini (pour Naaba Assist.)
4. Cliquer sur **Deploy**.

> Le fichier `vercel.json` inclus gère automatiquement le routage SPA pour que toutes les routes (`/marketplace`, `/tarifs`, `/securite`, etc.) fonctionnent parfaitement en production.

---

## 🗂️ Structure du projet

```
src/
├── components/
│   ├── contact/         # Composants de la page Contact
│   ├── security/        # Composants de la page Sécurité
│   ├── ai/              # Composants de la page Marketplace IA
│   ├── Chatbot.tsx      # Naaba Assist. (chatbot IA flottant)
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── GlobalModal.tsx
├── pages/
│   ├── AiMarketplace.tsx
│   ├── HybridInfra.tsx
│   ├── PricingPage.tsx
│   ├── SecurityPage.tsx
│   └── ContactPage.tsx
├── services/
│   └── gemini.ts        # Service Google Gemini API
├── config.ts            # Base de connaissance CloudNaaba
├── App.tsx              # Routage principal (React Router v6)
└── main.tsx
public/
├── robots.txt           # Indexation Googlebot
└── llms.txt             # Indexation LLMs (ChatGPT, Perplexity, etc.)
```

---

## 📄 Licence

Tous droits réservés © CloudNaaba 2025.  
Ce projet est propriétaire. Toute reproduction, distribution ou modification sans autorisation explicite est interdite.
