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
  /** Short summary shown in the projects list */
  description: string
  /** Long description shown in the project modal, one string per paragraph */
  details?: string[]
}

interface ProjectTypeOption {
  value: string
  label: string
}

interface Dictionary {
  meta: {
    title: string
    description: string
  }
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
    snippets: string[][]
    terminal: string[]
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
    steps: { title: string; description: string }[]
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
    viewProject: string
    close: string
    previous: string
    next: string
    enlarge: string
    visitSite: string
    items: {
      inne: ProjectCopy
      apulmon: ProjectCopy
      zenia: ProjectCopy
      telriv: ProjectCopy
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
    meta: {
      title: 'Polaris Studio — Diseño UX/UI y Desarrollo Web',
      description:
        'Agencia de diseño UX/UI y desarrollo web. Diseñamos y construimos productos digitales modernos, rápidos y listos para crecer.',
    },
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
      snippets: [
        ['const proyecto = {', '  idea: "tuya",', '  equipo: "Polaris",', '  entrega: "lista para crecer",', '}'],
        ['// Diseño que convierte', 'const visitante = await llega()', 'if (visitante.quiere) contactar()'],
        ['brief → diseño → desarrollo', '  .then(lanzar)', '  .then(crecer)'],
        ['const respuesta = "menos de 24 hs"', 'await hablamos(tuIdea)'],
        ['<Web rapida responsive seo />'],
        ['ux.testear(usuario) // iteramos', '// hasta que se sienta natural'],
        ['const web = {', '  mobile: "primero",', '  accesible: true,', '}'],
        ['export const marca = {', '  identidad: "clara",', '  presencia: "premium",', '}'],
        ['npm run lanzar', '> tu producto, online'],
        ['SELECT ideas FROM tu_negocio', 'WHERE necesita = "crecer"'],
        ['if (tuIdea) Polaris.empezar()'],
        ['--color-marca: var(--tu-estilo);', 'filter: hacer-memorable;'],
      ],
      terminal: [
        '$ polaris empezar --proyecto nuevo',
        '> entendiendo tu negocio...',
        '> diseñando la experiencia...',
        '> listo para lanzar',
      ],
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
        {
          title: 'Descubrimiento y estrategia',
          description:
            'Nos reunimos para entender tu negocio, tus objetivos y a quién le hablás. Con eso definimos el alcance, las prioridades y un plan de trabajo claro.',
        },
        {
          title: 'Wireframes y diseño visual',
          description:
            'Armamos la estructura de cada pantalla y después el diseño final con la identidad de tu marca. Lo revisamos juntos antes de pasar a desarrollo.',
        },
        {
          title: 'Desarrollo y optimización',
          description:
            'Construimos el producto con tecnologías modernas, cuidando que sea rápido y que funcione bien en cualquier dispositivo.',
        },
        {
          title: 'Entrega, medición y mejora',
          description:
            'Publicamos el proyecto, te acompañamos en el lanzamiento y medimos cómo funciona para seguir mejorándolo.',
        },
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
      viewProject: 'Ver proyecto',
      close: 'Cerrar',
      previous: 'Anterior',
      next: 'Siguiente',
      enlarge: 'Ampliar imagen',
      visitSite: 'Visitar sitio',
      items: {
        inne: {
          type: 'Web · Pastelería',
          description: 'Sitio web para una pastelería artesanal, con su catálogo de productos y la historia de la marca.',
          details: [
            'Diseñamos y desarrollamos un sitio web para Inné, una pastelería artesanal especializada en productos 100% libres de gluten.',
            'El objetivo fue transmitir la calidez y el cuidado detrás de cada preparación, y a la vez presentar el catálogo de forma clara y accesible. Para eso trabajamos con una paleta de celestes y verde petróleo que aporta frescura y confianza, combinada con una tipografía serif elegante para los títulos y una sans serif limpia para facilitar la lectura.',
            'El diseño es mobile first, con un hero que comunica de entrada la propuesta de valor y el diferencial gluten free, llamados a la acción bien jerarquizados ("Ver Catálogo" y "Nuestra Historia") y un carrusel de imágenes que pone los productos en primer plano.',
            'El resultado es una web cercana y visualmente cuidada que refleja la identidad de la marca y facilita que los clientes conozcan y encarguen sus tortas, boxes y dulces personalizados.',
          ],
        },
        apulmon: {
          type: 'Desarrollo de App · Branding',
          description: 'Manual de marca para una app que conecta a donantes con comedores y hogares que necesitan ayuda.',
          details: [
            'Desarrollamos el manual de marca de A pulmón, una aplicación que conecta de forma simple a quienes quieren colaborar con comedores y hogares que necesitan ayuda. Los usuarios vinculan su cuenta bancaria y donan el monto que elijan, y ese dinero se distribuye de manera equitativa entre las instituciones del sistema.',
            'El sistema visual combina un verde oscuro profundo como color principal con un verde claro, blanco y toques de rosa y lila que suman calidez. En tipografía, Assistant para los títulos e Inter para los textos garantizan presencia y legibilidad. El manual también define el área de seguridad y el tamaño mínimo del logo, y establece una voz cercana, cálida y directa, con ejemplos de copy que muestran cómo habla la marca en cada interacción.',
          ],
        },
        zenia: {
          type: 'Web · Tienda de tecnología',
          description: 'Sitio web para un local de venta de iPhones, con su catálogo y precios siempre actualizados.',
          details: [
            'Diseñamos y desarrollamos el sitio web de Zenia, un local especializado en la venta de iPhones. El objetivo fue crear una vitrina online clara y confiable, donde los clientes pudieran explorar los modelos disponibles y consultar precios actualizados sin necesidad de escribir para preguntar.',
            'Para eso trabajamos una interfaz limpia y minimalista, en sintonía con la estética de los productos que ofrece, con fichas que destacan la información clave de cada equipo (modelo, capacidad, color, estado y precio) y una navegación pensada para encontrar rápido lo que se busca.',
            'El diseño es responsive, priorizando la experiencia en celulares, y cuenta con llamados a la acción directos para concretar la compra o hacer consultas por WhatsApp.',
            'El resultado es un sitio que agiliza la venta, transmite profesionalismo y le da al negocio una presencia digital sólida.',
          ],
        },
        telriv: {
          type: 'Sistema · Gestión a medida',
          description: 'Sistema de gestión a medida que centraliza las tareas, los pedidos y el seguimiento del equipo en un solo lugar.',
          details: [
            'Diseñamos y desarrollamos un sistema a medida, pensado a partir de las necesidades reales de su negocio. Antes de empezar, entendimos cómo trabajaba su equipo, cuáles eran sus procesos diarios y qué tareas les consumían más tiempo del necesario.',
            'A partir de ese relevamiento, construimos una herramienta que centraliza tareas, información y seguimiento en un solo lugar. Así, Telriv dejó atrás las planillas dispersas, los datos duplicados y la información que se perdía entre mensajes y correos. Hoy cada integrante del equipo sabe qué tiene que hacer y en qué estado está cada tarea, mientras que la dirección cuenta con datos actualizados para tomar decisiones con mayor seguridad.',
            'El sistema permite optimizar tiempos, reducir errores y tener una visión clara de lo que sucede en el día a día. Además, fue diseñado para ser intuitivo y fácil de usar, lo que facilitó una adopción rápida por parte del equipo, y está preparado para crecer junto con la empresa, incorporando nuevas funcionalidades a medida que surjan nuevas necesidades.',
            'El resultado es un equipo más organizado, menos tiempo dedicado a tareas operativas y más espacio para enfocarse en lo que realmente importa: hacer crecer el negocio.',
          ],
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
        { value: 'uxui', label: 'Diseño UX/UI' },
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
    meta: {
      title: 'Polaris Studio — UX/UI Design and Web Development',
      description:
        'UX/UI design and web development agency. We design and build modern, fast digital products that are ready to grow.',
    },
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
      snippets: [
        ['const project = {', '  idea: "yours",', '  team: "Polaris",', '  delivery: "ready to grow",', '}'],
        ['// Design that converts', 'const visitor = await arrives()', 'if (visitor.wantsIn) contact()'],
        ['brief → design → build', '  .then(launch)', '  .then(grow)'],
        ['const reply = "under 24 hours"', 'await talk(yourIdea)'],
        ['<Web fast responsive seo />'],
        ['ux.test(user) // we iterate', '// until it feels natural'],
        ['const web = {', '  mobile: "first",', '  accessible: true,', '}'],
        ['export const brand = {', '  identity: "clear",', '  presence: "premium",', '}'],
        ['npm run launch', '> your product, online'],
        ['SELECT ideas FROM your_business', 'WHERE needs = "to grow"'],
        ['if (yourIdea) Polaris.start()'],
        ['--brand-color: var(--your-style);', 'filter: make-memorable;'],
      ],
      terminal: [
        '$ polaris start --new-project',
        '> understanding your business...',
        '> designing the experience...',
        '> ready to launch',
      ],
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
        {
          title: 'Discovery & strategy',
          description:
            'We meet to understand your business, your goals and who you are talking to. From there we define the scope, priorities and a clear work plan.',
        },
        {
          title: 'Wireframes & visual design',
          description:
            'We map out the structure of each screen and then the final design with your brand identity. We review it together before moving on to development.',
        },
        {
          title: 'Development & optimization',
          description:
            'We build the product with modern technologies, making sure it is fast and works well on any device.',
        },
        {
          title: 'Delivery, measurement & improvement',
          description:
            'We launch the project, support you through the release and measure how it performs so we can keep improving it.',
        },
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
      viewProject: 'View project',
      close: 'Close',
      previous: 'Previous',
      next: 'Next',
      enlarge: 'Enlarge image',
      visitSite: 'Visit site',
      items: {
        inne: {
          type: 'Web · Patisserie',
          description: 'Website for an artisan patisserie, featuring its product catalog and the story behind the brand.',
          details: [
            'We designed and built a website for Inné, an artisan patisserie specializing in 100% gluten-free products.',
            'The goal was to convey the warmth and care behind every recipe while presenting the catalog in a clear, accessible way. To do so, we worked with a palette of light blues and petrol green that feels fresh and trustworthy, paired with an elegant serif typeface for headings and a clean sans serif for easy reading.',
            'The design is mobile first, with a hero that communicates the value proposition and the gluten-free difference right away, well-prioritized calls to action ("See Catalog" and "Our Story") and an image carousel that puts the products front and center.',
            'The result is a warm, carefully crafted website that reflects the brand’s identity and makes it easy for customers to discover and order their custom cakes, boxes and sweets.',
          ],
        },
        apulmon: {
          type: 'App Development · Branding',
          description: 'Brand guidelines for an app that connects donors with soup kitchens and shelters in need.',
          details: [
            'We created the brand guidelines for A pulmón, an app that makes it simple for people who want to help to support soup kitchens and shelters in need. Users link their bank account and donate the amount they choose, and the money is distributed evenly among the institutions in the system.',
            'The visual system pairs a deep dark green as the main color with light green, white and touches of pink and lilac that add warmth. For typography, Assistant for headings and Inter for body text ensure presence and legibility. The guidelines also define the logo’s clear space and minimum size, and set a close, warm and direct voice, with copy examples showing how the brand speaks in every interaction.',
          ],
        },
        zenia: {
          type: 'Web · Tech store',
          description: 'Website for an iPhone store, with its catalog and always up-to-date prices.',
          details: [
            'We designed and built the website for Zenia, a store specializing in selling iPhones. The goal was to create a clear, trustworthy online storefront where customers could browse the available models and check up-to-date prices without having to message to ask.',
            'To do so, we designed a clean, minimalist interface in tune with the look of the products it sells, with product cards that highlight each device’s key details (model, storage, color, condition and price) and navigation designed to find what you’re looking for quickly.',
            'The design is responsive, prioritizing the mobile experience, with direct calls to action to complete a purchase or ask questions via WhatsApp.',
            'The result is a site that speeds up sales, conveys professionalism and gives the business a solid digital presence.',
          ],
        },
        telriv: {
          type: 'System · Custom management',
          description: 'Custom management system that brings the team’s tasks, orders and follow-up together in one place.',
          details: [
            'We designed and built a custom system based on the real needs of their business. Before starting, we took the time to understand how their team worked, what their daily processes were and which tasks were taking up more time than necessary.',
            'Based on that research, we built a tool that brings tasks, information and follow-up together in one place. Telriv left behind scattered spreadsheets, duplicated data and information that got lost between messages and emails. Today every team member knows what they need to do and the status of each task, while management has up-to-date data to make decisions with more confidence.',
            'The system helps save time, reduce errors and get a clear view of what happens day to day. It was also designed to be intuitive and easy to use, which made for quick adoption by the team, and it is ready to grow with the company, adding new features as new needs arise.',
            'The result is a more organized team, less time spent on operational tasks and more room to focus on what really matters: growing the business.',
          ],
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
