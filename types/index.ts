export interface ProfileConfig {
  personal: {
    name: string;
    fullName: string;
    initials: string;
    role: string;
    company: string;
    companyUrl: string;
    parentCompany?: string;
    location: string;
    experienceYears: string;
    credentialsBadge: string;
    email: string;
    bio: {
      lead: string;
      secondary: string;
    };
  };
  focusDomains: Array<{
    number: string;
    title: string;
    description: string;
  }>;
  terminal: {
    user: string;
    hostname: string;
    directory: string;
    systemStatus: string;
    missionStatement: string;
  };
  social: {
    github: {
      username: string;
      url: string;
    };
    linkedin: {
      username: string;
      url: string;
    };
  };
  contactSection: {
    title: string;
    description: string;
    ctaLinkedIn: string;
  };
  openSourceAttribution?: {
    enabled: boolean;
    templateName?: string;
    templateUrl?: string;
    authorName?: string;
  };
}

export interface RoleExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  current: boolean;
  summary: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details?: string;
}

export interface PhilosophyPillar {
  title: string;
  subtitle: string;
  description: string;
  iconName: "ShieldCheck" | "Cpu" | "Users" | "GitBranch";
}

export interface ProjectItem {
  title: string;
  category: "Open Source" | "Platform & Infrastructure" | "Architecture" | "Tools";
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}
