FROM node:12.16.1-alpine

WORKDIR /services/users-service

COPY . /services/users-service

RUN yarn install

EXPOSE 3001

CMD ["yarn", "start:dev"]
