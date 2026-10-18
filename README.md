# Personal Tech Space & Portfolio Template

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.3-23272f?style=for-the-badge&logo=react&logoColor=61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)

<p align="center">
  <b>Una plantilla open-source, sobria y de alto rendimiento para arquitectos de software, tech leads y desarrolladores.</b>
</p>

[🏛️ Arquitectura](./docs/ARCHITECTURE.md) · [🚀 Despliegue Rápido](#-c%C3%B3mo-replicar-y-desplegar-tu-propia-web-en-5-minutos) · [🛠️ Personalización](#%EF%B8%8F-gu%C3%ADa-de-personalizaci%C3%B3n-zero-code-refactor) · [🤝 Guía de Contribución](./CONTRIBUTING.md) · [📄 Licencia](./LICENSE)

</div>

---

## 💡 ¿Por qué este proyecto?

Muchos portfolios y webs personales caen en dos extremos:
1. Diseños genéricos saturados de animaciones pesadas y librerías innecesarias de cientos de kilobytes.
2. Plantillas rígidas donde los textos, bio y enlaces están hardcodeados en el JSX, requiriendo modificar decenas de ficheros para adaptarlas a otro perfil.

Este repositorio resuelve ambos problemas:
- **Doble Perspectiva de Usuario (Dual Mode):**
  - **Executive View:** Una lectura editorial minimalista pensada para reclutadores, directores técnicos y ejecutivos (*scannability* inmediato).
  - **Terminal View:** Una interfaz interactiva con look de consola UNIX (`whoami`, `career.log`, `projects/`, `stack.cfg`) para desarrolladores e ingenieros de sistemas.
- **Config-Driven Architecture:** **El 100% de la identidad, biografía, enlaces sociales, trayectoria y proyectos se configura desde `content/`**. No necesitas tocar componentes visuales para hacerla tuya.
- **Diseño Ultra Rápido y Accesible:** Cero JS innecesario, Tailwind CSS v4, soporte Dark/Light Mode nativo sin flashes con `next-themes`, y cumplimiento WCAG AA+.

---

## 🧱 Stack Tecnológico

| Capa | Tecnología | Justificación Técnica |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org) (App Router + Turbopack) | Generación estática SSG, rendimiento extremo y routing moderno. |
| **Librería UI** | [React 19](https://react.dev) | Arquitectura de componentes funcionales puros. |
| **Lenguaje** | [TypeScript 5](https://www.typescriptlang.org) | Tipado estricto en modelos de datos, props y configs (`strict: true`). |
| **Estilos** | [Tailwind CSS v4](https://tailwindcss.com) | Motor CSS ultraligero y libre de abstracciones complejas. |
| **Iconografía** | [Lucide React](https://lucide.dev) | Iconos SVG optimizados y cargados bajo demanda. |
| **Temas** | `next-themes` | Conmutador de modo claro/oscuro persistente y sin *hydration mismatch*. |

---

## 🚀 Cómo replicar y desplegar tu propia web (en 5 minutos)

### 1. Haz un Fork o clona el repositorio
Haz clic en el botón **`Use this template`** o **`Fork`** en la cabecera del repositorio de GitHub:

```bash
git clone https://github.com/TU_USUARIO/personal-web.git
cd personal-web
```

### 2. Instala dependencias

```bash
npm install
```

### 3. Ejecuta el entorno de desarrollo local

```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 🛠️ Guía de Personalización (Zero-Code Refactor)

Todo el contenido que ves en la web está centralizado en el directorio [`content/`](./content):

```text
content/
├── profile.ts   # 👤 Identidad, nombre, bio, correo, redes sociales, terminal y foco
├── career.ts    # 💼 Historial laboral, hitos de carrera y formación académica
└── projects.ts  # 🚀 Proyectos destacados, repositorios GitHub y etiquetas
```

### Paso a paso para poner tus datos:

#### A. Identidad y Bio ([`content/profile.ts`](./content/profile.ts))
Edita el objeto `SITE_PROFILE` con tu información:
```typescript
export const SITE_PROFILE: ProfileConfig = {
  personal: {
    name: "Tu Nombre",
    fullName: "Tu Nombre Completo",
    initials: "TN",
    role: "Senior Software Engineer / Cloud Architect",
    company: "Tu Empresa",
    companyUrl: "https://tuempresa.com",
    location: "Madrid, España",
    experienceYears: "+10 años",
    credentialsBadge: "AWS Certified · CKA",
    email: "tuemail@dominio.com",
    bio: {
      lead: "Resumen de impacto en tu organización...",
      secondary: "Trayectoria en diseño de sistemas...",
    },
  },
  social: {
    github: { username: "tuusuario", url: "https://github.com/tuusuario" },
    linkedin: { username: "tuusuario", url: "https://linkedin.com/in/tuusuario" },
  },
};
```

#### B. Proyectos ([`content/projects.ts`](./content/projects.ts))
Añade tus herramientas o proyectos open-source en `FEATURED_PROJECTS`.

#### C. Trayectoria ([`content/career.ts`](./content/career.ts))
Configura tus roles profesionales y certificaciones académicas en `CAREER_HISTORY` y `EDUCATION_LIST`.

---

## 📦 Despliegue en Producción

### Opción 1: GitHub Pages (Gratuito, Automático y Recomendado)
El proyecto incluye un pipeline nativo de GitHub Actions ([`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)) configurado con exportación estática (`output: "export"`) y detección automática del subcamino del repositorio (`basePath`).

1. Sube tu código a la rama `main` en GitHub.
2. En tu repositorio, entra en **Settings > Pages**.
3. En **Build and deployment > Source**, selecciona **`GitHub Actions`**.
4. ¡Listo! Tu web se compilará y desplegará automáticamente en:
   ```text
   https://<tu-usuario>.github.io/<tu-repositorio>/
   ```
> [!TIP]
> **¿Quieres mantener tu repositorio público pero sin tus datos personales subidos a las ramas de Git?**  
> El proyecto soporta inyección de datos personales mediante GitHub Secrets (`CUSTOM_PROFILE_B64` y `CUSTOM_CAREER_B64`) en tiempo de compilación. Consulta la sección de privacidad en la **[Guía de GitHub Pages](./docs/DEPLOYMENT_GITHUB_PAGES.md#-privacidad-y-despliegue-con-tus-datos-personales-sin-pii-en-el-repo)**.

👉 Consulta la **[Guía detallada de despliegue en GitHub Pages](./docs/DEPLOYMENT_GITHUB_PAGES.md)** con instrucciones para dominios personalizados.

### Opción 2: Vercel
También puedes conectar tu repositorio directamente en Vercel con un solo clic:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjmblanco%2Fpersonal-web)

### Opción 3: Contenedor OCI / Docker & Docker Compose
Construye la imagen OCI lista para producción con servidor NGINX sin privilegios (puerto 8080):

```bash
# Con Docker Compose
docker compose up -d

# O con Docker CLI
docker build -t personal-web .
docker run -d -p 8080:8080 personal-web
```

### Opción 4: Kubernetes (Helm Chart o Kustomize)
El repositorio incluye manifiestos listos para producción con sondas de salud (`/healthz`), contexto de seguridad no-root y configuración de Ingress:

```bash
# Vía Helm con values personalizables
helm upgrade --install personal-web ./deploy/helm/personal-web

# O vía Kustomize (GitOps-ready con ArgoCD / Flux)
kubectl apply -k deploy/kustomize/overlays/production
```

👉 Consulta la **[Guía completa de Contenedores y Kubernetes](./docs/DEPLOYMENT_CONTAINERS_AND_K8S.md)**.

---

## 📐 Documentación Técnica y Arquitectura

Para profundizar en el diseño y los estándares del proyecto, consulta:
- **[Documento de Arquitectura del Sistema](./docs/ARCHITECTURE.md)** (Diagrama de capas, flujos y componentes).
- **[Índice de Documentación y ADRs](./docs/README.md)**.
- **[ADR 0001: Principios de Arquitectura](./docs/adr/0001-stack-and-architecture.md)** (Simplicidad Karpathy y tipado estricto Pocock).
- **[ADR 0002: Perfil Orientado a Configuración](./docs/adr/0002-config-driven-profile.md)**.
- **[ADR 0003: Estrategia de Despliegue Estático](./docs/adr/0003-deployment-github-pages-and-vercel.md)**.
- **[Vocabulario Ubicuo del Proyecto](./GLOSSARY.md)**.
- **[Reglas de Ingeniería](./AGENTS.md)**.

---

## 🤝 Cómo Contribuir

¡Las contribuciones, ideas y sugerencias son muy bienvenidas! Por favor, revisa nuestra **[Guía de Contribución](./CONTRIBUTING.md)** antes de abrir un Pull Request o proponer cambios.

---

## 📄 Licencia

Este proyecto está bajo la licencia **[MIT](./LICENSE)**. Eres libre de usarlo, forkerarlo, modificarlo y adaptarlo a tu propio uso personal o profesional.
