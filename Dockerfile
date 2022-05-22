FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 8081
CMD [ "node", "index.js" ]