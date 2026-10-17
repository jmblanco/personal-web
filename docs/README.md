# Documentación del Proyecto: Arquitectura & Guías

Bienvenido a la carpeta de documentación técnica de **Personal Web / Portfolio Open Source**.

---

## 📚 Índice de Documentación

### 1. Arquitectura del Sistema
- [**Documento de Arquitectura (`docs/ARCHITECTURE.md`)**](./ARCHITECTURE.md): Diagrama global del sistema, diseño de componentes duales (Executive/Terminal), modelo de datos y flujo de compilación estática.

### 2. Registros de Decisiones de Arquitectura (ADRs)
En [`docs/adr/`](./adr/) se documentan formalmente las decisiones de ingeniería que definen la estructura y evolución del proyecto:
- [**ADR 0001: Arquitectura Base y Principios de Ingeniería**](./adr/0001-stack-and-architecture.md): Principios Karpathy (KISS, Ground Truth) & Matt Pocock (alineación estricta, tipado riguroso).
- [**ADR 0002: Desacoplamiento de Textos e Identidad (Config-Driven Profile)**](./adr/0002-config-driven-profile.md): Centralización de datos en `content/profile.ts` para permitir fork y personalización inmediata sin tocar código JSX.
- [**ADR 0003: Estrategia de Despliegue Estático (GitHub Pages & Vercel)**](./adr/0003-deployment-github-pages-and-vercel.md): Exportación estática `output: "export"`, gestión de `basePath` dinámico y workflow CI/CD.

### 3. Guías Operativas
- [**Guía de Despliegue en GitHub Pages**](./DEPLOYMENT_GITHUB_PAGES.md): Configuración paso a paso en GitHub Settings y GitHub Actions con soporte de subcamino automático y dominios personalizados.
- [**Guía de Contenedores OCI & Kubernetes (Helm / Kustomize)**](./DEPLOYMENT_CONTAINERS_AND_K8S.md): Compilación multi-stage con Nginx unprivileged, docker-compose, Helm Chart con `values.yaml` y Kustomize base/overlays.

### 4. Estructura y Estándares de Repositorio
- [**`AGENTS.md`**](../AGENTS.md): Reglas de ingeniería y protocolos para asistentes de IA y desarrollo guiado por pruebas.
- [**`GLOSSARY.md`**](../GLOSSARY.md): Vocabulario ubicuo y mapeo exacto de componentes y conceptos.
- [**`CONTRIBUTING.md`**](../CONTRIBUTING.md): Guía de contribución para la comunidad open-source.
- [**`LICENSE`**](../LICENSE): Licencia de código abierto MIT.
