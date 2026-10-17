---
name: version-bump
description: Procedimiento disciplinado para incrementar versiones del proyecto (SemVer) sincronizando todos los ficheros de metadata, charts y changelog.
---

# Procedimiento de Incremento de Versión (Version Bump)

Este procedimiento garantiza que ante cualquier cambio de versión (mayor, menor o parche), todos los puntos de verdad del repositorio se mantengan 100% consistentes.

---

## 📋 Checklist de Ficheros a Actualizar

Cuando se incremente una versión (ej. de `1.0.0` a `1.1.0`), **ES OBLIGATORIO** actualizar en bloque los siguientes ficheros:

1. **`package.json`**:
   - Campo `"version": "X.Y.Z"`.
2. **`package-lock.json`**:
   - Campo `"version": "X.Y.Z"` y bloque de `"packages": { "": { "version": "X.Y.Z" } }` (ejecutar `npm.cmd install --package-lock-only` si aplica).
3. **`CHANGELOG.md`**:
   - Crear una nueva sección bajo la cabecera con formato:
     ```markdown
     ## [X.Y.Z] - AAAA-MM-DD

     ### Added | Changed | Deprecated | Removed | Fixed | Security
     - Descripción concisa de cambios notables.
     ```
   - Mantener orden cronológico inverso.
4. **`deploy/helm/personal-web/Chart.yaml`**:
   - `version: X.Y.Z` (versión del Chart).
   - `appVersion: "X.Y.Z"` (versión de la aplicación empaquetada).
5. **Git Tag & Release**:
   - Tag anotado `vX.Y.Z`.
   - Release en GitHub vinculada al tag con el extracto correspondiente del `CHANGELOG.md`.

---

## 🧭 Criterio SemVer (Semantic Versioning)

- **MAJOR (`X.0.0`)**: Cambios incompatibles hacia atrás (breaking changes en el modelo de datos de `content/` o reestructuración de rutas).
- **MINOR (`1.Y.0`)**: Nuevas funcionalidades o vistas retrocompatibles (ej. nueva pestaña en el terminal o nueva sección en la vista ejecutiva).
- **PATCH (`1.0.Z`)**: Corrección de bugs o ajustes cosméticos/documentales retrocompatibles.

---

## 🛠️ Flujo de Ejecución Paso a Paso

1. **Verificar estado de compilación previo**:
   ```bash
   npm.cmd run build
   ```
2. **Actualizar números de versión** en `package.json` y `deploy/helm/personal-web/Chart.yaml`.
3. **Redactar notas en `CHANGELOG.md`** categorizando en Added, Changed, Fixed, etc.
4. **Verificar consistencia**:
   Comprobar que no queden referencias a versiones anteriores en los ficheros indicados.
5. **Crear commit y Tag**:
   ```bash
   git commit -m "chore(release): bump version to vX.Y.Z"
   git tag -a vX.Y.Z -m "Release vX.Y.Z"
   ```
