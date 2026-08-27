import type { Locale } from "@/lib/i18n";

/* ---------------------------------- Profile --------------------------------- */

export const profile = {
  name: "Heritiana Jeremia",
  fullName: "ANDRIANANDRASANA Heritiana Jeremia",
  email: "herytianajeremy45@gmail.com",
  phone: "+261 38 515 4910",
  phoneRaw: "261385154910",
  phoneCall: "+261 37 296 0153",
  phoneCallRaw: "261372960153",
  cv: "/download/CV-Heritiana-Jeremia.pdf",
  heroImage: "/img/profile-hero.png",
  aboutImage: "/img/profile-about.png",
  logo: "/img/icon/logo.png",
};

/* ---------------------------------- Socials --------------------------------- */

export type Social = {
  key: string;
  label: string;
  href: string;
  icon: "github" | "linkedin" | "whatsapp" | "mail" | "dribbble" | "instagram" | "facebook";
};

export const socials: Social[] = [
  { key: "github", label: "GitHub", href: "https://github.com/herytianajeremia", icon: "github" },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/herytiana-jeremia-1a24a7210",
    icon: "linkedin",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/261385154910?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20services",
    icon: "whatsapp",
  },
  { key: "mail", label: "Email", href: "mailto:herytianajeremy45@gmail.com", icon: "mail" },
  { key: "dribbble", label: "Dribbble", href: "https://dribbble.com/herytianajeremia", icon: "dribbble" },
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
  { key: "facebook", label: "Facebook", href: "https://www.facebook.com/jeremy.camp.712", icon: "facebook" },
];

/* ---------------------------------- Skills ---------------------------------- */

export const skills: { name: string; value: number }[] = [
  { name: "HTML / CSS", value: 95 },
  { name: "Tailwind CSS", value: 90 },
  { name: "JavaScript / React", value: 75 },
  { name: "WordPress / Elementor", value: 85 },
  { name: "Figma / UI Design", value: 95 },
  { name: "Bootstrap", value: 90 },
];

export const tools: string[] = [
  "Figma",
  "React",
  "Next.js",
  "Tailwind",
  "WordPress",
  "Elementor",
  "Bootstrap",
  "Git",
];

/* --------------------------------- Services --------------------------------- */
/* Icon keys map to lucide icons in the Services component; text lives in i18n. */
export const serviceIcons = ["code", "layout", "wordpress", "figma"] as const;

/* --------------------------------- Projects --------------------------------- */

export type Project = {
  id: string;
  name: string;
  category: "design" | "dev";
  image: string;
  url: string | null;
  tags: string[];
  desc: Record<Locale, string>;
};

