import { CopyEmailButton } from "@/components/ui/copy-email-button";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { SITE_PROFILE } from "@/content/profile";
import { CareerTimeline } from "@/components/views/career-timeline";
import { ProjectsGrid } from "@/components/views/projects-grid";
import { ContactSection } from "@/components/views/contact-section";

export function ExecutiveView() {
  const { personal, social } = SITE_PROFILE;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-16 py-10 animate-in fade-in duration-300">
      {/* Header Principal */}
      <header className="space-y-6 border-b border-neutral-200 dark:border-neutral-800 pb-10">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            Tech Leadership &amp; Architecture
          </span>
          <span className="text-xs font-mono text-neutral-500">{personal.location}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
          {personal.name}
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-700 dark:text-neutral-300 font-light leading-relaxed">
          {personal.role} en{" "}
          <a
            href={personal.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 dark:text-white font-medium underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-blue-500 transition-colors"
          >
            {personal.company} {personal.parentCompany ? `(${personal.parentCompany})` : ""}
          </a>
          . Definiendo la estrategia técnica corporativa, construyendo plataformas de software que aguantan la escala y capacitando a equipos de ingeniería autónomos.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-2">
          <CopyEmailButton email={personal.email} />
          <span className="text-neutral-300 dark:text-neutral-700">|</span>
          <a
            href={social.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1 font-medium"
          >
            <LinkedInIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
          <a
            href={social.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors inline-flex items-center gap-1 font-medium"
          >
            <GitHubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </header>

      {/* Tres Pilares de Criterio de Arquitectura */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div className="space-y-2">
          <div className="font-mono text-xs text-neutral-400">01 / ESCALA</div>
          <h3 className="font-bold text-neutral-900 dark:text-white">Arquitectura Resiliente</h3>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-xs sm:text-sm">
            Sistemas distribuidos desacoplados y orientados a eventos para dar soporte a millones de operaciones en el ecosistema bancario y universitario.
          </p>
        </div>
        <div className="space-y-2">
          <div className="font-mono text-xs text-neutral-400">02 / PLATAFORMA</div>
          <h3 className="font-bold text-neutral-900 dark:text-white">Internal Developer Platforms</h3>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-xs sm:text-sm">
            Kubernetes y cloud como autoservicio para que los equipos desplieguen con máxima autonomía, seguridad y velocidad.
          </p>
        </div>
        <div className="space-y-2">
          <div className="font-mono text-xs text-neutral-400">03 / CULTURA</div>
          <h3 className="font-bold text-neutral-900 dark:text-white">Credibilidad Hands-on</h3>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-xs sm:text-sm">
            15+ años desde backend y bases de datos hasta la dirección ejecutiva. Liderar con criterio habiendo estado en el código.
          </p>
        </div>
      </section>

      {/* Trayectoria Profesional Reutilizable */}
      <CareerTimeline />

      {/* Proyectos & Código Reutilizable */}
      <ProjectsGrid />

      {/* Cierre / Conversación */}
      <ContactSection />
    </div>
  );
}
