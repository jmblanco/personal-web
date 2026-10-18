# Guía de Contribución (Contributing Guidelines)

¡Gracias por tu interés en colaborar en **Personal Web / Digital Hub Template**! Este proyecto es 100% de código abierto bajo licencia [MIT](./LICENSE) y está diseñado para ser limpio, modular y fácilmente extensible por cualquier desarrollador.

---

## 🧭 Principios de Desarrollo

Antes de realizar cambios, ten en cuenta nuestros principios de desarrollo (inspirados en Karpathy y Pocock):
1. **Simplicidad ante todo:** No introduzcas dependencias de terceros si se puede resolver con pocas líneas de código nativo o utilidades estándar de Tailwind CSS.
2. **Desacoplamiento de contenido:** El código de componentes en `components/` debe ser puramente presentacional o interactivo. Todos los datos, textos e información deben residir en `content/`.
3. **TypeScript estricto:** Prohibido el uso de `any`. Todas las interfaces y props deben estar fuertemente tipadas.
4. **Verificación local obligatoria (Ground Truth):** Comprueba que `npm run build` o `npm.cmd run build` compile sin advertencias ni errores antes de crear tu PR.

---

## 🛠️ Flujo de Trabajo para Colaborar

### 1. Preparar tu entorno
1. Haz un **Fork** de este repositorio en GitHub.
2. Clona tu copia localmente:
   ```bash
   git clone https://github.com/TU_USUARIO/personal-web.git
   cd personal-web
   ```
3. Crea una rama dedicada para tu cambio a partir de `main`:
   ```bash
   git checkout -b feature/nombre-de-la-mejora
   ```
4. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

### 2. Estructura de Desarrollo y Buenas Prácticas
- **Componentes (`components/`)**: Deben ser funcionales, declarativos y recibir los datos vía props o leyendo la configuración de `content/`.
- **Estilos**: Utiliza clases utilitarias de Tailwind CSS v4. Mantén soporte para modo claro y oscuro (`dark:*`) y respeta el contraste de accesibilidad WCAG AA+.
- **Documentación**: Si tu cambio altera el comportamiento o la forma de configurar el proyecto, actualiza la documentación en [`docs/`](./docs/) o añade un nuevo ADR en [`docs/adr/`](./docs/adr/).

### 3. Validar localmente (Fase de Verificación)
Ejecuta la compilación de producción y el linter antes de hacer commit:
```bash
# Compilación completa y chequeo de tipos TypeScript
npm run build

# Comprobación de estándares de código
npm run lint
```
Ambos comandos deben finalizar con código de salida 0.

### 4. Enviar tu Pull Request
1. Haz commit de tus cambios utilizando mensajes semánticos y descriptivos:
   ```bash
   git commit -m "feat(terminal): añade soporte para comando clear y exportación de logs"
   ```
2. Sube la rama a tu fork en GitHub:
   ```bash
   git push origin feature/nombre-de-la-mejora
   ```
3. Abre un **Pull Request** hacia la rama `main` del repositorio original.
4. En la descripción del PR, explica detalladamente:
   - ¿Qué problema resuelve o qué funcionalidad agrega?
   - ¿Cómo se ha verificado el cambio localmente?
   - Si incluye cambios visuales, añade capturas de pantalla de la vista en modo claro y modo oscuro.

---

## 🐛 Reportar Bugs y Sugerencias de Mejora

Si encuentras algún fallo o tienes una idea para mejorar la plantilla:
- Revisa las *Issues* abiertas del repositorio para evitar duplicados.
- Abre una nueva *Issue* detallando:
  - Comportamiento esperado vs comportamiento observado.
  - Pasos exactos para reproducirlo.
  - Entorno (navegador, versión de Node.js, sistema operativo).

---

## 📄 Licencia

Al contribuir a este repositorio, aceptas que tus contribuciones se distribuyan bajo los términos de la [Licencia MIT](./LICENSE).
