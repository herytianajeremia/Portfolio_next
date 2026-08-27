export type Locale = "fr" | "en";

export const LOCALES: Locale[] = ["fr", "en"];
export const DEFAULT_LOCALE: Locale = "fr";

type Dict = {
  nav: {
    home: string;
    about: string;
    services: string;
    work: string;
    contact: string;
    cta: string;
  };
  hero: {
    greeting: string;
    roles: string[];
    description: string;
    ctaCv: string;
    ctaContact: string;
    available: string;
    scroll: string;
  };
  about: {
    label: string;
    title: string;
    subtitle: string;
    bio: string;
    location: string;
    role: string;
    stats: { value: number; suffix: string; label: string }[];
    skillsTitle: string;
    skillsUpdated: string;
    toolsTitle: string;
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
    quote: string;
  };
  work: {
    label: string;
    title: string;
    subtitle: string;
    filters: { all: string; design: string; dev: string };
    badgeDesign: string;
    badgeDev: string;
    visit: string;
    private: string;
    empty: string;
  };
  freelance: {
    kicker: string;
    title: string;
    cta: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    officeLabel: string;
    office: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      sending: string;
      required: string;
      success: string;
    };
  };
  footer: {
    tagline: string;
    rights: string;
    builtWith: string;
    nav: string;
    social: string;
  };
};

