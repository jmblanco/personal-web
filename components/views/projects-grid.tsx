import { FEATURED_PROJECTS } from "@/content/projects";
import { ArrowUpRight } from "lucide-react";

export function ProjectsGrid() {
  return (
    <section id="proyectos" className="py-14 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white">
              Proyectos &amp; Código
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Herramientas de plataforma, automatización y experimentos públicos.
            </p>
          </div>
          <a
            href="https://github.com/jmblanco"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors inline-flex items-center gap-1 shrink-0 ml-3"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        <div className="divide-y divide-neutral-200/60 dark:divide-neutral-800/60">
          {FEATURED_PROJECTS.map((project) => (
            <article key={project.title} className="group py-5 first:pt-0 last:pb-0 space-y-2">
              <div className="flex items-baseline justify-between gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-base text-neutral-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ) : (
                  <span className="font-semibold text-base text-neutral-900 dark:text-neutral-100">
                    {project.title}
                  </span>
                )}
                <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 shrink-0">
                  {project.category}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-neutral-500 dark:text-neutral-500"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
