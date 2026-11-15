FROM node:22-alpine AS builder
WORKDIR /app

ARG PUBLIC_SITE_URL=https://example.com
ARG PUBLIC_WHATSAPP_NUMBER=628122586867
ENV PUBLIC_SITE_URL=$PUBLIC_SITE_URL
ENV PUBLIC_WHATSAPP_NUMBER=$PUBLIC_WHATSAPP_NUMBER

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS runner
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
