FROM node:10.15.3-alpine as base

MAINTAINER DavidJm

RUN npm install -g apidoc

RUN npm install -g pm2

RUN pm2 install typescript

USER node

WORKDIR /app

FROM base as build

USER root

COPY . /app

RUN npm install

EXPOSE 3000

CMD ["sh", "-c", "npm run build-ts && npm run watch-server"]
