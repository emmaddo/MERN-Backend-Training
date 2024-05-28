FROM node:latest as builder

WORKDIR /usr/src/backend-api

COPY package*.json ./

RUN npm install -g nodemon

RUN npm install

COPY . .

EXPOSE 9999

CMD [ "nodemon", "src/Server.ts" ]