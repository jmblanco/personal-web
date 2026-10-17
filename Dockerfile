# syntax=docker/dockerfile:1

# -----------------------------------------------------------------------------
# Fase 1: Instalación de dependencias (Dependencies)
# -----------------------------------------------------------------------------
FROM node:22-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# -----------------------------------------------------------------------------
# Fase 2: Compilación de la aplicación estática (Builder)
# -----------------------------------------------------------------------------
FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Argumento opcional para despliegues bajo subruta (ej. /personal-web)
ARG NEXT_PUBLIC_BASE_PATH=""
ENV NEXT_PUBLIC_BASE_PATH=$NEXT_PUBLIC_BASE_PATH
ENV NODE_ENV=production

RUN npm run build

# -----------------------------------------------------------------------------
# Fase 3: Runtime de producción con NGINX Unprivileged (Alpine Slim)
# -----------------------------------------------------------------------------
FROM nginxinc/nginx-unprivileged:alpine-slim AS runner

# Metadatos OCI estándar
LABEL org.opencontainers.image.title="Personal Web / Digital Hub" \
      org.opencontainers.image.description="Minimalist, high-performance tech space and portfolio template built with Next.js and Tailwind CSS" \
      org.opencontainers.image.licenses="MIT"

# Copiar configuración externa y cabeceras de seguridad de NGINX
COPY --chown=101:101 deploy/docker/nginx/security-headers.conf /etc/nginx/security-headers.conf
COPY --chown=101:101 deploy/docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# Copiar el bundle estático generado por Next.js
COPY --from=builder --chown=101:101 /app/out /usr/share/nginx/html

USER 101

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
