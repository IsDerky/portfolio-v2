export type Locale = 'en' | 'es' | 'fr';

export interface ProjectTranslation {
  description: string;
  longDescription: string;
  details?: { title: string; text: string }[];
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
      coffeeCups: 'Coffee Cups',
      featuredProject: 'Featured Project',
    },
    footer: {
      role: 'Developer & Network Technician',
      availability: 'Available for work',
      rights: 'All Rights Reserved.',
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
      },
      'ronin-fc': {
        description: 'Community-built website for Ronin FC, the football club founded by Ibai Llanos.',
        longDescription: 'Community-built website for Ronin FC football club. This is a fan-made project and is not officially affiliated with or endorsed by Ibai Llanos or Ronin FC organization.',
      },
      'bodycamrp': {
        description: 'Browser-based bodycam overlay configurator for FiveM and GTA Roleplay streamers.',
        longDescription: 'Customize your bodycam overlay with your name, rank, badge number, one of 5 designs, font, logo, and screen position — then launch it directly as an OBS browser source. No installation or account required.',
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
      iLove: 'Amo',
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
      coffeeCups: 'Cafés',
      featuredProject: 'Proyecto Destacado',
    },
    footer: {
      role: 'Desarrollador y Técnico de Redes',
      availability: 'Disponible para trabajar',
      rights: 'Todos los derechos reservados.',
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
      },
      'ronin-fc': {
        description: 'Sitio web creado por la comunidad para el Ronin FC, el club de fútbol fundado por Ibai Llanos.',
        longDescription: 'Sitio web creado por la comunidad para el club de fútbol Ronin FC. Este es un proyecto de fans y no está oficialmente afiliado ni respaldado por Ibai Llanos ni por la organización del Ronin FC.',
      },
      'bodycamrp': {
        description: 'Configurador de overlay de bodycam basado en navegador para streamers de FiveM y GTA Roleplay.',
        longDescription: 'Personaliza tu overlay de bodycam con tu nombre, rango, número de placa, uno de 5 diseños, fuente, logo y posición en pantalla — y lánzalo directamente como fuente de navegador en OBS. Sin instalación ni cuenta requerida.',
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
      iLove: "J'aime",
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
      coffeeCups: 'Tasses de Café',
      featuredProject: 'Projet Vedette',
    },
    footer: {
      role: 'Développeur & Technicien Réseau',
      availability: 'Disponible pour travailler',
      rights: 'Tous droits réservés.',
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
      },
      'ronin-fc': {
        description: "Site web créé par la communauté pour le Ronin FC, le club de football fondé par Ibai Llanos.",
        longDescription: "Site web créé par la communauté pour le club de football Ronin FC. Il s'agit d'un projet de fans non officiellement affilié ni approuvé par Ibai Llanos ou l'organisation du Ronin FC.",
      },
      'bodycamrp': {
        description: 'Configurateur d\'overlay bodycam basé sur navigateur pour les streamers FiveM et GTA Roleplay.',
        longDescription: "Personnalisez votre overlay bodycam avec votre nom, grade, numéro de badge, l'un des 5 designs, la police, le logo et la position à l'écran — puis lancez-le directement comme source navigateur dans OBS. Aucune installation ni compte requis.",
      },
    },
  },
};
