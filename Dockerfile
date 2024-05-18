FROM node:20-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install --omit=dev --silent
RUN npm run deploy
CMD [ "node", "index.js" ]
