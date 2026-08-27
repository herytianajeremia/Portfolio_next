# Portfolio — Heritiana Jeremia

Portfolio personnel de **Heritiana Jeremia** — Web Designer & Intégrateur Front-end.
Version moderne, bilingue (🇫🇷 / 🇬🇧) et 100 % responsive.

## 🧱 Stack technique

| Domaine        | Technologie                          |
| -------------- | ------------------------------------ |
| Framework      | [Next.js 15](https://nextjs.org) (App Router) |
| Langage        | TypeScript                           |
| Styles         | [Tailwind CSS](https://tailwindcss.com) |
| Composants UI  | [shadcn/ui](https://ui.shadcn.com) (Radix UI) |
| Animations     | [Framer Motion](https://www.framer.com/motion/) |
| Icônes         | [lucide-react](https://lucide.dev)   |
| Police         | Space Grotesk (`next/font`)          |

## 🚀 Démarrage

```bash
npm install      # installer les dépendances
npm run dev      # serveur de développement → http://localhost:3000
npm run build    # build de production (génère le dossier statique out/)
```

Le projet est configuré en **export statique** (`output: "export"`). `npm run build`
produit un dossier `out/` déployable tel quel sur n'importe quel hébergeur statique.

## 🌐 Multilingue (FR / EN)

- Le sélecteur de langue est en haut à droite (`FR` / `EN`).
- La langue est mémorisée dans le `localStorage` et détectée depuis le navigateur au premier chargement.
- **Tous les textes** sont centralisés dans [`lib/i18n.ts`](lib/i18n.ts) — c'est le seul fichier à modifier pour retoucher le contenu (hors projets).

## ✏️ Modifier le contenu

| Élément                       | Fichier                |
| ----------------------------- | ---------------------- |
| Textes (FR/EN)                | `lib/i18n.ts`          |
| Coordonnées, réseaux, CV      | `lib/data.ts` → `profile`, `socials` |
| Compétences & outils          | `lib/data.ts` → `skills`, `tools` |
| Projets (image, lien, tags)   | `lib/data.ts` → `projects` |
| Couleurs / thème              | `app/globals.css` (variables CSS) |
| Images                        | `public/img/`          |
| CV téléchargeable             | `public/download/CV-Heritiana-Jeremia.pdf` |

## 📦 Déploiement

### Netlify (config incluse)
Le fichier `netlify.toml` est déjà prêt : commande `npm run build`, dossier publié `out`.

### Vercel
Import du dépôt → détection automatique de Next.js. (Vous pouvez retirer
`output: "export"` dans `next.config.mjs` pour bénéficier de l'optimisation
d'images côté serveur.)

### Hébergeur statique classique
Uploader le contenu du dossier `out/` après `npm run build`.

## 📁 Structure

```
app/            layout, page d'accueil, styles globaux
components/
  ui/           primitives shadcn/ui (button, card, dialog, input…)
  sections/     hero, about, services, work, freelance, contact
  navbar, footer, language-provider, language-toggle, reveal…
lib/
  i18n.ts       dictionnaire FR/EN
  data.ts       données (profil, projets, compétences, réseaux)
  utils.ts      helper cn()
public/         images, CV, favicon
```

---

© 2025 ANDRIANANDRASANA Heritiana Jeremia.
