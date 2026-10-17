import type { RoleExperience, EducationItem, PhilosophyPillar } from "@/types";

export type { RoleExperience, EducationItem, PhilosophyPillar };

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    title: "Arquitectura a Gran Escala",
    subtitle: "Resiliencia & Simplicidad",
    description:
      "Diseño de sistemas distribuidos y orientados a eventos preparados para soportar millones de transacciones con alta disponibilidad, minimizando la complejidad accidental.",
    iconName: "Cpu",
  },
  {
    title: "Platform Engineering",
    subtitle: "Developer Experience (DevEx)",
    description:
      "Construcción de plataformas internas sobre Kubernetes y nubes públicas que empoderan a los equipos de desarrollo para desplegar con autonomía, seguridad y velocidad.",
    iconName: "GitBranch",
  },
  {
    title: "Liderazgo & Cultura Técnica",
    subtitle: "Craftsmanship & Autonomía",
    description:
      "Desarrollo del talento técnico, establecimiento de estándares de excelencia y alineación estratégica entre las decisiones de arquitectura y los objetivos de negocio.",
    iconName: "Users",
  },
  {
    title: "Credibilidad Técnica (Hands-on)",
    subtitle: "Rigor desde la experiencia",
    description:
      "Más de 15 años en backend, infraestructuras cloud y resolución de incidentes críticos en producción. Liderar con criterio habiendo estado en las trincheras del código.",
    iconName: "ShieldCheck",
  },
];

export const CAREER_HISTORY: RoleExperience[] = [
  {
    role: "Head of Architecture & Development",
    company: "Universia Holding (Grupo Santander)",
    period: "Actualidad",
    location: "Madrid, España",
    current: true,
    summary:
      "Liderazgo de la estrategia tecnológica, gobernanza de arquitectura y equipos de ingeniería de software para las plataformas del ecosistema Universia / Grupo Santander.",
    highlights: [
      "Definición y evolución de la arquitectura corporativa para productos digitales de educación superior y servicios bancarios asociados.",
      "Modernización de plataformas core hacia arquitecturas distribuidas, desacopladas y preparadas para alta concurrencia.",
      "Impulso de la cultura de Platform Engineering, automatización CI/CD y estándares de observabilidad y ciberseguridad.",
      "Mentoría y dirección de directores técnicos, arquitectos de software y equipos multifuncionales de desarrollo.",
    ],
    skills: [
      "Enterprise Architecture",
      "Tech Strategy",
      "Cloud Strategy",
      "Team Leadership",
      "Governance",
      "Platform Engineering",
    ],
  },
  {
    role: "Software Architect & Tech Lead",
    company: "Universia / Santander Ecosystem",
    period: "Etapa previa",
    location: "Madrid, España",
    current: false,
    summary:
      "Responsable del diseño técnico, adopción de contenedores, microservicios y modernización de arquitecturas core.",
    highlights: [
      "Liderazgo en la migración de sistemas monolíticos a microservicios sobre Kubernetes y cloud pública.",
      "Definición de APIs RESTful y contratos de eventos distribuidos para integraciones críticas inter-bancarias.",
      "Alineación técnica de equipos y aseguramiento de buenas prácticas de entrega continua (PSM II).",
    ],
    skills: [
      "Solution Architecture",
      "Kubernetes",
      "Microservices",
      "Kafka",
      "Event-Driven",
      "PSM II",
    ],
  },
  {
    role: "Senior Software Engineer / Backend Lead",
    company: "Ingeniería de Software & Plataformas",
    period: "Trayectoria Técnica",
    location: "Madrid, España",
    current: false,
    summary:
      "Desarrollo intensivo de servicios backend de alta concurrencia, diseño de APIs, bases de datos relacionales y NoSQL, y resiliencia de sistemas.",
    highlights: [
      "Diseño e implementación de servicios backend con Node.js, TypeScript, Java/Spring y Go.",
      "Optimización de rendimiento en capas de persistencia y caché distribuida (Redis, PostgreSQL, MongoDB).",
      "Contenedores, despliegues y observabilidad en entornos de producción sobre Linux.",
    ],
    skills: [
      "Node.js",
      "TypeScript",
      "Java / Spring",
      "PostgreSQL",
      "Redis",
      "Linux / Shell",
    ],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "Ingeniería en Informática",
    institution: "Universidad Carlos III de Madrid (UC3M)",
    period: "2004 — 2010",
    location: "Leganés, Madrid",
    details: "Formación de base sólida en computación, redes, sistemas operativos y arquitectura de computadores.",
  },
];

export const TECHNICAL_DOMAINS = [
  {
    category: "Liderazgo & Estrategia",
    items: [
      "Enterprise Architecture",
      "Dirección de Equipos de Ingeniería",
      "Estrategia Cloud & FinOps",
      "Agile & Scrum (PSM II)",
      "Tech Due Diligence",
    ],
  },
  {
    category: "Arquitectura & Sistemas",
    items: [
      "Arquitecturas Orientadas a Eventos (EDA)",
      "Sistemas Distribuidos",
      "Microservicios & APIs",
      "Domain-Driven Design (DDD)",
      "Alta Disponibilidad & Resiliencia",
    ],
  },
  {
    category: "Cloud & Arquitectura de Plataforma",
    items: [
      "Kubernetes & Docker",
      "Platform Engineering",
      "AWS & Cloud Híbrida",
      "CI/CD Pipelines",
      "Infraestructura como Código (IaC)",
      "Observabilidad & Monitoring",
    ],
  },
  {
    category: "Stack de Ingeniería & Datos",
    items: [
      "TypeScript & Node.js",
      "Java / Spring Framework",
      "Go (Golang)",
      "Apache Kafka & RabbitMQ",
      "PostgreSQL, Redis & MongoDB",
      "Next.js & React",
    ],
  },
];
