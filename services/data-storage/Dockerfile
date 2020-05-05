FROM node:14-alpine

WORKDIR /services/data-storage

COPY . /services/data-storage

RUN yarn install

EXPOSE 3001

# Wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait

CMD /wait && yarn start:dev
