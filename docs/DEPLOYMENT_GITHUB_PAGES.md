# Guía de Despliegue en GitHub Pages

Esta guía explica paso a paso cómo desplegar tu web personal en **GitHub Pages** de forma 100% gratuita y automatizada usando GitHub Actions.

---

## ⚡ Viabilidad y Funcionamiento Técnico

El proyecto está preparado de fábrica para **GitHub Pages**:
- **Exportación Estática (`output: "export"`)**: Next.js genera un bundle HTML/CSS/JS autocontenido en la carpeta `./out`.
- **Soporte de Subruta Automático**: Si tu repositorio se llama `personal-web`, GitHub Pages servirá la web en `https://<usuario>.github.io/personal-web/`. Nuestro archivo `next.config.ts` y el workflow de GitHub Actions detectan esta subruta automáticamente sin que tengas que editar código.
- **Sin flash de estilos ni 404**: Todos los assets y fuentes cargan de forma relativa o contextualizada al `basePath`.

---

## 🚀 Pasos para Activar GitHub Pages en tu Repositorio

### 1. Sube tu código a GitHub
Asegúrate de que tus cambios estén en la rama `main` de tu repositorio (sea fork o nuevo repositorio):
```bash
git push origin main
```

### 2. Configura los Permisos de GitHub Pages en el Repositorio
En tu repositorio de GitHub:
1. Ve a la pestaña **Settings** (Configuración).
2. En la barra lateral izquierda, selecciona **Pages** (dentro de la sección *Code and automation*).
3. En **Build and deployment > Source**, cambia la opción a:
   👉 **`GitHub Actions`** (en lugar de *"Deploy from a branch"*).

> [!NOTE]
> No necesitas seleccionar ninguna rama en esa pantalla. Al elegir **GitHub Actions**, GitHub delegará el proceso en el flujo existente en el repositorio ([`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml)).

### 3. Ejecutar el Despliegue
- El flujo se activará de forma automática en cada `push` a `main`.
- También puedes lanzarlo manualmente desde la pestaña **Actions** > seleccionando **Deploy to GitHub Pages** > **Run workflow**.

En aproximadamente 1 o 2 minutos, la acción completará el build y publicará tu web en la URL que aparecerá en la parte superior de la página de configuración de Pages:
```text
https://<tu-usuario>.github.io/<tu-repositorio>/
```

---

## 🌐 ¿Usar un Dominio Personalizado en GitHub Pages? (Opcional)

Si posees un dominio propio (por ejemplo `minombre.dev` o `tuweb.com`):
1. En **Settings > Pages > Custom domain**, introduce tu dominio.
2. Si usas dominio personalizado en la raíz de tu dominio, el `basePath` será `/`. El workflow lo gestionará automáticamente.
3. Activa la casilla **Enforce HTTPS**.
