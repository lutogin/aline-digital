import dotenv from 'dotenv-safe';

dotenv.config();

const {
  PORT,
  RABBITMQ_HOST,
  RABBITMQ_PORT,
  REDIS_HOST,
  REDIS_PORT,
} = process.env;

const RABBITMQ_URL = `amqp://guest:guest@${RABBITMQ_HOST}:${RABBITMQ_PORT}`;
const REDIS_URL = `redis://${REDIS_HOST}:${REDIS_PORT}`;

export {
  PORT,
  RABBITMQ_URL,
  REDIS_URL,
};
