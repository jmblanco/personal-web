# 0001. Arquitectura Base y Principios de Ingeniería

* **Fecha**: 2026-10-17
* **Estado**: Aceptado

---

## Contexto

El proyecto **Web Personal** necesita una estructura técnica ágil, rápida de cargar, mantenible y optimizada para ser desarrollada en colaboración con modelos de IA (Antigravity). Con frecuencia, los asistentes de IA caen en errores como la sobreingeniería (crear demasiadas capas de abstracción innecesarias) o la desalineación de expectativas (construir algo distinto a lo que el desarrollador imaginaba).

---

## Decisión

Adoptamos los estándares de:
1. **Andrej Karpathy**:
   - Filosofía KISS (*Keep It Simple, Stupid*): menos capas de abstracción, código legible y autocontenido.
   - Verificación estricta contra la realidad (*Ground Truth*): comprobación en terminal y corredores de pruebas antes de confirmar cambios.
   - Diagnóstico *repro-first*: reproducir fallos antes de aplicar correcciones.

2. **Matt Pocock**:
   - Alineación previa mediante preguntas estructuradas (*Grilling*).
   - Lenguaje ubicuo documentado en [`GLOSSARY.md`](../../GLOSSARY.md).
   - Revisión de código en dos ejes: fidelidad a la especificación y estándares limpios de ingeniería.

3. **Skills Modulares en Antigravity**:
   - Disponibles en `.agents/skills/` con carga progresiva para no saturar la ventana de contexto del agente.

---

## Consecuencias

* **Positivas**:
  - Desarrollo predecible con mínima tasa de alucinación y errores.
  - El contexto del modelo se mantiene limpio y libre de ruido.
  - La base de código resultante es simple, testeable y fácil de auditar.
* **A tener en cuenta**:
  - Requiere responder preguntas de alineación antes de lanzarse a escribir funcionalidades grandes (ahorra tiempo neto).
