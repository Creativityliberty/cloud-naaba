import { GoogleGenAI } from "@google/genai";
import { CONFIG } from '../config';

// Vite exposes VITE_ env vars via import.meta.env, Node/SSR via process.env
const apiKey = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_GEMINI_API_KEY)
  || (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY)
  || '';
const ai = new GoogleGenAI({ apiKey });

const pricingKnowledge = CONFIG.pricing.map(p =>
  `- ${p.name} (${p.price}): ${p.description}\n  Fonctionnalités: ${p.features.join(', ')}`
).join('\n');

const solutionsKnowledge = CONFIG.solutions.map(s =>
  `- ${s.name} (${s.category}): ${s.description}`
).join('\n');

const securityKnowledge = CONFIG.security.pillars.map(s =>
  `- ${s.name}: ${s.description}`
).join('\n');

const systemInstruction = `Tu es Naaba Assist., l'assistant IA premium de CloudNaaba.

IDENTITÉ CLOUDNAABA:
${CONFIG.brand.description}

OFFRES ET TARIFS:
${pricingKnowledge}

SOLUTIONS DISPONIBLES SUR LE MARKETPLACE:
${solutionsKnowledge}

PILIERS SÉCURITÉ:
${securityKnowledge}

PAGES DU SITE:
- Accueil: ${CONFIG.pages.home}
- Marketplace IA: ${CONFIG.pages.marketplace}
- Infrastructure Hybride: ${CONFIG.pages.hybrid}
- Tarifs: ${CONFIG.pages.pricing}
- Sécurité: ${CONFIG.pages.security}
- Contact: ${CONFIG.pages.contact}

RÈGLES DE FORMATAGE (CRITIQUE):
1. INTERDICTION TOTALE d'utiliser des astérisques (* ou **).
2. Pour les listes, utilise uniquement des tirets simples (-) au début de ligne.
3. Pour les titres, écris-les en MAJUSCULES sur leur propre ligne.
4. Pour les liens de pages, utilise [NOM DE LA PAGE](chemin).
5. Réponds toujours en français, de manière précise et directe.

COMPORTEMENT:
- Tu parles à la première personne au nom de CloudNaaba (ex: "Chez CloudNaaba, nous...").
- Tu es chaleureux, professionnel et expert en infrastructure cloud.
- Si quelqu'un veut en savoir plus sur les offres: renvoie vers [les tarifs](/tarifs).
- Si quelqu'un veut déployer: renvoie vers [le Marketplace](/marketplace).
- Si quelqu'un parle de sécurité: renvoie vers [la page Sécurité](/securite).
- Si quelqu'un veut contacter l'équipe: renvoie vers [Contact](/contact).
- Utilise des emojis avec parcimonie (1-2 max par message) pour rester professionnel.
- Ne réponds qu'aux questions liées à CloudNaaba, l'infrastructure cloud, l'IA privée et sujets connexes.`;

export const chatWithNaabaAssist = async (
  userMessage: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
      config: {
        systemInstruction,
        maxOutputTokens: 800,
        temperature: 0.7,
      }
    });

    return response.text || "Je rencontre une difficulté technique. Notre équipe reste disponible via la [page Contact](/contact).";
  } catch (error) {
    console.error("Naaba Assist. API Error:", error);
    return "Connexion temporairement instable. Retrouvez notre équipe directement sur la [page Contact](/contact).";
  }
};
