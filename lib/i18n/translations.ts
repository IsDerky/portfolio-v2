export type Locale = 'en' | 'es' | 'fr';

export interface ProjectSection {
  heading: string;
  body?: string;
  items?: string[];
}

export interface ProjectTranslation {
  description: string;
  longDescription: string;
  details?: { title: string; text: string }[];
  sections?: ProjectSection[];
}

export interface Translations {
  nav: {
    home: string;
    works: string;
    about: string;
  };
  about: {
    bio: string;
  };
  moreInfo: {
    bioTitle: string;
    timeline: { year: string; event: string }[];
    iLove: string;
    hobbies: string[];
    getInTouch: string;
    mailMe: string;
  };
  worksIntro: {
    title: string;
    description: string;
  };
  aboutMe: {
    title: string;
    specialization: string;
    specializationValue: string;
    totalExperience: string;
    years: string;
    coreTechnologies: string;
    devStats: string;
    linesOfCode: string;
    coffeeCups: string;
    featuredProject: string;
  };
  footer: {
    role: string;
    availability: string;
    rights: string;
    location: string;
  };
  gitContributions: {
    title: string;
    viewProfile: string;
    months: string[];
    less: string;
    more: string;
    contributionsLastYear: string; // use {n} as placeholder
    noData: string;
    noContributionsOn: string;
    contribution: string;
    contributions: string;
    on: string;
  };
  spotify: {
    currentlyListening: string;
    currentlyOffline: string;
    recentlyListened: string;
    notPlaying: string;
  };
  works: {
    allProjects: string;
    featuredProjects: string;
    noProjectsFound: string;
    view: string;
    backToWorks: string;
    visit: string;
    source: string;
  };
  projects: Record<string, ProjectTranslation>;
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: 'Home',
      works: 'Works',
      about: 'About',
    },
    about: {
      bio: 'Developer and network technician from Barcelona, Spain. I started my programming journey in 2019 as a self-taught developer, and later expanded my knowledge by studying network systems and infrastructure.',
    },
    moreInfo: {
      bioTitle: 'Bio',
      timeline: [
        { year: '2005', event: 'Born in Barcelona, Spain.' },
        { year: '2019', event: 'Started in the development world as a self-taught learner.' },
        { year: '2021', event: 'Entered a networking and systems vocational program to explore other areas of computer science.' },
        { year: '2025', event: 'Currently working and focused on an active project called Derkyu Panel.' },
      ],
      iLove: 'I',
      hobbies: ['Basketball', 'Cars', 'Cooking', 'Coding', 'Streaming', 'Games', 'Series', 'Music', 'Bikes'],
      getInTouch: 'Get in Touch',
      mailMe: 'Mail me',
    },
    worksIntro: {
      title: 'My Works',
      description: "A collection of projects I've worked on. Each project represents a unique challenge and learning opportunity in my development journey.",
    },
    aboutMe: {
      title: 'About Me',
      specialization: 'Specialization',
      specializationValue: 'Web developer & Networker',
      totalExperience: 'Total Experience',
      years: 'Years',
      coreTechnologies: 'Core Technologies',
      devStats: 'Developer Stats',
      linesOfCode: 'Lines of Code',
      coffeeCups: 'Coffee Sips',
      featuredProject: 'Featured Project',
    },
    footer: {
      role: 'Developer & Network Technician',
      availability: 'Available for work',
      rights: 'All Rights Reserved.',
      location: 'Spain, Barcelona',
    },
    gitContributions: {
      title: 'Contribution Graph',
      viewProfile: 'View Profile',
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      less: 'Less',
      more: 'More',
      contributionsLastYear: '{n} contributions in the last year',
      noData: 'No contributions data available',
      noContributionsOn: 'No contributions on',
      contribution: 'contribution',
      contributions: 'contributions',
      on: 'on',
    },
    spotify: {
      currentlyListening: 'Currently Listening',
      currentlyOffline: 'Currently Offline',
      recentlyListened: 'Recently listened',
      notPlaying: 'Not playing',
    },
    works: {
      allProjects: 'All Projects',
      featuredProjects: 'Featured Projects',
      noProjectsFound: 'No projects found in this category.',
      view: 'View',
      backToWorks: 'Back to Works',
      visit: 'Visit',
      source: 'Source',
    },
    projects: {
      'derkyu-hosting': {
        description: 'Specialized hosting platform for game servers, Discord bots, and custom software.',
        longDescription: 'A comprehensive hosting solution offering optimized performance, intuitive management tools, and 24/7 support with strategic server locations across Europe and South America.',
        details: [
          {
            title: 'Performance & Flexibility',
            text: 'Scalable plans with 99% SLA, strategic server locations across Europe and South America, and 24/7 technical support for seamless operations.',
          },
          {
            title: 'Advanced Features',
            text: 'Integrated code editor, SFTP file manager, automatic updates, real-time monitoring, and DDoS protection included in all plans.',
          },
        ],
        sections: [
          {
            heading: 'Overview',
            body: 'A comprehensive hosting solution built for the gaming and developer community — offering game servers, Discord bot hosting, and custom software deployment. The goal was to eliminate the complexity of self-hosting while keeping full control over infrastructure.',
          },
          {
            heading: 'The Problem',
            body: 'I used to pay for hosting to run the typical friend group servers, and over time I decided to put my own knowledge to use and build my own infrastructure instead of relying on third parties. From there, I scaled it up and started renting it out to others.',
          },
          {
            heading: 'Features',
            items: [
              'Scalable plans with 99% SLA and transparent pricing',
              'Strategic server locations across Europe and South America for low latency',
              '24/7 technical support with fast response times',
              'Integrated code editor and SFTP file manager — no SSH required for basic tasks',
              'Automatic updates and real-time monitoring dashboards',
              'DDoS protection included on all plans',
            ],
          },
          {
            heading: 'Tech Stack',
            body: 'Built with Next.js, TypeScript, and shadcn/ui for the control panel frontend, deployed on a custom infrastructure stack optimized for low-latency game server workloads.',
          },
          {
            heading: 'What I Learned',
            body: 'Managing infrastructure at scale surfaced challenges around resource isolation, billing logic, and real-time monitoring that pushed me to build tooling I hadn\'t originally planned. The project is ongoing and actively used by clients.',
          },
        ],
      },
      'ronin-fc': {
        description: 'Community-built website for Ronin FC, the football club founded by Ibai Llanos.',
        longDescription: 'Community-built website for Ronin FC football club. This is a fan-made project and is not officially affiliated with or endorsed by Ibai Llanos or Ronin FC organization.',
        sections: [
          {
            heading: 'Overview',
            body: 'A community-built website for Ronin FC, the football club founded by Ibai Llanos. This is a fan-made project — not officially affiliated with or endorsed by Ibai Llanos or the Ronin FC organization.',
          },
          {
            heading: 'Why I Built It',
            body: 'Ronin FC blew up fast and the community had no central hub for news, rosters, or match results. I built this to fill that gap: a clean, fast website that pulls live data so fans always have up-to-date information without anyone manually updating it.',
          },
          {
            heading: 'Features',
            items: [
              'Club news and updates aggregated from official sources',
              'Player roster with stats and positions',
              'Match results and schedule with live score integration',
              'API-driven data — content updates automatically, no manual CMS edits needed',
            ],
          },
          {
            heading: 'Tech Stack',
            body: 'Built with Next.js and TypeScript, consuming external sports APIs to keep club data fresh. The focus was on performance: pages are statically generated where possible and revalidated on a short interval to stay current.',
          },
          {
            heading: 'Challenges',
            body: 'The main challenge was working around inconsistent third-party API responses — some endpoints returned partial data or had rate limits that required careful caching strategies. I ended up building a thin API layer to normalize and cache responses before they hit the frontend.',
          },
        ],
      },
      'bodycamrp': {
        description: 'Browser-based bodycam overlay configurator for FiveM and GTA Roleplay streamers.',
        longDescription: 'Customize your bodycam overlay with your name, rank, badge number, one of 5 designs, font, logo, and screen position — then launch it directly as an OBS browser source. No installation or account required.',
        sections: [
          {
            heading: 'Overview',
            body: 'A free, browser-based body camera overlay tool for FiveM and GTA Roleplay streamers. Customize your overlay and launch it directly as an OBS browser source — no installation, no account, no plugins required.',
          },
          {
            heading: 'What You Can Customize',
            body: 'The configurator lets you personalize every detail of your overlay:',
            items: [
              'Officer data — name, rank, and badge number',
              'Overlay design — 5 presets: Classic, Minimal, Tactical, Modern, and AXON (replica of the real AXON Body 2)',
              'Screen position — any corner of the screen',
              'Scale — 100%, 125%, or 150%',
              'Logo — none, the built-in AXON logo, or a custom image (e.g. your department\'s badge)',
              'Typography — 6 fonts: IBM Plex Mono, Share Tech Mono, Roboto Mono, Orbitron, Rajdhani, and Boxed Round',
            ],
          },
          {
            heading: 'How It Works',
            body: 'Configure your overlay, copy the generated URL, and paste it into OBS as a Browser Source. The overlay loads exactly as you set it up every time OBS starts — transparent background, no chroma key needed.',
          },
          {
            heading: 'Dashboard',
            body: 'Sign in with Discord to access a personal dashboard where you can create, save, and share presets. Each overlay gets its own public URL you can distribute to your community.',
          },
          {
            heading: 'Custom Department Overlays',
            body: 'Servers can request a fully custom overlay with their department\'s identity — colors, logo, and unique style — at no cost.',
          },
          {
            heading: 'Tech Stack',
            body: 'Built with Next.js and React, running entirely client-side. Optimized for 1080p and 1440p stream resolutions.',
          },
        ],
      },
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      works: 'Proyectos',
      about: 'Sobre mí',
    },
    about: {
      bio: 'Desarrollador y técnico de redes de Barcelona, España. Comencé mi camino en la programación en 2019 como autodidacta, y más tarde amplié mis conocimientos estudiando sistemas y redes informáticas.',
    },
    moreInfo: {
      bioTitle: 'Bio',
      timeline: [
        { year: '2005', event: 'Nacido en Barcelona, España.' },
        { year: '2019', event: 'Empecé en el mundo del desarrollo como autodidacta.' },
        { year: '2021', event: 'Ingresé a un ciclo formativo de redes y sistemas para explorar otras áreas de la informática.' },
        { year: '2025', event: 'Actualmente trabajando y enfocado en un proyecto activo llamado Derkyu Panel.' },
      ],
      iLove: 'I',
      hobbies: ['Baloncesto', 'Coches', 'Cocina', 'Código', 'Streaming', 'Juegos', 'Series', 'Música', 'Motos'],
      getInTouch: 'Contáctame',
      mailMe: 'Enviar correo',
    },
    worksIntro: {
      title: 'Mis Proyectos',
      description: 'Una colección de proyectos en los que he trabajado. Cada proyecto representa un desafío único y una oportunidad de aprendizaje en mi camino como desarrollador.',
    },
    aboutMe: {
      title: 'Sobre Mí',
      specialization: 'Especialización',
      specializationValue: 'Desarrollador web y Networker',
      totalExperience: 'Experiencia Total',
      years: 'Años',
      coreTechnologies: 'Tecnologías Principales',
      devStats: 'Estadísticas Dev',
      linesOfCode: 'Líneas de Código',
      coffeeCups: 'Sorbos de Café',
      featuredProject: 'Proyecto Destacado',
    },
    footer: {
      role: 'Desarrollador y Técnico de Redes',
      availability: 'Disponible para trabajar',
      rights: 'Todos los derechos reservados.',
      location: 'España, Barcelona',
    },
    gitContributions: {
      title: 'Gráfico de Contribuciones',
      viewProfile: 'Ver Perfil',
      months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      less: 'Menos',
      more: 'Más',
      contributionsLastYear: '{n} contribuciones en el último año',
      noData: 'No hay datos de contribuciones disponibles',
      noContributionsOn: 'Sin contribuciones el',
      contribution: 'contribución',
      contributions: 'contribuciones',
      on: 'el',
    },
    spotify: {
      currentlyListening: 'Escuchando ahora',
      currentlyOffline: 'Sin conexión',
      recentlyListened: 'Escuchado recientemente',
      notPlaying: 'Sin reproducción',
    },
    works: {
      allProjects: 'Todos los Proyectos',
      featuredProjects: 'Proyectos Destacados',
      noProjectsFound: 'No se encontraron proyectos en esta categoría.',
      view: 'Ver',
      backToWorks: 'Volver a Proyectos',
      visit: 'Visitar',
      source: 'Código',
    },
    projects: {
      'derkyu-hosting': {
        description: 'Plataforma de hosting especializada para servidores de juegos, bots de Discord y software personalizado.',
        longDescription: 'Una solución de hosting completa que ofrece rendimiento optimizado, herramientas de gestión intuitivas y soporte 24/7 con ubicaciones de servidor estratégicas en Europa y Sudamérica.',
        details: [
          {
            title: 'Rendimiento y Flexibilidad',
            text: 'Planes escalables con SLA del 99%, ubicaciones de servidor estratégicas en Europa y Sudamérica, y soporte técnico 24/7 para operaciones sin interrupciones.',
          },
          {
            title: 'Funciones Avanzadas',
            text: 'Editor de código integrado, gestor de archivos SFTP, actualizaciones automáticas, monitorización en tiempo real y protección DDoS incluidos en todos los planes.',
          },
        ],
        sections: [
          {
            heading: 'Descripción General',
            body: 'Una solución de hosting completa creada para la comunidad de gaming y desarrolladores — ofreciendo servidores de juegos, hosting de bots de Discord y despliegue de software personalizado. El objetivo era eliminar la complejidad del autohosting manteniendo el control total sobre la infraestructura.',
          },
          {
            heading: 'El Problema',
            body: 'Antes pagaba por hosting para los servidores típicos de grupo de amigos, y con el tiempo decidí poner mis conocimientos en práctica y construir mi propia infraestructura en lugar de depender de terceros. A partir de ahí lo escalé y empecé a alquilarlo a otros.',
          },
          {
            heading: 'Características',
            items: [
              'Planes escalables con SLA del 99% y precios transparentes',
              'Ubicaciones de servidor estratégicas en Europa y Sudamérica para baja latencia',
              'Soporte técnico 24/7 con tiempos de respuesta rápidos',
              'Editor de código integrado y gestor de archivos SFTP — sin necesidad de SSH para tareas básicas',
              'Actualizaciones automáticas y paneles de monitorización en tiempo real',
              'Protección DDoS incluida en todos los planes',
            ],
          },
          {
            heading: 'Stack Tecnológico',
            body: 'Construido con Next.js, TypeScript y shadcn/ui para el frontend del panel de control, desplegado en una infraestructura personalizada optimizada para cargas de trabajo de servidores de juegos con baja latencia.',
          },
          {
            heading: 'Qué Aprendí',
            body: 'Gestionar infraestructura a escala sacó a la luz desafíos en torno al aislamiento de recursos, la lógica de facturación y la monitorización en tiempo real que me llevaron a construir herramientas que no había planeado originalmente. El proyecto está en curso y es utilizado activamente por clientes.',
          },
        ],
      },
      'ronin-fc': {
        description: 'Sitio web creado por la comunidad para el Ronin FC, el club de fútbol fundado por Ibai Llanos.',
        longDescription: 'Sitio web creado por la comunidad para el club de fútbol Ronin FC. Este es un proyecto de fans y no está oficialmente afiliado ni respaldado por Ibai Llanos ni por la organización del Ronin FC.',
        sections: [
          {
            heading: 'Descripción General',
            body: 'Un sitio web creado por la comunidad para el Ronin FC, el club de fútbol fundado por Ibai Llanos. Este es un proyecto de fans — no está oficialmente afiliado ni respaldado por Ibai Llanos ni por la organización del Ronin FC.',
          },
          {
            heading: 'Por Qué Lo Construí',
            body: 'El Ronin FC creció muy rápido y la comunidad no tenía un hub central para noticias, plantillas o resultados. Lo construí para llenar ese vacío: un sitio web limpio y rápido que obtiene datos en vivo para que los fans siempre tengan información actualizada sin que nadie tenga que actualizarla manualmente.',
          },
          {
            heading: 'Características',
            items: [
              'Noticias y actualizaciones del club agregadas de fuentes oficiales',
              'Plantilla de jugadores con estadísticas y posiciones',
              'Resultados y calendario con integración de marcadores en vivo',
              'Datos impulsados por API — el contenido se actualiza automáticamente, sin ediciones manuales de CMS',
            ],
          },
          {
            heading: 'Stack Tecnológico',
            body: 'Construido con Next.js y TypeScript, consumiendo APIs deportivas externas para mantener los datos del club actualizados. El enfoque fue el rendimiento: las páginas se generan estáticamente donde es posible y se revalidan en intervalos cortos.',
          },
          {
            heading: 'Desafíos',
            body: 'El principal desafío fue trabajar con respuestas inconsistentes de APIs de terceros — algunos endpoints devolvían datos parciales o tenían límites de velocidad que requerían estrategias de caché cuidadosas. Terminé construyendo una capa de API ligera para normalizar y almacenar en caché las respuestas antes de que llegaran al frontend.',
          },
        ],
      },
      'bodycamrp': {
        description: 'Configurador de overlay de bodycam basado en navegador para streamers de FiveM y GTA Roleplay.',
        longDescription: 'Personaliza tu overlay de bodycam con tu nombre, rango, número de placa, uno de 5 diseños, fuente, logo y posición en pantalla — y lánzalo directamente como fuente de navegador en OBS. Sin instalación ni cuenta requerida.',
        sections: [
          {
            heading: 'Descripción General',
            body: 'Una herramienta gratuita de overlay de cámara corporal basada en navegador para streamers de FiveM y GTA Roleplay. Personaliza tu overlay y lánzalo directamente como fuente de navegador en OBS — sin instalación, sin cuenta, sin plugins.',
          },
          {
            heading: 'Qué Puedes Personalizar',
            body: 'El configurador te permite personalizar cada detalle de tu overlay:',
            items: [
              'Datos del agente — nombre, rango y número de placa',
              'Diseño del overlay — 5 presets: Classic, Minimal, Tactical, Modern y AXON (réplica del AXON Body 2 real)',
              'Posición en pantalla — cualquier esquina de la pantalla',
              'Escala — 100%, 125% o 150%',
              'Logo — ninguno, el logo AXON integrado o una imagen personalizada (p.ej. el emblema de tu departamento)',
              'Tipografía — 6 fuentes: IBM Plex Mono, Share Tech Mono, Roboto Mono, Orbitron, Rajdhani y Boxed Round',
            ],
          },
          {
            heading: 'Cómo Funciona',
            body: 'Configura tu overlay, copia la URL generada y pégala en OBS como Fuente de Navegador. El overlay carga exactamente como lo configuraste cada vez que OBS arranca — fondo transparente, sin necesidad de chroma key.',
          },
          {
            heading: 'Dashboard',
            body: 'Inicia sesión con Discord para acceder a un panel personal donde puedes crear, guardar y compartir presets. Cada overlay tiene su propia URL pública que puedes distribuir a tu comunidad.',
          },
          {
            heading: 'Overlays de Departamento Personalizados',
            body: 'Los servidores pueden solicitar un overlay totalmente personalizado con la identidad de su departamento — colores, logo y estilo único — sin coste alguno.',
          },
          {
            heading: 'Stack Tecnológico',
            body: 'Construido con Next.js y React, funcionando completamente del lado del cliente. Optimizado para resoluciones de stream de 1080p y 1440p.',
          },
        ],
      },
    },
  },

  fr: {
    nav: {
      home: 'Accueil',
      works: 'Projets',
      about: 'À propos',
    },
    about: {
      bio: "Développeur et technicien réseau originaire de Barcelone, Espagne. J'ai commencé ma carrière en programmation en 2019 en tant qu'autodidacte, puis j'ai approfondi mes connaissances en étudiant les systèmes et les réseaux informatiques.",
    },
    moreInfo: {
      bioTitle: 'Bio',
      timeline: [
        { year: '2005', event: 'Né à Barcelone, Espagne.' },
        { year: '2019', event: 'Début dans le monde du développement en autodidacte.' },
        { year: '2021', event: "Intégration d'un programme de formation en réseaux et systèmes pour explorer d'autres domaines de l'informatique." },
        { year: '2025', event: 'Actuellement en train de travailler sur un projet actif appelé Derkyu Panel.' },
      ],
      iLove: "I",
      hobbies: ['Basketball', 'Voitures', 'Cuisine', 'Programmation', 'Streaming', 'Jeux', 'Séries', 'Musique', 'Motos'],
      getInTouch: 'Me contacter',
      mailMe: "M'écrire",
    },
    worksIntro: {
      title: 'Mes Projets',
      description: "Une collection de projets sur lesquels j'ai travaillé. Chaque projet représente un défi unique et une opportunité d'apprentissage dans mon parcours de développeur.",
    },
    aboutMe: {
      title: 'À Propos de Moi',
      specialization: 'Spécialisation',
      specializationValue: 'Développeur web & Networker',
      totalExperience: 'Expérience Totale',
      years: 'Ans',
      coreTechnologies: 'Technologies Principales',
      devStats: 'Stats Dev',
      linesOfCode: 'Lignes de Code',
      coffeeCups: 'Gorgées de Café',
      featuredProject: 'Projet Vedette',
    },
    footer: {
      role: 'Développeur & Technicien Réseau',
      availability: 'Disponible pour travailler',
      rights: 'Tous droits réservés.',
      location: 'Espagne, Barcelone',
    },
    gitContributions: {
      title: 'Graphique de Contributions',
      viewProfile: 'Voir le Profil',
      months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
      less: 'Moins',
      more: 'Plus',
      contributionsLastYear: '{n} contributions cette dernière année',
      noData: 'Aucune donnée de contribution disponible',
      noContributionsOn: 'Aucune contribution le',
      contribution: 'contribution',
      contributions: 'contributions',
      on: 'le',
    },
    spotify: {
      currentlyListening: 'En cours d\'écoute',
      currentlyOffline: 'Hors ligne',
      recentlyListened: 'Écouté récemment',
      notPlaying: 'Rien en lecture',
    },
    works: {
      allProjects: 'Tous les Projets',
      featuredProjects: 'Projets en Vedette',
      noProjectsFound: 'Aucun projet trouvé dans cette catégorie.',
      view: 'Voir',
      backToWorks: 'Retour aux Projets',
      visit: 'Visiter',
      source: 'Code',
    },
    projects: {
      'derkyu-hosting': {
        description: "Plateforme d'hébergement spécialisée pour les serveurs de jeux, les bots Discord et les logiciels personnalisés.",
        longDescription: "Une solution d'hébergement complète offrant des performances optimisées, des outils de gestion intuitifs et un support 24h/24 avec des emplacements de serveurs stratégiques en Europe et en Amérique du Sud.",
        details: [
          {
            title: 'Performance & Flexibilité',
            text: "Plans évolutifs avec SLA à 99%, emplacements de serveurs stratégiques en Europe et en Amérique du Sud, et support technique 24h/24 pour des opérations sans interruption.",
          },
          {
            title: 'Fonctionnalités Avancées',
            text: "Éditeur de code intégré, gestionnaire de fichiers SFTP, mises à jour automatiques, surveillance en temps réel et protection DDoS inclus dans tous les plans.",
          },
        ],
        sections: [
          {
            heading: 'Aperçu',
            body: "Une solution d'hébergement complète créée pour la communauté gaming et développeurs — offrant des serveurs de jeux, l'hébergement de bots Discord et le déploiement de logiciels personnalisés. L'objectif était d'éliminer la complexité de l'auto-hébergement tout en gardant un contrôle total sur l'infrastructure.",
          },
          {
            heading: 'Le Problème',
            body: "Je payais autrefois pour de l'hébergement pour faire tourner les serveurs classiques entre amis, et avec le temps j'ai décidé de mettre mes connaissances à profit et de construire ma propre infrastructure plutôt que de dépendre de tiers. À partir de là, je l'ai fait évoluer et j'ai commencé à le louer à d'autres.",
          },
          {
            heading: 'Fonctionnalités',
            items: [
              "Plans évolutifs avec SLA à 99% et tarification transparente",
              "Emplacements de serveurs stratégiques en Europe et en Amérique du Sud pour une faible latence",
              "Support technique 24h/24 avec des temps de réponse rapides",
              "Éditeur de code intégré et gestionnaire de fichiers SFTP — pas de SSH requis pour les tâches de base",
              "Mises à jour automatiques et tableaux de bord de surveillance en temps réel",
              "Protection DDoS incluse dans tous les plans",
            ],
          },
          {
            heading: 'Stack Technique',
            body: "Construit avec Next.js, TypeScript et shadcn/ui pour le frontend du panneau de contrôle, déployé sur une infrastructure personnalisée optimisée pour les charges de travail de serveurs de jeux à faible latence.",
          },
          {
            heading: "Ce que j'ai Appris",
            body: "Gérer une infrastructure à grande échelle a révélé des défis autour de l'isolation des ressources, de la logique de facturation et de la surveillance en temps réel qui m'ont poussé à créer des outils que je n'avais pas prévus à l'origine. Le projet est en cours et activement utilisé par des clients.",
          },
        ],
      },
      'ronin-fc': {
        description: "Site web créé par la communauté pour le Ronin FC, le club de football fondé par Ibai Llanos.",
        longDescription: "Site web créé par la communauté pour le club de football Ronin FC. Il s'agit d'un projet de fans non officiellement affilié ni approuvé par Ibai Llanos ou l'organisation du Ronin FC.",
        sections: [
          {
            heading: 'Aperçu',
            body: "Un site web créé par la communauté pour le Ronin FC, le club de football fondé par Ibai Llanos. Il s'agit d'un projet de fans — non officiellement affilié ni approuvé par Ibai Llanos ou l'organisation du Ronin FC.",
          },
          {
            heading: "Pourquoi je l'ai Construit",
            body: "Le Ronin FC a explosé rapidement et la communauté n'avait pas de hub central pour les actualités, les effectifs ou les résultats. Je l'ai construit pour combler ce manque : un site web propre et rapide qui récupère des données en direct pour que les fans aient toujours des informations à jour sans que personne n'ait à les mettre à jour manuellement.",
          },
          {
            heading: 'Fonctionnalités',
            items: [
              "Actualités et mises à jour du club agrégées depuis les sources officielles",
              "Effectif des joueurs avec statistiques et positions",
              "Résultats et calendrier avec intégration des scores en direct",
              "Données pilotées par API — le contenu se met à jour automatiquement, sans éditions manuelles de CMS",
            ],
          },
          {
            heading: 'Stack Technique',
            body: "Construit avec Next.js et TypeScript, consommant des APIs sportives externes pour maintenir les données du club à jour. L'accent a été mis sur les performances : les pages sont générées statiquement autant que possible et revalidées à intervalles courts.",
          },
          {
            heading: 'Défis',
            body: "Le principal défi consistait à gérer les réponses incohérentes des APIs tierces — certains endpoints renvoyaient des données partielles ou avaient des limites de débit nécessitant des stratégies de mise en cache soigneuses. J'ai fini par construire une couche API légère pour normaliser et mettre en cache les réponses avant qu'elles n'atteignent le frontend.",
          },
        ],
      },
      'bodycamrp': {
        description: "Configurateur d'overlay bodycam basé sur navigateur pour les streamers FiveM et GTA Roleplay.",
        longDescription: "Personnalisez votre overlay bodycam avec votre nom, grade, numéro de badge, l'un des 5 designs, la police, le logo et la position à l'écran — puis lancez-le directement comme source navigateur dans OBS. Aucune installation ni compte requis.",
        sections: [
          {
            heading: 'Aperçu',
            body: "Un outil gratuit d'overlay de caméra corporelle basé sur navigateur pour les streamers FiveM et GTA Roleplay. Personnalisez votre overlay et lancez-le directement comme source navigateur dans OBS — aucune installation, aucun compte, aucun plugin requis.",
          },
          {
            heading: 'Ce que vous pouvez Personnaliser',
            body: 'Le configurateur vous permet de personnaliser chaque détail de votre overlay :',
            items: [
              "Données de l'agent — nom, grade et numéro de badge",
              "Design de l'overlay — 5 préréglages : Classic, Minimal, Tactical, Modern et AXON (réplique du vrai AXON Body 2)",
              "Position à l'écran — n'importe quel coin de l'écran",
              "Échelle — 100%, 125% ou 150%",
              "Logo — aucun, le logo AXON intégré ou une image personnalisée (ex. l'insigne de votre département)",
              "Typographie — 6 polices : IBM Plex Mono, Share Tech Mono, Roboto Mono, Orbitron, Rajdhani et Boxed Round",
            ],
          },
          {
            heading: 'Comment ça Fonctionne',
            body: "Configurez votre overlay, copiez l'URL générée et collez-la dans OBS comme Source Navigateur. L'overlay se charge exactement comme vous l'avez configuré à chaque démarrage d'OBS — fond transparent, pas de chroma key nécessaire.",
          },
          {
            heading: 'Tableau de Bord',
            body: "Connectez-vous avec Discord pour accéder à un tableau de bord personnel où vous pouvez créer, sauvegarder et partager des préréglages. Chaque overlay obtient sa propre URL publique que vous pouvez distribuer à votre communauté.",
          },
          {
            heading: 'Overlays de Département Personnalisés',
            body: "Les serveurs peuvent demander un overlay entièrement personnalisé avec l'identité de leur département — couleurs, logo et style unique — sans frais.",
          },
          {
            heading: 'Stack Technique',
            body: "Construit avec Next.js et React, fonctionnant entièrement côté client. Optimisé pour les résolutions de stream 1080p et 1440p.",
          },
        ],
      },
    },
  },
};
