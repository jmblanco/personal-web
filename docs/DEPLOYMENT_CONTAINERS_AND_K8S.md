# Guía de Despliegue en Contenedores & Kubernetes

Esta guía detalla cómo compilar la imagen de contenedor OCI y desplegar la aplicación mediante **Docker**, **Docker Compose**, **Helm** y **Kustomize**.

---

## 🐳 1. Imagen de Contenedor OCI (Docker)

El [`Dockerfile`](../Dockerfile) utiliza una estrategia **multi-stage build**:
1. `deps`: Instala dependencias con `npm ci` sobre `node:22-alpine`.
2. `builder`: Compila el sitio estático (`out/`) mediante `npm run build`.
3. `runner`: Sirve el contenido con **`nginxinc/nginx-unprivileged:alpine-slim`** (UID 101, sin root, puerto 8080) aplicando el Principio de Mínimo Privilegio (PoLP).

### Compilar la imagen localmente:
```bash
docker build -t personal-web:latest .
```

Si deseas compilarla con una subruta (ej. para un path de reverse proxy):
```bash
docker build --build-arg NEXT_PUBLIC_BASE_PATH="/mi-subruta" -t personal-web:latest .
```

### Ejecutar con Docker:
```bash
docker run -d --name personal-web -p 8080:8080 personal-web:latest
```
Abre [http://localhost:8080](http://localhost:8080).

### Ejecutar con Docker Compose:
El repositorio incluye [`docker-compose.yml`](../docker-compose.yml):
```bash
docker compose up -d
```
Para ver los logs o detenerlo:
```bash
docker compose logs -f
docker compose down
```

---

## ☸️ 2. Despliegue en Kubernetes con Helm

En [`deploy/helm/personal-web/`](../deploy/helm/personal-web/) dispones de un Chart de producción desacoplado de cualquier registro concreto:
- Configurable mediante tu propio archivo `values.yaml` o flags `--set`.
- Políticas de seguridad estrictas (`runAsNonRoot: true`, `readOnlyRootFilesystem`, `capabilities.drop: [ALL]`).
- Probes HTTP (`/healthz`).
- Ingress tipado con TLS automático vía Cert-Manager opcional.

### Instalación con Helm especificando tu imagen y dominio:

```bash
# 1. Probar renderizado de templates localmente (Dry Run)
helm template personal-web ./deploy/helm/personal-web \
  --set image.repository="mi-registro.com/mi-usuario/personal-web"

# 2. Instalar o actualizar en el clúster
helm upgrade --install personal-web ./deploy/helm/personal-web \
  --namespace web \
  --create-namespace \
  --set image.repository="mi-registro.com/mi-usuario/personal-web" \
  --set image.tag="v1.0.0" \
  --set ingress.enabled=true \
  --set ingress.hosts[0].host="mi-dominio.com" \
  --set ingress.tls[0].hosts[0]="mi-dominio.com" \
  --set ingress.tls[0].secretName="personal-web-tls"
```

### Personalizar valores con archivo propio:
Copia `deploy/helm/personal-web/values.yaml` a `my-values.yaml`, define tu `repository`, réplicas e Ingress, y ejecuta:
```bash
helm upgrade --install personal-web ./deploy/helm/personal-web -f my-values.yaml -n web
```

---

## 🎯 3. Despliegue con Kustomize (GitOps-Ready)

En [`deploy/kustomize/`](../deploy/kustomize/) tienes disponible una estructura base/overlays compatible con **ArgoCD** y **Flux**:

```text
deploy/kustomize/
├── base/
│   ├── kustomization.yaml
│   └── resources.yaml      # Deployment, Service e Ingress base
└── overlays/
    └── production/
        └── kustomization.yaml # Parches de réplicas, tag de imagen, TLS y dominio
```

### Probar el manifiesto generado:
```bash
kubectl kustomize deploy/kustomize/overlays/production
```

### Aplicar directamente al clúster:
```bash
kubectl apply -k deploy/kustomize/overlays/production
```

---

## 🩺 Endpoints y Observabilidad

El contenedor expone un endpoint nativo de comprobación de salud en `/healthz`:
```bash
curl -I http://localhost:8080/healthz
# HTTP/1.1 200 OK
# Content-Type: text/plain
```
Este endpoint es utilizado tanto por el `HEALTHCHECK` del Dockerfile como por los `livenessProbe` y `readinessProbe` de Kubernetes.
