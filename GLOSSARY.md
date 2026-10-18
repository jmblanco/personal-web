# GLOSSARY.md — Vocabulario Ubicuo del Proyecto

Este glosario define los términos de dominio para **Web Personal**. Ayuda a que el desarrollador y el agente de IA hablen el mismo idioma sin ambigüedad ni verbosidad innecesaria.

---

### Términos de Dominio

| Término | Definición | Contexto / Ubicación |
| :--- | :--- | :--- |
| **Hero** | Sección principal de aterrizaje que contiene la propuesta de valor, presentación personal, fotografía/avatar y llamada a la acción principal (CTA). | `components/views/hero.tsx` |
| **Executive View** | Vista editorial minimalista de alto nivel pensada para lectura ágil de trayectoria y proyectos. | `components/views/executive-view.tsx` |
| **Terminal View** | Vista interactiva estilo consola UNIX (`whoami`, `career.log`, `projects/`, `stack.cfg`) para desarrolladores. | `components/views/terminal-view.tsx` |
| **View Mode Switch** | Conmutador interactivo para alternar entre vista Ejecutiva y Terminal con persistencia de estado. | `components/ui/view-mode-switch.tsx` |
| **Projects Grid** | Mosaico o lista interactiva de proyectos destacados con título, descripción concisa, etiquetas de tecnologías (badges) y enlaces a repositorios. | `components/views/projects-grid.tsx` |
| **Career Timeline** | Componente cronológico que muestra la trayectoria profesional, roles laborales, formación o hitos clave. | `components/views/career-timeline.tsx` |
| **Contact Section** | Mecanismo para establecer contacto directo (enlaces a redes, correo electrónico con botón de copiado). | `components/views/contact-section.tsx` |
| **Theme Toggle** | Control interactivo para alternar entre modo claro (*light mode*) y modo oscuro (*dark mode*), con persistencia. | `components/ui/theme-toggle.tsx` |
| **Config-Driven Profile** | Arquitectura donde todos los datos e identidad residen en configuración desacoplada sin tocar código JSX. | `content/profile.ts` |
| **Ground Truth** | Verificación real mediante ejecución de pruebas o compilación antes de considerar finalizado un cambio. | Metodología de ingeniería |
