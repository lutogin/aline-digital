FROM node:12.16.1-alpine

WORKDIR /gateway

COPY . /gateway

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start:dev"]
