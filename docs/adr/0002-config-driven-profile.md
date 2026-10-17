# 0002. Desacoplamiento de Textos e Identidad en Capa de Configuración (Config-Driven Profile)

* **Fecha**: 2026-10-17
* **Estado**: Aceptado

---

## Contexto

El proyecto nació como una web personal para Jose Miguel Blanco. Al abrirse como plantilla open source para que otros ingenieros y arquitectos puedan realizar un fork y desplegar su propia web en minutos, el código previo contenía strings hardcodeados en los componentes (`hero.tsx`, `terminal-view.tsx`, `executive-view.tsx`, `footer.tsx`, `contact-section.tsx`, `navbar.tsx`, etc.).

Esto obligaba a quien hiciera un fork a inspeccionar y modificar múltiples archivos de UI, aumentando la probabilidad de rotura de estilos, inconsistencias o textos residuales.

---

## Decisión

1. **Centralización en `content/profile.ts`**:
   - Crear una interfaz tipada `ProfileConfig` y un objeto canónico `SITE_PROFILE` que agrupe:
     - Datos personales: nombre, rol, empresa, bio corta, bio extendida, años de experiencia, badge de formación/certificaciones, email.
     - Enlaces y usuarios sociales: GitHub, LinkedIn.
     - Configuración de la vista Terminal: usuario, hostname UNIX, directorio de trabajo y estado del sistema.
     - Dominios de foco técnico y textos de la sección de contacto.
2. **Generación Dinámica de Metadata**:
   - `app/layout.tsx` deriva automáticamente títulos SEO, etiquetas OpenGraph y tags de autor desde `SITE_PROFILE`.
3. **Consumo Declarativo en Componentes**:
   - Los componentes visuales consumen directamente las propiedades de `SITE_PROFILE`, quedando como piezas puramente reutilizables y sin texto embebido no configurable.

---

## Consecuencias

* **Positivas**:
  - Personalización en menos de 5 minutos mediante edición de un solo fichero (`content/profile.ts`).
  - Mantenimiento centralizado del perfil para ambas vistas (`ExecutiveView` y `TerminalView`).
  - Cumple al 100% con las mejores prácticas de proyectos open-source distribuibles como plantillas (template repositories).
* **A tener en cuenta**:
  - Cualquier nuevo campo que se muestre en pantalla debe incluirse primero en el contrato `ProfileConfig` para mantener el tipado estricto de TypeScript.
