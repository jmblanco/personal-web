import type { ProjectItem } from "@/types";

export type { ProjectItem };

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    title: "kind-cluster-deployment",
    category: "Platform & Infrastructure",
    description:
      "Automatización para desplegar clústeres locales de Kubernetes con Kind, configurando ingress, almacenamiento persistente y topología multinodo para entornos de desarrollo.",
    tags: ["Kubernetes", "Kind", "Shell", "Platform Engineering", "Cloud Native"],
    githubUrl: "https://github.com/jmblanco/kind-cluster-deployment",
    featured: true,
  },
  {
    title: "Personal Digital Hub & Architecture Space",
    category: "Architecture",
    description:
      "Web personal y portal de liderazgo técnico construida con Next.js 16 (App Router), TypeScript y Tailwind CSS. Diseño editorial enfocado en rendimiento y accesibilidad.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/jmblanco/personal-web",
    featured: true,
  },
  {
    title: "media-automation-toolkit",
    category: "Tools",
    description:
      "Herramientas modulares de automatización para montaje, procesamiento y transcodificación de recursos multimedia con Node.js y pipelines de ejecución.",
    tags: ["Node.js", "JavaScript", "Automation", "Media Processing"],
    githubUrl: "https://github.com/jmblanco/media-automation-toolkit",
    featured: true,
  },
];
