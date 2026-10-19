# 0004. Despliegue Bajo Demanda en jmblanco.github.io con Orquestación Desacoplada

* **Fecha**: 2026-10-19
* **Estado**: Aceptado

---

## Contexto

Por restricciones de GitHub Pages:
- Los sitios de usuario (`<usuario>.github.io`) se sirven en la raíz `https://<usuario>.github.io/` exclusivamente desde el repositorio que lleve exactamente ese nombre (`<usuario>/<usuario>.github.io`).
- El repositorio `personal-web` contiene el código fuente de la aplicación Next.js y funciona además como plantilla open-source reutilizable para otros desarrolladores.

Se identificaron dos necesidades clave:
1. **Evitar acoplamiento y fallos en forks**: Un workflow de despliegue en `personal-web` con secretos o repositorios destino fijos fallaría en rojo para cualquier usuario que haga fork del proyecto.
2. **Control de versiones y cadencia de release**: No todos los commits o cambios en `main` deben desplegarse a producción de inmediato. Se requiere poder servir versiones cerradas (tags SemVer como `v1.1.0`), ramas o revisiones específicas de forma explícita y bajo demanda.

---

## Decisión

Se adopta una arquitectura desacoplada de dos repositorios con despliegue nativo bajo demanda:

1. **`personal-web` (Repositorio de Código Fuente / Plantilla OSS)**:
   - Contiene únicamente el código fuente, configuración Next.js, dependencias y el workflow de CI ([`.github/workflows/ci.yml`](../../.github/workflows/ci.yml)) para validación de linter y compilación estática.
   - Cero lógica de despliegue a producción en este repositorio: limpio para forks y desarrolladores externos.
   - No requiere claves SSH ni permisos entre repositorios.

2. **`jmblanco/jmblanco.github.io` (Repositorio de Producción & Host de Pages)**:
   - Configurado con GitHub Pages en modo `build_type: workflow`.
   - Contiene el workflow de despliegue oficial `deploy.yml` accionado mediante `workflow_dispatch` con parámetro de entrada `ref` (por defecto `main`, o cualquier tag/release).
   - Realiza `checkout` del código público de `jmblanco/personal-web` en la referencia solicitada.
   - Inyecta los secretos de perfil/carrera custodiados de forma privada en este repositorio (`CUSTOM_PROFILE_B64`, `CUSTOM_CAREER_B64`).
   - Compila con `NEXT_PUBLIC_BASE_PATH=""` y publica mediante las acciones nativas `actions/upload-pages-artifact` y `actions/deploy-pages`.

---

## Consecuencias

* **Positivas**:
  - **Forks 100% seguros y funcionales**: Quien haga fork de `personal-web` no experimenta fallos de autenticación ni pipelines en rojo.
  - **Gobierno de Releases**: Capacidad de congelar versiones cerradas en `personal-web` (ej. `v1.1.0`) y promover a producción cuando se decida desde la interfaz de GitHub Actions de `jmblanco.github.io` o mediante GitHub CLI (`gh workflow run deploy.yml -R jmblanco/jmblanco.github.io -f ref=v1.1.0`).
  - **Sin claves SSH de larga duración**: Se prescinde por completo de deploy keys cruzadas; el workflow de Pages opera con permisos nativos de GitHub Actions en su propio host.