export const dictionaries: Record<Locale, Dict> = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      work: "Réalisations",
      contact: "Contact",
      cta: "Me contacter",
    },
    hero: {
      greeting: "Bonjour, je suis",
      roles: [
        "Intégrateur Front-end",
        "Intégrateur WordPress",
        "Web Designer",
        "Designer UI/UX",
      ],
      description:
        "Je conçois et j'intègre des interfaces web modernes, rapides et accessibles — de la maquette Figma jusqu'au code, avec un souci constant du détail et de la performance.",
      ctaCv: "Télécharger mon CV",
      ctaContact: "Discutons de votre projet",
      available: "Disponible pour de nouveaux projets",
      scroll: "Faites défiler",
    },
    about: {
      label: "À propos",
      title: "Designer & intégrateur web",
      subtitle:
        "UI/UX et front-end. Je crée des interfaces propres, modernes et pensées pour la conversion.",
      bio: "Je conçois et intègre des interfaces web modernes, performantes et accessibles. J'aime marier l'esthétique et l'ergonomie pour améliorer les conversions et fidéliser les utilisateurs. Je maîtrise HTML/CSS, Bootstrap, Tailwind, WordPress et Figma.",
      location: "Antananarivo, Madagascar",
      role: "Web Designer • UI/UX • Front-end",
      stats: [
        { value: 100, suffix: "+", label: "Projets livrés" },
        { value: 90, suffix: "+", label: "Clients satisfaits" },
        { value: 95, suffix: "%", label: "Avis positifs" },
      ],
      skillsTitle: "Compétences",
      skillsUpdated: "Mise à jour • 2025",
      toolsTitle: "Outils du quotidien",
    },
    services: {
      label: "Ce que je fais",
      title: "Services",
      subtitle:
        "De l'idée au produit fini : design, intégration et mise en ligne.",
      items: [
        {
          title: "Intégration Front-end",
          desc: "Sites rapides, responsives et accessibles avec HTML, CSS, Tailwind, JavaScript, React et Next.js.",
        },
        {
          title: "Conception UI/UX",
          desc: "Interfaces intuitives et fluides, centrées utilisateur, pour une expérience digitale mémorable.",
        },
        {
          title: "Sites WordPress",
          desc: "Sites sur mesure avec WordPress et Elementor, faciles à administrer et optimisés pour le SEO.",
        },
        {
          title: "Design & Prototypage Figma",
          desc: "Maquettes interactives, design systems et prototypes avancés pour un workflow fluide.",
        },
      ],
      quote:
        "Chaque pixel a un rôle. Je conçois des expériences claires qui convertissent.",
    },
    work: {
      label: "Portfolio",
      title: "Réalisations",
      subtitle:
        "Une sélection de projets de design et de développement récents.",
      filters: { all: "Tous", design: "Design", dev: "Développement" },
      badgeDesign: "Design",
      badgeDev: "Développement",
      visit: "Voir le projet",
      private: "Projet privé",
      empty: "Aucun projet dans cette catégorie.",
    },
    freelance: {
      kicker: "Vous avez un projet ?",
      title: "Je suis disponible pour une mission en freelance",
      cta: "Travaillons ensemble",
    },
    contact: {
      label: "Contact",
      title: "Contactez-moi",
      subtitle:
        "Une idée, un projet ou une simple question ? Écrivez-moi, je réponds vite.",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      officeLabel: "Localisation",
      office: "HB Ter 85 WV Andohanimandroseza, Antananarivo 101",
      form: {
        name: "Nom",
        email: "Email",
        subject: "Objet",
        message: "Votre message",
        send: "Envoyer le message",
        sending: "Ouverture...",
        required: "Merci de remplir le nom, l'email et le message.",
        success: "Votre messagerie s'ouvre avec le message pré-rempli.",
      },
    },
    footer: {
      tagline:
        "Web Designer & intégrateur front-end. Je transforme les idées en interfaces performantes.",
      rights: "Tous droits réservés.",
      builtWith: "Conçu avec Next.js, Tailwind CSS & shadcn/ui.",
      nav: "Navigation",
      social: "Réseaux",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      work: "Work",
      contact: "Contact",
      cta: "Get in touch",
    },
    hero: {
      greeting: "Hi, I'm",
      roles: [
        "Front-end Integrator",
        "WordPress Developer",
        "Web Designer",
        "UI/UX Designer",
      ],
      description:
        "I design and build modern, fast and accessible web interfaces — from Figma mockups to clean code, with a constant eye for detail and performance.",
      ctaCv: "Download my CV",
      ctaContact: "Let's talk about your project",
      available: "Available for new projects",
      scroll: "Scroll",
    },
    about: {
      label: "About",
      title: "Web designer & integrator",
      subtitle:
        "UI/UX and front-end. I craft clean, modern interfaces built to convert.",
      bio: "I design and build modern, high-performance and accessible web interfaces. I love blending aesthetics with usability to improve conversions and keep users coming back. I work with HTML/CSS, Bootstrap, Tailwind, WordPress and Figma.",
      location: "Antananarivo, Madagascar",
      role: "Web Designer • UI/UX • Front-end",
      stats: [
        { value: 100, suffix: "+", label: "Projects delivered" },
        { value: 90, suffix: "+", label: "Happy clients" },
        { value: 95, suffix: "%", label: "Positive reviews" },
      ],
      skillsTitle: "Skills",
      skillsUpdated: "Updated • 2025",
      toolsTitle: "Everyday tools",
    },
    services: {
      label: "What I do",
      title: "Services",
      subtitle: "From idea to finished product: design, build and ship.",
      items: [
        {
          title: "Front-end Integration",
          desc: "Fast, responsive and accessible websites with HTML, CSS, Tailwind, JavaScript, React and Next.js.",
        },
        {
          title: "UI/UX Design",
          desc: "Intuitive, fluid and user-centered interfaces for a memorable digital experience.",
        },
        {
          title: "WordPress Websites",
          desc: "Custom websites with WordPress and Elementor, easy to manage and optimized for SEO.",
        },
        {
          title: "Figma Design & Prototyping",
          desc: "Interactive mockups, design systems and advanced prototypes for a smooth workflow.",
        },
      ],
      quote:
        "Every pixel has a purpose. I craft clear experiences that convert.",
    },
    work: {
      label: "Portfolio",
      title: "Selected work",
      subtitle: "A selection of recent design and development projects.",
      filters: { all: "All", design: "Design", dev: "Development" },
      badgeDesign: "Design",
      badgeDev: "Development",
      visit: "View project",
      private: "Private project",
      empty: "No projects in this category.",
    },
    freelance: {
      kicker: "Got a project?",
      title: "I'm available for freelance work",
      cta: "Let's work together",
    },
    contact: {
      label: "Contact",
      title: "Get in touch",
      subtitle:
        "An idea, a project or just a question? Drop me a line — I reply fast.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      officeLabel: "Location",
      office: "HB Ter 85 WV Andohanimandroseza, Antananarivo 101",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Your message",
        send: "Send message",
        sending: "Opening...",
        required: "Please fill in your name, email and message.",
        success: "Your mail app is opening with the message pre-filled.",
      },
    },
    footer: {
      tagline:
        "Web Designer & front-end integrator. I turn ideas into high-performing interfaces.",
      rights: "All rights reserved.",
      builtWith: "Built with Next.js, Tailwind CSS & shadcn/ui.",
      nav: "Navigation",
      social: "Social",
    },
  },
};
