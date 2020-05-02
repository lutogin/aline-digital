import express from 'express';
import Gateway from 'micromq/gateway';
import {
  PORT,
  RABBITMQ_URL,
} from '../config';

const app = express();

const gateway = new Gateway({
  microservices: ['users'],
  rabbit: {
    url: RABBITMQ_URL,
  },
});

app.use(gateway.middleware());

app.get([
  '/friends',
  '/status',
], async (req, res) => {
  await res.delegate('users');
});

app.listen(PORT);
