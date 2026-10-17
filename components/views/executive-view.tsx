import { CAREER_HISTORY, EDUCATION_LIST } from "@/content/career";
import { FEATURED_PROJECTS } from "@/content/projects";
import { CopyEmailButton } from "@/components/ui/copy-email-button";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { SITE_PROFILE } from "@/content/profile";

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

      {/* Recorrido Profesional */}
      <section className="space-y-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Trayectoria Profesional
          </h2>
          <span className="font-mono text-xs text-neutral-400">2010 — Presente</span>
        </div>

        <div className="space-y-8 divide-y divide-neutral-200/60 dark:divide-neutral-800/60">
          {CAREER_HISTORY.map((role) => (
            <article key={role.role} className="pt-6 first:pt-0 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-bold text-base text-neutral-900 dark:text-white">
                  {role.role}
                </h3>
                <span className="font-mono text-xs text-neutral-400">{role.period}</span>
              </div>
              <div className="text-xs text-neutral-500 font-medium">
                {role.company} · {role.location}
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 pt-1 leading-relaxed">
                {role.summary}
              </p>

              <ul className="space-y-1.5 pt-1">
                {role.highlights.map((h, i) => (
                  <li key={i} className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2">
                    <span className="text-neutral-400 select-none font-mono text-xs mt-0.5">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {role.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 border border-neutral-200/50 dark:border-neutral-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Formación */}
        <div className="mt-8 pt-6 border-t border-neutral-200/70 dark:border-neutral-800/70">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
            Formación &amp; Certificaciones
          </h3>
          <div className="space-y-2 text-sm">
            {EDUCATION_LIST.map((edu) => (
              <div key={edu.degree} className="flex justify-between items-baseline">
                <div>
                  <span className="font-semibold text-neutral-900 dark:text-white">{edu.degree}</span>
                  <span className="text-neutral-500"> — {edu.institution}</span>
                </div>
                <span className="font-mono text-xs text-neutral-400">{edu.period}</span>
              </div>
            ))}
            <div className="flex justify-between items-baseline pt-1">
              <div>
                <span className="font-semibold text-neutral-900 dark:text-white">PSM II (Professional Scrum Master II)</span>
                <span className="text-neutral-500"> — Scrum.org</span>
              </div>
              <span className="font-mono text-xs text-neutral-400">Certificación</span>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos & Código */}
      <section className="space-y-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              Proyectos &amp; Open Source
            </h2>
          </div>
          <a
            href="https://github.com/jmblanco"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors inline-flex items-center gap-1 font-mono"
          >
            github.com/jmblanco ↗
          </a>
        </div>

        <div className="divide-y divide-neutral-200/60 dark:divide-neutral-800/60">
          {FEATURED_PROJECTS.map((proj) => (
            <article key={proj.title} className="py-4 first:pt-0 last:pb-0 space-y-1.5">
              <div className="flex justify-between items-baseline">
                {proj.githubUrl ? (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-base text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>{proj.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-40 hover:opacity-100" />
                  </a>
                ) : (
                  <span className="font-bold text-base text-neutral-900 dark:text-white">{proj.title}</span>
                )}
                <span className="text-[11px] font-mono text-neutral-400">{proj.category}</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {proj.description}
              </p>
              <div className="text-[11px] font-mono text-neutral-400">
                {proj.tags.join(" · ")}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Cierre / Conversación */}
      <section className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">
          ¿Conversamos sobre arquitectura y escala?
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
          Siempre con ganas de intercambiar puntos de vista sobre sistemas distribuidos, plataformas internas, cultura de ingeniería y retos de tecnología a gran escala.
        </p>
        <div className="flex items-center gap-4 text-xs font-mono">
          <CopyEmailButton email={personal.email} />
          <a
            href={social.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-medium hover:opacity-90 transition-opacity"
          >
            Conectar en LinkedIn ↗
          </a>
        </div>
      </section>
    </div>
  );
}
