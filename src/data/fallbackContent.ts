export type LinkItem = {
  href: string;
  label: string;
};

export type CTA = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export type SEO = {
  title: string;
  description: string;
  ogImage?: string;
};

export type Testimonial = {
  _id: string;
  name: string;
  role?: string;
  quote: string;
  isPlaceholder?: boolean;
};

export type FAQItem = {
  _id: string;
  question: string;
  answer: string;
};

export type Service = {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription?: string;
  outcomes: string[];
  deliverables: string[];
  featured?: boolean;
};

export type SiteSettings = {
  siteName: string;
  domain: string;
  tagline: string;
  founderName: string;
  location: string;
  email: string;
  phone: string;
  whatsappUrl: string;
  instagramUrl: string;
  primaryCta: CTA;
  secondaryCta: CTA;
  navLinks: LinkItem[];
  legalLinks: LinkItem[];
  seo: SEO;
};

export type HomePageData = {
  seo: SEO;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: CTA;
    secondaryCta: CTA;
  };
  trustItems: string[];
  painPoints: {
    title: string;
    intro: string;
    items: string[];
  };
  featuredServicesTitle: string;
  outcomes: {
    title: string;
    items: string[];
  };
  idealClients: {
    title: string;
    intro: string;
    items: string[];
  };
  process: {
    title: string;
    steps: { title: string; description: string }[];
  };
  founder: {
    title: string;
    body: string[];
  };
  finalCta: {
    title: string;
    body: string;
    primaryCta: CTA;
    secondaryCta: CTA;
  };
};

export type ServicesPageData = {
  seo: SEO;
  intro: {
    eyebrow: string;
    title: string;
    body: string;
  };
  categories: { title: string; description: string }[];
};

export type AboutPageData = {
  seo: SEO;
  eyebrow: string;
  title: string;
  intro: string;
  story: string[];
  values: { title: string; description: string }[];
};

export type ContactPageData = {
  seo: SEO;
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: CTA;
  secondaryCta: CTA;
  formTitle: string;
  formIntro: string;
};

export const siteSettingsFallback: SiteSettings = {
  siteName: 'Gestión en Calma',
  domain: 'https://gestion-en-calma.vercel.app',
  tagline: 'Apoyo administrativo y digital para negocios que no pueden con todo.',
  founderName: 'Yolanda',
  location: 'España',
  email: 'hola@gestionencalma.es',
  phone: '+34 600 000 000',
  whatsappUrl: 'https://wa.me/34600000000',
  instagramUrl: 'https://instagram.com/gestionencalma',
  primaryCta: {
    label: 'Solicitar una llamada',
    href: '/contacto/',
    variant: 'primary',
  },
  secondaryCta: {
    label: 'Escribirme por WhatsApp',
    href: 'https://wa.me/34600000000',
    variant: 'secondary',
  },
  navLinks: [
    { href: '/', label: 'Inicio' },
    { href: '/servicios/', label: 'Servicios' },
    { href: '/sobre-mi/', label: 'Sobre mí' },
    { href: '/contacto/', label: 'Contacto' },
  ],
  legalLinks: [
    { href: '/aviso-legal/', label: 'Aviso legal' },
    { href: '/politica-privacidad/', label: 'Política de privacidad' },
    { href: '/politica-cookies/', label: 'Política de cookies' },
  ],
  seo: {
    title: 'Gestión en Calma | Apoyo administrativo y digital para pequeños negocios',
    description:
      'Gestión administrativa, asistencia virtual y mejora de procesos para autónomos y pequeños negocios que necesitan orden, apoyo y tranquilidad.',
    ogImage: '/og-default.svg',
  },
};

