FROM node:slim
WORKDIR /app
COPY . .
RUN npm install -ci
RUN npm run build
CMD ["npm", "run", "preview"]