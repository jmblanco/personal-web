# AGENTS.md — Reglas del Proyecto y Guía de Ingeniería

Bienvenido a **Web Personal**. Este repositorio sigue principios rigurosos de ingeniería de software asistida por IA, inspirados en las filosofías de **Andrej Karpathy** (simplicidad radical, ciclos de retroalimentación estrechos, verificación contra la realidad) y **Matt Pocock** (alineación previa con preguntas, lenguaje ubicuo, tipado estricto y revisión en dos ejes).

---

## 1. Principios Fundamentales (Karpathy × Pocock)

### A. Simplicidad Radical (Occam's Razor / Karpathy Style)
* **Evita la sobreingeniería prematura**: No crees abstracciones complejas, patrones de fábrica o arquitectura en capas para algo que se resuelve limpiamente en 20 líneas de código.
* **Archivos compactos y auto-contenidos**: Favorece componentes y módulos legibles de arriba a abajo.
* **Sin "Vibe Coding" a ciegas**: No generes grandes bloques de código sin entender la razón de cada función. El código debe ser directo, predecible y fácil de depurar.

### B. Ciclos de Retroalimentación Estrechos (*Tight Feedback Loops*)
* **Verificación con la realidad (Ground Truth)**: Nunca asumas que el código funciona solo porque "compila mentalmente". Ejecuta el comando de validación correspondiente (`npm.cmd run build`, pruebas o linter) antes de dar por buena una tarea.
* **Repro-First en Diagnóstico de Bugs**: Antes de tocar una sola línea de código para arreglar un error, construye un script, prueba unitaria o comando que reproduzca el fallo (**fase roja**). Si no puedes reproducirlo de forma determinista, no intentes adivinar la solución.

### C. Alineación Previa al Desarrollo (*Grilling before Coding*)
* **Pregunta antes de asumir**: Si un requisito, layout visual o decisión de diseño es ambiguo, utiliza preguntas interactivas antes de escribir código. Es 10 veces más rápido alinear expectativas al inicio que refactorizar después.
* **Lenguaje Ubicuo**: Consulta y mantén actualizado [`GLOSSARY.md`](./GLOSSARY.md). No inventes términos nuevos si ya existe un concepto definido en el proyecto.

---

## 2. Convenciones Técnicas de Desarrollo

### Entorno y Ejecución (Windows Powershell)
* **Gestor de paquetes**: Utiliza `npm.cmd` o `npx.cmd` para comandos en la terminal (ejemplo: `npm.cmd test`, `npx.cmd vitest run`).
* **Node.js**: Entorno compatible con Node 22+.

### Código y TypeScript
* **TypeScript Estricto**: Prohibido el uso de `any`. Define tipos explícitos para props, modelos de datos y respuestas de API.
* **Componentes**:
  * Funcionales y declarativos.
  * Props tipadas mediante `interface` o `type`.
  * Nombrado en PascalCase para componentes (`HeroSection.tsx`) y kebab-case o camelCase para utilidades (`format-date.ts`).
* **Estilos y UI**:
  * HTML semántico (uso correcto de `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<article>`).
  * Estilos accesibles (contraste WCAG AA+, atributos `aria-*` cuando aplique, estados `:focus-visible`).
  * Sin librerías innecesarias de 200KB si una solución CSS / Tailwind ligera es suficiente.

---

## 3. Skills y Flujos Disponibles en el Proyecto

En la carpeta `.agents/skills/` dispones de procedimientos paso a paso:
1. **`align-and-plan`**: Procedimiento de preguntas y especificación técnica antes de implementar nuevas páginas o componentes.
2. **`diagnose-bug`**: Flujo estricto de diagnóstico de errores (construir loop de fallo -> aislar mutación -> parche quirúrgico -> verificar en verde).
3. **`code-review`**: Auditoría en dos ejes (Cumplimiento de especificación + Estándares de calidad y anti-patrones).
4. **`tdd-verify`**: Ciclo de desarrollo guiado por pruebas y validación real.
5. **`version-bump`**: Protocolo de incremento de versión SemVer sincronizando `package.json`, `CHANGELOG.md`, `deploy/helm/personal-web/Chart.yaml` y tags Git.

---

## 4. Estructura del Repositorio

```text
├── AGENTS.md               # Este archivo de reglas
├── GLOSSARY.md             # Vocabulario oficial del proyecto
├── docs/                   # Documentación y registros de decisiones (ADRs)
│   └── adr/                # Architectural Decision Records
├── .agents/
│   └── skills/             # Runbooks de procedimientos para el agente
├── app/                    # Rutas y páginas de Next.js App Router
├── components/             # Componentes de interfaz
└── content/                # Datos y artículos MDX
```

<!-- BEGIN:nextjs-agent-rules -->
## Next.js Rules
This project uses Next.js 15+ App Router with TypeScript and Tailwind CSS.
<!-- END:nextjs-agent-rules -->
