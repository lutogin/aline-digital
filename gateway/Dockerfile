FROM node:14-alpine

WORKDIR /gateway

COPY . /gateway

RUN yarn install

EXPOSE 3000

CMD yarn start:dev
