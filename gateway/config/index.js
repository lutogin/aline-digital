import dotenv from 'dotenv-safe';

dotenv.config();

const { PORT, RABBITMQ_HOST } = process.env;

const RABBITMQ_URL = `amqp://guest:guest@${RABBITMQ_HOST}:5672`;

export { PORT, RABBITMQ_URL };
