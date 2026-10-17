"use client";

import * as React from "react";
import { Copy, Check, ExternalLink } from "lucide-react";
import { CAREER_HISTORY, EDUCATION_LIST } from "@/content/career";
import { FEATURED_PROJECTS } from "@/content/projects";
import { SITE_PROFILE } from "@/content/profile";

export function TerminalView() {
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<"overview" | "career" | "projects" | "stack">("overview");
  const { personal, terminal, focusDomains, social } = SITE_PROFILE;

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 font-mono text-xs sm:text-sm animate-in fade-in duration-300">
      {/* Ventana de Terminal */}
      <div className="rounded-2xl bg-[#0b0c10] text-[#c5c6c7] border border-neutral-800 shadow-2xl overflow-hidden">
        {/* Cabecera / Barra de Título de la Ventana */}
        <div className="bg-[#14151b] px-4 py-3 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-xs" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-xs" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-xs" />
            <span className="ml-3 text-xs text-neutral-400 select-none hidden sm:inline">
              {terminal.user}@{terminal.hostname}: {terminal.directory}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{terminal.systemStatus}</span>
          </div>
        </div>

        {/* Barra de pestañas de navegación de comandos */}
        <div className="bg-[#0e0f14] px-4 py-2 border-b border-neutral-800/80 flex flex-wrap gap-2 text-xs">
          {[
            { id: "overview", cmd: "1. whoami" },
            { id: "career", cmd: "2. career.log" },
            { id: "projects", cmd: "3. ls -la projects/" },
            { id: "stack", cmd: "4. cat stack.cfg" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as typeof activeTab)}
              className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                activeTab === item.id
                  ? "bg-neutral-800 text-emerald-400 font-bold border border-emerald-500/30"
                  : "text-neutral-400 hover:text-white hover:bg-neutral-900"
              }`}
            >
              $ {item.cmd}
            </button>
          ))}
        </div>

        {/* Cuerpo de la Terminal */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Output 1: WHOAMI / OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <div className="text-neutral-500">$ whoami --verbose</div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {personal.fullName}
                </div>
                <div className="text-emerald-400 font-semibold">
                  {personal.role} @ {personal.company} {personal.parentCompany ? `(${personal.parentCompany})` : ""}
                </div>
                <div className="text-xs text-neutral-500">
                  {personal.location} · {personal.experienceYears} de experiencia
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#12131a] border border-neutral-800 space-y-2 text-xs leading-relaxed text-neutral-300">
                <div className="text-neutral-400 font-semibold">[MISSION STATEMENT]</div>
                <p>
                  {terminal.missionStatement}
                </p>
              </div>

              <div className="space-y-2 text-xs">
                <div className="text-neutral-500">$ tree ~/focus-domains/</div>
                <div className="pl-4 space-y-1 text-neutral-300">
                  {focusDomains.map((domain, idx) => (
                    <React.Fragment key={domain.number}>
                      <div className={idx === 0 ? "text-blue-400" : idx === 1 ? "text-emerald-400" : "text-purple-400"}>
                        {idx === focusDomains.length - 1 ? "└── " : "├── "}
                        {domain.number}_{domain.title.replace(/\s+/g, "_")}/
                      </div>
                      <div className="text-neutral-400 pl-4">
                        └── {domain.description}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 space-y-2">
                <div className="text-neutral-500">$ cat contact.sh</div>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    onClick={copyEmail}
                    className="px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "COPIED_TO_CLIPBOARD" : personal.email}</span>
                  </button>
                  <a
                    href={social.linkedin.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-colors flex items-center gap-1 text-xs"
                  >
                    <span>linkedin.sh</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={social.github.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded bg-neutral-800 border border-neutral-700 text-neutral-200 hover:bg-neutral-700 transition-colors flex items-center gap-1 text-xs"
                  >
                    <span>github.sh</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Output 2: CAREER LOG */}
          {activeTab === "career" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="text-neutral-500">$ cat /var/log/career.log</div>

              <div className="space-y-6">
                {CAREER_HISTORY.map((item, idx) => (
                  <div key={item.role} className="p-4 rounded-lg bg-[#12131a] border border-neutral-800 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between text-xs font-bold text-white">
                      <span>[{idx + 1}] {item.role}</span>
                      <span className="text-emerald-400 font-normal">{item.period}</span>
                    </div>
                    <div className="text-neutral-400 text-xs">
                      {item.company} · {item.location}
                    </div>
                    <p className="text-xs text-neutral-300 pt-1 leading-relaxed">
                      {item.summary}
                    </p>

                    <div className="pt-2 space-y-1">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="text-xs text-neutral-400 flex items-start gap-2">
                          <span className="text-emerald-500">→</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 text-[11px] text-neutral-500">
                      STACK: {item.skills.join(", ")}
                    </div>
                  </div>
                ))}

                {/* Formación */}
                <div className="p-4 rounded-lg bg-[#12131a] border border-neutral-800 space-y-2">
                  <div className="text-xs font-bold text-white">[ACADEMIC &amp; CERTS]</div>
                  {EDUCATION_LIST.map((edu) => (
                    <div key={edu.degree} className="text-xs text-neutral-300 flex justify-between">
                      <span>{edu.degree} — {edu.institution}</span>
                      <span className="text-neutral-500">{edu.period}</span>
                    </div>
                  ))}
                  <div className="text-xs text-neutral-300 flex justify-between pt-1">
                    <span>PSM II (Professional Scrum Master II) — Scrum.org</span>
                    <span className="text-emerald-400">CERTIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Output 3: PROJECTS */}
          {activeTab === "projects" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="text-neutral-500">$ ls -la ~/projects/</div>

              <div className="grid grid-cols-1 gap-4">
                {FEATURED_PROJECTS.map((proj) => (
                  <div key={proj.title} className="p-4 rounded-lg bg-[#12131a] border border-neutral-800 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-white text-sm">{proj.title}</span>
                      <span className="text-neutral-500">{proj.category}</span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-neutral-800/80">
                      <div className="text-[11px] text-neutral-500">
                        {proj.tags.join(" · ")}
                      </div>
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-emerald-400 hover:underline inline-flex items-center gap-1 font-semibold"
                        >
                          <span>git clone {proj.githubUrl}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Output 4: STACK */}
          {activeTab === "stack" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="text-neutral-500">$ cat /etc/architecture/capabilities.yaml</div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[#12131a] border border-neutral-800 space-y-2">
                  <div className="text-xs font-bold text-blue-400"># 01. Arquitectura &amp; Sistemas Distribuidos</div>
                  <div className="text-xs text-neutral-300 leading-relaxed">
                    Event-Driven Architecture (EDA) · Apache Kafka · Microservicios · CQRS &amp; Outbox · Domain-Driven Design (DDD) · Alta Disponibilidad
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#12131a] border border-neutral-800 space-y-2">
                  <div className="text-xs font-bold text-emerald-400"># 02. Cloud &amp; Platform Engineering</div>
                  <div className="text-xs text-neutral-300 leading-relaxed">
                    Kubernetes · Kind · Docker · AWS / Multi-cloud · Autoservicio de Infraestructura (IDP) · CI/CD · Observabilidad &amp; SLAs
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#12131a] border border-neutral-800 space-y-2">
                  <div className="text-xs font-bold text-purple-400"># 03. Ingeniería, Liderazgo &amp; Gobernanza</div>
                  <div className="text-xs text-neutral-300 leading-relaxed">
                    Node.js · TypeScript · Java / Spring · PostgreSQL · Redis · Scrum PSM II · Tech Due Diligence · Mentoría de Arquitectos
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
