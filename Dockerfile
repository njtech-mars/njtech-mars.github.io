FROM node:18-slim AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:stable-alpine-slim
COPY --from=builder /app/build /usr/share/nginx/html
