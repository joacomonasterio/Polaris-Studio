export type Lang = 'es' | 'en'

interface TeamMemberCopy {
  role: string
  study: string
}

interface ServiceItem {
  title: string
  description: string
}

interface ProjectCopy {
  type: string
  description: string
}

interface ProjectTypeOption {
  value: string
  label: string
}

interface Dictionary {
  nav: {
    services: string
    process: string
    team: string
    projects: string
    contact: string
  }
  hero: {
    badge: string
    title: string
    description: string
    cta: string
  }
  highlights: string[]
  services: {
    eyebrow: string
    heading: string
    items: ServiceItem[]
    techEyebrow: string
  }
  process: {
    eyebrow: string
    heading: string
    description: string
    steps: string[]
  }
  team: {
    eyebrow: string
    heading: string
    members: {
      catalina: TeamMemberCopy
      joaquin: TeamMemberCopy
    }
  }
  projects: {
    eyebrow: string
    heading: string
    items: {
      fittrack: ProjectCopy
      nextdrive: ProjectCopy
      nubira: ProjectCopy
    }
  }
  contact: {
    eyebrow: string
    heading: string
    description: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    projectTypeLabel: string
    projectTypes: ProjectTypeOption[]
    messageLabel: string
    messagePlaceholder: string
    submitIdle: string
    submitLoading: string
    submitSuccess: string
    successMessage: string
    errorMessage: string
  }
  footer: {
    rights: (year: number) => string
  }
}

