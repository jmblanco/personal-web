import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { CopyEmailButton } from "@/components/ui/copy-email-button";
import { JmbgInitials } from "@/components/brand/logo";
import { SITE_PROFILE } from "@/content/profile";

export function Hero() {
  const { personal, focusDomains, social } = SITE_PROFILE;

  return (
    <section className="pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Cabecera con Iniciales + Identidad */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <JmbgInitials size="lg" />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                {personal.name}
              </h1>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                {personal.role}
              </p>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            <span>{personal.location}</span>
          </div>
        </div>

        {/* Propuesta de valor y bio directa */}
        <div className="space-y-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
          <p>
            Lidero la arquitectura técnica y el desarrollo en{" "}
            <a
              href={personal.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4 hover:decoration-blue-500 dark:hover:decoration-blue-400 transition-colors"
            >
              {personal.company}
            </a>{" "}
            {personal.parentCompany ? `(${personal.parentCompany})` : ""}. {personal.bio.lead.replace(/^Lidero.*?\)\.\s*/, "")}
          </p>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            {personal.bio.secondary}
          </p>
        </div>

        {/* Ficha de datos clave / UX Scannability */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 px-4 rounded-xl bg-neutral-100/70 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800/80 text-xs mb-8">
          <div>
            <span className="block text-neutral-400 dark:text-neutral-500 font-mono text-[10px] uppercase">
              Organización
            </span>
            <span className="font-medium text-neutral-800 dark:text-neutral-200 mt-0.5 block truncate">
              {personal.parentCompany ? `${personal.parentCompany} / ${personal.company}` : personal.company}
            </span>
          </div>
          <div>
            <span className="block text-neutral-400 dark:text-neutral-500 font-mono text-[10px] uppercase">
              Ubicación
            </span>
            <span className="font-medium text-neutral-800 dark:text-neutral-200 mt-0.5 block truncate">
              {personal.location}
            </span>
          </div>
          <div>
            <span className="block text-neutral-400 dark:text-neutral-500 font-mono text-[10px] uppercase">
              Experiencia
            </span>
            <span className="font-medium text-neutral-800 dark:text-neutral-200 mt-0.5 block">
              {personal.experienceYears}
            </span>
          </div>
          <div>
            <span className="block text-neutral-400 dark:text-neutral-500 font-mono text-[10px] uppercase">
              Base / Cert
            </span>
            <span className="font-medium text-neutral-800 dark:text-neutral-200 mt-0.5 block truncate">
              {personal.credentialsBadge}
            </span>
          </div>
        </div>

        {/* En qué estoy enfocado ahora */}
        <div className="mb-8 pt-6 border-t border-neutral-200/70 dark:border-neutral-800/70">
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
            Foco actual de trabajo
          </h2>
          <div className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {focusDomains.map((focus) => (
              <p key={focus.number} className="flex items-start gap-2">
                <span className="text-neutral-400 dark:text-neutral-600 font-mono select-none">
                  {focus.number}
                </span>
                <span>
                  <strong className="text-neutral-900 dark:text-neutral-200 font-medium">
                    {focus.title}:
                  </strong>{" "}
                  {focus.description}
                </span>
              </p>
            ))}
          </div>
        </div>

        {/* Canales de contacto directos */}
        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-neutral-200 dark:border-neutral-800 text-sm">
          <a
            href={social.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-xs sm:text-sm"
          >
            <LinkedInIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href={social.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium text-xs sm:text-sm"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <span className="text-neutral-300 dark:text-neutral-700 hidden sm:inline">|</span>
          <CopyEmailButton email={personal.email} />
        </div>
      </div>
    </section>
  );
}
