# 0003. Estrategia de Despliegue Estático en GitHub Pages y Vercel

* **Fecha**: 2026-10-17
* **Estado**: Aceptado

---

## Contexto

El proyecto necesita soportar despliegues sin coste y con mínima fricción para cualquier desarrollador que haga fork del repositorio. Existen dos entornos principales:
1. **GitHub Pages (Prioridad inicial)**: Permite alojar la web directamente en el repositorio de GitHub sin necesidad de configurar cuentas en servicios externos.
2. **Vercel**: Alternativa habitual para proyectos Next.js que proporciona vistas previas en PRs y dominios personalizados automáticos.

El principal reto técnico al desplegar en GitHub Pages radica en que, salvo que el repositorio se llame `<usuario>.github.io`, la web se sirve bajo una ruta secundaria: `https://<usuario>.github.io/<nombre-repositorio>/`. Si no se configura un `basePath`, los recursos CSS, JS e imágenes generarán errores 404.

---

## Decisión

1. **Compilación Estática Pura (`output: "export"`)**:
   - Se configura `next.config.ts` con `output: "export"` e `images: { unoptimized: true }`.
   - Permite generar una carpeta `./out` con HTML, CSS y JS estáticos, prescindiendo de servidores Node.js en ejecución y habilitando compatibilidad total con GitHub Pages, S3, Cloudflare Pages o Vercel.

2. **Detección Dinámica del `basePath`**:
   - En `next.config.ts` se lee la variable de entorno `NEXT_PUBLIC_BASE_PATH`:
     ```typescript
     const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || "";
     const basePath = rawBasePath ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}` : undefined;
     ```
   - En el workflow oficial de GitHub Actions ([`.github/workflows/deploy.yml`](../../.github/workflows/deploy.yml)), la acción `actions/configure-pages@v5` calcula automáticamente el subcamino del repositorio y lo inyecta en `NEXT_PUBLIC_BASE_PATH`.
   - En entornos raíz (desarrollo local `localhost:3000` o Vercel con dominio raíz), `basePath` permanece indefinido (`/`), asegurando interoperabilidad sin cambios manuales.

---

## Consecuencias

* **Positivas**:
  - Despliegue automático a GitHub Pages tras cada commit en `main`.
  - Cero costes de infraestructura.
  - Compatibilidad simultánea con Vercel sin tener que modificar el código ni la configuración.
* **A tener en cuenta**:
  - Las características dinámicas de servidor de Next.js (como Server Actions que dependan de backend persistente o API routes en runtime) no aplican en exportación estática; toda la interactividad se ejecuta en el cliente (como el estado de pestañas del terminal o el cambio de tema).
