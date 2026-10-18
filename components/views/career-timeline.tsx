import { CAREER_HISTORY, EDUCATION_LIST } from "@/content/career";

export function CareerTimeline() {
  return (
    <section id="trayectoria" className="py-14 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white">
            Trayectoria Profesional
          </h2>
          <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
            2010 — Presente
          </span>
        </div>

        <div className="space-y-10">
          {CAREER_HISTORY.map((item) => (
            <article key={item.role} className="space-y-2.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="font-semibold text-base text-neutral-900 dark:text-neutral-100">
                    {item.role}
                  </h3>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                    {item.company} · {item.location}
                  </div>
                </div>
                <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono shrink-0">
                  {item.period}
                </span>
              </div>

              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed pt-0.5">
                {item.summary}
              </p>

              <ul className="space-y-1.5 pt-1">
                {item.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2"
                  >
                    <span className="text-neutral-400 dark:text-neutral-600 select-none font-mono text-xs mt-0.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-1.5">
                {item.skills.map((skill) => (
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

        {/* Formación y base académica */}
        <div className="mt-12 pt-8 border-t border-neutral-200/70 dark:border-neutral-800/70">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
            Formación &amp; Certificaciones
          </h3>
          <div className="space-y-3">
            {EDUCATION_LIST.map((edu) => (
              <div key={edu.degree} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 text-sm">
                <div>
                  <span className="font-semibold text-neutral-900 dark:text-white">{edu.degree}</span>
                  <span className="text-neutral-500 dark:text-neutral-400"> — {edu.institution}</span>
                </div>
                <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">{edu.period}</span>
              </div>
            ))}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 text-sm pt-1">
              <div>
                <span className="font-semibold text-neutral-900 dark:text-white">PSM II (Professional Scrum Master II)</span>
                <span className="text-neutral-500 dark:text-neutral-400"> — Scrum.org</span>
              </div>
              <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">Certificación</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