export const servicesFallback: Service[] = [
  {
    _id: 'service-administracion',
    title: 'Gestión administrativa',
    slug: 'gestion-administrativa',
    shortDescription:
      'Organización documental, seguimiento de tareas y apoyo diario para que la gestión no recaiga siempre sobre ti.',
    longDescription:
      'Te acompaño en la parte administrativa del día a día para que no tengas que cargar con todo. El objetivo no es añadir más complejidad, sino ganar orden y continuidad.',
    outcomes: ['Más orden interno', 'Menos tareas pendientes', 'Seguimiento real de lo importante'],
    deliverables: [
      'Organización de documentos y tareas',
      'Seguimiento de gestiones abiertas',
      'Apoyo en procesos recurrentes',
    ],
    featured: true,
  },
  {
    _id: 'service-asistencia-virtual',
    title: 'Asistencia virtual',
    slug: 'asistencia-virtual',
    shortDescription:
      'Una ayuda cercana y resolutiva para descargar tu agenda y sostener el trabajo operativo.',
    longDescription:
      'Si todo pasa por ti, el negocio se vuelve más pesado. La asistencia virtual sirve para recuperar foco sin perder visibilidad sobre lo que ocurre.',
    outcomes: ['Más tiempo para el negocio', 'Menos interrupciones', 'Mejor organización semanal'],
    deliverables: ['Gestión de tareas', 'Soporte operativo', 'Seguimiento y coordinación'],
    featured: true,
  },
  {
    _id: 'service-procesos',
    title: 'Automatización y mejora de procesos',
    slug: 'automatizacion-y-mejora-de-procesos',
    shortDescription:
      'Detectamos cuellos de botella y ordenamos herramientas, procesos y pequeñas automatizaciones.',
    longDescription:
      'No se trata de automatizar por automatizar. Se trata de quitar fricción al trabajo diario y crear una operativa más ligera y más clara.',
    outcomes: [
      'Menos tareas repetitivas',
      'Procesos más claros',
      'Menos dependencia de la memoria',
    ],
    deliverables: [
      'Revisión de procesos actuales',
      'Propuestas de mejora',
      'Coordinación con perfiles técnicos cuando haga falta',
    ],
    featured: true,
  },
  {
    _id: 'service-comunicacion',
    title: 'Apoyo en comunicación digital',
    slug: 'apoyo-en-comunicacion-digital',
    shortDescription:
      'Acompañamiento para sostener tu presencia online sin que se convierta en otra fuente de estrés.',
    outcomes: ['Más continuidad', 'Mejor seguimiento', 'Menos improvisación'],
    deliverables: [
      'Apoyo en contenidos',
      'Organización de publicaciones',
      'Seguimiento de tareas digitales',
    ],
  },
  {
    _id: 'service-coordinacion',
    title: 'Coordinación de tareas y proveedores',
    slug: 'coordinacion-de-tareas-y-proveedores',
    shortDescription:
      'Cuando hace falta contar con otras personas o perfiles, coordino el trabajo para que todo avance con orden.',
    outcomes: ['Menos carga mental', 'Menos mensajes cruzados', 'Más claridad'],
    deliverables: ['Seguimiento de encargos', 'Coordinación externa', 'Punto de apoyo operativo'],
  },
  {
    _id: 'service-subvenciones',
    title: 'Soporte en gestión y seguimiento de subvenciones',
    slug: 'soporte-en-subvenciones',
    shortDescription:
      'Experiencia en gestión rigurosa y seguimiento de procesos complejos donde el orden importa.',
    outcomes: ['Más control documental', 'Procesos mejor trazados', 'Seguridad en el seguimiento'],
    deliverables: [
      'Preparación y organización',
      'Seguimiento documental',
      'Apoyo administrativo especializado',
    ],
  },
];

export const testimonialsFallback: Testimonial[] = [
  {
    _id: 'testimonial-placeholder-1',
    name: 'Testimonios disponibles próximamente',
    role: 'Referencia pendiente de publicación',
    quote:
      'Yolanda ya cuenta con experiencia y recorrido, pero este espacio se actualizará en cuanto podamos publicar referencias reales de clientes con total tranquilidad.',
    isPlaceholder: true,
  },
];