export const translations: Record<Lang, Dictionary> = {
  es: {
    nav: {
      services: 'Servicios',
      process: 'Proceso',
      team: 'Equipo',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      badge: 'UX/UI + Desarrollo Full Stack',
      title: 'Somos Polaris.',
      description: 'Agencia de desarrollo de software que diseña y construye productos digitales.',
      cta: 'Comenzar proyecto',
    },
    highlights: ['Diseño estratégico', 'Desarrollo moderno', 'Responsive', 'Optimización visual'],
    services: {
      eyebrow: 'Servicios',
      heading: '¿Tu negocio está listo para dar el siguiente paso digital?',
      items: [
        {
          title: 'Diseño UX/UI',
          description:
            'Diseñamos interfaces claras, modernas y centradas en conversión para productos digitales, startups y negocios que quieren verse premium.',
        },
        {
          title: 'Desarrollo Web',
          description:
            'Construimos landing pages y experiencias web rápidas, escalables y responsive con foco en performance y resultados.',
        },
        {
          title: 'Desarrollo de Aplicaciones',
          description:
            'Unimos estrategia, diseño y desarrollo para transformar ideas en productos listos para crecer.',
        },
      ],
      techEyebrow: 'Tecnologías que usamos',
    },
    process: {
      eyebrow: 'Proceso',
      heading: 'Un flujo claro entre diseño, desarrollo y resultado final.',
      description:
        'Trabajamos con una lógica simple: entender el objetivo, diseñar con intención y construir una experiencia sólida, rápida y lista para destacar.',
      steps: [
        'Descubrimiento y estrategia',
        'Wireframes y diseño visual',
        'Desarrollo y optimización',
        'Entrega, medición y mejora',
      ],
    },
    team: {
      eyebrow: 'Equipo',
      heading: 'Las personas detrás de Polaris.',
      members: {
        catalina: { role: 'Diseñadora UX/UI', study: 'Diseño Multimedia y de Interacción' },
        joaquin: { role: 'Desarrollador Full Stack', study: 'Ingeniería en Informática' },
      },
    },
    projects: {
      eyebrow: 'Proyectos',
      heading: 'Trabajo que habla por sí solo.',
      items: {
        fittrack: {
          type: 'App · Fitness & Training',
          description: 'Aplicación de seguimiento de entrenamiento y progreso fitness.',
        },
        nextdrive: {
          type: 'Plataforma · Renta de Autos',
          description: 'Plataforma digital para la renta de vehículos con experiencia moderna.',
        },
        nubira: {
          type: 'Web · Estética',
          description: 'Sitio web para estética profesional con foco en imagen de marca.',
        },
      },
    },
    contact: {
      eyebrow: 'Contacto',
      heading: '¿Tenés un proyecto en mente?',
      description: 'Contanos tu idea. Respondemos en menos de 24 horas.',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Email',
      emailPlaceholder: 'tu@email.com',
      projectTypeLabel: 'Tipo de proyecto',
      projectTypes: [
        { value: 'uxui', label: 'UX/UI Design' },
        { value: 'web', label: 'Desarrollo Web' },
        { value: 'app', label: 'Aplicación' },
        { value: 'otro', label: 'Otro' },
      ],
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Contanos sobre tu proyecto...',
      submitIdle: 'Enviar mensaje',
      submitLoading: 'Enviando...',
      submitSuccess: 'Mensaje enviado',
      successMessage: '¡Gracias! Nos ponemos en contacto a la brevedad.',
      errorMessage: 'Hubo un error. Intentá de nuevo.',
    },
    footer: {
      rights: (year) => `© ${year} Polaris Studio. Todos los derechos reservados.`,
    },
  },
  en: {
    nav: {
      services: 'Services',
      process: 'Process',
      team: 'Team',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      badge: 'UX/UI + Full Stack Development',
      title: 'We are Polaris.',
      description: 'Software agency that designs and builds digital products.',
      cta: 'Start a project',
    },
    highlights: ['Strategic design', 'Modern development', 'Responsive', 'Visual optimization'],
    services: {
      eyebrow: 'Services',
      heading: 'Is your business ready to take the next digital step?',
      items: [
        {
          title: 'UX/UI Design',
          description:
            'We design clear, modern interfaces focused on conversions for digital products, startups and businesses that want to look premium.',
        },
        {
          title: 'Web Development',
          description:
            'We build fast, scalable and responsive landing pages and web experiences focused on performance and results.',
        },
        {
          title: 'App Development',
          description:
            'We combine strategy, design, and development to transform ideas into products ready to scale.',
        },
      ],
      techEyebrow: 'Technologies we use',
    },
    process: {
      eyebrow: 'Process',
      heading: 'A clear flow between design, development and final result.',
      description:
        'We work with a simple logic: understand the goal, design with intention and build a solid, fast experience ready to stand out.',
      steps: [
        'Discovery & strategy',
        'Wireframes & visual design',
        'Development & optimization',
        'Delivery, measurement & improvement',
      ],
    },
    team: {
      eyebrow: 'Team',
      heading: 'The people behind Polaris.',
      members: {
        catalina: { role: 'UX/UI Designer', study: 'Multimedia & Interaction Design' },
        joaquin: { role: 'Full Stack Developer', study: 'Computer Engineering' },
      },
    },
    projects: {
      eyebrow: 'Projects',
      heading: 'Work that speaks for itself.',
      items: {
        fittrack: {
          type: 'App · Fitness & Training',
          description: 'Fitness tracking app for workouts and progress monitoring.',
        },
        nextdrive: {
          type: 'Platform · Car Rental',
          description: 'Digital platform for vehicle rental with a modern experience.',
        },
        nubira: {
          type: 'Web · Beauty Salon',
          description: 'Website for a professional beauty salon focused on brand image.',
        },
      },
    },
    contact: {
      eyebrow: 'Contact',
      heading: 'Got a project in mind?',
      description: "Tell us your idea. We respond in less than 24 hours.",
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      projectTypeLabel: 'Project type',
      projectTypes: [
        { value: 'uxui', label: 'UX/UI Design' },
        { value: 'web', label: 'Web Development' },
        { value: 'app', label: 'App' },
        { value: 'otro', label: 'Other' },
      ],
      messageLabel: 'Message',
      messagePlaceholder: 'Tell us about your project...',
      submitIdle: 'Send message',
      submitLoading: 'Sending...',
      submitSuccess: 'Message sent',
      successMessage: "Thanks! We'll be in touch soon.",
      errorMessage: 'Something went wrong. Please try again.',
    },
    footer: {
      rights: (year) => `© ${year} Polaris Studio. All rights reserved.`,
    },
  },
}
