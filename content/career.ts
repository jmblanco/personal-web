import type { RoleExperience, EducationItem, PhilosophyPillar } from "@/types";

export type { RoleExperience, EducationItem, PhilosophyPillar };

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    title: "Large-Scale Architecture",
    subtitle: "Resilience & Simplicity",
    description:
      "Distributed systems design and event-driven architectures built to handle millions of transactions with high availability, minimizing accidental complexity.",
    iconName: "Cpu",
  },
  {
    title: "Platform Engineering",
    subtitle: "Developer Experience (DevEx)",
    description:
      "Internal developer platforms built on Kubernetes and public cloud ecosystems that enable engineering teams to deliver with speed, autonomy, and security.",
    iconName: "GitBranch",
  },
  {
    title: "Technical Leadership & Culture",
    subtitle: "Craftsmanship & Autonomy",
    description:
      "Mentoring high-caliber engineering talent, setting technical excellence standards, and aligning architectural strategy with business milestones.",
    iconName: "Users",
  },
  {
    title: "Hands-on Rigor",
    subtitle: "Credibility from Experience",
    description:
      "Extensive experience in distributed backends, cloud topologies, and mission-critical production operations. Leading with empathy from hands-on trenches.",
    iconName: "ShieldCheck",
  },
];

export const CAREER_HISTORY: RoleExperience[] = [
  {
    role: "Head of Architecture & Platform",
    company: "Acme Global Platform",
    period: "Present",
    location: "Madrid, Spain",
    current: true,
    summary:
      "Leading technology strategy, architecture governance, and engineering platforms for high-throughput enterprise systems.",
    highlights: [
      "Enterprise architecture definition and governance for high-concurrency cloud-native platforms.",
      "Modernization of legacy services into decoupled, event-driven architectures on Kubernetes.",
      "Spearheading Platform Engineering initiatives, automated CI/CD pipelines, and deep observability.",
      "Mentoring software architects, tech leads, and cross-functional engineering teams.",
    ],
    skills: [
      "Enterprise Architecture",
      "Tech Strategy",
      "Cloud Strategy",
      "Platform Engineering",
      "Team Leadership",
      "Governance",
    ],
  },
  {
    role: "Software Architect & Tech Lead",
    company: "Cloud Distributed Services",
    period: "Previous Stage",
    location: "Madrid, Spain",
    current: false,
    summary:
      "Technical leadership in microservices adoption, container orchestration, and high-resilience system design.",
    highlights: [
      "Led migration from monoliths to event-driven microservices on Kubernetes.",
      "Designed RESTful and asynchronous event-stream contracts for high-availability systems.",
      "Established continuous integration pipelines, automated testing, and agile practices.",
    ],
    skills: [
      "Solution Architecture",
      "Kubernetes",
      "Microservices",
      "Kafka",
      "Event-Driven",
      "System Design",
    ],
  },
  {
    role: "Senior Software Engineer / Backend Lead",
    company: "Enterprise Engineering & Platforms",
    period: "Formative Years",
    location: "Madrid, Spain",
    current: false,
    summary:
      "Full-cycle development of distributed backend services, high-throughput APIs, caching layers, and database optimization.",
    highlights: [
      "Engineered resilient backend services using TypeScript, Node.js, Go, and Java.",
      "Optimized query performance and cache tiers with Redis, PostgreSQL, and distributed storage.",
      "Production container operations, metrics, structured logging, and incident response.",
    ],
    skills: [
      "Node.js",
      "TypeScript",
      "Go",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "BSc / MSc in Computer Science & Engineering",
    institution: "Technical University",
    period: "Graduate Degree",
    location: "Madrid, Spain",
    details: "Strong fundamentals in computer architecture, distributed systems, operating systems, networks, and algorithms.",
  },
];

export const TECHNICAL_DOMAINS = [
  {
    category: "Leadership & Strategy",
    items: [
      "Enterprise Architecture",
      "Engineering Leadership",
      "Cloud & FinOps Strategy",
      "Agile Delivery & Governance",
      "Technical Due Diligence",
    ],
  },
  {
    category: "Architecture & Systems",
    items: [
      "Event-Driven Architecture (EDA)",
      "Distributed Systems",
      "Microservices & APIs",
      "Domain-Driven Design (DDD)",
      "High Availability & Resiliency",
    ],
  },
  {
    category: "Cloud & Platform",
    items: [
      "Kubernetes & Docker",
      "Platform Engineering",
      "AWS & Hybrid Cloud",
      "CI/CD Pipelines",
      "Infrastructure as Code (IaC)",
      "Observability & Tracing",
    ],
  },
  {
    category: "Engineering Stack & Data",
    items: [
      "TypeScript & Node.js",
      "Java / Spring Framework",
      "Go (Golang)",
      "Apache Kafka & Message Brokers",
      "PostgreSQL, Redis & NoSQL",
      "Next.js & React",
    ],
  },
];
