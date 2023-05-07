FROM node:18.15.0-slim AS builder
WORKDIR /app
COPY . .
RUN npm i && npm i -D @sveltejs/adapter-static && sed -i 's/adapter-vercel/adapter-static/' svelte.config.js && npm run build

FROM nginx:stable-alpine-slim
COPY --from=builder /app/build /usr/share/nginx/html