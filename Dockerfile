FROM node:slim
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD ["npm", "run", "preview", '--', '--host']