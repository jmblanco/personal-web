import type { ProjectItem } from "@/types";

export type { ProjectItem };

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    title: "Kubernetes Multi-Node Local Topology & Automation",
    category: "Platform & Infrastructure",
    description:
      "Automatización declarativa para aprovisionar clústeres locales multinodo de Kubernetes con Kind, preconfigurando Ingress Controller NGINX, almacenamiento persistente y topología de red lista para validar arquitecturas cloud-native sin fricción.",
    tags: ["Kubernetes", "Kind", "Platform Engineering", "Cloud Native", "Shell"],
    githubUrl: "https://github.com/jmblanco/kind-cluster-deployment",
    featured: true,
  },
  {
    title: "Digital Architecture Space & Tech Hub Template",
    category: "Open Source",
    description:
      "Plantilla open-source sobria y de alto rendimiento orientada a configuración (100% config-driven) para arquitectos y tech leads. Soporta doble perspectiva (Executive View & Terminal UNIX interactiva), Next.js 16, TypeScript estricto, contenedor NGINX no-root y Helm Chart listo para Kubernetes.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Helm / K8s"],
    githubUrl: "https://github.com/jmblanco/personal-web",
    featured: true,
  },
  {
    title: "Media Processing Engine & Modular Pipeline",
    category: "Tools",
    description:
      "Pipeline modular para procesamiento, montaje y transcodificación desatendida de recursos multimedia con Node.js, optimizado para flujos batch automatizados y manejo eficiente de streams.",
    tags: ["Node.js", "Automation", "Media Processing", "Pipelines", "Streams"],
    githubUrl: "https://github.com/jmblanco/media-automation-toolkit",
    featured: true,
  },
  {
    title: "Enterprise Unix & Cloud Workstation Automation",
    category: "Platform & Infrastructure",
    description:
      "Herramientas y recetas de aprovisionamiento de estaciones de trabajo UNIX/Linux para ingenieros, estandarizando autenticación, entornos de shell seguros y herramientas esenciales de desarrollo.",
    tags: ["Bash / Shell", "Linux", "DevEx", "Security Automation"],
    githubUrl: "https://github.com/jmblanco/scripting",
    featured: true,
  },
  {
    title: "Agentic Engineering Framework & Governance Hub",
    category: "AI & Agentic Systems",
    description:
      "Framework y metodología operativa para orquestar equipos de agentes de IA autónomos con Human-in-the-Loop (HITL). Estandariza roles especializados (Product Spec, System Architect, TDD Implementer, QA Automation, Raptor Security Auditor y Release Engineer) para entrega de software empresarial determinista.",
    tags: ["Agentic AI", "Multi-Agent Systems", "Software Governance", "TDD", "HITL"],
    featured: true,
    statusBadge: "En Desarrollo · Q4 2026",
  },
];
