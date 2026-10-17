# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/),
y este proyecto se adhiere a [Semantic Versioning (SemVer)](https://semver.org/lang/es/).

---

## [1.1.0] - 2026-10-17

### Added
- **Consola Interactiva en Tiempo Real en `TerminalView`**:
  - Input CLI funcional al pie de la terminal con soporte de autocompletado con tecla `Tab`.
  - Comandos integrados: `help`, `whoami`, `career`, `projects`, `stack`, `contact`, `theme [dark|light]`, `clear` y `exit`.
  - Historial de comandos navegable con flechas arriba/abajo (`↑`/`↓`).
- **Sincronización de URL y Deep-Linking de Modos**:
  - Parámetro opcional en URL `?view=terminal` o `?view=executive` permitiendo compartir enlaces directos a la consola o a la vista ejecutiva.
- **Optimizaciones de SEO y Metadatos**:
  - `app/robots.ts` nativo con enlace automático al sitemap.
  - `app/sitemap.ts` nativo para indexación en motores de búsqueda.
- **Workflow de Validación Continua (CI)**:
  - Pipeline de GitHub Actions en `.github/workflows/ci.yml` para validar `lint` y `build` en pull requests.
- **Gobernanza y Plantillas Open Source**:
  - Issue templates para reportes de bugs (`.github/ISSUE_TEMPLATE/bug_report.md`) y peticiones de características (`.github/ISSUE_TEMPLATE/feature_request.md`).
  - Pull Request template estructurado (`.github/PULL_REQUEST_TEMPLATE.md`).
  - Atribución opcional configurable en `content/profile.ts` y pie de página en `components/layout/footer.tsx`.

### Changed
- **Modularización de `ExecutiveView`**: Reutilización directa de los submódulos `CareerTimeline`, `ProjectsGrid` y `ContactSection` eliminando duplicidad de código.
- **Limpieza de Assets**: Eliminación de SVGs por defecto no utilizados de Next.js en `public/`.

---

## [1.0.0] - 2026-10-17

### Added
- **Arquitectura Dual-View**:
  - `ExecutiveView`: Vista editorial técnica minimalista enfocada en *scannability*, liderazgo y arquitectura empresarial.
  - `TerminalView`: Emulador interactivo de consola UNIX con pestañas para `whoami`, `career.log`, `projects/` y `stack.cfg`.
  - `ViewModeSwitch` y `ViewModeContext`: Selector de modo persistente mediante `localStorage`.
- **Desacoplamiento Estricto de Configuración (`content/profile.ts`)**:
  - Extracción completa de textos, datos biográficos, empresa, credenciales, enlaces sociales y prompts de terminal hacia configuración tipada sin tocar JSX.
- **Tipado TypeScript Estricto (`types/index.ts`)**:
  - Modelos formales para `ProfileConfig`, `RoleExperience`, `EducationItem`, `PhilosophyPillar` y `ProjectItem`.
- **Empaquetado OCI y Seguridad NGINX Hardened**:
  - `Dockerfile` multi-stage build con runtime seguro sobre `nginxinc/nginx-unprivileged:alpine-slim` (puerto 8080, UID 101, sin root).
  - Configuración NGINX desacoplada en `deploy/docker/nginx/default.conf` con `server_tokens off`.
  - Cabeceras de seguridad estrictas en `deploy/docker/nginx/security-headers.conf` (CSP, Permissions-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy).
  - `docker-compose.yml` para arranque y previsualización local con un solo comando.
  - Endpoint de comprobación de salud en `/healthz` con probe de contenedor activa.
- **Despliegues en Kubernetes (Helm & Kustomize)**:
  - Chart de Helm completo en `deploy/helm/personal-web/` con soporte de `values.yaml` agnóstico a registros privados.
  - Manifiestos de Kustomize en `deploy/kustomize/` con arquitectura `base` y `overlays/production` (GitOps-ready).
- **Pipeline CI/CD para GitHub Pages**:
  - Workflow nativo `.github/workflows/deploy.yml` con detección automática de subruta (`basePath`) y exportación estática sin coste.
- **Documentación Open-Source Exhaustiva**:
  - `README.md` visual con badges, justificación técnica y guía de replicación en 5 minutos.
  - `CONTRIBUTING.md`: Guía de contribución con flujo de desarrollo y pruebas.
  - `LICENSE`: Licencia MIT de código abierto.
  - `docs/ARCHITECTURE.md`: Diagrama del sistema en Mermaid y estructura modular.
  - `docs/DEPLOYMENT_GITHUB_PAGES.md`: Guía detallada de despliegue en GitHub Pages.
  - `docs/DEPLOYMENT_CONTAINERS_AND_K8S.md`: Guía de Docker, Helm y Kustomize.
  - Registros de Decisiones de Arquitectura:
    - `docs/adr/0001-stack-and-architecture.md`: Principios Karpathy/Pocock.
    - `docs/adr/0002-config-driven-profile.md`: Desacoplamiento de textos.
    - `docs/adr/0003-deployment-github-pages-and-vercel.md`: Estrategia de exportación estática.
- **Estandarización de Agentes de IA**:
  - `AGENTS.md`: Reglas del proyecto para asistentes de ingeniería.
  - Skills modulares en `.agents/skills/` (`align-and-plan`, `code-review`, `diagnose-bug`, `tdd-verify`, `version-bump`).
