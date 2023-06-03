FROM node:18.15.0-slim AS builder
WORKDIR /app
COPY . .
RUN npm i && npm i -D @sveltejs/adapter-static
RUN sed -i '9 i <script async defer data-website-id="998e8a71-ea37-4922-817a-7bbd5da79d11" src="https://umami.online.njtech.edu.cn/umami.js"></script>' src/app.html && sed -i 's/adapter-vercel/adapter-static/' svelte.config.js && npm run build

FROM nginx:stable-alpine-slim
COPY --from=builder /app/build /usr/share/nginx/html