export const faqFallback: FAQItem[] = [
  {
    _id: 'faq-1',
    question: '¿Tengo que delegarlo todo desde el principio?',
    answer:
      'No. Podemos empezar por una parte concreta del trabajo para detectar qué te aliviaría más ahora mismo.',
  },
  {
    _id: 'faq-2',
    question: '¿Trabajas con negocios pequeños o también con autónomos?',
    answer:
      'Sí, el enfoque está pensado precisamente para autónomos, pequeños negocios y proyectos donde el día a día suele recaer en una sola persona.',
  },
  {
    _id: 'faq-3',
    question: '¿Y si necesito algo técnico que tú no haces directamente?',
    answer:
      'Puedo ayudarte a detectarlo, organizarlo y coordinarlo con el perfil adecuado para que no tengas que hacerlo tú todo sola.',
  },
];

export const homePageFallback: HomePageData = {
  seo: siteSettingsFallback.seo,
  hero: {
    eyebrow: 'Gestión en Calma · apoyo cercano para pequeños negocios',
    title: 'Ordena la gestión de tu negocio y recupera tiempo para lo que mejor haces',
    subtitle:
      'Ayudo a autónomos y pequeños negocios a poner orden en tareas administrativas y digitales, mejorar procesos y dejar de cargar solos con toda la operativa.',
    primaryCta: siteSettingsFallback.primaryCta,
    secondaryCta: siteSettingsFallback.secondaryCta,
  },
  trustItems: [
    '+10 años de experiencia',
    'Más de 1 millón de euros gestionados en subvenciones',
    'Apoyo cercano, resolutivo y adaptable',
  ],
  painPoints: {
    title: 'Cuando todo pasa por ti, el negocio pesa más',
    intro:
      'Muchos pequeños negocios funcionan así durante demasiado tiempo: la persona al frente intenta llevar clientes, gestión, seguimiento, mensajes, documentación y decisiones al mismo tiempo.',
    items: [
      'Sientes que siempre hay tareas pendientes que no terminas de cerrar',
      'Todo requiere tu atención, incluso lo operativo y repetitivo',
      'El desorden diario te quita tiempo y energía para hacer crecer el negocio',
    ],
  },
  featuredServicesTitle: '¿En qué puedo ayudarte?',
  outcomes: {
    title: 'No se trata de hacer más. Se trata de trabajar con más calma, orden y continuidad.',
    items: [
      'Recuperar tiempo para tu actividad principal',
      'Bajar la carga mental del día a día',
      'Tener tareas y procesos más claros',
      'Sentir que el negocio no depende de recordarlo todo tú',
    ],
  },
  idealClients: {
    title: 'Especialmente útil para',
    intro:
      'Autónomos y negocios pequeños donde el trabajo operativo, administrativo y digital suele caer en una sola persona.',
    items: [
      'Profesionales independientes',
      'Centros de yoga y pilates',
      'Proyectos creativos y artísticos',
      'Comercios pequeños',
      'Negocios de bienestar y atención personal',
    ],
  },
  process: {
    title: 'Una forma de trabajar clara y cercana',
    steps: [
      {
        title: 'Nos conocemos',
        description:
          'Hablamos de tu negocio, de tu momento actual y de dónde más te pesa la carga operativa.',
      },
      {
        title: 'Definimos prioridades',
        description:
          'Aterrizamos qué merece delegarse primero y qué tendría más impacto en tu día a día.',
      },
      {
        title: 'Organizo, ejecuto o coordino',
        description:
          'Me ocupo de avanzar el trabajo o de coordinar lo necesario para que deje de depender de ti todo el tiempo.',
      },
      {
        title: 'Tú recuperas foco',
        description:
          'La idea es sencilla: menos ruido operativo, más espacio para tu negocio y tus clientes.',
      },
    ],
  },
  founder: {
    title: 'Detrás de Gestión en Calma está Yolanda',
    body: [
      'Yolanda acompaña a pequeños negocios que necesitan poner orden en su parte administrativa y digital sin perder cercanía ni control.',
      'Su experiencia incluye más de diez años de trabajo y la gestión de más de un millón de euros en subvenciones, además de la coordinación de tareas, documentación y seguimiento en entornos donde el detalle importa.',
    ],
  },
  finalCta: {
    title: 'Si sientes que ya no puedes con todo, podemos hablar',
    body: 'Cuéntame en qué punto está tu negocio y veremos juntas qué tipo de apoyo puede ayudarte ahora mismo.',
    primaryCta: siteSettingsFallback.primaryCta,
    secondaryCta: siteSettingsFallback.secondaryCta,
  },
};

