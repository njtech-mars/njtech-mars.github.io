FROM node:slim AS builder
WORKDIR /app
COPY . .
RUN npm i && npm i -D @sveltejs/adapter-static && sed -i 's/adapter-auto/adapter-static/' svelte.config.js && npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html