export const projects: Project[] = [
  {
    id: "softimad-dev",
    name: "Softimad",
    category: "dev",
    image: "/img/img-projet/projet-softimad.png",
    url: "https://softimad.com",
    tags: ["WordPress", "UI Design"],
    desc: {
      fr: "Site vitrine corporate pour une agence, design et intégration.",
      en: "Corporate showcase website for an agency, design & build.",
    },
  },
  {
    id: "masovia",
    name: "Masovia Madagascar",
    category: "dev",
    image: "/img/img-projet/projet-masovia.png",
    url: "https://masovia-madagascar.com/",
    tags: ["Front-end", "Responsive"],
    desc: {
      fr: "Plateforme institutionnelle responsive et performante.",
      en: "Responsive, high-performance institutional platform.",
    },
  },
  {
    id: "annonce-legale",
    name: "Annonce Légale Officielle",
    category: "dev",
    image: "/img/img-projet/projet-annonce.png",
    url: "https://annonce-legale-officielle.fr",
    tags: ["Web App", "SEO"],
    desc: {
      fr: "Service en ligne de publication d'annonces légales.",
      en: "Online service for publishing legal notices.",
    },
  },
  {
    id: "dynamikmood-app",
    name: "DynamikMood — App",
    category: "dev",
    image: "/img/img-projet/projet-dynamikmood-login.png",
    url: "https://app.dynamikmood.com/login",
    tags: ["SaaS", "Interface"],
    desc: {
      fr: "Interface d'application SaaS, intégration front-end.",
      en: "SaaS application interface, front-end integration.",
    },
  },
  {
    id: "dynamikmood-offers",
    name: "DynamikMood — Offres",
    category: "dev",
    image: "/img/img-projet/projet-dynamikmood-offers.png",
    url: "https://app.dynamikmood.com/our_offers",
    tags: ["SaaS", "Pricing"],
    desc: {
      fr: "Page d'offres et de tarification pour un produit SaaS.",
      en: "Offers and pricing page for a SaaS product.",
    },
  },
  {
    id: "rh-muriel",
    name: "RH Muriel",
    category: "dev",
    image: "/img/img-projet/projet-rh-muriel.png",
    url: "https://rh-muriel.netlify.app/",
    tags: ["Front-end", "Landing"],
    desc: {
      fr: "Site de ressources humaines, déployé sur Netlify.",
      en: "Human-resources website, deployed on Netlify.",
    },
  },
  {
    id: "alo",
    name: "Création Société ALO",
    category: "dev",
    image: "/img/img-projet/projet-alo.png",
    url: "https://creation-societe-alo.web.app",
    tags: ["Web App", "Firebase"],
    desc: {
      fr: "Plateforme d'accompagnement à la création d'entreprise.",
      en: "Business-creation assistance platform.",
    },
  },
  {
    id: "portfolio-v1",
    name: "Portfolio v1",
    category: "dev",
    image: "/img/img-projet/projet-portfolio.png",
    url: null,
    tags: ["HTML", "Bootstrap"],
    desc: {
      fr: "Première version de mon portfolio personnel.",
      en: "First version of my personal portfolio.",
    },
  },
  {
    id: "design-softimad",
    name: "Softimad — Maquette",
    category: "design",
    image: "/img/img-projet/design-softimad.png",
    url: "https://www.figma.com/design/xA0RmMEelSvskNM5PQS5PL/Untitled?node-id=92-666",
    tags: ["Figma", "Web Design"],
    desc: {
      fr: "Maquette Figma complète du site Softimad.",
      en: "Full Figma mockup of the Softimad website.",
    },
  },
  {
    id: "design-landing",
    name: "Landing Page",
    category: "design",
    image: "/img/img-projet/design-landing.png",
    url: "https://www.figma.com/design/PG8AMLQ6UGNAAyzgC9g5tl/Untitled",
    tags: ["Figma", "Landing"],
    desc: {
      fr: "Concept de landing page orientée conversion.",
      en: "Conversion-focused landing page concept.",
    },
  },
  {
    id: "design-dashboard",
    name: "Dashboard SaaS",
    category: "design",
    image: "/img/img-projet/design-dashboard.png",
    url: "https://www.figma.com/design/saeth76IYou0L4ZYE8FnEZ/Untitled?node-id=0-1",
    tags: ["Figma", "UI/UX"],
    desc: {
      fr: "Design d'un tableau de bord d'application SaaS.",
      en: "Dashboard design for a SaaS application.",
    },
  },
  {
    id: "design-app",
    name: "Application mobile",
    category: "design",
    image: "/img/img-projet/design-app.png",
    url: "https://www.figma.com/design/o22G1ASKKXczqIl55hWjaq/Untitled?node-id=0-1",
    tags: ["Figma", "Mobile"],
    desc: {
      fr: "Concept d'interface pour une application mobile.",
      en: "Interface concept for a mobile application.",
    },
  },
  {
    id: "design-brand",
    name: "Identité de marque",
    category: "design",
    image: "/img/img-projet/design-brand.png",
    url: "https://www.figma.com/design/ROHT0uuvpLkLpfH3d7x8aj/Untitled?node-id=0-1",
    tags: ["Figma", "Branding"],
    desc: {
      fr: "Exploration d'identité visuelle et de composants.",
      en: "Visual identity and component exploration.",
    },
  },
  {
    id: "design-social",
    name: "Kit réseaux sociaux",
    category: "design",
    image: "/img/img-projet/design-social.png",
    url: "https://www.figma.com",
    tags: ["Figma", "Social"],
    desc: {
      fr: "Kit de visuels pour les réseaux sociaux.",
      en: "Visual kit for social media.",
    },
  },
];