export const servicesPageFallback: ServicesPageData = {
  seo: {
    title: 'Servicios | Gestión en Calma',
    description:
      'Servicios de apoyo administrativo, asistencia virtual, organización y mejora de procesos para pequeños negocios y autónomos.',
    ogImage: '/og-default.svg',
  },
  intro: {
    eyebrow: 'Servicios',
    title: 'Apoyo operativo para negocios que necesitan orden y continuidad',
    body: 'No se trata de hacerlo todo. Se trata de detectar qué partes te restan tiempo, foco o claridad y ponerles estructura, seguimiento y apoyo real.',
  },
  categories: [
    {
      title: 'Gestión administrativa',
      description:
        'Procesos, seguimiento, documentación y orden para que la parte administrativa deje de ir siempre por detrás.',
    },
    {
      title: 'Asistencia virtual',
      description:
        'Apoyo en la operativa diaria para descargar tareas y sostener el día a día sin improvisación constante.',
    },
    {
      title: 'Automatización y mejora de procesos',
      description:
        'Revisión de herramientas y tareas repetitivas para trabajar con más agilidad y menos fricción.',
    },
  ],
};

export const aboutPageFallback: AboutPageData = {
  seo: {
    title: 'Sobre mí | Gestión en Calma',
    description:
      'Conoce a Yolanda, la persona detrás de Gestión en Calma y su forma de acompañar a pequeños negocios con cercanía y criterio.',
    ogImage: '/og-default.svg',
  },
  eyebrow: 'Sobre mí',
  title: 'Una forma cercana de sostener la gestión del día a día',
  intro:
    'Gestión en Calma nace para acompañar a profesionales y pequeños negocios que necesitan apoyo operativo sin perder el trato humano ni la sensación de control.',
  story: [
    'Yolanda trabaja desde la organización, la escucha y el seguimiento. La idea no es añadir otra capa de complejidad, sino ayudarte a tomar aire y ordenar lo que hoy te pesa.',
    'Su experiencia incluye más de diez años de recorrido profesional, coordinación administrativa y gestión de procesos de responsabilidad, incluyendo más de un millón de euros en subvenciones.',
    'Cuando un negocio pequeño funciona, muchas veces es porque alguien está sosteniendo mucho más de lo que parece. Gestión en Calma existe para que esa carga no recaiga siempre en la misma persona.',
  ],
  values: [
    {
      title: 'Cercanía',
      description: 'Trabajar con una persona accesible, clara y fácil de coordinar.',
    },
    {
      title: 'Orden útil',
      description:
        'No más sistemas por postureo. Solo estructura que realmente haga el trabajo más fácil.',
    },
    {
      title: 'Confianza',
      description: 'Delegar no debería darte más estrés. Debería devolverte foco y tranquilidad.',
    },
  ],
};

export const contactPageFallback: ContactPageData = {
  seo: {
    title: 'Contacto | Gestión en Calma',
    description:
      'Habla con Yolanda y cuéntale qué parte de tu negocio necesita más orden, apoyo o acompañamiento.',
    ogImage: '/og-default.svg',
  },
  eyebrow: 'Contacto',
  title: 'Cuéntame qué necesitas y vemos cómo puedo ayudarte',
  intro:
    'Si tienes un negocio pequeño y sientes que la parte operativa se te está haciendo grande, podemos hablar sin compromiso.',
  primaryCta: siteSettingsFallback.primaryCta,
  secondaryCta: siteSettingsFallback.secondaryCta,
  formTitle: 'Escríbeme',
  formIntro:
    'Cuéntame tu situación y te responderé para valorar juntas si este apoyo encaja contigo y con tu negocio.',
};
