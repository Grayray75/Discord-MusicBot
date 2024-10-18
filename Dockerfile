FROM node:20-alpine
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --omit=dev

COPY . .
RUN npm run deploy

CMD ["npm", "start"]
