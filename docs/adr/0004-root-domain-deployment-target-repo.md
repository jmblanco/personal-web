# 0004. Despliegue en Dominio Raíz (jmblanco.github.io) Mediante Repositorio de Destino y Deploy Key

* **Fecha**: 2026-10-19
* **Estado**: Aceptado

---

## Contexto

Por convención de GitHub Pages:
- Los sitios de usuario (`<usuario>.github.io`) se publican en la raíz `https://<usuario>.github.io/` exclusivamente desde el repositorio que lleve exactamente ese nombre (`<usuario>/<usuario>.github.io`).
- Cualquier otro repositorio de proyecto (como `personal-web`) se publica en `https://<usuario>.github.io/<repositorio>/`, obligando a configurar un `basePath`.

Se deseaba disponer de la web directamente en la URL raíz `https://jmblanco.github.io/`, manteniendo al mismo tiempo el repositorio de código fuente, historial de desarrollo, componentes y dependencias desacoplados y organizados bajo `personal-web`.

---

## Alternativas Evaluadas

1. **Renombrar `personal-web` a `jmblanco.github.io`**:
   - *Pros*: Todo en un único repositorio sin sincronización adicional.
   - *Contras*: Acopla el nombre del proyecto de desarrollo al host específico de GitHub Pages.
2. **Crear repositorio satélite `jmblanco/jmblanco.github.io` y sincronizar estáticos vía CI**:
   - *Pros*: Separación de responsabilidades limpia (código fuente vs. artefactos compilados públicos), `personal-web` mantiene su identidad independiente y el sitio se sirve en la raíz limpia (`/`).
   - *Contras*: Requiere un canal de autenticación seguro entre repositorios (SSH Deploy Key).

---

## Decisión

Se opta por la **Alternativa 2**:
1. Creación del repositorio público `jmblanco/jmblanco.github.io` con la rama `main` configurada para servir GitHub Pages desde `/`.
2. Generación de un par de claves SSH dedicadas (Ed25519) bajo el principio de mínimo privilegio:
   - Clave pública registrada como **Deploy Key** con permisos de escritura exclusivamente en `jmblanco/jmblanco.github.io`.
   - Clave privada guardada como secreto de repositorio `DEPLOY_SSH_KEY` en `jmblanco/personal-web`.
3. Actualización del workflow de GitHub Actions ([`.github/workflows/deploy.yml`](../../.github/workflows/deploy.yml)) en `personal-web`:
   - Inyección de variables de perfil/carrera privadas si existen.
   - Compilación estática con `NEXT_PUBLIC_BASE_PATH=""` (para resolver assets y rutas desde la raíz `/`).
   - Publicación automatizada a `jmblanco/jmblanco.github.io` usando la acción probada `peaceiris/actions-gh-pages@v4`.

---

## Consecuencias

* **Positivas**:
  - La web queda servida limpiamente en `https://jmblanco.github.io/`.
  - El código fuente, issues, PRs y desarrollo continúan en `personal-web`.
  - Mínimo privilegio de seguridad: el token CI no tiene acceso global a la cuenta, únicamente a ese repositorio satélite.
* **A tener en cuenta**:
  - La rama `main` en `jmblanco.github.io` contendrá los artefactos estáticos generados por el pipeline, no el código fuente de Next.js.
