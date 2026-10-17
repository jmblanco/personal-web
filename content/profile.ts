import type { ProfileConfig } from "@/types";

export type { ProfileConfig };

export const SITE_PROFILE: ProfileConfig = {
  personal: {
    name: "Jose Miguel Blanco",
    fullName: "Jose Miguel Blanco García",
    initials: "JMB",
    role: "Head of Architecture & Development",
    company: "Universia",
    companyUrl: "https://www.universia.net",
    parentCompany: "Grupo Santander",
    location: "Madrid, España",
    experienceYears: "+15 años",
    credentialsBadge: "UC3M · PSM II",
    email: "jmblanco1986@gmail.com",
    bio: {
      lead:
        "Lidero la arquitectura técnica y el desarrollo en Universia (Grupo Santander). Mi foco es diseñar plataformas de software preparadas para la escala real y capacitar a los equipos de ingeniería con criterio, herramientas y autonomía para entregar con confianza.",
      secondary:
        "Más de quince años en ingeniería de software: desde el diseño y desarrollo de servicios backend de alta concurrencia hasta la arquitectura de sistemas distribuidos y la dirección técnica de plataformas corporativas.",
    },
  },
  focusDomains: [
    {
      number: "01",
      title: "Plataformas internas (IDP)",
      description:
        "Infraestructura cloud y Kubernetes como autoservicio seguro para decenas de desarrolladores.",
    },
    {
      number: "02",
      title: "Arquitecturas desacopladas",
      description:
        "Sistemas orientados a eventos (Kafka) y contratos tipados entre servicios críticos.",
    },
    {
      number: "03",
      title: "Ingeniería asistida por IA",
      description:
        "Integración de agentes y herramientas en el ciclo de entrega sin perder gobernanza.",
    },
  ],
  terminal: {
    user: "jmb",
    hostname: "santander-universia",
    directory: "~/architecture",
    systemStatus: "SYSTEM_ONLINE",
    missionStatement:
      "Liderazgo de la estrategia tecnológica y gobernanza de arquitectura corporativa para las plataformas del ecosistema Universia / Grupo Santander. Especializado en sistemas distribuidos, modernización de plataformas core hacia Kubernetes/cloud y fomento de la autonomía en equipos de desarrollo.",
  },
  social: {
    github: {
      username: "jmblanco",
      url: "https://github.com/jmblanco",
    },
    linkedin: {
      username: "jmblancogarcia",
      url: "https://es.linkedin.com/in/jmblancogarcia",
    },
  },
  contactSection: {
    title: "¿Conversamos?",
    description:
      "Siempre con ganas de intercambiar puntos de vista sobre arquitectura de software, diseño de plataformas internas, cultura de ingeniería o retos técnicos de gran escala.",
    ctaLinkedIn: "Conectar en LinkedIn",
  },
  openSourceAttribution: {
    enabled: true,
    templateName: "Personal Web Template",
    templateUrl: "https://github.com/jmblanco/personal-web",
    authorName: "Jose Miguel Blanco",
  },
};
