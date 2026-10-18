import type { ProfileConfig } from "@/types";

export type { ProfileConfig };

export const SITE_PROFILE: ProfileConfig = {
  personal: {
    name: "Alex Morgan",
    fullName: "Alex Morgan Vance",
    initials: "AMV",
    role: "Head of Architecture & Platform",
    company: "Acme Cloud Corp",
    companyUrl: "https://example.com",
    parentCompany: "Acme Group",
    location: "Madrid, Spain",
    experienceYears: "+15 years",
    credentialsBadge: "MSc CS · PSM II",
    email: "alex.morgan@example.com",
    bio: {
      lead:
        "Designing resilient distributed architectures, developer platforms, and cloud-native systems for massive scale. Empowering high-performance engineering teams with autonomous continuous delivery.",
      secondary:
        "Over 15 years in software engineering: from high-throughput backend services and event-driven systems to cloud infrastructure governance and technical leadership.",
    },
  },
  focusDomains: [
    {
      number: "01",
      title: "Internal Developer Platforms (IDP)",
      description:
        "Secure, self-service cloud infrastructure and Kubernetes topologies empowering engineering teams.",
    },
    {
      number: "02",
      title: "Decoupled Architectures",
      description:
        "Event-driven streaming systems (Kafka), strict API contracts, and high-resilience transactional services.",
    },
    {
      number: "03",
      title: "Agentic Engineering & AI",
      description:
        "Autonomous agent workflows, deterministic software delivery pipelines, and governance.",
    },
  ],
  terminal: {
    user: "alex",
    hostname: "platform-core",
    directory: "~/architecture",
    systemStatus: "SYSTEM_ONLINE",
    missionStatement:
      "Enterprise technology strategy, architecture governance, and distributed platform modernization across multi-cloud environments.",
  },
  social: {
    github: {
      username: "your-github",
      url: "https://github.com",
    },
    linkedin: {
      username: "your-linkedin",
      url: "https://linkedin.com",
    },
  },
  contactSection: {
    title: "Let's connect",
    description:
      "Always interested in discussing software architecture, internal developer platforms, resilient systems, or tech leadership.",
    ctaLinkedIn: "Connect on LinkedIn",
  },
  openSourceAttribution: {
    enabled: true,
    templateName: "Personal Web Template",
    templateUrl: "https://github.com/jmblanco/personal-web",
    authorName: "Personal Web Template",
  },
};
