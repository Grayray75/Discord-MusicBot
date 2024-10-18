FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install --omit=dev
RUN npm run deploy
CMD ["node", "start"]
